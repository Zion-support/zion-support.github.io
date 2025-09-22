const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing ESLint syntax errors...');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax errors that break ESLint
content = content.replace(/
    content = content.replace(/

    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');

    // Fix missing semicolons in exports
    content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');

    // Fix TypeScript interface syntax
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}/g, 'interface $1 {}');
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }

    // Fix specific syntax errors
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/\{\s*;\s*\}/g, '{}');
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/;\s*,/g, ';');

    if (content !== originalContent) {
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

// Fix specific problematic files
const problematicFiles = [
  '/workspace/types/index.ts',
  '/workspace/types/global.d.ts',
  '/workspace/types/react.d.ts',
  '/workspace/utils/types/enterprise.ts',
  '/workspace/utils/types/milestones.ts',
  '/workspace/utils/types/zion.ts'
];

let fixedCount = 0;
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`🎉 Fixed ${fixedCount} problematic files`);