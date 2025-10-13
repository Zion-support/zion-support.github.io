// Analysis of missing pages based on navigation and footer
const missingPages = {
  // Main navigation pages that exist in routing
  existing: [
    '/', '/about', '/contact', '/services', '/pricing', '/case-studies', 
    '/blog', '/team', '/careers', '/privacy', '/terms', '/cookies'
  ],
  
  // AI Services - referenced in navigation but missing from routing
  aiServices: [
    '/ai-services', '/ai-analytics', '/ai-automation', '/ai-content-generation',
    '/ai-customer-support', '/ai-cybersecurity', '/ai-marketing-automation'
  ],
  
  // IT Services - referenced in navigation but missing from routing
  itServices: [
    '/it-services', '/cloud-services', '/cybersecurity', '/custom-development',
    '/web-development', '/mobile-development', '/database-management',
    '/network-infrastructure', '/data-analytics', '/cloud-infrastructure',
    '/cybersecurity-solutions', '/custom-software'
  ],
  
  // 5G Solutions - exist in routing
  fiveGServices: [
    '/5g-solutions', '/5g-implementation', '/5g-edge-computing', '/5g-iot-solutions',
    '/5g-smart-city-solutions', '/5g-private-networks', '/5g-data-analytics',
    '/5g-mobile-applications', '/5g-network-infrastructure'
  ],
  
  // Micro SAAS - referenced in navigation but missing from routing
  microSaas: [
    '/zion-analytics-pro', '/zion-security-shield', '/zion-cloud-vault',
    '/zion-content-studio', '/zion-data-sync', '/zion-lead-magnet',
    '/zion-project-master', '/zion-email-automation'
  ],
  
  // Support pages - referenced in footer but missing from routing
  supportPages: [
    '/support', '/tutorials', '/demo', '/sitemap', '/consultation'
  ]
};

// Check which pages exist in the app directory
import fs from 'fs';
import path from 'path';

function checkPageExists(pagePath) {
  const fullPath = path.join('/workspace/app', pagePath, 'page.tsx');
  return fs.existsSync(fullPath);
}

console.log('=== MISSING PAGES ANALYSIS ===\n');

// Check AI Services
console.log('AI Services:');
missingPages.aiServices.forEach(page => {
  const exists = checkPageExists(page);
  console.log(`${exists ? '✓' : '✗'} ${page}`);
});

console.log('\nIT Services:');
missingPages.itServices.forEach(page => {
  const exists = checkPageExists(page);
  console.log(`${exists ? '✓' : '✗'} ${page}`);
});

console.log('\nMicro SAAS:');
missingPages.microSaas.forEach(page => {
  const exists = checkPageExists(page);
  console.log(`${exists ? '✓' : '✗'} ${page}`);
});

console.log('\nSupport Pages:');
missingPages.supportPages.forEach(page => {
  const exists = checkPageExists(page);
  console.log(`${exists ? '✓' : '✗'} ${page}`);
});

console.log('\n=== SUMMARY ===');
const allMissingPages = [
  ...missingPages.aiServices,
  ...missingPages.itServices,
  ...missingPages.microSaas,
  ...missingPages.supportPages
];

const actuallyMissing = allMissingPages.filter(page => !checkPageExists(page));
console.log(`Total missing pages: ${actuallyMissing.length}`);
console.log('Missing pages:', actuallyMissing);