#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
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
}

// Clean unused imports from a file
function cleanUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let cleanedLines = [];
    let inImportBlock = false;
    let importStartLine = -1;
    let importEndLine = -1;
    let importLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Detect start of import block
      if (line.trim().startsWith('import ') && line.includes('{')) {
        inImportBlock = true;
        importStartLine = i;
        importLines = [line];
        continue;
      }
      
      // If we're in an import block, collect lines
      if (inImportBlock) {
        importLines.push(line);
        
        // Check if this is the end of the import block
        if (line.includes('}') && line.includes('from')) {
          importEndLine = i;
          inImportBlock = false;
          
          // Process the import block
          const importBlock = importLines.join('\n');
          const cleanedImportBlock = cleanImportBlock(importBlock);
          
          if (cleanedImportBlock.trim()) {
            cleanedLines.push(cleanedImportBlock);
          }
          
          importLines = [];
          continue;
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Write back the cleaned content
    const cleanedContent = cleanedLines.join('\n');
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Clean a single import block
function cleanImportBlock(importBlock) {
  // Extract the import statement parts
  const importMatch = importBlock.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
  if (!importMatch) {
    return importBlock; // Not a destructured import, leave as is
  }
  
  const imports = importMatch[1];
  const source = importMatch[2];
  
  // Split imports and clean them
  const importList = imports.split(',').map(imp => imp.trim()).filter(imp => imp);
  
  if (importList.length === 0) {
    return ''; // Remove empty import
  }
  
  // Reconstruct the import
  return `import { ${importList.join(', ')} } from '${source}';`;
}

// Main execution
function main() {
  console.log('🧹 Cleaning unused imports...');
  
  const files = getAllFiles('./app');
  let cleanedCount = 0;
  
  for (const file of files) {
    if (cleanUnusedImports(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`✅ Cleaned ${cleanedCount} files`);
  
  // Also clean the root App.tsx
  if (cleanUnusedImports('./App.tsx')) {
    cleanedCount++;
  }
  
  console.log(`🎉 Total files cleaned: ${cleanedCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { cleanUnusedImports, cleanImportBlock };