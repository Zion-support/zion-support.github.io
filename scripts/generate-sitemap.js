#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/team', priority: 0.6, changefreq: 'monthly' },
  { url: '/enterprise', priority: 0.8, changefreq: 'weekly' },
  { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.6, changefreq: 'weekly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully');
};

generateSitemap();