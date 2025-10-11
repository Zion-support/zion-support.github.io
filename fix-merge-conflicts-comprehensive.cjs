#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let hasConflicts = false;

    // Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
    const conflictPattern1 = /<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g;
    if (conflictPattern1.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern1, '$1');
    }

    // Pattern 2: <<<<<<< HEAD ... >>>>>>> branch (no =======)
    const conflictPattern2 = /<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g;
    if (conflictPattern2.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern2, '$1');
    }

    // Pattern 3: ======= ... >>>>>>> branch (no <<<<<<< HEAD)
    const conflictPattern3 = /=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g;
    if (conflictPattern3.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern3, '');
    }

    // Pattern 4: <<<<<<< HEAD ... ======= (no >>>>>>>)
    const conflictPattern4 = /<<<<<<< HEAD\n([\s\S]*?)=======\n/g;
    if (conflictPattern4.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern4, '$1');
    }

    // Pattern 5: ======= (standalone)
    const conflictPattern5 = /=======\n/g;
    if (conflictPattern5.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern5, '');
    }

    // Pattern 6: >>>>>>> branch (standalone)
    const conflictPattern7 = />>>>>>> [^\n]+\n/g;
    if (conflictPattern7.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern7, '');
    }

    // Pattern 7: <<<<<<< HEAD (standalone)
    const conflictPattern8 = /<<<<<<< HEAD\n/g;
    if (conflictPattern8.test(content)) {
      hasConflicts = true;
      content = content.replace(conflictPattern8, '');
    }

    if (hasConflicts) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  let fixedCount = 0;

  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          continue;
        }
        const result = processDirectory(fullPath);
        processedCount += result.processed;
        fixedCount += result.fixed;
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          processedCount++;
          if (resolveMergeConflicts(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }

  return { processed: processedCount, fixed: fixedCount };
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');

const result = processDirectory('.');

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${result.processed}`);
console.log(`   Files fixed: ${result.fixed}`);

if (result.fixed > 0) {
  console.log('\n🎉 Merge conflict resolution completed!');
  console.log('💡 Next steps:');
  console.log('   1. Run npm run lint to check for remaining issues');
  console.log('   2. Run npm run type-check to verify TypeScript compilation');
  console.log('   3. Run npm run build to test the build process');
} else {
  console.log('\n✅ No merge conflicts found or all conflicts were already resolved.');
}

console.log('\n🔧 Merge conflict resolution script completed.');