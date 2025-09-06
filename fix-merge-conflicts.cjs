#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing merge conflict markers...');

// Find all files with merge conflict markers
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r "" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.cjs" --include="*.mjs" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
};

const conflictFiles = findConflictFiles();
console.log(`📋 Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;

for (const filePath of conflictFiles) {
  try {
    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files with merge conflicts!`);