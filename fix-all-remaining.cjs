#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining issues in a file
function fixAllRemaining(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all remaining malformed patterns
    const patterns = [
      // Fix malformed className with spaces
      {
        regex: /className="t ext-4xl font-boldtext-whitemb-6"/g,
        replacement: 'className="text-4xl font-bold text-white mb-6"'
      },
      {
        regex: /className="t e xt-lgtext-gray-300mb-8""/g,
        replacement: 'className="text-lg text-gray-300 mb-8"'
      },
      // Fix malformed title tags
      {
        regex: /<title>5G Data Analytics - Zion Tech Group<\/title>/g,
        replacement: '<title>Business Intelligence - Zion Tech Group</title>'
      },
      // Fix malformed JSX structure
      {
        regex: /<p className="([^"]*?)"">([^<]*?)<\/p>\s*<div>Contact Us<\/div>/g,
        replacement: '<p className="$1">$2</p>\n        <div>Contact Us</div>'
      },
      // Fix any remaining malformed className patterns
      {
        regex: /className="([^"]*?)\s+([^"]*?)"/g,
        replacement: 'className="$1$2"'
      },
      // Fix malformed className with missing spaces
      {
        regex: /className="([^"]*?)([a-zA-Z])([a-zA-Z])/g,
        replacement: 'className="$1$2 $3"'
      }
    ];

    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    if (content.includes('className="t ext-4xl font-boldtext-whitemb-6"')) {
      content = content.replace(
        /className="t ext-4xl font-boldtext-whitemb-6"/g,
        'className="text-4xl font-bold text-white mb-6"'
      );
      modified = true;
    }

    if (content.includes('className="t e xt-lgtext-gray-300mb-8""')) {
      content = content.replace(
        /className="t e xt-lgtext-gray-300mb-8""/g,
        'className="text-lg text-gray-300 mb-8"'
      );
      modified = true;
    }

    if (content.includes('<title>5G Data Analytics - Zion Tech Group</title>')) {
      content = content.replace(
        /<title>5G Data Analytics - Zion Tech Group<\/title>/g,
        '<title>Business Intelligence - Zion Tech Group</title>'
      );
      modified = true;
    }

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
  if (fixAllRemaining(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);