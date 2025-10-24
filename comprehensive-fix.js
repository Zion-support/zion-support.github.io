const fs = require('fs');
const path = require('path');

// Function to completely clean and fix a file
function comprehensiveFix(content, filePath) {
  const lines = content.split('\n');
  const cleanedLines = [];
  let inImportBlock = true;
  let seenImports = new Set();
  let inFunction = false;
  let braceCount = 0;
  let parenCount = 0;
  let returnFound = false;
  let exportFound = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Handle imports
    if (inImportBlock && (trimmedLine.startsWith('import ') || trimmedLine.startsWith('"use client"') || trimmedLine === '')) {
      if (trimmedLine.startsWith('import ')) {
        const importMatch = line.match(/import\s+(.+?)\s+from\s+['"](.+?)['"]/);
        if (importMatch) {
          const [, imports, source] = importMatch;
          const key = `${source}:${imports}`;
          
          if (!seenImports.has(key)) {
            seenImports.add(key);
            cleanedLines.push(line);
          }
        } else {
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    } else {
      inImportBlock = false;
      
      // Track function declarations
      if (trimmedLine.startsWith('export default function ') || trimmedLine.startsWith('function ')) {
        if (inFunction && !returnFound) {
          // Previous function was incomplete, close it
          cleanedLines.push('  return null;');
          cleanedLines.push('}');
        }
        inFunction = true;
        returnFound = false;
        exportFound = trimmedLine.startsWith('export default');
      }
      
      // Track braces and parentheses
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      
      // Track return statements
      if (trimmedLine.startsWith('return ')) {
        returnFound = true;
      }
      
      // Check for incomplete function structure
      if (inFunction && braceCount === 0 && parenCount === 0 && returnFound) {
        // Function is complete
        inFunction = false;
        returnFound = false;
      }
      
      // Fix malformed JSX
      if (line.includes('<nav className=') && line.includes('>);')) {
        cleanedLines.push(line.replace('>);', '>'));
      } else if (line.includes('return (') && line.includes(');') && !line.includes('</')) {
        // Fix malformed return statements
        cleanedLines.push(line.replace(');', ''));
      } else if (line.includes('import {') && line.includes('} from') && line.includes(';') && !trimmedLine.endsWith(';')) {
        // Fix missing semicolons in imports
        cleanedLines.push(line + ';');
      } else {
        cleanedLines.push(line);
      }
    }
  }
  
  // If we're still in a function at the end, close it
  if (inFunction && returnFound) {
    while (braceCount > 0) {
      cleanedLines.push('}');
      braceCount--;
    }
  }
  
  return cleanedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = comprehensiveFix(content, filePath);
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files`);
console.log('Comprehensive fix completed!');