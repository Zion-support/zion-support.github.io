#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing Accessibility Page');
console.log('============================');

let content = fs.readFileSync('pages/accessibility.tsx', 'utf8');

// Fix all the syntax errors
content = content
  // Fix malformed JSX tags
  .replace(/<\/motion>"/g, '</motion.div>')
  .replace(/<h2><\/h2>"/g, '<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Accessibility Features</h2>')
  .replace(/<p">><\/p>/g, '<p className="text-lg text-gray-600 max-w-3xl mx-auto">We implement comprehensive accessibility features to ensure our platform is usable by everyone.</p>')
  .replace(/<div><\/div>/g, '')
  .replace(/<\/motion>"/g, '</motion.div>')
  .replace(/<motion\.div;"/g, '<motion.div')
  .replace(/;\s*$/gm, '')
  .replace(/;\s*}/g, '}')
  .replace(/;\s*]/g, ']')
  .replace(/;\s*\)/g, ')')
  .replace(/;;+/g, ';')
  .replace(/;\s*;/g, ';')
  .replace(/\n\s*\n\s*\n/g, '\n\n')
  .replace(/\s+$/gm, '');

fs.writeFileSync('pages/accessibility.tsx', content);
console.log('✅ Fixed accessibility.tsx');
console.log('🎉 Accessibility fix completed!');