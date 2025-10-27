const fs = require('fs');
const path = require('path');

function fixBulkIconImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Pattern to match bulk icon imports from lucide-react
  const iconImportPattern = /import { ([^}]+) } from 'lucide-react';/g;
  const match = iconImportPattern.exec(content);
  
  if (match) {
    const allImports = match[1];
    const importedIcons = allImports.split(',').map(icon => icon.trim());
    
    // Check which icons are actually used in the file
    const usedIcons = importedIcons.filter(icon => content.includes(icon));
    
    // If there are unused icons, replace the import with only the used ones
    if (usedIcons.length < importedIcons.length) {
      if (usedIcons.length > 0) {
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(match[0], newImport);
      } else {
        // Remove the entire import if no icons are used
        content = content.replace(match[0], '');
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
      if (fixBulkIconImports(filePath)) {
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