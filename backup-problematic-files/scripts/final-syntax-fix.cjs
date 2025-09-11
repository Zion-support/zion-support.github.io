#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
console.log('🔧 Final Syntax Fix');=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  return content
    // Fix JSX closing tags
    .replace(/<\$1>/g, '>')
    .replace(/<\/\$1>/g, '>')
    .replace(/<\$1/g, '<')
    .replace(/<\/\$1/g, '</')
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}
// Files to fix
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx'
];
let totalFixed = 0;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }
<<<<<<< HEAD
=======
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    content = fixSpecificErrors(content);
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}
console.log(`\n✅ Fixed ${totalFixed} files`);
<<<<<<< HEAD
console.log('🎉 Final syntax fix completed!');
=======
console.log('🎉 Final syntax fix completed!');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
