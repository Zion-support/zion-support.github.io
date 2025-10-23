const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix malformed closing tags
function fixMalformedTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed closing tags like "  </" to proper closing tags
    // This is a more complex fix that needs to match opening and closing tags
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Check for malformed closing tag pattern
      if (line.match(/^\s*<\/\s*$/)) {
        // Look for the corresponding opening tag in previous lines
        let foundOpening = false;
        for (let j = i - 1; j >= 0; j--) {
          const prevLine = lines[j];
          // Look for opening tags that might not have been closed
          const openingMatch = prevLine.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/);
          if (openingMatch) {
            const tagName = openingMatch[1];
            // Check if this tag was already closed
            let alreadyClosed = false;
            for (let k = j + 1; k < i; k++) {
              if (lines[k].includes(`</${tagName}>`)) {
                alreadyClosed = true;
                break;
              }
            }
            if (!alreadyClosed) {
              line = line.replace(/^\s*<\/\s*$/, `</${tagName}>`);
              foundOpening = true;
              break;
            }
          }
        }
        
        if (!foundOpening) {
          // If we can't find the opening tag, try to fix common patterns
          if (i > 0) {
            const prevLine = lines[i - 1];
            if (prevLine.includes('<h1')) {
              line = line.replace(/^\s*<\/\s*$/, '</h1>');
            } else if (prevLine.includes('<h2')) {
              line = line.replace(/^\s*<\/\s*$/, '</h2>');
            } else if (prevLine.includes('<h3')) {
              line = line.replace(/^\s*<\/\s*$/, '</h3>');
            } else if (prevLine.includes('<p')) {
              line = line.replace(/^\s*<\/\s*$/, '</p>');
            } else if (prevLine.includes('<div')) {
              line = line.replace(/^\s*<\/\s*$/, '</div>');
            } else if (prevLine.includes('<span')) {
              line = line.replace(/^\s*<\/\s*$/, '</span>');
            } else {
              // Default to div if we can't determine
              line = line.replace(/^\s*<\/\s*$/, '</div>');
            }
          }
        }
        
        modified = true;
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      const newContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed malformed tags in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting malformed tag fix...');
const tsxFiles = findTsxFiles('./app');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixMalformedTags(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);