const fs = require('fs');
const path = require('path');

// Files that need fixing based on the build errors
const filesToFix = [
  '/workspace/pages/api/disputes/[id]/upload.ts',
  '/workspace/pages/api/feedback.ts',
  '/workspace/pages/api/kyc/start.ts',
  '/workspace/pages/api/kyc/status.ts',
  '/workspace/pages/api/kyc/submit.ts'
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra closing braces
    content = content.replace(/\}\}\s*$/gm, '}');
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      modified = true;
    }

    // Fix missing closing braces before export statements
    const lines = content.split('\n');
    let newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an export statement
      if (line.trim().startsWith('export default')) {
        // Check if the previous line needs a closing brace
        if (i > 0) {
          const prevLine = lines[i - 1].trim();
          if (prevLine && !prevLine.endsWith('}') && !prevLine.endsWith(';') && !prevLine.endsWith('{')) {
            // Look backwards to find the function that needs closing
            let j = i - 1;
            let braceCount = 0;
            let foundFunction = false;
            
            while (j >= 0) {
              const checkLine = lines[j].trim();
              if (checkLine.includes('function ') || checkLine.includes('async function ')) {
                foundFunction = true;
                break;
              }
              if (checkLine.includes('{')) braceCount++;
              if (checkLine.includes('}')) braceCount--;
              j--;
            }
            
            if (foundFunction && braceCount > 0) {
              newLines.push('}');
              modified = true;
            }
          }
        }
      }
      
      newLines.push(line);
    }

    // Remove extra empty lines at the end
    while (newLines.length > 0 && newLines[newLines.length - 1].trim() === '') {
      newLines.pop();
      modified = true;
    }

    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed syntax errors in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Fixing all remaining syntax errors...');
let fixedCount = 0;

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixSyntaxErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed ${fixedCount} files`);