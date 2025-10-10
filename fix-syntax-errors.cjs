#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common issues
    const fixes = [
      // Fix missing closing braces in object literals
      {
        pattern: /(\w+):\s*\[([^\]]*)\]\s*$/gm,
        replacement: (match, key, value) => {
          if (!value.trim().endsWith(']')) {
            return `${key}: [${value}]`;
          }
          return match;
        }
      },
      // Fix missing commas in object properties
      {
        pattern: /(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix JSX closing tags
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm,
        replacement: (match, tag, attrs) => {
          // Only fix if it's not a self-closing tag
          if (!attrs.includes('/>') && !attrs.includes('</')) {
            return match;
          }
          return match;
        }
      },
      // Fix unterminated template literals
      {
        pattern: /`([^`]*)$/gm,
        replacement: '`$1`'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*$/gm,
        replacement: (match) => {
          if (match.trim() && !match.includes(';') && !match.includes('}') && !match.includes(')')) {
            return match + ';';
          }
          return match;
        }
      }
    ];

    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Files to fix
const filesToFix = [
  'app/page.tsx',
  'app/micro-saas/page.tsx',
  'app/utils/a11y.ts',
  'app/utils/accessibility.ts',
  'app/utils/advancedAnalytics.ts'
];

let totalFixed = 0;

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      totalFixed++;
    }
  }
});

console.log(`\nFixed syntax errors in ${totalFixed} files.`);