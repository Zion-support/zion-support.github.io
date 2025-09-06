<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const fs = require ('fs'),
const path = require ('path'),
console.log ('🔍 Debugging Next.js project structure...'),
=======

=======

console.log('🔍 Debugging Next.js project structure...'),;

// Check if we're in a valid Next.js project;
console.log ('📁 Current directory:', process.cwd ()),
console.log ('📄 Package.json exists:', fs.exists_sync ('package.json')),
console.log ('📄 Next.config.js exists:', fs.exists_sync ('next.config.js')),
console.log ('📁 Pages directory exists:', fs.exists_sync ('pages')),
console.log ('📁 Components directory exists:', fs.exists_sync ('components')),
// Check package.json;

if (fs.existsSync('package.json')) {;


  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found'),;
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');

}
// Check pages directory structure;

if (fs.existsSync('pages')) {;


  console.log('📄 Pages found:', pages.length),;
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));

}
// Check for any problematic files;

console.log('🔍 Checking for problematic files...'),;


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
const fs = require('fs');
const path = require('path');

console.log('🔍 Debugging Next.js project structure...');

// Check if we're in a valid Next.js project
console.log('📁 Current directory:', process.cwd());
console.log('📄 Package.json exists:', fs.existsSync('package.json'));
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js'));
console.log('📁 Pages directory exists:', fs.existsSync('pages'));
console.log('📁 Components directory exists:', fs.existsSync('components'));

// Check package.json
if (fs.existsSync('package.json')) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found');
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');
}

// Check pages directory structure
if (fs.existsSync('pages')) {
  const pages = fs.readdirSync('pages');
  console.log('📄 Pages found:', pages.length);
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));
}

// Check for any problematic files
console.log('🔍 Checking for problematic files...');
const problematicFiles = [];
const allFiles = getAllFiles('.', ['.tsx', '.ts', '.jsx', '.js']);

for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
    if (content.includes('') |content.includes('
const fs = require('fs'),;
const path = require('path'),;
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======

const fs = require ('fs'),
const path = require ('path'),
console.log ('🔍 Debugging Next.js project structure...'),


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
console.log('🔍 Debugging Next.js project structure...'),;
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd()),;
console.log('📄 Package.json exists:', fs.existsSync('package.json')),;
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js')),;
console.log('📁 Pages directory exists:', fs.existsSync('pages')),;
console.log('📁 Components directory exists:', fs.existsSync('components')),;
// Check package.json;
<<<<<<< HEAD

if (fs.existsSync('package.json')) {;
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found'),;
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');

}
// Check pages directory structure;

if (fs.existsSync('pages')) {;
<<<<<<< HEAD
  const pages = fs.readdirSync('pages');
  const pages = fs.readdirSync('pages'),;
  const pages = fs.readdirSync('pages');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  const pages = fs.readdirSync('pages'),;
  const pages = fs.readdirSync('pages');


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  console.log('📄 Pages found:', pages.length),;
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));

}
// Check for any problematic files;

console.log('🔍 Checking for problematic files...'),;
<<<<<<< HEAD
const problematicFiles = [];
const problematicFiles = [],;
const problematicFiles = [];
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
const problematicFiles = [],;
const problematicFiles = [];
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (content.includes('') || content.includes('
}
}
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
      problematicFiles.push(file);
    }
  } catch (error) {
    // Skip files that can't be read
  }
}

console.log('⚠️  Files with merge conflicts:', problematicFiles.length);
if (problematicFiles.length > 0) {
  console.log('Files:', problematicFiles.slice(0, 10));
}

// Function to get all files recursively
function getAllFiles(dir, extensions) {
  let files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories that can't be read
  }
  return files;
}

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
console.log('✅ Debug completed');
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
