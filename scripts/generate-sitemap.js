const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.5', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();