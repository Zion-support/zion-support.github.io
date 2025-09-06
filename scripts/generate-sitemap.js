
import fs from 'fs';
import path from 'path';

const generateSitemap = () => {
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'weekly' },
    { url: '/services', priority: '0.8', changefreq: 'weekly' },
    { url: '/services/ai-services', priority: '0.7', changefreq: 'weekly' },
    { url: '/services/micro-saas', priority: '0.7', changefreq: 'weekly' },
    { url: '/services/it-services', priority: '0.7', changefreq: 'weekly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>https://ziontechgroup.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);
};

export default generateSitemap;
