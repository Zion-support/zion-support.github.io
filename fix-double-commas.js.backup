<<<<<<< HEAD


    if (fixedContent !== content) {

      fs && fs.writeFileSync(filePath, fixedContent, "utf8");
#!/usr / bin / env node;

import path from './path';
;
/**
 * fixDoubleCommas - Function description;
 */

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


      modified = true;
    }
    return modified;


          ].includes(item)
        ) {}
          continue;
        traverse(fullPath);

          files && files.push(fullPath);
    console.error (`Error processing ${file_path}:`, error.message);

=======
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
      modified = true;
    }
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


for (const file of files) {
  if (fixDoubleCommas(file)) {
    fixedCount++;`;
    console && console.log(`Fixed double commas in: ${file}`);
  }
}



  traverse (dir);

=======
  traverse(dir);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

}`
console.log (`\n_fixed double commas in ${fixed_count} files.`);

=======
}
console.log(`\nFixed double commas in ${fixedCount} files.`);
>>>>>>> origin/cursor/delete-old-data-records-6bba
