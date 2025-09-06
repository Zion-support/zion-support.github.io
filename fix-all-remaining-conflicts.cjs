#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing all remaining merge conflicts...');

// Find all files with merge conflicts
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;

for (const file of conflictedFiles) {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    console.log(`🔧 Fixing ${file}...`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers and keep "ours" version
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${file}`);
        fixedCount++;
      } else {
        console.log(`⏭️  No conflicts found in ${file}`);
      }
    } catch (error) {
      console.warn(`⚠️  Could not fix ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files!`);