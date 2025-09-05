const fs = require('fs');
const path = require('path');

const files = [
  'pages/docs.tsx',
  'pages/support.tsx', 
  'pages/partners.tsx',
  'pages/security.tsx',
  'pages/api-docs.tsx',
  'pages/tutorials.tsx',
  'pages/compliance.tsx',
  'pages/guides.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
<<<<<<< HEAD
<<<<<<< HEAD
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
=======
    content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
=======
>>>>>>> pr-11913
    
>>>>>>> pr-11914
    // Clean up any remaining artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(file, content);
    console.log(`Cleaned ${file}`);
  }
});

console.log('All merge conflicts cleaned!');