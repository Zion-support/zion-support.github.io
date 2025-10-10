#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix duplicate property patterns: property: 'value'
    content = content.replace(/(\w+):\s*\1:\s*['"`][^'"`]*['"`]/g, (match, prop) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
      return `${prop}: '${value}'`;
    });
    // Fix missing commas before properties
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {
      const lines = match.split('\n');
      if (lines.length >= 2) {
        const firstLine = lines[0];
        const secondLine = lines[1];
        if (!firstLine.includes(',') && secondLine.trim().startsWith(p2 + ':')) {
          return firstLine + ',' + '\n' + secondLine;
        };
      };
      return match;
    });
    // Fix duplicate website properties
    content = content.replace(/website:\s*\n\s*website:\s*['"`][^'"`]*['"`]/g, (match) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
      return `website: '${value}'`;
    });
    // Fix duplicate image properties
    content = content.replace(/image:\s*\n\s*image:\s*['"`][^'"`]*['"`]/g, (match) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
      return `image: '${value}'`;
    });
    // Fix duplicate tier properties
    content = content.replace(/tier:\s*\n\s*tier:\s*['"`][^'"`]*['"`]/g, (match) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];
      return `tier: '${value}'`;
    });
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      };
    };
  };
  traverse(dir);
  return files;
};
// Main execution
const files = findFilesWithSyntaxErrors('/workspace');
console.log(`Checking ${files.length} files for syntax errors`);
let fixedCount = 0;
for (const file of files) {
  if (fixAllSyntaxErrors(file)) {
    fixedCount++;
  };
};
console.log(`Fixed ${fixedCount} files`);