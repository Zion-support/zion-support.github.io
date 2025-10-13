import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all pages in the application
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  // Add more AI service pages
  { url: '/ai-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.6', changefreq: 'weekly' },
  // Add more 5G solution pages
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'weekly' },
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
};

const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /scripts/
Disallow: /node_modules/
`;
};

// Generate and write sitemap
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at:', sitemapPath);

// Generate and write robots.txt
const robotsTxt = generateRobotsTxt();
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✅ Robots.txt generated successfully at:', robotsPath);

console.log(`📊 Generated sitemap with ${pages.length} pages`);
console.log('🚀 SEO files are ready for deployment!');