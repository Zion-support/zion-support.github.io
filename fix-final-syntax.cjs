const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Final patterns to fix
const fixes = [
  // Fix unterminated string literals in interfaces
  {
    pattern: /  '}/g,
    replacement: "  };"
  },
  {
    pattern: /}'/g,
    replacement: "};"
  },
  // Fix stray quotes at end of lines
  {
    pattern: /^'$/gm,
    replacement: "}"
  },
  // Fix missing closing braces in interfaces
  {
    pattern: /interface\s+\w+\s*{[\s\S]*?'$/gm,
    replacement: function(match) {
      return match.slice(0, -1) + "};"
    }
  },
  // Fix missing closing braces in type definitions
  {
    pattern: /type\s+\w+\s*=\s*{[\s\S]*?'$/gm,
    replacement: function(match) {
      return match.slice(0, -1) + "};"
    }
  },
  // Fix missing closing braces in object literals
  {
    pattern: /const\s+\w+\s*=\s*{[\s\S]*?'$/gm,
    replacement: function(match) {
      return match.slice(0, -1) + "};"
    }
  },
  // Fix missing closing braces in function returns
  {
    pattern: /return\s*{[\s\S]*?'$/gm,
    replacement: function(match) {
      return match.slice(0, -1) + "};"
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        if (fix.pattern.test(content)) {
          content = content.replace(fix.pattern, fix.replacement);
          modified = true;
        }
      }
    });
    
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

// Find all TypeScript and TSX files
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);