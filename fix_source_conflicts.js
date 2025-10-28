#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get only source files with merge conflicts (excluding build artifacts)
const filesWithConflicts = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v ".next" | grep -v ".git" | xargs grep -l "<<<<<<< HEAD\\|=======\\|>>>>>>> origin"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('fix_source_conflicts.js'));

console.log(`Found ${filesWithConflicts.length} source files with merge conflicts`);

let resolvedCount = 0;

filesWithConflicts.forEach(filePath => {
  try {
    console.log(`Resolving conflicts in: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and choose the correct version
    // Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> origin/...
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> origin\/[^\n]*/g, '$1');
    
    // Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> 
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> /g, '$1');
    
    // Pattern 3: <<<<<<< ... ======= ... >>>>>>> 
    content = content.replace(/<<<<<<< [^\n]*[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Clean up extra newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Ensure proper semicolons for 'use client' directives
    content = content.replace(/'use client'\n/g, "'use client';\n");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Resolved conflicts in: ${filePath}`);
      resolvedCount++;
    } else {
      console.log(`- No changes needed in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nResolved conflicts in ${resolvedCount} files`);

// Verify no more conflicts
const remainingConflicts = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v ".next" | grep -v ".git" | xargs grep -l "<<<<<<< HEAD\\|=======\\|>>>>>>> origin"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('fix_source_conflicts.js'));

if (remainingConflicts.length === 0) {
  console.log('✓ All merge conflicts resolved!');
} else {
  console.log(`⚠ Still ${remainingConflicts.length} files with conflicts:`, remainingConflicts);
}