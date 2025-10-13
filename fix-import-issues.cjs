const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix import issues in files
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix malformed import statements
  const lines = content.split('\n');
  const newLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    
    // Check for malformed import statements
    if (line.trim().startsWith('import ') && line.includes('{') && !line.includes('}')) {
      // Find the closing brace
      let j = i;
      let braceCount = 0;
      let foundStart = false;
      
      while (j < lines.length) {
        const currentLine = lines[j];
        if (currentLine.includes('import ') && currentLine.includes('{')) {
          foundStart = true;
          braceCount = (currentLine.match(/{/g) || []).length - (currentLine.match(/}/g) || []).length;
        } else if (foundStart) {
          braceCount += (currentLine.match(/{/g) || []).length - (currentLine.match(/}/g) || []).length;
          if (braceCount <= 0) {
            // Found the end
            break;
          }
        }
        j++;
      }
      
      if (j < lines.length) {
        // Complete the import statement
        const importLines = lines.slice(i, j + 1);
        const importText = importLines.join(' ').trim();
        
        if (!importText.includes('} from')) {
          // Add missing closing brace and from clause
          const fixedImport = importText.replace(/(\{[^}]*)$/, '$1} from \'lucide-react\';');
          newLines.push(fixedImport);
          i = j; // Skip the processed lines
          modified = true;
          continue;
        } else {
          // Add the lines as they are
          newLines.push(...importLines);
          i = j;
          continue;
        }
      }
    }
    
    // Fix other common issues
    let fixedLine = line;
    
    // Fix trailing comma in import statements
    if (fixedLine.includes('import {') && fixedLine.includes(', }')) {
      fixedLine = fixedLine.replace(', }', ' }');
      modified = true;
    }
    
    // Fix missing React import
    if (fixedLine.includes('export default function') && !content.includes('import React')) {
      newLines.unshift('import React from \'react\';');
      modified = true;
    }
    
    // Fix function name casing
    if (fixedLine.includes('export default function page(')) {
      fixedLine = fixedLine.replace('export default function page(', 'export default function Page(');
      modified = true;
    }
    
    newLines.push(fixedLine);
    i++;
  }

  const newContent = newLines.join('\n');

  if (modified || newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting import issue fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  try {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error fixing ${file}: ${error.message}`);
  }
}

console.log(`Fixed ${fixedCount} files`);