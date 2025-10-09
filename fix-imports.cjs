#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

// Function to fix duplicate imports
function fixImports(content) {
  let fixed = content;
  
  // Fix duplicate imports pattern: "Brain, Shield, Target, Users ,  Brain,  Shield,  Target,  Users"
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2');
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2'); // Run twice
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2'); // Run thrice
  
  // Fix semicolon issues in object properties
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*,/g, '$1: $2,');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;;\s*,/g, '$1: $2,'); // Run twice
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;');
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*;/g, '$1: $2;'); // Run twice
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImports(content);
    
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