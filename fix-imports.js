#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix malformed imports
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix malformed import statements with extra quotes
    const importRegex = /import\s+([^;]+);'/g;
    content = content.replace(importRegex, (match, importPart) => {
      fixed = true;
      return `import ${importPart};`;
    });
    
    // Fix empty import statements
    content = content.replace(/import\s*\{\s*\}\s*from\s*['"]([^'"]+)['"];?/g, (match, module) => {
      fixed = true;
      return `// import from '${module}'; // Empty import removed`;
    });
    
    // Fix malformed React imports
    content = content.replace(/import\s+React,\s*\{\s*\}\s*from\s*['"]react['"];?/g, "import React from 'react';");
    
    // Fix unterminated string literals in imports
    content = content.replace(/import\s+([^;]+)['"]$/gm, (match, importPart) => {
      if (!importPart.includes("'") && !importPart.includes('"')) {
        return `import ${importPart};`;
      }
      return match;
    });
    
    // Fix malformed comments
    content = content.replace(/\/\/\s*Components'/g, '// Components');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function findAndFixFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, dist, and other build directories
        if (['node_modules', 'dist', 'build', '.next', 'out', '.git'].includes(item)) {
          continue;
        }
        walkDir(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          if (fixImports(fullPath)) {
            fixedCount++;
            console.log(`Fixed imports in: ${fullPath}`);
          }
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

// Main execution
console.log('Starting import fix...');
const fixedCount = findAndFixFiles('/workspace');
console.log(`Fixed imports in ${fixedCount} files`);

console.log('Import fix complete!');