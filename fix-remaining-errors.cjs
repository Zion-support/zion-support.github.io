const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix CommonJS files that should use ES modules
    if (filePath.includes('.eslintrc') || filePath.includes('.prettierrc')) {
      // Skip these files as they should remain CommonJS
      return false;
    }

    // Fix unterminated string literals
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix unterminated strings at the end of lines
      if (line.match(/import.*from\s+['"][^'"]*$/)) {
        lines[i] = line + '"';
        modified = true;
      }
      
      // Fix malformed import statements
      if (line.match(/import\s+.*from\s+['"][^'"]*['"]\s*$/)) {
        lines[i] = line.replace(/(['"])[^'"]*\1\s*$/, '$1react$1;');
        modified = true;
      }
    }

    if (modified) {
      content = lines.join('\n');
    }

    // Fix other common patterns
    const fixes = [
      // Fix missing React import in JSX files
      { 
        pattern: /^(?!import React)(?!import.*React).*$/m, 
        replacement: (match, offset, string) => {
          if (string.includes('<') && string.includes('>') && !string.includes('import React')) {
            return "import React from 'react';\n" + match;
          }
          return match;
        }
      },
      // Fix malformed JSX
      { pattern: /<(\w+)\.(\w+)/g, replacement: "<$1.$2" },
      // Fix missing semicolons
      { pattern: /(import [^;]+)(?<!;)$/gm, replacement: "$1;" },
      // Fix unterminated strings
      { pattern: /'([^']*)$/gm, replacement: "'$1'" },
      { pattern: /"([^"]*)$/gm, replacement: "\"$1\"" },
    ];

    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
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

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixRemainingErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax error fixes...');
const fixedCount = fixFilesInDirectory('./__tests__');
const fixedCount2 = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount + fixedCount2} files`);