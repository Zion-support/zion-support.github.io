const fs = require('fs');
const path = require('path');

// Find all .tsx files in src directory
function findTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix Link href to to in a file
function fixLinkHref(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace href="/..." with to="/..." in Link components
    const linkHrefRegex = /(<Link[^>]*)\s+href="([^"]*)"([^>]*>)/g;
    const newContent = content.replace(linkHrefRegex, (match, before, href, after) => {
      // Only replace if it's not a tel: or mailto: link
      if (!href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('http')) {
        modified = true;
        return `${before} to="${href}"${after}`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const srcDir = '/workspace/src';
const tsxFiles = findTsxFiles(srcDir);
let fixedCount = 0;

console.log(`Found ${tsxFiles.length} .tsx files`);

for (const file of tsxFiles) {
  if (fixLinkHref(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);