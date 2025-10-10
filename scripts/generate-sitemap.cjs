const fs = require('fs');
const path = require('path');

// Define all the pages/routes
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'daily' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.5', changefreq: 'weekly' },
  { url: '/partners', priority: '0.5', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('Sitemap generated successfully');
console.log(`Sitemap saved to: ${sitemapPath}`);
console.log(`Total pages: ${pages.length}`);