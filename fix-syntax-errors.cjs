const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common patterns
    const fixes = [
      // Fix 'use client';'' -> 'use client';
      { pattern: /'use client';''/g, replacement: "'use client';" },
      // Fix import statements with extra quotes
      { pattern: /import ([^;]+);''/g, replacement: 'import $1;' },
      // Fix empty lines with quotes
      { pattern: /^''$/gm, replacement: '' },
      // Fix semicolons in JSX attributes
      { pattern: /(\w+)='([^']*)';/g, replacement: "$1='$2'" },
      // Fix extra semicolons in JSX
      { pattern: /(\/>);/g, replacement: '$1' },
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

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./components');
const fixedCount2 = fixFilesInDirectory('./pages');
console.log(`Fixed ${fixedCount + fixedCount2} files`);
