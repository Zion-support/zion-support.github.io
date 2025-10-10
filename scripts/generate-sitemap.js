import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️ Generating sitemap...');

// Define all the pages in your application
const pages = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/services',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/blog',
  '/case-studies',
  '/team',
  '/careers',
  '/privacy',
  '/terms',
  '/cookies',
  '/docs',
  '/api-docs',
  '/support',
  '/status',
  '/demo',
  '/consultation'
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist directory
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');