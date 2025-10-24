const fs = require('fs');
const path = require('path');

// Function to fix function names that start with numbers or contain invalid characters
function fixFunctionName(pageName) {
  // Handle special cases
  if (pageName === 'sitemap.xml') {
    return 'SitemapXml';
  }
  
  // Convert kebab-case to PascalCase and handle numbers
  return pageName
    .split('-')
    .map((word, index) => {
      // If the word starts with a number, prefix it with a letter
      if (/^\d/.test(word)) {
        return 'G' + word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract page name from file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2]; // Get the directory name
    
    // Check if the function name needs fixing
    const currentFunctionName = content.match(/export default function (\w+)\(/);
    if (currentFunctionName) {
      const expectedFunctionName = fixFunctionName(pageName) + 'Page';
      
      if (currentFunctionName[1] !== expectedFunctionName) {
        const fixed = content.replace(
          new RegExp(`export default function ${currentFunctionName[1]}\\(`, 'g'),
          `export default function ${expectedFunctionName}(`
        );
        
        fs.writeFileSync(filePath, fixed);
        console.log(`Fixed function name: ${filePath} -> ${expectedFunctionName}`);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed function names in ${fixedCount} files`);