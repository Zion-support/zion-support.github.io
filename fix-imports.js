<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");
"
function fixImports(filePath) {"
  try {"'"
    let content = fs.readFileSync(filePath, 'utf8");
    let originalContent = content;"
    "
    // Count the depth of the file"'"
    const relativePath = path.relative('./app", filePath);"'"
    const depth = relativePath.split('/").length - 1;"
    "
    // Create the correct import path"'"
    const importPath = '../'.repeat(depth) + 'components/Footer";"
    "
    // Fix the import"'"
    content = content.replace(/import Footer from '\.\.\/components\/Footer';/g, `import Footer from '${importPath}";`);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
=======
const fs = require('fs');
const path = require('path');
;
function fixImports(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
;
    // Count the depth of the file;
    const relativePath = path.relative('./app', filePath);
    const depth = relativePath.split('/').length - 1;
;
    // Create the correct import path;
    const importPath = '../'.repeat(depth) + 'components/Footer'
;
    // Fix the import;
    content = content.replace(/import Footer from '\.\.\/components\/Footer';/g, `import Footer from '${importPath}';`);
;
    // Only write if content changed;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content);`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
      console.log(`Fixed imports in: ${filePath}`);
      return true}
    return false} catch (error) {;`
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
function findAndFixFiles(dir) {;
  const files = fs.readdirSync(dir);
<<<<<<< HEAD
  
  for (const file of files) {
    const filePath = path.join(dir, file);"
    const stat = fs.statSync(filePath);"
    "'"
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules") {"
      findAndFixFiles(filePath);"'"
    } else if (file.endsWith('page.tsx")) {
      fixImports(filePath);
    }
  }
}"
"
// Start fixing from the app directory"'"
findAndFixFiles('./app");"
"'"
console.log('Import fixing completed!");"
"'"
=======
;
  for (const file of files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
      findAndFixFiles(filePath)} else if (file.endsWith('page.tsx')) {;
      fixImports(filePath)}
  }
}
// Start fixing from the app directory;
findAndFixFiles('./app');
;
console.log('Import fixing completed!');
;`'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
