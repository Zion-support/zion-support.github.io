#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflict markers
    if (!content.includes('')) {
        conflictType = 'current';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }

      if (inConflict) {
        // For most conflicts, prefer the incoming changes (after )
        if (conflictType === 'current') {
          resolvedLines.push(line);
        }
        // Skip lines from incoming changes (before )
      } else {
        resolvedLines.push(line);
      }
    }

    // Write resolved content back to file
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];

  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflict markers
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('>>>>>>>')) {
            conflictFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }

  scanDirectory(dir);
  return conflictFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictFiles = findConflictFiles('/workspace');

  console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);

  let resolvedCount = 0;
  for (const file of conflictFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);

  // Try to add and commit the resolved files
  try {
    console.log('📝 Adding resolved files to git...');
    execSync('git add .', { cwd: '/workspace', stdio: 'inherit' });

    console.log('💾 Committing resolved conflicts...');
    execSync('git commit -m "Resolve merge conflicts automatically"', { cwd: '/workspace', stdio: 'inherit' });

    console.log('✅ Successfully committed resolved conflicts');
  } catch (error) {
    console.log('⚠️  Git operations failed, but conflicts were resolved:', error.message);
  }

  console.log('🎉 Merge conflict resolution completed!');

} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}