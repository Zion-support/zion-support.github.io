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
    
    // Remove merge conflict markers and keep the newer version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // Also handle cases where there might be just <<<<<<< and ======= without >>>>>>>
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Only write if content actually changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`⚠️  No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log(`📁 Total processed: ${filesWithConflicts.length} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Merge conflicts resolved! You can now run your build and tests.');
}