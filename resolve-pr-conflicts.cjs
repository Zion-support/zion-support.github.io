#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🔧 Resolving PR merge conflicts automatically...');
// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);
console.log(`Found ${conflictedFiles.length} conflicted files`);
// Resolve conflicts by accepting our changes (HEAD)
for (const file of conflictedFiles) {
  try {
    console.log(`Resolving conflicts in: ${file}`);
    // Check if file exists
    if (!fs.existsSync(file)) {
      console.log(`  ⚠️  File ${file} doesn't exist, skipping...`);
      continue;
    }
    // Read the file content
    let content = fs.readFileSync(file, 'utf8');
    // Remove conflict markers and keep our changes (HEAD)
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)
    // Write the resolved content
    fs.writeFileSync(file, content);
    console.log(`  ✅ Resolved: ${file}`);
  } catch (error) {
    console.log(`  ❌ Error resolving ${file}: ${error.message}`);
  }
}
// Add all resolved files
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ All conflicts resolved and staged');
} catch (error) {
  console.log('❌ Error staging files:', error.message);
}
console.log('🎉 PR conflict resolution complete!');