#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing closing braces for function calls
  {
    pattern: /(\w+)\s*\(\s*\{[^}]*\s*$/gm,
    replacement: (match, funcName) => {
      // This is a complex pattern, we'll handle it case by case
      return match;
    }
  },
  
  // Fix missing closing parentheses in function calls
  {
    pattern: /(\w+)\s*\(\s*[^)]*,\s*$/gm,
    replacement: (match) => {
      if (!match.includes(')')) {
        return match.replace(/,\s*$/, ')');
      }
      return match;
    }
  },
  
  // Fix missing closing braces in object literals
  {
    pattern: /(\w+:\s*[^,}]+,\s*)+$/gm,
    replacement: (match) => {
      if (!match.includes('}')) {
        return match.replace(/,\s*$/, '}');
      }
      return match;
    }
  },
  
  // Fix missing closing tags in JSX
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: (match, tagName, attributes) => {
      if (!match.includes('</')) {
        return match + `</${tagName}>`;
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const originalContent = content;
    
    // Fix missing closing braces in useEffect
    content = content.replace(
      /useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*$/gm,
      (match) => {
        if (!match.includes('}')) {
          return match + '  });';
        }
        return match;
      }
    );
    
    // Fix missing closing braces in function calls
    content = content.replace(
      /(\w+)\s*\(\s*\{[^}]*\s*$/gm,
      (match) => {
        if (!match.includes('}')) {
          return match + '  });';
        }
        return match;
      }
    );
    
    // Fix missing closing parentheses
    content = content.replace(
      /(\w+)\s*\(\s*[^)]*,\s*$/gm,
      (match) => {
        if (!match.includes(')')) {
          return match.replace(/,\s*$/, ')');
        }
        return match;
      }
    );
    
    // Fix missing closing braces in object literals
    content = content.replace(
      /(\w+:\s*[^,}]+,\s*)+$/gm,
      (match) => {
        if (!match.includes('}')) {
          return match.replace(/,\s*$/, '}');
        }
        return match;
      }
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const appDir = path.join(__dirname, 'app');
  const files = glob.sync('**/*.{ts,tsx}', { cwd: appDir });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(appDir, file);
    if (fixFile(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };