#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { glob } from 'glob';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
        continue;
      }
      
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all files
async function processAllFiles() {
  console.log('Starting merge conflict resolution...');
  
  const patterns = [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.json',
    '**/*.css',
    '**/*.html',
    '**/*.md'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (fixMergeConflicts(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nMerge conflict resolution complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files with conflicts fixed: ${fixedFiles}`);
}

// Run the script
processAllFiles().catch(console.error);