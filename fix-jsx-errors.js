#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

// JSX-specific fixes
const jsxFixes = [
  // Fix JSX fragments without closing tags
  {
    pattern: /<>\s*$/gm,
    replacement: "<></>"
  },
  // Fix JSX expressions without parent element
  {
    pattern: /return\s*\(\s*<>\s*<([^>]+)>\s*<([^>]+)>\s*<\/\2>\s*<\/\1>\s*<\/>\s*\)/gm,
    replacement: "return (\n    <>\n      <$1>\n        <$2></$2>\n      </$1>\n    </>\n  )"
  },
  // Fix unterminated string literals in JSX
  {
    pattern: /'([^']*)\s*$/gm,'
    replacement: "'$1'"
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*?)(?<!\/)>\s*$/gm,
    replacement: "<$1$2></$1>"
  },
  // Fix malformed JSX attributes
  {
    pattern: /(\w+),'(\w+)',/g,'
    replacement: "$1: '$2',"
  },
  // Fix empty JSX elements
  {
    pattern: /<(\w+)\s*\/>\s*$/gm,
    replacement: "<$1></$1>"
  },
  // Fix JSX fragment issues
  {
    pattern: /<>\s*<(\w+)>\s*<\/\1>\s*$/gm,
    replacement: "<>\n      <$1></$1>\n    </>"
  }
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // First, let's try to fix common patterns'
    const originalContent = content;
    
    jsxFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
}
}
      }
    });
    
    // Additional specific fixes for common issues
    // Fix missing imports
    if (content.includes('React') && !content.includes("import React")) {"
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Fix missing closing tags for common elements
    const commonElements = ['div', 'section', 'article', 'main', 'header', 'footer', 'nav'];
    commonElements.forEach(tag => {
      const openTagPattern = new RegExp(`<${tag}([^>]*?)(?<!\/)>\\s*$`, 'gm');
      if (openTagPattern.test(content)) {
        content = content.replace(openTagPattern, `<$1$2></$1>`);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing JSX ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const patterns = [
    'app/**/*.tsx','
    'components/**/*.tsx','
    '*.tsx'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
}
}
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixJSXFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} JSX files`);
}
*/
main().catch(console.error);*/