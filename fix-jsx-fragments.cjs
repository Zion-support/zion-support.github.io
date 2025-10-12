#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX fragment issues in a file
function fixJSXFragment(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX fragment issues
    const patterns = [
      // Fix malformed JSX fragments
      {
        regex: /return\s*\(\s*\n\s*<>\s*\n/g,
        replacement: 'return (\n    <>\n'
      },
      // Fix missing closing tags
      {
        regex: /(\s*<>\s*\n[\s\S]*?)(\s*Contact Us\s*)(\s*\n\s*$)/g,
        replacement: '$1      <div>$2</div>\n    </>\n  );\n}'
      },
      // Fix malformed className attributes
      {
        regex: /className="([^"]*?)\s+([^"]*?)"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix missing spaces in className
      {
        regex: /className="([^"]*?)([a-zA-Z])([a-zA-Z])/g,
        replacement: 'className="$1$2 $3"'
      },
      // Fix malformed title tags
      {
        regex: /<title>([^<]*?)<\/title>\s*<title>/g,
        replacement: '<title>$1</title>'
      },
      // Fix missing function declaration
      {
        regex: /^import React from 'react';\s*\n\s*return\s*\(/g,
        replacement: "import React from 'react';\n\nexport default function Page() {\n  return ("
      }
    ];

    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional fixes for specific patterns
    if (content.includes('return (') && !content.includes('export default function')) {
      content = content.replace(
        /^import React from 'react';\s*\n\s*return\s*\(/,
        "import React from 'react';\n\nexport default function Page() {\n  return ("
      );
      modified = true;
    }

    // Fix missing closing tags for fragments
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(
        /(\s*<>\s*\n[\s\S]*?)(\s*$)/,
        '$1    </>\n  );\n}'
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
  if (fixJSXFragment(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);