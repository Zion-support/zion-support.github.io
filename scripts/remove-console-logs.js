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
      console.log(`✅ Cleaned console logs from: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function processDistFiles() {
  try {
    console.log('🧹 Removing console logs from production build...');
    
    // Find all JavaScript files in dist directory
    const files = await glob('dist/**/*.js');
    
    if (files.length === 0) {
      console.log('No JavaScript files found in dist directory');
      return;
    }
    
    console.log(`Found ${files.length} JavaScript files to process`);
    
    // Process each file
    files.forEach(removeConsoleLogs);
    
    console.log('✅ Console log removal completed!');
  } catch (error) {
    console.error('Error processing dist files:', error.message);
  }
}

// Run the script
processDistFiles();