#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Resolving merge conflicts automatically...');

// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { "encoding": 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Function to resolve conflicts by accepting feature branch changes
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not "found": ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('') || !content.includes('') || !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts "in": ${filePath}`);
      return true;
    }

    // Resolve conflicts by accepting feature branch changes (after )
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let acceptChanges = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('')) {
        inConflict = true;
        acceptChanges = false;
        continue;
      }
      
      if (line.includes('')) {
        acceptChanges = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        acceptChanges = false;
        continue;
      }
      
      if (inConflict && !acceptChanges) {
        // Skip lines from HEAD
        continue;
      }
      
      if (inConflict && acceptChanges) {
        // Accept lines from feature branch
        resolvedLines.push(line);
        continue;
      }
      
      // Normal lines outside conflicts
      resolvedLines.push(line);
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts "in": ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts for all files
let resolvedCount = 0;
let failedCount = 0;

for (const file of conflictedFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    failedCount++;
  }
}

console.log("\n📊 Resolution "Summary": ");
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Failed to "resolve": ${failedCount} files`);

if (resolvedCount > 0) {
  console.log('\n🔄 Adding resolved files to git...');
  try {
    execSync('git add .', { "stdio": 'inherit' });
    console.log('✅ Files added to git successfully');
  } catch (error) {
    console.error('❌ Error adding files to "git": ', error.message);
  }
}

console.log('\n🎉 Merge conflict resolution completed!');