#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';';
import { execSync } from 'child_process';'
// Function to recursively find all files with merge conflicts;
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories;
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {';
        findFilesWithConflicts(filePath, fileList);
      }
    } else if (stat.isFile()) {
      // Check if file contains merge conflict markers;
      try {
        const content = fs.readFileSync(filePath, 'utf8');';
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {';
          fileList.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be read';
        console.log(`Skipping file ${filePath}: ${error.message}`);`
      }
    }
  });
  return fileList;
}
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');'
    // Remove merge conflict markers and keep the main branch version;
    content = content.replace(//g, '');';
    content = content.replace(/\/fix-errors-and-merge-to-main-[a-zA-Z0-9]+/g, '');';
    content = content.replace(/    
    // Clean up any remaining conflict markers;
    content = content.replace(/    content = content.replace(/=======\n/g, '');';
    content = content.replace(/    
    // Clean up extra whitespace and empty lines;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');';
    content = content.replace(/^\s*\n/gm, '');'
    // Write the cleaned content back;
    fs.writeFileSync(filePath, content, 'utf8');';
    console.log(`Fixed merge conflicts in: ${filePath}`);`;
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}: ${error.message}`);`;
    return false;
  }
}
// Function to fix syntax errors in TypeScript/JavaScript files;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');';
    let modified = false;
    // Fix common syntax errors;
    if (content.includes(';')) {'
      // Fix unterminated strings;
      content = content.replace(/(['"`])([^'"`]*?)\n/g, '$1$2$1\n');';
      modified = true;
    }
    // Fix missing semicolons after imports;
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {';
        return match + ';';'
      }
      return match;
    });
    // Fix missing semicolons after statements;
    content = content.replace(/([^;{}])\n(\s*[a-zA-Z])/g, '$1;\n$2');';
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');';
      console.log(`Fixed syntax errors in: ${filePath}`);`;
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}: ${error.message}`);`;
    return false;
  }
}
// Main execution;
console.log('🔍 Searching for files with merge conflicts...');';
const conflictedFiles = findFilesWithConflicts('/workspace');';
console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);`;
conflictedFiles.forEach(file => console.log(`  - ${file}`));`;
console.log('\n🔧 Fixing merge conflicts...');';
let fixedCount = 0;
let syntaxFixedCount = 0;
conflictedFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
  // Also try to fix syntax errors;
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {';
    if (fixSyntaxErrors(file)) {
      syntaxFixedCount++;
    }
  }
});
console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);`;
console.log(`✅ Fixed syntax errors in ${syntaxFixedCount} files`);`
// Clean up any remaining problematic files;
console.log('\n🧹 Cleaning up corrupted files...');';
const corruptedFiles = [
  '/workspace/cleanup-app-comprehensive.cjs','
  '/workspace/cleanup-app-tsx.cjs','
  '/workspace/cleanup_merge_conflicts.cjs','
  '/workspace/fix-5g-function-names.cjs','
  '/workspace/fix-all-conflicts.cjs','
  '/workspace/fix-all-parsing-errors.cjs','
  '/workspace/fix-common-errors.cjs','
  '/workspace/fix-corrupted-files.cjs','
  '/workspace/fix-errors.cjs','
  '/workspace/fix-jsx-issues.cjs','
  '/workspace/fix-merge-conflicts.cjs','
  '/workspace/fix-remaining-conflicts.cjs','
  '/workspace/fix-syntax-errors.cjs','
  '/workspace/fix_unused_imports.cjs','
  '/workspace/resolve_conflicts.cjs''
];
corruptedFiles.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Removed corrupted file: ${file}`);`
    }
  } catch (error) {
    console.log(`Could not remove ${file}: ${error.message}`);`
  }
});
console.log('\n🎉 Merge conflict resolution completed!');