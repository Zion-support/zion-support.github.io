<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");
"
// Function to remove dynamic exports from 'a file";
function removeDynamicExport(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");"
"
    // Check if dynamic export exists;"'"
if (content.includes('export const dynamic")) {"
      // Remove the dynamic export line;"'"
content = content.replace(/export const dynamic = 'force-dynamic';\n?/g, '");
;"
fs.writeFileSync(filePath, content);"
}"
      console.log(`Removed dynamic export from: "${filePath",;}`);
      return true;
    }
;
return false;
  } catch (error) {;
=======
const fs = require('fs');
const path = require('path');
;
// Function to remove dynamic exports from a file;
function removeDynamicExport(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
;
    // Check if dynamic export exists;
if (content.includes('export const dynamic')) {;
      // Remove the dynamic export line;
content = content.replace(/export const dynamic = 'force-dynamic';\n?/g, '');
;
fs.writeFileSync(filePath, content)}
      console.log(`Removed dynamic export from: "${filePath"}`);
      return true}
return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find and fix all .tsx files;
function fixAllFiles(dir) {;
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file, of, files) {;
const filePath = path.join(dir, file);
<<<<<<< HEAD
    const stat = fs.statSync(filePath);"
;"
if (stat.isDirectory()) {"
      // Skip node_modules and other directories we don"t want to process;"'"
if (!['node_modules', '.next', '.git', 'temp-problematic-pages"].includes(file)) {;
fixedCount += fixAllFiles(filePath);"
      "
, }"'"
    } else if (file.endsWith('.tsx")) {;
=======
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
      // Skip node_modules and other directories we don't want to process;
if (!['node_modules', '.next', '.git', 'temp-problematic-pages'].includes(file)) {;
fixedCount += fixAllFiles(filePath)}'
    } else if (file.endsWith('.tsx')) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
if (removeDynamicExport(filePath)) {;
fixedCount++}
    }
  }
<<<<<<< HEAD
;
return fixedCount;
}"
"
// Start fixing from the app directory;"'"
const appDir = path.join(__dirname, 'app");"'"
console.log('Starting to remove dynamic exports...");"
const fixedCount = fixAllFiles(appDir);"
console.log(`Removed dynamic exports from ${fixedCount,;} files`);"'"
=======
return fixedCount}
// Start fixing from the app directory;
const appDir = path.join(__dirname, 'app');
console.log('Starting to remove dynamic exports...');
const fixedCount = fixAllFiles(appDir);`"
console.log(`Removed dynamic exports from ${fixedCount} files`);";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
