// app-route-sitemap-drift.cjs — compares app/ routes against production sitemap and writes automation/reports/app-route-sitemap-drift-latest.json
// Fixed 2026-09-29 (Zion CEO agent): replaced no-op placeholder that caused drift-gate ENOENT failures.
const fs = require('fs');
const path = require('path');

const SITEMAP_URL = process.env.SITEMAP_URL || 'https://ziontechgroup.com/sitemap.xml';
const OUT = 'automation/reports/app-route-sitemap-drift-latest.json';

function walk(dir, acc) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith('_') || e.name.startsWith('.') || e.name === 'api' || e.name === 'node_modules') continue;
      walk(p, acc);
    } else if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name)) {
      const route = '/' + path.relative('app', path.dirname(p)).split(path.sep).filter(s => s && !s.startsWith('(') && !s.startsWith('[')).join('/');
      acc.push(route === '/' ? '/' : route.replace(/\/$/, ''));
    }
  }
  return acc;
}

(async () => {
  const report = { generatedAt: new Date().toISOString(), sitemapUrl: SITEMAP_URL, sitemapError: null, counts: { sitemapUrls: 0, appRoutes: 0, inAppNotSitemap: 0, inSitemapNotApp: 0 }, inAppNotSitemap: [], inSitemapNotApp: [] };
  const appRoutes = new Set(walk('app', []));
  report.counts.appRoutes = appRoutes.size;
  let sitemapUrls = new Set();
  try {
    const res = await fetch(SITEMAP_URL, { signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const xml = await res.text();
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      try {
        const u = new URL(m[1].trim());
        sitemapUrls.add(u.pathname.replace(/\/$/, '') || '/');
      } catch {}
    }
    report.counts.sitemapUrls = sitemapUrls.size;
  } catch (e) {
    report.sitemapError = String(e && e.message || e);
  }
  if (!report.sitemapError) {
    const norm = r => (r === '/' ? '/' : r.replace(/\/$/, ''));
    const appNorm = new Set([...appRoutes].map(norm));
    const missing = [...appNorm].filter(r => !sitemapUrls.has(r)).sort();
    report.counts.inAppNotSitemap = missing.length;
    report.inAppNotSitemap = missing.slice(0, 50);
    const extra = [...sitemapUrls].filter(r => !appNorm.has(r)).sort();
    report.counts.inSitemapNotApp = extra.length;
    report.inSitemapNotApp = extra.slice(0, 50);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(report, null, 2));
  console.log('drift report written:', JSON.stringify(report.counts), report.sitemapError ? 'sitemapError=' + report.sitemapError : '');
  process.exit(0);
})();
