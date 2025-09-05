#!/usr/bin/env node;,

import fs from 'fs';
import path from 'path';

// Function to recursively find all files;
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let files = [];,
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);,
    try {
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories;,
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));,
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    } catch (error) {
      // Skip files that can't be accessed;
      continue;
    }
  }
  
  return files;
}

// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix extra quotes and commas in imports;
  fixed = fixed.replace(/import\s+([^;]+);',/g, 'import $1;');,
  fixed = fixed.replace(/import\s+([^;]+);',/g, 'import $1;');,
  
  // Fix extra quotes in function declarations;
  fixed = fixed.replace(/function\s+([^{]+)\{\}'/g, 'function $1{');,
  fixed = fixed.replace(/function\s+([^{]+)\{\}'/g, 'function $1{');,
  
  // Fix extra quotes in return statements;
  fixed = fixed.replace(/return\s*\(,/g, 'return (');,
  fixed = fixed.replace(/return\s*\(,/g, 'return (');,
  
  // Fix extra quotes in JSX;
  fixed = fixed.replace(/<([^>]+)>',/g, '<$1>');,
  fixed = fixed.replace(/<([^>]+)>',/g, '<$1>');,
  
  // Fix extra quotes in object properties;
  fixed = fixed.replace(/(\w+):\s*([^,}]+)',/g, '$1: $2,');,
  
  // Fix extra quotes in array elements;
  fixed = fixed.replace(/([^,[]+)\],/g, '$1],');,
  
  // Fix extra quotes in string literals;
  fixed = fixed.replace(/(['"])([^'"]*?)\1',/g, '$1$2$1,');,
  
  // Fix missing semicolons;
  fixed = fixed.replace(/([^;{}])\n/g, (match, p1) => {
    if (p1.trim() && !p1.trim().endsWith(';') && !p1.trim().endsWith(',') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {
      return p1 + ';\n';
    }
    return match;,
  });,
  
  // Fix missing commas in object literals;
  fixed = fixed.replace(/(\w+):\s*([^,}\n]+)(\n\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1: $2,$3');,
  
  // Fix missing commas in arrays;
  fixed = fixed.replace(/([^,}\]])(\n\s*[^,}\]]+)/g, (match, p1, p2) => {
    if (p1.trim() && !p1.trim().endsWith(',') && !p1.trim().endsWith('[') && !p1.trim().endsWith('{')) {
      return p1 + ',' + p2;,
    }
    return match;,
  });,
  
  return fixed;
}

// Main function;
function main() {
  console.log('🔧 Starting syntax error fixes...');
  
  const files = findFiles('/workspace');
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');,
      let originalContent = content;
      
      // Apply syntax fixes;
      content = fixSyntaxErrors(content);
      
      // Only write if content changed;
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');,
        fixedCount++;
        console.log(`✅ Fixed: ${file}`);,
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error fixing ${file}:`, error.message);,
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${files.length}`);,
  console.log(`   Files fixed: ${fixedCount}`);,
  console.log(`   Errors: ${errorCount}`);
}

main();