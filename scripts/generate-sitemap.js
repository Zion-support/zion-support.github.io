import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseUrl = 'https://zion.app';

const pages = [
  '',
  '/about',
  '/services',
  '/services/ai-services',
  '/services/micro-saas',
  '/services/it-services',
  '/services/blockchain',
  '/contact',
  '/team',
  '/space-tech',
  '/privacy',
  '/terms'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at', sitemapPath);