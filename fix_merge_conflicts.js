#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting merge conflict resolution...');

// Get all files with merge conflicts
const filesWithConflicts = execSync('find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD content
    // This regex handles the pattern:
    // <<<<<<< HEAD
    // content to keep
    // =======
    // content to discard
    // >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Also handle cases where there might be multiple conflicts in one file
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    
    // Verify the file no longer has conflict markers
    const hasConflicts = content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>');
    
    if (!hasConflicts) {
      console.log(`✅ Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`⚠️  Still has conflicts: ${filePath}`);
      errorCount++;
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\n🎉 Merge conflict resolution complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (errorCount > 0) {
  console.log('\nFiles that still need manual attention:');
  filesWithConflicts.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`  - ${filePath}`);
      }
    } catch (e) {
      // ignore
    }
  });
}