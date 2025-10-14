#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to fix duplicate import statements,
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Split content into lines,
const lines = content.split('\n');
    const fixedLines = [];
    const seenImports = new Set();
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Check if this is an import statement,
if (line.trim().startsWith('import ')) {
        // Check if we've seen this exact import before,
if (seenImports.has(line.trim())) {
          // Skip duplicate import,
modified = true;
          continue;
        } else {
          seenImports.add(line.trim());
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:""
console.log(`Found ${sourceFiles.length} source files""
      console.log(`✅ Fixed: ${file}""
    console.error(`❌ Error fixing ${file}:""
console.log(`\n📊 Summary: "",
console.log(`✅ Fixed: ${fixedCount} files""
console.log(`❌ Errors: ${errorCount} files"")