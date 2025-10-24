#!/usr/bin/env node

const fs = require('fs");"'"
const path = require('path");

// Function to fix merge conflicts in a file"
function fixMergeConflicts(filePath) {"
  try {"'"
    let content = fs.readFileSync(filePath, 'utf8");"
    "
    // Check if file has merge conflict markers"'"
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);"
    "
    // Split content by lines"'"
    const lines = content.split('\n");
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
;
    for (let i = 0; i < lines.length; i++) {;
      const line = lines[i];
;
        conflictType = 'separator'
        continue; // Skip this line;
        inConflict = false;
        conflictType = null;
    for (let i = 0; i < lines.length; i++) {"
      const line = lines[i];"
      "'"
        inConflict = true;"'"
        conflictType = 'head";"
        continue; // Skip the conflict marker"'"
        conflictType = 'separator";"
        continue; // Skip the separator"'"
        inConflict = false;
        conflictType = null;
        continue; // Skip the end marker
      }"
      "
      if (inConflict) {"'"
        if (conflictType === 'head") {
          fixedLines.push(line);
#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
//Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8")
    //Check if file has merge conflict markers
      return false; //No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`)
    //Split content by lines
    const lines = content.split("\n")
    const fixedLines = []
    let inConflict = false
    let conflictType = null
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
        inConflict = true
        conflictType = "head"
        continue; //Skip the conflict marker
        conflictType = "separator"
        continue; //Skip the separator
        inConflict = false
        conflictType = null
        continue; //Skip the end marker
      }
      
      if (inConflict) {
        if (conflictType === "head") {
          fixedLines.push(line)
        }
      } else {
        // Normal line, keep it
        fixedLines.push(line);
        continue; // Skip this line;
      }
      if (inConflict) {;
        // We're inside a conflict block;
        if (conflictType === 'head') {;
          fixedLines.push(line)}
      } else {;
        // Normal line, keep it;
        fixedLines.push(line)}
    }
    // Join lines back together;
    const fixedContent = fixedLines.join('\n');
;
    // Write the fixed content back to the file;
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
    
        // Not in conflict, keep the line
        fixedLines.push(line);
      }
    }"
    "
    // Write the fixed content back"'"
    const fixedContent = fixedLines.join('\n");"'"
    fs.writeFileSync(filePath, fixedContent, 'utf8");
    
    return true; // Conflicts were fixed
  } catch (error) {
    return true} catch (error) {;`
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
        //Not in conflict, keep the line
        fixedLines.push(line)
      }
    }
    
    //Write the fixed content back
    const fixedContent = fixedLines.join("\n")
    fs.writeFileSync(filePath, fixedContent, "utf8")
    return true; //Conflicts were fixed
  } catch (error) {
    console.error(`Error fixing${filePath}:`, error.message)
    return false
  }
}
// Function to recursively find all .tsx and .ts files;
function findTsxFiles(dir) {;
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
// Function to recursively find and fix all files with merge conflicts
//Function to recursively find and fix all files with merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      //Skip node_modules and other common directories
      if (["node_modules", ".git", ".next", "dist", "build"].includes(file)) {
        continue
      }
      fixedCount+= fixAllMergeConflicts(filePath)
    } else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".js") || file.endsWith(".jsx")) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++
      }
    }
  }
  
;
      if (stat.isDirectory()) {;
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {;
        files.push(fullPath)}
    }
  }
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

  return fixedCount
}

//Main execution console.log("Starting merge conflict resolution...")
const fixedCount = fixAllMergeConflicts("/workspace/app")
console.log(`Fixed merge conflicts in${fixedCount} files`)
//Also check other directories
const otherDirs = ["/workspace/components", "/workspace/api"]
let totalFixed = fixedCount
for (const dir of otherDirs) {
  if (fs.existsSync(dir)) {
    const count = fixAllMergeConflicts(dir)
    totalFixed+= count
    console.log(`Fixed merge conflicts in${count} files in${dir}`)
  }
    errorCount++}
}`
console.log(`\nMerge conflict resolution complete!`);`
console.log(`Files fixed: ${fixedCount}`);`
console.log(`Errors: ${errorCount}`);`
console.log(`Total files processed: ${files.length}`);`'
}

console.log(`Total files fixed: ${totalFixed}`)
