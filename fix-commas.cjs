#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix comma issues
function fixCommas(content) {
  let fixed = content;
  
  // Fix extra commas after semicolons
  fixed = fixed.replace(/;,\n/g, ';\n');
  
  // Fix extra commas after closing braces
  fixed = fixed.replace(/},\n/g, '}\n');
  
  // Fix extra commas after closing parentheses
  fixed = fixed.replace(/\),\n/g, ')\n');
  
  // Fix extra commas after closing brackets
  fixed = fixed.replace(/],\n/g, ']\n');
  
  // Fix extra commas after strings
  fixed = fixed.replace(/",\n/g, '"\n');
  fixed = fixed.replace(/',\n/g, "'\n");
  
  // Fix extra commas after numbers
  fixed = fixed.replace(/(\d+),\n/g, '$1\n');
  
  // Fix extra commas after identifiers
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*),\n/g, '$1\n');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixCommas(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed commas: ${filePath}`);
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
console.log('Starting comma fixing...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with comma fixes.`);
console.log('Comma fixing completed!');