#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix &apos; errors
function fixAposErrors(content) {
  let fixed = content;
  
  // Fix &apos; in string literals
  fixed = fixed.replace(/&apos;/g, "'");
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAposErrors(content);
    
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

// Main execution
async function main() {
  console.log('Starting &apos; error fixes...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  console.log(`Found ${totalFiles} files to process...`);
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('&apos; error fixes completed!');
}

main().catch(console.error);