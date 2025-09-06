<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
console.log('🔍 Debugging Next.js project structure...');
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd());
console.log('📄 Package.json exists:', fs.existsSync('package.json'));
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js'));
console.log('📁 Pages directory exists:', fs.existsSync('pages'));
console.log('📁 Components directory exists:', fs.existsSync('components'));
// Check package.json;
if (fs.existsSync('package.json')) {const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
  console.log('📦 Next.js version:', packageJson.dependencies?.next |'Not found');
  console.log('📦 React version:', packageJson.dependencies?.react |'Not found');
}
// Check pages directory structure;
if (fs.existsSync('pages')) {const pages = fs.readdirSync('pages');
  console.log('📄 Pages found:', pages.length);
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') |p.includes('_app')));
}
// Check for any problematic files;
console.log('🔍 Checking for problematic files...');
const problematicFiles = [];
<<<<<<< HEAD
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']);
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('') |content.includes('
=======
<<<<<<< HEAD
const allFiles = getAllFiles ('.', ['.tsx.ts.jsx.js']);
catch (error) {
  //Skip files that can't be read 

}console.log ('⚠️ Files with merge conflicts:', problematicFiles.length);
if (problematicFiles.length > 0) {
  console.log ('Files:', problematicFiles.slice (0, 10) ) 
}//Function to get all files recursively function getAllFiles (dir, extensions) {
  let files = [];
try {
  const items = fs.readdirSync (dir);
else if (extensions.some (ext => item.endsWith (ext) ) ) {
  files.push (fullPath) 

}catch (error) {
  // Skip directories that can't be read 
}return files;
}console.log ('✅ Debug completed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
const fs = require('fs'),;
const path = require('path'),;
=======
const fs = require('fs');
const path = require('path');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
console.log('🔍 Debugging Next.js project structure...'),;
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd()),;
console.log('📄 Package.json exists:', fs.existsSync('package.json')),;
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js')),;
console.log('📁 Pages directory exists:', fs.existsSync('pages')),;
console.log('📁 Components directory exists:', fs.existsSync('components')),;
// Check package.json;
if (fs.existsSync('package.json')) {;
<<<<<<< HEAD
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
=======
<<<<<<< HEAD
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
=======
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found'),;
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');
}
;
// Check pages directory structure;
if (fs.existsSync('pages')) {;
<<<<<<< HEAD
  const pages = fs.readdirSync('pages');
=======
<<<<<<< HEAD
  const pages = fs.readdirSync('pages'),;
=======
  const pages = fs.readdirSync('pages');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  console.log('📄 Pages found:', pages.length),;
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));
}
;
// Check for any problematic files;
console.log('🔍 Checking for problematic files...'),;
<<<<<<< HEAD
const problematicFiles = [];
=======
<<<<<<< HEAD
const problematicFiles = [],;
=======
const problematicFiles = [];
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (content.includes('') || content.includes('
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {;
      problematicFiles.push(file);
    }
  } catch (error) {;
    // Skip files that can't be read;
  }
}
;
console.log('⚠️  Files with merge conflicts:', problematicFiles.length),;
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
        files.push(fullPath);
      }
    }
  } catch (error) {;
    // Skip directories that can't be read;
  }
  return files;
}
;
console.log('✅ Debug completed'),;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
