<<<<<<< HEAD
=======

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
const fs = require('fs');
const path = require('path');
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
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']);
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('') |content.includes('
const fs = require('fs'),;
const path = require('path'),;
const fs = require('fs');
const path = require('path');
console.log('🔍 Debugging Next.js project structure...'),;
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd()),;
console.log('📄 Package.json exists:', fs.existsSync('package.json')),;
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js')),;
console.log('📁 Pages directory exists:', fs.existsSync('pages')),;
console.log('📁 Components directory exists:', fs.existsSync('components')),;
// Check package.json;
if (fs.existsSync('package.json')) {;
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found'),;
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');

}
// Check pages directory structure;

if (fs.existsSync('pages')) {;
  const pages = fs.readdirSync('pages');
  const pages = fs.readdirSync('pages'),;
  const pages = fs.readdirSync('pages');
  console.log('📄 Pages found:', pages.length),;
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));

}
// Check for any problematic files;

console.log('🔍 Checking for problematic files...'),;
const problematicFiles = [];
const problematicFiles = [],;
const problematicFiles = [];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;


<<<<<<< HEAD
<<<<<<< HEAD
    if (content.includes('') || content.includes('
}
}
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
      problematicFiles.push(file);
    }
  } catch (error) {;
    // Skip files that can't be read;
  }
}


console.log($2);
if (problematicFiles.length > 0) {
  console.log('Files:', problematicFiles.slice(0, 10))
}
// Function to get all files recursively,
  function getAllFiles(dir, extensions) {
  let files = $2;
  try {
    const items = fs.readdirSync($2);
    for (const item of items) {
      const fullPath = path.join($2);
      const stat = fs.statSync($2);
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
console.log('✅ Debug completed'),;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
