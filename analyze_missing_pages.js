#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract all links from navigation and footer
const navigationLinks = [
  '/', '/about', '/services', '/pricing', '/case-studies', '/blog', '/tutorials', '/contact',
  '/ai-services', '/it-services', '/micro-saas',
  '/consultation', '/demo', '/support', '/privacy', '/terms', '/cookies', '/sitemap'
];

// AI Services from navigation
const aiServices = [
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
  '/ai-voice-assistant', '/ai-content-generation-pro'
];

// IT Services from navigation
const itServices = [
  '/cloud-infrastructure', '/api-development', '/cybersecurity-solutions', '/database-management',
  '/mobile-development', '/web-development', '/devops-cicd', '/it-support',
  '/data-analytics-bi', '/custom-software', '/network-infrastructure', '/it-asset-management',
  '/it-security-services', '/it-project-management', '/cloud-native-development',
  '/ai-integration-services', '/blockchain-development', '/iot-development',
  '/e-commerce-development', '/api-development-advanced', '/data-engineering',
  '/cybersecurity-advanced', '/cloud-migration-advanced', '/devops-advanced',
  '/machine-learning-ops', '/enterprise-integration', '/performance-optimization',
  '/disaster-recovery-advanced', '/compliance-automation', '/cloud-cost-optimization',
  '/security-automation', '/data-visualization', '/workflow-automation', '/cloud-native-security'
];

// Micro SAAS Services
const microSaasServices = [
  '/zion-analytics-pro', '/zion-chat-ai', '/zion-security-shield', '/zion-cloud-vault',
  '/zion-content-studio', '/zion-crm-intelligence', '/zion-data-sync', '/zion-lead-magnet',
  '/zion-project-master', '/zion-email-automation', '/zion-inventory-smart', '/zion-invoice-genius',
  '/zion-workflow-automation', '/zion-performance-monitor', '/zion-compliance-manager',
  '/zion-social-scheduler', '/zion-ai-video-editor', '/zion-ai-translator-pro',
  '/zion-ai-code-reviewer', '/zion-customer-insights', '/zion-ai-email-assistant',
  '/zion-ai-meeting-assistant', '/zion-ai-seo-optimizer', '/zion-ai-data-cleaner',
  '/zion-ai-contract-analyzer', '/zion-ai-survey-builder', '/zion-ai-accounting-assistant',
  '/zion-ai-recruitment-pro', '/zion-ai-content-moderation', '/zion-ai-predictive-maintenance',
  '/zion-ai-energy-manager', '/zion-ai-supply-chain-optimizer', '/zion-ai-fraud-detector',
  '/zion-ai-customer-service-pro', '/zion-ai-marketing-automation', '/zion-ai-document-ai'
];

// Emerging Technologies
const emergingTech = [
  '/5g-implementation', '/ai-3d-generation', '/ai-holographic-workspace', '/ai-autonomous-systems',
  '/ai-blockchain-solutions', '/ai-edge-computing', '/quantum-computing', '/ar-vr-solutions',
  '/iot-integration', '/machine-learning'
];

// Company links from footer
const companyLinks = [
  '/about', '/team', '/case-studies', '/blog', '/careers', '/partners', '/support', '/status'
];

// Resource links from footer
const resourceLinks = [
  '/pricing', '/faq', '/docs', '/api-docs', '/tutorials', '/community', '/demo', '/compliance'
];

// Enterprise links from footer
const enterpriseLinks = [
  '/enterprise', '/digital-transformation', '/business-intelligence', '/edge-computing',
  '/consultation', '/custom-software'
];

// Combine all links
const allLinks = [
  ...navigationLinks,
  ...aiServices,
  ...itServices,
  ...microSaasServices,
  ...emergingTech,
  ...companyLinks,
  ...resourceLinks,
  ...enterpriseLinks
];

// Remove duplicates
const uniqueLinks = [...new Set(allLinks)];

// Check which pages exist
const appDir = path.join(__dirname, 'app');
const existingPages = [];

function checkPageExists(link) {
  if (link === '/') {
    return fs.existsSync(path.join(appDir, 'page.tsx'));
  }
  
  const pagePath = path.join(appDir, link.substring(1), 'page.tsx');
  return fs.existsSync(pagePath);
}

const missingPages = [];
const existingPagesList = [];

uniqueLinks.forEach(link => {
  if (checkPageExists(link)) {
    existingPagesList.push(link);
  } else {
    missingPages.push(link);
  }
});

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total unique links: ${uniqueLinks.length}`);
console.log(`Existing pages: ${existingPagesList.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXISTING PAGES ===');
existingPagesList.forEach(page => console.log(page));

// Write results to file
const results = {
  totalLinks: uniqueLinks.length,
  existingPages: existingPagesList.length,
  missingPages: missingPages.length,
  missingPagesList: missingPages,
  existingPagesList: existingPagesList
};

fs.writeFileSync('missing_pages_analysis.json', JSON.stringify(results, null, 2));
console.log('\nResults saved to missing_pages_analysis.json');