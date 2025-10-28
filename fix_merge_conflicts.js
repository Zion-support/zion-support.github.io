#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version (between <<<<<<< HEAD and =======)
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g;
    
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true;
      return headContent;
    });
    
    // Also handle cases where there might be incomplete conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      if (fixMergeConflicts(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`\nTotal files fixed: ${totalFixed}`);

  // Also check for any remaining conflict markers
  const allFiles = await glob('**/*.{ts,tsx,js,jsx}', { 
    cwd: process.cwd(),
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let remainingConflicts = 0;

  for (const file of allFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`Warning: ${file} still contains conflict markers`);
        remainingConflicts++;
      }
    } catch (error) {
      // Ignore read errors
    }
  }

  if (remainingConflicts === 0) {
    console.log('✅ All merge conflicts have been resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts} files still contain conflict markers`);
  }
}

main().catch(console.error);