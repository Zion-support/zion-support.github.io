const fs = require('fs');
const path = require('path');

function fixDuplicateImports(content) {
  // Find all import lines from lucide-react
  const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g;
  const matches = [...content.matchAll(importRegex)];
  
  if (matches.length === 0) return content;
  
  // Get all unique imports
  const allImports = new Set();
  matches.forEach(match => {
    const imports = match[1].split(',').map(imp => imp.trim());
    imports.forEach(imp => allImports.add(imp));
  });
  
  // Replace all lucide-react imports with a single one
  const uniqueImports = Array.from(allImports).join(', ');
  const newImport = `import { ${uniqueImports} } from 'lucide-react';`;
  
  // Remove all existing lucide-react imports
  let newContent = content.replace(importRegex, '');
  
  // Add the single import after the last import statement
  const importLines = newContent.split('\n').filter(line => line.trim().startsWith('import '));
  if (importLines.length > 0) {
    const lastImportLine = importLines[importLines.length - 1];
    const lastImportIndex = newContent.lastIndexOf(lastImportLine);
    const endOfLastImport = lastImportIndex + lastImportLine.length;
    newContent = newContent.slice(0, endOfLastImport) + '\n' + newImport + newContent.slice(endOfLastImport);
  }
  
  return newContent;
}

function fixUnescapedEntities(content) {
  // Fix common unescaped entities
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;');
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate imports
    const newContent = fixDuplicateImports(content);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix unescaped entities
    const fixedEntities = fixUnescapedEntities(content);
    if (fixedEntities !== content) {
      content = fixedEntities;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      processFile(filePath);
    }
  }
}

// Process the app directory
processDirectory('/workspace/app');
console.log('Import and entity fixing completed!');