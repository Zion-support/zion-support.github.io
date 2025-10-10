const fs = require('fs');
const path = require('path');

function fixObjectSyntaxInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix object syntax issues
    const fixes = [
      // Fix missing commas in object properties
      { pattern: /(\w+):\s*([^,}]+)\s*}\s*}/g, replacement: '$1: $2\n    },\n  }' },
      // Fix missing commas in array elements
      { pattern: /(\w+)\s*}\s*]/g, replacement: '$1\n    }\n  ]' },
      // Fix semicolons after closing braces in objects
      { pattern: /\}\s*;\s*}/g, replacement: '},\n  }' },
      { pattern: /\}\s*;\s*]/g, replacement: '}\n  ]' },
      // Fix semicolons in object properties
      { pattern: /(\w+):\s*([^,}]+);\s*}/g, replacement: '$1: $2\n    }' },
      // Fix semicolons in array elements
      { pattern: /(\w+);\s*]/g, replacement: '$1\n  ]' },
      // Fix missing commas between object properties
      { pattern: /}\s*{\s*/g, replacement: '},\n    {\n      ' },
      // Fix missing commas between array elements
      { pattern: /]\s*\[\s*/g, replacement: '],\n    [\n      ' },
      // Fix semicolons in JSX attributes
      { pattern: /(\w+)="([^"]*)"\s*;/g, replacement: '$1="$2"' },
      { pattern: /(\w+)=\{([^}]*)\}\s*;/g, replacement: '$1={$2}' },
      // Fix semicolons in function calls
      { pattern: /(\w+)\(([^)]*)\)\s*;/g, replacement: '$1($2)' },
      // Fix semicolons in JSX elements
      { pattern: /<(\w+);/g, replacement: '<$1' },
      { pattern: /<\/(\w+)>;/g, replacement: '</$1>' },
      // Fix standalone semicolons
      { pattern: /^;\s*$/gm, replacement: '' },
      // Fix semicolons after closing braces
      { pattern: /\}\s*;/g, replacement: '}' },
      // Fix semicolons after parentheses
      { pattern: /\)\s*;/g, replacement: ')' },
      // Fix semicolons in JSX text content
      { pattern: />\s*([^<]+);\s*</g, replacement: '>$1<' },
      // Fix semicolons in comments
      { pattern: /\/\/\s*([^;]+);/g, replacement: '// $1' },
      // Fix semicolons in return statements
      { pattern: /return\s*\(/g, replacement: 'return (' },
      // Fix semicolons in JSX fragments
      { pattern: /<>\s*;/g, replacement: '<>' },
      { pattern: /;\s*<\/>/g, replacement: '</>' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed object syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process for object syntax...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixObjectSyntaxInFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed object syntax in ${fixedCount} files.`);