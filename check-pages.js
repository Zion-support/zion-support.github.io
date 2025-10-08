import fs from 'fs';
import path from 'path';

// Navigation links from the Navigation component
const navigationLinks = [
  '/',
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
  '/iot-edge-computing',
  '/about',
  '/team',
  '/case-studies',
  '/enterprise',
  '/contact',
  '/blog',
  '/guides',
  '/privacy',
  '/terms',
  '/sitemap'
];

// Check if page files exist
function checkPageExists(link) {
  if (link === '/') {
    return fs.existsSync('app/page.tsx');
  }
  
  const pagePath = `app${link}/page.tsx`;
  return fs.existsSync(pagePath);
}

console.log('🔍 Checking if all navigation pages exist...\n');

const missingPages = [];
const existingPages = [];

navigationLinks.forEach(link => {
  if (checkPageExists(link)) {
    existingPages.push(link);
    console.log(`✅ ${link} - EXISTS`);
  } else {
    missingPages.push(link);
    console.log(`❌ ${link} - MISSING`);
  }
});

console.log(`\n📊 SUMMARY:`);
console.log(`Total pages: ${navigationLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);

if (missingPages.length > 0) {
  console.log(`\n❌ MISSING PAGES:`);
  missingPages.forEach(page => {
    console.log(`  - ${page}`);
  });
} else {
  console.log(`\n🎉 All navigation pages exist!`);
}

// Check for any extra pages that might not be in navigation
console.log(`\n🔍 Checking for extra pages not in navigation...`);

function findExtraPages() {
  const extraPages = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const relativePath = fullPath.replace('app', '');
          const route = relativePath || '/';
          if (!navigationLinks.includes(route)) {
            extraPages.push(route);
          }
        }
        scanDirectory(fullPath);
      }
    });
  }
  
  scanDirectory('app');
  return extraPages;
}

const extraPages = findExtraPages();
if (extraPages.length > 0) {
  console.log(`\n📄 EXTRA PAGES (not in navigation):`);
  extraPages.forEach(page => {
    console.log(`  - ${page}`);
  });
} else {
  console.log(`\n✅ No extra pages found.`);
}