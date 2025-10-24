<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

=======
const fs = require('fs');
const path = require('path');
;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
// Function to fix extra closing divs;
function fixExtraDivs(content) {;
;
<<<<<<< HEAD
let fixed = content;"
"
  // Fix extra closing divs at the end of the file;"'"
const lines = fixed.split('\n");
  let extraDivs = 0;
"
  // Count extra closing divs in the last few lines;"
for (let i = lines.length - 1; i >= 0; i--) {;"'"
if (lines[i,].trim() === '</div>") {;"
extraDivs++;"
    "'"
} else if (lines[i,].trim() && !lines[i,].trim().startsWith('//")) {;
break;
    }
=======
let fixed = content;
;
  // Fix extra closing divs at the end of the file;
const lines = fixed.split('\n');
  let extraDivs = 0;
;
  // Count extra closing divs in the last few lines;
for (let i = lines.length - 1; i >= 0; i--) {;
if (lines[i].trim() === '</div>') {;
extraDivs++} else if (lines[i].trim() && !lines[i].trim().startsWith('//')) {;
break}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  }
  // Remove extra closing divs (keep, only, one);
if(extraDivs > 1) {  ;
<<<<<<< HEAD
const extraDivsToRemove = extraDivs - 1;"
    let removed = 0;"
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) { ;"'"
if (lines[i,].trim() === '</div>") {;
lines.splice(i, 1);
        removed++;"
      , , , }"
    }"'"
    fixed = lines.join('\n");
  ,}
;
return fixed;
}

// Function to process a single file;
function processFile(filePath) {"
;"
try{;"'"
const content = fs.readFileSync(filePath, 'utf8");
    const fixed = fixExtraDivs(content);"
;"
if (content !== fixed) {;"'"
fs.writeFileSync(filePath, fixed, 'utf8");"
}"
      console.log(`Fixed: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
=======
const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) { ;
if (lines[i].trim() === '</div>') {;
lines.splice(i, 1);
        removed++;
      , }
    }'
    fixed = lines.join('\n')}
return fixed}
// Function to process a single file;
function processFile(filePath) {;
;
try{;
const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixExtraDivs(content);
;
if (content !== fixed) {;
fs.writeFileSync(filePath, fixed, 'utf8')}
      console.log(`Fixed: "${filePath"}`);
      return true}
    return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
;
const files = [];
;
function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
;
for (const item, of, items) {;
<<<<<<< HEAD
const fullPath = path.join(currentDir, item);"
      const stat = fs.statSync(fullPath);"
;"'"
if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules") {;"
traverse(fullPath);"
      "'"
,} else if (item.endsWith('.tsx")) {;
files.push(fullPath);
      }
=======
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
traverse(fullPath)} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    }
  }
traverse(dir);
<<<<<<< HEAD
  return files;
}"
"
// Main execution;"'"
const appDir = '/workspace/app";
=======
  return files}
// Main execution;
const appDir = '/workspace/app'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const tsxFiles = findTsxFiles(appDir);
;`
console.log(`Found ${tsxFiles.length} .tsx files to process`);
;
let fixedCount = 0;
for(const file, of, tsxFiles) { ;
if (processFile(file)) {;
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
