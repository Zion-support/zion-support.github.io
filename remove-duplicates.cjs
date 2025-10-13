const fs = require('fs');
const path = require('path');

// Function to remove duplicate imports
function removeDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const lines = content.split('\n');
    const importLines = [];
    const nonImportLines = [];
    const seenImports = new Map();
    
    for (const line of lines) {
      if (line.trim().startsWith('import')) {
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const source = match[2];
          
          if (!seenImports.has(source)) {
            seenImports.set(source, new Set());
          }
          
          imports.forEach(imp => {
            seenImports.get(source).add(imp);
          });
        } else {
          importLines.push(line);
        }
      } else {
        nonImportLines.push(line);
      }
    }
    
    // Rebuild import lines without duplicates
    const newImportLines = [];
    for (const [source, imports] of seenImports) {
      const importArray = Array.from(imports);
      if (importArray.length > 0) {
        newImportLines.push(`import { ${importArray.join(', ')} } from '${source}';`);
      }
    }
    
    // Add non-import lines
    newImportLines.push(...importLines);
    
    // Sort imports
    newImportLines.sort();
    
    // Combine
    const newContent = [...newImportLines, ...nonImportLines].join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let modifiedCount = 0;
files.forEach(file => {
  if (removeDuplicateImports(file)) {
    modifiedCount++;
    console.log(`Removed duplicates in: ${file}`);
  }
});

console.log(`\nRemoved duplicates in ${modifiedCount} files.`);