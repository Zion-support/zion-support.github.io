#!/usr/bin/env node
;
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers;
    const conflictPatterns = [
      /
      /
    ];

    conflictPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        modified = true;
      }
    });

    // Fix common JSX syntax issues;
    content = content;
      // Fix unclosed JSX tags;
      .replace(/<(\w+)([^>]*?)(?<!\s)\s*$/gm, '<$1$2>')
      // Fix malformed JSX attributes;
      .replace(/(\w+)\s*=\s*"([^"]*?)"\s*$/gm, '$1="$2"')
      // Fix missing closing tags;
      .replace(/<(\w+)([^>]*?)>\s*$/gm, '<$1$2></$1>')
      // Remove empty lines with only whitespace;
      .replace(/^\s*$/gm, '')
      // Fix multiple consecutive empty lines;
      .replace(/\n\s*\n\s*\n/g, '\n\n');

    // Fix specific syntax issues;
    content = content;
      // Fix missing semicolons after JSX;
      .replace(/(\w+)\s*$/gm, (match, p1) => {
        if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('<') && !match.includes('>')) {
          return match + ';';
        }
        return match;
      })
      // Fix malformed object literals;
      .replace(/\{\s*$/gm, '{')
      .replace(/,\s*$/gm, ',');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files;
function findTsxFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution;
console.log('Starting merge conflict resolution...');

const files = findTsxFiles('/workspace');
let fixedCount = 0;

files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Run lint fix after resolving conflicts;
console.log('Running ESLint fix...');
try {
  execSync('pnpm run lint:fix', { stdio: 'inherit' });
  console.log('ESLint fix completed');
} catch (error) {
  console.log('ESLint fix had some issues, but continuing...');
}

console.log('Merge conflict resolution completed!');