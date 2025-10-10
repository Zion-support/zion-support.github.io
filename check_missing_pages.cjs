const fs = require('fs');
const path = require('path');

// Get all navigation links from Navigation.tsx
const navContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
const navLinks = navContent.match(/path: '([^']+)'/g)?.map(match => match.replace("path: '", '').replace("'", '')) || [];

// Get all footer links from Footer.tsx
const footerContent = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');
const footerLinks = footerContent.match(/url: '([^']+)'/g)?.map(match => match.replace("url: '", '').replace("'", '')) || [];

// Combine all links
const allLinks = [...new Set([...navLinks, ...footerLinks])];

// Get existing pages
const existingPages = [];
const appDir = '/workspace/app';

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        const relativePath = fullPath.replace('/workspace/app/', '');
        existingPages.push('/' + relativePath);
      }
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Find missing pages
const missingPages = allLinks.filter(link => !existingPages.includes(link));

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total links found: ${allLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXISTING PAGES ===');
existingPages.sort().forEach(page => console.log(page));
