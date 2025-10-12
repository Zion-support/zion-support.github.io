import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/about',
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas-services',
  '/privacy',
  '/terms',
  '/ai-content-generator',
  '/ai-chatbot-builder',
  '/ai-analytics-dashboard',
  '/ai-email-assistant',
  '/ai-voice-assistant',
  '/ai-automation',
  '/cloud-migration',
  '/cybersecurity-solutions',
  '/devops-cicd',
  '/data-analytics',
  '/mobile-development',
  '/web-development'
];

const baseUrl = 'https://ziontechgroup.com';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();
