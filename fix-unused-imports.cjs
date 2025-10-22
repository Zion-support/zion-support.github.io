const fs = require('fs');
const path = require('path');

// List of files with unused imports
const filesToFix = [
  'app/5g-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ai-3d-model-generator/page.tsx',
  'app/ai-audio-processor-improved/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Database', 'Cpu', 'Target',
  'BarChart', 'FileText', 'MessageCircle', 'Heart', 'DollarSign', 'Box',
  'Monitor', 'LinkIcon', 'Server', 'Package', 'Mic', 'Workflow', 'Eye',
  'Wifi', 'MessageSquare', 'CheckSquare', 'ShoppingCart', 'Settings',
  'Calendar', 'TrendingUp', 'Lock', 'benefits'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports from the import statement
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => !unusedImports.includes(imp));
      
      if (usedImports.length === 0) {
        // Remove the entire import line if no imports are used
        content = content.replace(/import\s*{\s*[^}]+}\s*from\s*['"]lucide-react['"];?\n?/, '');
      } else {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
      }
    }
    
    // Remove unused variable declarations
    content = content.replace(/const\s+benefits\s*=\s*[^;]+;/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  }
});

console.log('Fixed unused imports in all files');