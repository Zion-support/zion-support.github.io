const fs = require('fs');
const path = require('path');

// Define all the routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  
  // AI Services
  { url: '/ai-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-email-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-fraud-detection', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-marketing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-predictive-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-supply-chain', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-voice-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  
  // Zion Services
  { url: '/zion-analytics-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-crm-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-translator-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-data-cleaner', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-fraud-detector', priority: '0.6', changefreq: 'monthly' },
  
  // 5G Services
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'monthly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log(`📊 Total URLs: ${routes.length}`);
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
Disallow: /private/
Disallow: /api/
`;

  const publicDir = path.join(__dirname, '..', 'dist');
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  
  console.log('✅ Robots.txt generated successfully at:', robotsPath);
};

// Run the generation
try {
  writeSitemap();
  generateRobotsTxt();
  console.log('🎉 SEO files generated successfully!');
} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1);
}