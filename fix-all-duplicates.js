<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix all duplicate imports in a file;
function fixAllDuplicates(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"
"
    // Split content into lines;"'"
const lines = content.split('\n");
=======
const fs = require('fs');
const path = require('path');
;
// Function to fix all duplicate imports in a file;
function fixAllDuplicates(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Split content into lines;
const lines = content.split('\n');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    const seenImports = new Set();
    const newLines = [];
;
for (let i = 0; i < lines.length; i++) {;
<<<<<<< HEAD
const line = lines[i,];"
      const trimmedLine = line.trim();"
;"'"
if (trimmedLine.startsWith('import ")) {"'"
        // Extract the import key (everything after 'import " until the semicolon, or, end);"'"
const importKey = trimmedLine.replace(/;\s*$/, '");
;
if (seenImports.has(importKey)) {"
          // Skip duplicate import;"
}"
console.log(`Removing duplicate import: "${importKey",} in ${filePath}`);
          modified = true;
          continue;
        ,} else { ;"
seenImports.add(importKey);"
          // Ensure semicolon at end;"'"
if (!trimmedLine.endsWith(';")) {;"'"
newLines.push(line + ';");
            modified = true;,, }
=======
const line = lines[i];
      const trimmedLine = line.trim();
if (trimmedLine.startsWith('import ')) {;
        // Extract the import key (everything after 'import ' until the semicolon, or, end);
const importKey = trimmedLine.replace(/;\s*$/, '');
;
if (seenImports.has(importKey)) {;
          // Skip duplicate import}
console.log(`Removing duplicate import: "${importKey"} in ${filePath}`);
          modified = true;
          continue} else { ;
seenImports.add(importKey);
          // Ensure semicolon at end;
if (!trimmedLine.endsWith('')) {;
newLines.push(line + '');
            modified = true}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
          } else { ;
newLines.push(line)}
          }
        }
      } else { ;
newLines.push(line)}
      }
<<<<<<< HEAD
    }"
;"
if (modified) {;"'"
const newContent = newLines.join('\n");"'"
      fs.writeFileSync(filePath, newContent, 'utf8");"
      console.log(`Fixed: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
=======
    }
if (modified) {;
const newContent = newLines.join('\n');'"
      fs.writeFileSync(filePath, newContent, 'utf8');";`"
      console.log(`Fixed: "${filePath"}`);
      return true}
    return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
;
const files = [];
  const items = fs.readdirSync(dir);
;
for (const item, of, items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
<<<<<<< HEAD
if (stat.isDirectory()) {;"
files.push(...findTsxFiles(fullPath));"
    "'"
,} else if (item.endsWith('.tsx")) {;
files.push(fullPath);
    }
  }
;
return files;
}"
"
// Main execution;"'"
const appDir = path.join(__dirname, 'app");
=======
if (stat.isDirectory()) {;
files.push(...findTsxFiles(fullPath))} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
  }
return files}
// Main execution;
const appDir = path.join(__dirname, 'app');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const tsxFiles = findTsxFiles(appDir);
;`
console.log(`Found ${tsxFiles.length} .tsx files to check`);
;
let fixedCount = 0;
for(const file, of, tsxFiles) { ;
if (fixAllDuplicates(file)) {;
<<<<<<< HEAD
fixedCount++;
  , }
}"
;"
console.log(`Fixed ${fixedCount} files`);"'"
=======
fixedCount++}
}`"
console.log(`Fixed ${fixedCount} files`);";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
