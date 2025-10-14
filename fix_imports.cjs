const fs = require('fs');
const path = require('path');

// Function to fix import statements with missing quotes
function fixImports(content) {
  // Fix import statements that are missing closing quotes
  return content.replace(/from 'lucide-react;/g, "from 'lucide-react';");
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes("from 'lucide-react;")) {
      console.log(`Processing: ${filePath}`);
      const fixedContent = fixImports(content);
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting import fix...');
const files = findFiles('./app');
let fixedCount = 0;
let totalCount = 0;

for (const file of files) {
  totalCount++;
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\nImport fix complete!`);
console.log(`Files processed: ${totalCount}`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Files without issues: ${totalCount - fixedCount}`);