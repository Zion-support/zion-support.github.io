#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by choosing the newer version (after =======)
function resolveMergeConflict(content) {
  const lines = content.split('\n');
  const resolved = [];
  let inConflict = false;
  let conflictType = null; // 'head' or 'incoming'
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    } else if (line.startsWith('=======')) {
      conflictType = 'incoming';
      continue;
    } else if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      // Skip lines from HEAD, keep lines from incoming (after =======)
      if (conflictType === 'incoming') {
        resolved.push(line);
      }
    } else {
      resolved.push(line);
    }
  }
  
  return resolved.join('\n');
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main function
function main() {
  const workspaceDir = process.cwd();
  console.log('🔍 Searching for files with merge conflicts...');
  
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No files with merge conflicts found.');
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    try {
      console.log(`  Processing: ${file}`);
      
      const content = fs.readFileSync(file, 'utf8');
      const resolved = resolveMergeConflict(content);
      
      // Only write if content actually changed
      if (resolved !== content) {
        fs.writeFileSync(file, resolved, 'utf8');
        resolvedCount++;
        console.log(`    ✅ Resolved conflicts in ${file}`);
      } else {
        console.log(`    ⚠️  No changes needed for ${file}`);
      }
    } catch (error) {
      console.error(`    ❌ Error processing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`  ❌ Errors: ${errorCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! You may need to review the changes.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflict, findFilesWithConflicts };