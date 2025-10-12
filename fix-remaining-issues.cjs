#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining JSX issues in a file
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific malformed patterns
    const patterns = [
      // Fix missing space in className
      {
        regex: /className="min-h-screenbg-gradient-to-br/g,
        replacement: 'className="min-h-screen bg-gradient-to-br'
      },
      // Fix broken className with quotes
      {
        regex: /className="te" xt-center"/g,
        replacement: 'className="text-center"'
      },
      // Fix broken className with missing space
      {
        regex: /className="text-4xlfont-bold/g,
        replacement: 'className="text-4xl font-bold'
      },
      // Fix broken className with extra quotes
      {
        regex: /className="te xt-lg text-gray-300 mb-8""/g,
        replacement: 'className="text-lg text-gray-300 mb-8"'
      },
      // Fix broken className with quotes in the middle
      {
        regex: /to="\/contact"className="in" line-flex/g,
        replacement: 'to="/contact" className="inline-flex'
      },
      // Fix missing closing quote in div
      {
        regex: /className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center >/g,
        replacement: 'className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">'
      },
      // Fix missing closing quote in Link
      {
        regex: /className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors >/g,
        replacement: 'className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">'
      }
    ];

    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixRemainingIssues(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);