const fs = require('fs');
const path = require('path');

// Find all files with missing imports
const findFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('icon:') && content.includes('lucide-react')) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
};

// Fix a single file
const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Find all icon: references
  const iconMatches = content.match(/icon:\s*(\w+)/g);
  if (iconMatches) {
    const icons = iconMatches.map(match => match.replace('icon: ', ''));
    
    // Find the lucide-react import line
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const missingImports = icons.filter(icon => !imports.includes(icon));
      
      if (missingImports.length > 0) {
        const newImports = [...imports, ...missingImports];
        const newImport = `import { ${newImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(/import\s*{\s*[^}]+?\s*}\s*from\s*['"]lucide-react['"];?/g, newImport);
        changed = true;
      }
    } else {
      // Add new import
      const uniqueIcons = [...new Set(icons)];
      const newImport = `import { ${uniqueIcons.join(', ')} } from 'lucide-react';\n`;
      content = newImport + content;
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
};

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files with icon references`);

files.forEach(fixFile);

console.log('All imports fixed!');