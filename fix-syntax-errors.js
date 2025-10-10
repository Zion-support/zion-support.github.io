#!/usr/bin/env node

import fs from 'fs';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix semicolons in object properties
    content = content.replace(/(\w+):\s*([^,}]+);\)/g, '$1: $2');
    
    // Fix extra closing parentheses
    content = content.replace(/\);\)/g, ');');
    content = content.replace(/\);\)/g, ');');
    
    // Fix malformed JSX tags
    content = content.replace(/<(\w+)([^>]*?)><\/\1>/g, '<$1$2>');
    
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*}/g, '$1: $2\n  }');
    
    // Fix extra semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix malformed type annotations
    content = content.replace(/Record<string, unknown><\/string>/g, 'Record<string, unknown>');
    
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix the main page.tsx file
console.log('Fixing syntax errors in page.tsx...');
if (fixSyntaxErrors('app/page.tsx')) {
  console.log('Successfully fixed page.tsx');
} else {
  console.log('Failed to fix page.tsx');
}