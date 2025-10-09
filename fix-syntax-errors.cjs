const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing commas in object literals
  {
    pattern: /(\s+)(name|role|image|bio|title|description|icon):\s*['"][^'"]*['"],?\s*\n\s*(name|role|image|bio|title|description|icon):/g,
    replacement: '$1$2: $3,\n$1$4:'
  },
  // Fix missing closing braces in JSX
  {
    pattern: /(\s+)(<[^>]+>)\s*\n\s*\);/g,
    replacement: '$1$2\n$1);'
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*\);/g,
    replacement: '<$1$2>$3</$1>);'
  },
  // Fix duplicate function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\n\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g,
    replacement: 'const $1: React.FC = () => {'
  },
  // Fix missing closing div tags
  {
    pattern: /<div([^>]*)>\s*([^<]*)\s*\);/g,
    replacement: '<div$1>$2</div>);'
  },
  // Fix malformed JSX expressions
  {
    pattern: /(\s+)([^<>\s]+)\s*>\s*([^<]+)\s*\);/g,
    replacement: '$1<$2>$3</$2>);'
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
    // Fix missing commas in arrays
    content = content.replace(/(\s+)([^,\n]+)\s*\n\s*([^,\n]+)\s*\n\s*]/g, '$1$2,\n$1$3\n  ]');
    
    // Fix missing closing parentheses
    content = content.replace(/(\s+)([^)]+)\s*\n\s*\);/g, '$1$2\n$1);');
    
    // Fix unclosed JSX elements
    content = content.replace(/(\s+)(<[^>]+>)\s*([^<]+)\s*\);/g, '$1$2$3</div>);');
    
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

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findTsxFiles(srcDir);

console.log(`Found ${files.length} TypeScript/TSX files`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);