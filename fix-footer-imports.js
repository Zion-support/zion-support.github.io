<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix Footer import paths;
function fixFooterImports(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"
"
    // Fix incorrect Footer import paths;"'"
if (content.includes("import Footer from '../components/Footer'")) {;"'"
content = content.replace("import Footer from '../components/Footer'",;"'"
        "import Footer from '../../components/Footer'";)
      );
      modified = true;
,, , }
    }"
;"
if (modified) {;"'"
fs.writeFileSync(filePath, content, 'utf8");"
      console.log(`Fixed Footer import in: "${filePath",;}`);
      return true;
    }
    return false;
  } catch (error) {;
=======
const fs = require('fs');
const path = require('path');
;
// Function to fix Footer import paths;
function fixFooterImports(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix incorrect Footer import paths;
if (content.includes("import Footer from '../components/Footer'")) {;";'"
content = content.replace("import Footer from '../components/Footer'","import Footer from '../../components/Footer'");
      );
      modified = true;
,}
    }
if (modified) {;'"
fs.writeFileSync(filePath, content, 'utf8');"
      console.log(`Fixed Footer import in: "${filePath"}`);
      return true}
    return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find and fix all .tsx files;
function fixAllFooterImports(dir) {;
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file, of, files) {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
<<<<<<< HEAD
if (stat.isDirectory()) {;"
fixedCount += fixAllFooterImports(filePath);"
    "'"
,} else if (file.endsWith('.tsx")) {;
=======
if (stat.isDirectory()) {;
fixedCount += fixAllFooterImports(filePath)} else if (file.endsWith('.tsx')) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
if (fixFooterImports(filePath)) {;
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
console.log('Starting Footer import fixes...");"
const totalFixed = fixAllFooterImports(appDir);"
console.log(`Fixed ${totalFixed,} files`);"'"
=======
return fixedCount}
// Start fixing from the app directory;
const appDir = path.join(__dirname, 'app');
console.log('Starting Footer import fixes...');
const totalFixed = fixAllFooterImports(appDir);`"
console.log(`Fixed ${totalFixed} files`);";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
