#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the footer component to extract all links;
const footerContent = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');
// Extract all href values from the footer;
const hrefMatches = footerContent.match(/href: \s*'([^']+)'/g);
const footerLinks = hrefMatches ? hrefMatches.map(match => match.match(/href:\s*'([^']+)'/)[1]) : [];
,
// Read the navigation component to extract all links;
const navContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
const navMatches = navContent.match(/to="([^"]+)"/g);
const navLinks = navMatches ? navMatches.map(match => match.match(/to="([^"]+)"/)[1]) : [];
// Combine all links;
const allLinks = [...new Set([...footerLinks, ...navLinks])];
// Get all existing page files;
const appDir = '/workspace/app';
const existingPages = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (item === 'page.tsx') {
      // Extract the route from the path;
      const route = fullPath.replace('/workspace/app', '').replace('/page.tsx', '') || '/';
      existingPages.push(route);
// Read the App.tsx file to extract routes;
const appTsxContent = fs.readFileSync('src/App.tsx', 'utf8');
// Extract route paths using regex;
const routeMatches = appTsxContent.match(/path="([^"]+)"/g);"
const routes = routeMatches ? routeMatches.map(match => match.replace('path="', '').replace('"', '')) : [];
// Get existing pages;
const existingPages = [];
function findPages(dir) {/* TODO: Fix JSX expression */};
    } else if (file === 'page.tsx') {/* TODO: Fix JSX expression */};
    };
  };
};
scanDirectory(appDir);
// Check for missing pages;
const missingPages = [];
const existingPagesSet = new Set(existingPages);
for (const link of allLinks) {
  if (!existingPagesSet.has(link)) {
<<<<<<< HEAD
    missingPages.push(link);
  }
}

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total links found: ${allLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(`- ${page}`));

console.log('\n=== EXISTING PAGES ===');
existingPages.sort().forEach(page => console.log(`✓ ${page}`));

=======
    missingPages.push(link)};
};
// console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
missingPages.forEach(page => // console.log removed for production
);
// console.log removed for production
existingPages.sort().forEach(page => // console.log removed for production
);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Write missing pages to a file;
fs.writeFileSync('/workspace/missing-pages.json', JSON.stringify({
  totalLinks: allLinks.length;)
  existingPages: existingPages.length;)
  missingPages: missingPages.length;)
  missingPagesList: missingPages),
  allLinks: allLinks),
<<<<<<< HEAD
  existingPagesList: existingPages;
}, null, 2));

console.log('\n=== ANALYSIS COMPLETE ===');
console.log('Results saved to missing-pages.json');
// Find missing pages;
const missingPages = routes.filter(route => {/* TODO: Fix JSX expression */})
});

console.log('Missing)
  pages:');
missingPages.forEach(page => console.log(`- ${page}`));
=======
  existingPagesList: existingPages}, null, 2));
// console.log removed for production
// console.log removed for production
// Find missing pages;
const missingPages = routes.filter(route => {/* TODO: Fix JSX expression */})
});
// console.log removed for production
pages:');
missingPages.forEach(page => // console.log removed for production
);
`
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
`
console.log(`\nTotal missing)`
  pages: ${missingPages.length}`);`
console.log(`Total)`
  routes: ${routes.length}`);`
console.log(`Total existing)`
  pages: ${existingPages.length}`);"`
