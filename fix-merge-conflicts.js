#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: Choose the version after ======= (usually the newer version)
    const conflictPattern1 = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    content = content.replace(conflictPattern1, (match, headContent, newContent) => {
      modified = true;
      // Choose the new content (after =======)
      return newContent.trim();
    });

    // Pattern 2: Handle cases where there might be multiple conflict markers
    const conflictPattern2 = /<<<<<<< [^\n]+\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    content = content.replace(conflictPattern2, (match, headContent, newContent) => {
      modified = true;
      return newContent.trim();
    });

    // Pattern 3: Handle simple conflict markers without branch names
    const conflictPattern3 = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    content = content.replace(conflictPattern3, (match, headContent, newContent) => {
      modified = true;
      return newContent.trim();
    });

    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]*\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Starting merge conflict resolution...');

const sourceFiles = findSourceFiles(process.cwd());
let fixedCount = 0;
let totalConflicts = 0;

for (const file of sourceFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const conflictCount = (content.match(/<<<<<<< /g) || []).length;
    
    if (conflictCount > 0) {
      totalConflicts += conflictCount;
      console.log(`🔍 Found ${conflictCount} conflict(s) in: ${file}`);
      
      if (resolveMergeConflicts(file)) {
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`❌ Error reading ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Total conflicts found: ${totalConflicts}`);
console.log(`   Files with conflicts: ${sourceFiles.filter(f => {
  try {
    return fs.readFileSync(f, 'utf8').includes('<<<<<<< ');
  } catch {
    return false;
  }
}).length}`);
console.log(`   Files fixed: ${fixedCount}`);

if (fixedCount > 0) {
  console.log('\n✅ Merge conflict resolution completed!');
} else {
  console.log('\n✅ No merge conflicts found.');
}