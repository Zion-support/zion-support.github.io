#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fixedLines = [];
    const usedImports = new Set();
    
    // Simple heuristic: look for usage of imported names in the file
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip import lines for now
      if (line.trim().startsWith('import ')) {
        fixedLines.push(line);
        continue;
      }
      
      // Check if this line uses any imported names
      const importMatch = line.match(/import\s+.*?from\s+['"](.*?)['"]/);
      if (importMatch) {
        const importLine = line;
        const importParts = importLine.match(/import\s+\{([^}]+)\}/);
        
        if (importParts) {
          const imports = importParts[1].split(',').map(imp => imp.trim());
          const usedImportsInLine = imports.filter(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(cleanImp) && !line.includes(cleanImp);
          });;
          
          if (usedImportsInLine.length > 0) {
            const newImportLine = `import { ${usedImportsInLine.join(', ')} } from ${importMatch[1]};`;
            fixedLines[fixedLines.length - 1] = newImportLine;
          } else {
            // Remove the entire import line
            fixedLines.pop();
          }
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Main execution
const files = getAllFiles('/workspace');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  try {
    fixUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Processed ${fixedCount} files`);