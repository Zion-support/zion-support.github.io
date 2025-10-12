import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixMergeConflicts() {
  console.log('🔧 Fixing merge conflict markers...');
  
  // Find all files with merge conflict markers
  const files = await glob('**/*.{ts,tsx,js,jsx}', { 
    ignore: ['node_modules/**', 'dist/**', '.next/**'] 
  });
  
  let fixedFiles = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Remove merge conflict markers and keep only the content between       // This assumes we want to keep our version (the fixed version)
      content = content.replace(/      
      // Remove any remaining conflict markers
      content = content.replace(/      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up any double newlines that might have been created
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        fixedFiles++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n🎉 Fixed merge conflicts in ${fixedFiles} files`);
}

fixMergeConflicts().catch(console.error);
