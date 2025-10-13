const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'weekly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },

  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'monthly' },
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
  { url: '/devops-solutions', priority: '0.8', changefreq: 'monthly' },

  // Micro SAAS
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-crm-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-data-sync', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-lead-magnet', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-project-master', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-email-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-social-scheduler', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-workflow-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-invoice-genius', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-inventory-smart', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-compliance-manager', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-performance-monitor', priority: '0.8', changefreq: 'monthly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' },

  // Additional pages
  { url: '/data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
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
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(outputPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated successfully at:', outputPath);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  const outputPath = path.join(__dirname, '..', 'dist', 'robots.txt');
  fs.writeFileSync(outputPath, robotsTxt);
  console.log('Robots.txt generated successfully at:', outputPath);
}

// Run the generation
try {
  writeSitemap();
  generateRobotsTxt();
  console.log('Sitemap generation completed successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}