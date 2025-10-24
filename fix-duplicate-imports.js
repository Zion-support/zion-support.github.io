const fs = require('fs');
const path = require('path');

// Function to clean up duplicate imports in a file
function cleanImports(content) {
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  let inImportBlock = true;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if we're still in the import block
    if (inImportBlock && (line.startsWith('import ') || line.startsWith('"use client"') || line === '')) {
      if (line.startsWith('import ')) {
        // Extract the import statement
        const importMatch = line.match(/import\s+(.+?)\s+from\s+['"](.+?)['"]/);
        if (importMatch) {
          const [, imports, source] = importMatch;
          const key = `${source}:${imports}`;
          
          if (!seenImports.has(key)) {
            seenImports.add(key);
            cleanedLines.push(lines[i]);
          }
        } else {
          cleanedLines.push(lines[i]);
        }
      } else {
        cleanedLines.push(lines[i]);
      }
    } else {
      inImportBlock = false;
      cleanedLines.push(lines[i]);
    }
  }
  
  return cleanedLines.join('\n');
}

// Function to fix duplicate exports
function cleanExports(content) {
  // Remove duplicate export default statements, keeping only the last one
  const lines = content.split('\n');
  const exportLines = [];
  const otherLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('export default ')) {
      exportLines.push(line);
    } else {
      otherLines.push(line);
    }
  }
  
  // Keep only the last export default
  if (exportLines.length > 0) {
    otherLines.push(exportLines[exportLines.length - 1]);
  }
  
  return otherLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let cleanedContent = cleanImports(content);
    cleanedContent = cleanExports(cleanedContent);
    
    // Write back the cleaned content
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
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

for (const file of tsxFiles) {
  processFile(file);
}

console.log('Done fixing duplicate imports and exports!');