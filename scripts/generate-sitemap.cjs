const fs = require('fs');
const path = require('path');

// Define all routes and their metadata
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily', lastmod: new Date().toISOString() },
  { url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/contact', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/services', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/careers', priority: '0.6', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/partners', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/support', priority: '0.7', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/faq', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/demo', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/blog', priority: '0.7', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/docs', priority: '0.6', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/community', priority: '0.5', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/api', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/sitemap', priority: '0.3', changefreq: 'monthly', lastmod: new Date().toISOString() },
  
  // Legal pages
  { url: '/privacy', priority: '0.4', changefreq: 'yearly', lastmod: new Date().toISOString() },
  { url: '/terms', priority: '0.4', changefreq: 'yearly', lastmod: new Date().toISOString() },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly', lastmod: new Date().toISOString() },
  
  // Service pages
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly', lastmod: new Date().toISOString() },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly', lastmod: new Date().toISOString() },
  
  // AI Services
  { url: '/ai-analytics', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-automation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-chatbot-builder', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-crm', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-cybersecurity', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-data-analytics', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-healthcare', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-financial-services', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-computer-vision', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-voice-solutions', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-ecommerce-solutions', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-hr-solutions', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-content-generation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-document-processing', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-predictive-analytics', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-edge-computing', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-video-analysis', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-speech-synthesis', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-recommendation-engine', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-sentiment-analysis', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-chatbot-enterprise', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-content-moderation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-predictive-modeling', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-document-intelligence', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-conversation-analytics', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-supply-chain-ai', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-healthcare-diagnostics', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-financial-forecasting', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-iot-analytics', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-conversational-ai', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-automated-testing', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-knowledge-management', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-customer-churn', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-automated-reporting', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-voice-assistant', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-content-generation-pro', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  
  // IT Services
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/api-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/cybersecurity-solutions', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/database-management', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/mobile-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/web-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/devops-cicd', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/it-support', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/data-analytics-bi', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/custom-software', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/it-asset-management', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/it-security-services', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/it-project-management', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/cloud-native-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/ai-integration-services', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/blockchain-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/iot-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/e-commerce-development', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/api-development-advanced', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/data-engineering', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/cybersecurity-advanced', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/cloud-migration-advanced', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/devops-advanced', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/machine-learning-ops', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/enterprise-integration', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/performance-optimization', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/disaster-recovery-advanced', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/compliance-automation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/cloud-cost-optimization', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/security-automation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/data-visualization', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/workflow-automation', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/cloud-native-security', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
  
  // Micro SaaS Services
  { url: '/zion-analytics-pro', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-chat-ai', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-security-shield', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-cloud-vault', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-content-studio', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-crm-intelligence', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-data-sync', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-lead-magnet', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-project-master', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-email-automation', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-inventory-smart', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-invoice-genius', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-workflow-automation', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-performance-monitor', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-compliance-manager', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-social-scheduler', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-video-editor', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-translator-pro', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-code-reviewer', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-customer-insights', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-email-assistant', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-meeting-assistant', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-seo-optimizer', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-data-cleaner', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-contract-analyzer', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-survey-builder', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-accounting-assistant', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-recruitment-pro', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-content-moderation', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-predictive-maintenance', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-energy-manager', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-fraud-detector', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-customer-service-pro', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-marketing-automation', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() },
  { url: '/zion-ai-document-ai', priority: '0.6', changefreq: 'monthly', lastmod: new Date().toISOString() }
];

// Generate XML sitemap
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /micro-saas/
Allow: /blog/
Allow: /tutorials/
`;
}

// Write files
try {
  const sitemap = generateSitemap();
  const robots = generateRobotsTxt();
  
  // Ensure dist directory exists
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Write sitemap.xml
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
  
  // Write robots.txt
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully');
  
  // Also write to public directory for development
  const publicDir = path.join(__dirname, '..', 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
    console.log('✅ Files also written to public directory');
  }
  
  console.log(`📊 Generated sitemap with ${routes.length} URLs`);
  
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}