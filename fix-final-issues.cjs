#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix final JSX issues in a file
function fixFinalIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed className attributes with quotes in the middle
    const patterns = [
      // Fix className with quotes in the middle
      {
        regex: /className="m i"n-h-screen/g,
        replacement: 'className="min-h-screen'
      },
      {
        regex: /className="t e"xt-center"/g,
        replacement: 'className="text-center"'
      },
      {
        regex: /className="t e"xt-4xl font-bold text-white mb-6"/g,
        replacement: 'className="text-4xl font-bold text-white mb-6"'
      },
      {
        regex: /className="t e"xt-lg text-gray-300 mb-8"/g,
        replacement: 'className="text-lg text-gray-300 mb-8"'
      },
      {
        regex: /className="i n"line-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"/g,
        replacement: 'className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"'
      },
      {
        regex: /className="m l"-2 h-5 w-5"/g,
        replacement: 'className="ml-2 h-5 w-5"'
      },
      // Fix any remaining malformed className patterns
      {
        regex: /className="([^"]*?)"([^"]*?)"/g,
        replacement: 'className="$1$2"'
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
  if (fixFinalIssues(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);