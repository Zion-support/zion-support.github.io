const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.7, changefreq: 'weekly' },
  { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { url: '/careers', priority: 0.6, changefreq: 'monthly' },
  { url: '/partners', priority: 0.6, changefreq: 'monthly' },
  { url: '/support', priority: 0.7, changefreq: 'weekly' },
  { url: '/faq', priority: 0.6, changefreq: 'monthly' },
  { url: '/demo', priority: 0.8, changefreq: 'monthly' },
  { url: '/consultation', priority: 0.8, changefreq: 'monthly' },
  { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' }
];

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;

  const publicDir = path.join(__dirname, '..', 'dist');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Robots.txt generated successfully');
};

// Run the generators
generateSitemap();
generateRobotsTxt();