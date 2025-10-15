#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix import statements
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix import statements that have incorrect closing parentheses
    content = content.replace(/import\s+([^;]+)\)\s*$/gm, 'import $1;');
    content = content.replace(/import\s+([^;]+)\)\s*$/gm, 'import $1;');
    content = content.replace(/import\s+([^;]+)\)\s*$/gm, 'import $1;');
    
    // Fix export statements
    content = content.replace(/export\s+([^;]+)\)\s*$/gm, 'export $1;');
    
    // Fix function declarations
    content = content.replace(/function\s+([^{]+)\)\s*$/gm, 'function $1 {');
    
    // Fix variable declarations
    content = content.replace(/const\s+([^=]+)=\s*([^;]+)\)\s*$/gm, 'const $1 = $2;');
    content = content.replace(/let\s+([^=]+)=\s*([^;]+)\)\s*$/gm, 'let $1 = $2;');
    content = content.replace(/var\s+([^=]+)=\s*([^;]+)\)\s*$/gm, 'var $1 = $2;');
    
    // Fix JSX return statements
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    
    // Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    
    // Fix specific patterns for React components
    content = content.replace(/export\s+default\s+function\s+([A-Z][a-zA-Z0-9]*)\s*\(\s*\)\s*\{/g, 'export default function $1() {');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`Error fixing imports in ${filePath}:`, err.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (err) {
      // Skip directories that can't be read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting import fixes...');

const allFiles = findAllFiles('.');
console.log(`Found ${allFiles.length} files to check`);

let fixedCount = 0;

for (const file of allFiles) {
  if (fixImports(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed imports in ${fixedCount} files`);
console.log('Import fixes complete!');