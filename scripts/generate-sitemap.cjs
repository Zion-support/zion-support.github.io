const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.7, changefreq: 'weekly' },
  { url: '/tutorials', priority: 0.7, changefreq: 'weekly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/consultation', priority: 0.8, changefreq: 'monthly' },
  { url: '/demo', priority: 0.7, changefreq: 'monthly' },
  { url: '/support', priority: 0.6, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { url: '/terms', priority: 0.5, changefreq: 'yearly' },
  { url: '/cookies', priority: 0.5, changefreq: 'yearly' },
  { url: '/sitemap', priority: 0.3, changefreq: 'monthly' }
];

// Add AI service pages
const aiServices = [
  'ai-analytics', 'ai-automation', 'ai-chatbot-builder', 'ai-crm', 'ai-cybersecurity',
  'ai-data-analytics', 'ai-healthcare', 'ai-financial-services', 'ai-computer-vision',
  'ai-voice-solutions', 'ai-ecommerce-solutions', 'ai-hr-solutions', 'ai-content-generation',
  'ai-workflow-automation', 'ai-document-processing', 'ai-predictive-analytics',
  'ai-edge-computing', 'ai-video-analysis', 'ai-speech-synthesis', 'ai-recommendation-engine',
  'ai-sentiment-analysis', 'ai-customer-support', 'ai-sales-automation', 'ai-data-visualization',
  'ai-lead-generation', 'ai-document-processing'
];

aiServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    priority: 0.6,
    changefreq: 'monthly'
  });
});

// Add IT service pages
const itServices = [
  'cloud-infrastructure', 'api-development', 'cybersecurity-solutions', 'database-management',
  'mobile-development', 'web-development', 'devops-cicd', 'it-support', 'data-analytics-bi',
  'custom-software', 'network-infrastructure', 'it-asset-management', 'it-security-services',
  'it-project-management', 'cloud-native-development', 'ai-integration-services',
  'blockchain-development', 'iot-development', 'e-commerce-development'
];

itServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    priority: 0.6,
    changefreq: 'monthly'
  });
});

// Add Micro SaaS pages
const microSaasServices = [
  'zion-analytics-pro', 'zion-chat-ai', 'zion-security-shield', 'zion-cloud-vault',
  'zion-content-studio', 'zion-crm-intelligence', 'zion-data-sync', 'zion-lead-magnet',
  'zion-project-master', 'zion-email-automation', 'zion-inventory-smart', 'zion-invoice-genius',
  'zion-workflow-automation', 'zion-performance-monitor', 'zion-compliance-manager',
  'zion-social-scheduler', 'zion-ai-video-editor', 'zion-ai-translator-pro', 'zion-ai-code-reviewer',
  'zion-customer-insights', 'zion-ai-email-assistant', 'zion-ai-meeting-assistant',
  'zion-ai-seo-optimizer', 'zion-ai-data-cleaner', 'zion-ai-contract-analyzer',
  'zion-ai-survey-builder', 'zion-ai-accounting-assistant', 'zion-ai-recruitment-pro',
  'zion-ai-content-moderation', 'zion-ai-predictive-maintenance', 'zion-ai-energy-manager',
  'zion-ai-supply-chain-optimizer', 'zion-ai-fraud-detector', 'zion-ai-customer-service-pro',
  'zion-ai-marketing-automation', 'zion-ai-document-ai'
];

microSaasServices.forEach(service => {
  routes.push({
    url: `/${service}`,
    priority: 0.5,
    changefreq: 'monthly'
  });
});

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated successfully');
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and API routes
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /pricing
Allow: /case-studies
Allow: /blog
Allow: /tutorials`;

  const outputPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(outputPath, robotsTxt);
  console.log('Robots.txt generated successfully');
}

// Run the generation
writeSitemap();
generateRobotsTxt();