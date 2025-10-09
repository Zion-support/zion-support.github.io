const fs = require('fs');
const path = require('path');

// Get all the remaining unused imports from the lint output
const filesToFix = [
  {
    file: 'app/ai-customer-support/page.tsx',
    unused: ['Headphones', 'Bot', 'Zap', 'BarChart', 'Star', 'ArrowRight']
  },
  {
    file: 'app/ai-data-visualization/page.tsx',
    unused: ['PieChart', 'TrendingUp', 'Eye', 'Zap', 'Shield', 'Users', 'ArrowRight', 'Globe']
  },
  {
    file: 'app/ai-sales-automation/page.tsx',
    unused: ['TrendingUp', 'Brain', 'Star', 'ArrowRight', 'DollarSign', 'Clock', 'Shield', 'Building', 'ShoppingCart', 'Cloud', 'Home']
  },
  {
    file: 'app/ai-workflow-automation/page.tsx',
    unused: ['Zap', 'Clock', 'Shield', 'Users', 'ArrowRight', 'Database', 'Globe']
  },
  {
    file: 'app/careers/page.tsx',
    unused: ['Link']
  }
];

function fixUnusedImports(filePath, unusedImports) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the import line with lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
    const match = content.match(importRegex);
    
    if (match) {
      const currentImports = match[1].split(',').map(imp => imp.trim());
      const usedImports = currentImports.filter(imp => !unusedImports.includes(imp));
      
      if (usedImports.length > 0) {
        const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImportLine);
      } else {
        // Remove the entire import line if no icons are used
        content = content.replace(importRegex, '');
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, unused }) => {
  fixUnusedImports(file, unused);
});

console.log('All unused imports fixed!');