import fs from 'fs';
import path from 'path';

// Navigation links from Navigation.tsx and Footer.tsx
const navigationLinks = [
  '/', '/about', '/services', '/ai-solutions', '/cybersecurity', '/cloud-solutions', 
  '/digital-transformation', '/micro-saas', '/5g-solutions', '/solutions', 
  '/pricing', '/blog', '/tutorials', '/demo', '/support', '/contact'
];

const footerLinks = [
  '/ai-solutions', '/cybersecurity', '/cloud-solutions', '/digital-transformation', 
  '/micro-saas', '/5g-solutions', '/about', '/team', '/careers', '/blog', 
  '/case-studies', '/news', '/docs', '/tutorials', '/api', '/support', 
  '/community', '/status', '/privacy', '/terms', '/cookies', '/gdpr', 
  '/security', '/compliance'
];

// Get all existing page.tsx files
function getExistingPages() {
  const pages = [];
  const appDir = '/workspace/app';
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if this directory has a page.tsx file
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          const route = '/' + path.relative(appDir, fullPath);
          pages.push(route);
        }
        // Recursively scan subdirectories
        scanDirectory(fullPath);
      }
    }
  }
  
  scanDirectory(appDir);
  return pages;
}

const existingPages = getExistingPages();
const allLinks = [...new Set([...navigationLinks, ...footerLinks])];

console.log('=== LINK ANALYSIS ===\n');

console.log('EXISTING PAGES:');
existingPages.forEach(page => console.log(`✓ ${page}`));

console.log('\nBROKEN LINKS:');
const brokenLinks = allLinks.filter(link => !existingPages.includes(link));
brokenLinks.forEach(link => console.log(`✗ ${link}`));

console.log('\nMISSING PAGES TO CREATE:');
const missingPages = brokenLinks.filter(link => link !== '/');
missingPages.forEach(page => console.log(`- ${page}`));

console.log('\nSUMMARY:');
console.log(`Total links checked: ${allLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Broken links: ${brokenLinks.length}`);
console.log(`Missing pages to create: ${missingPages.length}`);

// Check for pages that exist but aren't linked
console.log('\nUNLINKED PAGES (exist but not in navigation):');
const unlinkedPages = existingPages.filter(page => !allLinks.includes(page));
unlinkedPages.forEach(page => console.log(`? ${page}`));