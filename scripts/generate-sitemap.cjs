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
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  
  // Service category pages
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
  
  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  
  // Micro SAAS Services
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'monthly' },
  
  // Zion AI Services
  { url: '/zion-ai-video-generator', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-invoice-generator', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-customer-insights', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-voice-assistant-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-code-reviewer', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-content-moderation', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-translator-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-data-cleaner', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-customer-service-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-crm-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-survey-builder', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-predictive-maintenance', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-document-ai', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-fraud-detector', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-email-assistant', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-seo-optimizer', priority: '0.8', changefreq: 'monthly' },
  
  // 5G Services
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'monthly' }
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

// Write sitemap to dist folder
const writeSitemap = () => {
  const distPath = path.join(__dirname, '..', 'dist');
  const sitemapPath = path.join(distPath, 'sitemap.xml');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }
  
  const sitemap = generateSitemap();
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const distPath = path.join(__dirname, '..', 'dist');
  const robotsPath = path.join(distPath, 'robots.txt');
  
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  fs.writeFileSync(robotsPath, robotsContent, 'utf8');
  console.log('✅ Robots.txt generated successfully at:', robotsPath);
};

// Run the generation
writeSitemap();
generateRobotsTxt();
