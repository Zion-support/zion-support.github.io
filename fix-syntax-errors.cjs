#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix object syntax errors: {}; -> {
  {
    pattern: /(\s*)(\{\s*);/g,
    replacement: '$1{'
  },
  // Fix JSX syntax errors: "; -> "
  {
    pattern: /";/g,
    replacement: '"'
  },
  // Fix function syntax errors: }; -> }
  {
    pattern: /(\s*)(\}\s*);/g,
    replacement: '$1}'
  },
  // Fix array syntax errors: ]; -> ]
  {
    pattern: /(\s*)(\]\s*);/g,
    replacement: '$1]'
  },
  // Fix import syntax errors: ; -> 
  {
    pattern: /import\s+[^;]+;\s*;/g,
    replacement: (match) => match.replace(/;$/, '')
  },
  // Fix JSX fragment errors: <>"; -> <>
  {
    pattern: /<>\s*";/g,
    replacement: '<>'
  },
  // Fix JSX closing errors: </>"; -> </>
  {
    pattern: /<\/>\s*";/g,
    replacement: '</>'
  },
  // Fix JSX attribute errors: ="value"; -> ="value"
  {
    pattern: /="([^"]+)";/g,
    replacement: '="$1"'
  },
  // Fix JSX self-closing errors: />"; -> />
  {
    pattern: /\/>\s*";/g,
    replacement: '/>'
  },
  // Fix return statement errors: return ("; -> return (
  {
    pattern: /return\s*\(\s*";/g,
    replacement: 'return ('
  },
  // Fix component definition errors: () => {"; -> () => {
  {
    pattern: /\(\s*\)\s*=>\s*\{\s*";/g,
    replacement: '() => {'
  },
  // Fix string literal errors: 'string'; -> 'string'
  {
    pattern: /'([^']+)';/g,
    replacement: "'$1'"
  },
  // Fix unterminated string literals
  {
    pattern: /"([^"]*)\n/g,
    replacement: '"$1"\n'
  },
  // Fix missing closing braces in objects
  {
    pattern: /(\w+):\s*"([^"]+)";\s*(\w+):/g,
    replacement: '$1: "$2",\n    $3:'
  },
  // Fix missing commas in arrays
  {
    pattern: /"([^"]+)"\s*;\s*"([^"]+)"/g,
    replacement: '"$1",\n    "$2"'
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
    // Fix object properties without commas
    content = content.replace(/(\w+):\s*"([^"]+)"\s*;\s*(\w+):/g, '$1: "$2",\n    $3:');
    
    // Fix array elements without commas
    content = content.replace(/"([^"]+)"\s*;\s*"([^"]+)"/g, '"$1",\n    "$2"');
    
    // Fix JSX elements without proper closing
    content = content.replace(/<(\w+)([^>]*)>\s*";/g, '<$1$2>');
    
    // Fix function calls without proper syntax
    content = content.replace(/(\w+)\s*\(\s*\);(\s*)/g, '$1();$2');
    
    // Only write if content changed
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

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  const appDir = path.join(__dirname, 'app');
  const apiDir = path.join(__dirname, 'api');
  
  console.log('Starting syntax error fixes...');
  
  let totalFixed = 0;
  
  // Fix app directory
  if (fs.existsSync(appDir)) {
    const appFiles = findTsxFiles(appDir);
    console.log(`Found ${appFiles.length} files in app directory`);
    
    for (const file of appFiles) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  // Fix api directory
  if (fs.existsSync(apiDir)) {
    const apiFiles = findTsxFiles(apiDir);
    console.log(`Found ${apiFiles.length} files in api directory`);
    
    for (const file of apiFiles) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  // Fix root level files
  const rootFiles = ['App-minimal.tsx', 'EnhancedFooter.tsx'];
  for (const file of rootFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      if (fixFile(filePath)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
  console.log('Syntax error fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findTsxFiles };
