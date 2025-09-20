#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixObjectSyntax(content) {
  // Fix missing commas between object properties
  // Pattern: property: value\n      nextProperty
  let fixed = content.replace(/(\w+):\s*([^\n,]+)\n\s+(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas between array elements in objects
  fixed = fixed.replace(/(\w+):\s*\[([^\]]+)\]\n\s+(\w+):/g, '$1: [$2],\n      $3:');
  
  // Fix missing commas between objects in arrays
  fixed = fixed.replace(/\}\n\s*\{/g, '},\n    {');
  
  // Fix missing commas after strings
  fixed = fixed.replace(/"([^"]+)"\n\s+(\w+):/g, '"$1",\n      $2:');
  
  // Fix missing commas in arrays - strings
  fixed = fixed.replace(/"([^"]+)"\n\s+"([^"]+)"/g, '"$1",\n    "$2"');
  
  // Fix missing commas in arrays - numbers
  fixed = fixed.replace(/(\d+)\n\s+(\d+)/g, '$1,\n    $2');
  
  // Fix missing commas in arrays - variables
  fixed = fixed.replace(/(\w+)\n\s+(\w+)/g, '$1,\n    $2');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixObjectSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix specific files that are known to have object syntax issues
const filesToFix = [
  'src/pages/Services.tsx',
  'src/pages/Pricing.tsx'
];

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);