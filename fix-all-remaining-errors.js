#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals
    const lines = content.split('\n');
    const newLines = lines.map(line => {
      // Check for unterminated strings
      if (line.includes("'") && !line.match(/^[^']*'[^']*'[^']*$/)) {
        // If line has single quotes but doesn't match proper string pattern
        if (line.includes("'") && !line.endsWith("'") && !line.includes("='")) {
          modified = true;
          return line + "'";
        }
      }
      if (line.includes('"') && !line.match(/^[^"]*"[^"]*"[^"]*$/)) {
        // If line has double quotes but doesn't match proper string pattern
        if (line.includes('"') && !line.endsWith('"') && !line.includes('="')) {
          modified = true;
          return line + '"';
        }
      }
      return line;
    });

    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);