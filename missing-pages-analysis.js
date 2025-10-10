import fs from 'fs';
import path from 'path';

// Get all existing pages
const existingPages = [
  'about', 'ai-analytics-dashboard', 'ai-chatbot-builder', 'ai-content-generation', 'ai-crm',
  'ai-customer-support', 'ai-cybersecurity', 'ai-data-analytics', 'ai-data-visualization',
  'ai-document-processing', 'ai-ecommerce-solutions', 'ai-email-assistant', 'ai-fintech',
  'ai-healthcare', 'ai-lead-generation', 'ai-marketing', 'ai-mobile-app-development',
  'ai-sales-automation', 'ai-scheduler', 'ai-services', 'ai-workflow-automation',
  'ai-writing-assistant', 'analytics-tools', 'api', 'api-docs', 'autonomous-systems',
  'blockchain', 'blockchain-web3', 'business-apps', 'business-intelligence', 'careers',
  'case-studies', 'cloud-services', 'compliance', 'contact', 'cookies', 'cybersecurity',
  'database', 'developer-tools', 'devops', 'docs', 'enterprise', 'expense-tracker',
  'gdpr', 'iot-edge', 'iot-edge-computing', 'it-infrastructure', 'it-services',
  'marketing-tools', 'micro-saas', 'networking', 'news', 'offline', 'privacy',
  'productivity', 'quantum-computing', 'robotics', 'security', 'services',
  'services-advertising', 'sitemap', 'smart-analytics', 'status', 'support',
  'system-status', 'task-manager-pro', 'team', 'terms'
];

// Links found in navigation and footer
const referencedLinks = [
  // From Navigation.tsx
  '/', '/about', '/services', '/case-studies', '/blog', '/contact',
  
  // AI Services from Navigation
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech',
  '/ai-content-generation', '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation',
  '/ai-mobile-app-development', '/ai-ecommerce-solutions', '/ai-customer-support',
  '/ai-sales-automation', '/ai-data-visualization', '/ai-lead-generation',
  '/ai-document-processing', '/ai-predictive-analytics', '/ai-image-recognition',
  '/ai-voice-processing', '/ai-recommendation-engine', '/ai-sentiment-analysis',
  '/ai-research-assistant',
  
  // IT Services from Navigation
  '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-services', '/devops',
  '/database', '/networking', '/system-admin', '/it-consulting', '/managed-it',
  '/it-training', '/it-project-management', '/performance-optimization',
  '/backup-recovery', '/enterprise-solutions', '/it-infrastructure-design',
  
  // Micro SAAS from Navigation
  '/micro-saas', '/developer-tools', '/business-apps', '/marketing-tools',
  '/analytics-tools', '/communication-tools', '/productivity', '/hr-recruitment-tools',
  '/customer-support-tools', '/sales-crm-tools', '/project-management-tools',
  '/content-creation-tools',
  
  // Specialized from Navigation
  '/quantum-computing', '/autonomous-systems', '/blockchain-web3', '/iot-edge-computing',
  '/business-intelligence', '/robotics', '/ar-vr-solutions', '/smart-cities',
  '/digital-transformation', '/innovation-labs', '/sustainability-tech', '/future-technologies',
  
  // From Footer
  '/pricing', '/demo', '/consultation', '/privacy', '/terms', '/cookies',
  
  // Additional links from page.tsx
  '/ai-crm', '/ai-analytics', '/ai-content-studio', '/ai-chatbot-builder',
  '/ai-email-marketing', '/ai-mobile-builder', '/ai-seo-optimizer', '/ai-invoice-generator',
  '/ai-lead-scoring', '/ai-social-media-manager', '/ai-ecommerce-assistant',
  '/ai-document-processor', '/ai-design-studio', '/ai-security-monitor',
  '/ai-financial-planner', '/ai-health-tracker', '/ai-learning-platform',
  '/cloud-migration', '/cybersecurity-suite', '/devops-cicd', '/database-management',
  '/network-solutions', '/mobile-app-development', '/it-consulting', '/it-support',
  '/system-administration', '/it-infrastructure-design', '/performance-optimization',
  '/backup-recovery', '/it-project-management', '/enterprise-solutions', '/it-training',
  '/ai-customer-support', '/ai-sales-automation', '/ai-workflow-automation',
  '/ai-data-visualization', '/ai-lead-generation', '/ai-document-processing',
  '/ai-predictive-analytics', '/ai-image-recognition', '/ai-voice-processing',
  '/ai-recommendation-engine', '/ai-sentiment-analysis', '/ai-research-assistant',
  '/robotics', '/iot-edge-computing', '/blockchain-web3', '/business-intelligence',
  '/devops', '/ai-mobile-app-development', '/database', '/ai-writing-assistant',
  '/smart-analytics', '/ai-scheduler', '/expense-tracker', '/task-manager-pro',
  '/crm-lite', '/email-optimizer', '/social-media-manager', '/ai-design-studio',
  '/landing-page-builder', '/seo-optimizer', '/ad-campaign-manager', '/code-assistant',
  '/api-builder', '/bug-tracker-pro', '/doc-generator'
];

// Remove duplicates and normalize paths
const uniqueLinks = [...new Set(referencedLinks.map(link => link.replace('/', '')))];
const existingPagesSet = new Set(existingPages);

// Find missing pages
const missingPages = uniqueLinks.filter(link => 
  link !== '' && !existingPagesSet.has(link)
);

// Find broken links (pages that exist but might have issues)
const existingButReferenced = uniqueLinks.filter(link => 
  link !== '' && existingPagesSet.has(link)
);

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total referenced links: ${uniqueLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(`- /${page}`));

console.log('\n=== PAGES THAT EXIST BUT MIGHT NEED CONTENT ===');
existingButReferenced.forEach(page => console.log(`✓ /${page}`));

// Categorize missing pages
const missingByCategory = {
  'AI Services': missingPages.filter(page => page.startsWith('ai-')),
  'IT Services': missingPages.filter(page => page.startsWith('it-') || ['cybersecurity-suite', 'cloud-migration', 'devops-cicd', 'database-management', 'network-solutions', 'mobile-app-development', 'it-support', 'system-administration', 'performance-optimization', 'backup-recovery', 'it-project-management', 'enterprise-solutions', 'it-training'].includes(page)),
  'Micro SAAS': missingPages.filter(page => ['crm-lite', 'email-optimizer', 'social-media-manager', 'landing-page-builder', 'seo-optimizer', 'ad-campaign-manager', 'code-assistant', 'api-builder', 'bug-tracker-pro', 'doc-generator', 'hr-recruitment-tools', 'customer-support-tools', 'sales-crm-tools', 'project-management-tools', 'content-creation-tools'].includes(page)),
  'Specialized': missingPages.filter(page => ['ar-vr-solutions', 'smart-cities', 'digital-transformation', 'innovation-labs', 'sustainability-tech', 'future-technologies'].includes(page)),
  'General': missingPages.filter(page => ['pricing', 'demo', 'consultation'].includes(page))
};

console.log('\n=== MISSING PAGES BY CATEGORY ===');
Object.entries(missingByCategory).forEach(([category, pages]) => {
  if (pages.length > 0) {
    console.log(`\n${category}:`);
    pages.forEach(page => console.log(`  - /${page}`));
  }
});

// Write to file
fs.writeFileSync('/workspace/missing-pages-report.json', JSON.stringify({
  totalReferencedLinks: uniqueLinks.length,
  existingPages: existingPages.length,
  missingPages: missingPages.length,
  missingPagesList: missingPages,
  missingByCategory,
  timestamp: new Date().toISOString()
}, null, 2));

console.log('\n=== REPORT SAVED ===');
console.log('Detailed report saved to: /workspace/missing-pages-report.json');