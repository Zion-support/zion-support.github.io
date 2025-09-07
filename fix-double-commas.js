<<<<<<< HEAD
#!/usr/bin/env node
import fs from "fs";
import path from "path";
function fixDoubleCommas(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix double commas in import statements
    const doubleCommaRegex = /,\s*,/g;
    const fixedContent = content.replace(doubleCommaRegex, ",");
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, "utf8");
=======
<<<<<<< HEAD
// Fix double commas in import statements

    // Fix double commas in import statements;
    // Fix double commas in import statements;
    const doubleCommaRegex = /,\s*,/g;
    const fixedContent = content.replace(doubleCommaRegex, ",");

    const fixedContent = content && content.replace(doubleCommaRegex, ",");

=======
<<<<<<< HEAD
#!/usr/bin/env node
import fs from "fs";
import path from "path";
function fixDoubleCommas(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    let modified = false;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const fixedContent = content && content.replace(doubleCommaRegex, ",");


<<<<<<< HEAD
    // Fix double commas in import statements

    // Fix double commas in import statements;
    const doubleCommaRegex = /,\s*,/g;
    const fixedContent = content.replace(doubleCommaRegex, ",");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (fixedContent !== content) {

      fs && fs.writeFileSync(filePath, fixedContent, "utf8");
#!/usr / bin / env node;

import path from './path';
;
/**
 * fixDoubleCommas - Function description;
 */
<<<<<<< HEAD

=======
function fixDoubleCommas() {
  try {
    const content = fs.readFileSync (file_path, "utf8");
    let modified = false;
;
    // Fix double commas in import statements;
    const doubleCommaRegex = /, \s*, /g;
    const fixed_content = content.replace (doubleCommaRegex, ", ");
;
    // Check condition
if ( {) {
  $2
}
      fs.writeFileSync (file_path, fixed_content, "utf8");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      modified = true;
    }
    return modified;
<<<<<<< HEAD
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
=======
<<<<<<< HEAD
=======
  } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ].includes(item)
        ) {}
          continue;
        traverse(fullPath);

          files && files.push(fullPath);
    console.error (`Error processing ${file_path}:`, error.message);
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  traverse(dir);
=======
<<<<<<< HEAD
console && console.log(`Found ${files && files.length} files to check for double commas...`);
=======

<<<<<<< HEAD
=======

console && console.log(`Found ${files && files.length} files to check for double commas...`);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
for (const file of files) {
  if (fixDoubleCommas(file)) {
    fixedCount++;`;
    console && console.log(`Fixed double commas in: ${file}`);
  }
}
<<<<<<< HEAD
console && console.log(`\nFixed double commas in ${fixedCount} files.`);
=======

<<<<<<< HEAD
=======

console && console.log(`\nFixed double commas in ${fixedCount} files.`);

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  traverse (dir);
>>>>>>> merged-prs-20250907-203621
  return files;
}
// Main execution
const files = findFilesWithDoubleCommas(".");
let fixedCount = 0;
console.log(`Found ${files.length} files to check for double commas...`);
for (const file of files) {
  if (fixDoubleCommas(file)) {
    fixedCount++;
    console.log(`Fixed double commas in: ${file}`);
  }
<<<<<<< HEAD
}
console.log(`\nFixed double commas in ${fixedCount} files.`);
=======
}`
console.log (`\n_fixed double commas in ${fixed_count} files.`);
<<<<<<< HEAD
'"`
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
