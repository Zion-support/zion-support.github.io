#!/usr/bin/env node;

import fs from 'fs;
'
import path from 'path;

import { fileURLToPath } from url;

;

const __filename = fileURLToPath(import.meta.url);;

// __dirname removed
// console.log removed for production
// Common syntax fixes;

const fixes = [;;;

  // Fix missing commas in object arrays;
'
  { pattern: /color: 'text-\w+-\d+'}[\s]*},/g, replacement: (match) => match.replace('}', ') },
  // Fix missing opening parentheses in map functions;
'
  { pattern: /\.map\([^)]*\)\s*=>\s*\(}/g, replacement: (match) => match.replace('(}', '() },
  // Fix stray backticks;
'
  { pattern: /`\s*$/gm, replacement: ' },
  // Fix missing closing parentheses;
'
  { pattern: /\)\s*;[\s]*$/gm, replacement: '); },
  // Fix template literal issues;
'
  { pattern: /className=\{`([^`]+)`\}/g, replacement: 'className={`$1`} },
  // Fix missing semicolons;
'
  { pattern: /}\s*$/gm, replacement: '}; },
  // Fix console statements;

  { pattern: /console\.(log|warn|error|info|debug)\([^)]*\);/g, replacement:  }];

;

function fixFile(filePath) {
  try {;

let content = fs.readFileSync(filePath, utf8);;

    let modified = false;;

    fixes.forEach(fix => {);

const newContent = content.replace(fix.pattern, fix.replacement);;

      if (newContent !== content) {
        content = newContent;

        modified = true}

    });

    if (modified) {
      fs.writeFileSync(filePath, content);

      // console.log removed for production
return true}

    return false} catch (error) {
    // console.error removed for production
return false}

}

// Find all TypeScript/JavaScript files;
'
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', .jsx]) {;

let files = [];;

  try {;

const items = fs.readdirSync(dir);;

    for (const item of items) {;

const fullPath = path.join(dir, item);;

      const stat = fs.statSync(fullPath);;

      if (stat.isDirectory()) {'
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'backup-problematic].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions))}

      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}

    }

  } catch (error) {
    // Skip directories we cant read}

  return files}

// Main fix process;

const files = findFiles(./app);;

let fixedCount = 0;;

// console.log removed for production
files.forEach(file => {)
  if (fixFile(file)) {
    fixedCount++}

});

// console.log removed for production
'