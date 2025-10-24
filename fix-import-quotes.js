#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific pattern of extra quotes after semicolons
    const patterns = [
      // Fix import statements with extra quotes
      /import\s+[^;]*;\s*"/g,
      // Fix any line ending with ;"
      /;\s*"/g,
      // Fix any line ending with just a quote
      /"\s*$/gm,
      // Fix unterminated string literals in JSX
      /className="([^"]*)\s*$/gm,
      /href="([^"]*)\s*$/gm,
      /src="([^"]*)\s*$/gm,
      /alt="([^"]*)\s*$/gm,
      /title="([^"]*)\s*$/gm,
      // Fix extra quotes in text content
      />\s*([^<]*)"\s*</gm,
      // Fix missing closing quotes in JSX attributes
      /(\w+)="([^"]*)\s*$/gm
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern, (match) => {
        if (pattern === /import\s+[^;]*;\s*"/g) {
          return match.replace(/;\s*"/, ';');
        } else if (pattern === /;\s*"/g) {
          return match.replace(/;\s*"/, ';');
        } else if (pattern === /"\s*$/gm) {
          return match.replace(/"\s*$/, '');
        } else if (pattern === /className="([^"]*)\s*$/gm) {
          return match.replace(/className="([^"]*)\s*$/, 'className="$1"');
        } else if (pattern === /href="([^"]*)\s*$/gm) {
          return match.replace(/href="([^"]*)\s*$/, 'href="$1"');
        } else if (pattern === /src="([^"]*)\s*$/gm) {
          return match.replace(/src="([^"]*)\s*$/, 'src="$1"');
        } else if (pattern === /alt="([^"]*)\s*$/gm) {
          return match.replace(/alt="([^"]*)\s*$/, 'alt="$1"');
        } else if (pattern === /title="([^"]*)\s*$/gm) {
          return match.replace(/title="([^"]*)\s*$/, 'title="$1"');
        } else if (pattern === />\s*([^<]*)"\s*</gm) {
          return match.replace(/>\s*([^<]*)"\s*</, '>$1<');
        } else if (pattern === /(\w+)="([^"]*)\s*$/gm) {
          return match.replace(/(\w+)="([^"]*)\s*$/, '$1="$2"');
        }
        return match;
      });
      
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

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
  console.log('Starting import quote fixes...');
  
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
  console.log('Import quote fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };