#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix extra quotes at the end of import statements
function fixExtraQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra quotes at the end of import statements
    const extraQuotesRegex = /import\s+.*?\s+from\s+['"]([^'"]*?)['"];?['"]/gm;
    content = content.replace(extraQuotesRegex, (match, importPath) => {
      modified = true;
}
      return `import ${match.split('from')[0].split('import')[1].trim()} from "${importPath}";`;
    });

    // Fix extra quotes at the end of any line ending with ;
    content = content.replace(/;['"]$/gm, ';');

    // Fix extra quotes at the end of any line ending with ;
    content = content.replace(/;['"]$/gm, ';');

    // Fix specific pattern: from "path";
    content = content.replace(/from\s+['"]([^'"]*?)['"];?['"]/gm, (match, importPath) => {
      modified = true;
      return `from "${importPath}";`;
    });

    // Fix specific pattern: import statement with extra quotes
    content = content.replace(/import\s+([^;]+?);['"]/gm, (match, importPart) => {
      modified = true;
      return `import ${importPart};`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed extra quotes in: ${filePath}`);
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
      if (fixExtraQuotes(file)) {
        fixedFiles++;
      }
    }
  }

  console.log(`\nProcessed ${totalFiles} files, fixed extra quotes in ${fixedFiles} files`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixExtraQuotes };*/