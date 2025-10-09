#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove console statements from a file
function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.error, console.warn statements
    const consoleRegex = /console\.(log|error|warn|info|debug)\([^)]*\);?\s*/g;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove console statements that span multiple lines
    const multiLineConsoleRegex = /console\.(log|error|warn|info|debug)\([^)]*\);\s*/gs;
    content = content.replace(multiLineConsoleRegex, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
      // console.log(`✓ Removed console statements from: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // console.log('🧹 Removing console statements from production code...\n');
  
  // Get all TypeScript and JavaScript files in the app directory
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    '!app/**/*.test.{ts,tsx,js,jsx}',
    '!app/**/*.spec.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/dist/**'
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern);
    totalFiles += files.length;
    
    for (const file of files) {
      if (removeConsoleStatements(file)) {
        modifiedFiles++;
      }
    }
  }
  
  // console.log(`\n📊 Summary:`);
  // console.log(`   Total files processed: ${totalFiles}`);
  // console.log(`   Files modified: ${modifiedFiles}`);
  // console.log(`   Console statements removed: ${modifiedFiles > 0 ? 'Yes' : 'No'}`);
  
  if (modifiedFiles > 0) {
    // console.log('\n✅ Console statements cleanup completed successfully!');
  } else {
    // console.log('\n✅ No console statements found to remove.');
  }
}

// Run the script
main().catch(console.error);

export { removeConsoleStatements };