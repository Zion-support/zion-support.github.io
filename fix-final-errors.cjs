const fs = require('fs');
const path = require('path');

// Function to fix final syntax errors
function fixFinalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const fixes = [
      // Fix imports with extra quotes and semicolons
      { pattern: /import\s+([^;]+);''/g, replacement: "import $1;" },
      { pattern: /import\s+([^;]+);';'/g, replacement: "import $1;" },
      { pattern: /import\s+([^;]+);'"/g, replacement: "import $1;" },
      { pattern: /import\s+([^;]+);''/g, replacement: "import $1;" },
      // Fix malformed from statements
      { pattern: /from\s+['"]([^'"]*)['"];''/g, replacement: "from '$1';" },
      { pattern: /from\s+['"]([^'"]*)['"];';'/g, replacement: "from '$1';" },
      { pattern: /from\s+['"]([^'"]*)['"];'"/g, replacement: "from '$1';" },
      // Fix malformed describe and test statements
      { pattern: /describe\(['"]([^'"]*)['"];\s*{/g, replacement: "describe('$1', () => {" },
      { pattern: /test\(['"]([^'"]*)['"];\s*{/g, replacement: "test('$1', () => {" },
      // Fix malformed JSX
      { pattern: /<(\w+)test/g, replacement: "<$1Test" },
      // Fix malformed expect statements
      { pattern: /expect\(([^)]*)\)\}/g, replacement: "expect($1);" },
      // Fix malformed closing braces
      { pattern: /}\}/g, replacement: "});" },
      { pattern: /}\s*'/g, replacement: "});" },
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
    } else if (file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFinalErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting final syntax error fixes...');
const fixedCount = fixFilesInDirectory('./__tests__');
console.log(`Fixed ${fixedCount} files`);