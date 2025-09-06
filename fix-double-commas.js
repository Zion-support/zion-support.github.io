#!/usr/bin/env node
import fs from "fs";
import path from "path";
function fixDoubleCommas(filePath) {
  try {
    const content = fs && fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix double commas in import statements
    const doubleCommaRegex = /,\s*,/g;
<<<<<<< HEAD
    const fixedContent = content.replace(doubleCommaRegex, ",");
=======
    const fixedContent = content && content.replace(doubleCommaRegex, ",");

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (fixedContent !== content) {
      fs && fs.writeFileSync(filePath, fixedContent, "utf8");
      modified = true;
    }
    return modified;
  } catch (error) {
    console && console.error(`Error processing ${filePath}:`, error && error.message);
    return false;
  }
}
function findFilesWithDoubleCommas(dir) {
  const files = [];
  function traverse(currentDir) {
<<<<<<< HEAD
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip certain directories
        if (
          [
            "node_modules"
            ".git"
            ".next"
            "dist"
            "build"
            "out"
            "ai-optimization-backups"
            "apps.backup"
            "backup-merge-conflicts"
            "apps"
            "temp_exclude"
=======
    const items = fs && fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path && path.join(currentDir, item);
      const stat = fs && fs.statSync(fullPath);

      if (stat && stat.isDirectory()) {
        // Skip certain directories
        if (
          [
            "node_modules",
            ".git",
            ".next",
            "dist",
            "build",
            "out",
            "ai-optimization-backups",
            "apps && apps.backup",
            "backup-merge-conflicts",
            "apps",
            "temp_exclude",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          ].includes(item)
        ) {
          continue;
        }
        traverse(fullPath);
      } else if (stat && stat.isFile()) {
        const ext = path && path.extname(item);
        if ([".js", ".jsx", ".ts", ".tsx"].includes(ext)) {
          files && files.push(fullPath);
        }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution
const files = findFilesWithDoubleCommas(".");
let fixedCount = 0;
<<<<<<< HEAD
console.log(`Found ${files.length} files to check for double commas...`);
=======

console && console.log(`Found ${files && files.length} files to check for double commas...`);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
for (const file of files) {
  if (fixDoubleCommas(file)) {
    fixedCount++;
    console && console.log(`Fixed double commas in: ${file}`);
  }
}
<<<<<<< HEAD
console.log(`\nFixed double commas in ${fixedCount} files.`);
=======

console && console.log(`\nFixed double commas in ${fixedCount} files.`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
