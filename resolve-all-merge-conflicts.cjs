#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Starting comprehensive merge conflict resolution...');
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let inHead = false;
    let inSeparator = false;
    let inMain = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        inHead = true;
        inSeparator = false;
        inMain = false;
        continue;
      }
      if (line.includes('=======')) {
        inHead = false;
        inSeparator = true;
        inMain = true;
        continue;
      }
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        inHead = false;
        inSeparator = false;
        inMain = false;
        continue;
      }
      // Only include lines from HEAD section
      if (inConflict && inHead) {
        resolvedLines.push(line);
      } else if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
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
  scanDirectory(dir);
  return files;
}
// Main execution
try {
  const workspaceDir = process.cwd();
  console.log(`📁 Scanning workspace: ${workspaceDir}`);
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
  let resolvedCount = 0;
  let errorCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ Failed to resolve conflicts in ${errorCount} files`);
  }
  console.log('🎉 Merge conflict resolution completed!');
} catch (error) {
  console.error('💥 Fatal error during merge conflict resolution:', error);
  process.exit(1);
}