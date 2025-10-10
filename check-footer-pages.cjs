const fs = require('fs');
const path = require('path');

// Extract all href links from footer
const footerFile = '/workspace/app/components/Footer.tsx';

function extractAllLinksFromFile(filePath) {
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
  console.log('Checking footer pages...\n');
  
  const footerLinks = extractAllLinksFromFile(footerFile);
  
  const missingPages = [];
  const existingPages = [];
  const externalLinks = [];
  
  footerLinks.forEach(link => {
    if (link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('http')) {
      externalLinks.push(link);
    } else if (checkPageExists(link)) {
      existingPages.push(link);
    } else {
      missingPages.push(link);
    }
  });
  
  console.log(`Total footer links found: ${footerLinks.length}`);
  console.log(`Existing pages: ${existingPages.length}`);
  console.log(`Missing pages: ${missingPages.length}`);
  console.log(`External links: ${externalLinks.length}\n`);
  
  if (missingPages.length > 0) {
    console.log('Missing footer pages:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  if (externalLinks.length > 0) {
    console.log('\nExternal links:');
    externalLinks.forEach(link => {
      console.log(`  - ${link}`);
    });
  }
  
  console.log('\nExisting footer pages:');
  existingPages.forEach(page => {
    console.log(`  ✓ ${page}`);
  });
}

main();