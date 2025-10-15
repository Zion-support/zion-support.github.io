const fs = require('fs');
const path = require('path');

// Define the pages to include in the sitemap
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/accessibility', priority: '0.6', changefreq: 'monthly' },
  { url: '/404', priority: '0.1', changefreq: 'yearly' }
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
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1`;

  const publicDir = path.join(__dirname, '..', 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('Robots.txt generated successfully at:', robotsPath);
};

// Run the generation
writeSitemap();
generateRobotsTxt();