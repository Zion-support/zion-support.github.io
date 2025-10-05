#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function getConflictedFiles() {
  try {
    const output = execSync('git status --porcelain', { encoding: 'utf8' });
    return output
      .split('\n')
      .filter(line => line.startsWith('UU') || line.startsWith('AA') || line.startsWith('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
  } catch (error) {
    console.error('Error getting conflicted files:', error.message);
    return [];
  }
}

function resolveConflicts(files) {
  let resolved = 0;
  let failed = 0;

  for (const file of files) {
    try {
      if (!fs.existsSync(file)) {
        console.log(`Skipping non-existent file: ${file}`);
        continue;
      }
      
      // For modify/delete conflicts, remove the file
      if (file.includes('fix-imports.cjs')) {
        execSync(`git rm "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Removed: ${file}`);
      } else {
        // For content conflicts, choose the remote version
        execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved: ${file}`);
      }
      resolved++;
    } catch (error) {
      console.error(`❌ Failed to resolve ${file}:`, error.message);
      failed++;
    }
  }
  return { resolved, failed };
}

function main() {
  console.log('🔍 Checking for merge conflicts...');
  const conflictedFiles = getConflictedFiles();
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found');
    return;
  }
  
  console.log(`📋 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving conflicts by choosing remote version...');
  const result = resolveConflicts(conflictedFiles);
  
  console.log(`\n📊 Resolution Summary:`);
  console.log(`  ✅ Resolved: ${result.resolved}`);
  console.log(`  ❌ Failed: ${result.failed}`);
  
  if (result.failed === 0) {
    console.log('\n🎉 All conflicts resolved successfully!');
  } else {
    console.log('\n⚠️  Some conflicts could not be resolved automatically');
  }
}

if (require.main === module) {
  main();
}

module.exports = { getConflictedFiles, resolveConflicts };