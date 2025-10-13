const fs = require('fs');
const path = require('path');

// List of all pages to include in sitemap
const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
];

// AI Services
const aiServices = [
  'ai-analytics', 'ai-automation', 'ai-business-intelligence', 'ai-content-generation',
  'ai-customer-service', 'ai-data-analytics', 'ai-email-automation', 'ai-fraud-detection',
  'ai-healthcare', 'ai-marketing', 'ai-predictive-analytics', 'ai-project-management',
  'ai-recommendation-engine', 'ai-sales-automation', 'ai-workflow-automation'
];

// Zion Services
const zionServices = [
  'zion-analytics-pro', 'zion-security-shield', 'zion-cloud-vault', 'zion-content-studio',
  'zion-ai-video-generator', 'zion-ai-invoice-generator', 'zion-ai-customer-insights',
  'zion-ai-email-analyzer', 'zion-smart-inventory-optimizer', 'zion-ai-customer-sentiment-tracker',
  'zion-smart-expense-categorizer', 'zion-ai-voice-assistant-pro', 'zion-ai-code-reviewer',
  'zion-ai-social-media-manager', 'zion-ai-contract-analyzer', 'zion-ai-performance-optimizer',
  'zion-ai-customer-churn-predictor', 'zion-ai-supply-chain-optimizer', 'zion-ai-financial-forecaster',
  'zion-ai-content-moderator', 'zion-ai-translator-pro', 'zion-ai-data-cleaner',
  'zion-ai-task-scheduler', 'zion-ai-customer-support-pro'
];

// 5G Solutions
const fiveGServices = [
  '5g-solutions', '5g-data-analytics', '5g-edge-computing', '5g-implementation',
  '5g-iot-solutions', '5g-mobile-applications', '5g-network-infrastructure',
  '5g-private-networks', '5g-smart-city-solutions'
];

// Other Services
const otherServices = [
  'cloud-infrastructure', 'cybersecurity-solutions', 'web-development',
  'mobile-development', 'database-management', 'custom-software', 'network-infrastructure'
];

// Add service pages to sitemap
aiServices.forEach(service => {
  pages.push({ url: `/${service}`, priority: '0.7', changefreq: 'monthly' });
});

zionServices.forEach(service => {
  pages.push({ url: `/${service}`, priority: '0.7', changefreq: 'monthly' });
});

fiveGServices.forEach(service => {
  pages.push({ url: `/${service}`, priority: '0.7', changefreq: 'monthly' });
});

otherServices.forEach(service => {
  pages.push({ url: `/${service}`, priority: '0.6', changefreq: 'monthly' });
});

// Generate sitemap XML
function generateSitemap() {
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
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap generated successfully at ${sitemapPath}`);
  console.log(`Total pages: ${pages.length}`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog
Allow: /case-studies`;

  const publicDir = path.join(__dirname, '..', 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');
  
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(`Robots.txt generated successfully at ${robotsPath}`);
}

// Run the generation
if (require.main === module) {
  writeSitemap();
  generateRobotsTxt();
}

module.exports = { generateSitemap, writeSitemap, generateRobotsTxt };