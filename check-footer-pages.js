import fs from 'fs';

// Extract all footer paths
const footerPaths = [
  // AI Services
  '/ai-workflow-automation', '/ai-customer-support', '/ai-data-analytics', '/ai-content-generation',
  '/ai-healthcare', '/ai-fintech', '/ai-computer-vision', '/ai-ml-platform', '/ai-quantum-computing',
  '/ai-drug-discovery-pro', '/ai-climate-solutions-pro', '/ai-space-technology-pro',
  '/ai-autonomous-systems', '/ai-blockchain-solutions', '/ai-edge-computing', '/ai-cybersecurity',
  
  // IT Services
  '/cloud-migration', '/cybersecurity', '/it-infrastructure', '/it-support', '/custom-development',
  '/devops-cicd', '/database-management', '/network-design', '/ai-infrastructure-monitoring',
  '/blockchain-integration-services', '/ai-api-management', '/smart-contract-security-audit',
  '/healthcare-it', '/financial-it', '/edge-computing', '/5g-implementation',
  
  // Micro SAAS
  '/ai-project-manager', '/ai-social-media-manager', '/ai-analytics-dashboard', '/ai-email-marketing',
  '/ai-customer-support-bot', '/ai-content-studio', '/ai-financial-advisor', '/ai-workflow-automation',
  '/ai-smart-calendar', '/ai-content-writer', '/ai-video-generator', '/ai-crm-assistant',
  '/ai-quantum-financial-oracle', '/ai-neural-memory-assistant', '/ai-holographic-workspace',
  '/ai-3d-generation',
  
  // Emerging Technologies
  '/ai-quantum-computing', '/ai-autonomous-systems', '/ai-blockchain-solutions', '/ai-edge-computing',
  '/ar-vr-platform', '/smart-city-infrastructure', '/digital-transformation', '/innovation-labs',
  '/ai-business-intelligence', '/robotics-integration', '/digital-twin-platform', '/ai-space-technology-pro',
  
  // Company
  '/about', '/team', '/careers', '/case-studies', '/blog', '/pricing', '/news', '/partners', '/investors',
  
  // Support
  '/contact', '/support', '/docs', '/api-docs', '/status', '/health', '/help', '/community', '/training',
  
  // Legal
  '/privacy', '/terms', '/cookies', '/gdpr', '/security', '/compliance', '/data-protection', '/accessibility', '/sitemap'
];

// Check if page exists
function checkPageExists(routePath) {
  if (routePath === '/') {
    return fs.existsSync('/workspace/app/page.tsx');
  }
  
  const pagePath = `/workspace/app${routePath}/page.tsx`;
  return fs.existsSync(pagePath);
}

// Find missing pages
const missingPages = [];
const existingPages = [];

footerPaths.forEach(path => {
  if (checkPageExists(path)) {
    existingPages.push(path);
  } else {
    missingPages.push(path);
  }
});

console.log('=== MISSING FOOTER PAGES ===');
missingPages.forEach(page => console.log(page));

console.log(`\nTotal footer links: ${footerPaths.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);