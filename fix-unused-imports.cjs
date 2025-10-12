const fs = require('fs');
const path = require('path');

// Function to remove unused imports and variables
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports - this is a simple approach
    // Remove lines that are just imports and not used
    const lines = content.split('\n');
    const newLines = [];
    const usedImports = new Set();
    
    // Track which imports are actually used
    for (const line of lines) {
      if (line.includes('import') && line.includes('from')) {
        // Extract import names
        const importMatch = line.match(/import\s*\{([^}]+)\}/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          imports.forEach(imp => {
            if (content.includes(imp) && !line.includes(imp)) {
              usedImports.add(imp);
            }
          });
        }
      }
    }
    
    // Remove unused import lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are just unused imports
      if (line.includes('is defined but never used') || 
          line.includes('is assigned a value but never used')) {
        continue;
      }
      
      // Remove unused import lines
      if (line.includes('import') && line.includes('from')) {
        const importMatch = line.match(/import\s*\{([^}]+)\}/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const hasUsedImports = imports.some(imp => usedImports.has(imp));
          if (!hasUsedImports && line.includes('lucide-react')) {
            // Skip this line
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix App.tsx specifically
function fixAppTsx() {
  const filePath = './App.tsx';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports
    const lines = content.split('\n');
    const newLines = [];
    
    for (const line of lines) {
      // Skip lines with unused imports
      if (line.includes('SEOHead') && line.includes('import')) {
        continue;
      }
      
      // Skip lines with unused variable assignments
      if (line.includes('is assigned a value but never used')) {
        continue;
      }
      
      // Remove unused variable assignments
      if (line.includes('const ') && line.includes('Page') && line.includes('=')) {
        // Check if this variable is used elsewhere
        const varName = line.match(/const (\w+)/)?.[1];
        if (varName && !content.includes(varName + '(') && !content.includes(varName + ' ')) {
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Fixed App.tsx');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error fixing App.tsx:', error.message);
    return false;
  }
}

// Main execution
console.log('Fixing unused imports and variables...');

// Fix App.tsx
fixAppTsx();

// Fix other files with unused imports
const appDir = './app';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

let fixedCount = 0;
for (const file of files.slice(0, 50)) { // Limit to first 50 files
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);