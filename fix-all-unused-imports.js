import fs from 'fs';
import path from 'path';

// Function to remove unused imports from a single file
function removeUnusedImportsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        // Extract the imported names from the import line
        const importMatch = trimmedLine.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const name = imp.split(' as ')[0].trim();
            // Check if the name is used in the content (excluding the import line itself)
            const contentWithoutImport = content.replace(line, '');
            return contentWithoutImport.includes(name) && 
                   !contentWithoutImport.includes(`import ${name}`) &&
                   !contentWithoutImport.includes(`{ ${name}`) &&
                   !contentWithoutImport.includes(`{${name}`);
          });
          
          if (usedImports.length === 0) {
            // No used imports, remove the entire line
            continue;
          } else if (usedImports.length < imports.length) {
            // Some imports are unused, keep only the used ones
            const newImportLine = line.replace(importMatch[1], usedImports.join(', '));
            newLines.push(newImportLine);
          } else {
            // All imports are used, keep the line
            newLines.push(line);
          }
        } else {
          // For default imports, check if they're used
          const defaultImportMatch = trimmedLine.match(/import\s+(\w+)\s+from/);
          if (defaultImportMatch) {
            const name = defaultImportMatch[1];
            const contentWithoutImport = content.replace(line, '');
            if (contentWithoutImport.includes(name) && 
                !contentWithoutImport.includes(`import ${name}`)) {
              newLines.push(line);
            }
            // If not used, skip the line (don't add it)
          } else {
            // Other import types, keep them
            newLines.push(line);
          }
        }
      } else {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out', 'build'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Main execution
console.log('Fixing all unused imports in src directory...');

const files = getAllFiles('./src', ['.ts', '.tsx', '.js', '.jsx']);

let fixedCount = 0;
files.forEach(file => {
  if (removeUnusedImportsFromFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
