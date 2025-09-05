import fs from 'fs';
import path from 'path';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with merge conflicts
const filesWithConflicts = [
  'pages/about.tsx',
  'pages/security.tsx',
  'pages/help.tsx',
  'pages/tutorials.tsx',
  'pages/partners.tsx',
  'pages/support.tsx',
  'pages/guides.tsx',
  'pages/compliance.tsx',
  'pages/api-docs.tsx',
  'pages/docs.tsx'
];

// Fix all files
filesWithConflicts.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
});

console.log('Merge conflicts fixed!');