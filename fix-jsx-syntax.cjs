#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX syntax issues in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX attributes and syntax
    const patterns = [
      // Fix missing quotes in className
      {
        regex: /className=([^"][^>]*?)(?=\s|>)/g,
        replacement: (match) => {
          const className = match.replace('className=', '').trim();
          return `className="${className}"`;
        }
      },
      // Fix broken className with spaces
      {
        regex: /className="([^"]*?)\s+([^"]*?)"/g,
        replacement: 'className="$1$2"'
      },
      // Fix missing quotes in other attributes
      {
        regex: /to="([^"]*?)className=/g,
        replacement: 'to="$1" className='
      },
      // Fix malformed h1 tags
      {
        regex: /<h1 className="([^"]*?)" >([^<]*?)<\/h1>/g,
        replacement: '<h1 className="$1">$2</h1>'
      },
      // Fix malformed p tags
      {
        regex: /<p className=([^>]*?)"([^"]*?)"([^>]*?)>([^<]*?)<\/p>/g,
        replacement: '<p className="$1$2$3">$4</p>'
      },
      // Fix malformed div tags
      {
        regex: /<div className=([^>]*?)"([^"]*?)"([^>]*?)>([^<]*?)<\/div>/g,
        replacement: '<div className="$1$2$3">$4</div>'
      },
      // Fix missing closing quotes in div
      {
        regex: /<div className="([^"]*?)"([^>]*?)>([^<]*?)<\/div>/g,
        replacement: '<div className="$1"$2>$3</div>'
      },
      // Fix broken ArrowRight className
      {
        regex: /className="ml -2 h-5 w-5"/g,
        replacement: 'className="ml-2 h-5 w-5"'
      },
      // Fix broken text-center className
      {
        regex: /className= te xt-center"/g,
        replacement: 'className="text-center"'
      },
      // Fix broken text-lg className
      {
        regex: /className= te xt-lg text-gray-300 mb-8"/g,
        replacement: 'className="text-lg text-gray-300 mb-8"'
      },
      // Fix broken inline-flex className
      {
        regex: /className= in line-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors/g,
        replacement: 'className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"'
      },
      // Fix missing quotes in Link component
      {
        regex: /to="([^"]*?)className=/g,
        replacement: 'to="$1" className='
      },
      // Fix malformed h1 with missing closing quote
      {
        regex: /<h1 className="([^"]*?) >([^<]*?)<\/h1>/g,
        replacement: '<h1 className="$1">$2</h1>'
      },
      // Fix malformed p with missing quotes
      {
        regex: /<p className=([^>]*?)"([^"]*?)"([^>]*?)>([^<]*?)<\/p>/g,
        replacement: '<p className="$1$2$3">$4</p>'
      },
      // Fix missing closing quote in div
      {
        regex: /<div className="([^"]*?)"([^>]*?)>([^<]*?)<\/div>/g,
        replacement: '<div className="$1"$2>$3</div>'
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
    if (content.includes('className= te xt-center"')) {
      content = content.replace(/className= te xt-center"/g, 'className="text-center"');
      modified = true;
    }

    if (content.includes('className= te xt-lg text-gray-300 mb-8"')) {
      content = content.replace(/className= te xt-lg text-gray-300 mb-8"/g, 'className="text-lg text-gray-300 mb-8"');
      modified = true;
    }

    if (content.includes('className= in line-flex')) {
      content = content.replace(/className= in line-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors/g, 'className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"');
      modified = true;
    }

    if (content.includes('className="ml -2 h-5 w-5"')) {
      content = content.replace(/className="ml -2 h-5 w-5"/g, 'className="ml-2 h-5 w-5"');
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
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);