const fs = require('fs');
const path = require('path');

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove unused lucide-react imports by finding which ones are actually used
    const lucideMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideMatch) {
      const importedIcons = lucideMatch[1].split(',').map(icon => icon.trim());
      const usedIcons = [];
      
      for (const icon of importedIcons) {
        const cleanIcon = icon.replace(/\s+as\s+\w+/, ''); // Remove "as" aliases
        if (content.includes(`<${cleanIcon}`) || content.includes(`<${icon}`)) {
          usedIcons.push(icon);
        }
      }
      
      if (usedIcons.length > 0) {
        content = content.replace(
          lucideMatch[0],
          `import { ${usedIcons.join(', ')} } from 'lucide-react';`
        );
      } else {
        content = content.replace(lucideMatch[0], '');
      }
    }
    
    // Remove unused variables (simple cases)
    content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*$/gm, (match, varName) => {
      if (!content.includes(varName) || content.split(varName).length <= 2) {
        return '';
      }
      return match;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

function findTSXFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Clean all TSX files
const filesToClean = findTSXFiles('./app');
filesToClean.forEach(removeUnusedImports);

console.log(`Cleaned ${filesToClean.length} files`);
