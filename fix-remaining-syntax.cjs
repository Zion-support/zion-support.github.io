#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process certain file types
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate Router imports
    if (content.includes("import { Router }")) {
      const lines = content.split('\n');
      const routerLines = lines.filter(line => line.includes("import { Router }"));
      if (routerLines.length > 1) {
        const cleanedLines = lines.filter((line, index) => {
          if (line.includes("import { Router }")) {
            return index === lines.findIndex(l => l.includes("import { Router }"));
          }
          return true;
        });
        const cleanedContent = cleanedLines.join('\n');
        if (cleanedContent !== content) {
          content = cleanedContent;
          modified = true;
          console.log(`✓ Fixed duplicate Router import in: ${filePath}`);
        }
      }
    }

    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*\n\s*}/g, '$1,\n}');
    content = content.replace(/(\w+)\s*\n\s*\)/g, '$1,\n)');

    // Fix missing semicolons
    content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
    content = content.replace(/([^;}])\n\s*\)/g, '$1;\n)');

    // Fix broken function calls
    content = content.replace(/\(\s*\)\s*{/g, '() {');
    content = content.replace(/,\s*\)/g, ')');

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
      console.log(`✓ Added ${missingParens} missing closing parentheses in: ${filePath}`);
    }

    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '}'.repeat(missingBraces);
      modified = true;
      console.log(`✓ Added ${missingBraces} missing closing braces in: ${filePath}`);
    }

    // Fix broken JSX
    content = content.replace(/<(\w+)\s*>\s*<\/\1>/g, '<$1></$1>');
    content = content.replace(/<(\w+)\s*\/>/g, '<$1 />');

    // Fix broken imports
    content = content.replace(/import\s*{\s*}\s*from/g, 'import {} from');
    content = content.replace(/import\s*{\s*,\s*}/g, 'import {}');

    // Fix broken exports
    content = content.replace(/export\s*{\s*}/g, 'export {}');

    // Fix broken function declarations
    content = content.replace(/function\s*\(\s*\)\s*{/g, 'function() {');
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');

    // Fix broken object properties
    content = content.replace(/(\w+):\s*{\s*}/g, '$1: {}');
    content = content.replace(/(\w+):\s*\[\s*]/g, '$1: []');

    // Only write if content actually changed
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting remaining syntax error fixes...');

const allFiles = getAllFiles(process.cwd());
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed syntax errors in ${fixedCount} files.`);