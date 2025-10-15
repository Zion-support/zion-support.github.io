#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix 5G page component names
function fix5GPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get the page name from the directory
    const pageName = path.basename(path.dirname(filePath));
    const validName = pageName.replace(/^5g-/, 'FiveG').replace(/-/g, '');
    const capitalizedName = validName.charAt(0).toUpperCase() + validName.slice(1) + 'Page';
    
    // Replace invalid component names
    content = content.replace(/const \d+g[A-Za-z]+Page:/g, `const ${capitalizedName}:`);
    content = content.replace(/export default \d+g[A-Za-z]+Page;/g, `export default ${capitalizedName};`);
    
    // Also fix any remaining 5G references in the component name
    content = content.replace(/5g[A-Za-z]+Page/g, capitalizedName);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed 5G page: ${filePath} -> ${capitalizedName}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all 5G pages
function find5GPages(dir) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item.startsWith('5g-')) {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          files.push(pageFile);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
console.log('Fixing 5G pages...');

const appDir = path.join(__dirname, 'app');
const files = find5GPages(appDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fix5GPage(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} 5G pages, ${errorCount} errors encountered.`);