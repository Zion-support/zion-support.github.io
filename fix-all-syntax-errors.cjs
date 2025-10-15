const fs = require('fs');
const path = require('path');

// Get all TypeScript/JSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't have the problematic pattern
    if (!content.includes('export default function') || !content.includes('return;')) {
      return;
    }

    // Find the function declaration
    const lines = content.split('\n');
    let functionStartIndex = -1;
    let returnIndex = -1;
    let jsxStartIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('export default function')) {
        functionStartIndex = i;
      }
      if (line.trim() === 'return;') {
        returnIndex = i;
      }
      if (line.includes('return (') && returnIndex !== -1) {
        jsxStartIndex = i;
        break;
      }
    }

    if (functionStartIndex === -1 || returnIndex === -1 || jsxStartIndex === -1) {
      return;
    }

    // Extract function name
    const functionLine = lines[functionStartIndex];
    const functionName = functionLine.match(/export default function (\w+)/)?.[1] || 'Component';

    // Extract imports
    const imports = lines.slice(0, functionStartIndex).join('\n');

    // Extract data definitions (between returnIndex + 1 and jsxStartIndex)
    const dataLines = lines.slice(returnIndex + 1, jsxStartIndex);
    
    // Fix the data definitions - they should be const declarations
    let fixedDataLines = [];
    let currentArray = [];
    let inArray = false;
    let arrayName = 'data';
    
    for (let i = 0; i < dataLines.length; i++) {
      const line = dataLines[i];
      
      if (line.trim().startsWith('{') && !inArray) {
        inArray = true;
        currentArray = [line];
        // Try to determine array name from context
        if (i > 0) {
          const prevLine = dataLines[i - 1];
          if (prevLine.includes('const ') && prevLine.includes('=')) {
            arrayName = prevLine.match(/const (\w+)/)?.[1] || 'data';
          }
        }
      } else if (inArray) {
        currentArray.push(line);
        if (line.trim().endsWith('}') || line.trim().endsWith('},')) {
          if (line.trim().endsWith('},')) {
            // This is the end of an array item
            currentArray[currentArray.length - 1] = line.replace(/,$/, '');
            fixedDataLines.push(`  ${currentArray.join('\n')}`);
            currentArray = [];
            inArray = false;
          } else if (line.trim().endsWith('}')) {
            // This might be the end of the array
            currentArray[currentArray.length - 1] = line.replace(/,$/, '');
            fixedDataLines.push(`  ${currentArray.join('\n')}`);
            currentArray = [];
            inArray = false;
          }
        }
      } else if (line.trim().startsWith('const ') && line.includes('=')) {
        // This is a const declaration
        fixedDataLines.push(`  ${line}`);
      } else if (line.trim() !== '') {
        // This might be a standalone object or array
        if (line.trim().startsWith('[') || line.trim().startsWith('{')) {
          fixedDataLines.push(`  const ${arrayName} = ${line}`);
        } else {
          fixedDataLines.push(`  ${line}`);
        }
      }
    }

    // If we have remaining items in currentArray, add them
    if (currentArray.length > 0) {
      fixedDataLines.push(`  ${currentArray.join('\n')}`);
    }

    const dataDefinitions = fixedDataLines.join('\n');

    // Extract JSX return (from jsxStartIndex to end)
    const jsxReturn = lines.slice(jsxStartIndex).join('\n');

    // Create the fixed content
    const fixedContent = `${imports}

export default function ${functionName}() {
${dataDefinitions}

  ${jsxReturn}`;

    // Write the fixed content back
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all files and fix them
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'));
console.log(`Found ${allFiles.length} files to check...`);

allFiles.forEach(fixFile);
console.log('Done fixing files!');