#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to remove stray exports
function removeStrayExports(content) {
  let fixed = content;
  
  // Remove stray export statements
  fixed = fixed.replace(/;\n\s*export;\n/g, '\n');
  fixed = fixed.replace(/;\n\s*export\s*$/gm, '\n');
  fixed = fixed.replace(/;\n\s*export\s*$/gm, '\n');
  
  // Remove stray semicolons and braces
  fixed = fixed.replace(/;\n\s*}\n/g, '\n');
  fixed = fixed.replace(/;\n\s*;\n/g, ';\n');
  
  // Remove empty lines with just semicolons
  fixed = fixed.replace(/^\s*;\s*$/gm, '');
  
  // Remove empty lines with just braces
  fixed = fixed.replace(/^\s*}\s*$/gm, '');
  
  // Remove empty lines with just export
  fixed = fixed.replace(/^\s*export\s*$/gm, '');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = removeStrayExports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed stray exports: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (item === 'node_modules' || item === '.git') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting stray exports removal...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with stray exports removal.`);
console.log('Stray exports removal completed!');