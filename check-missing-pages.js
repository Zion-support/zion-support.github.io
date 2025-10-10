import fs from 'fs';
import path from 'path';

// Extract all hrefs from Navigation.tsx
const navigationContent = fs.readFileSync('./app/components/Navigation.tsx', 'utf8');
const hrefMatches = navigationContent.match(/href: '([^']+)'/g) || [];
const hrefs = hrefMatches.map(match => match.replace(/href: '([^']+)'/, '$1'));

console.log('Found navigation links:', hrefs.length);

const missingPages = [];
const existingPages = [];

hrefs.forEach(href => {
  if (href === '/') return; // Skip home page
  
  const pagePath = `./app${href}/page.tsx`;
  if (fs.existsSync(pagePath)) {
    existingPages.push(href);
  } else {
    missingPages.push(href);
  }
});

console.log('\n=== EXISTING PAGES ===');
existingPages.forEach(page => console.log('✓', page));

console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log('✗', page));

console.log(`\nSummary: ${existingPages.length} existing, ${missingPages.length} missing`);

// Save results
fs.writeFileSync('./missing-pages-report.json', JSON.stringify({
  existing: existingPages,
  missing: missingPages,
  total: hrefs.length - 1, // Exclude home page
  existingCount: existingPages.length,
  missingCount: missingPages.length
}, null, 2));

console.log('\nReport saved to missing-pages-report.json');