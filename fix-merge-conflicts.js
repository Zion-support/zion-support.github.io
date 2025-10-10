#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+$/g, '$1');
}

async function main() {
  // Find all TypeScript/JavaScript files with merge conflicts
  const files = await glob('**/*.{ts,tsx,js,jsx}', { 
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**'] 
  });

  let fixedCount = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
        console.log(`Fixing merge conflicts in: ${file}`);
        
        const resolvedContent = resolveMergeConflicts(content);
        
        // Only write if content changed
        if (resolvedContent !== content) {
          fs.writeFileSync(file, resolvedContent, 'utf8');
          fixedCount++;
          console.log(`✓ Fixed: ${file}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\nFixed merge conflicts in ${fixedCount} files.`);
}

main().catch(console.error);