#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'monthly', priority: '0.8' },
  { url: '/solutions', changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/pricing', changefreq: 'monthly', priority: '0.7' },
  { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { url: '/terms', changefreq: 'yearly', priority: '0.3' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('dist/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();