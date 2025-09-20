#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing semicolons in object properties...');

// Function to fix semicolons in object properties
function fixSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix semicolons in object properties (but not in type definitions)
    // This regex looks for property: value; and replaces with property: value,
    content = content.replace(/(\w+):\s*([^,;{}]+);\s*(?=\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1: $2,');
    
    // Fix semicolons in object properties at the end of objects
    content = content.replace(/(\w+):\s*([^,;{}]+);\s*}/g, '$1: $2}');
    
    // Fix semicolons in object properties in setState calls
    content = content.replace(/setState\(\{\s*([^}]+)\s*\}\)/g, (match, objContent) => {
      const fixed = objContent.replace(/(\w+):\s*([^,;{}]+);/g, '$1: $2,');
      return `setState({\n${fixed}\n})`;
    });

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSemicolons(filePath)) {
        console.log(`✅ Fixed semicolons in: ${filePath}`);
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start processing from src directory
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  const fixedCount = processDirectory(srcDir);
  console.log(`\n📊 Semicolon Fix Summary:`);
  console.log(`   🔧 Files fixed: ${fixedCount}`);
  console.log(`\n✅ Semicolon fixes completed!`);
} else {
  console.log('❌ src directory not found');
}