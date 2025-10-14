#!/usr/bin/env node;
<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
import { execSync } from "child_process
console.log('🔧 Starting merge conflict resolution...'

=======
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Starting merge conflict resolution...');
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
// Get list of files with merge conflicts;
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8'
const conflictedFiles = gitStatus
  .split('\n'
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'
  .map(line => line.substring(3).trim())
<<<<<<< HEAD
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'

console.log(`Found ${conflictedFiles.length} files with merge conflicts`

=======
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
let resolvedCount = 0;
let errorCount = 0;
for (const file of conflictedFiles) {
  try {
<<<<<<< HEAD
    console.log(`\n📝 Resolving conflicts in: ${file}`
    
=======
    console.log(`\n📝 Resolving conflicts in: ${file}`);
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File does not exist: ${file}`
      continue;
    }
;
<<<<<<< HEAD
const content = fs.readFileSync(file, 'utf8'
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') || !content.includes('
      console.log(`✅ No merge conflicts found in: ${file}`
=======
const content = fs.readFileSync(file, 'utf8');
    // Check if file has merge conflict markers
      console.log(`✅ No merge conflicts found in: ${file}`);
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
      continue;
    }
    // Strategy: Use the version from main (the newer version) for most conflicts
<<<<<<< HEAD
    // This means we'
    let resolvedContent = content;
    
    // Remove merge conflict markers and keep the main branch version
    resolvedContent = resolvedContent.replace()
      /\n(.*?)\n\n(.*?)\n      (match, headContent, mainContent) =>> {
        // Use the main branch content (after )
        return mainContent;
      }
    );

    // Handle any remaining conflict markers
    resolvedContent = resolvedContent.replace(/\n.*?\n\n(.*?)\n    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/\n.*?\n\n.*?\n    resolvedContent = resolvedContent.replace(/\n.*?\n    resolvedContent = resolvedContent.replace(/\n.*?\n
    // Write the resolved content)
    fs.writeFileSync(file, resolvedContent);
    
    // Add the file to staging
    execSync(`
    
    resolvedCount++;
    console.log(`✅ Resolved conflicts in: ${file}`
    
  } catch (error) {
    console.error(`❌ Error resolving ${file}:`
    errorCount++;
  }
}

console.log(`\n🎉 Conflict resolution complete!`
console.log(`✅ Resolved: ${resolvedCount} files`
console.log(`❌ Errors: ${errorCount} files`

if (resolvedCount > 0) {
  console.log('\n📋 Next steps:'
  console.log('1. Review the resolved files'
  console.log('2. Run: git status'
  console.log('3. Run: git commit -m "Resolve merge conflicts
  console.log('4. Run: git push origin resolve-all-conflicts'
}
=======
    let resolvedContent = content;
    // Remove merge conflict markers and keep the main branch version
    resolvedContent = resolvedContent.replace(
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
