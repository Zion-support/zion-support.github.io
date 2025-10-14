#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix all remaining syntax issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in import statements
    content = content.replace(/import\s+.*?\s+from\s+['"]([^'"]*?)['"];?['"]/gm, (match, importPath) => {
      modified = true;
}
      return `import ${match.split('from')[0].split('import')[1].trim()} from "${importPath}";`;
    });

    // Fix double semicolons
    content = content.replace(/;/g, ';');
    
    // Fix extra quotes at the end of lines
    content = content.replace(/;['"]$/gm, ';');
    
    // Fix specific patterns
    content = content.replace(/from\s+['"]([^'"]*?)['"];?['"]/gm, (match, importPath) => {
      modified = true;
      return `from "${importPath}";`;
    });

    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)"([^>]*?)>/g, (match, className, rest) => {
      if (rest.includes('>') && !rest.includes('/>')) {
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
      if (!match.includes('}')) {
        modified = true;
        return match + '\n}';
      }
      return match;
    });

    // Fix specific patterns found in the codebase
    content = content.replace(/import\s+([^;]+?);['"]/gm, (match, importPart) => {
      modified = true;
      return `import ${importPart};`;
    });

    // Fix JSON-like structures with extra quotes
    content = content.replace(/"([^"]*?)":\s*"([^"]*?)",?['"]/gm, (match, key, value) => {
      modified = true;
      return `"${key}": "${value}",`;
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
    './app/**/*.{ts,tsx,js,jsx}',
    './*.{ts,tsx,js,jsx}',
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

export { fixFile };*/