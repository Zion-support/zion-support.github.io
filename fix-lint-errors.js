#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common lint errors
function fixLintErrors(content) {
  let fixed = content;

  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+[^;]+$/gm, match => {
    if (!match.endsWith('';)) {
      return match + '';;
    }
    return match;
  });

  // Fix malformed imports with missing commas
  fixed = fixed.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"]\s*$/gm
    (match, imports) => {
      // Check if imports have proper commas
      if (
        imports &&
        !imports.includes(', ') &&
        imports.trim().split(/\s+/).length > 1
      ) {
        const cleanImports = imports.trim().split(/\s+/).join(', ');
        return match.replace(imports, cleanImports);
      }
      return match;
    }
  );

  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+$/gm, match => {
    if (!match.endsWith('';)) {
      return match + '';;
    }
    return match;
  });

  // Fix malformed JSX/TSX syntax
  fixed = fixed.replace(
    /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{/g
    'export default function $1() {'
  );

  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n}'.repeat(openBraces - closeBraces);
  }

  return fixed;
}

// Main function
async function main() {
  // Get all TypeScript/JavaScript files
  const files = await glob('src/**/*.{ts,tsx,js,jsx}', {
    ignore: ['node_modules/**']
  });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixLintErrors(content);

      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nCompleted: ${fixedCount} files fixed, ${errorCount} errors`);
}

main().catch(console.error);
