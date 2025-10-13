import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Remove console.log statements from production build
 * This helps reduce bundle size and improve performance
 */

function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error, console.info, console.debug
    content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Cleaned console logs from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processFiles() {
  const patterns = [
    'dist/**/*.js',
    'dist/**/*.jsx',
    'dist/**/*.ts',
    'dist/**/*.tsx'
  ];
  
  let totalFiles = 0;
  let cleanedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        cleanedFiles++;
      }
    });
  });
  
  console.log(`\n📊 Console Log Removal Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files cleaned: ${cleanedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - cleanedFiles}`);
}

// Run the script
console.log('🧹 Removing console logs from production build...\n');
processFiles();
console.log('\n✅ Console log removal completed!');

export { removeConsoleLogs, processFiles };