#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix import statements with extra commas
  content = content.replace(/import\s*{\s*([^}]+),\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
    const cleanImports = imports.replace(/,\s*,/g, ',').replace(/,\s*$/g, '').trim();
    return `import { ${cleanImports} } from "${module}";`;
  });

  // Fix interface properties with extra commas
  content = content.replace(/(\w+):\s*([^;]+);,/g, '$1: $2;');

  // Fix JSX attributes with extra commas
  content = content.replace(/<(\w+),/g, '<$1');
  content = content.replace(/(\w+),\s*(\w+)=/g, '$1 $2=');
  content = content.replace(/(\w+),\s*>/g, '$1>');

  // Fix function parameters with extra commas
  content = content.replace(/\(\s*([^)]+),\s*\)/g, '($1)');

  // Fix array/object destructuring with extra commas
  content = content.replace(/{\s*([^}]+),\s*}/g, '{$1}');
  content = content.replace(/\[\s*([^\]]+),\s*\]/g, '[$1]');

  // Fix missing semicolons
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix React fragments
  content = content.replace(/<>\s*$/gm, '<>');
  content = content.replace(/^\s*<\/>/gm, '</>');

  // Fix missing closing braces for interfaces
  content = content.replace(/interface\s+\w+\s*{([^}]+)$/gm, (match, body) => {
    if (!body.includes('}')) {
      return match + '}';
    }
    return match;
  });

  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`),
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Starting comprehensive syntax error fix...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`📁 Found ${totalFiles} files to process...`);

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed ${fixedCount} out of ${totalFiles} files`);
console.log('🎉 Syntax error fix completed!');