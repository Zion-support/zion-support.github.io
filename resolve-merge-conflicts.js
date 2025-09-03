#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by choosing our version (main branch)
function resolveMergeConflicts(content) {
  let resolved = content;
  
  // Remove conflict markers and keep our version (between <<<<<<< .our and =======)
  resolved = resolved.replace(/<<<<<<< \.our\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> \.their/g, '$1');
  
  // Also handle conflicts without .our/.their markers
  resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
  
  // Handle simple conflict markers
  resolved = resolved.replace(/<<<<<<< \.our\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> \.their/g, '$1');
  
  return resolved;
}

// Function to process all conflicted files
async function processConflictedFiles() {
  try {
    // Find all files with merge conflicts
    const conflictedFiles = await glob('**/*', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', '.next/**'] 
    });
    
    let processedCount = 0;
    
    for (const file of conflictedFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has merge conflict markers
        if (content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>')) {
          console.log(`Resolving conflicts in: ${file}`);
          
          const resolved = resolveMergeConflicts(content);
          fs.writeFileSync(file, resolved, 'utf8');
          processedCount++;
        }
      } catch (error) {
        // Skip files that can't be read (binary files, etc.)
        continue;
      }
    }
    
    console.log(`\n✅ Resolved conflicts in ${processedCount} files`);
    return processedCount;
    
  } catch (error) {
    console.error('Error processing files:', error);
    return 0;
  }
}

// Run the conflict resolution
processConflictedFiles().then(count => {
  if (count > 0) {
    console.log('\n🎉 Merge conflicts resolved successfully!');
    console.log('You can now commit the changes.');
  } else {
    console.log('\n✅ No merge conflicts found.');
  }
});