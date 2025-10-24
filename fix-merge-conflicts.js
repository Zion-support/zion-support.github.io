<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
;
    // Check if file has merge conflict markers;
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {;
      return false; // No conflicts to fix;
    }
    console.log(`Fixing merge conflicts in: ${filePath}`);
;
    // Split content by lines;
    const lines = content.split('\n');
=======
#!/usr/bin/env node

const fs = require('fs");"'"
const path = require('path");

// Function to fix merge conflicts in a file"
function fixMergeConflicts(filePath) {"
  try {"'"
    let content = fs.readFileSync(filePath, 'utf8");"
    "
    // Check if file has merge conflict markers"'"
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>")) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);"
    "
    // Split content by lines"'"
    const lines = content.split('\n");
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
<<<<<<< HEAD
    
<<<<<<< HEAD
    for (let i = 0; i < lines.length; i++) {
=======
;
    for (let i = 0; i < lines.length; i++) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
      const line = lines[i];
;
      if (line.includes('<<<<<<< HEAD')) {;
        inConflict = true;
        conflictType = 'head'
        continue; // Skip this line;
      } else if (line.includes('=======')) {;
        conflictType = 'separator'
        continue; // Skip this line;
      } else if (line.includes('>>>>>>>')) {;
        inConflict = false;
        conflictType = null;
<<<<<<< HEAD
        continue; // Skip this line
      }
      
      if (inConflict) {
        // We're inside a conflict block
        if (conflictType === 'head') {
=======
    for (let i = 0; i < lines.length; i++) {"
      const line = lines[i];"
      "'"
      if (line.includes('<<<<<<< HEAD")) {"
        inConflict = true;"'"
        conflictType = 'head";"
        continue; // Skip the conflict marker"'"
      } else if (line.includes('=======")) {"'"
        conflictType = 'separator";"
        continue; // Skip the separator"'"
      } else if (line.includes('>>>>>>>")) {
        inConflict = false;
        conflictType = null;
        continue; // Skip the end marker
      }"
      "
      if (inConflict) {"'"
        if (conflictType === 'head") {
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
          // Keep the HEAD version (before =======)
          fixedLines.push(line);
        }
        // Skip the other branch (after =======)
      } else {
<<<<<<< HEAD
        // Normal line, keep it
        fixedLines.push(line);
=======
        continue; // Skip this line;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
      }
      if (inConflict) {;
        // We're inside a conflict block;
        if (conflictType === 'head') {;
          // Keep the HEAD version (before =======);
          fixedLines.push(line)}
        // Skip the other branch (after =======);
      } else {;
        // Normal line, keep it;
        fixedLines.push(line)}
    }
    // Join lines back together;
    const fixedContent = fixedLines.join('\n');
;
    // Write the fixed content back to the file;
    fs.writeFileSync(filePath, fixedContent, 'utf8');
<<<<<<< HEAD
    return true;
    
=======
        // Not in conflict, keep the line
        fixedLines.push(line);
      }
    }"
    "
    // Write the fixed content back"'"
    const fixedContent = fixedLines.join('\n");"'"
    fs.writeFileSync(filePath, fixedContent, 'utf8");
    
    return true; // Conflicts were fixed
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
  } catch (error) {
=======
    return true} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
<<<<<<< HEAD

<<<<<<< HEAD
// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir) {
=======
// Function to recursively find all .tsx and .ts files;
function findTsxFiles(dir) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
=======
// Function to recursively find and fix all files with merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    "
    if (stat.isDirectory()) {"
      // Skip node_modules and other common directories"'"
      if (['node_modules', '.git', '.next', 'dist', 'build"].includes(file)) {
        continue;"
      }"
      fixedCount += fixAllMergeConflicts(filePath);"'"
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx")) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
      }
    }
  }
  
<<<<<<< HEAD
=======
;
      if (stat.isDirectory()) {;
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {;
        files.push(fullPath)}
    }
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  traverse(dir);
  return files}
// Main execution;
console.log('Starting merge conflict resolution...');
;
const appDir = '/workspace/app'
const files = findTsxFiles(appDir);
;
let fixedCount = 0;
let errorCount = 0;
;`
console.log(`Found ${files.length} TypeScript files to check`);
;
for (const file of files) {;
  try {;
    const wasFixed = fixMergeConflicts(file);
    if (wasFixed) {;
      fixedCount++}
  } catch (error) {;`
    console.error(`Error processing ${file}:`, error.message);
<<<<<<< HEAD
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
=======
  return fixedCount;
}"
"
// Main execution"'"
console.log('Starting merge conflict resolution...");"'"
const fixedCount = fixAllMergeConflicts('/workspace/app");
console.log(`Fixed merge conflicts in ${fixedCount} files`);"
"
// Also check other directories"'"
const otherDirs = ['/workspace/components', '/workspace/api"];
let totalFixed = fixedCount;

for (const dir of otherDirs) {
  if (fs.existsSync(dir)) {
    const count = fixAllMergeConflicts(dir);
    totalFixed += count;
    console.log(`Fixed merge conflicts in ${count} files in ${dir}`);
  }
}"
"
console.log(`Total files fixed: ${totalFixed}`);"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
=======
    errorCount++}
}`
console.log(`\nMerge conflict resolution complete!`);`
console.log(`Files fixed: ${fixedCount}`);`
console.log(`Errors: ${errorCount}`);`
console.log(`Total files processed: ${files.length}`);`'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
