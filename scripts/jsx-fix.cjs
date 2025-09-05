#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 JSX Fix');
console.log('==========');

// Function to fix JSX syntax errors
function fixJSX(content) {
  return content
    // Fix malformed closing tags
    .replace(/>\s*$/gm, '>')
    .replace(/\s*>\s*$/gm, '>')
    .replace(/\s*>\s*$/gm, '>')
    
    // Fix specific patterns
    .replace(/<title>([^<]+)>\s*$/gm, '<title>$1</title>')
    .replace(/<meta[^>]+>\s*$/gm, (match) => match.replace(/>\s*$/, ' />'))
    .replace(/<Head>\s*$/gm, '<Head>')
    .replace(/<\/Head>\s*$/gm, '</Head>')
    
    // Fix span closing tags
    .replace(/<span[^>]*>([^<]+)>\s*$/gm, '<span$1></span>')
    
    // Fix div closing tags
    .replace(/<div[^>]*>([^<]+)>\s*$/gm, '<div$1></div>')
    
    // Fix motion.div closing tags
    .replace(/<motion\.div[^>]*>([^<]+)>\s*$/gm, '<motion.div$1></motion.div>')
    
    // Fix section closing tags
    .replace(/<section[^>]*>([^<]+)>\s*$/gm, '<section$1></section>')
    
    // Fix p closing tags
    .replace(/<p[^>]*>([^<]+)>\s*$/gm, '<p$1></p>')
    
    // Fix h1 closing tags
    .replace(/<h1[^>]*>([^<]+)>\s*$/gm, '<h1$1></h1>')
    
    // Fix h2 closing tags
    .replace(/<h2[^>]*>([^<]+)>\s*$/gm, '<h2$1></h2>')
    
    // Fix h3 closing tags
    .replace(/<h3[^>]*>([^<]+)>\s*$/gm, '<h3$1></h3>')
    
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
    
    content = fixJSX(content);
    
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
console.log('🎉 JSX fix completed!');