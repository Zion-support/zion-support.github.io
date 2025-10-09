#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove merge conflict markers and keep the HEAD version (first part)
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?.*?>>>>>>> [^\n]+\n?/gs, '');
      modified = true;
    }

    // Fix duplicate imports (e.g., "import { A, B, A, B } from 'module'")
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
      const importList = imports.split(',').map(imp => imp.trim()).filter(imp => imp);
      const uniqueImports = [...new Set(importList)];
      return `import { ${uniqueImports.join(', ')} } from '${module}';`;
    });

    // Fix syntax errors like missing commas in object literals
    content = content.replace(/\{\s*([^}]+)\s*,\s*([^}]+)\s*\}/g, (match, part1, part2) => {
      // Check if there's a missing comma between properties
      if (part1.trim() && part2.trim() && !part1.trim().endsWith(',') && !part2.trim().startsWith(',')) {
        return `{ ${part1.trim()}, ${part2.trim()} }`;
      }
      return match;
    });

    // Fix specific syntax errors like "name: 'Kleber Santos'," -> "name: 'Kleber Santos',"
    content = content.replace(/\{\s*,\s*name:/g, '{ name:');
    content = content.replace(/\{\s*,\s*icon:/g, '{ icon:');
    content = content.replace(/\{\s*,\s*title:/g, '{ title:');

    // Fix trailing commas in object literals
    content = content.replace(/,(\s*})/g, '$1');

    // Fix duplicate property names in objects
    content = content.replace(/(\w+):\s*([^,}]+),\s*\1:\s*([^,}]+)/g, '$1: $2');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles() {
  const patterns = [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.js',
    'src/**/*.jsx',
    'app/**/*.ts',
    'app/**/*.tsx',
    'app/**/*.js',
    'app/**/*.jsx'
  ];

  let files = [];
  patterns.forEach(pattern => {
    files = files.concat(glob.sync(pattern, { cwd: process.cwd() }));
  });

  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const files = findFiles();
let fixedCount = 0;

files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);
console.log('Merge conflict resolution completed!');