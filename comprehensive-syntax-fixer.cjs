const fs = require('fs');
const path = require('path');

// Function to clean up severely corrupted files
function cleanCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file is severely corrupted (has multiple duplicated content)
    const lines = content.split('\n');
    if (lines.length > 1000) {
      console.log(`Skipping severely corrupted file: ${filePath}`);
      return false;
    }

    // Fix common patterns
    const fixes = [
      // Fix missing semicolons after imports
      { pattern: /import ([^;]+)(?<!;)$/gm, replacement: "import $1;" },
      // Fix missing semicolons after variable declarations
      { pattern: /(const|let|var)\s+([^=]+)=([^;]+)(?<!;)$/gm, replacement: "$1 $2=$3;" },
      // Fix missing semicolons after function declarations
      { pattern: /(function|const\s+\w+\s*=\s*\([^)]*\)\s*=>)\s*{/gm, replacement: "$1 {" },
      // Fix unterminated strings
      { pattern: /'([^']*)$/gm, replacement: "'$1'" },
      { pattern: /"([^"]*)$/gm, replacement: "\"$1\"" },
      // Fix malformed JSX attributes
      { pattern: /(\w+)="([^"]*)"\s*\/>/g, replacement: '$1="$2" />' },
      // Fix missing React import
      { pattern: /^(?!import React)/m, replacement: "import React from 'react';\n" },
      // Fix malformed export statements
      { pattern: /export default (\w+);''/g, replacement: "export default $1;" },
      // Fix extra quotes and semicolons
      { pattern: /;''/g, replacement: ";" },
      { pattern: /''/g, replacement: "" },
      // Fix malformed JSX
      { pattern: /<(\w+)\.(\w+)/g, replacement: "<$1.$2" },
      // Fix missing closing tags
      { pattern: /<(\w+)([^>]*)>(?!.*<\/\1>)/g, replacement: "<$1$2></$1>" },
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
      if (cleanCorruptedFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files`);