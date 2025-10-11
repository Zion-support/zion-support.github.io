import fs from 'fs';
import path from 'path';

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = new Set();

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if there's a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = fullPath.replace(appDir, '');
        const route = relativePath.replace(/\\/g, '/') || '/';
        existingPages.add(route);
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath);
    }
  }
}

scanDirectory(appDir);

// Navigation links from the Navigation component
const navigationLinks = [
  // AI Services
  '/ai-analytics', '/ai-automation', '/ai-chatbot-builder', '/ai-crm', '/ai-cybersecurity',
  '/ai-data-analytics', '/ai-healthcare', '/ai-financial-services', '/ai-computer-vision',
  '/ai-voice-solutions', '/ai-ecommerce-solutions', '/ai-hr-solutions', '/ai-content-generation',
  '/ai-workflow-automation', '/ai-document-processing', '/ai-predictive-analytics',
  '/ai-edge-computing', '/ai-video-analysis', '/ai-speech-synthesis', '/ai-recommendation-engine',
  '/ai-sentiment-analysis', '/ai-chatbot-enterprise', '/ai-content-moderation',
  '/ai-predictive-modeling', '/ai-document-intelligence', '/ai-conversation-analytics',
  '/ai-supply-chain-ai', '/ai-healthcare-diagnostics', '/ai-financial-forecasting',
  '/ai-iot-analytics', '/ai-conversational-ai', '/ai-automated-testing',
  '/ai-knowledge-management', '/ai-customer-churn', '/ai-automated-reporting',
  '/ai-voice-assistant', '/ai-content-generation-pro',
  
  // IT Services
  '/cloud-infrastructure', '/api-development', '/cybersecurity-solutions', '/database-management',
  '/mobile-development', '/web-development', '/devops-cicd', '/it-support', '/data-analytics-bi',
  '/custom-software', '/network-infrastructure', '/it-asset-management', '/it-security-services',
  '/it-project-management', '/cloud-native-development', '/ai-integration-services',
  '/blockchain-development', '/iot-development', '/e-commerce-development',
  '/api-development-advanced', '/data-engineering', '/cybersecurity-advanced',
  '/cloud-migration-advanced', '/devops-advanced', '/machine-learning-ops',
  '/enterprise-integration', '/performance-optimization', '/disaster-recovery-advanced',
  '/compliance-automation', '/cloud-cost-optimization', '/security-automation',
  '/data-visualization', '/workflow-automation', '/cloud-native-security',
  
  // Micro SAAS
  '/zion-analytics-pro', '/zion-chat-ai', '/zion-security-shield', '/zion-cloud-vault',
  '/zion-content-studio', '/zion-crm-intelligence', '/zion-data-sync', '/zion-lead-magnet',
  '/zion-project-master', '/zion-email-automation', '/zion-inventory-smart',
  '/zion-invoice-genius', '/zion-workflow-automation', '/zion-performance-monitor',
  '/zion-compliance-manager', '/zion-social-scheduler', '/zion-ai-video-editor',
  '/zion-ai-translator-pro', '/zion-ai-code-reviewer', '/zion-customer-insights',
  '/zion-ai-email-assistant', '/zion-ai-meeting-assistant', '/zion-ai-seo-optimizer',
  '/zion-ai-data-cleaner', '/zion-ai-contract-analyzer', '/zion-ai-survey-builder',
  '/zion-ai-accounting-assistant', '/zion-ai-recruitment-pro', '/zion-ai-content-moderation',
  '/zion-ai-predictive-maintenance', '/zion-ai-energy-manager', '/zion-ai-supply-chain-optimizer',
  '/zion-ai-fraud-detector', '/zion-ai-customer-service-pro', '/zion-ai-marketing-automation',
  '/zion-ai-document-ai',
  
  // Emerging Tech
  '/5g-implementation', '/ai-3d-generation', '/ai-holographic-workspace', '/ai-autonomous-systems',
  '/ai-blockchain-solutions', '/ai-edge-computing', '/quantum-computing', '/ar-vr-solutions',
  '/iot-integration', '/machine-learning'
];

// Footer links
const footerLinks = [
  '/about', '/team', '/case-studies', '/blog', '/careers', '/partners', '/support', '/status',
  '/pricing', '/faq', '/docs', '/api-docs', '/tutorials', '/community', '/demo', '/compliance',
  '/enterprise', '/digital-transformation', '/business-intelligence', '/edge-computing',
  '/consultation', '/custom-software'
];

// Combine all links
const allLinks = [...new Set([...navigationLinks, ...footerLinks])];

// Find missing pages
const missingPages = [];
const existingPagesArray = Array.from(existingPages);

for (const link of allLinks) {
  if (!existingPagesArray.includes(link)) {
    missingPages.push(link);
  }
}

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total links checked: ${allLinks.length}`);
console.log(`Existing pages: ${existingPagesArray.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

// Also check for pages that exist but aren't linked
const unlinkedPages = existingPagesArray.filter(page => 
  page !== '/' && !allLinks.includes(page)
);

console.log('\n=== UNLINKED PAGES ===');
console.log(`Unlinked pages: ${unlinkedPages.length}`);
unlinkedPages.forEach(page => console.log(page));

// Write results to file
const results = {
  totalLinksChecked: allLinks.length,
  existingPages: existingPagesArray.length,
  missingPages: missingPages.length,
  missingPagesList: missingPages,
  unlinkedPages: unlinkedPages.length,
  unlinkedPagesList: unlinkedPages
};

fs.writeFileSync('/workspace/missing-pages-analysis.json', JSON.stringify(results, null, 2));
console.log('\nResults saved to missing-pages-analysis.json');