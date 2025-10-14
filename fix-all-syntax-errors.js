#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Function to fix unterminated string literals and malformed imports
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in import statements
    const importFixRegex = /import\s+.*?\s+from\s+['"]([^'"]*?)['"]?;?$/gm;
    content = content.replace(importFixRegex, (match, importPath) => {
      if (!match.endsWith(';')) {'
        modified = true;
        return match + ';';
}
}
      }
      return match;
    });

    // Fix unterminated string literals in import statements (more comprehensive)
    const importFixRegex2 = /import\s+.*?\s+from\s+['"]([^'"]*?)['"]?$/gm;
    content = content.replace(importFixRegex2, (match) => {
      if (!match.endsWith(';')) {'
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix single quotes that should be double quotes in import statements
    content = content.replace(/import\s+.*?\s+from\s+'([^']*?)'([^;]*)$/gm, (match, importPath, suffix) => {'
      if (!match.endsWith(';')) {'
        modified = true;
        return `import ${match.split('from')[0].split('import')[1].trim()} from "${importPath}";`;
      }
      return match;
    });

    // Fix malformed JSX closing tags
    content = content.replace(/<(\w+)><\/\1>/g, '<$1 />');
    
    // Fix unterminated string literals in general
    content = content.replace(/(['"])([^'"]*?)\1?$/gm, (match, quote, content) => {"
      if (!match.endsWith(quote)) {
        modified = true;
        return match + quote;
      }
      return match;
    });

    // Fix specific patterns found in the codebase
    content = content.replace(/from\s+['"]([^'"]*?)['"]?$/gm, (match, importPath) => {"
      if (!match.endsWith(';')) {'
        modified = true;
        return `from "${importPath}";`;
      }
      return match;
    });

    // Fix malformed JSX structure
    content = content.replace(/<(\w+)><\/\1>/g, '<$1 />');
    
    // Fix JSX expressions that should have one parent element
    content = content.replace(/return\s*\(\s*<(\w+)><\/\1>\s*<(\w+)><\/\2>/g, 'return (\n    <>\n      <$1 />\n      <$2 />\n    </>\n  )');

    // Fix specific patterns for React components
    content = content.replace(/export\s+default\s+(\w+);?$/gm, (match, componentName) => {
      if (!match.endsWith(';')) {'
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix 'use client' directive'
    content = content.replace(/'use client;?$/gm, '"use client";');

    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)"([^>]*?)>/g, (match, className, rest) => {"
      if (rest.includes('>') && !rest.includes('/>')) {'
        return match;
      }
      return match;
    });

    // Fix unterminated comments
    content = content.replace(/\/\*([^*]|\*[^/])*$/gm, (match) => {
      modified = true;
      return match + '*/';
    });

    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
      if (!match.includes('}')) {'
        modified = true;
        return match + '\n}';
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
async function main() {
  const patterns = [
}
}
    './app/**/*.{ts,tsx,js,jsx}','
    './*.{ts,tsx,js,jsx}','
    './scripts/**/*.{ts,tsx,js,jsx}'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
    
    for (const file of files) {
      totalFiles++;
      if (fixFile(file)) {
        fixedFiles++;
      }
    }
  }

  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
*/
export { fixFile };*/