#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix className issues in a file
function fixClassNameIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed className attributes
    const patterns = [
      // Fix className with spaces in the middle
      {
        regex: /className="([^"]*?)\s+([^"]*?)"/g,
        replacement: 'className="$1$2"'
      },
      // Fix className with broken quotes
      {
        regex: /className="([^"]*?)\s*"\s*([^"]*?)"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix className with missing quotes
      {
        regex: /className=([^"][^>]*?)(?=\s|>)/g,
        replacement: (match) => {
          const className = match.replace('className=', '').trim();
          return `className="${className}"`;
        }
      },
      // Fix broken string literals in className
      {
        regex: /className="([^"]*?)\s*"\s*([^"]*?)"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix specific patterns like "m i"n-h-screen
      {
        regex: /"([^"]*?)\s+([^"]*?)"\s*([^"]*?)"/g,
        replacement: '"$1$2 $3"'
      },
      // Fix broken ArrowRight className
      {
        regex: /className="m l"-2 h-5 w-5"/g,
        replacement: 'className="ml-2 h-5 w-5"'
      },
      // Fix broken text-center className
      {
        regex: /className="t e"xt-center"/g,
        replacement: 'className="text-center"'
      },
      // Fix broken text-4xl className
      {
        regex: /className="t e"xt-4xl font-bold text-white mb-6"/g,
        replacement: 'className="text-4xl font-bold text-white mb-6"'
      },
      // Fix broken text-lg className
      {
        regex: /className="t e"xt-lg text-gray-300 mb-8"/g,
        replacement: 'className="text-lg text-gray-300 mb-8"'
      },
      // Fix broken inline-flex className
      {
        regex: /className="i n"line-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"/g,
        replacement: 'className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"'
      },
      // Fix broken min-h-screen className
      {
        regex: /className="m i"n-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"/g,
        replacement: 'className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"'
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
  if (fixClassNameIssues(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);