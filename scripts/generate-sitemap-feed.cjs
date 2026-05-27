#!/usr/bin/env node
// generate-sitemap-feed.cjs — dynamic sitemap.xml + feed.xml from build artifacts
// Recursively discovers ALL pages with index.html

const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.com';
const outDir = path.join(process.cwd(), 'out');

function rfc822(date) {
  return date.toUTCString().replace('GMT', '+0000');
}

function discoverAllPages(dir, basePath = '') {
  const pages = [];
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch { return pages; }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('_next')) continue;
    const fullPath = path.join(dir, entry.name);
    const indexPath = path.join(fullPath, 'index.html');
    const relPath = basePath ? `${basePath}/${entry.name}` : entry.name;

    if (fs.existsSync(indexPath)) {
      pages.push({
        url: `${SITE_URL}/${relPath}/`,
        lastmod: fs.statSync(indexPath).mtime,
      });
    }

    // Recurse into subdirectories
    pages.push(...discoverAllPages(fullPath, relPath));
  }

  return pages;
}

// Discover all pages recursively
const allPages = discoverAllPages(outDir);

// Add homepage
const homeHtml = path.join(outDir, 'index.html');
if (fs.existsSync(homeHtml)) {
  allPages.push({ url: `${SITE_URL}/`, lastmod: fs.statSync(homeHtml).mtime });
}

allPages.sort((a, b) => a.url.localeCompare(b.url));
console.log(`sitemap pages: ${allPages.length}`);

// Write sitemap.xml
const sitemapLines = allPages.map(p => {
  const freq = p.url === `${SITE_URL}/` ? 'daily'
    : p.url.match(/\/services\//) ? 'weekly'
    : p.url.match(/\/blog\//) ? 'weekly'
    : 'monthly';
  const priority = p.url === `${SITE_URL}/` ? '1.0'
    : p.url.match(/\/services\//) ? '0.6'
    : p.url.match(/\/blog\//) ? '0.5'
    : '0.5';
  return `<url><loc>${p.url}</loc><lastmod>${p.lastmod.toISOString().slice(0, 10)}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapLines.join('\n')}
</urlset>`;

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml: ${allPages.length} urls`);

// Feed (unchanged — blog posts + services)
const svcIndexPath = path.join(outDir, 'service-index.json');
const services = fs.existsSync(svcIndexPath) ? JSON.parse(fs.readFileSync(svcIndexPath, 'utf-8')) : [];
const blogDir = path.join(outDir, 'blog');
const blogEntries = [];
if (fs.existsSync(blogDir)) {
  for (const d of fs.readdirSync(blogDir)) {
    try {
      if (!fs.statSync(path.join(blogDir, d)).isDirectory()) continue;
      const htmlPath = path.join(blogDir, d, 'index.html');
      if (!fs.existsSync(htmlPath)) continue;
      const html = fs.readFileSync(htmlPath, 'utf-8');
      const title = (html.match(/<title>([^<]*)<\/title>/))?.[1] || d;
      const desc = (html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/))?.[1] || '';
      blogEntries.push({ slug: d, title, description: desc, url: `${SITE_URL}/blog/${d}/` });
    } catch {}
  }
}

const feedItems = blogEntries.map(b => ({
  url: b.url, title: b.title, description: b.description,
}));

console.log(`blog items: ${blogEntries.length}`);

const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Zion Tech Group</title>
<link>${SITE_URL}</link>
<description>AI services, IT solutions, and Micro-SaaS platforms</description>
${feedItems.map(item => `  <item>
    <title>${item.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>
    <link>${item.url}</link>
    <description>${(item.description || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</description>
  </item>`).join('\n')}
</channel>
</rss>`;

fs.writeFileSync(path.join(outDir, 'feed.xml'), feedXml);