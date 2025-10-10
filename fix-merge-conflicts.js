#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    console.log(`Resolving conflicts in: ${filePath}`);
    // Strategy: Keep the HEAD version (before ) and remove conflict markers
    // This is generally safer as it preserves the current branch changes
    // Remove all conflict markers and keep only the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    // Clean up any remaining artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive blank lines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start of lines
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript, JavaScript, and JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
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
function main() {
  console.log('🔍 Scanning for files with merge conflicts...');
  const workspaceDir = process.cwd();
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  let fixedCount = 0;
  let errorCount = 0;
  for (const filePath of conflictedFiles) {
    try {
      if (resolveMergeConflicts(filePath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Failed to process ${filePath}:`, error.message);
      errorCount++;
    }
  }
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total processed: ${conflictedFiles.length} files`);
  if (fixedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! You can now run your build and tests.');
  }
}
// Run the script
main();