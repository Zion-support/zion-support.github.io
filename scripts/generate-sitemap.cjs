const fs = require('fs');
const path = require('path');

const pages = [
  { url: 'https://ziontechgroup.com/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://ziontechgroup.com/about', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/services', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/contact', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/blog', priority: '0.6', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/careers', priority: '0.6', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/partners', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/support', priority: '0.6', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/faq', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/demo', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/micro-saas', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/it-services', priority: '0.8', changefreq: 'weekly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();