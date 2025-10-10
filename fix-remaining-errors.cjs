#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// More comprehensive fixes for remaining errors
const fixes = [
  // Fix array declarations with missing commas
  {
    pattern: /const\s+(\w+)\s*=\s*\[\s*([^[\]]+)\s*\]/g,
    replacement: (match, varName, content) => {
      // Split by lines and fix missing commas
      const lines = content.split('\n').map(line => line.trim()).filter(line => line);
      const fixedLines = lines.map((line, index) => {
        if (index < lines.length - 1 && !line.endsWith(',') && !line.endsWith('{') && !line.endsWith('[')) {
          return line + ',';
        }
        return line;
      });
      return `const ${varName} = [\n    ${fixedLines.join('\n    ')}\n  ]`;
    }
  },
  // Fix object declarations with missing commas
  {
    pattern: /const\s+(\w+)\s*=\s*\{\s*([^{}]+)\s*\}/g,
    replacement: (match, varName, content) => {
      const lines = content.split('\n').map(line => line.trim()).filter(line => line);
      const fixedLines = lines.map((line, index) => {
        if (index < lines.length - 1 && !line.endsWith(',') && !line.endsWith('{') && !line.endsWith('[')) {
          return line + ',';
        }
        return line;
      });
      return `const ${varName} = {\n    ${fixedLines.join('\n    ')}\n  }`;
    }
  },
  // Fix malformed JSX expressions
  {
    pattern: /\{([^}]*)\s*\}\s*\)/g,
    replacement: '{$1}'
  },
  // Fix broken template literals
  {
    pattern: /`([^`]*)\s*`/g,
    replacement: '`$1`'
  },
  // Fix malformed function calls
  {
    pattern: /(\w+)\s*\(\s*([^)]*)\s*\)\s*\)/g,
    replacement: '$1($2)'
  },
  // Fix broken JSX attributes
  {
    pattern: /className=\{\`([^`]*)\`\}/g,
    replacement: 'className={`$1`}'
  },
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*<([^>]+)>\s*\)/g,
    replacement: 'return (<$1>'
  },
  // Fix broken JSX closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*\)/g,
    replacement: '<$1$2>'
  },
  // Fix malformed object properties
  {
    pattern: /(\w+):\s*([^,}]+)\s*([^,}]+)/g,
    replacement: '$1: $2$3'
  },
  // Fix broken array elements
  {
    pattern: /'([^']+)'\s*'([^']+)'/g,
    replacement: "'$1', '$2'"
  },
  // Fix malformed JSX expressions in attributes
  {
    pattern: /\{([^}]*)\s*\}\s*\)/g,
    replacement: '{$1}'
  },
  // Fix broken template literals in JSX
  {
    pattern: /\{`([^`]*)\`\}/g,
    replacement: '{`$1`}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes for common patterns
    // Fix array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*([^[\]]+)\s*\]/g, (match, varName, arrayContent) => {
      const items = arrayContent.split('\n').map(item => item.trim()).filter(item => item);
      const fixedItems = items.map((item, index) => {
        if (index < items.length - 1 && !item.endsWith(',') && !item.endsWith('{') && !item.endsWith('[')) {
          return item + ',';
        }
        return item;
      });
      return `const ${varName} = [\n    ${fixedItems.join('\n    ')}\n  ]`;
    });
    
    // Fix object declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\{\s*([^{}]+)\s*\}/g, (match, varName, objContent) => {
      const items = objContent.split('\n').map(item => item.trim()).filter(item => item);
      const fixedItems = items.map((item, index) => {
        if (index < items.length - 1 && !item.endsWith(',') && !item.endsWith('{') && !item.endsWith('[')) {
          return item + ',';
        }
        return item;
      });
      return `const ${varName} = {\n    ${fixedItems.join('\n    ')}\n  }`;
    });
    
    // Fix malformed JSX
    content = content.replace(/return\s*\(\s*<([^>]+)>\s*\)/g, 'return (<$1>');
    content = content.replace(/<(\w+)([^>]*)>\s*\)/g, '<$1$2>');
    
    // Fix broken template literals
    content = content.replace(/`([^`]*)\s*`/g, '`$1`');
    
    // Fix malformed function calls
    content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*\)\s*\)/g, '$1($2)');
    
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing
console.log('Starting remaining error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);