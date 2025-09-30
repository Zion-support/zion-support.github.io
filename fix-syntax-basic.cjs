#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing critical syntax errors...');

const files = [
  'pages/api.tsx',
  'pages/careers.tsx', 
  'pages/case-studies.tsx',
  'pages/help.tsx',
  'pages/press.tsx'
];

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Fix the specific patterns
      fixed = fixed.replace(/}'\`,/g, '}\'`');
      fixed = fixed.replace(/}'\`,\s*description:/g, '}\'`,\n      description:');
      fixed = fixed.replace(/}'\`,\s*author:/g, '}\'`,\n      author:');
      fixed = fixed.replace(/}'\`,\s*category:/g, '}\'`,\n      category:');
      fixed = fixed.replace(/}'\`,\s*answer:/g, '}\'`,\n      answer:');

      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        console.log(`✅ Fixed ${file}`);
        fixedCount++}
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`)}
  }
});

console.log(`✅ Fixed ${fixedCount} files`);