#!/usr/bin/env node,
import fs from "fs";
import path from "path";
function fixDoubleCommas(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix double commas in import statements,
const doubleCommaRegex = /,\s*,/g;
    const fixedContent = content.replace(doubleCommaRegex, ",");
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, "utf8");
      modified = true;
    }
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
function findFilesWithDoubleCommas(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip certain directories,
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
          ].includes(item)
        ) {
          continue;
        }
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if ([".js", ".jsx", ".ts", ".tsx"].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution,
const files = findFilesWithDoubleCommas(".");
let fixedCount = 0;
console.log(`Found ${files.length} files to check for double commas...`);
for (const file of files) {
  if (fixDoubleCommas(file)) {
    fixedCount++;
    console.log(`Fixed double commas in: ${file}`)}
}
console.log(`\nFixed double commas in ${fixedCount} files.`);