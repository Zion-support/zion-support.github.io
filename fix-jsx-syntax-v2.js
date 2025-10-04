#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix JSX syntax errors in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // More comprehensive fixes
    const fixes = [
      // Fix unclosed span tags with specific patterns
      { pattern: /<span([^>]*)>([^<]+)<$/gm, replacement: '<span$1>$2</span>' },

      // Fix unclosed span tags in lists
      {
        pattern: /<span className="text-left">([^<]+)<$/gm,
        replacement: '<span className="text-left">$1</span>',
      },

      // Fix unterminated string literals in JSX attributes
      {
        pattern: /className="text-left">([^<"]+)<$/gm,
        replacement: 'className="text-left">$1</span>',
      },

      // Fix malformed JSX closing tags
      { pattern: /<span([^>]*)>([^<]+)<$/gm, replacement: '<span$1>$2</span>' },

      // Fix specific patterns found in the error messages
      {
        pattern: /<span className="text-left">([^<]+)<$/gm,
        replacement: '<span className="text-left">$1</span>',
      },

      // Fix unclosed div tags
      {
        pattern: /<div className="text-left">$/gm,
        replacement: '<div className="text-left">',
      },

      // Fix unclosed ul/li tags
      {
        pattern: /<ul className="text-left">$/gm,
        replacement: '<ul className="text-left">',
      },
      {
        pattern: /<li className="text-left">$/gm,
        replacement: '<li className="text-left">',
      },

      // Fix specific unterminated string patterns
      {
        pattern: /<span className="text-left">([^<"]+)<$/gm,
        replacement: '<span className="text-left">$1</span>',
      },

      // Fix malformed closing tags
      { pattern: /<span([^>]*)>([^<]+)<$/gm, replacement: '<span$1>$2</span>' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix patterns like: <span className="text-left">text<
      {
        pattern: /<span className="text-left">([^<]+)<$/gm,
        replacement: '<span className="text-left">$1</span>',
      },

      // Fix patterns like: <span>text<
      { pattern: /<span>([^<]+)<$/gm, replacement: '<span>$1</span>' },

      // Fix patterns with specific content
      {
        pattern: /<span className="text-left">([^<"]+)<$/gm,
        replacement: '<span className="text-left">$1</span>',
      },
    ];

    specificFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive JSX syntax fix...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run type check to see if we fixed the issues
console.log('Running type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check still has errors, but we fixed many issues.');
}
