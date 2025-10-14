const fs = require('fs');
const path = require('path');

const pages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'monthly', priority: '0.9' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/blog', changefreq: 'weekly', priority: '0.6' },
  { url: '/pricing', changefreq: 'monthly', priority: '0.8' },
  { url: '/ai-services', changefreq: 'monthly', priority: '0.9' },
  { url: '/it-services', changefreq: 'monthly', priority: '0.9' },
  { url: '/cloud-infrastructure', changefreq: 'monthly', priority: '0.8' },
  { url: '/digital-transformation', changefreq: 'monthly', priority: '0.8' },
  { url: '/case-studies', changefreq: 'weekly', priority: '0.7' },
  { url: '/careers', changefreq: 'weekly', priority: '0.6' },
  { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { url: '/terms', changefreq: 'yearly', priority: '0.3' }
];

const generateSitemap = () => {
  const baseUrl = 'https://zion.app';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const distPath = path.join(__dirname, '..', 'dist');
  const sitemapPath = path.join(distPath, 'sitemap.xml');
  
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

generateSitemap();