const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Fix orphaned return statements by wrapping them in proper function declarations
  const lines = content.split('\n');
  const newLines = [];
  let inOrphanedReturn = false;
  let braceCount = 0;
  let returnStart = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an orphaned return statement
    if (line.trim().startsWith('return (') && !content.includes('export default function') && !content.includes('function ')) {
      inOrphanedReturn = true;
      returnStart = i;
      braceCount = 0;
      
      // Add proper function declaration before the return
      const fileName = path.basename(file, '.tsx');
      const functionName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '');
      newLines.push(`export default function ${functionName}() {`);
    }
    
    if (inOrphanedReturn) {
      // Count braces to find the end of the return statement
      for (const char of line) {
        if (char === '(') braceCount++;
        if (char === ')') braceCount--;
      }
      
      newLines.push(line);
      
      // If we've closed all braces, end the function
      if (braceCount === 0 && line.trim().endsWith(');')) {
        newLines.push('}');
        inOrphanedReturn = false;
      }
    } else {
      newLines.push(line);
    }
  }

  const newContent = newLines.join('\n');
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed orphaned returns in: ${file}`);
    modified = true;
  }
});

console.log('Orphaned return statements fixed');