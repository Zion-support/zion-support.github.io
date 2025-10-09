import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with remaining unused imports
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

filesToFix.forEach(({ file, unused }) => {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the import line with lucide-react
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  
  if (importMatch) {
    const currentImports = importMatch[1].split(',').map(imp => imp.trim());
    const usedImports = currentImports.filter(imp => !unused.includes(imp));
    
    if (usedImports.length > 0) {
      const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      content = content.replace(importMatch[0], newImport);
    } else {
      // Remove the entire import line if no icons are used
      content = content.replace(importMatch[0], '');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${file}`);
  }
});

console.log('Remaining unused imports cleanup completed!');