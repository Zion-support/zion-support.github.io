const fs = require('fs');
const path = require('path');

function aggressiveCleanup(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip import lines that have unused imports
      if (line.trim().startsWith('import ') && line.includes(' from ')) {
        // Check if this is a named import
        const namedImportMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
        if (namedImportMatch) {
          const importedNames = namedImportMatch[1]
            .split(',')
            .map(name => name.trim())
            .filter(name => name.length > 0);
          
          // Check which imports are actually used
          const usedImports = [];
          for (const name of importedNames) {
            // Simple check - look for the name in the content (not in import statements)
            const contentWithoutImports = content.replace(/import\s*\{[^}]+\}\s*from[^;]+;/g, '');
            if (contentWithoutImports.includes(name) && !contentWithoutImports.includes(`import ${name}`)) {
              usedImports.push(name);
            }
          }
          
          if (usedImports.length === 0) {
            // No imports are used, skip this line
            continue;
          } else if (usedImports.length === importedNames.length) {
            // All imports are used, keep as is
            cleanedLines.push(line);
          } else {
            // Some imports are used, keep only those
            const newImportBlock = line.replace(
              /\{[^}]+\}/,
              `{ ${usedImports.join(', ')} }`
            );
            cleanedLines.push(newImportBlock);
          }
        } else {
          // Not a named import, keep as is
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all TypeScript/TSX files
const files = findTsxFiles('./app');
files.push('./App.tsx');

let cleanedCount = 0;
for (const file of files) {
  if (aggressiveCleanup(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned ${cleanedCount} files`);