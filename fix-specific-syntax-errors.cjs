#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing specific syntax errors...');

const filesToFix = [
  '/workspace/pages/api/admin/analytics/summary.ts',
  '/workspace/pages/api/admin/kyc-queue.ts',
  '/workspace/pages/api/admin/moderation/flags/[id]/action.ts',
  '/workspace/pages/api/admin/moderation/flags/index.ts',
  '/workspace/pages/api/admin/notes-all.ts'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove extra closing braces at the beginning of files
    content = content.replace(/^import[^}]*\}\n\}/gm, (match) => {
      return match.replace(/\n\}$/, '');
    });
    
    // Fix return statements outside functions
    content = content.replace(/(\s+)(return\s+res\.status\([^)]+\)\.json\([^)]+\);\s*)(\s*)(\})/g, '$1$2\n$4');
    
    // Fix missing closing braces for functions
    content = content.replace(/(\s+)(return\s+res\.status\([^)]+\)\.json\([^)]+\);\s*)(\s*)(export|function|const|let|var)/g, '$1$2\n}\n\n$4');
    
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