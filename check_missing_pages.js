import fs from 'fs';

// Read existing pages
const existingPages = fs.readFileSync('/workspace/existing_pages.txt', 'utf8')
  .split('\n')
  .filter(page => page.trim())
  .map(page => page.trim());

console.log('Existing pages count:', existingPages.length);

// Navigation links from the Navigation component
const navigationLinks = [
  // Main pages
  '/', '/about', '/case-studies', '/blog', '/contact', '/services', '/pricing', '/demo', '/consultation',
  '/team', '/careers', '/news', '/docs', '/support', '/status', '/privacy', '/terms', '/cookies',
  
  // AI Services
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech', 
  '/ai-content-generation', '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation',
  '/ai-mobile-app-development', '/ai-ecommerce-solutions', '/ai-customer-support', 
  '/ai-sales-automation', '/ai-data-visualization', '/ai-lead-generation', 
  '/ai-document-processing', '/ai-ml-platform', '/ai-computer-vision', '/ai-nlp',
  '/ai-robotics', '/ai-research-development', '/ai-edge-computing',
  
  // IT Services
  '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-migration', '/devops-cicd',
  '/database-management', '/network-solutions', '/system-administration', '/it-consulting',
  '/managed-it', '/it-training', '/it-project-management', '/performance-optimization',
  '/backup-recovery', '/enterprise-solutions', '/it-infrastructure-design', '/it-support',
  '/it-performance-monitoring', '/it-disaster-recovery', '/it-automation', '/global-it-support',
  
  // Micro SAAS
  '/ai-crm', '/ai-analytics', '/ai-content-studio', '/ai-chatbot-builder', '/ai-email-marketing',
  '/ai-mobile-builder', '/ai-seo-optimizer', '/ai-invoice-generator', '/ai-lead-scoring',
  '/ai-sales-forecasting', '/ai-ecommerce-optimizer', '/ai-design-assistant', 
  '/ai-document-processor', '/ai-security-monitor', '/ai-performance-tracker',
  '/ai-voice-assistant', '/ai-social-media-manager', '/ai-hr-assistant', '/ai-inventory-manager',
  '/ai-customer-insights', '/ai-ab-testing', '/ai-predictive-analytics',
  
  // Emerging Tech
  '/quantum-computing', '/autonomous-systems', '/blockchain-web3', '/iot-edge-computing',
  '/business-intelligence', '/robotics', '/ar-vr-solutions', '/smart-cities',
  '/digital-transformation', '/innovation-labs', '/sustainability-tech', '/future-technologies'
];

// Find missing pages
const missingPages = navigationLinks.filter(link => {
  const pagePath = link.replace('/', '');
  return pagePath && !existingPages.includes(pagePath);
});

console.log('\nMissing pages:');
missingPages.forEach(page => console.log(page));
console.log('\nTotal missing pages:', missingPages.length);

// Find broken links (pages that exist but might have issues)
const brokenLinks = [];
existingPages.forEach(page => {
  if (page && !navigationLinks.includes(`/${page}`) && page !== 'page') {
    brokenLinks.push(`/${page}`);
  }
});

console.log('\nPages not in navigation (potential broken links):');
brokenLinks.forEach(link => console.log(link));
console.log('\nTotal pages not in navigation:', brokenLinks.length);