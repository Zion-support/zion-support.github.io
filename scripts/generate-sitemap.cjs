const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'monthly' },
  { url: '/micro-saas', priority: '0.9', changefreq: 'monthly' },
  { url: '/5g-solutions', priority: '0.9', changefreq: 'monthly' },
  
  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-email-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-marketing', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-project-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-sales-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  
  // Micro SAAS
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-crm-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.8', changefreq: 'monthly' },
  
  // 5G Solutions
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'monthly' }
];

// Generate sitemap
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += '    <loc>' + baseUrl + route.url + '</loc>\n';
    sitemap += '    <lastmod>' + currentDate + '</lastmod>\n';
    sitemap += '    <changefreq>' + route.changefreq + '</changefreq>\n';
    sitemap += '    <priority>' + route.priority + '</priority>\n';
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('Sitemap generated successfully at:', sitemapPath);
  console.log('Total URLs:', routes.length);
}

// Generate robots.txt
function generateRobots() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;

  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  
  console.log('Robots.txt generated successfully at:', robotsPath);
}

// Run generation
generateSitemap();
generateRobots();
