const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files in the app directory
const pageFiles = glob.sync('app/**/page.tsx', { cwd: __dirname });

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Database', 'Cpu', 'Target',
  'BarChart', 'FileText', 'MessageCircle', 'Heart', 'DollarSign', 'Box',
  'Monitor', 'LinkIcon', 'Server', 'Package', 'Mic', 'Workflow', 'Eye',
  'Wifi', 'MessageSquare', 'CheckSquare', 'ShoppingCart', 'Settings',
  'Calendar', 'TrendingUp', 'Lock', 'benefits'
];

pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Remove unused imports from the import statement
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => !unusedImports.includes(imp));
      
      if (usedImports.length === 0) {
        // Remove the entire import line if no imports are used
        content = content.replace(/import\s*{\s*[^}]+}\s*from\s*['"]lucide-react['"];?\n?/, '');
        modified = true;
      } else if (usedImports.length !== imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
        modified = true;
      }
    }
    
    // Remove unused variable declarations
    const benefitsMatch = content.match(/const\s+benefits\s*=\s*[^;]+;/);
    if (benefitsMatch) {
      content = content.replace(benefitsMatch[0], '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  }
});

console.log(`Processed ${pageFiles.length} page files`);