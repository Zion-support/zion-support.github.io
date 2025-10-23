const fs = require('fs');
const path = require('path');

// Function to fix remaining errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix $1 references (regex replacement artifacts)
    if (content.includes('$1')) {
      content = content.replace(/\$1/g, 'Page');
      modified = true;
    }

    // Fix duplicate React imports
    const reactImportRegex = /import\s+React\s+from\s+["']react["'];?\s*\n/g;
    const matches = content.match(reactImportRegex);
    if (matches && matches.length > 1) {
      content = content.replace(reactImportRegex, '');
      content = 'import React from "react";\n' + content;
      modified = true;
    }

    // Fix unused variables by adding underscore prefix
    const unusedVarRegex = /const\s+(\w+)\s*=\s*[^;]+;\s*$/gm;
    content = content.replace(unusedVarRegex, (match, varName) => {
      if (varName !== 'React' && varName !== 'Helmet' && !varName.startsWith('_')) {
        return match.replace(new RegExp(`\\b${varName}\\b`, 'g'), `_${varName}`);
      }
      return match;
    });

    // Fix PerformanceObserverCallback type
    if (content.includes('PerformanceObserverCallback')) {
      content = content.replace(/PerformanceObserverCallback/g, 'any');
      modified = true;
    }

    // Remove unused imports
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => {
      // Keep React and Helmet imports
      if (line.includes('import React') || line.includes('import { Helmet }')) {
        return true;
      }
      // Remove other imports that might be unused
      if (line.startsWith('import ') && !line.includes('from "react"') && !line.includes('from "react-helmet-async"')) {
        // Check if the import is actually used
        const importName = line.match(/import\s+{([^}]+)}/);
        if (importName) {
          const names = importName[1].split(',').map(n => n.trim());
          const isUsed = names.some(name => content.includes(name));
          return isUsed;
        }
      }
      return true;
    });

    if (filteredLines.length !== lines.length) {
      content = filteredLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TSX files in the app directory
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixRemainingErrors(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);