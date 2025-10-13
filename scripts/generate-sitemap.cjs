const fs = require('fs');
const path = require('path');

// Define all the routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  
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
  { url: '/ai-project-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-recommendation-engine', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-sales-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  
  // Micro SAAS Services
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-workflow-automator-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-social-scheduler-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-email-marketing-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-inventory-optimizer-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-customer-churn-predictor-pro', priority: '0.8', changefreq: 'monthly' },
  
  // 5G Services
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' }
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
const sitemapData = generateSitemap();
const outputPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');

// Ensure dist directory exists
const distDir = path.dirname(outputPath);
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapData);
console.log('Sitemap generated successfully');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
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
=======
// Generate comprehensive sitemap
function generateSitemap() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  // Get all page routes
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/accessibility', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' }
  ];

  // Add AI service pages
  const aiServices = [
    'ai-analytics', 'ai-content-generation', 'ai-customer-support', 'ai-cybersecurity',
    'ai-data-analytics', 'ai-document-processing', 'ai-marketing-automation',
    'ai-predictive-analytics', 'ai-voice-assistant', 'ai-workflow-automation',
    'ai-business-intelligence', 'ai-chatbot-builder', 'ai-computer-vision',
    'ai-crm', 'ai-automation', 'ai-blockchain-solutions'
  ];

  aiServices.forEach(service => {
    pages.push({
      url: `/ai-services/${service}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });


  microSaasServices.forEach(service => {
    pages.push({
      url: `/micro-saas/${service}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });

  // Add 5G solution pages
  const fiveGServices = [
    '5g-network-infrastructure', '5g-edge-computing', '5g-iot-solutions',
    '5g-smart-city-solutions', '5g-private-networks', '5g-mobile-applications',
    '5g-data-analytics', '5g-implementation'
  ];

