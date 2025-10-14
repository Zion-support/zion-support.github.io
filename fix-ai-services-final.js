#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/pages/AIServicesPage.tsx';

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix extra semicolons in object properties
  content = content.replace(/(['"]\s*),(\s*['"])/g, '$1,$2');
  
  // Fix extra semicolons at end of lines
  content = content.replace(/;(\s*)$/gm, '$1');
  
  // Fix missing closing brackets
  content = content.replace(/(\s+)\n(\s*)(const|function|return)/g, '$1\n  ];\n\n$2$3');
  
  // Fix malformed JSX tags
  content = content.replace(/<\$3/g, '<div');
  
  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed AIServicesPage.tsx');
} catch (error) {
  console.error('Error fixing AIServicesPage.tsx:', error.message);
}