#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting syntax error fixes...');

// Fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix trailing commas in object properties
  content = content.replace(/,(\s*[}\]])/g, '$1');

  // Fix semicolons after commas
  content = content.replace(/,;/g, ',');

  // Fix double commas
  content = content.replace(/,+/g, ',');

  // Fix malformed import statements
  content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');

  // Fix object property syntax
  content = content.replace(/"([^"]+)":\s*([^,}]+),;/g, '"$1": $2,');

  // Fix array syntax
  content = content.replace(/\[([^\]]+),\]/g, '[$1]');

  // Fix function parameters
  content = content.replace(/\(\s*([^)]+),\s*\)/g, '($1)');

  return content;
}

// Process files
const filesToFix = [
  'vite.config.ts',
  'components/Header.tsx',
  'components/OptimizedImage.tsx',
  'components/Sidebar.tsx',
  'components/SimpleLayout.tsx',
  'components/SkeletonLoader.tsx',
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      content = fixSyntaxErrors(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed: ${file}`);
      } else {
        console.log(`ℹ️ No changes needed: ${file}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚠️ File not found: ${file}`);
  }
});

console.log('🎉 Syntax fixes completed!');
