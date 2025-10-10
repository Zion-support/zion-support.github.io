#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all JSX syntax issues
function fixAllJSX(content) {
  // Fix malformed JSX tags with colons
  content = content.replace(/(\w+):\s*className=/g, '$1 className=');
  
  // Fix malformed closing tags
  content = content.replace(/(\w+):\s*\/>/g, '$1 />');
  
  // Fix malformed opening tags
  content = content.replace(/(\w+):\s*>/g, '$1>');
  
  // Fix extra quotes at the end of lines
  content = content.replace(/"\s*$/gm, '');
  
  // Fix missing closing quotes in className
  content = content.replace(/className="([^"]*?)(\n)/g, 'className="$1"\n');
  
  // Fix missing closing quotes in other attributes
  content = content.replace(/(\w+)="([^"]*?)(\n)/g, '$1="$2"\n');
  
  // Fix malformed closing tags with extra characters
  content = content.replace(/(\w+)>\s*$/gm, '$1>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllJSX(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive JSX fixes...');

const files = findFiles('.');
let processedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    processedCount++;
  }
}

console.log(`\nComprehensive JSX fixes complete!`);
console.log(`Files processed: ${processedCount}`);