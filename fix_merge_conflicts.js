#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " app -r', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep HEAD version
    // Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`✓ Fixed: ${filePath}`);
    } else {
      console.log(`- No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${filesWithConflicts.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);