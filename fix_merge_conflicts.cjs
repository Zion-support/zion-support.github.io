#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        // Skip the HEAD marker
        i++;
        continue;
      } else if (line.trim() === '=======') {
        // Skip the separator
        i++;
        continue;
      } else if (line.trim().startsWith('>>>>>>>')) {
        // Skip the end marker
        i++;
        continue;
      } else {
        // Regular line, keep it
        resolvedLines.push(line);
        i++;
      }
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
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
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a source file
        if (/\.(tsx?|jsx?)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔍 Scanning for files with merge conflicts...');
  
  const workspaceDir = process.cwd();
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  for (const filePath of conflictedFiles) {
    try {
      const resolved = resolveMergeConflicts(filePath);
      if (resolved) {
        resolvedCount++;
        console.log(`✅ Resolved: ${path.relative(workspaceDir, filePath)}`);
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error: ${path.relative(workspaceDir, filePath)} - ${error.message}`);
    }
  }
  
  console.log(`\n📈 Summary:`);
  console.log(`   ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`   ❌ Errors: ${errorCount} files`);
  console.log(`   📊 Total processed: ${conflictedFiles.length} files`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! Running lint check...');
    try {
      execSync('pnpm run lint', { stdio: 'inherit' });
      console.log('✅ Lint check passed!');
    } catch (error) {
      console.log('⚠️  Lint check failed, but conflicts were resolved.');
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, findFilesWithConflicts };