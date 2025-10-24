#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix object syntax errors
function fixObjectSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing commas between object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
    
    // Fix 2: Fix specific patterns for object arrays
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*title:/g, '$1: $2,\n      title:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*description:/g, '$1: $2,\n      description:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*benefits:/g, '$1: $2,\n      benefits:');
    
    // Fix 3: Fix missing commas in object literals
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*\{/g, '$1: $2,\n    {');
    
    // Fix 4: Fix missing commas between array elements
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*}\s*\n\s*\{/g, '$1: $2\n    },\n    {');
    
    // Fix 5: Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\w+)/g, '$1: $2,\n      $3: $4');
    
    // Fix 6: Fix missing commas in array elements
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*}\s*\n\s*(\w+):/g, '$1: $2\n    },\n    $3:');
    
    // Fix 7: Fix missing commas in object properties with strings
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*'([^']+)'/g, '$1: $2,\n      $3: \'$4\'');
    
    // Fix 8: Fix missing commas in object properties with arrays
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\[/g, '$1: $2,\n      $3: [');
    
    // Fix 9: Fix missing commas in object properties with objects
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\{/g, '$1: $2,\n      $3: {');
    
    // Fix 10: Fix missing commas in object properties with functions
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\(/g, '$1: $2,\n      $3: (');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed object syntax: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files
async function fixSpecificFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixObjectSyntax(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Total files fixed: ${totalFixed}`);
}

// Run the fix
console.log('Starting object syntax fixes...');
await fixSpecificFiles();
console.log('Object syntax fixes completed!');