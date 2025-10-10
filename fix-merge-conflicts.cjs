const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with merge conflicts
const files = glob.sync('app/**/*.{tsx,ts,js,jsx}', { cwd: __dirname });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file has merge conflicts
  if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
    console.log(`Fixing merge conflicts in: ${file}`);
    
    // Remove merge conflict markers and keep HEAD version
    content = content
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '')
      .replace(/<<<<<<< [^\n]+\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);