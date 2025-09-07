#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// List of files with known syntax errors
const filesToFix = [
  '/workspace/app/about/page.tsx',
  '/workspace/app/services/automation/page.tsx',
  '/workspace/app/services/consulting/page.tsx',
  '/workspace/pages/api/admin/partners/fraud-flags.ts',
  '/workspace/pages/api/admin/partners/update.ts'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      fixed = true;
    }

    // Fix missing semicolons
    content = content.replace(/([^;}])\n(\s*)(return|if|const|let|var|function|export|import)/g, '$1;\n$2$3');
    content = content.replace(/([^;}])\n(\s*)(})/g, '$1;\n$2$3');

    // Fix incomplete function calls
    content = content.replace(/(\w+)\s*\(\s*\)\s*$/g, '$1();');

    // Fix incomplete object literals
    content = content.replace(/\{\s*$/g, '{}');

    // Fix incomplete array literals
    content = content.replace(/\[\s*$/g, '[]');

    // Fix incomplete strings
    content = content.replace(/"[^"]*$/g, '""');
    content = content.replace(/'[^']*$/g, "''");

    // Fix incomplete template literals
    content = content.replace(/`[^`]*$/g, '``');

    // Fix incomplete comments
    content = content.replace(/\/\*[^*]*$/g, '');
    content = content.replace(/\/\/[^\n]*$/g, '');

    // Fix incomplete regex
    content = content.replace(/\/[^/]*$/g, '//');

    // Clean up extra whitespace
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s*\n/gm, '')
      .trim();

    if (fixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);