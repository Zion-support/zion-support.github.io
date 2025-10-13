const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/demo', priority: '0.7', changefreq: 'weekly' },
  { url: '/support', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },

  // AI Services
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },

  // IT Services
  { url: '/cloud-migration', priority: '0.8', changefreq: 'weekly' },
  { url: '/devops-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-security', priority: '0.8', changefreq: 'weekly' },
  { url: '/software-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/system-integration', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' },

  // Micro SAAS
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.7', changefreq: 'weekly' },
  { url: '/project-management-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-crm-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-inventory-smart', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-financial-analytics-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-performance-monitor', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-ai-marketing-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-email-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'weekly' },
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
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  // Ensure public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`Sitemap generated successfully at ${outputPath}`);
  console.log(`Generated ${routes.length} URLs`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
`;

  const outputPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(outputPath, robotsTxt, 'utf8');
  console.log(`Robots.txt generated successfully at ${outputPath}`);
}

// Run the generation
if (require.main === module) {
  writeSitemap();
  generateRobotsTxt();
}

module.exports = { generateSitemap, writeSitemap, generateRobotsTxt };
