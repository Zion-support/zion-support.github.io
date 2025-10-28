#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findSourceFiles(filePath, fileList);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fixedLines = [];
    let hasChanges = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for React imports with unused destructured items
      if (line.includes('import React') && line.includes('{') && line.includes('}')) {
        // Extract the import statement
        const importMatch = line.match(/import\s+React(?:,\s*{([^}]+)})?\s+from\s+['"]react['"];?/);
        if (importMatch) {
          const destructuredItems = importMatch[1];
          if (destructuredItems) {
            // Check if any of the destructured items are actually used in the file
            const items = destructuredItems.split(',').map(item => item.trim());
            const usedItems = [];
            
            for (const item of items) {
              // Check if the item is used anywhere in the file (excluding the import line)
              const restOfFile = lines.slice(i + 1).join('\n');
              if (restOfFile.includes(item) && !restOfFile.includes(`import.*${item}`)) {
                usedItems.push(item);
              }
            }
            
            if (usedItems.length === 0) {
              // No destructured items are used, remove the destructuring
              const newLine = line.replace(/\s*,\s*{[^}]+}/, '');
              fixedLines.push(newLine);
              hasChanges = true;
              console.log(`Fixed unused React destructuring in ${filePath}:${i + 1}`);
            } else if (usedItems.length < items.length) {
              // Some items are unused, keep only the used ones
              const newLine = line.replace(/{[^}]+}/, `{ ${usedItems.join(', ')} }`);
              fixedLines.push(newLine);
              hasChanges = true;
              console.log(`Removed unused React imports in ${filePath}:${i + 1}`);
            } else {
              fixedLines.push(line);
            }
          } else {
            fixedLines.push(line);
          }
        } else {
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
    
    return hasChanges;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix unused imports in source files...');

const sourceFiles = findSourceFiles('/workspace/app');
let fixedCount = 0;

sourceFiles.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('Done!');