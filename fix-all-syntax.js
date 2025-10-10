#!/usr/bin/env node;
import fs from 'fs';

import path from 'path';
<<<<<<< HEAD
function fixAllSyntaxErrors(filePath) {}
  try {}
    let content = "fs.readFileSync(filePath, 'utf8');"
    let modified="false;"
    // Fix duplicate property patterns: property: 'value'
    content = content.replace(/(\w+):\s*\1:\s*['"`][^'"`]*['"`]/g, (match, prop) => {}
      const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);;

    let modified = false;;

    // Fix duplicate property patterns: property: value
    content = content.replace(/(\w+):\s*\1:\s*['"`][^'"`]*['"`]/g, (match, prop) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
      return `${prop}: '${value}'`;

    });
<<<<<<< HEAD
    // Fix missing commas before properties;
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {}
      const lines="match.split('\n');"
      if (lines.length >= 2) {}
        const firstLine="lines[0];"
        const secondLine="lines[1];"
        if (!firstLine.includes(',') && secondLine.trim().startsWith(p2 + ':')) {}
          return firstLine + ',' + '\n' + secondLine;
=======

    // Fix missing commas before properties
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {
      const lines = match.split('\n);;

      if (lines.length >= 2) {
        const firstLine = lines[0];;

        const secondLine = lines[1];;

        if (!firstLine.includes(',') && secondLine.trim().startsWith(p2 + ':')) {
          return firstLine + ',' + '\n + secondLine;

>>>>>>> origin/main
        }

      }

      return match;

    });
<<<<<<< HEAD
    // Fix duplicate website properties;
    content = content.replace(/website:\s*\n\s*website:\s*['"`][^'"`]*['"`]/g, (match) => {}
      const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

    // Fix duplicate website properties
    content = content.replace(/website:\s*\n\s*website:\s*['"`][^'"`]*['"`]/g, (match) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
      return `website: '${value}'`;

    });
<<<<<<< HEAD
    // Fix duplicate image properties;
    content = content.replace(/image:\s*\n\s*image:\s*['"`][^'"`]*['"`]/g, (match) => {}
      const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

    // Fix duplicate image properties
    content = content.replace(/image:\s*\n\s*image:\s*['"`][^'"`]*['"`]/g, (match) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
      return `image: '${value}'`;

    });
<<<<<<< HEAD
    // Fix duplicate tier properties;
    content = content.replace(/tier:\s*\n\s*tier:\s*['"`][^'"`]*['"`]/g, (match) => {}
      const value = "match.match(/['"`]([^'"`]*)['"`]/)[1];"
=======

    // Fix duplicate tier properties
    content = content.replace(/tier:\s*\n\s*tier:\s*['"`][^'"`]*['"`]/g, (match) => {
      const value = match.match(/['"`]([^'"`]*)['"`]/)[1];;

>>>>>>> origin/main
      return `tier: '${value}'`;

    });
<<<<<<< HEAD
    if (content !== fs.readFileSync(filePath, 'utf8')) {}
=======

    if (content !== fs.readFileSync(filePath, 'utf8')) {
>>>>>>> origin/main
      fs.writeFileSync(filePath, content);

      console.log(`Fixed syntax errors in: ${filePath}`);

      return true;

    }

    return false;
<<<<<<< HEAD
  } catch (error) {}
=======

  } catch (error) {
>>>>>>> origin/main
    console.error(`Error fixing ${filePath}:`, error.message);

    return false;

  }

}

<<<<<<< HEAD
function findFilesWithSyntaxErrors(dir) {}
  const files="[];"
  function traverse(currentDir) {}
    const items="fs.readdirSync(currentDir);"
    for (const item of items) {}
      const fullPath = "path.join(currentDir, item);"
      const stat="fs.statSync(fullPath);"
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {}
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {}
=======
function findFilesWithSyntaxErrors(dir) {
  const files = [];;

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);;

    for (const item of items) {
      const fullPath = path.join(currentDir, item);;

      const stat = fs.statSync(fullPath);;

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);

      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
>>>>>>> origin/main
        files.push(fullPath);

      }

    }

  }

  traverse(dir);

  return files;

}

<<<<<<< HEAD
// Main execution;
const files = "findFilesWithSyntaxErrors('/workspace');"
console.log(`Checking ${files.length} files for syntax errors`);
let fixedCount="0;"
for (const file of files) {}
  if (fixAllSyntaxErrors(file)) {}
=======
// Main execution
const files = findFilesWithSyntaxErrors('/workspace);;

console.log(`Checking ${files.length} files for syntax errors`);

let fixedCount = 0;;

for (const file of files) {
  if (fixAllSyntaxErrors(file)) {
>>>>>>> origin/main
    fixedCount++;

  }

}

console.log(`Fixed ${fixedCount} files`);
