#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving merge conflicts automatically...');

// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Function to resolve conflicts by choosing the incoming version (feature branch)
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File ${filePath} does not exist, skipping...`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in ${filePath}`);
      return;
    }

    console.log(`🔧 Resolving conflicts in ${filePath}...`);

    // Split content by conflict markers and take the incoming version (after =======)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'HEAD';
        continue;
      }
      
      if (line.includes('=======')) {
        conflictType = 'incoming';
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict || conflictType === 'incoming') {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
  }
}

// Resolve conflicts for each file
conflictedFiles.forEach(resolveConflicts);

console.log('🎉 Merge conflict resolution completed!');

// Add resolved files to git
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added resolved files to git');
} catch (error) {
  console.error('❌ Error adding files to git:', error.message);
}