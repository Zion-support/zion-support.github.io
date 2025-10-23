const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove malformed JSX closing tags at the end of files
    const lines = content.split('\n');
    const cleanLines = [];
    let inMalformedSection = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're at the end of the file and see malformed JSX
      if (line.includes('export default') && i > lines.length - 10) {
        // Look ahead to see if there are malformed JSX tags
        let hasMalformedTags = false;
        for (let j = i + 1; j < lines.length; j++) {
          if (lines[j].trim().match(/^<\/[a-zA-Z]+>$/)) {
            hasMalformedTags = true;
            break;
          }
        }
        
        if (hasMalformedTags) {
          // Keep the export line and stop here
          cleanLines.push(line);
          break;
        }
      }
      
      cleanLines.push(line);
    }
    
    const newContent = cleanLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed endings in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing
console.log('Starting JSX ending fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);