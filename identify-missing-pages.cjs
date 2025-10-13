const fs = require('fs');
const path = require('path');

// Extract all links from navigation components
const navigationLinks = new Set();

// Read ImprovedNavigation.tsx
const navContent = fs.readFileSync('/workspace/app/components/ImprovedNavigation.tsx', 'utf8');
const navMatches = navContent.match(/href:\s*['"`]([^'"`]+)['"`]/g);
if (navMatches) {
  navMatches.forEach(match => {
    const href = match.match(/href:\s*['"`]([^'"`]+)['"`]/)[1];
    if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      navigationLinks.add(href);
    }
  });
}

// Read ImprovedFooter.tsx
const footerContent = fs.readFileSync('/workspace/app/components/ImprovedFooter.tsx', 'utf8');
const footerMatches = footerContent.match(/href:\s*['"`]([^'"`]+)['"`]/g);
if (footerMatches) {
  footerMatches.forEach(match => {
    const href = match.match(/href:\s*['"`]([^'"`]+)['"`]/)[1];
    if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      navigationLinks.add(href);
    }
  });
}

// Read ImprovedSidebar.tsx
const sidebarContent = fs.readFileSync('/workspace/app/components/ImprovedSidebar.tsx', 'utf8');
const sidebarMatches = sidebarContent.match(/href:\s*['"`]([^'"`]+)['"`]/g);
if (sidebarMatches) {
  sidebarMatches.forEach(match => {
    const href = match.match(/href:\s*['"`]([^'"`]+)['"`]/)[1];
    if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      navigationLinks.add(href);
    }
  });
}

// Get all existing page directories
const existingPages = new Set();
const appDir = '/workspace/app';

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Check if it has a page.tsx file
      const pageFile = path.join(itemPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, itemPath);
        existingPages.add('/' + relativePath);
      }
      // Recursively scan subdirectories
      scanDirectory(itemPath);
    }
  });
}

scanDirectory(appDir);

// Find missing pages
const missingPages = [];
const existingPagesArray = Array.from(existingPages);

navigationLinks.forEach(link => {
  if (link === '/') return; // Skip home page
  
  // Check if page exists
  const pageExists = existingPagesArray.some(page => {
    // Handle exact matches
    if (page === link) return true;
    
    // Handle cases where link might be in a subdirectory
    const linkPath = link.substring(1); // Remove leading slash
    const pagePath = page.substring(1); // Remove leading slash
    
    // Check if the page path starts with the link path
    if (pagePath.startsWith(linkPath + '/')) return true;
    
    return false;
  });
  
  if (!pageExists) {
    missingPages.push(link);
  }
});

// Also check for pages that exist but might not be in navigation
const orphanedPages = existingPagesArray.filter(page => {
  if (page === '/') return false; // Skip home page
  
  return !Array.from(navigationLinks).some(link => {
    const linkPath = link.substring(1);
    const pagePath = page.substring(1);
    return pagePath.startsWith(linkPath) || linkPath.startsWith(pagePath);
  });
});

console.log('=== MISSING PAGES ===');
console.log('Pages referenced in navigation but missing:');
missingPages.forEach(page => console.log(`  - ${page}`));

console.log('\n=== ORPHANED PAGES ===');
console.log('Pages that exist but are not in navigation:');
orphanedPages.forEach(page => console.log(`  - ${page}`));

console.log('\n=== SUMMARY ===');
console.log(`Total navigation links: ${navigationLinks.size}`);
console.log(`Total existing pages: ${existingPages.size}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Orphaned pages: ${orphanedPages.length}`);

// Save results to file
const results = {
  missingPages,
  orphanedPages,
  totalNavigationLinks: navigationLinks.size,
  totalExistingPages: existingPages.size,
  navigationLinks: Array.from(navigationLinks).sort(),
  existingPages: existingPagesArray.sort()
};

fs.writeFileSync('/workspace/missing-pages-analysis.json', JSON.stringify(results, null, 2));
console.log('\nResults saved to missing-pages-analysis.json');