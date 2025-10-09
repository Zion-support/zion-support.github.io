const fs = require('fs');
const path = require('path');

// Pages referenced in navigation
const navPages = [
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech',
  '/ai-content-generation', '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation',
  '/ai-mobile-app-development', '/ai-ecommerce-solutions', '/ai-customer-support',
  '/ai-sales-automation', '/ai-data-visualization', '/ai-lead-generation', '/ai-document-processing',
  '/ai-predictive-analytics', '/ai-image-recognition', '/ai-voice-processing',
  '/ai-recommendation-engine', '/ai-sentiment-analysis', '/ai-research-assistant',
  '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-services', '/devops',
  '/database', '/networking', '/system-admin', '/it-consulting', '/managed-it',
  '/it-training', '/it-project-management', '/performance-optimization', '/backup-recovery',
  '/enterprise-solutions', '/it-infrastructure-design',
  '/micro-saas', '/developer-tools', '/business-apps', '/marketing-tools', '/analytics-tools',
  '/communication-tools', '/productivity', '/hr-recruitment-tools', '/customer-support-tools',
  '/sales-crm-tools', '/project-management-tools', '/content-creation-tools',
  '/quantum-computing', '/autonomous-systems', '/blockchain-web3', '/iot-edge-computing',
  '/business-intelligence', '/robotics', '/ar-vr-solutions', '/smart-cities',
  '/digital-transformation', '/innovation-labs', '/sustainability-tech', '/future-technologies',
  '/about', '/case-studies', '/blog', '/contact'
];

// Check which pages exist
const existingPages = [];
const missingPages = [];

navPages.forEach(page => {
  const pagePath = path.join('/workspace/app', page, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    existingPages.push(page);
  } else {
    missingPages.push(page);
  }
});

console.log('Existing pages:', existingPages.length);
console.log('Missing pages:', missingPages.length);
console.log('\nMissing pages:');
missingPages.forEach(page => console.log(page));
