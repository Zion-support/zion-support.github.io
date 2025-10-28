const fs = require('fs');
const path = require('path');

// Function to fix missing imports in a file
function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if the file uses ErrorBoundary but doesn't import it
    if (content.includes('ErrorBoundary') && !content.includes('import ErrorBoundary')) {
      // Determine the correct import path based on file location
      const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
      const depth = relativePath.split(path.sep).length - 1;
      
      let importPath;
      if (depth > 1) {
        importPath = '../'.repeat(depth) + 'components/GlobalErrorBoundary';
      } else if (depth === 1) {
        importPath = '../components/GlobalErrorBoundary';
      } else {
        importPath = './components/GlobalErrorBoundary';
      }
      
      // Add the imports at the beginning of the file
      const lines = content.split('\n');
      
      // Add React import if not present
      if (!content.includes('import React')) {
        lines.unshift("import React from 'react';");
        modified = true;
      }
      
      // Add ErrorBoundary import
      lines.splice(1, 0, `import ErrorBoundary from '${importPath}';`);
      modified = true;
      
      content = lines.join('\n');
    }
    
    if (modified) {
      // Write the file back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed missing imports in: ${filePath}`);
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
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMissingImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed missing imports in ${fixedCount} files`);