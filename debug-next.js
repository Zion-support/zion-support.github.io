
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
const fs = require ('fs'),
const path = require ('path'),
console.log ('🔍 Debugging Next.js project structure...'),
=======

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
console.log('🔍 Debugging Next.js project structure...'),;

// Check if we're in a valid Next.js project;
console.log ('📁 Current directory:', process.cwd ()),
console.log ('📄 Package.json exists:', fs.exists_sync ('package.json')),
console.log ('📄 Next.config.js exists:', fs.exists_sync ('next.config.js')),
console.log ('📁 Pages directory exists:', fs.exists_sync ('pages')),
console.log ('📁 Components directory exists:', fs.exists_sync ('components')),
// Check package.json;

if (fs.existsSync('package.json')) {;

<<<<<<< HEAD
  const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found'),;
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');

}
// Check pages directory structure;

if (fs.existsSync('pages')) {;

<<<<<<< HEAD
  const pages = fs.readdirSync('pages');


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  console.log('📄 Pages found:', pages.length),;
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));

}
// Check for any problematic files;

console.log('🔍 Checking for problematic files...'),;

<<<<<<< HEAD
const problematicFiles = [];


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;



<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
