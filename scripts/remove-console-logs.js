import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Remove console.log statements from production build
 * This helps reduce bundle size and improve performance
 */
function removeConsoleLogs(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error statements
    let newContent = content
      .replace(/console\.log\([^)]*\);?/g, '')
      .replace(/console\.warn\([^)]*\);?/g, '')
      .replace(/console\.error\([^)]*\);?/g, '')
      .replace(/console\.debug\([^)]*\);?/g, '')
      .replace(/console\.info\([^)]*\);?/g, '');
    
    // Clean up empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (newContent !== originalContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Removed console logs from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Process all JavaScript files in the dist directory
 */
async function processFiles() {
  try {
    console.log('🧹 Starting console log removal...');
    
    // Find all JavaScript files in dist directory
    const files = await glob('dist/**/*.js');
    
    if (files.length === 0) {
      console.log('No JavaScript files found in dist directory');
      return;
    }
    
    let processedCount = 0;
    let removedCount = 0;
    
    for (const file of files) {
      if (removeConsoleLogs(file)) {
        removedCount++;
      }
      processedCount++;
    }
    
    console.log(`✅ Processed ${processedCount} files`);
    console.log(`🗑️  Removed console logs from ${removedCount} files`);
    console.log('🎉 Console log removal completed!');
    
  } catch (error) {
    console.error('Error processing files:', error.message);
    process.exit(1);
  }
}

// Run the script
processFiles();