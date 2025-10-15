const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all import statements from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      const imports = match[1]
        .split(',')
        .map(imp => imp.trim())
        .filter(imp => imp.length > 0);

      // Check which imports are actually used in the file
      const usedImports = imports.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        return regex.test(content.replace(match[0], ''));
      });

      if (usedImports.length !== imports.length) {
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(match[0], newImport);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Process all .tsx files
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(fixUnusedImports);

console.log('Unused imports cleanup completed!');