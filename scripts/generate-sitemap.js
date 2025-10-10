import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️ Generating sitemap...');

const baseUrl = 'https://ziontechgroup.com';

const pages = [
  '/',
  '/about',
  '/services',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/contact',
  '/consultation',
  '/pricing',
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
  '/demo'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(sitemapPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
};

try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}