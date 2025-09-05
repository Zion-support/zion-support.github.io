#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Quick Syntax Fix...');

const filesToFix = [
  'pages/AIServices.tsx',
  'pages/ITServices.tsx', 
  'pages/MicroSAAS.tsx',
  'pages/_app.tsx',
  'pages/about.tsx'
];

filesToFix.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Fix common syntax errors
      content = content
        .replace(/;''/g, ';')
        .replace(/,''/g, ',')
        .replace(/''/g, '')
        .replace(/{\s*$/gm, '{')
        .replace(/\[\s*$/gm, '[')
        .replace(/\(\s*$/gm, '(')
        .replace(/import\s*{\s*}\s*$/gm, 'import { } from "lucide-react";')
        .replace(/export\s+default\s+function\s+\w+[\s\S]*?}\s*export\s+default\s+function\s+\w+/g, (match) => {
          const parts = match.split('export default function');
          return 'export default function' + parts[1];
        });
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${file}: ${error.message}`);
  }
});

console.log('🎉 Quick syntax fix completed!');