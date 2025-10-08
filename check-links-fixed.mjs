import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findPages(fullPath);
    } else if (file === 'page.tsx') {
      const relativePath = path.relative(appDir, fullPath);
      let route = '/' + relativePath.replace('/page.tsx', '').replace('\\', '/');
      
      // Handle root page
      if (route === '/page.tsx') {
        route = '/';
      }
      
      pages.push(route);
    }
  }
}

findPages(appDir);

// Navigation links from the components
const navigationLinks = [
  '/',
  '/about',
  '/team',
  '/contact',
  '/privacy',
  '/terms',
  '/sitemap',
  '/case-studies',
  '/enterprise',
  '/blog',
  '/guides',
  '/services',
  '/ai-services',
  '/ai-marketing',
  '/ai-automation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-data-analytics',
  '/ai-cybersecurity',
  '/ai-workflow-automation',
  '/ai-cloud-infrastructure',
  '/ai-ecommerce-solutions',
  '/ai-mobile-app-development',
  '/it-services',
  '/micro-saas',
  '/cybersecurity',
  '/quantum-computing',
  '/autonomous-systems',
  '/business-intelligence',
  '/blockchain-web3',
  '/iot-edge-computing'
];

console.log('=== EXISTING PAGES ===');
pages.sort().forEach(page => console.log(page));

console.log('\n=== NAVIGATION LINKS ===');
navigationLinks.forEach(link => console.log(link));

console.log('\n=== MISSING PAGES ===');
const missingPages = navigationLinks.filter(link => !pages.includes(link));
missingPages.forEach(page => console.log(page));

console.log('\n=== EXTRA PAGES (not in navigation) ===');
const extraPages = pages.filter(page => !navigationLinks.includes(page));
extraPages.forEach(page => console.log(page));

console.log(`\n=== SUMMARY ===`);
console.log(`Total existing pages: ${pages.length}`);
console.log(`Total navigation links: ${navigationLinks.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Extra pages: ${extraPages.length}`);

// Check for potential issues
console.log('\n=== POTENTIAL ISSUES ===');
if (missingPages.length > 0) {
  console.log('❌ Missing pages that are referenced in navigation:');
  missingPages.forEach(page => console.log(`  - ${page}`));
} else {
  console.log('✅ All navigation links have corresponding pages');
}

// Check for pages that might need to be added to navigation
const importantExtraPages = extraPages.filter(page => 
  !page.includes('/blog/') && 
  !page.includes('/guides/') && 
  page !== '/offline' &&
  page !== '/page.tsx' &&
  page !== '/blockchain' && // This might be a duplicate of blockchain-web3
  page !== '/iot-edge' && // This might be a duplicate of iot-edge-computing
  page !== '/robotics' && // This might be a separate page
  page !== '/services-advertising' // This might be a separate page
);

if (importantExtraPages.length > 0) {
  console.log('⚠️  Pages that exist but are not in navigation (consider adding):');
  importantExtraPages.forEach(page => console.log(`  - ${page}`));
}
