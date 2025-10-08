const fs = require('fs');
const path = require('path');

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
      const route = '/' + relativePath.replace('/page.tsx', '').replace('\\', '/');
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
