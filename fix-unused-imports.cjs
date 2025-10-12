const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of files with unused imports
function getFilesWithUnusedImports() {
  try {
    const output = execSync('pnpm run lint 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      if (line.includes('error') && line.includes('is defined but never used')) {
        const match = line.match(/^\/workspace\/([^:]+)/);
        if (match) {
          files.add(match[1]);
        }
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.error('Error getting files with unused imports:', error.message);
    return [];
  }
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line has unused imports
      if (line.includes('import') && line.includes('from')) {
        // Extract the import statement
        const importMatch = line.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          
          // Check which imports are actually used in the file
          const usedImports = imports.filter(imp => {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(importName) && content.indexOf(importName) > content.indexOf(line);
          });
          
          if (usedImports.length > 0) {
            const newImportLine = `import { ${usedImports.join(', ')} } from '${source}';`;
            fixedLines.push(newImportLine);
          } else {
            // Remove the entire import line if no imports are used
            continue;
          }
        } else {
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
function main() {
  const files = getFilesWithUnusedImports();
  console.log(`Found ${files.length} files with unused imports`);
  
  files.forEach(file => {
    const fullPath = path.join('/workspace', file);
    if (fs.existsSync(fullPath)) {
      fixUnusedImports(fullPath);
    }
  });
  
  console.log('Finished fixing unused imports');
}

main();