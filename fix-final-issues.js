const fs = require('fs');
const path = require('path');

// Function to fix duplicate exports and remaining JSX issues
function fixFile(filePath) {
  try {

      modified = true;
    }
    
    // Fix JSX structure issues
    const lines = content.split('\n');
    const fixedLines = [];
    let inJSX = false;
    let braceCount = 0;
    let parenCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track JSX state
      if (trimmedLine.includes('return (') || trimmedLine.includes('return(')) {
        inJSX = true;
        parenCount = 1;
        fixedLines.push(line);
        continue;
      }
      
      if (inJSX) {
        // Count parentheses and braces
        for (const char of line) {
          if (char === '(') parenCount++;
          if (char === ')') parenCount--;
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        // Fix malformed JSX
        if (trimmedLine === '<>' && i > 0) {
          const prevLine = lines[i - 1].trim();
          if (prevLine.endsWith('(') || prevLine.endsWith('return (')) {
            fixedLines.push('    <>');
          } else {
            fixedLines.push(line);
          }
        } else if (trimmedLine === '</>') {
          if (parenCount === 0) {
            fixedLines.push('  </>');
            inJSX = false;
          } else {
            fixedLines.push(line);
          }
        } else if (trimmedLine.startsWith('<') && !trimmedLine.includes('//') && !trimmedLine.includes('/*')) {
          // Fix malformed JSX tags
          if (trimmedLine.includes('  </') && !trimmedLine.includes('</>')) {
            const tagName = trimmedLine.match(/<\/([^>]+)>/);
            if (tagName) {
              fixedLines.push(`    </${tagName[1]}>`);
            } else {
              fixedLines.push(line);
            }
          } else {
            fixedLines.push(line);
          }
        } else {
          fixedLines.push(line);
        }
        
        // Check if we're out of JSX
        if (parenCount === 0 && trimmedLine === ');') {
          inJSX = false;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Remove empty lines at the end
    while (fixedLines.length > 0 && fixedLines[fixedLines.length - 1].trim() === '') {
      fixedLines.pop();
    }

      return true;
    }
    
    return false;
  } catch (error) {

    return false;
  }
}


