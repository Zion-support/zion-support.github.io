import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 ,},
  { url: '/about', changefreq: 'monthly', priority: 0.8 ,},
  { url: '/services', changefreq: 'monthly', priority: 0.9 ,},
  { url: '/contact', changefreq: 'monthly', priority: 0.7 ,},
  { url: '/blog', changefreq: 'weekly', priority: 0.8 ,},
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 ,},
  { url: '/pricing', changefreq: 'monthly', priority: 0.8 ,},
  { url: '/careers', changefreq: 'monthly', priority: 0.6 ,},
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 ,},
  { url: '/terms', changefreq: 'yearly', priority: 0.3 ,}
];

const generateSitemap = () => {
  const baseUrl = 'https: //zion.app';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl,}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join(&apos;\n&apos;)}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true ,})}
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)};

generateSitemap();