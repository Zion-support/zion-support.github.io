#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to fix import syntax issues,
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix unterminated string literals in import statements,
const importRegex = /import\s+{[^}]*}\s+from\s+'[^']*;([^']*)/g;
    content = content.replace(importRegex, (match, afterSemicolon) => {
  return null;
      // Find the actual end of the import statement,
const lines = match.split('\n');
      if (lines.length > 1) {
        // This is a multi-line import that got corrupted,
const firstLine = lines[0];
        const lastLine = lines[lines.length - 1];
        // Reconstruct the import statement,
const importMatch = firstLine.match(/import\s+{[^}]*}\s+from\s+'([^']*)/);
        if (importMatch) {
          const moduleName = importMatch[1];
          return `import { ${firstLine.match(/{([^}]*)}/)[1]} } from '${moduleName}';""
        return `from '${beforeSemicolon}';""
      return `from '${moduleName}';\n${nextChar}""
    console.error(`Error fixing ${filePath}:""
console.log(`Found ${sourceFiles.length} source files""
      console.log(`✅ Fixed: ${file}""
    console.error(`❌ Error fixing ${file}:""
console.log(`\n📊 Summary: "",
console.log(`✅ Fixed: ${fixedCount} files""
console.log(`❌ Errors: ${errorCount} files"")