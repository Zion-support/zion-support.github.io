#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Precise JSX Fix');
console.log('==================');

// Function to fix JSX syntax errors precisely
function fixJSXPrecise(content) {
  return content
    // Fix malformed closing tags - remove extra > characters
    .replace(/>\s*>\s*$/gm, '>')
    .replace(/>\s*>\s*>/gm, '>')
    .replace(/>\s*>\s*>\s*>/gm, '>')
    
    // Fix specific malformed patterns
    .replace(/<title>([^<]+)><\/title>/gm, '<title>$1</title>')
    .replace(/<meta[^>]+>\s*>/gm, (match) => match.replace(/>\s*$/, ' />'))
    .replace(/<Head>\s*$/gm, '<Head>')
    .replace(/<\/Head>\s*$/gm, '</Head>')
    
    // Fix span tags
    .replace(/<span[^>]*>([^<]+)><\/span>/gm, '<span$1></span>')
    .replace(/<span[^>]*>([^<]+)><\/span>/gm, '<span$1></span>')
    
    // Fix div tags
    .replace(/<div[^>]*>([^<]+)><\/div>/gm, '<div$1></div>')
    
    // Fix motion.div tags
    .replace(/<motion\.div[^>]*>([^<]+)><\/motion\.div>/gm, '<motion.div$1></motion.div>')
    
    // Fix section tags
    .replace(/<section[^>]*>([^<]+)><\/section>/gm, '<section$1></section>')
    
    // Fix p tags
    .replace(/<p[^>]*>([^<]+)><\/p>/gm, '<p$1></p>')
    
    // Fix h1 tags
    .replace(/<h1[^>]*>([^<]+)><\/h1>/gm, '<h1$1></h1>')
    
    // Fix h2 tags
    .replace(/<h2[^>]*>([^<]+)><\/h2>/gm, '<h2$1></h2>')
    
    // Fix h3 tags
    .replace(/<h3[^>]*>([^<]+)><\/h3>/gm, '<h3$1></h3>')
    
    // Fix specific malformed patterns
    .replace(/<title>([^<]+)><\/title>/gm, '<title>$1</title>')
    .replace(/<meta[^>]+>\s*>/gm, (match) => match.replace(/>\s*$/, ' />'))
    
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

for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fixJSXPrecise(content);
    
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
console.log('🎉 Precise JSX fix completed!');