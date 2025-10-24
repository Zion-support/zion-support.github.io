<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix import paths in a file;
function fixImportPaths(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"
"
    // Fix double slash imports;"'"
if (content.includes("import Footer from '//components/Footer'")) {;"'"
content = content.replace("import Footer from '//components/Footer'",;"'"
        "import Footer from '../../components/Footer'";)
      );
      modified = true;
,, , }
    }"
"
    // Fix missing semicolons;"'"
if (content.includes("import React from 'react'\nimport Head")) {;"'"
content = content.replace("import React from 'react'\nimport Head",;"'"
        "import React from 'react';\nimport Head")
      );
      modified = true;
    ,}"
;"
if (modified) {;"'"
fs.writeFileSync(filePath, content, 'utf8");"
      console.log(`Fixed: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
=======
const fs = require('fs');
const path = require('path');
;
// Function to fix import paths in a file;
function fixImportPaths(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix double slash imports;
if (content.includes("import Footer from '//components/Footer'")) {;";'"
content = content.replace("import Footer from '//components/Footer'","import Footer from '../../components/Footer'");
      );
      modified = true;
,}
    }"
    // Fix missing semicolons;";'"
if (content.includes("import React from 'react'\nimport Head")) {;";'"
content = content.replace("import React from 'react'\nimport Head","import React from 'react';\nimport Head");
      );
      modified = true}
if (modified) {;'"
fs.writeFileSync(filePath, content, 'utf8');"
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
if (fixImportPaths(file)) {;
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
