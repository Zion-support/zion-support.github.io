#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Final Syntax Fix');
console.log('==================');


#!/usr/bin/env node
const fs = require('fs');
const path = require('path');


#!/usr/bin/env node


const fs = require('fs');
const path = require('path');
console.log('🔧 Final Syntax Fix');
console.log('==================');



console.log('
// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  return content
    // Fix JSX closing tags
    .replace(/<\$1>/g, '>')
    .replace(/<\/\$1>/g, '>')
    .replace(/<\$1/g, '<')
    .replace(/<\/\$1/g, '</')
    
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    
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
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');

function fixSpecificErrors(content) {
  return content;
    // Fix JSX closing tags;

    .replace(/\s+$/gm, );
}
// Files to fix
// Files to fix;
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
let totalFixed = 0;




for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }

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
console.log('🎉 Final syntax fix completed!');
console.log(`\n✅ Fixed ${totalFixed} files`);


console.log(`\n✅ Fixed ${totalFixed} files`);

console.log('🎉 Final syntax fix completed!');
console.log('🎉 Final syntax fix completed!');

    content = fixSpecificErrors(content);
    if (content !== originalContent) {

console.log(`\n✅ Fixed ${totalFixed} files`);

