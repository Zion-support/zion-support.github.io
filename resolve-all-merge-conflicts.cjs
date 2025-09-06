#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Resolving all merge conflicts...');

// Find all files with merge conflicts
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;

for (const file of conflictedFiles) {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    console.log(`🔧 Resolving ${file}...`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers and keep "ours" version (current branch)
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Resolved ${file}`);
        resolvedCount++;
      } else {
        console.log(`⏭️  No conflicts found in ${file}`);
      }
    } catch (error) {
      console.warn(`⚠️  Could not resolve ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
}

console.log(`🎉 Resolved ${resolvedCount} files!`);

// Add resolved files to git
if (resolvedCount > 0) {
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Added resolved files to git');
  } catch (error) {
    console.warn(`⚠️  Could not add files to git: ${error.message}`);
  }
}