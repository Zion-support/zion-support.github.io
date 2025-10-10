import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract all href links from navigation and footer
function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hrefRegex = /href="([^"]+)"/g;
    const links = [];
    let match;
    
    while ((match = hrefRegex.exec(content)) !== null) {
      const href = match[1];
      if (href.startsWith('/') && !href.startsWith('//')) {
        links.push(href);
      }
    }
    
    return links;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Check if a page exists
function pageExists(href) {
  if (href === '/') {
    return fs.existsSync(path.join(__dirname, 'app', 'page.tsx'));
  }
  
  const pagePath = path.join(__dirname, 'app', href, 'page.tsx');
  return fs.existsSync(pagePath);
}

// Main function
function checkMissingPages() {
  const navigationLinks = extractLinksFromFile(path.join(__dirname, 'app', 'components', 'Navigation.tsx'));
  const footerLinks = extractLinksFromFile(path.join(__dirname, 'app', 'components', 'Footer.tsx'));
  
  const allLinks = [...new Set([...navigationLinks, ...footerLinks])];
  
  console.log('Checking links from navigation and footer...\n');
  
  const missingPages = [];
  const existingPages = [];
  
  allLinks.forEach(link => {
    if (pageExists(link)) {
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
    missingPages.forEach(page => console.log(`  - ${page}`));
  } else {
    console.log('✅ All pages exist!');
  }
  
  console.log('\nExisting pages:');
  existingPages.forEach(page => console.log(`  ✅ ${page}`));
}

checkMissingPages();