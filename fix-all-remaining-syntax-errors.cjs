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

    // Fix missing closing braces before export statements
    const exportPattern = /^export default function handler\(/gm;
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (exportPattern.test(lines[i])) {
        // Check if the previous line is missing a closing brace
        if (i > 0 && !lines[i-1].trim().endsWith('}') && !lines[i-1].trim().endsWith(';')) {
          // Look for the function that should be closed
          let j = i - 1;
          let braceCount = 0;
          let foundFunction = false;
          
          while (j >= 0) {
            const line = lines[j].trim();
            if (line.includes('function ') || line.includes('async function ')) {
              foundFunction = true;
              break;
            }
            if (line.includes('{')) braceCount++;
            if (line.includes('}')) braceCount--;
            j--;
          }
          
          if (foundFunction && braceCount > 0) {
            lines.splice(i, 0, '}');
            modified = true;
            i++; // Skip the line we just added
          }
        }
      }
    }

    // Fix extra empty lines at the end
    while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
      lines.pop();
      modified = true;
    }

    if (modified) {
      const newContent = lines.join('\n');
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

console.log('Fixing remaining syntax errors...');
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