const fs = require('fs');
const path = require('path');

// Extract all href links from navigation and footer
const navigationFile = '/workspace/app/components/Navigation.tsx';
const footerFile = '/workspace/app/components/Footer.tsx';

function extractLinksFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hrefRegex = /href="([^"]+)"/g;
  const links = [];
  let match;
  
  while ((match = hrefRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

function checkPageExists(link) {
  if (link === '/') {
    return fs.existsSync('/workspace/app/page.tsx');
  }
  
  const pagePath = `/workspace/app${link}/page.tsx`;
  return fs.existsSync(pagePath);
}

function main() {
  console.log('Checking for missing pages...\n');
  
  const navLinks = extractLinksFromFile(navigationFile);
  const footerLinks = extractLinksFromFile(footerFile);
  
  const allLinks = [...new Set([...navLinks, ...footerLinks])];
  
  const missingPages = [];
  const existingPages = [];
  
  allLinks.forEach(link => {
    if (checkPageExists(link)) {
      existingPages.push(link);
    } else {
      missingPages.push(link);
    }
  });
  
  console.log(`Total links found: ${allLinks.length}`);
  console.log(`Existing pages: ${existingPages.length}`);
  console.log(`Missing pages: ${missingPages.length}\n`);
  
  if (missingPages.length > 0) {
    console.log('Missing pages:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  console.log('\nExisting pages:');
  existingPages.forEach(page => {
    console.log(`  ✓ ${page}`);
  });
}

main();