#!/usr/bin/env node
/**
 * One-shot internal link auditor for Next.js App Router.
 * Builds known routes from app page.tsx files (+ public static HTML),
 * then scans href="/..." across app/ and components/.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const COMPONENTS = path.join(ROOT, 'components');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(ROOT, 'scripts/reports/broken-internal-links-latest.json');

const IGNORE_DIR = new Set([
  'node_modules',
  '.next',
  'out',
  'dist',
  'build',
  '.git',
  'venv',
  '__pycache__',
  'coverage',
]);

const STATIC_FILES = new Set([
  '/sitemap.xml',
  '/robots.txt',
  '/favicon.ico',
  '/favicon.png',
  '/manifest.json',
  '/manifest.webmanifest',
  '/feed.xml',
  '/rss.xml',
  '/llms.txt',
  '/sitemap-index.xml',
]);

const BROAD_OK = [
  '/_next/',
  '/api/',
  '/images/',
  '/icons/',
  '/assets/',
  '/fonts/',
  '/static/',
];

function walk(dir, pred, acc = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const ent of entries) {
    if (IGNORE_DIR.has(ent.name) || ent.name.startsWith('.')) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, pred, acc);
    else if (pred(ent.name, full)) acc.push(full);
  }
  return acc;
}

function routeFromPage(pagePath) {
  const rel = path.relative(APP, path.dirname(pagePath)).replace(/\\/g, '/');
  const parts = rel
    .split('/')
    .filter((p) => p && !p.startsWith('(') && !p.startsWith('@') && !p.startsWith('['));
  // Skip dynamic routes for exact matching; they'll be handled separately
  const isDynamic = rel.split('/').some((p) => p.startsWith('['));
  let route = '/' + parts.join('/');
  if (route === '/') return { route: '/', dynamic: false };
  return { route, dynamic: isDynamic };
}

function normalize(href) {
  let h = href.split('?')[0].split('#')[0];
  if (!h) return '/';
  // Decode lightly
  try {
    h = decodeURIComponent(h);
  } catch {}
  if (h.length > 1 && h.endsWith('/')) h = h.slice(0, -1);
  return h || '/';
}

function addRoute(set, route) {
  if (!route) return;
  const n = normalize(route);
  set.add(n);
  set.add(n + '/');
  if (n !== '/') set.add(n);
}

console.time('build-routes');
const known = new Set(STATIC_FILES);
const dynamicPrefixes = [];

const pages = walk(APP, (name) => name === 'page.tsx' || name === 'page.ts' || name === 'page.jsx');
for (const p of pages) {
  const { route, dynamic } = routeFromPage(p);
  if (dynamic) {
    // e.g. /blog/[slug] -> prefix /blog/
    const prefix = route.endsWith('/') ? route : route + '/';
    // For [slug] at root of a segment, the parent is the prefix
    const parent = route === '/' ? '/' : route;
    dynamicPrefixes.push(parent.endsWith('/') ? parent : parent + '/');
    addRoute(known, parent);
  } else {
    addRoute(known, route);
  }
}

// public HTML routes
const htmlFiles = walk(PUBLIC, (name) => name === 'index.html' || name.endsWith('.html'));
for (const f of htmlFiles) {
  let rel = path.relative(PUBLIC, f).replace(/\\/g, '/');
  if (rel.endsWith('/index.html')) rel = rel.slice(0, -'/index.html'.length);
  else if (rel.endsWith('.html')) rel = rel.slice(0, -'.html'.length);
  addRoute(known, '/' + rel);
}

// Also accept root-level static HTML that gets deployed (legacy)
for (const name of ['index.html', '404.html']) {
  if (fs.existsSync(path.join(ROOT, name))) addRoute(known, '/');
}

console.timeEnd('build-routes');
console.log('pages', pages.length, 'known', known.size, 'dynamicPrefixes', dynamicPrefixes.length);

const HREF_RE =
  /(?:href|to|canonical|url)\s*[:=]\s*['"`](\/[^'"`?#]*)(?:[?#][^'"`]*)?['"`]/gi;
const LINK_HREF_RE = /href=\{?['"`](\/[^'"`]*)['"`]/gi;
const PLAIN_HREF = /href=["'](\/[^"']+)["']/gi;

const scanRoots = [APP, COMPONENTS].filter(fs.existsSync);
const scanFiles = [];
for (const root of scanRoots) {
  walk(
    root,
    (name) =>
      name.endsWith('.tsx') ||
      name.endsWith('.ts') ||
      name.endsWith('.jsx') ||
      name.endsWith('.js') ||
      name.endsWith('.json') ||
      name.endsWith('.mdx'),
    scanFiles
  );
}

// Also scan key data files
for (const extra of [
  'app/data',
  'data',
  'content',
].map((p) => path.join(ROOT, p))) {
  if (fs.existsSync(extra)) {
    walk(
      extra,
      (name) =>
        name.endsWith('.tsx') ||
        name.endsWith('.ts') ||
        name.endsWith('.json') ||
        name.endsWith('.md'),
      scanFiles
    );
  }
}

const uniqueFiles = [...new Set(scanFiles)];
const brokenMap = new Map(); // normalized -> {href, files:Set}
let linksFound = 0;

function isKnown(normalized) {
  if (known.has(normalized) || known.has(normalized + '/')) return true;
  if (STATIC_FILES.has(normalized)) return true;
  if (BROAD_OK.some((p) => normalized.startsWith(p.slice(0, -1)) || normalized.startsWith(p)))
    return true;
  // file extensions that may live in public
  if (/\.(xml|txt|json|ico|png|jpg|jpeg|webp|svg|gif|pdf|css|js|map|woff2?)$/i.test(normalized)) {
    const pub = path.join(PUBLIC, normalized.replace(/^\//, ''));
    if (fs.existsSync(pub)) return true;
    if (fs.existsSync(path.join(ROOT, normalized.replace(/^\//, '')))) return true;
  }
  for (const pref of dynamicPrefixes) {
    if (normalized.startsWith(pref) || (normalized + '/').startsWith(pref)) return true;
  }
  return false;
}

console.time('scan-links');
for (const file of uniqueFiles) {
  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  // Skip huge generated service catalogs partially if needed — still scan
  const found = new Set();
  for (const re of [HREF_RE, LINK_HREF_RE, PLAIN_HREF]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      found.add(m[1]);
    }
  }
  // Also catch Link href={`/path`} without template vars
  const brace = /href=\{`(\/[^`$]*)`\}/g;
  let m;
  while ((m = brace.exec(text)) !== null) found.add(m[1]);

  for (const href of found) {
    if (
      !href.startsWith('/') ||
      href.startsWith('//') ||
      href.includes('${') ||
      href.includes('{')
    )
      continue;
    linksFound++;
    const normalized = normalize(href);
    if (isKnown(normalized)) continue;
    if (!brokenMap.has(normalized)) {
      brokenMap.set(normalized, { href: normalized, files: new Set() });
    }
    brokenMap.get(normalized).files.add(path.relative(ROOT, file).replace(/\\/g, '/'));
  }
}
console.timeEnd('scan-links');

const broken = [...brokenMap.values()]
  .map((b) => ({
    href: b.href,
    occurrences: b.files.size,
    files: [...b.files].sort().slice(0, 12),
  }))
  .sort((a, b) => b.occurrences - a.occurrences || a.href.localeCompare(b.href));

const report = {
  timestamp: new Date().toISOString(),
  pages: pages.length,
  known_routes: known.size,
  scanned_files: uniqueFiles.length,
  links_found: linksFound,
  broken_count: broken.length,
  broken_links: broken,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ broken_count: broken.length, links_found: linksFound, out: OUT }, null, 2));
console.log('Top broken:');
for (const b of broken.slice(0, 40)) {
  console.log(`  ${b.occurrences}x  ${b.href}  ← ${b.files[0]}`);
}
