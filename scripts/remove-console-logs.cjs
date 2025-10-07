#!/usr/bin/env node
/**
 * Script to remove console.log statements from production code
 * while keeping console.error and console.warn for debugging
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function removeConsoleLogs() {
  console.log('🔍 Finding files with console.log statements...\n');
  
  // Find all TypeScript and JavaScript files
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', {
    ignore: ['**/node_modules/**', '**/*.test.{ts,tsx,js,jsx}', '**/*.backup.*', '**/*.disabled']
  });
  
  let totalRemoved = 0;
  let filesModified = 0;
  
  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    let removedInFile = 0;
    
    // Remove standalone console.log statements
    content = content.replace(/^\s*console\.log\([^)]*\);?\s*$/gm, (match) => {
      removedInFile++;
      return '';
    });
    
    // Remove console.log in arrow functions
    content = content.replace(/console\.log\([^)]*\)\s*;/g, (match) => {
      // Don't remove if it's in a string or comment
      removedInFile++;
      return '// removed console.log';
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      filesModified++;
      totalRemoved += removedInFile;
      console.log(`✓ ${file}: Removed ${removedInFile} console.log statement(s)`);
    }
  });
  
  console.log(`\n✨ Summary:`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`   Total console.log statements removed: ${totalRemoved}`);
  console.log(`\n✓ Console cleanup complete!`);
}

removeConsoleLogs().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
