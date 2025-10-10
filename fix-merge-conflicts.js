#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep the latest version (after =======)
    // Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Also handle cases where there might be multiple conflict sections
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< .*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>> .*$/gm, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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