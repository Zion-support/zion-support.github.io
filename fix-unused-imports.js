import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to remove unused imports from a single file
function removeUnusedImportsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    let inImportBlock = false;
    let importStartLine = -1;
    let importEndLine = -1;
    let currentImport = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        inImportBlock = true;
        importStartLine = i;
        currentImport = line;
        
        // Check if this is a single-line import
        if (trimmedLine.endsWith(';') || trimmedLine.endsWith('from')) {
          // This is a single-line import, check if it's used
          if (isImportUsed(content, currentImport)) {
            newLines.push(line);
          }
          inImportBlock = false;
        } else {
          // This is a multi-line import, collect all lines
          const importLines = [line];
          let j = i + 1;
          while (j < lines.length && !trimmedLine.endsWith(';')) {
            importLines.push(lines[j]);
            j++;
          }
          importEndLine = j - 1;
          
          // Check if any part of this import is used
          const fullImport = importLines.join('\n');
          if (isImportUsed(content, fullImport)) {
            newLines.push(...importLines);
          }
          
          i = j - 1; // Skip the processed lines
          inImportBlock = false;
        }
      } else if (inImportBlock && (trimmedLine.endsWith(';') || trimmedLine.includes('from'))) {
        // End of multi-line import
        importEndLine = i;
        const importLines = lines.slice(importStartLine, i + 1);
        const fullImport = importLines.join('\n');
        
        if (isImportUsed(content, fullImport)) {
          newLines.push(...importLines);
        }
        
        inImportBlock = false;
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

// Function to check if an import is used in the content
function isImportUsed(content, importLine) {
  // Extract the imported names from the import line
  const importMatch = importLine.match(/import\s*{([^}]+)}\s*from/);
  if (importMatch) {
    const imports = importMatch[1].split(',').map(imp => imp.trim());
    return imports.some(imp => {
      const name = imp.split(' as ')[0].trim();
      // Check if the name is used in the content (excluding the import line itself)
      const contentWithoutImport = content.replace(importLine, '');
      return contentWithoutImport.includes(name) && 
             !contentWithoutImport.includes(`import ${name}`) &&
             !contentWithoutImport.includes(`{ ${name}`) &&
             !contentWithoutImport.includes(`{${name}`);
    });
  }
  
  // For default imports
  const defaultImportMatch = importLine.match(/import\s+(\w+)\s+from/);
  if (defaultImportMatch) {
    const name = defaultImportMatch[1];
    const contentWithoutImport = content.replace(importLine, '');
    return contentWithoutImport.includes(name) && 
           !contentWithoutImport.includes(`import ${name}`);
  }
  
  return true; // If we can't determine, keep the import
}

// Get all TypeScript/JavaScript files
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
console.log('Fixing unused imports...');

const files = getAllFiles('.', ['.ts', '.tsx', '.js', '.jsx'])
  .filter(file => 
    !file.includes('node_modules') && 
    !file.includes('.git') &&
    !file.includes('dist') &&
    !file.includes('.next') &&
    !file.includes('out') &&
    !file.includes('build') &&
    !file.includes('remove-unused-imports.js') &&
    !file.includes('fix-unused-imports.js')
  );

let fixedCount = 0;
files.forEach(file => {
  if (removeUnusedImportsFromFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
