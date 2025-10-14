const fs = require('fs');
const path = require('path');

function cleanupUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const cleanedLines = [];
    
    let inImport = false;
    let importLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ') && line.includes(' from ')) {
        inImport = true;
        importLines = [line];
      } else if (inImport && (line.trim().startsWith('}') || line.trim().startsWith(')'))) {
        // End of multi-line import
        importLines.push(line);
        inImport = false;
        
        // Process the import block
        const importBlock = importLines.join('\n');
        const cleanedBlock = cleanImportBlock(importBlock, content);
        if (cleanedBlock.trim()) {
          cleanedLines.push(cleanedBlock);
        }
        importLines = [];
      } else if (inImport) {
        importLines.push(line);
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

function cleanImportBlock(importBlock, fullContent) {
  // Extract the imported names
  const importMatch = importBlock.match(/import\s*\{([^}]+)\}\s*from/);
  if (!importMatch) {
    return importBlock; // Not a named import
  }
  
  const importedNames = importMatch[1]
    .split(',')
    .map(name => name.trim())
    .filter(name => name.length > 0);
  
  // Check which imports are actually used
  const usedImports = [];
  for (const name of importedNames) {
    // Simple check - look for the name in the content (not in import statements)
    const contentWithoutImports = fullContent.replace(/import\s*\{[^}]+\}\s*from[^;]+;/g, '');
    if (contentWithoutImports.includes(name) && !contentWithoutImports.includes(`import ${name}`)) {
      usedImports.push(name);
    }
  }
  
  if (usedImports.length === 0) {
    // No imports are used, remove the entire import
    return '';
  } else if (usedImports.length === importedNames.length) {
    // All imports are used, keep as is
    return importBlock;
  } else {
    // Some imports are used, keep only those
    const newImportBlock = importBlock.replace(
      /\{[^}]+\}/,
      `{ ${usedImports.join(', ')} }`
    );
    return newImportBlock;
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
  if (cleanupUnusedImports(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned ${cleanedCount} files`);