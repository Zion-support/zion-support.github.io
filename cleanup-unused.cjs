const fs = require('fs');
const path = require('path');

// Function to get all TypeScript/JavaScript files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Function to clean up unused imports and variables
function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const lines = content.split('\n');
    const newLines = [];
    const importMap = new Map();
    let inImports = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (inImports && line.trim().startsWith('import ')) {
        // Extract import details
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const [, imports, source] = importMatch;
          const components = imports.split(',').map(c => c.trim());
          
          if (!importMap.has(source)) {
            importMap.set(source, new Set());
          }
          
          components.forEach(comp => {
            // Check if component is used in the file
            const isUsed = new RegExp(`\\b${comp}\\b`).test(content);
            if (isUsed) {
              importMap.get(source).add(comp);
            }
          });
        } else {
          // Non-destructured import - check if it's used
          const importName = line.match(/import\s+(\w+)/)?.[1];
          if (importName && new RegExp(`\\b${importName}\\b`).test(content)) {
            newLines.push(line);
          }
        }
      } else {
        inImports = false;
        newLines.push(line);
      }
    }
    
    // Rebuild imports
    const finalLines = [];
    for (const [source, components] of importMap) {
      const componentArray = Array.from(components);
      if (componentArray.length > 0) {
        finalLines.push(`import { ${componentArray.join(', ')} } from '${source}';`);
      }
    }
    
    // Add non-import lines
    const nonImportLines = newLines.filter(line => !line.trim().startsWith('import '));
    let result = [...finalLines, ...nonImportLines];
    
    // Remove unused variable declarations
    result = result.map(line => {
      // Remove unused const/let/var declarations
      if (line.trim().startsWith('const ') || line.trim().startsWith('let ') || line.trim().startsWith('var ')) {
        const varMatch = line.match(/(const|let|var)\s+(\w+)/);
        if (varMatch) {
          const varName = varMatch[2];
          // Check if variable is used
          const isUsed = new RegExp(`\\b${varName}\\b`).test(result.join('\n'));
          if (!isUsed && !line.includes('=') && !line.includes('function')) {
            return ''; // Remove unused variable declaration
          }
        }
      }
      return line;
    }).filter(line => line.trim() !== '');
    
    // Remove empty expressions
    result = result.map(line => {
      if (line.trim().match(/^[^=]*;\s*$/)) {
        return ''; // Remove empty expressions
      }
      return line;
    }).filter(line => line.trim() !== '');
    
    const cleanedContent = result.join('\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned: ${filePath}`);
      modified = true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting cleanup of unused imports and variables...');

const files = getAllFiles('./app');
let cleanedCount = 0;

files.forEach(file => {
  cleanupFile(file);
  cleanedCount++;
});

console.log(`Processed ${cleanedCount} files`);
console.log('Cleanup completed!');