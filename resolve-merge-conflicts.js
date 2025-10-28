#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function resolveMergeConflicts() {
  // Find all files with merge conflicts
  const files = await glob('**/*', { cwd: process.cwd() });
  
  let resolvedCount = 0;
  
  console.log(`🔍 Checking for merge conflicts...`);

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`🔧 Resolving conflicts in ${file}`);
        
        // Remove conflict markers and keep our changes (HEAD)
        let resolved = content
          .replace(/<<<<<<< HEAD\n/g, '')
          .replace(/=======\n.*?\n          .replace(/<<<<<<< HEAD\n.*?\n=======\n/g, '')
          .replace(/        
        fs.writeFileSync(file, resolved, 'utf8');
        resolvedCount++;
        console.log(`✅ Resolved conflicts in ${file}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

  if (resolvedCount > 0) {
    console.log(`\n🎉 Merge conflicts resolved! Run 'git add . && git commit' to complete the merge.`);
  } else {
    console.log(`\n✨ No merge conflicts found.`);
  }
}

resolveMergeConflicts().catch(console.error);