#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix double semicolons
  fixed = fixed.replace(/;;/g, ';');
  
  // Fix semicolons in import statements
  fixed = fixed.replace(/import\s+([^;]+);;/g, 'import $1;');
  
  // Fix semicolons in destructuring
  fixed = fixed.replace(/{\s*([^}]+);\s*}/g, '{$1}');
  
  // Fix semicolons in function parameters
  fixed = fixed.replace(/\(\s*([^)]+);\s*\)/g, '($1)');

  return fixed;
}

// Main function to process files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Fixing syntax errors in TSX files...');
  const files = await glob(pattern);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixSyntaxErrors(content);
      
      if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run the script
main().catch(console.error);