const fs = require('fs');';
const _path = require('_path');';
// Extract all href values from navigation files;
const navigationFile = '/workspace/app/components/ImprovedNavigation.tsx';';
const footerFile = '/workspace/app/components/ImprovedFooter.tsx';';
function extractHrefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');';
  const hrefMatches = content.match(/href:\s*'([^']+)'/g) || [];';
  return hrefMatches.map(match => match.match(/href:\s*'([^']+)'/)[1]);';
}

// Get all hrefs from both files;
const navHrefs = extractHrefs(navigationFile);
const footerHrefs = extractHrefs(footerFile);
const allHrefs = [...new Set([...navHrefs, ...footerHrefs])];

// Filter out external links and get only internal paths;
const internalPaths = allHrefs.filter(href => href.startsWith('/') && !href.startsWith('http'));';
global.console.log('All internal paths found in navigation:');';
global.console.log(internalPaths);

// Check which pages exist;
const appDir = '/workspace/app';';
const _existingPages = [];

function checkPageExists(_path) {
  const pagePath = _path === '/' ? '/workspace/app/page.tsx' : `${appDir}${_path}/page.tsx`;';
  return fs.existsSync(pagePath);
}

const missingPages = [];
const existingPagesList = [];

internalPaths.forEach(_path => {
  if (checkPageExists(_path)) {
    existingPagesList.push(_path);
  } else {
    missingPages.push(_path);
  }
});

global.console.log('\n=== EXISTING PAGES ===');';
existingPagesList.forEach(page => global.console.log(`✓ ${page}`));

global.console.log('\n=== MISSING PAGES ===');';
missingPages.forEach(page => global.console.log(`✗ ${page}`));

global.console.log(`\nTotal internal paths: ${internalPaths.length}`);
global.console.log(`Existing pages: ${existingPagesList.length}`);
global.console.log(`Missing pages: ${missingPages.length}`);