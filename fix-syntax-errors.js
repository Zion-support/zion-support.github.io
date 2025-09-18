#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unclosed JSX tags
  {
    pattern: /<(\w+)([^>]*?)(?<!\/)>$/gm,
    replacement: (match, tagName, attributes) => {
      // Skip self-closing tags
      if (attributes.includes('/') || attributes.includes('=')) {
        return match;
      }
      return `<${tagName}${attributes}></${tagName}>`;
    }
  },
  // Fix missing closing tags for common elements
  {
    pattern: /<button([^>]*?)>(?!.*<\/button>)/gms,
    replacement: '<button$1></button>'
  },
  {
    pattern: /<div([^>]*?)>(?!.*<\/div>)/gms,
    replacement: '<div$1></div>'
  },
  {
    pattern: /<span([^>]*?)>(?!.*<\/span>)/gms,
    replacement: '<span$1></span>'
  },
  {
    pattern: /<a([^>]*?)>(?!.*<\/a>)/gms,
    replacement: '<a$1></a>'
  },
  {
    pattern: /<p([^>]*?)>(?!.*<\/p>)/gms,
    replacement: '<p$1></p>'
  },
  {
    pattern: /<ul([^>]*?)>(?!.*<\/ul>)/gms,
    replacement: '<ul$1></ul>'
  },
  {
    pattern: /<Link([^>]*?)>(?!.*<\/Link>)/gms,
    replacement: '<Link$1></Link>'
  },
  {
    pattern: /<Button([^>]*?)>(?!.*<\/Button>)/gms,
    replacement: '<Button$1></Button>'
  },
  {
    pattern: /<Select([^>]*?)>(?!.*<\/Select>)/gms,
    replacement: '<Select$1></Select>'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+):\s*(\w+)\s*\n/g,
    replacement: '$1: $2,\n'
  },
  // Fix missing closing parentheses
  {
    pattern: /(\w+)\s*\(\s*$/gm,
    replacement: '$1()'
  },
  // Fix missing closing braces
  {
    pattern: /{\s*$/gm,
    replacement: '{}'
  },
  // Fix missing closing brackets
  {
    pattern: /\[\s*$/gm,
    replacement: '[]'
  },
  // Fix missing semicolons
  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1;'
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

function main() {
  const srcDir = path.join(__dirname, 'src');
  const pattern = path.join(srcDir, '**/*.{ts,tsx,js,jsx}');
  
  console.log('Scanning for files...');
  const files = glob.sync(pattern);
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };