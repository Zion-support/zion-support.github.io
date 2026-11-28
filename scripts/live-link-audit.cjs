const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');
const { format } = require('node:util');

const BASE = process.env.BASE || 'https://ziontechgroup.com';
const CONCURRENCY = 6;
const DELAY_MS = 120;
const MAX_REPORTED_BROKEN_LINKS = 200;
const MIN_SUCCESS_STATUS = 200;
const MIN_ERROR_STATUS = 400;

const docsDir = path.join(__dirname, '..', 'docs');
const rootDir = path.join(__dirname, '..');
const reportPath = path.join(__dirname, 'reports', 'live-link-audit.json');

const htmlFiles = [];
function walk(dir, baseDir) {
  try {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === 'out' || item.name === '_next') {
        continue;
      }
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        walk(full, baseDir);
      }
      else if (item.name.endsWith('.html')) {
        htmlFiles.push({ file: full, baseDir });
      }
    }
  } catch {
    // An unavailable directory does not stop discovery in other directories.
  }
}
walk(docsDir, docsDir);
walk(rootDir, rootDir);

const EXTERNAL_HOSTS = new Set(['www.googletagmanager.com','www.google-analytics.com','www.linkedin.com','twitter.com','github.com','calendly.com','fonts.googleapis.com','fonts.gstatic.com','cdn.jsdelivr.net','unpkg.com','cdnjs.cloudflare.com']);
const PATH_ALIASES = new Map([
  ['/ai/demo/', '/ai-lab/'],
  ['/new-ai-services/', '/docs/new-ai-services/']
]);
const IGNORE_PATHS = new Set(['/base.css', '/prettify.css', '/favicon.png', 'base.css', 'prettify.css', 'favicon.png']);
const TEMPLATE_GUARD = /\$\{|\{SITE\}/i;

function isExternal(link) {
  try {
    const u = new URL(link, BASE);
    if (u.host !== new URL(BASE).host) {
      return true;
    }
    if (EXTERNAL_HOSTS.has(u.host)) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
}

function resolveLink(link) {
  if (!link.startsWith('/')) {
    return link;
  }
  let pathname = link.split('?', 1)[0].split('#', 1)[0].replace(/\/+$/, '') + '/';
  if (PATH_ALIASES.has(pathname)) {
    const alias = PATH_ALIASES.get(pathname);
    const suffix = link.slice(pathname.length - 1);
    return alias + suffix;
  }
  return link;
}

function toTarget(link) {
  try {
    link = resolveLink(link);
    const resolved = new URL(link, BASE);
    if (resolved.host !== new URL(BASE).host) {
      return null;
    }
    let rel = resolved.pathname.split('?', 1)[0].split('#', 1)[0].replace(/^\/+/, '');
    if (!rel) {
      rel = 'index.html';
    }
    const isDir = rel.endsWith('/');
    const fsRel = isDir ? `${rel}index.html` : rel;
    let live = `${BASE.replace(/\/$/, '')}/${fsRel}`;
    if (isDir) {
      const candidate = `${BASE.replace(/\/$/, '')}/${rel}`;
      if (candidate !== live) {
        live = candidate;
      }
    }
    return live;
  } catch {
    return null;
  }
}

function checkUrl(target) {
  return new Promise((resolve) => {
    const req = https.request(target, { method: 'HEAD', timeout: 10000 }, (res) => resolve(res.statusCode));
    req.on('error', () => resolve(0));
    req.on('timeout', () => { req.destroy(); resolve(0); });
    req.end();
  });
}

const checked = new Map();
const broken = [];

async function run() {
  const queue = [];
  const hrefRegex = /href=["']([^"']+)["']/gi;
  const seen = new Set();
  for (const item of htmlFiles) {
    const content = fs.readFileSync(item.file, 'utf8');
    let m;
    while ((m = hrefRegex.exec(content)) !== null) {
      const link = m[1];
      if (!link || link.startsWith('javascript:') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#') || link.startsWith('/_next/') || link.startsWith('_next/')) {
        continue;
      }
      if (TEMPLATE_GUARD.test(link)) {
        continue;
      }
      if (isExternal(link)) {
        continue;
      }
      const pathPart = link.split('?', 1)[0].split('#', 1)[0].replace(/\/+$/, '');
      if (IGNORE_PATHS.has(pathPart)) {
        continue;
      }
      const target = toTarget(link);
      if (!target) {
        continue;
      }
      const key = target;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      queue.push(key);
    }
  }
  const active = [];
  for (let i = 0; i < Math.min(CONCURRENCY, queue.length); i++) {
    active.push(processChunk(queue, i, CONCURRENCY));
  }
  try {
    await Promise.all(active);
  } catch (error) {
    throw new Error('Live link checks did not finish', { cause: error });
  }

  const report = { generatedAt: new Date().toISOString(), base: BASE, totalFiles: htmlFiles.length, totalChecked: checked.size, brokenCount: broken.length, broken: broken.slice(0, MAX_REPORTED_BROKEN_LINKS) };
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  const summary = { totalFiles: htmlFiles.length, totalChecked: checked.size, brokenCount: broken.length, reportPath };
  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  if (broken.length) {
    process.stdout.write(`${format('First broken:', broken[0])}\n`);
  }
}

async function processChunk(items, start, step) {
  for (let i = start; i < items.length; i += step) {
    const target = items[i];
    if (checked.has(target)) {
      continue;
    }
    try {
      const status = await checkUrl(target);
      checked.set(target, status);
      if (status < MIN_SUCCESS_STATUS || status >= MIN_ERROR_STATUS) {
        broken.push({ target, status });
      }
      await new Promise(resolve => setTimeout(resolve, DELAY_MS));
    } catch (error) {
      throw new Error(`Could not complete check for ${target}`, { cause: error });
    }
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
