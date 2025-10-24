import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common Lucide React icons used in the project
const commonIcons = [
  'Zap', 'Users', 'Globe', 'Target', 'TrendingUp', 'ArrowRight', 'CheckCircle',
  'Phone', 'Mail', 'MapPin', 'Shield', 'Brain', 'Cloud', 'Settings', 'Server',
  'Database', 'Lock', 'Check', 'PhoneIcon', 'MailIcon', 'Location'
];

function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses any of the common icons
    const usedIcons = commonIcons.filter(icon => {
      const regex = new RegExp(`\\b${icon}\\b`, 'g');
      return regex.test(content);
    });
    
    if (usedIcons.length === 0) {
      return false; // No icons to fix
    }
    
    // Check if lucide-react is already imported
    const hasLucideImport = content.includes("from 'lucide-react'");
    
    if (!hasLucideImport) {
      // Find the last import statement
      const lines = content.split('\n');
      let lastImportIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      
      if (lastImportIndex >= 0) {
        // Add lucide-react import after the last import
        const importLine = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
        lines.splice(lastImportIndex + 1, 0, importLine);
        content = lines.join('\n');
        modified = true;
      }
    } else {
      // Update existing lucide-react import
      const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/;
      const match = content.match(importRegex);
      
      if (match) {
        const existingIcons = match[1].split(',').map(icon => icon.trim());
        const allIcons = [...new Set([...existingIcons, ...usedIcons])];
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImport);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all files that might need icon imports
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

let fixedCount = 0;

console.log('Fixing missing Lucide React imports...');

for (const file of files) {
  if (fixMissingImports(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed imports in ${fixedCount} files.`);