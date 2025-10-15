const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('return;') && content.includes('},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Find the function declaration line
      const lines = content.split('\n');
      let functionLineIndex = -1;
      let returnLineIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('export default function') && lines[i].includes('() {')) {
          functionLineIndex = i;
        }
        if (lines[i].trim() === 'return;') {
          returnLineIndex = i;
        }
      }
      
      if (functionLineIndex !== -1 && returnLineIndex !== -1) {
        // Extract the function name
        const functionLine = lines[functionLineIndex];
        const functionName = functionLine.match(/export default function (\w+)/)?.[1];
        
        if (functionName) {
          // Find where the data structures end (look for the closing bracket and semicolon)
          let dataEndIndex = -1;
          let bracketCount = 0;
          let foundFirstBracket = false;
          
          for (let i = returnLineIndex + 1; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes('[') || line.includes('{')) {
              foundFirstBracket = true;
            }
            if (foundFirstBracket) {
              for (const char of line) {
                if (char === '[' || char === '{') bracketCount++;
                if (char === ']' || char === '}') bracketCount--;
              }
              if (bracketCount === 0 && line.includes('];')) {
                dataEndIndex = i;
                break;
              }
            }
          }
          
          if (dataEndIndex !== -1) {
            // Extract the data structures (everything between return; and the end of data)
            const dataStructures = lines.slice(returnLineIndex + 1, dataEndIndex + 1).join('\n');
            
            // Find where the actual return statement should be
            let actualReturnIndex = -1;
            for (let i = dataEndIndex + 1; i < lines.length; i++) {
              if (lines[i].trim().startsWith('return (')) {
                actualReturnIndex = i;
                break;
              }
            }
            
            if (actualReturnIndex !== -1) {
              // Reconstruct the file
              const beforeFunction = lines.slice(0, functionLineIndex).join('\n');
              const afterReturn = lines.slice(actualReturnIndex).join('\n');
              
              const newContent = beforeFunction + '\n\n' + dataStructures + '\n\nexport default function ' + functionName + '() {\n  ' + afterReturn;
              
              fs.writeFileSync(filePath, newContent);
              console.log(`Fixed ${filePath}`);
              return true;
            }
          }
        }
      }
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const files = [];

function findPageFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${files.length} page.tsx files`);

let fixedCount = 0;
for (const file of files) {
  if (fixPageFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);