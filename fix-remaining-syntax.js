#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix type declarations
    content = content.replace(/type\s+(\w+)\s*=\s*{;/g, 'type $1 = {');
    
    // Fix function parameters
    content = content.replace(/\(\s*([^)]+);\s*([^)]+)\s*\)/g, '($1, $2)');
    
    // Fix remaining merge conflict markers
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    content = content.replace(/=======;/g, '');
    
    // Fix semicolons in wrong places
    content = content.replace(/;\s*{/g, ' {');
    content = content.replace(/;\s*}/g, ' }');
    content = content.replace(/;\s*\)/g, ' )');
    
    // Fix function declarations
    content = content.replace(/export default async function\s+(\w+)\s*\([^)]*\)\s*{;/g, 'export default async function $1($2) {');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to fix: ${filePath} - ${error.message}`);
    return false;
  }
};

const main = () => {
  const files = [
    'pages/api/admin/analytics/summary.ts',
    'pages/api/admin/moderation/flags/[id]/action.ts',
    'pages/api/admin/moderation/flags/index.ts',
    'pages/api/admin/notes.ts',
    'pages/api/admin/partners/list.ts'
  ];
  
  let fixed = 0;
  files.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixFile(file)) {
        fixed++;
      }
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed}/${files.length} files`);
};

main();