const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/docs', priority: '0.7', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.6', changefreq: 'weekly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/status', priority: '0.5', changefreq: 'daily' },
  { url: '/demo', priority: '0.8', changefreq: 'weekly' },
  { url: '/consultation', priority: '0.8', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /private/

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /micro-saas/
Allow: /blog/
Allow: /case-studies/`;
};

// Write files
const writeFiles = () => {
  const distDir = path.join(__dirname, '../dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), generateSitemap());
  console.log('✅ Sitemap.xml generated');

  // Write robots.txt
  fs.writeFileSync(path.join(distDir, 'robots.txt'), generateRobotsTxt());
  console.log('✅ Robots.txt generated');
};

// Run if called directly
if (require.main === module) {
  writeFiles();
}

module.exports = { generateSitemap, generateRobotsTxt, writeFiles };