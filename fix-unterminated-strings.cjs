#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix unterminated string literals in a file
function fixUnterminatedStrings(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in className attributes
    const patterns = [
      // Fix missing closing quote in className
      {
        regex: /className="([^"]*?)>([^<]*?)<\/h1>/g,
        replacement: 'className="$1">$2</h1>'
      },
      {
        regex: /className="([^"]*?)>([^<]*?)<\/Link>/g,
        replacement: 'className="$1">$2</Link>'
      },
      {
        regex: /className="([^"]*?)>([^<]*?)<\/div>/g,
        replacement: 'className="$1">$2</div>'
      },
      // Fix specific patterns
      {
        regex: /className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center>/g,
        replacement: 'className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">'
      },
      {
        regex: /className="text-4xl font-bold text-white mb-6>([^<]*?)<\/h1>/g,
        replacement: 'className="text-4xl font-bold text-white mb-6">$1</h1>'
      },
      {
        regex: /className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors>/g,
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
  if (fixUnterminatedStrings(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);