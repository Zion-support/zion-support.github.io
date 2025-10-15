const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  
  // AI Services
  { url: '/ai-analytics-dashboard-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation-suite', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-business-intelligence-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-code-assistant-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-chatbot-enterprise', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-assistant-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processor-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-social-media-manager-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity-monitor-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cloud-optimization-pro', priority: '0.8', changefreq: 'weekly' },
  
  // IT Services
  { url: '/ai-cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-api-management', priority: '0.7', changefreq: 'weekly' },
  { url: '/database-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/advanced-security-suite', priority: '0.7', changefreq: 'weekly' },
  { url: '/performance-monitoring', priority: '0.7', changefreq: 'weekly' },
  { url: '/devops-solutions', priority: '0.7', changefreq: 'weekly' },
  
  // 5G Solutions
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-manufacturing-pro', priority: '0.7', changefreq: 'weekly' },
  
  // Micro SAAS
  { url: '/ai-accounting-assistant', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-content-moderation-pro', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-climate-solutions-pro', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-agricultural-intelligence-pro', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-3d-generation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-blockchain-solutions', priority: '0.6', changefreq: 'weekly' }
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Generate sitemap XML
const generateSitemap = () => {
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

// Generate robots.txt
const generateRobots = () => {
  let robots = 'User-agent: *\n';
  robots += 'Allow: /\n';
  robots += `Sitemap: ${baseUrl}/sitemap.xml\n`;
  robots += '\n';
  robots += '# Disallow admin and private areas\n';
  robots += 'Disallow: /admin/\n';
  robots += 'Disallow: /private/\n';
  robots += 'Disallow: /api/\n';
  
  return robots;
};

// Write files
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap());
fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobots());

console.log('Enhanced sitemap generated successfully at:', path.join(publicDir, 'sitemap.xml'));
console.log('Enhanced robots.txt generated successfully at:', path.join(publicDir, 'robots.txt'));