const fs = require('fs');
const path = require('path');

function fixSpecificIconImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // List of commonly unused icons
  const unusedIcons = ['Star', 'Clock', 'Zap', 'Shield', 'Globe', 'Database', 'Users', 'Settings', 'Check'];
  
  // Check if the file has a bulk import from lucide-react
  const importMatch = content.match(/import { ([^}]+) } from 'lucide-react';/);
  
  if (importMatch) {
    const allImports = importMatch[1];
    const importedIcons = allImports.split(',').map(icon => icon.trim());
    
    // Find which icons are actually used in the file
    const usedIcons = importedIcons.filter(icon => {
      // Check if the icon is used anywhere in the file (not just in the import)
      return content.includes(icon) && !content.includes(`import { ${icon} } from 'lucide-react';`);
    });
    
    // If there are unused icons, replace the import
    if (usedIcons.length < importedIcons.length) {
      if (usedIcons.length > 0) {
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
      } else {
        // Remove the entire import if no icons are used
        content = content.replace(importMatch[0], '');
      }
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }

  return false;
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalFixed = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSpecificIconImports(filePath)) {
        totalFixed++;
        console.log(`Fixed: ${filePath}`);
      }
    }
  });

  return totalFixed;
}

// Process the app directory
const appDir = '/workspace/app';
const totalFixed = processDirectory(appDir);

console.log(`\nTotal files fixed: ${totalFixed}`);