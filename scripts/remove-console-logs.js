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
    
<<<<<<< HEAD
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
async function processDistFiles() {
  try {
    const distPath = path.join(process.cwd(), 'dist');
    
    if (!fs.existsSync(distPath)) {
      console.log('Dist directory not found, skipping console log removal');
      return;
    }
    
    // Find all JavaScript files
    const jsFiles = await glob('**/*.js', { cwd: distPath });
    
    if (jsFiles.length === 0) {
      console.log('No JavaScript files found in dist directory');
      return;
    }
    
    console.log(`Found ${jsFiles.length} JavaScript files to process`);
    
    let processedCount = 0;
    
    for (const file of jsFiles) {
      const filePath = path.join(distPath, file);
      if (removeConsoleLogs(filePath)) {
        processedCount++;
=======
    for (const file of files) {
      totalFiles++;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Remove console.log statements (but keep console.error, console.warn, etc.)
        const cleanedContent = content
          .replace(/console\.log\([^)]*\);?/g, ')'
          .replace(/console\.debug\([^)]*\);?/g, ')'
          .replace(/console\.info\([^)]*\);?/g, ')'
        
        if (cleanedContent !== content) {
          fs.writeFileSync(file, cleanedContent);
          modifiedFiles++;
          console.log(`✅ Cleaned: ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      }
    }
    
    console.log(`Console log removal completed!`);
    
  } catch (error) {
    console.error('Error processing dist files:', error.message);
  }
}

// Run the script
processDistFiles();