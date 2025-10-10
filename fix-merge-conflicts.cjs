#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to remove merge conflict markers from a file
function removeMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    const mergeConflictRegex = /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g;
    const headOnlyRegex = /<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g;
    
    // First pass: remove complete merge conflicts
    content = content.replace(mergeConflictRegex, '');
    
    // Second pass: remove HEAD-only markers
    content = content.replace(headOnlyRegex, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up extra newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found!');
  process.exit(0);
}

console.log(`📝 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing merge conflicts...');
let fixedCount = 0;

for (const file of conflictedFiles) {
  if (removeMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount}/${conflictedFiles.length} files`);

// Run build to check if there are any remaining issues
console.log('\n🏗️  Running build to check for remaining issues...');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build failed. There may be remaining syntax errors.');
  console.log('Build output:', error.stdout?.toString() || error.message);
}
