const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
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

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match import statements with multiple named imports
    const importPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];?/g;
    
    content = content.replace(importPattern, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      for (const imp of importList) {
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        if (importName && content.includes(importName)) {
          usedImports.push(imp);
        }
      }
      
      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove entire import statement
      } else if (usedImports.length < importList.length) {
        modified = true;
        return match.replace(imports, usedImports.join(', '));
      }
      
      return match;
    });
    
    // Also handle unused variables that are assigned but never used
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for unused variable assignments
      const unusedVarPattern = /^\s*const\s+(\w+)\s*=\s*[^;]+;?\s*$/;
      const match = line.match(unusedVarPattern);
      
      if (match) {
        const varName = match[1];
        // Check if the variable is used anywhere in the file
        const isUsed = content.includes(varName) && 
                      content.indexOf(varName) !== content.lastIndexOf(varName);
        
        if (!isUsed) {
          // Comment out the unused variable instead of removing it
          newLines.push(`// ${line}`);
          modified = true;
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports/variables in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = getAllFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports/variables in ${fixedCount} files.`);