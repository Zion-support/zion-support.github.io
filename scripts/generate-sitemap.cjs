const fs = require('fs');
const path = require('path');

// Define all the routes
const routes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.7, changefreq: 'weekly' },
  { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { url: '/careers', priority: 0.6, changefreq: 'monthly' },
  { url: '/partners', priority: 0.6, changefreq: 'monthly' },
  { url: '/support', priority: 0.6, changefreq: 'monthly' },
  { url: '/faq', priority: 0.6, changefreq: 'monthly' },
  { url: '/demo', priority: 0.7, changefreq: 'monthly' },
  { url: '/consultation', priority: 0.8, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/cookies', priority: 0.3, changefreq: 'yearly' },
  { url: '/sitemap', priority: 0.4, changefreq: 'monthly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
`;
};

// Write files
const sitemap = generateSitemap();
const robots = generateRobotsTxt();

// Ensure dist directory exists
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');

// Write robots.txt
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('Robots.txt generated successfully');

// Also write to public directory for development
const publicDir = path.join(__dirname, '..', 'public');
if (fs.existsSync(publicDir)) {
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Files also written to public directory');
}