#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Get list of files with conflicts
const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Function to resolve conflicts by accepting main branch version
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>> main')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'main';
        continue;
      } else if (line.startsWith('>>>>>>> main')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Skip HEAD version, keep main version
        if (conflictType === 'main') {
          resolvedLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts for each file
let resolvedCount = 0;
let failedCount = 0;

for (const file of conflictFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    failedCount++;
  }
}

console.log(`\n📊 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Failed to resolve: ${failedCount} files`);

if (resolvedCount > 0) {
  console.log('\n🔄 Adding resolved files to git...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Files added to git');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}

console.log('\n🎉 Merge conflict resolution completed!');