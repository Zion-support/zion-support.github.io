#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔄 Resolving merge conflicts automatically...');

try {
  // Get list of conflicted files
  const conflictedFiles = execSync('git status --porcelain | grep "^UU"', { encoding: 'utf8' })
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.substring(3).trim());

  console.log(`Found ${conflictedFiles.length} conflicted files`);

  let resolved = 0;
  let failed = 0;

  conflictedFiles.forEach(file => {
    try {
      console.log(`Resolving ${file}...`);
      
      // Accept our version (the changes from our branch)
      execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
      execSync(`git add "${file}"`, { stdio: 'pipe' });
      
      resolved++;
      console.log(`✅ Resolved ${file}`);
    } catch (error) {
      console.log(`❌ Failed to resolve ${file}: ${error.message}`);
      failed++;
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`✅ Resolved: ${resolved}`);
  console.log(`❌ Failed: ${failed}`);

  if (failed === 0) {
    console.log('\n🎉 All conflicts resolved! Committing merge...');
    execSync('git commit -m "Merge branch with comprehensive automation improvements"', { stdio: 'inherit' });
    console.log('✅ Merge completed successfully!');
  } else {
    console.log('\n⚠️ Some conflicts could not be resolved automatically.');
  }

} catch (error) {
  console.error('❌ Error resolving conflicts:', error.message);
  process.exit(1);
}