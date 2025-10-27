const fs = require('fs');
const path = require('path');

// Function to fix React import issues
function fixReactImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if React is used but not imported
  if (content.includes('React.') || content.includes('<') || content.includes('useState') || content.includes('useEffect') || content.includes('useCallback') || content.includes('useMemo') || content.includes('useRef') || content.includes('useContext') || content.includes('useReducer') || content.includes('useLayoutEffect') || content.includes('useImperativeHandle') || content.includes('useDebugValue')) {
    if (!content.includes('import React')) {
      // Add React import at the top
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the first non-comment, non-empty line
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line && !line.startsWith('//') && !line.startsWith('/*') && !line.startsWith('*')) {
          insertIndex = i;
          break;
        }
      }
      
      lines.splice(insertIndex, 0, "import React from 'react';");
      content = lines.join('\n');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed React imports in: ${filePath}`);
  }
}

// Function to fix unused variables
function fixUnusedVariables(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix unused variables by prefixing with underscore
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Match function parameters that are unused
    const paramMatch = line.match(/(\w+):\s*(\w+)/);
    if (paramMatch) {
      const paramName = paramMatch[1];
      const paramType = paramMatch[2];
      
      // Check if this parameter is used in the function body
      const functionStart = content.lastIndexOf('{', content.indexOf(line));
      const functionEnd = content.indexOf('}', content.indexOf(line));
      const functionBody = content.substring(functionStart, functionEnd);
      
      if (!functionBody.includes(paramName) && !paramName.startsWith('_')) {
        lines[i] = line.replace(paramName, `_${paramName}`);
        modified = true;
      }
    }
  }

  if (modified) {
    content = lines.join('\n');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused variables in: ${filePath}`);
  }
}

// Function to fix parsing errors
function fixParsingErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix common parsing errors
  if (content.includes('Parsing error: \',\' expected')) {
    // Look for common syntax issues
    content = content.replace(/,\s*\)/g, ')'); // Remove trailing commas before closing parens
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed parsing errors in: ${filePath}`);
  }
}

// Function to process a single file
function processFile(filePath) {
  try {
    fixReactImports(filePath);
    fixUnusedVariables(filePath);
    fixParsingErrors(filePath);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive linting fix...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process`);

let processedCount = 0;
for (const file of files) {
  processFile(file);
  processedCount++;
}

console.log(`Processed ${processedCount} files`);
console.log('Linting fix completed!');