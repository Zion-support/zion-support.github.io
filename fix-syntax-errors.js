#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals in imports
  {
    pattern: /import\s+.*from\s+['"]([^'"]*)$/gm,
    replacement: (match, p1) => {
      if (p1.includes("'")) {
        return match.replace(p1, p1 + "'");
      }
      return match.replace(p1, p1 + '"');
    }
  },
  
  // Fix unterminated string literals in JSX attributes
  {
    pattern: /className=([^"'\s>]+)(?=\s|>)/g,
    replacement: 'className="$1"'
  },
  
  // Fix unterminated string literals in JSX text content
  {
    pattern: />\s*([^<>\n]*?)\s*<\//g,
    replacement: (match, content) => {
      if (content.trim() && !content.includes('"') && !content.includes("'")) {
        return match.replace(content, `"${content.trim()}"`);
      }
      return match;
    }
  },
  
  // Fix missing quotes around JSX attributes
  {
    pattern: /(\w+)=([^"'\s>]+)(?=\s|>)/g,
    replacement: '$1="$2"'
  },
  
  // Fix malformed JSX closing tags
  {
    pattern: /<\/(\w+)\s*>/g,
    replacement: '</$1>'
  },
  
  // Fix unterminated comments
  {
    pattern: /\/\*([^*]|\*(?!\/))*$/gm,
    replacement: (match) => match + '*/'
  },
  
  // Fix missing semicolons after imports
  {
    pattern: /import\s+.*from\s+['"][^'"]*['"]\s*(?!;)/g,
    replacement: (match) => match + ';'
  },
  
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC<[^>]*>\s*=\s*\(\s*\{[^}]*\}\s*\)\s*=>\s*\{/g,
    replacement: (match) => match.replace(/\s*=>\s*\{/, ' = ({ }) => {')
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply each fix
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    content = content
      // Fix unterminated template literals
      .replace(/`([^`]*)$/gm, '`$1`')
      // Fix missing closing braces
      .replace(/\{([^}]*)$/gm, '{$1}')
      // Fix malformed JSX
      .replace(/<(\w+)([^>]*?)>/g, '<$1$2>')
      // Fix unterminated strings in JSX
      .replace(/>\s*([^<>\n]*?)\s*<\//g, (match, content) => {
        if (content.trim() && !content.includes('"') && !content.includes("'")) {
          return match.replace(content, `"${content.trim()}"`);
        }
        return match;
      });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  
  return false;
}

// Find all TypeScript and TSX files
const patterns = [
  'app/**/*.{ts,tsx}',
  'src/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}',
  '**/*.{ts,tsx}'
];

let totalFixed = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] });
  files.forEach(file => {
    if (fixFile(file)) {
      totalFixed++;
    }
  });
});

console.log(`\nFixed ${totalFixed} files`);