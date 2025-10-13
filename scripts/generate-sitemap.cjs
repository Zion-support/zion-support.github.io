const fs = require('fs');
const path = require('path');

// Define all the routes in your application with priority and frequency
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { path: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/tutorials', priority: '0.8', changefreq: 'weekly' },
  { path: '/demo', priority: '0.8', changefreq: 'monthly' },
  { path: '/support', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  // AI Services
  '/ai-analytics',
  '/ai-content-generation',
  '/ai-customer-support',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-document-processing',
  '/ai-marketing-automation',
  '/ai-predictive-analytics',
  '/ai-voice-assistant',
  '/ai-workflow-automation',
  // IT Services
  '/cloud-migration',
  '/devops',
  '/it-consulting',
  '/network-security',
  '/custom-software',
  '/system-integration',
  '/web-development',
  // 5G Services
  '/5g-network-infrastructure',
  '/5g-edge-computing',
  '/5g-iot-solutions',
  '/5g-smart-city-solutions',
  '/5g-private-networks',
  '/5g-mobile-applications',
  '/5g-data-analytics',
  '/5g-implementation',
  // Micro SAAS Services
  '/zion-content-studio',
  '/project-management-pro',
  '/zion-ai-crm-pro',
  '/zion-inventory-smart',
  '/ai-financial-analytics-pro',
  '/zion-performance-monitor',
  '/zion-ai-marketing-automation',
  '/zion-email-automation',
  '/data-analytics',
  '/ai-workflow-automation',
  // New Innovative Micro SAAS Services
  '/zion-ai-video-generator',
  '/zion-ai-invoice-generator',
  '/zion-ai-customer-insights',
  '/zion-ai-email-analyzer',
  '/zion-smart-inventory-optimizer',
  '/zion-ai-customer-sentiment-tracker',
  '/zion-smart-expense-categorizer',
  '/zion-ai-voice-assistant-pro',
  '/zion-ai-code-reviewer',
  '/zion-ai-social-media-manager',
  '/zion-ai-contract-analyzer',
  '/zion-ai-performance-optimizer',
  '/zion-ai-customer-churn-predictor',
  '/zion-ai-supply-chain-optimizer',
  '/zion-ai-financial-forecaster',
  '/zion-ai-content-moderator',
  '/zion-ai-translator-pro',
  '/zion-ai-data-cleaner',
  '/zion-ai-task-scheduler',
  '/zion-ai-customer-support-pro'
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  
  try {
    fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
  }
};

// Run the generation
writeSitemap();
generateRobotsTxt();