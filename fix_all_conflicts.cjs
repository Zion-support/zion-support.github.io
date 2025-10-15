#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return;
    }

    console.log(`Fixing conflicts in ${filePath}...`);

    // For most files, we'll accept the main branch version (HEAD)
    let resolvedContent = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '');

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✓ Fixed conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing conflicts in ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🔧 Starting comprehensive merge conflict resolution...');

  // Get all files with conflicts
  const conflictedFiles = execSync('find ./app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD\\|=======\\|>>>>>>>" 2>/dev/null || true', { encoding: 'utf8' })
    .split('\n')
    .filter(file => file.trim() && !file.includes('node_modules'));

  console.log(`Found ${conflictedFiles.length} files with conflicts`);

  // Fix each file
  conflictedFiles.forEach(fixMergeConflicts);

  console.log('✅ All merge conflicts resolved!');
}

main();