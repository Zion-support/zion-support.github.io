#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  // Fix unterminated string literals by adding closing quotes
  content = content.replace(/([^\\])"([^"]*?)(\n)/g, (match, before, string, newline) => {
    if (string && !string.includes('"') && !string.includes("'")) {
      return before + '"' + string + '"' + newline;
    }
    return match;
  });
  
  // Fix unterminated template literals
  content = content.replace(/([^\\])`([^`]*?)(\n)/g, (match, before, string, newline) => {
    if (string && !string.includes('`')) {
      return before + '`' + string + '`' + newline;
    }
    return match;
  });
  
  // Fix missing colons in object properties
  content = content.replace(/(\w+)\s+(\w+)/g, (match, prop, value) => {
    if (match.includes('className') && !match.includes(':')) {
      return prop + ': ' + value;
    }
    return match;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixStringLiterals(content);
    
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
console.log('Starting string literal fixes...');

const files = findFiles('.');
let processedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    processedCount++;
  }
}

console.log(`\nString literal fixes complete!`);
console.log(`Files processed: ${processedCount}`);