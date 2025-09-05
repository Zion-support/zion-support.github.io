#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix missing commas in object literals
  fixed = fixed
    // Fix object properties without commas
    .replace(/(\w+):\s*([^,}\n]+)\n\s*(\w+):/g, '$1: $2,\n  $3:')
    .replace(/(\w+):\s*([^,}\n]+)\n\s*}/g, '$1: $2,\n  }')
    
    // Fix array elements without commas
    .replace(/([^,\[\n]+)\n\s*([^,\]\n]+)\n\s*]/g, '$1,\n  $2,\n]')
    .replace(/([^,\[\n]+)\n\s*]/g, '$1,\n]')
    
    // Fix function parameters without commas
    .replace(/(\w+)\s*=\s*([^,)\n]+)\n\s*(\w+)\s*=\s*([^,)\n]+)\n\s*\)/g, '$1 = $2,\n  $3 = $4,\n)')
    .replace(/(\w+)\s*=\s*([^,)\n]+)\n\s*\)/g, '$1 = $2,\n)')
    
    // Fix JSX attributes without commas
    .replace(/(\w+)=\{([^}]+)\}\n\s*(\w+)=\{([^}]+)\}/g, '$1={$2}\n  $3={$4}')
    
    // Fix template literals
    .replace(/`([^`]+)\n\s*([^`]+)`/g, '`$1 $2`')
    
    // Fix specific patterns
    .replace(/\{\s*([^}]+)\n\s*([^}]+)\n\s*\}/g, '{\n  $1,\n  $2,\n}')
    .replace(/\{\s*([^}]+)\n\s*\}/g, '{\n  $1,\n}')
    
    // Fix missing semicolons
    .replace(/(\w+)\s*$/gm, '$1;')
    .replace(/;\s*;/g, ';')
    
    // Fix missing closing braces
    .replace(/(\w+)\s*\)\s*$/gm, '$1);')
    .replace(/(\w+)\s*\}\s*$/gm, '$1};')
    
    // Clean up
    .replace(/\s+,\s*$/gm, ',')
    .replace(/\s+;\s*$/gm, ';')
    .replace(/\n\s*,\s*\n/g, ',\n')
    .replace(/\n\s*;\s*\n/g, ';\n');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution
console.log('Starting final syntax error fixes...');

const directories = [
  '/workspace/components',
  '/workspace/hooks',
  '/workspace/lib',
  '/workspace/pages',
  '/workspace/api'
];

let totalProcessed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    const count = processDirectory(dir);
    totalProcessed += count;
    console.log(`Processed ${count} files in ${dir}`);
  }
}

console.log(`\nTotal files processed: ${totalProcessed}`);
console.log('Final syntax error fixes completed!');