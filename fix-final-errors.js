import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix final errors in a file
const fixFinalErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // 2. Remove unused variable declarations
    const unusedVars = ['isVisible', 'setIsVisible', 'specialties', 'Cloud', 'Clock', 'ArrowRightIcon', 'Hash', 'Share2', 'Calendar'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+${varName}\\s*=.*?;\\n?`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });
    
    // 3. Remove unused imports
    const unusedImports = ['Shield', 'Cloud', 'React', 'Clock', 'ArrowRightIcon', 'Hash', 'Share2', 'Calendar'];
    unusedImports.forEach(importName => {
      // Remove from import statements
      const importRegex = new RegExp(`import\\s+{[^}]*\\b${importName}\\b[^}]*}\\s+from\\s+['"][^'"]+['"];?`, 'g');
      content = content.replace(importRegex, (match) => {
        // Extract the import part
        const importList = match.match(/{([^}]+)}/);
        if (importList) {
          const imports = importList[1].split(',').map(imp => imp.trim()).filter(imp => imp !== importName);
          if (imports.length === 0) {
            return ''; // Remove entire import line
          } else {
            return match.replace(importList[1], imports.join(', '));
          }
        }
        return match;
      });
      modified = true;
    });
    
    // 4. Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed final errors in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing final errors...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixFinalErrors(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
fixFinalErrors('./App.tsx');

console.log('Final errors fix completed!');