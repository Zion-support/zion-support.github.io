#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix unterminated string literals with trailing quotes
  {
    pattern: /'([^']*?)\n/g,
    replacement: "'$1'\n"
  },
  // Fix unterminated string literals with trailing quotes in JSX
  {
    pattern: /"([^"]*?)\n/g,
    replacement: '"$1"\n'
  },
  // Fix extra commas in object properties
  {
    pattern: /,\s*}/g,
    replacement: '}'
  },
  // Fix extra commas in array properties
  {
    pattern: /,\s*]/g,
    replacement: ']'
  },
  // Fix semicolons in object properties
  {
    pattern: /;\s*}/g,
    replacement: '}'
  },
  // Fix semicolons in array properties
  {
    pattern: /;\s*]/g,
    replacement: ']'
  },
  // Fix duplicate color properties
  {
    pattern: /color:\s*"[^"]*"\s*}\s*color:\s*"[^"]*"\s*}/g,
    replacement: (match) => {
      const colors = match.match(/"([^"]*)"/g);
      return `color: ${colors[0]}}`;
    }
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<([^>]+)\s*>\s*<\/\1\s*>/g,
    replacement: '<$1></$1>'
  },
  // Fix missing closing braces in objects
  {
    pattern: /(\w+):\s*"([^"]*)"\s*,\s*$/gm,
    replacement: '$1: "$2",'
  },
  // Fix stray semicolons in JSX
  {
    pattern: /;\s*<\/[^>]+>/g,
    replacement: '</$1>'
  },
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm,
    replacement: 'const $1 = () => {\n'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes for common patterns
    content = content
      // Fix unterminated strings at end of lines
      .replace(/'([^']*?)\n/g, "'$1'\n")
      .replace(/"([^"]*?)\n/g, '"$1"\n")
      // Fix extra commas and semicolons
      .replace(/,(\s*[}\]])/g, '$1')
      .replace(/(\w+):\s*"([^"]*)"\s*;\s*}/g, '$1: "$2" }')
      // Fix malformed JSX
      .replace(/>\s*;\s*</g, '><')
      .replace(/>\s*;\s*$/gm, '>')
      // Fix duplicate properties
      .replace(/(\w+):\s*"[^"]*"\s*}\s*\1:\s*"[^"]*"\s*}/g, (match) => {
        const props = match.match(/(\w+):\s*"([^"]*)"/g);
        return props[0] + ' }';
      });
    
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
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`Fixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };