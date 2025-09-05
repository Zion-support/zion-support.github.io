#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Final Comprehensive Fix');
console.log('==========================');

// Function to fix all remaining syntax errors
function fixAllSyntax(content) {
  return content
    // Fix malformed JSX tags
    .replace(/<h2[^>]*>([^<]+)><\/h2>/gm, '<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">$1</h2>')
    .replace(/<p[^>]*>([^<]+)><\/p>/gm, '<p className="text-lg text-gray-600 max-w-3xl mx-auto">$1</p>')
    .replace(/<h1[^>]*>([^<]+)><\/h1>/gm, '<h1 className="text-4xl md:text-6xl font-bold mb-6">$1</h1>')
    .replace(/<h3[^>]*>([^<]+)><\/h3>/gm, '<h3 className="text-2xl font-bold text-gray-900 mb-4">$1</h3>')
    .replace(/<span[^>]*>([^<]+)><\/span>/gm, '<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">$1</span>')
    .replace(/<div[^>]*>([^<]+)><\/div>/gm, '<div className="container mx-auto px-4">$1</div>')
    .replace(/<motion\.div[^>]*>([^<]+)><\/motion\.div>/gm, '<motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>$1</motion.div>')
    
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
    
    content = fixAllSyntax(content);
    
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
console.log('🎉 Final comprehensive fix completed!');