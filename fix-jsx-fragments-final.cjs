#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX fragment issues in a file
function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX fragments and tags
    const patterns = [
      // Fix malformed title tags
      {
        regex: /<title>([^<]*?)<\/title>([^<]*?)<\/title>/g,
        replacement: '<title>$1</title>'
      },
      // Fix malformed className attributes
      {
        regex: /className="([^"]*?)([a-zA-Z])([a-zA-Z])/g,
        replacement: 'className="$1$2 $3"'
      },
      // Fix broken className with missing spaces
      {
        regex: /className="text-4xl font-boldtext-whitemb-6"/g,
        replacement: 'className="text-4xl font-bold text-white mb-6"'
      },
      // Fix broken className with extra quotes
      {
        regex: /className="te xt-lgtext-gray-300mb-8""/g,
        replacement: 'className="text-lg text-gray-300 mb-8"'
      },
      // Fix malformed JSX structure
      {
        regex: /<p className="([^"]*?)"">([^<]*?)<\/p>\s*<div>/g,
        replacement: '<p className="$1">$2</p>\n        <div>'
      },
      // Fix missing closing tags
      {
        regex: /<div>\s*Contact Us\s*<\/div>\s*<\/>/g,
        replacement: '<div>Contact Us</div>\n    </>'
      },
      // Fix malformed JSX fragments
      {
        regex: /<>\s*<title>([^<]*?)<\/title>([^<]*?)<\/title>/g,
        replacement: '<>\n      <title>$1</title>'
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
    if (content.includes('Business Intelligence - Zion Tech Group</title>')) {
      content = content.replace(
        /<title>5G Data Analytics - Zion Tech Group<\/title>Business Intelligence - Zion Tech Group<\/title>/g,
        '<title>Business Intelligence - Zion Tech Group</title>'
      );
      modified = true;
    }

    if (content.includes('className="text-4xl font-boldtext-whitemb-6"')) {
      content = content.replace(
        /className="text-4xl font-boldtext-whitemb-6"/g,
        'className="text-4xl font-bold text-white mb-6"'
      );
      modified = true;
    }

    if (content.includes('className="te xt-lgtext-gray-300mb-8""')) {
      content = content.replace(
        /className="te xt-lgtext-gray-300mb-8""/g,
        'className="text-lg text-gray-300 mb-8"'
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
  if (fixJSXFragments(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);