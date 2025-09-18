#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const urlLib = require('url');
const fs = require('fs');
const path = require('path');

const START_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const MAX_PAGES = parseInt(process.env.CRAWL_MAX_PAGES || '100', 10);

function isInternal(href, baseHost) {
  if (!href) return false;
  if (href.startsWith('#')) return false;
  try {
    const u = new URL(href, START_URL);
    return u.host === baseHost;
  } catch {
    return false;
  }
}

async function fetchPage(url) {
  try {
    const res = await axios.get(url, { timeout: 15000, validateStatus: () => true });
    return { status: res.status, html: res.data };
  } catch (e) {
    return { status: 0, html: '' };
  }
}

(async () => {
  const visited = new Set();
  const queue = [];
  const broken = [];

  const start = new URL(START_URL);
  visited.add(start.href);
  queue.push(start.href);

  while (queue.length && visited.size < MAX_PAGES) {
    const current = queue.shift();
    const { status, html } = await fetchPage(current);

    if (status !== 200) {
      broken.push({ url: current, status });
      continue;
    }
    const $ = cheerio.load(html);
    $('a[href]').each((_i, el) => {
      const href = $(el).attr('href');
      try {
        const abs = new URL(href, current).href;
        if (isInternal(abs, start.host) && !visited.has(abs)) {
          visited.add(abs);
          if (visited.size < MAX_PAGES) queue.push(abs);
        }
      } catch {}
    });
  }

  // Verify collected URLs
  const statuses = [];
  for (const url of Array.from(visited)) {
    const { status } = await fetchPage(url);
    if (status !== 200) broken.push({ url, status });
    statuses.push({ url, status });
  }

  const outDir = path.join(process.cwd(), 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'link-crawl.json');
  fs.writeFileSync(outPath, JSON.stringify({ start: START_URL, total: visited.size, broken, statuses }, null, 2));
  console.log(`Crawl complete. URLs: ${visited.size}, broken: ${broken.length}. Report: ${outPath}`);
})();
=======
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SCAN_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-sentinel');

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'api' || entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function extractInternalLinks(text) {
  const links = new Set();
  // Match href="/path" or href='/path' or href={`/path`} or <Link href="/path">
  const regexes = [
    /href\s*=\s*"(\/[^"]*)"/g,
    /href\s*=\s*'(\/[^']*)'/g,
    /href\s*=\s*`(\/[^"]*?)`/g,
    /href\s*=\s*\{\s*`(\/[^"]*?)`\s*\}/g,
    /href\s*=\s*\{\s*"(\/[^"]*?)"\s*\}/g,
    /href\s*=\s*\{\s*'(\/[^']*?)'\s*\}/g,
    /<Link[^>]*?href=\s*"(\/[^"]*)"/g,
    /<Link[^>]*?href=\s*'([^']*)'/g,
  ];
  for (const rx of regexes) {
    let m;
    while ((m = rx.exec(text)) !== null) {
      const candidate = (m[1] || '').trim();
      if (!candidate) continue;
      if (candidate.startsWith('/.netlify/functions')) continue; // not a page route
      if (candidate.startsWith('/api')) continue; // not a page route
      if (candidate.startsWith('http')) continue;
      if (candidate.startsWith('#')) continue;
      links.add(candidate.replace(/\/?#.*$/, '').replace(/\/$/, '')); // normalize trailing slash
    }
  }
  return Array.from(links);
}

function getExistingRoutes() {
  // Similar to scripts/generate-sitemap.js route discovery
  const PAGES_DIR = path.join(ROOT, 'pages');
  function scan(dir, base = '') {
    if (!fs.existsSync(dir)) return [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const routes = [];
    for (const e of entries) {
      if (e.name.startsWith('_')) continue;
      if (e.isDirectory()) {
        if (e.name === 'api') continue;
        routes.push(...scan(path.join(dir, e.name), base + '/' + e.name));
      } else if (e.isFile()) {
        if (!e.name.match(/\.(tsx|jsx|mdx|js|ts)$/)) continue;
        const name = e.name.replace(/\.(tsx|jsx|mdx|js|ts)$/, '');
        if (name === 'index') routes.push(base || '/');
        else if (!name.startsWith('[')) routes.push(base + '/' + name);
      }
    }
    return routes;
  }
  return Array.from(new Set(scan(PAGES_DIR).map(r => r.replace(/\/$/, '')))).sort();
}

async function main() {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const allLinks = new Set();
  const sources = [];
  for (const dir of SCAN_DIRS) {
    for (const file of walkFiles(dir)) {
      sources.push(file);
      let text = '';
      try { text = fs.readFileSync(file, 'utf8'); } catch { continue; }
      for (const l of extractInternalLinks(text)) allLinks.add(l);
    }
  }
  const links = Array.from(allLinks).sort();
  const routes = getExistingRoutes();
  const missing = links.filter((l) => !routes.includes(l));
  const data = {
    generatedAt: new Date().toISOString(),
    totalLinks: links.length,
    totalRoutes: routes.length,
    missingRoutes: missing,
    links,
    routes,
    scannedFiles: sources,
  };
  const latestPath = path.join(REPORT_DIR, 'internal-links-latest.json');
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const stamped = path.join(REPORT_DIR, `internal-links-${stamp}.json`);
  fs.writeFileSync(latestPath, JSON.stringify(data, null, 2));
  fs.writeFileSync(stamped, JSON.stringify(data, null, 2));
  console.log(`Internal links: ${links.length}. Routes: ${routes.length}. Missing: ${missing.length}. Report: ${latestPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
>>>>>>> origin/auto/autonomy-17186719616
