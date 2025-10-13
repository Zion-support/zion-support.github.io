import fs from 'fs';
import path from 'path';

// Routes defined in App.tsx
const definedRoutes = [
  '/', '/about', '/contact', '/services', '/pricing', '/blog', '/case-studies', '/careers',
  '/ai-services', '/it-services', '/micro-saas', '/tutorials', '/consultation', '/demo',
  '/support', '/privacy', '/terms', '/cookies', '/sitemap',
  '/ai-analytics', '/ai-automation', '/ai-business-intelligence', '/ai-content-generation',
  '/ai-customer-service', '/ai-data-analytics', '/ai-email-automation', '/ai-fraud-detection',
  '/ai-healthcare', '/ai-marketing', '/ai-predictive-analytics', '/ai-project-management',
  '/ai-recommendation-engine', '/ai-sales-automation', '/ai-workflow-automation',
  '/cloud-infrastructure', '/cybersecurity-solutions', '/web-development', '/mobile-development',
  '/database-management', '/custom-software', '/network-infrastructure', '/cloud-native-development',
  '/blockchain-development', '/e-commerce-development', '/data-engineering', '/cybersecurity-advanced',
  '/cloud-migration-advanced', '/machine-learning-ops', '/enterprise-integration', '/performance-optimization',
  '/disaster-recovery-advanced', '/compliance-automation', '/cloud-cost-optimization', '/security-automation',
  '/data-visualization', '/workflow-automation', '/cloud-native-security', '/data-analytics',
  '/iot-solutions', '/devops-solutions', '/machine-learning', '/quantum-computing', '/robotics',
  '/zion-analytics-pro', '/zion-security-shield', '/zion-cloud-vault', '/zion-content-studio',
  '/zion-data-sync', '/zion-lead-magnet', '/zion-project-master', '/zion-email-automation',
  '/zion-social-scheduler', '/zion-workflow-automation', '/zion-invoice-genius', '/zion-inventory-smart',
  '/zion-compliance-manager', '/zion-performance-monitor', '/5g-data-analytics', '/5g-edge-computing',
  '/5g-implementation', '/5g-mobile-applications', '/5g-network-infrastructure', '/5g-private-networks',
  '/5g-smart-city-solutions', '/5g-solutions'
];

// Get all existing page files
const appDir = './app';
const existingPages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const route = '/' + fullPath.replace('./app/', '').replace(/\\/g, '/');
        existingPages.push(route);
      }
      // Recursively check subdirectories
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Find missing pages
const missingPages = definedRoutes.filter(route => {
  if (route === '/') return false; // Home page exists
  return !existingPages.includes(route);
});

// Find extra pages (pages that exist but aren't in routes)
const extraPages = existingPages.filter(page => {
  if (page === '/') return false; // Home page
  return !definedRoutes.includes(page);
});

console.log('=== MISSING PAGES (defined in routes but no page.tsx) ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXTRA PAGES (page.tsx exists but not in routes) ===');
extraPages.forEach(page => console.log(page));

console.log(`\nTotal defined routes: ${definedRoutes.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Extra pages: ${extraPages.length}`);