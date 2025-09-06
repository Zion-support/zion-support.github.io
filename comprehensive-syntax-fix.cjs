#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax fixes...');

// Get all TypeScript and JavaScript files;
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Advanced syntax fixes;
function fixAdvancedSyntax(content, filePath) {
  let fixed = content;
  
  // Fix import statements;
  fixed = fixed.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
  fixed = fixed.replace(/import\s+([^,]+),\s*import/gm, 'import $1;\nimport');
  
  // Fix object syntax;
  fixed = fixed.replace(/"([^"]+)":\s*([^,}]+);/g, '"$1":$2,');
  fixed = fixed.replace(/(\w+):\s*([^,}]+);/g, '$1:$2,');
  
  // Fix array syntax;
  fixed = fixed.replace(/\[([^\]]+),\]/g, '[$1]');
  
  // Fix function parameters;
  fixed = fixed.replace(/\(\s*([^)]+),\s*\)/g, '($1)');
  
  // Fix trailing commas in objects and arrays;
  fixed = fixed.replace(/,(\s*[}\]])/g, '$1');
  
  // Fix semicolons after commas;
  fixed = fixed.replace(/;/g, ',');
  
  // Fix double commas;
  fixed = fixed.replace(/,+/g, ',');
  
  // Fix malformed JSX;
  fixed = fixed.replace(/<(\w+)([^>]*),>/g, '<$1$2>');
  
  // Fix string concatenation;
  fixed = fixed.replace(/'([^']+)',\s*'([^']+)'/g, "'$1$2'");
  
  return fixed;
}

// Process files;
const files = getAllFiles(__dirname);
let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixAdvancedSyntax(content, file);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed);
      console.log(`✅ Fixed:${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${path.relative(__dirname, file)} ${error.message}`);
    errorCount++;
  }
});

console.log(`\n🎉 Comprehensive syntax fixes completed!`);
console.log(`📊 Fixed:${fixedCount} files`);
console.log(`❌ Errors:${errorCount} files`);

// Try to run lint fix;
try {
  console.log('\n🔧 Running ESLint fix...');
  execSync('npm run lint:fix', { stdio:'inherit' });
  console.log('✅ ESLint fix completed');
} catch (error) {
  console.log('⚠️ ESLint fix failed, continuing...');
}
console.log('🔧 Starting comprehensive syntax fixes...');

console.log(`🎉 Fixed ${fixedCount} files with syntax errors!`);
