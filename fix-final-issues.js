const fs = require('fs');
const path = require('path');

// Function to fix duplicate exports and remaining JSX issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate default exports
    const exportMatches = content.match(/export default [^;]+;/g);
    if (exportMatches && exportMatches.length > 1) {
      // Keep only the first export
      const firstExport = exportMatches[0];
      content = content.replace(/export default [^;]+;/g, '');
      content += '\n' + firstExport;
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
    
    const fixedContent = fixedLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files
const { execSync } = require('child_process');
const allFiles = execSync('find app -name '*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

console.log(`Found ${allFiles.length} files to check`);

let fixedCount = 0;
allFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${allFiles.length} files`);