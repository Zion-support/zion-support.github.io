#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Resolving all merge conflicts...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`Resolving conflicts in: ${filePath}`);

    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }

      if (line.includes('')) {
        conflictType = 'separator';
        continue;
      }

      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }

      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (our changes)
        resolvedLines.push(line);
      }
      // Skip the other branch content
    }

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('git status --porcelain', { encoding: 'utf8' });
    const files = result.split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
    
    return files;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Main execution
try {
  const conflictedFiles = findFilesWithConflicts();
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

  // Add all resolved files
  if (resolvedCount > 0) {
    console.log('Adding resolved files to git...');
    execSync('git add .', { stdio: 'inherit' });
    
    console.log('Committing merge resolution...');
    execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
  }

  console.log('✅ All merge conflicts resolved and committed');

} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}