import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Remove console.log statements from production build files
 */
async function removeConsoleLogs() {
  try {
    console.log('🧹 Starting console log removal...');
    
    // Find all JavaScript files in dist directory
    const files = await glob('dist/**/*.js');
    
    let totalFiles = 0;
    let modifiedFiles = 0;
    
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
      }
    }
    
    console.log(`Console log removal completed! Processed ${processedCount} files`);
=======
    for (const file of files) {
      totalFiles++;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Remove console.log statements (but keep console.error, console.warn, etc.)
        const cleanedContent = content
          .replace(/console\.log\([^)]*\);?/g, '')
          .replace(/console\.debug\([^)]*\);?/g, '')
          .replace(/console\.info\([^)]*\);?/g, '');
        
        if (cleanedContent !== content) {
          fs.writeFileSync(file, cleanedContent);
          modifiedFiles++;
          console.log(`✅ Cleaned: ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`🎉 Console log removal completed!`);
    console.log(`📊 Processed ${totalFiles} files, modified ${modifiedFiles} files`);
    
>>>>>>> main
  } catch (error) {
    console.error('❌ Error during console log removal:', error);
    process.exit(1);
  }
}

// Run the script
removeConsoleLogs();
