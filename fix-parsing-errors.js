#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common parsing errors in TypeScript files
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing opening brace for function definitions
      content = content.replace(/(const \w+Page: React\.FC = \(\) =>)\s*$/, '$1 {');
      modified = true;
    }

    // Fix 2: Fix malformed object literals that start with just a property
    const malformedObjectPattern = /(\s+)(\w+):\s*\[([^\]]*)\]\s*,\s*$/gm;
      // This is a complex fix that needs to be handled more carefully
      return match;
    });

    // Fix 3: Fix missing opening braces for object literals
        return `  ${propName}: [${arrayContent}],`;
      }
      return match;
    });

    // Fix 4: Fix malformed array declarations
      return `${indent}${propName}: [`;
    });

    // Fix 5: Fix missing closing braces and brackets
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;

      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

      const missingBrackets = openBrackets - closeBrackets;
      content += '\n' + ']'.repeat(missingBrackets);
      modified = true;
    }

    // Fix 6: Fix malformed function calls and object destructuring
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*$/gm, 'const $1 = () => {');
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*(\w+):\s*\[/gm, 'const $1 = () => {\n  $2: [');

    // Fix 7: Fix missing semicolons and commas in imports
    content = content.replace(/import\s+([^;]+);\s*,/g, 'import $1,');
    content = content.replace(/import\s+([^,]+),\s*\{([^}]+)\}\s*from/g, 'import $1, {$2} from');

    // Fix 8: Fix malformed JSX return statements
      content = content.replace(/return\s*\(/g, 'return (');
    }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
  const fullPath = path.join(__dirname, file);
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);
