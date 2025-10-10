#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (err) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let keepLines = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = true;
        modified = true;
        continue;
      } else if (line.includes('=======')) {
        keepLines = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = true;
        continue;
      }
      
      if (!inConflict || keepLines) {
        newLines.push(line);
      }
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`Error fixing ${filePath}:`, err.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const workspaceDir = process.cwd();
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Fixing merge conflicts...');
  let fixedCount = 0;
  
  for (const file of conflictedFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Try to run linting to check for remaining issues
  console.log('\n🔍 Running linting to check for remaining issues...');
  try {
    execSync('pnpm run lint', { stdio: 'inherit' });
    console.log('✅ Linting passed!');
  } catch (err) {
    console.log('⚠️  Linting found issues, but merge conflicts are fixed');
  }
}

if (require.main === module) {
  main();
}

module.exports = { findFilesWithConflicts, fixMergeConflicts };