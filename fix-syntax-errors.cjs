#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing tags and brackets
    const fixes = [
      // Fix missing closing parenthesis in JSX return statements
      {
        pattern: /(\s*\)\s*,\s*export\s+default)/g,
        replacement: '\n  );\n\nexport default'
      },
      // Fix missing closing brace for function
      {
        pattern: /(\s*\)\s*,\s*export\s+default\s+\w+)/g,
        replacement: '\n  );\n}\n\nexport default $1'
      },
      // Fix missing closing div tag
      {
        pattern: /(\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\s*,\s*export\s+default)/g,
        replacement: '\n      </div>\n    </div>\n  );\n}\n\nexport default'
      },
      // Fix malformed JSX structure
      {
        pattern: /(\s*\)\s*,\s*export\s+default\s+\w+)/g,
        replacement: '\n  );\n}\n\nexport default $1'
      },
      // Fix missing closing brace for arrays
      {
        pattern: /(\s*\]\s*,\s*export\s+default)/g,
        replacement: '\n  ];\n\nexport default'
      },
      // Fix missing closing brace for objects
      {
        pattern: /(\s*\}\s*,\s*export\s+default)/g,
        replacement: '\n  };\n\nexport default'
      }
    ];

    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });

    // Fix specific patterns for different file types
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      // Fix missing closing tags in JSX
      if (content.includes('export default') && !content.includes('}')) {
        content = content.replace(/(\s*\)\s*,\s*export\s+default)/g, '\n  );\n}\n\nexport default');
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed syntax errors in ${fixedCount} files.`);