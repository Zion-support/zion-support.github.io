#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// More specific fixes for remaining parsing errors
const fixes = [
  // Fix broken JSX closing tags
  {
    pattern: />\s*\n\s*<\/\s*\n\s*<a/g,
    replacement: '>\n        Get Started\n      </a>\n      <a'
  },
  // Fix misplaced imports in the middle of objects
  {
    pattern: /(\s+},\s*)\nimport\s+[^;]+;/g,
    replacement: '$1'
  },
  // Fix broken JSX attributes
  {
    pattern: /\/\/\s*>\s*\n\s*([^<]+)\s*\n\s*\/\/\s*([^<]+)/g,
    replacement: '>\n              $1\n              $2'
  },
  // Fix incomplete JSX tags
  {
    pattern: /<\s*$/g,
    replacement: '<div>'
  },
  // Fix broken function calls
  {
    pattern: /\)\s*\)\s*\.toBe\(true\);/g,
    replacement: ')).toBe(true);'
  },
  // Fix missing closing braces in objects
  {
    pattern: /(\s+[^}]+)\s*\n\s*import\s+[^;]+;/g,
    replacement: '$1\n  };'
  },
  // Fix broken array syntax
  {
    pattern: /\[\s*$/g,
    replacement: '[]'
  },
  // Fix broken object syntax
  {
    pattern: /\{\s*$/g,
    replacement: '{}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
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

// Get files with errors from linter output
const { execSync } = require('child_process');

try {
  const lintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
  const lines = lintOutput.split('\n');
  const errorFiles = new Set();
  
  lines.forEach(line => {
    const match = line.match(/^\/workspace\/([^:]+):/);
    if (match) {
      errorFiles.add(match[1]);
    }
  });
  
  console.log(`Found ${errorFiles.size} files with errors`);
  
  let fixedCount = 0;
  errorFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
  
} catch (error) {
  console.error('Error running linter:', error.message);
}