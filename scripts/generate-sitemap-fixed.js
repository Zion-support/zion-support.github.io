import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://ziontechgroup.com';

const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/ai-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/micro-saas', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/it-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.6', changefreq: 'monthly' },
  { url: '/research', priority: '0.5', changefreq: 'monthly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
  console.log('📄 Sitemap saved to: public/sitemap.xml');
};

const generateJsonSitemap = () => {
  const jsonSitemap = {
    baseUrl,
    pages: pages.map(page => ({
      ...page,
      fullUrl: `${baseUrl}${page.url}`
    })),
    generatedAt: new Date().toISOString()
  };
  
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.json'),
    JSON.stringify(jsonSitemap, null, 2)
  );
  console.log('✅ JSON sitemap generated successfully');
};

const generateTextSitemap = () => {
  const textSitemap = pages.map(page => `${baseUrl}${page.url}`).join('\n');
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.txt'), textSitemap);
  console.log('✅ Text sitemap generated successfully');
};

const writeSitemaps = () => {
  generateSitemap();
  generateJsonSitemap();
  generateTextSitemap();
  console.log('✅ All sitemaps generated successfully!');
};

if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemaps();
}

export { generateSitemap, generateJsonSitemap, generateTextSitemap, writeSitemaps, pages };