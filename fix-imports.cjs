const fs = require('fs');
const path = require('path');

// Common missing imports that need to be added
const commonImports = {
  'Database': 'lucide-react',
  'BarChart3': 'lucide-react',
  'Users': 'lucide-react',
  'Zap': 'lucide-react',
  'Shield': 'lucide-react',
  'Target': 'lucide-react',
  'Brain': 'lucide-react',
  'TrendingUp': 'lucide-react',
  'DollarSign': 'lucide-react',
  'Star': 'lucide-react',
  'CheckCircle': 'lucide-react'
};

function fixFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses any of the common imports
    const usedImports = [];
    Object.keys(commonImports).forEach(importName => {
      const regex = new RegExp(`<${importName}\\s`, 'g');
      if (regex.test(content)) {
        usedImports.push(importName);
      }
    });
    
    if (usedImports.length > 0) {
      // Check if lucide-react is already imported
      const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      
      if (lucideImportMatch) {
        // Add missing imports to existing import
        const existingImports = lucideImportMatch[1].split(',').map(imp => imp.trim());
        const newImports = [...new Set([...existingImports, ...usedImports])];
        const newImportStatement = `import { ${newImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(lucideImportMatch[0], newImportStatement);
        modified = true;
      } else {
        // Add new import statement
        const importStatement = `import { ${usedImports.join(', ')} } from 'lucide-react';\n`;
        const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
        if (firstImportMatch) {
          content = content.replace(firstImportMatch[0], firstImportMatch[0] + importStatement);
        } else {
          content = importStatement + content;
        }
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
    }
  }
}

// Find all page.tsx files and fix them
function findAndFixPages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixPages(filePath);
    } else if (file === 'page.tsx') {
      fixFile(filePath);
    }
  });
}

// Start fixing from the app directory
findAndFixPages(path.join(__dirname, 'app'));

console.log('All import issues fixed!');