<<<<<<< HEAD
const fs = require ('fs'),
const path = require ('path'),
console.log ('🔍 Debugging Next.js project structure...'),
// Check if we're in a valid Next.js project;
console.log ('📁 Current directory:', process.cwd ()),
console.log ('📄 Package.json exists:', fs.exists_sync ('package.json')),
console.log ('📄 Next.config.js exists:', fs.exists_sync ('next.config.js')),
console.log ('📁 Pages directory exists:', fs.exists_sync ('pages')),
console.log ('📁 Components directory exists:', fs.exists_sync ('components')),
// Check package.json;
if () {) {
  $2
}
  const package_json = JSON.parse (fs.readFileSync ('package.jsonutf8')),
  console.log ('📦 Next.js version:', package_json.dependencies?.next || 'Not found'),
  console.log ('📦 React version:', package_json.dependencies?.react || 'Not found');
=======
const fs = require('fs');
const path = require('path');
;
console.log('🔍 Debugging Next.js project structure...');
;
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd());
console.log('📄 Package.json exists:', fs.existsSync('package.json'));
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js'));
console.log('📁 Pages directory exists:', fs.existsSync('pages'));
console.log('📁 Components directory exists:', fs.existsSync('components'));
;
// Check package.json;
if (fs.existsSync('package.json')) {;
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found');
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// Check pages directory structure;
<<<<<<< HEAD
if () {) {
  $2
}
  const pages = fs.readdir_sync ('pages'),
  console.log ('📄 Pages found:', pages.length),
  console.log ('📄 Main pages:', pages.filter (p => p.includes ('index') || p.includes ('_app')));
=======
if (fs.existsSync('pages')) {;
  const pages = fs.readdirSync('pages');
  console.log('📄 Pages found:', pages.length);
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// Check for any problematic files;
<<<<<<< HEAD
console.log ('🔍 Checking for problematic files...'),
const problematic_files = [],
const all_files = getAllFiles ('.', ['.tsx.ts.jsx.js']),
for (const file of all_files) {
  try {
    const content = fs.readFileSync (file, 'utf8'),
    // Check condition
if (|| content.includes (') {
  $2
}
=======
console.log('🔍 Checking for problematic files...');
const problematicFiles = [];
const allFiles = getAllFiles('.', ['.tsx', '.ts', '.jsx', '.js']);
;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
      problematicFiles.push(file);    }
  } catch (error) {;
    // Skip files that can't be read;
  }
}
;
console.log('⚠️  Files with merge conflicts:', problematicFiles.length);
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
console.log('✅ Debug completed');}
}catch (error) {
  // Skip directories that can't be read 
}return files;
}console.log ('✅ Debug completed');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
