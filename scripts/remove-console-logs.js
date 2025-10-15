import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function removeConsoleLogs() {
  try {
    console.log('🧹 Starting console log removal...');
    
    // Find all JavaScript files in dist directory
    const files = await glob('dist/**/*.js');
    
    console.log(`📁 Found ${files.length} JavaScript files to process`);
    
    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Remove console.log statements
        content = content.replace(/console\.log\([^)]*\);?/g, '');
        content = content.replace(/console\.warn\([^)]*\);?/g, '');
        content = content.replace(/console\.error\([^)]*\);?/g, '');
        content = content.replace(/console\.info\([^)]*\);?/g, '');
        content = content.replace(/console\.debug\([^)]*\);?/g, '');
        
        // Clean up empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✅ Cleaned console logs from: ${filePath}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    }
    
    console.log('🎉 Console log removal completed!');
  } catch (error) {
    console.error('❌ Error during console log removal:', error);
  }
}

removeConsoleLogs();