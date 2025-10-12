const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', priority: 0.8, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.7, changefreq: 'weekly' },
  { path: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { path: '/careers', priority: 0.6, changefreq: 'monthly' },
  
  // Service pages
  { path: '/ai-services', priority: 0.8, changefreq: 'monthly' },
  { path: '/it-services', priority: 0.8, changefreq: 'monthly' },
  { path: '/micro-saas', priority: 0.8, changefreq: 'monthly' },
  
  // AI Services
  { path: '/ai-analytics', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-chatbot-builder', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-cybersecurity', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-crm', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-data-analytics', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-healthcare', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-financial-services', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-computer-vision', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-voice-solutions', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-ecommerce-solutions', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-hr-solutions', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-content-generation', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-workflow-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-document-processing', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-predictive-analytics', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-edge-computing', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-video-analysis', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-speech-synthesis', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-recommendation-engine', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-sentiment-analysis', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-chatbot-enterprise', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-content-moderation', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-predictive-modeling', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-document-intelligence', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-conversation-analytics', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-supply-chain-ai', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-healthcare-diagnostics', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-financial-forecasting', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-iot-analytics', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-conversational-ai', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-automated-testing', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-knowledge-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-customer-churn', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-automated-reporting', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-voice-assistant', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-content-generation-pro', priority: 0.7, changefreq: 'monthly' },
  
  // IT Services
  { path: '/cloud-infrastructure', priority: 0.7, changefreq: 'monthly' },
  { path: '/cybersecurity-solutions', priority: 0.7, changefreq: 'monthly' },
  { path: '/web-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/mobile-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/api-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/database-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/devops-cicd', priority: 0.7, changefreq: 'monthly' },
  { path: '/it-support', priority: 0.7, changefreq: 'monthly' },
  { path: '/data-analytics-bi', priority: 0.7, changefreq: 'monthly' },
  { path: '/custom-software', priority: 0.7, changefreq: 'monthly' },
  { path: '/network-infrastructure', priority: 0.7, changefreq: 'monthly' },
  { path: '/it-asset-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/it-security-services', priority: 0.7, changefreq: 'monthly' },
  { path: '/it-project-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/cloud-native-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/ai-integration-services', priority: 0.7, changefreq: 'monthly' },
  { path: '/blockchain-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/iot-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/e-commerce-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/api-development-advanced', priority: 0.7, changefreq: 'monthly' },
  { path: '/data-engineering', priority: 0.7, changefreq: 'monthly' },
  { path: '/cybersecurity-advanced', priority: 0.7, changefreq: 'monthly' },
  { path: '/cloud-migration-advanced', priority: 0.7, changefreq: 'monthly' },
  { path: '/devops-advanced', priority: 0.7, changefreq: 'monthly' },
  { path: '/machine-learning-ops', priority: 0.7, changefreq: 'monthly' },
  { path: '/enterprise-integration', priority: 0.7, changefreq: 'monthly' },
  { path: '/performance-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/disaster-recovery-advanced', priority: 0.7, changefreq: 'monthly' },
  { path: '/compliance-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/cloud-cost-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/security-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/data-visualization', priority: 0.7, changefreq: 'monthly' },
  { path: '/workflow-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/cloud-native-security', priority: 0.7, changefreq: 'monthly' },
  
  // Micro SAAS Products
  { path: '/zion-analytics-pro', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-chat-ai', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-security-shield', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-cloud-vault', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-content-studio', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-crm-intelligence', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-data-sync', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-lead-magnet', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-project-master', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-email-automation', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-inventory-smart', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-invoice-genius', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-workflow-automation', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-performance-monitor', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-compliance-manager', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-social-scheduler', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-video-editor', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-translator-pro', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-code-reviewer', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-customer-insights', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-email-assistant', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-meeting-assistant', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-seo-optimizer', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-data-cleaner', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-contract-analyzer', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-survey-builder', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-accounting-assistant', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-recruitment-pro', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-content-moderation', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-predictive-maintenance', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-energy-manager', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-supply-chain-optimizer', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-fraud-detector', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-customer-service-pro', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-marketing-automation', priority: 0.6, changefreq: 'monthly' },
  { path: '/zion-ai-document-ai', priority: 0.6, changefreq: 'monthly' },
  
  // Emerging Technology Pages
  { path: '/5g-implementation', priority: 0.6, changefreq: 'monthly' },
  { path: '/ai-3d-generation', priority: 0.6, changefreq: 'monthly' },
  { path: '/ai-holographic-workspace', priority: 0.6, changefreq: 'monthly' },
  { path: '/ai-autonomous-systems', priority: 0.6, changefreq: 'monthly' },
  { path: '/ai-blockchain-solutions', priority: 0.6, changefreq: 'monthly' },
  { path: '/quantum-computing', priority: 0.6, changefreq: 'monthly' },
  { path: '/ar-vr-solutions', priority: 0.6, changefreq: 'monthly' },
  { path: '/iot-integration', priority: 0.6, changefreq: 'monthly' },
  { path: '/machine-learning', priority: 0.6, changefreq: 'monthly' },
  
  // Company Pages
  { path: '/team', priority: 0.6, changefreq: 'monthly' },
  { path: '/partners', priority: 0.6, changefreq: 'monthly' },
  { path: '/status', priority: 0.5, changefreq: 'daily' },
  
  // Resource Pages
  { path: '/faq', priority: 0.6, changefreq: 'monthly' },
  { path: '/docs', priority: 0.6, changefreq: 'monthly' },
  { path: '/api-docs', priority: 0.6, changefreq: 'monthly' },
  { path: '/community', priority: 0.6, changefreq: 'monthly' },
  { path: '/compliance', priority: 0.6, changefreq: 'monthly' },
  
  // Legal Pages
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/cookies', priority: 0.5, changefreq: 'yearly' },
  { path: '/sitemap', priority: 0.3, changefreq: 'monthly' },
  
  // Additional pages
  { path: '/tutorials', priority: 0.6, changefreq: 'weekly' },
  { path: '/consultation', priority: 0.7, changefreq: 'monthly' },
  { path: '/demo', priority: 0.6, changefreq: 'monthly' },
  { path: '/support', priority: 0.6, changefreq: 'monthly' }
];

// Generate sitemap XML
const baseUrl = 'https://ziontechgroup.com';
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist folder
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// Also create a sitemap.txt for easier reading
const sitemapTxt = routes.map(route => `${baseUrl}${route.path}`).join('\n');
fs.writeFileSync(path.join(distDir, 'sitemap.txt'), sitemapTxt);

console.log('Sitemap generated successfully!');
console.log(`Found ${routes.length} routes`);