#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix semicolons in object literals (replace ';,' with ',')
  {
    pattern: /;,/g,
    replacement: ','
  },
  // Fix missing closing quotes in className attributes
  {
    pattern: /className="([^"]*);"/g,
    replacement: 'className="$1"'
  },
  // Fix missing closing quotes in other string attributes
  {
    pattern: /(\w+)="([^"]*);"/g,
    replacement: '$1="$2"'
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<(\w+)\s+([^>]*);>/g,
    replacement: '<$1 $2>'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*'([^']*)';\s*(\w+):/g,
    replacement: "$1: '$2',\n  $3:"
  },
  {
    pattern: /(\w+):\s*"([^"]*)";\s*(\w+):/g,
    replacement: '$1: "$2",\n  $3:'
  },
  // Fix missing commas in array elements
  {
    pattern: /'([^']*)';\s*'/g,
    replacement: "'$1',\n    '"
  },
  {
    pattern: /"([^"]*)";\s*"/g,
    replacement: '"$1",\n    "'
  },
  // Fix malformed import statements
  {
    pattern: /import\s+{\s*([^}]*);\s*}\s+from\s+['"]([^'"]*)['"];?/g,
    replacement: "import { $1 } from '$2';"
  },
  // Fix missing semicolons at end of statements
  {
    pattern: /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
    replacement: (match) => {
      if (!match.endsWith(';') && !match.endsWith('}') && !match.endsWith(')')) {
        return match + ';';
      }
      return match;
    }
  },
  // Fix unescaped quotes in JSX text content
  {
    pattern: /([^\\])'([^']*[^\\])'/g,
    replacement: "$1&apos;$2&apos;"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    // Fix object literal syntax errors
    content = content.replace(/(\w+):\s*'([^']*)';\s*(\w+):/g, "$1: '$2',\n  $3:");
    content = content.replace(/(\w+):\s*"([^"]*)";\s*(\w+):/g, '$1: "$2",\n  $3:');
    
    // Fix array syntax errors
    content = content.replace(/\[\s*'([^']*)';\s*'([^']*)'\s*\]/g, "['$1', '$2']");
    content = content.replace(/\[\s*"([^"]*)";\s*"([^"]*)"\s*\]/g, '["$1", "$2"]');
    
    // Fix JSX attribute syntax
    content = content.replace(/className="([^"]*);"/g, 'className="$1"');
    content = content.replace(/(\w+)="([^"]*);"/g, '$1="$2"');
    
    // Fix malformed function parameters
    content = content.replace(/function\s+(\w+)\s*\(\s*([^)]*);\s*\)/g, 'function $1($2)');
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*([^)]*);\s*\)/g, 'const $1 = ($2)');
    
    // Fix malformed arrow functions
    content = content.replace(/\(\s*([^)]*);\s*\)\s*=>/g, '($1) =>');
    
    // Fix malformed object destructuring
    content = content.replace(/{\s*([^}]*);\s*}/g, '{$1}');
    
    // Fix malformed array destructuring
    content = content.replace(/\[\s*([^\]]*);\s*\]/g, '[$1]');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('Starting comprehensive syntax error fixes...');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'hooks/**/*.{ts,tsx,js,jsx}',
    'utils/**/*.{ts,tsx,js,jsx}',
    '*.{ts,tsx,js,jsx}'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { 
      ignore: ['node_modules/**', 'dist/**', 'build/**', '*.min.js'] 
    });
    
    files.forEach(file => {
      totalFiles++;
      if (fixFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nCompleted! Fixed ${fixedFiles} out of ${totalFiles} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };