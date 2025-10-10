import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract all links from Navigation.tsx and Footer.tsx
const navigationLinks = [
  // Main navigation links
  '/',
  '/about',
  '/services', 
  '/pricing',
  '/blog',
  '/contact',
  
  // AI Services
  '/ai-services',
  '/ai-marketing',
  '/ai-customer-support',
  '/ai-data-analytics',
  '/ai-content-generation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-ecommerce-solutions',
  '/ai-cybersecurity',
  '/ai-mobile-app-development',
  '/ai-sales-automation',
  '/ai-workflow-automation',
  '/ai-data-visualization',
  '/ai-lead-generation',
  '/ai-document-processing',
  '/ai-automation',
  
  // IT Services
  '/cloud-services',
  '/cloud-migration',
  '/devops',
  '/database',
  '/cybersecurity',
  '/security-monitoring',
  '/penetration-testing',
  '/it-infrastructure',
  '/managed-it',
  '/it-consulting',
  '/data-analytics',
  '/mobile-development',
  '/web-development',
  '/process-automation',
  
  // Micro SAAS
  '/micro-saas',
  '/ai-analytics-dashboard',
  '/ai-crm',
  '/security-monitoring-suite',
  '/cloud-infrastructure-manager',
  '/email-marketing-automation',
  '/project-management-pro',
  '/ecommerce-analytics-pro',
  '/ai-recruitment-assistant',
  '/medical-records-manager',
  '/ai-accounting-assistant',
  '/property-management-ai',
  '/legal-document-manager',
  '/online-learning-platform',
  '/supply-chain-optimizer',
  '/ai-writing-assistant',
  '/ai-design-studio',
  
  // Emerging Tech
  '/quantum-computing',
  '/robotics',
  '/iot-edge-computing',
  '/blockchain-web3',
  '/business-intelligence',
  '/autonomous-systems',
  '/5g-implementation',
  '/ai-3d-generation',
  '/ai-holographic-workspace',
  
  // Footer links
  '/team',
  '/case-studies',
  '/careers',
  '/news',
  '/partners',
  '/docs',
  '/api-docs',
  '/support',
  '/status',
  '/privacy',
  '/terms',
  '/cookies'
];

// Get all existing pages
const appDir = '/workspace/app';
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
        const relativePath = fullPath.replace(appDir, '');
        const route = relativePath === '' ? '/' : relativePath;
        existingPages.push(route);
      }
      // Recursively search subdirectories
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Find missing pages
const missingPages = [];
const brokenLinks = [];

for (const link of navigationLinks) {
  if (!existingPages.includes(link)) {
    missingPages.push(link);
  }
}

// Check for pages that exist but might have broken links
const existingPageSet = new Set(existingPages);
for (const page of existingPages) {
  // Check if any navigation links point to non-existent sub-pages
  const pageDir = path.join(appDir, page === '/' ? '' : page);
  if (fs.existsSync(pageDir)) {
    // This is a basic check - in reality we'd need to parse the actual content
  }
}

console.log('=== ANALYSIS RESULTS ===');
console.log(`Total navigation links: ${navigationLinks.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);

console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(`- ${page}`));

console.log('\n=== EXISTING PAGES (sample) ===');
existingPages.slice(0, 20).forEach(page => console.log(`+ ${page}`));

// Write results to file
const results = {
  totalNavigationLinks: navigationLinks.length,
  totalExistingPages: existingPages.length,
  missingPages: missingPages,
  existingPages: existingPages,
  analysisDate: new Date().toISOString()
};

fs.writeFileSync('/workspace/missing-pages-analysis.json', JSON.stringify(results, null, 2));
console.log('\nResults saved to missing-pages-analysis.json');