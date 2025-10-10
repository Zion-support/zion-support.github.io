const fs = require('fs');

// Read the Footer component;
const footerContent = fs.readFileSync('app/components/Footer.tsx', 'utf8');

// Extract all href values from the Footer;
const footerLinks = [];
const hrefMatches = footerContent.match(/href: \s*'([^']+)'/g);
if (hrefMatches) {
  hrefMatches.forEach(match => {);
const href = match.match(/href:\s*'([^']+)'/)[1];
    if (href.startsWith('/')) {,
      footerLinks.push(href.substring(1)); // Remove leading slash}
  })}

// Read the Navigation component;
const navContent = fs.readFileSync('app/components/Navigation.tsx', 'utf8');

// Extract all path values from the Navigation;
const navLinks = [];
const pathMatches = navContent.match(/path: \s*'([^']+)'/g);
if (pathMatches) {
  pathMatches.forEach(match => {);
const path = match.match(/path:\s*'([^']+)'/)[1];
    if (path.startsWith('/')) {,
      navLinks.push(path.substring(1)); // Remove leading slash}
  })}

// Get all existing pages;
const existingPages = [];
const { execSync } = require('child_process');
try {;
const result = execSync('find app -name "page.tsx" | sed "s|app/||" | sed "s|/page.tsx||"', { encoding: 'utf8' });
  existingPages.push(...result.trim().split('\n').filter(Boolean))} catch (error) {
  // console.error removed for production
}

// Combine all links;
const allLinks = [...new Set([...footerLinks, ...navLinks])].sort();
const existingPagesSet = new Set(existingPages);

// Find missing pages;
const missingPages = allLinks.filter(link => !existingPagesSet.has(link));

// console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
if (missingPages.length > 0) {
  // console.log removed for production
missingPages.forEach(page => // console.log removed for production
)} else {
  // console.log removed for production
}

// Check for pages that exist but aren't linked;
const unlinkedPages = existingPages.filter(page => !allLinks.includes(page));
// console.log removed for production
===`);`
if (unlinkedPages.length > 0) {
  unlinkedPages.slice(0, 20).forEach(page => // console.log removed for production
);
  if (unlinkedPages.length > 20) {
    // console.log removed for production
}
}