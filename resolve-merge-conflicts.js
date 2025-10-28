import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function resolveMergeConflicts() {
  try {
    // Find all files with merge conflicts
    const files = await glob('**/*.tsx', { cwd: '/workspace' });
    
    for (const file of files) {
      const filePath = path.join('/workspace', file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflict markers
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`Resolving conflicts in ${file}`);
        
        // Remove conflict markers and keep our changes (the ones after =======)
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
        content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
        
        // Clean up any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
        
        fs.writeFileSync(filePath, content);
        console.log(`Resolved conflicts in ${file}`);
      }
    }
    
    console.log('All merge conflicts resolved');
  } catch (error) {
    console.error('Error resolving merge conflicts:', error);
  }
}

resolveMergeConflicts();