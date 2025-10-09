const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content between ======= and >>>>>>> 
    content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]*\n/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n/g, '');
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix merge conflicts in both files
const filesToFix = [
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx'
];

console.log('Fixing merge conflicts...');
filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fixMergeConflicts(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All merge conflicts fixed!');