#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX structure issues
    const fixes = [
      // Fix malformed fragments with content outside
      {
        pattern: /<>\s*<\/>\s*<([^>]+)>/gs,
        replacement: '<>\n      <$1>'
      },
      // Fix empty fragments that should contain content
      {
        pattern: /<>\s*<\/>\s*([^<]+)/gs,
        replacement: '<>\n      $1'
      },
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*<>\s*<\/>\s*([^<]+)/gs,
        replacement: 'return (\n    <>\n      $1'
      },
      // Fix missing closing fragments
      {
        pattern: /<>\s*([^<]*?)\s*$/gm,
        replacement: '<>\n      $1\n    </>'
      },
      // Fix malformed JSX elements
      {
        pattern: /<(\w+)([^>]*)>\s*<\/\1>\s*([^<]+)/gs,
        replacement: '<$1$2>$3</$1>'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*\n\s*export/g,
        replacement: '$1;\n\nexport'
      }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix the specific pattern where Head is outside fragment
    if (content.includes('<Head>') && content.includes('</>')) {
      content = content.replace(
        /<>\s*<\/>\s*<Head>/gs,
        '<>\n      <Head>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixJSXStructure(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting final JSX structure fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed JSX structure in ${fixedCount} files`);