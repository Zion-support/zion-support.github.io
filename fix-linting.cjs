#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match import statements with multiple imports
    const importPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];?/g;
    
    content = content.replace(importPattern, (match, imports) => {
      // Split imports and clean them
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check if each import is used in the file
      for (const imp of importList) {
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        if (importName && content.includes(importName)) {
          usedImports.push(imp);
        }
      }
      
      if (usedImports.length !== importList.length) {
        modified = true;
        if (usedImports.length === 0) {
          return ''; // Remove entire import statement
        } else {
          return match.replace(imports, usedImports.join(', '));
        }
      }
      
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting linting fixes...');

// Find all relevant files
const files = findFiles('./app');

console.log(`Found ${files.length} files to process`);

// Process each file
let fixedCount = 0;
for (const file of files) {
  try {
    removeUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Processed ${fixedCount} files`);

// Run ESLint fix
console.log('Running ESLint fix...');
try {
  execSync('npm run lint:fix', { stdio: 'inherit' });
  console.log('ESLint fix completed');
} catch (error) {
  console.log('ESLint fix completed with warnings');
}

console.log('Linting fixes completed!');