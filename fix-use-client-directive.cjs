const fs = require('fs');
const path = require('path');

// Function to fix 'use client' directive placement
function fixUseClientDirective(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if 'use client' exists but is not at the top
  if (content.includes("'use client'")) {
    const lines = content.split('\n');
    const useClientIndex = lines.findIndex(line => line.includes("'use client'"));
    
    if (useClientIndex > 0) {
      // Remove the 'use client' line from its current position
      const useClientLine = lines[useClientIndex];
      lines.splice(useClientIndex, 1);
      
      // Add it at the very beginning
      lines.unshift(useClientLine);
      
      content = lines.join('\n');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed 'use client' directive in: ${filePath}`);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing use client directive placement...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process`);

let processedCount = 0;
for (const file of files) {
  fixUseClientDirective(file);
  processedCount++;
}

console.log(`Processed ${processedCount} files`);
console.log('Use client directive fix completed!');