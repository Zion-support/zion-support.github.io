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

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Common unused import patterns to remove
    const unusedPatterns = [
      // Remove entire import lines that are likely unused
      /import\s*{\s*[^}]*}\s*from\s*['"][^'"]*['"];?\s*\n/g,
      // Remove specific unused imports
      /import\s*{\s*[^}]*,\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*[^}]*}\s*from\s*['"][^'"]*['"];?\s*\n/g,
    ];
    
    // For now, let's just remove obviously unused imports
    // This is a simplified approach - in practice, you'd want to use a proper AST parser
    
    // Remove imports that are clearly unused based on common patterns
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are likely unused imports
      if (line.includes('import') && line.includes('from')) {
        // Check if this import line contains only unused imports
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const unusedImports = imports.filter(imp => {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            // Check if this import is used anywhere in the file
            const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
            const matches = content.match(usageRegex);
            return !matches || matches.length <= 1; // Only appears in the import line
          });
          
          if (unusedImports.length === imports.length) {
            // All imports in this line are unused, skip the line
            continue;
          } else if (unusedImports.length > 0) {
            // Some imports are unused, remove them
            const usedImports = imports.filter(imp => !unusedImports.includes(imp));
            if (usedImports.length > 0) {
              const newLine = line.replace(/{\s*[^}]+}/, `{ ${usedImports.join(', ')} }`);
              newLines.push(newLine);
            }
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    content = newLines.join('\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting unused imports cleanup...');

const files = getAllFiles('./src', ['.ts', '.tsx']);
const appFiles = getAllFiles('./app', ['.ts', '.tsx']);

let fixedCount = 0;

// Process src files
files.forEach(file => {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
});

// Process app files
appFiles.forEach(file => {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with unused imports.`);