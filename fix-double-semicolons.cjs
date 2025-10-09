#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

// Function to fix double semicolons
function fixDoubleSemicolons(content) {
  let fixed = content;
  
  // Fix double semicolons in object properties
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*}/g, '$1: $2 }');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*,/g, '$1: $2,');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*;/g, '$1: $2;');
  
  // Fix double semicolons in array elements
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*]/g, '$1: $2 ]');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*,/g, '$1: $2,');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixDoubleSemicolons(content);
    
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

// Main function
async function main() {
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main().catch(console.error);