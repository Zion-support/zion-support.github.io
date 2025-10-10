const fs = require('fs');
const path = require('path');

function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match duplicate React imports
    const duplicatePattern = /'use client';\s*import React from 'react';\s*'use client';\s*import React, \{([^}]+)\} from 'react';/g;
    
    // Replace with single import
    const replacement = "'use client';\nimport React, {$1} from 'react';";
    
    const newContent = content.replace(duplicatePattern, replacement);
    
    if (newContent !== content) {
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixDuplicateImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Fixing duplicate React imports...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files with duplicate imports.`);