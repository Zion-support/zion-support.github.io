#!/usr/bin/env node
// generate-commercial-sitemap.cjs
// Restore public/sitemap-0.xml as the clean commercial urlset.
// public/sitemap.xml is the next-sitemap index that points at sitemap-0.
//
// Rules:
// - Do not invent URLs: only emit paths that exist as public/**/index.html
// - FIELD-SERVICES LOCK: hub + brazil only — never walk country leaves
// - Do not add hashed /services/* orphans (dead 404s cluttered the fat sitemap)
// - /pricing/ stays out (PL-2 / #71192)

const fs = require('fs');
const path = require('path');

const SITE = 'https://ziontechgroup.com';
const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');

// Required after content restore #71308
const CORE = [
  '/',
  '/about/',
  '/solutions/',
  '/managed-it-services/',
  '/ai-consulting-services/',
  '/finops-consulting/',
  '/autonomous-ai-agents/',
  '/blog/',
  '/plans/',
  '/discovery/',
  '/enterprise/',
  '/case-studies/',
  '/contact/',
  '/services/',
  '/field-services/',
];

// Already-present public/ pages (live 200). Not country leaves. Not invented.
// /pricing/ omitted on purpose.
const EXTRA = [
  '/field-services/brazil/',
  '/field-services-brazil/',
  '/free-consultation/',
  '/telegram/',
  '/use-cases/',
  '/industries/healthcare/',
  '/industries/insurance/',
  '/industries/legal/',
  '/public-roadmap/',
  '/status-page/',
];

function publicFileFor(urlPath) {
  if (urlPath === '/') return path.join(PUBLIC, 'index.html');
  return path.join(PUBLIC, urlPath.replace(/^\//, ''), 'index.html');
}

function lastmodFor(file) {
  try {
    return fs.statSync(file).mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function hashedServiceSlug(name) {
  return /-[0-9a-f]{6,}$/i.test(name);
}

function add(pages, seen, urlPath, priority, changefreq) {
  if (seen.has(urlPath)) return;
  const file = publicFileFor(urlPath);
  if (!fs.existsSync(file)) return;
  seen.add(urlPath);
  pages.push({
    loc: urlPath === '/' ? `${SITE}/` : `${SITE}${urlPath}`,
    lastmod: lastmodFor(file),
    priority,
    changefreq,
  });
}

function collect() {
  const pages = [];
  const seen = new Set();

  add(pages, seen, '/', '1.0', 'daily');
  for (const p of CORE) {
    if (p === '/') continue;
    add(pages, seen, p, '0.8', 'weekly');
  }

  const blogDir = path.join(PUBLIC, 'blog');
  if (fs.existsSync(blogDir)) {
    for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      add(pages, seen, `/blog/${entry.name}/`, '0.6', 'weekly');
    }
  }

  for (const p of EXTRA) add(pages, seen, p, '0.5', 'weekly');

  pages.sort((a, b) => a.loc.localeCompare(b.loc));
  return pages;
}

function buildUrlset(pages) {
  const rows = pages.map(
    (p) =>
      `<url><loc>${p.loc}</loc><lastmod>${p.lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<!-- Commercial sitemap-0. Field-services: hub + brazil only. No hashed /services/* orphans. -->',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows,
    '</urlset>',
    '',
  ].join('\n');
}

function buildIndex() {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `<sitemap><loc>${SITE}/sitemap-0.xml</loc></sitemap>`,
    '</sitemapindex>',
    '',
  ].join('\n');
}

function writeBoth(dir, pages) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'sitemap-0.xml'), buildUrlset(pages));
  fs.writeFileSync(path.join(dir, 'sitemap.xml'), buildIndex());
}

function assertRequired(pages) {
  const locs = new Set(pages.map((p) => p.loc));
  const missing = [];
  for (const p of CORE) {
    const loc = p === '/' ? `${SITE}/` : `${SITE}${p}`;
    if (!locs.has(loc)) missing.push(p);
  }
  if (missing.length) {
    throw new Error(`sitemap-0 missing required public pages: ${missing.join(', ')}`);
  }
  const hashed = pages.filter((p) => {
    const m = p.loc.match(/\/services\/([^/]+)\/?$/);
    return m && hashedServiceSlug(m[1]);
  });
  if (hashed.length) {
    throw new Error(`sitemap-0 must not include hashed /services/*: ${hashed[0].loc}`);
  }
  const fieldLeaves = pages.filter((p) => {
    const u = p.loc.replace(SITE, '');
    if (u === '/field-services/' || u === '/field-services/brazil/' || u === '/field-services-brazil/') {
      return false;
    }
    return u.startsWith('/field-services/');
  });
  if (fieldLeaves.length) {
    throw new Error(`FIELD-SERVICES LOCK: unexpected leaf ${fieldLeaves[0].loc}`);
  }
}

function main() {
  const pages = collect();
  assertRequired(pages);
  writeBoth(PUBLIC, pages);
  const outDir = path.join(ROOT, 'out');
  if (fs.existsSync(outDir)) writeBoth(outDir, pages);
  console.log(`sitemap-0.xml: ${pages.length} commercial urls`);
  console.log('sitemap.xml: sitemapindex -> /sitemap-0.xml');
  return pages;
}

if (require.main === module) main();

module.exports = { collect, writeBoth, main, CORE };
