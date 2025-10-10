#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix array syntax issues
function fixArraySyntax(content) {
  let fixed = content;
  
  // Fix array syntax issues like "}]\n    ];" and "}]\n      ];"
  fixed = fixed.replace(/}\s*\]\s*$/gm, '}\n    ]');
  fixed = fixed.replace(/,\s*\]\s*$/gm, '\n    ]');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*:\s*[^,}\n]+\s*\n\s*(\w+)\s*:/g, '$1: $2,');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixArraySyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed array syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing all array syntax issues...');

// Fix specific files that are causing issues
const filesToFix = [
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/Navigation.tsx'
];

let fixedCount = 0;
for (const file of filesToFix) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Files with array syntax fixes: ${fixedCount}`);
console.log(`\n✅ Array syntax fixes complete!`);