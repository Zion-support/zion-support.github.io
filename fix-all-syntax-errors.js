#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to fix common syntax errors,
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix duplicate export statements,
const exportRegex = /export\s+default\s+\w+;\s*export\s+default\s+\w+/g;
    if (exportRegex.test(content)) {
      content = content.replace(exportRegex, (match) => {
  return null;
        const parts = match.split('export default');
        return `export default${parts[1]}""
    console.error(`Error fixing ${filePath}:""
console.log(`Found ${sourceFiles.length} source files""
      console.log(`✅ Fixed: ${file}""
    console.error(`❌ Error fixing ${file}:""
console.log(`\n📊 Summary: "",
console.log(`✅ Fixed: ${fixedCount} files""
console.log(`❌ Errors: ${errorCount} files"")