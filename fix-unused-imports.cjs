const fs = require('fs');
const path = require('path');

// Common unused imports to remove
const unusedImports = [
  'Zap', 'Users', 'ArrowRight', 'Star', 'Clock', 'Target', 'TrendingUp', 
  'Globe', 'Database', 'StarIcon', 'Check', 'Arrow', 'PhoneIcon', 'MailIcon', 'Location'
];

// Find all files with unused imports
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
      if (content.includes('from \'lucide-react\'')) {
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
  
  // Find lucide-react import line
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (importMatch) {
    const imports = importMatch[1].split(',').map(imp => imp.trim());
    const usedImports = imports.filter(imp => {
      const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
      return !unusedImports.includes(cleanImp) && content.includes(cleanImp);
    });
    
    if (usedImports.length !== imports.length) {
      if (usedImports.length === 0) {
        // Remove entire import line
        content = content.replace(/import\s*{\s*[^}]+?\s*}\s*from\s*['"]lucide-react['"];?\s*\n?/g, '');
      } else {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(/import\s*{\s*[^}]+?\s*}\s*from\s*['"]lucide-react['"];?/g, newImport);
      }
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

console.log(`Found ${files.length} files with lucide-react imports`);

files.forEach(fixFile);

console.log('Unused imports fixed!');