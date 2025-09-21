import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';

const pages = [
  '',
  '/about',
  '/services',
  '/services-advertising',
  '/contact',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');