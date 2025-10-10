import fs from 'fs';

// Read existing pages
const existingPages = fs.readFileSync('/workspace/existing_pages.txt', 'utf8')
  .split('\n')
  .filter(page => page.trim())
  .map(page => page.trim());

// Footer links from the Footer component
const footerLinks = [
  // AI Services
  '/ai-workflow-automation',
  '/ai-customer-support',
  '/ai-data-analytics',
  '/ai-content-generation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-computer-vision',
  '/ai-ml-platform',
  '/ai-quantum-computing',
  '/ai-drug-discovery-pro',
  '/ai-climate-solutions-pro',
  '/ai-space-technology-pro',
  
  // IT Services
  '/cloud-migration',
  '/cybersecurity',
  '/it-infrastructure',
  '/it-support',
  '/custom-development',
  '/devops-cicd',
  '/database-management',
  '/network-design',
  '/ai-infrastructure-monitoring',
  '/blockchain-integration-services',
  '/ai-api-management',
  '/smart-contract-security-audit',
  
  // Micro SAAS
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-analytics-dashboard',
  '/ai-email-marketing',
  '/ai-customer-support-bot',
  '/ai-content-studio',
  '/ai-financial-advisor',
  '/ai-workflow-automation',
  '/ai-smart-calendar',
  '/ai-content-writer',
  '/ai-video-generator',
  '/ai-crm-assistant',
  
  // Emerging Technologies
  '/ai-quantum-computing',
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/ar-vr-solutions',
  '/smart-cities',
  '/digital-transformation',
  '/innovation-labs',
  '/business-intelligence',
  '/robotics',
  
  // Company Links
  '/about',
  '/team',
  '/careers',
  '/case-studies',
  '/blog',
  '/pricing',
  '/micro-saas',
  '/ai-services',
  '/it-services',
  '/demo',
  '/consultation',
  
  // Support Links
  '/contact',
  '/support',
  '/docs',
  '/api-docs',
  '/status',
  '/health',
  '/demo',
  '/consultation',
  
  // Legal Links
  '/privacy',
  '/terms',
  '/cookies',
  '/gdpr',
  '/security',
  '/compliance'
];

// Check which pages are missing
const missingPages = [];
const existingPagesSet = new Set(existingPages);

footerLinks.forEach(link => {
  const pagePath = link.replace('/', '');
  if (!existingPagesSet.has(pagePath)) {
    missingPages.push(link);
  }
});

console.log('Missing Pages:');
missingPages.forEach(page => console.log(`  ${page}`));
console.log(`\nTotal missing pages: ${missingPages.length}`);

// Also check for pages that exist but might have broken links
console.log('\nChecking for potential issues...');

// Check if main navigation pages exist
const mainNavPages = ['/', '/about', '/services', '/pricing', '/case-studies', '/blog', '/contact'];
mainNavPages.forEach(page => {
  const pagePath = page === '/' ? 'page' : page.replace('/', '');
  if (!existingPagesSet.has(pagePath)) {
    console.log(`  Missing main nav page: ${page}`);
  }
});

// Write missing pages to file
fs.writeFileSync('/workspace/missing_pages.txt', missingPages.join('\n'));
console.log('\nMissing pages list saved to missing_pages.txt');