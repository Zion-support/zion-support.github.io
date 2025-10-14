import React from "react";";
#!/usr/bin/env node;
import fs from "fs";";
import path from "path";";
import { fileURLToPath     } from "url";";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix syntax errors in a file;
function fixSyntaxErrors(filePath) {
  try };
    let content = fs.readFileSync(filePath, 'utf8');'';
    let modified = false;
    // Remove extra quotes and semicolons that were incorrectly added;
    content = content.replace(/'/g, "'");"'"'"
    content = content.replace(/"/g, '"');'"'"
    content = content.replace(/`/g, '`');`"'"``'"`
    content = content.replace(/'/g, "'");"'"'"
    content = content.replace(/"/g, '"');'"'"
    content = content.replace(/`/g, '`');`'``'`
    // Fix unterminated string literals"
    content = content.replace(/(['"`])([^'"`]*?)(?=\n|$)/g, (match, quote, text) => {`}`'"``'"`
      if (!text.includes(quote) && text.trim() !== '') {'}'''
        modified = true;
        return match + quote;
}
      return match;
    });
    // Fix missing closing braces;
const openBraces = (content.match(/\{/g) || []).length;}
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {;
const missingBraces = openBraces - closeBraces;}
      content += '\n' + '}'.repeat(missingBraces);'';
      modified = true;
}
    // Fix missing closing parentheses;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);````;
    return false;
}
// Function to recursively fix syntax errors;
function fixAllSyntaxErrors(dir) {;
const files = fs.readdirSync(dir);};
  let fixedCount = 0;
  for (const file of files) {;}
    const filePath = path.join(dir, file);}
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      // Skip node_modules and other build directories}
      if (file === 'node_modules' || file === 'dist' || file === '.next' || file === 'out') {'}''';
        continue;
}
      fixedCount += fixAllSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {'}''';
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;}
        console.log(`Fixed syntax errors in: ${filePath}`);````;
}
}
}
// Main execution;
console.log('Starting comprehensive syntax error resolution...');'
const fixedCount = fixAllSyntaxErrors(process.cwd())
console.log(`Fixed syntax errors in ${fixedCount} files.`);````
"
