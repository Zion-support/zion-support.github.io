#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';

const routes = [
  '',
  '/about',
  '/contact',
  '/services',
  '/innovative-services-2026',
  '/services-overview-2026',
  '/talent',
  '/equipment',
  '/consulting',
  '/services/ai',
  '/services/cybersecurity',
  '/services/cloud',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully at:', outputPath);
