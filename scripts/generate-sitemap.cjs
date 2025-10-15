const fs = require('fs');
const path = require('path');

// Simple sitemap generator
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zion.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zion.app/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zion.app/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zion.app/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

const robots = `User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml`;

// Write sitemap
fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');

// Write robots.txt
fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robots);
console.log('Robots.txt generated successfully!');