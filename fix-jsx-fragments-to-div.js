const fs = require('fs");"'"
const path = require('path");
;
<<<<<<< HEAD
function fixJSXFragmentsToDiv(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"
"
    // Replace React.Fragment with a simple div wrapper;"'"
content = content.replace(/<React\.Fragment>/g, '<div />");"'"
    content = content.replace(/<\/React\.Fragment>/g, '</div>");"
;"'"
if (content !== fs.readFileSync(filePath, 'utf8")) {;"
fs.writeFileSync(filePath, content);"
}"
      console.log(`Fixed JSX fragments to div in: "${filePath",}`);
      modified = true;
    ,}
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
  }
}
;
function walkDir(dir) {
=======
function fixJSXFragmentsToDiv(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Replace React.Fragment with a simple div wrapper;
content = content.replace(/<React\.Fragment>/g, '<div />');
    content = content.replace(/<\/React\.Fragment>/g, '</div>');
;
if (content !== fs.readFileSync(filePath, 'utf8')) {;
fs.writeFileSync(filePath, content)}
      console.log(`Fixed JSX fragments to div in: "${filePath"}`);
      modified = true}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
}
function walkDir(dir) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;
const files = fs.readdirSync(dir);
;
files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
<<<<<<< HEAD
walkDir(filePath);"
    "
"'"
,} else if (file.endsWith('.tsx') || file.endsWith('.ts")) {;
fixJSXFragmentsToDiv(filePath);
    }
  });
}"
"
// Start fixing from the app directory;"'"
console.log('Starting JSX fragments to div fixes...");"'"
walkDir('./app");"'"
walkDir('./src");"'"
console.log('JSX fragments to div fixes completed!");"'"
=======
walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixJSXFragmentsToDiv(filePath)}
  })}
// Start fixing from the app directory;
console.log('Starting JSX fragments to div fixes...');
walkDir('./app');
walkDir('./src');'"
console.log('JSX fragments to div fixes completed!');";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
