
const fs = require ('fs'),
const path = require ('path'),
console.log ('🔍 Debugging Next.js project structure...'),


console.log('🔍 Debugging Next.js project structure...'),;

// Check if we're in a valid Next.js project;
console.log(' Current directory:', process.cwd());
console.log(' Package.json exists:', fs.existsSync('package.json'));
console.log(' Next.config.js exists:', fs.existsSync('next.config.js'));
console.log(' Pages directory exists:', fs.existsSync('pages'));
console.log(' Components directory exists:', fs.existsSync('components'));
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


const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;



