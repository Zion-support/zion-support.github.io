const fs = require('fs');
const path = require('path');

// Extract all href values from Navigation.tsx
const navigationContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
const hrefMatches = navigationContent.match(/href: '([^']+)'/g) || [];
const navigationLinks = hrefMatches.map(match => match.replace("href: '", '').replace("'", ''));

// Get all existing pages
const existingPages = [];
function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        existingPages.push(fullPath.replace('/workspace/app', ''));
      }
      findPages(fullPath);
    }
  }
}

findPages('/workspace/app');

// Check which navigation links are missing
const missingPages = [];
const existingPagesSet = new Set(existingPages);

for (const link of navigationLinks) {
  if (!existingPagesSet.has(link)) {
    missingPages.push(link);
  }
}

console.log('=== MISSING PAGES ===');
console.log('Total navigation links:', navigationLinks.length);
console.log('Total existing pages:', existingPages.length);
console.log('Missing pages:', missingPages.length);
console.log('\nMissing pages:');
missingPages.forEach(page => console.log(`- ${page}`));

// Also check for pages that exist but aren't in navigation
const navigationLinksSet = new Set(navigationLinks);
const orphanPages = existingPages.filter(page => !navigationLinksSet.has(page) && page !== '');

console.log('\n=== ORPHAN PAGES (exist but not in navigation) ===');
console.log('Orphan pages:', orphanPages.length);
orphanPages.slice(0, 20).forEach(page => console.log(`- ${page}`));
if (orphanPages.length > 20) {
  console.log(`... and ${orphanPages.length - 20} more`);
}