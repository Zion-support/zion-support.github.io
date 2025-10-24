const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix unterminated string literals in import statements
function fixImportQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements with extra quotes
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]''/g;
    content = content.replace(importRegex, (match, importPath) => {
      modified = true;
      return match.replace(/''$/, "'");
    });
    
    // Fix 'use client' statements
    content = content.replace(/'use client''/g, "'use client'");
    
    // Fix other common patterns with extra quotes
    content = content.replace(/['"]''/g, "'");
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix unterminated string literals...');

const files = findTsxFiles('./');
let fixedCount = 0;

files.forEach(file => {
  if (fixImportQuotes(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with unterminated string literals.`);