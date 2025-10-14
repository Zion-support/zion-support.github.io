#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix missing array brackets
function fixArrayBrackets(content) {
  let fixed = content;
  
  // Fix missing array brackets for various patterns
  fixed = fixed.replace(/const\s+services\s*=\s*\[\s*$/gm, 'const services = [');
  fixed = fixed.replace(/const\s+features\s*=\s*\[\s*$/gm, 'const features = [');
  fixed = fixed.replace(/const\s+benefits\s*=\s*\[\s*$/gm, 'const benefits = [');
  fixed = fixed.replace(/const\s+items\s*=\s*\[\s*$/gm, 'const items = [');
  fixed = fixed.replace(/const\s+data\s*=\s*\[\s*$/gm, 'const data = [');
  fixed = fixed.replace(/const\s+list\s*=\s*\[\s*$/gm, 'const list = [');
  fixed = fixed.replace(/const\s+array\s*=\s*\[\s*$/gm, 'const array = [');
  
  // Fix patterns where the opening bracket is missing
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*{/gm, 'const $1 = [');
  
  // Fix patterns where there's no opening bracket at all
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*$/gm, 'const $1 = [');
  
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
      const fixed = fixArrayBrackets(content);
      
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