import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for TypeScript errors
const fixes = [
  // Fix missing closing tags
  {
    pattern: /<div([^>]*)>\s*$/gm,
    replacement: '<div$1></div>'
  },
  {
    pattern: /<section([^>]*)>\s*$/gm,
    replacement: '<section$1></section>'
  },
  {
    pattern: /<p([^>]*)>\s*$/gm,
    replacement: '<p$1></p>'
  },
  {
    pattern: /<h[1-6]([^>]*)>\s*$/gm,
    replacement: (match, attrs) => {
      const level = match.match(/<h([1-6])/)[1];
      return `<h${level}${attrs}></h${level}>`;
    }
  },
  // Fix JSX fragments
  {
    pattern: /<>([^<]*)$/gm,
    replacement: '<>{$1}</>'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: 'import $1;'
  },
  // Fix object syntax errors
  {
    pattern: /(\w+):\s*(\w+),?\s*$/gm,
    replacement: '$1: $2,'
  },
  // Fix missing closing braces
  {
    pattern: /{\s*$/gm,
    replacement: '{}'
  },
  // Fix malformed JSX
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: '<$1$2></$1>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes
    // Fix incomplete JSX elements
    content = content.replace(/<(\w+)([^>]*?)(?=\s*$)/gm, '<$1$2></$1>');
    
    // Fix missing closing tags for common elements
    const commonTags = ['div', 'section', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    commonTags.forEach(tag => {
      const regex = new RegExp(`<${tag}([^>]*)>\\s*$`, 'gm');
      content = content.replace(regex, `<${tag}$1></${tag}>`);
    });
    
    // Fix malformed object literals
    content = content.replace(/(\w+):\s*(\w+)\s*$/gm, '$1: $2,');
    
    // Fix missing semicolons
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
  let fixedCount = 0;
  
  console.log(`Found ${files.length} TypeScript files to check...`);
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();