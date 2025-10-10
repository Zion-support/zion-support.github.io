#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
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
    // Pattern: <<<<<<< ... ======= ... >>>>>>>
    content = content.replace(/<<<<<<<[^>]*=======([\s\S]*?)>>>>>>>/g, '$1');
    
    // Also handle cases where there might be multiple conflict markers
    content = content.replace(/<<<<<<<[^>]*=======([\s\S]*?)>>>>>>>/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<<.*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>>.*$/gm, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      fixedCount++;
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