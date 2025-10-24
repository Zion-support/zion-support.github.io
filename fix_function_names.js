<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix function names that start with numbers;
function fixFunctionNames(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;
"
    // Fix function names that start with numbers;"
content = content.replace(/export default function (\d+[a-zA-Z,]*)\(\)/g, (match, name) => {;"'"
const fixedName = 'Page" + name.charAt(0).toUpperCase() + name.slice(1);
      modified = true;
,}
      return `export default function ${fixedName;}()`;
    });
;"
if (modified) {;"
fs.writeFileSync(filePath, content);"
      console.log(`Fixed function name in: "${filePath",;}`);
    }
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
  }
}"
"
// Get all page files;"'"
const appDir = path.join(__dirname, 'app");
=======
const fs = require('fs');
const path = require('path');
;
// Function to fix function names that start with numbers;
function fixFunctionNames(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix function names that start with numbers;
content = content.replace(/export default function (\d+[a-zA-Z]*)\(\)/g, (match, name) => {;
const fixedName = 'Page' + name.charAt(0).toUpperCase() + name.slice(1);
      modified = true}
      return `export default function ${fixedName}()`});
;
if (modified) {;
fs.writeFileSync(filePath, content);`
      console.log(`Fixed function name in: "${filePath"}`)}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
}
// Get all page files;
const appDir = path.join(__dirname, 'app');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const pageFiles = [];
;
function findPageFiles(dir) {;
;
const files = fs.readdirSync(dir);
  files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
<<<<<<< HEAD
findPageFiles(filePath);"
    "
"'"
,} else if(file = == 'page.tsx") {   ;
=======
findPageFiles(filePath)} else if(file = == 'page.tsx') {   ;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
pageFiles.push(filePath);
    ,, }
  })}
findPageFiles(appDir);
;
// Fix all page files;
pageFiles.forEach(fixFunctionNames);
<<<<<<< HEAD
;"
console.log(`Processed ${pageFiles.length} page files`);"
"'"
=======
;`
console.log(`Processed ${pageFiles.length} page files`);"
";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
