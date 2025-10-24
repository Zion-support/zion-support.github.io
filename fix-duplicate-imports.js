const fs = require('fs');
const path = require('path');

function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has duplicate React imports
    const reactImports = content.match(/import React from 'react';/g);
    if (!reactImports || reactImports.length <= 1) {
      return false; // No duplicates to fix
    }
    
    console.log(`Fixing duplicate imports in: ${filePath}`);
    
    // Remove duplicate React imports, keep only the first one
    let lines = content.split('\n');
    let seenReactImport = false;
    let seenOtherImports = false;
    let filteredLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith("import React from 'react';")) {
        if (!seenReactImport) {
          filteredLines.push(line);
          seenReactImport = true;
        }
        // Skip duplicate React imports
      } else if (line.trim().startsWith("import ") && !seenOtherImports) {
        // If we see other imports after React, we're in the import section
        seenOtherImports = true;
        filteredLines.push(line);
      } else if (line.trim() === '' && seenReactImport && !seenOtherImports) {
        // Skip empty lines in import section
        continue;
      } else {
        filteredLines.push(line);
      }
    }
    
    const fixedContent = filteredLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
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
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const files = findTsxFiles(workspaceDir);

console.log(`Found ${files.length} files to check for duplicate imports`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixDuplicateImports(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFixed duplicate imports in ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);
console.log('Duplicate import fix complete!');