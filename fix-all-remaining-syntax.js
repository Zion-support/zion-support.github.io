#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix all remaining syntax errors
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing commas between object properties
    content = content.replace(/(\w+):\s*([^,\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n      $3:');
    
    // Fix 2: Add missing commas between array elements
    content = content.replace(/(\w+):\s*([^,\n]+)\s*\n\s*}\s*\n\s*\{/g, '$1: $2\n    },\n    {');
    
    // Fix 3: Fix missing commas in string arrays
    content = content.replace(/'([^']+)'\s*\n\s*'([^']+)'/g, '\'$1\',\n    \'$2\'');
    
    // Fix 4: Fix missing closing braces and parentheses
    content = content.replace(/\}\s*\)\s*$/gm, '  );\n}');
    
    // Fix 5: Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix 6: Fix missing closing tags
    content = content.replace(/<\s*\/\s*>\s*$/gm, '</>');
    
    // Fix 7: Fix missing closing parentheses in return statements
    content = content.replace(/return\s*\(\s*<>\s*$/gm, '  return (\n    <>');
    
    // Fix 8: Fix missing closing braces in functions
    content = content.replace(/\}\s*$/gm, '}');
    
    // Fix 9: Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\w+)/g, '$1: $2,\n      $3: $4');
    
    // Fix 10: Fix missing commas in object properties with strings
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*'([^']+)'/g, '$1: $2,\n      $3: \'$4\'');
    
    // Fix 11: Fix missing commas in object properties with arrays
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\[/g, '$1: $2,\n      $3: [');
    
    // Fix 12: Fix missing commas in object properties with objects
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\{/g, '$1: $2,\n      $3: {');
    
    // Fix 13: Fix missing commas in object properties with functions
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\(/g, '$1: $2,\n      $3: (');
    
    // Fix 14: Fix missing commas in object properties with numbers
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\d+)/g, '$1: $2,\n      $3: $4');
    
    // Fix 15: Fix missing commas in object properties with booleans
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(true|false)/g, '$1: $2,\n      $3: $4');
    
    // Fix 16: Fix missing commas in object properties with null
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(null|undefined)/g, '$1: $2,\n      $3: $4');
    
    // Fix 17: Fix missing commas in object properties with variables
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*(\w+)/g, '$1: $2,\n      $3: $4');
    
    // Fix 18: Fix missing commas in object properties with template literals
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*`([^`]+)`/g, '$1: $2,\n      $3: `$4`');
    
    // Fix 19: Fix missing commas in object properties with regular expressions
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):\s*\/([^\/]+)\//g, '$1: $2,\n      $3: /$4/');
    
    // Fix 20: Fix missing commas in object properties with comments
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*\/\/\s*([^\n]+)\n\s*(\w+):/g, '$1: $2,\n      // $3\n      $4:');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax: ${filePath}`);
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
      if (fixAllSyntaxErrors(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Total files fixed: ${totalFixed}`);
}

// Run the fix
console.log('Starting comprehensive syntax fixes...');
await fixSpecificFiles();
console.log('Comprehensive syntax fixes completed!');