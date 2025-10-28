const fs = require('fs');
const path = require('path');

// Function to fix "use client" directive placement
function fixUseClientDirective(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;
    
    // Check if file has "use client" directive
    const hasUseClient = lines.some(line => line.trim() === "'use client';");
    
    if (hasUseClient) {
      // Find the "use client" line
      const useClientIndex = lines.findIndex(line => line.trim() === "'use client';");
      
      if (useClientIndex > 0) {
        // Remove the "use client" line from its current position
        lines.splice(useClientIndex, 1);
        
        // Add it at the very beginning
        lines.unshift("'use client';");
        lines.unshift(""); // Add empty line after directive
        
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
      console.log(`Fixed "use client" directive in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixUseClientDirective(file)) {
    fixedCount++;
  }
});

console.log(`Fixed "use client" directives in ${fixedCount} files.`);