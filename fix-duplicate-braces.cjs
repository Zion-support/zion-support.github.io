const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Remove duplicate closing braces at the end of files
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];
    
    // Skip duplicate closing braces
    if (line.trim() === '}' && nextLine && nextLine.trim() === '}') {
      continue;
    }
    
    newLines.push(line);
  }

  const newContent = newLines.join('\n');
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed duplicate braces in: ${file}`);
    modified = true;
  }
});

console.log('Duplicate braces cleanup completed');