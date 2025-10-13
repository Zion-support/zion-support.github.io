const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of files with unused import errors
const lintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
const lines = lintOutput.split('\n');

const filesToFix = new Set();
lines.forEach(line => {
  const match = line.match(/^\/workspace\/(.+\.tsx?):/);
  if (match) {
    filesToFix.add(match[1]);
  }
});

console.log(`Found ${filesToFix.size} files with unused import errors`);

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find import lines
    const importLines = [];
    let inImportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        inImportBlock = true;
        importLines.push({ line, index: i });
      } else if (inImportBlock && line.trim() === '') {
        // Empty line after imports
        break;
      } else if (inImportBlock && !line.trim().startsWith('import ')) {
        // Non-import line, end of import block
        break;
      }
    }
    
    // Parse each import line to extract imported items
    const usedImports = new Set();
    const allImports = new Map(); // file -> Set of imported items
    
    // Scan the entire file for usage of imported items
    const fileContent = content;
    
    importLines.forEach(({ line, index }) => {
      const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const source = importMatch[1];
        const importContent = line.match(/import\s+{([^}]+)}/);
        
        if (importContent) {
          const imports = importContent[1].split(',').map(imp => imp.trim());
          const usedInFile = imports.filter(imp => {
            // Check if this import is used in the file
            const regex = new RegExp(`\\b${imp}\\b`, 'g');
            const matches = fileContent.match(regex);
            return matches && matches.length > 1; // More than just the import line
          });
          
          if (usedInFile.length > 0) {
            if (!allImports.has(source)) {
              allImports.set(source, new Set());
            }
            usedInFile.forEach(imp => allImports.get(source).add(imp));
          }
        }
      }
    });
    
    // Rebuild import lines
    const newLines = [...lines];
    let importIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith('import ')) {
        const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const source = importMatch[1];
          if (allImports.has(source) && allImports.get(source).size > 0) {
            const usedImports = Array.from(allImports.get(source));
            newLines[i] = `import { ${usedImports.join(', ')} } from '${source}';`;
          } else {
            // Remove unused import line
            newLines[i] = '';
          }
        }
        importIndex++;
      } else if (line.trim() === '' && importIndex > 0) {
        // End of import block
        break;
      }
    }
    
    // Write back the cleaned content
    const cleanedContent = newLines.filter(line => line !== '').join('\n');
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed imports in ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process each file
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    removeUnusedImports(fullPath);
  }
});

console.log('Import cleanup completed');