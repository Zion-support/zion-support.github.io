#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "\\|  .trim()
  .split('\n')
  .filter(file => file && !file.includes('resolve_all_conflicts.js'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;

filesWithConflicts.forEach(filePath => {
  try {
    console.log(`Resolving conflicts in: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and choose the correct version
    // Pattern 1:  ... 
    content = content.replace(/ ... 
    content = content.replace(/\n?/g, '');
    content = content.replace(/
    
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
const remainingConflicts = execSync('grep -l "\\|origin" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | grep -v node_modules | grep -v ".git" | grep -v "resolve_all_conflicts.js"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

if (remainingConflicts.length === 0) {
  console.log('✓ All merge conflicts resolved!');
} else {
  console.log(`⚠ Still ${remainingConflicts.length} files with conflicts:`, remainingConflicts);
}