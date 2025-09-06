const fs = require('fs');
const path = require('path');
;
<<<<<<< HEAD
console.log('🔍 Debugging Next.js project structure...');
;
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd());
console.log('📄 Package.json exists:', fs.existsSync('package.json'));
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js'));
console.log('📁 Pages directory exists:', fs.existsSync('pages'));
console.log('📁 Components directory exists:', fs.existsSync('components'));
=======
console.log(' Debugging Next.js project structure...');
;
// Check if we're in a valid Next.js project;
console.log(' Current directory:', process.cwd());
console.log(' Package.json exists:', fs.existsSync('package.json'));
console.log(' Next.config.js exists:', fs.existsSync('next.config.js'));
console.log(' Pages directory exists:', fs.existsSync('pages'));
console.log(' Components directory exists:', fs.existsSync('components'));
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
// Check package.json;
if (fs.existsSync('package.json')) {;
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
<<<<<<< HEAD
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found');
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
;
// Check pages directory structure;
if (fs.existsSync('pages')) {;
  const pages = fs.readdirSync('pages');
<<<<<<< HEAD
  console.log('📄 Pages found:', pages.length);
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));
=======
  console.log(' Pages found:', pages.length);
  console.log(' Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
;
// Check for any problematic files;
const problematicFiles = [];
const allFiles = getAllFiles('.', ['.tsx', '.ts', '.jsx', '.js']);
;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      problematicFiles.push(file);    }
  } catch (error) {;
    // Skip files that can't be read;
  }
}
;
<<<<<<< HEAD
console.log('⚠️  Files with merge conflicts:', problematicFiles.length);
=======
console.log('  Files with merge conflicts:', problematicFiles.length);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
if (problematicFiles.length > 0) {;
  console.log('Files:', problematicFiles.slice(0, 10));
}
;
// Function to get all files recursively;
function getAllFiles(dir, extensions) {;
  let files = [];
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);if (problematicFiles.length > 0) {
  console.log ('Files:', problematicFiles.slice (0, 10) ) 
}//Function to get all files recursively function getAllFiles (dir, extensions) {
  let files = [];
try {
  const items = fs.readdirSync (dir);
for (const item of items) {
  const fullPath = path.join (dir, item);
const stat = fs.statSync (fullPath);
if (stat.isDirectory () && !item.startsWith ('.') && item !== 'node modules') {
  files = files.concat (getAllFiles (fullPath, extensions) ) 
}else if (extensions.some (ext => item.endsWith (ext) ) ) {
  files.push (fullPath) 
}

// Function to get all files recursively
function getAllFiles(dir, extensions) {
  let files = [],
  try {
    const items = fs.readdirSync(dir),
    for (const item of items) {
      const fullPath = path.join(dir, item),
      const stat = fs.statSync(fullPath),
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions))
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  } catch (error) {;
    // Skip directories that can't be read;
  }
  return files
}
;
<<<<<<< HEAD
console.log('✅ Debug completed');}
}catch (error) {
  // Skip directories that can't be read 
}return files;
}console.log ('✅ Debug completed');
=======
console.log(' Debug completed');}
}catch (error) {
  // Skip directories that can't be read 
}return files;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
