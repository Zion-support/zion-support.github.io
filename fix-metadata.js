#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/TSX files
function findTsxFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Skip disabled directories and node_modules
          if (
            !file.includes('disabled') &&
            !file.includes('backup') &&
            !file.includes('_conflicted') &&
            !file.includes('node_modules')
          ) {
            findTsxFiles(filePath, fileList);
          }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          fileList.push(filePath);
        }
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        console.log(`Skipping inaccessible file: ${filePath}`);
      }
    });
  } catch (error) {
    console.log(`Skipping inaccessible directory: ${dir}`);
  }

  return fileList;
}

// Function to fix metadata objects in a file
function fixMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed metadata objects
    content = content.replace(
      /export const metadata = \{\/\* content \*\/\}/g,
      'export const metadata = {',
    );
    content = content.replace(
      /openGraph: \{\/\* content \*\/\}/g,
      'openGraph: {',
    );

    // Fix malformed JSX content
    content = content.replace(/<div>\{\/\* content \*\/\}/g, '<div>');
    content = content.replace(
      /return \(\s*<div>\{\/\* content \*\/\}/g,
      'return (\n    <div>',
    );

    // Fix duplicate return statements
    content = content.replace(
      /return \(\s*<div><\/div>\s*<div><\/div>/g,
      'return (\n    <div>\n      <div></div>\n      <div></div>\n    </div>',
    );

    // Fix malformed function returns
    content = content.replace(
      /return \(\s*<div><\/div>\s*\)/g,
      'return (\n    <div></div>\n  )',
    );

    // Fix missing closing braces and parentheses
    const lines = content.split('\n');
    let braceCount = 0;
    let parenCount = 0;
    let inFunction = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('export default function')) {
        inFunction = true;
      }

      if (inFunction) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        parenCount += (line.match(/\(/g) || []).length;
        parenCount -= (line.match(/\)/g) || []).length;
      }
    }

    // Add missing closing elements
    if (braceCount > 0) {
      content += '\n' + '}'.repeat(braceCount);
    }
    if (parenCount > 0) {
      content += ')'.repeat(parenCount);
    }

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed metadata in: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting metadata fixes...');

const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixMetadata(file)) {
    fixedCount++;
  }
});

console.log(
  `\nFixed ${fixedCount} files out of ${tsxFiles.length} TypeScript files.`,
);
