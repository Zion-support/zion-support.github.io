#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving all merge conflicts by accepting our cleaned-up version...');

try {
  // Get list of all conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  console.log(`Found ${conflictedFiles.length} conflicted files`);

  // Strategy: Accept our version (HEAD) for most files since we cleaned up the codebase
  for (const file of conflictedFiles) {
    try {
      console.log(`Resolving conflict for: ${file}`);
      
      // Check if file exists in our version
      if (fs.existsSync(file)) {
        // Use our version (HEAD)
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Accepted our version for: ${file}`);
      } else {
        // File was deleted in our version, remove it
        execSync(`git rm "${file}"`, { stdio: 'pipe' });
        console.log(`🗑️ Removed deleted file: ${file}`);
      }
      
      // Add the resolved file
      execSync(`git add "${file}"`, { stdio: 'pipe' });
      
    } catch (error) {
      console.log(`⚠️ Could not resolve ${file}: ${error.message}`);
    }
  }

  // Handle special cases for key files
  const keyFiles = [
    'package.json',
    'next.config.js',
    'tsconfig.json',
    'pages/_app.js',
    'pages/index.js',
    'styles/globals.css'
  ];

  for (const file of keyFiles) {
    if (fs.existsSync(file)) {
      try {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved key file: ${file}`);
      } catch (error) {
        console.log(`⚠️ Could not resolve key file ${file}: ${error.message}`);
      }
    }
  }

  // Commit the merge
  console.log('📝 Committing merge resolution...');
  execSync('git commit -m "Resolve merge conflicts: accept cleaned-up version with syntax fixes"', { stdio: 'inherit' });
  
  console.log('✅ All merge conflicts resolved and committed!');
  
} catch (error) {
  console.error('❌ Error resolving conflicts:', error.message);
  process.exit(1);
}