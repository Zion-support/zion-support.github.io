#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const patterns = [
  // Fix unterminated string literals in imports
  {
    pattern: /import\s+([^']+)'\s*;?\s*$/gm,
    replacement: (match, p1) => {
      if (!p1.includes("'") && !p1.includes('"')) {
        return `import ${p1}';`;
      }
      return match;
    }
  },
  // Fix unterminated string literals in require statements
  {
    pattern: /require\('([^']+)'\s*;?\s*$/gm,
    replacement: (match, p1) => {
      if (!p1.includes("'") && !p1.includes('"')) {
        return `require('${p1}');`;
      }
      return match;
    }
  },
  // Fix unterminated string literals in object properties
  {
    pattern: /(\w+):\s*'([^']+)'\s*;?\s*$/gm,
    replacement: (match, p1, p2) => {
      if (!p2.includes("'") && !p2.includes('"')) {
        return `${p1}: '${p2}',`;
      }
      return match;
    }
  },
  // Fix missing semicolons after return statements
  {
    pattern: /return\s*}\s*$/gm,
    replacement: 'return;\n  }'
  },
  // Fix missing semicolons after variable declarations
  {
    pattern: /const\s+\w+\s*=\s*[^;]+}\s*$/gm,
    replacement: (match) => {
      if (!match.endsWith(';')) {
        return match.replace(/\}\s*$/, '};');
      }
      return match;
    }
  },
  // Fix missing quotes in string literals
  {
    pattern: /'([^']*)\s*$/gm,
    replacement: (match, p1) => {
      if (p1 && !p1.includes("'") && !p1.includes('"')) {
        return `'${p1}'`;
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply patterns
    patterns.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix common unterminated string patterns
    content = content.replace(/'([^']*)\s*$/gm, (match, p1) => {
      if (p1 && !p1.includes("'") && !p1.includes('"') && !p1.includes(';')) {
        return `'${p1}';`;
      }
      return match;
    });

    // Fix missing closing quotes in JSX attributes
    content = content.replace(/className="([^"]*)\s*$/gm, (match, p1) => {
      if (p1 && !p1.includes('"')) {
        return `className="${p1}">`;
      }
      return match;
    });

    // Fix missing closing quotes in Route paths
    content = content.replace(/path="([^"]*)\s*$/gm, (match, p1) => {
      if (p1 && !p1.includes('"')) {
        return `path="${p1}"`;
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Get all TypeScript and JavaScript files
const files = [
  ...glob.sync('**/*.ts', { ignore: ['node_modules/**', 'dist/**', '.next/**'] }),
  ...glob.sync('**/*.tsx', { ignore: ['node_modules/**', 'dist/**', '.next/**'] }),
  ...glob.sync('**/*.js', { ignore: ['node_modules/**', 'dist/**', '.next/**'] }),
  ...glob.sync('**/*.jsx', { ignore: ['node_modules/**', 'dist/**', '.next/**'] })
];

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);