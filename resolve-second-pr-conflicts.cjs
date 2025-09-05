const fs = require('fs');

// List of files with conflicts from second PR
const conflictedFiles = [
  'netlify.toml',
  'pages/api.tsx',
  'pages/docs/api.tsx',
  'pages/login.tsx',
  'pages/register.tsx',
  'pages/search.tsx'
];

function resolveConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version (our changes)
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======.*?\n?/g, '');
  content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD|=======|>>>>>>> [a-f0-9]+/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Resolved conflicts in ${filePath}`);
}

// Resolve conflicts in all files
conflictedFiles.forEach(resolveConflicts);

console.log('Second PR conflicts resolved!');