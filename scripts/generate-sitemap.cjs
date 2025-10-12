#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Generating sitemap...');

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Define all routes
const routes = [
  // Main pages
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'weekly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/partners', priority: '0.5', changefreq: 'monthly' },
  { url: '/status', priority: '0.5', changefreq: 'daily' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/docs', priority: '0.6', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.6', changefreq: 'weekly' },
  { url: '/community', priority: '0.5', changefreq: 'weekly' },
  { url: '/compliance', priority: '0.5', changefreq: 'monthly' },

  // Service pages
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },

  // AI Service Pages
  { url: '/ai-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-chatbot-builder', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-cybersecurity', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-crm', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-financial-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-computer-vision', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-voice-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-ecommerce-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-hr-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-document-processing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-predictive-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-video-analysis', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-speech-synthesis', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-recommendation-engine', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-sentiment-analysis', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-chatbot-enterprise', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-moderation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-predictive-modeling', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-document-intelligence', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-conversation-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-supply-chain-ai', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-healthcare-diagnostics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-financial-forecasting', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-iot-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-conversational-ai', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automated-testing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-knowledge-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-customer-churn', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automated-reporting', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-voice-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-generation-pro', priority: '0.7', changefreq: 'monthly' },

  // IT Service Pages
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/api-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/devops-cicd', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-support', priority: '0.7', changefreq: 'monthly' },
  { url: '/data-analytics-bi', priority: '0.7', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-asset-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-security-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-project-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/cloud-native-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-integration-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/blockchain-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/iot-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/e-commerce-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/api-development-advanced', priority: '0.7', changefreq: 'monthly' },
  { url: '/data-engineering', priority: '0.7', changefreq: 'monthly' },
  { url: '/cybersecurity-advanced', priority: '0.7', changefreq: 'monthly' },
  { url: '/cloud-migration-advanced', priority: '0.7', changefreq: 'monthly' },
  { url: '/devops-advanced', priority: '0.7', changefreq: 'monthly' },
  { url: '/machine-learning-ops', priority: '0.7', changefreq: 'monthly' },
  { url: '/enterprise-integration', priority: '0.7', changefreq: 'monthly' },
  { url: '/performance-optimization', priority: '0.7', changefreq: 'monthly' },
  { url: '/disaster-recovery-advanced', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/cloud-cost-optimization', priority: '0.7', changefreq: 'monthly' },
  { url: '/security-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/data-visualization', priority: '0.7', changefreq: 'monthly' },
  { url: '/workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/cloud-native-security', priority: '0.7', changefreq: 'monthly' },

  // Micro SAAS Pages
  { url: '/zion-analytics-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-chat-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-crm-intelligence', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-data-sync', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-lead-magnet', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-project-master', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-email-automation', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-inventory-smart', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-invoice-genius', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-workflow-automation', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-performance-monitor', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-compliance-manager', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-social-scheduler', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-video-editor', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-translator-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-code-reviewer', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-customer-insights', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-email-assistant', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-meeting-assistant', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-seo-optimizer', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-data-cleaner', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-survey-builder', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-accounting-assistant', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-recruitment-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-content-moderation', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-predictive-maintenance', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-energy-manager', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-fraud-detector', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-customer-service-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation', priority: '0.6', changefreq: 'monthly' },
  { url: '/zion-ai-document-ai', priority: '0.6', changefreq: 'monthly' },

  // Emerging Technology Pages
  { url: '/5g-implementation', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-3d-generation', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-holographic-workspace', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-autonomous-systems', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-blockchain-solutions', priority: '0.6', changefreq: 'monthly' },
  { url: '/quantum-computing', priority: '0.6', changefreq: 'monthly' },
  { url: '/ar-vr-solutions', priority: '0.6', changefreq: 'monthly' },
  { url: '/iot-integration', priority: '0.6', changefreq: 'monthly' },
  { url: '/machine-learning', priority: '0.6', changefreq: 'monthly' }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist directory
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`Generated sitemap with ${routes.length} routes`);

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /pricing
Allow: /ai-services
Allow: /it-services
Allow: /micro-saas
Allow: /blog
Allow: /case-studies
Allow: /careers
Allow: /tutorials
Allow: /consultation
Allow: /demo
Allow: /support
Allow: /privacy
Allow: /terms
Allow: /cookies
Allow: /sitemap
Allow: /team
Allow: /partners
Allow: /status
Allow: /faq
Allow: /docs
Allow: /api-docs
Allow: /community
Allow: /compliance`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
console.log('Generated robots.txt');