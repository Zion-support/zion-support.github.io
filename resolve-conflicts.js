#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';

async function resolveConflicts() {
  console.log('Resolving merge conflicts by accepting our changes...');
  
  // Get all files with conflicts
  const conflictFiles = await glob('**/*.tsx', { ignore: ['node_modules/**'] });
  
  let resolvedCount = 0;
  
  for (const filePath of conflictFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflict markers
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`Resolving conflicts in: ${filePath}`);
        
        // Remove conflict markers and keep our version (HEAD)
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
        
        // Clean up any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD\n?/g, '');
        content = content.replace(/=======\n?/g, '');
        content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
        
        fs.writeFileSync(filePath, content);
        resolvedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`Resolved conflicts in ${resolvedCount} files`);
}

resolveConflicts().catch(console.error);