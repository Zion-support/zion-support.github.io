#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix missing commas in object arrays
function fixMissingCommas(content) {
  let fixed = content;
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)'(\s*[^,}])/g, '$1: \'$2\',$3');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"(\s*[^,}])/g, '$1: "$2",$3');
  
  // Fix missing commas after JSX elements in objects
  fixed = fixed.replace(/(\w+):\s*<([^>]*)>(\s*[^,}])/g, '$1: <$2>,$3');
  
  // Fix missing commas after closing JSX elements
  fixed = fixed.replace(/(\w+):\s*<([^>]*)>([^<]*)<\/[^>]*>(\s*[^,}])/g, '$1: <$2>$3</$2>,$4');
  
  // Fix specific patterns for icon properties
  fixed = fixed.replace(/(\w+):\s*<(\w+)\s+className="([^"]*)"\s*\/>(\s*[^,}])/g, '$1: <$2 className="$3" />,$4');
  
  return fixed;
}

// Main function to process files
async function fixFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = fixMissingCommas(content);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Files fixed: ${fixedCount}`);
  console.log(`Errors: ${errorCount}`);
}

// Run the fix
fixFiles().catch(console.error);