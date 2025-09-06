#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

const filesToFix = [
  '/workspace/pages/api/admin/notes.ts',
  '/workspace/pages/api/admin/partners/fraud-flags.ts',
  '/workspace/pages/api/admin/partners/list.ts',
  '/workspace/pages/api/admin/partners/update.ts',
  '/workspace/pages/api/admin/pitch/add-slide.ts'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove extra closing braces after imports
    content = content.replace(/^import[^}]*\}\n\}/gm, (match) => {
      return match.replace(/\n\}$/, '');
    });
    
    // Remove extra closing braces at the beginning of files
    content = content.replace(/^import[^}]*\}\n\}/gm, (match) => {
      return match.replace(/\n\}$/, '');
    });
    
    // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);