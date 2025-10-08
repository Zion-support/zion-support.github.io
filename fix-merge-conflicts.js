import fs from 'fs';
import { glob } from 'glob';

async function fixMergeConflicts() {
  // Find all files with merge conflicts
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');
  
  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix merge conflicts by choosing the newer version (after =======)
      const pattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g;
      
      if (pattern.test(content)) {
        content = content.replace(pattern, (match, headContent, mainContent) => {
          // Choose the main branch version (after =======)
          return mainContent;
        });
        
        fs.writeFileSync(filePath, content);
        console.log(`Fixed merge conflicts in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
  
  console.log('Merge conflicts fixed');
}

fixMergeConflicts();