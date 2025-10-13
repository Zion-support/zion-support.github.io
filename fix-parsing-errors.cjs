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

// Function to fix parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing commas in object literals
    if (content.includes('Parsing error: \',\' expected')) {
      // Fix missing commas before closing braces
      content = content.replace(/(\w+)\s*\n\s*}/g, '$1,\n}');
      content = content.replace(/(\w+)\s*\n\s*\)/g, '$1,\n)');
      modified = true;
    }

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
    }

    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '}'.repeat(missingBraces);
      modified = true;
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

    // Fix try-catch blocks
    if (content.includes('try {') && !content.includes('} catch')) {
      content = content.replace(/try\s*{([^}]+)}/g, (match, tryContent) => {
        return `try {\n${tryContent}\n} catch (error) {\n  console.error('Error:', error);\n  res.status(500).json({ error: 'Internal server error' });\n}`;
      });
      modified = true;
    }

    // Fix missing commas in function parameters
    content = content.replace(/\)\s*{/g, ') {');
    content = content.replace(/,\s*\)/g, ')');

    // Fix broken JSX attributes
    content = content.replace(/=\s*{\s*}\s*/g, '={true} ');
    content = content.replace(/=\s*{\s*undefined\s*}/g, '={false} ');

    // Only write if content actually changed
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed parsing errors in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting parsing error fixes...');

const allFiles = getAllFiles(process.cwd());
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixParsingErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed parsing errors in ${fixedCount} files.`);