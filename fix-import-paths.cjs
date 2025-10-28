const fs = require('fs');
const path = require('path');

// Function to fix import paths in a single file
function fixImportPaths(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Count the depth of the file (number of directories from app/)
    const pathParts = filePath.split('/');
    const appIndex = pathParts.indexOf('app');
    const depth = pathParts.length - appIndex - 2; // -2 for 'app' and 'page.tsx'
    
    if (depth > 1) {
      // For nested pages, need to go up more levels
      const correctPath = '../'.repeat(depth) + 'components/ErrorBoundary';
      const currentPath = '../components/ErrorBoundary';
      
      if (content.includes(currentPath)) {
        const fixedContent = content.replace(currentPath, correctPath);
        fs.writeFileSync(filePath, fixedContent);
        return true;
      }
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
  const pageFiles = [];
  
  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (file === 'page.tsx') {
        pageFiles.push(filePath);
      }
    }
  }
  
  traverse(dir);
  return pageFiles;
}

// Main execution
console.log('Starting import path fixes...');

const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;
let totalCount = pageFiles.length;

console.log(`Found ${totalCount} page files to check...`);

for (const filePath of pageFiles) {
  if (fixImportPaths(filePath)) {
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalCount} page files.`);
console.log('Import path fixes completed!');