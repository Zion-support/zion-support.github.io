#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax issues
    const fixes = [
      // Fix missing closing quotes in className
      {
        pattern: /className="([^"]*)\s*$/gm,
        replacement: 'className="$1"'
      },
      // Fix missing closing quotes in href
      {
        pattern: /href="([^"]*)\s*$/gm,
        replacement: 'href="$1"'
      },
      // Fix missing closing quotes in src
      {
        pattern: /src="([^"]*)\s*$/gm,
        replacement: 'src="$1"'
      },
      // Fix missing closing quotes in alt
      {
        pattern: /alt="([^"]*)\s*$/gm,
        replacement: 'alt="$1"'
      },
      // Fix missing closing quotes in title
      {
        pattern: /title="([^"]*)\s*$/gm,
        replacement: 'title="$1"'
      },
      // Fix extra quotes in text content
      {
        pattern: />\s*([^<]*)"\s*</gm,
        replacement: '>$1<'
      },
      // Fix missing closing quotes in JSX attributes
      {
        pattern: /(\w+)="([^"]*)\s*$/gm,
        replacement: '$1="$2"'
      },
      // Fix missing semicolons after imports
      {
        pattern: /import\s+[^;]*;\s*$/gm,
        replacement: (match) => {
          if (!match.endsWith(';')) {
            return match + ';';
          }
          return match;
        }
      },
      // Fix missing closing parentheses
      {
        pattern: /\)\s*\)\s*}\s*$/gm,
        replacement: ')\n  )\n}'
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g,
        replacement: '<$1$2>$3</$1>\n  )'
      }
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Additional cleanup
    // Remove duplicate semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix common JSX issues
    content = content.replace(/<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g, '<$1 className={$2}>');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed function parameters
    content = content.replace(/\(\{\s*(\w+)\s*\}\s*:\s*\{\s*(\w+):\s*"([^"]+)"\s*\)/g, '({ $1 }: { $2: $3 })');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g, 
      (match, name, body) => {
        if (!body.includes('return')) {
          return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
        }
        return match;
      }
    );

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\s*$/gm, '"$1"');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed JSX expressions
    content = content.replace(/return\s*\(\s*<(\w+)>([^<]*)<\/\1>\s*<(\w+)>([^<]*)<\/\3>\s*\)/g, 
      'return (\n    <>\n      <$1>$2</$1>\n      <$3>$4</$3>\n    </>\n  )');

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

function main() {
  console.log('Starting final syntax fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Final syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };