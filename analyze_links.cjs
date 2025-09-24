const fs = require('fs');
const path = require('path');

// Read the header navigation
const headerContent = fs.readFileSync('pages/components/Header.tsx', 'utf8');

// Extract all href values from the navigation
const hrefMatches = headerContent.match(/href:\s*['"]([^'"]+)['"]/g);
const navigationLinks = hrefMatches
  ? hrefMatches.map(match => match.match(/href:\s*['"]([^'"]+)['"]/)[1])
  : [];

console.log('=== NAVIGATION LINKS ANALYSIS ===');
console.log('Navigation links found:');
navigationLinks.forEach(link => console.log('  -', link));

// Check which pages exist
const pagesDir = 'pages';
const existingPages = [];

function scanDirectory(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath, prefix + item + '/');
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      let pagePath = prefix + item;
      if (pagePath.startsWith('pages/')) {
        pagePath = pagePath.substring(6);
      }
      if (pagePath.endsWith('.tsx') || pagePath.endsWith('.jsx')) {
        pagePath = pagePath.substring(0, pagePath.lastIndexOf('.'));
      }
      if (pagePath === 'index') {
        pagePath = '';
      }
      if (pagePath.endsWith('/index')) {
        pagePath = pagePath.substring(0, pagePath.lastIndexOf('/index'));
      }
      existingPages.push('/' + pagePath);
    }
  });
}

scanDirectory(pagesDir);

console.log('\nExisting pages:');
existingPages.forEach(page => console.log('  -', page));

console.log('\n=== BROKEN LINKS ANALYSIS ===');
const brokenLinks = [];
const workingLinks = [];

navigationLinks.forEach(link => {
  if (
    link.startsWith('http') ||
    link.startsWith('mailto:') ||
    link.startsWith('tel:')
  ) {
    workingLinks.push({ link, reason: 'External link' });
    return;
  }

  if (link === '/') {
    workingLinks.push({ link, reason: 'Home page' });
    return;
  }

  if (existingPages.includes(link)) {
    workingLinks.push({ link, reason: 'Page exists' });
  } else {
    brokenLinks.push({ link, reason: 'Page missing' });
  }
});

console.log('\nWorking links:');
workingLinks.forEach(({ link, reason }) =>
  console.log(`  ✓ ${link} (${reason})`)
);

console.log('\nBroken links:');
brokenLinks.forEach(({ link, reason }) =>
  console.log(`  ✗ ${link} (${reason})`)
);

// Check for missing pages that should exist based on navigation
console.log('\n=== MISSING PAGES TO CREATE ===');
const missingPages = brokenLinks.map(({ link }) => link);
missingPages.forEach(page => console.log(`  - ${page}`));

// Additional analysis - check for pages that exist but aren't in navigation
console.log('\n=== PAGES NOT IN NAVIGATION ===');
const pagesNotInNav = existingPages.filter(
  page =>
    !navigationLinks.includes(page) &&
    page !== '/' &&
    !page.startsWith('/components/') &&
    !page.startsWith('/api/') &&
    !page.includes('[') && // Skip dynamic routes
    !page.includes('_') // Skip special pages
);
pagesNotInNav.forEach(page => console.log(`  - ${page}`));
