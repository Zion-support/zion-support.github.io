import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Navigation links from EnhancedNavigation.tsx
const navigationLinks = [
  // AI Services
  '/ai-services',
  '/ai-analytics-dashboard-pro',
  '/ai-cybersecurity-suite-pro',
  '/ai-content-generation-pro',
  '/ai-customer-support-chatbot',
  '/ai-code-assistant-pro',
  '/ai-business-intelligence-pro',
  '/ai-automation-platform',
  '/ai-data-analytics-pro',
  '/ai-marketing-automation',
  '/ai-hr-recruitment-pro',
  '/ai-financial-analysis',
  '/ai-supply-chain-optimizer',
  '/ai-voice-assistant-pro',
  '/ai-image-recognition-pro',
  '/ai-predictive-maintenance',
  '/ai-sentiment-analysis-pro',
  '/ai-recommendation-engine',
  '/ai-fraud-detection-pro',
  '/ai-language-translation',
  '/ai-chatbot-enterprise',
  '/ai-data-mining-pro',
  '/ai-video-analysis',
  '/ai-time-series-forecasting',
  '/ai-nlp-text-analysis',
  
  // IT Services
  '/services',
  '/ai-business-intelligence',
  '/ai-customer-support',
  '/ai-content-generation',
  '/ai-cybersecurity',
  '/5g-solutions',
  '/cloud-infrastructure',
  '/ai-data-analytics',
  '/ai-code-assistant',
  '/ai-marketing-automation',
  '/ai-document-processing',
  '/ai-crm-assistant',
  '/ai-financial-analytics',
  '/ai-healthcare-diagnostics',
  '/ai-supply-chain-optimizer',
  '/ai-legal-research',
  '/ai-energy-management',
  '/database-management',
  '/infrastructure-monitoring',
  '/network-security',
  '/cloud-migration',
  '/devops-solutions',
  '/backup-disaster-recovery',
  '/mobile-development',
  '/web-development',
  '/it-support',
  '/network-infrastructure',
  '/it-consulting',
  '/cybersecurity-audit',
  '/data-center-services',
  '/asset-management',
  
  // Micro SAAS
  '/micro-saas',
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-ai-inventory-manager',
  '/zion-hr-assistant-pro',
  '/zion-ai-accounting-suite',
  '/zion-ecommerce-optimizer',
  '/zion-ai-customer-insights',
  '/zion-ai-lead-scoring',
  '/zion-ai-document-processor',
  '/zion-ai-social-listener',
  '/zion-ai-email-optimizer',
  '/zion-ai-meeting-assistant',
  '/zion-ai-expense-tracker',
  '/zion-ai-survey-builder',
  '/zion-ai-chatbot-builder',
  '/zion-ai-workflow-automation',
  '/zion-ai-seo-optimizer',
  '/zion-ai-data-warehouse',
  '/zion-ai-mobile-app-builder',
  '/zion-ai-api-manager',
  '/zion-ai-backup-manager',
  '/zion-ai-testing-automation',
  
  // 5G Solutions
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions',
  
  // Company
  '/about',
  '/team',
  '/careers',
  '/case-studies',
  '/blog',
  '/news',
  '/press',
  '/partners',
  
  // Quick Links
  '/pricing',
  '/demo',
  '/support',
  '/consultation'
];

// Get all existing pages
const appDir = path.join(__dirname, 'app');
const existingPages = [];

function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        existingPages.push(basePath + '/' + item);
      }
      scanDirectory(fullPath, basePath + '/' + item);
    }
  }
}

scanDirectory(appDir);

// Find missing pages
const missingPages = navigationLinks.filter(link => !existingPages.includes(link));

console.log('Missing Pages:');
missingPages.forEach(page => console.log(page));

console.log('\nTotal missing pages:', missingPages.length);
console.log('Total navigation links:', navigationLinks.length);
console.log('Total existing pages:', existingPages.length);