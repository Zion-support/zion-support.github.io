import fs from 'fs';

// Read existing pages
const existingPages = fs.readFileSync('existing_pages.txt', 'utf8').split('\n').filter(Boolean);

// Navigation paths from the Navigation component
const navigationPaths = [
  '/ai-services',
  '/ai-marketing',
  '/ai-automation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-content-generation',
  '/ai-data-analytics',
  '/ai-cybersecurity',
  '/ai-workflow-automation',
  '/ai-mobile-app-development',
  '/ai-ecommerce-solutions',
  '/ai-customer-support',
  '/ai-sales-automation',
  '/ai-data-visualization',
  '/ai-lead-generation',
  '/ai-document-processing',
  '/ai-predictive-analytics',
  '/ai-image-recognition',
  '/ai-voice-processing',
  '/ai-recommendation-engine',
  '/ai-sentiment-analysis',
  '/ai-research-assistant',
  '/it-services',
  '/it-infrastructure',
  '/cybersecurity',
  '/cloud-services',
  '/devops',
  '/database',
  '/networking',
  '/system-admin',
  '/it-consulting',
  '/managed-it',
  '/it-training',
  '/it-project-management',
  '/performance-optimization',
  '/backup-recovery',
  '/enterprise-solutions',
  '/it-infrastructure-design',
  '/micro-saas',
  '/developer-tools',
  '/business-apps',
  '/marketing-tools',
  '/analytics-tools',
  '/communication-tools',
  '/productivity',
  '/hr-recruitment-tools',
  '/customer-support-tools',
  '/sales-crm-tools',
  '/project-management-tools',
  '/content-creation-tools',
  '/quantum-computing',
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/business-intelligence',
  '/robotics',
  '/ar-vr-solutions',
  '/smart-cities',
  '/digital-transformation',
  '/innovation-labs',
  '/sustainability-tech',
  '/future-technologies',
  '/about',
  '/case-studies',
  '/blog',
  '/contact',
  '/services',
  '/pricing',
  '/demo',
  '/consultation',
  '/privacy',
  '/terms',
  '/cookies'
];

// Footer paths
const footerPaths = [
  '/ai-services',
  '/it-services',
  '/services',
  '/pricing',
  '/demo',
  '/consultation',
  '/privacy',
  '/terms',
  '/cookies'
];

// Combine all paths
const allPaths = [...new Set([...navigationPaths, ...footerPaths])];

// Check which pages are missing
const missingPages = allPaths
  .map(path => path.replace('/', ''))
  .filter(path => path && !existingPages.includes(path));

console.log('Missing pages:');
missingPages.forEach(page => console.log(`- ${page}`));

console.log(`\nTotal missing pages: ${missingPages.length}`);

// Check for broken internal links
const brokenLinks = [];
allPaths.forEach(path => {
  const pageName = path.replace('/', '');
  if (pageName && !existingPages.includes(pageName)) {
    brokenLinks.push(path);
  }
});

console.log('\nBroken internal links:');
brokenLinks.forEach(link => console.log(`- ${link}`));

// Write missing pages to file
fs.writeFileSync('missing_pages.txt', missingPages.join('\n'));
console.log('\nMissing pages list saved to missing_pages.txt');