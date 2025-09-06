#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
<<<<<<< HEAD
=======
=======
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
<<<<<<< HEAD
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const parts = content.split(/<<<<<<< HEAD\n?/);
    let resolved = parts[0]; // Content before first conflict
    
    for (let i = 1; i < parts.length; i++) {
      const conflictPart = parts[i];
      const conflictSections = conflictPart.split(/=======\n?/);
      
      if (conflictSections.length >= 2) {
        const headContent = conflictSections[0];
        const incomingContent = conflictSections[1].split(/>>>>>>> .*/)[0];
        
        // Choose the longer content (usually more complete)
        if (headContent.trim().length > incomingContent.trim().length) {
          resolved += headContent;
        } else {
          resolved += incomingContent;
        }
      }
    }
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
<<<<<<< HEAD
=======
=======
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
<<<<<<< HEAD
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
<<<<<<< HEAD
=======
=======
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
      }
    }
  }
  
<<<<<<< HEAD
  scanDirectory(dir);
  return conflictedFiles;
=======
<<<<<<< HEAD
  scanDirectory(dir);
=======
  walkDir(dir);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return files;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

// Main execution
<<<<<<< HEAD
try {
  const conflictedFiles = findConflictedFiles('./src');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Check if there are still conflicts
  const remainingConflicts = findConflictedFiles('./src');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
<<<<<<< HEAD
=======
=======
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}