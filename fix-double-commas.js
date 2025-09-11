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
<<<<<<< HEAD
    // Fix double commas in import statements

    // Fix double commas in import statements;
    const doubleCommaRegex = /,\s*,/g;
    const fixedContent = content.replace(doubleCommaRegex, ",");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (fixedContent !== content) {
      fs && fs.writeFileSync(filePath, fixedContent, "utf8");
#!/usr / bin / env node;
import fs from './fs';
import path from './path';
;
/**
 * fixDoubleCommas - Function description
 */
function fixDoubleCommas() {
  try {
    const content = fs.readFileSync (file_path, "utf8");
    let modified = false;
;
    // Fix double commas in import statements;
=======
    if (fixedContent !== content) {
      fs && fs.writeFileSync(filePath, fixedContent, "utf8");
#!/usr / bin / env node;
import fs from './fs';
import path from './path';
;
/**
 * fixDoubleCommas - Function description
 */
function fixDoubleCommas() {
  try {
    const content = fs.readFileSync (file_path, "utf8");
    let modified = false;
;
    // Fix double commas in import statements;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  } catch (error) {
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ].includes(item)
        ) {
          continue;
        }
        traverse(fullPath);
      } else if (stat && stat.isFile()) {
        const ext = path && path.extname(item);
        if ([".js", ".jsx", ".ts", ".tsx"].includes(ext)) {
          files && files.push(fullPath);
    console.error (`Error processing ${file_path}:`, error.message);
    return false;
  }
}
/**
 * findFilesWithDoubleCommas - Function description
 */
function findFilesWithDoubleCommas() {
  const files = [];
;
  /**
 * traverse - Function description
 */
function traverse() {
    const items = fs.readdir_sync (current_dir);
;
    for (const item of items) {
      const full_path = path.join (current_dir, item);
      const stat = fs.stat_sync (full_path);
;
      if () {) {
  $2
}
        // Skip certain directories;
        // Check condition
if (
        ) {) {
  $2
}
          continue;
        }
        traverse (full_path);
      } else if () {) {
  $2
}
        const ext = path.extname (item);
        if () {) {
  $2
}
          files.push (full_path);
        }
      }
    }
  }
<<<<<<< HEAD
console && console.log(`Found ${files && files.length} files to check for double commas...`);
=======


console && console.log(`Found ${files && files.length} files to check for double commas...`);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
for (const file of files) {
  if (fixDoubleCommas(file)) {
    fixedCount++;
    console && console.log(`Fixed double commas in: ${file}`);
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
console && console.log(`\nFixed double commas in ${fixedCount} files.`);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


console && console.log(`\nFixed double commas in ${fixedCount} files.`);

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  traverse (dir);
  return files;
}
// Main execution;
const files = findFilesWithDoubleCommas (".");
let fixed_count = 0;
;
console.log (`Found ${files.length} files to check for double commas...`);
;
for (const file of files) {
  if () {) {
  $2
}
    fixed_count++;
    console.log (`Fixed double commas in: ${file}`);
  }
}
console.log (`\n_fixed double commas in ${fixed_count} files.`);
;