<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix import paths based on directory depth
function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    let fixed = false;
    
    // Calculate the depth of the file
    const pathParts = filePath.split('/');
    const depth = pathParts.length - 2; // Subtract 2 for 'app' and 'page.tsx'
    
    // Generate the correct relative path
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
      relativePath += '../';
    }
    
    // Fix Navigation import
    if (content.includes("import Navigation from '../components/Navigation';")) {
      content = content.replace(
        "import Navigation from '../components/Navigation';",
        `import Navigation from '${relativePath}components/Navigation';`
      );
      fixed = true;
    }
    
    // Fix Footer import
    if (content.includes("import Footer from '../components/Footer';")) {
      content = content.replace(
        "import Footer from '../components/Footer';",
        `import Footer from '${relativePath}components/Footer';`
      );
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports: ${filePath}`);
    }
=======
    
    // Count directory depth
    const pathParts = filePath.split('/');
    const depth = pathParts.filter(part => part === 'app').length > 0 ? 
      pathParts.slice(pathParts.indexOf('app') + 1, -1).length : 0;
    
    // Fix Footer import based on depth
    if (depth === 2) { // ai-services/something/page.tsx
      content = content.replace("import Footer from '../components/Footer'", "import Footer from '../../components/Footer'");
    } else if (depth === 3) { // micro-saas/something/page.tsx
      content = content.replace("import Footer from '../components/Footer'", "import Footer from '../../../components/Footer'");
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports: ${filePath}`);
>>>>>>> origin/main
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all page files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
<<<<<<< HEAD
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
=======
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
        files.push(fullPath);
      }
>>>>>>> origin/main
    }
  }
  
  traverse(dir);
  return files;
}

<<<<<<< HEAD
// Fix all page files
const appDir = './app';
const files = findPageFiles(appDir);

console.log(`Found ${files.length} page files to fix...`);

files.forEach(fixImportPaths);

console.log('Done fixing import paths!');
=======
// Main execution
console.log('Starting import path fixes...');

const appDir = '/workspace/app';
const files = findPageFiles(appDir);

console.log(`Found ${files.length} page files to process`);

files.forEach(filePath => {
  fixImportPaths(filePath);
});

console.log('Import path fixes completed!');
=======
const fs = require('fs");"'"
const path = require('path");

// Function to fix import paths in a file;
function fixImportPaths(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"

    // Fix double slash imports;"'"
if (content.includes("import Footer from '//components/Footer")) {;"'"
content = content.replace("import Footer from '//components/Footer",;"'"
        "import Footer from '../../components/Footer";)'
      );
      modified = true;
,, , }
    }"

    // Fix missing semicolons;"'"
if (content.includes("import React from 'react\nimport Head")) {;"'"
content = content.replace("import React from 'react\nimport Head",;"'"
        "import React from 'react;\nimport Head")'
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

// Main execution;"'"
const appDir = path.join(__dirname, 'app");
const tsxFiles = findTsxFiles(appDir);
;`
console.log(`Found ${tsxFiles.length} .tsx files to check`);
;
let fixedCount = 0;
for(const file, of, tsxFiles) { ;
if (fixImportPaths(file)) {;
fixedCount++;
  , }
}"
;"
console.log(`Fixed ${fixedCount} files`);"'"
>>>>>>> origin/main
>>>>>>> origin/main
