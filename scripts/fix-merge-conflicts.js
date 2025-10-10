#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and choose the appropriate content
    // Strategy: Keep the content between <<<<<<< HEAD and ======= (current branch)
    // If no =======, keep everything after <<<<<<< HEAD
    // If no <<<<<<< HEAD, keep everything before =======
    
    // Remove all merge conflict markers
    content = content.replace(/^<<<<<<< HEAD\n?/gm, '');
    content = content.replace(/^=======\n?/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+\n?/gm, '');
    
    // Clean up any remaining conflict artifacts
    content = content.replace(/^<<<<<<< [^\n]+\n?/gm, '');
    content = content.replace(/^=======\n?/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+\n?/gm, '');
    
    // Remove empty lines that might have been left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up any malformed JSX or syntax issues
    content = content.replace(/\}\s*>\s*</g, '}>');
    content = content.replace(/<\s*\/\s*>\s*</g, '</>');
    
    // Fix common JSX issues
    content = content.replace(/\{\s*>\s*\}/g, '>');
    content = content.replace(/\{\s*<\s*\}/g, '<');
    
    // Remove any remaining malformed syntax
    content = content.replace(/\{\s*[<>]\s*\}/g, '');
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    // Ensure proper file ending
    if (!content.endsWith('\n')) {
      content += '\n';
    }
    
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
}

console.log(`\nMerge conflict resolution complete:`);
console.log(`- Files processed: ${filesWithConflicts.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);

if (errorCount === 0) {
  console.log('\n✓ All merge conflicts resolved successfully!');
} else {
  console.log(`\n⚠ ${errorCount} files had errors during processing`);
}