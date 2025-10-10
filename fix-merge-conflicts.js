#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Skip if no merge conflicts
    if (!content.includes('')) {
      return false;
    }
    console.log(`Fixing merge conflicts in: ${filePath}`);
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/
    // Clean up any remaining artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
    content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
    fs.writeFileSync(filePath, content, 'utf8');
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
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(tsx?|jsx?)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  walkDir(dir);
  return files;
}
// Main execution
console.log('Starting merge conflict resolution...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Try to build after fixing
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.log('Build still has issues, continuing with more fixes...');
}