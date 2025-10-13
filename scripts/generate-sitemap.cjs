const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';

const pages = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/demo',
  '/privacy',
  '/terms',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/tutorials',
  '/support',
  '/pricing',
  '/careers',
  '/case-studies',
  '/partners',
  '/consultation',
  '/docs',
  '/cookies',
  '/sitemap'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');
