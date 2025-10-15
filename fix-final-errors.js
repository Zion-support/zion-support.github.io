import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix specific files with known issues
const fixes = {
  'app/ai-analytics-dashboard-pro/page.tsx': {
    addImports: ['BarChart3'],
    removeImports: ['ArrowRight']
  },
  'app/ai-cybersecurity-platform/page.tsx': {
    addImports: ['BarChart3'],
    removeImports: ['ArrowRight']
  },
  'app/ai-database-solutions/page.tsx': {
    removeImports: ['ArrowRight']
  },
  'app/ai-ecommerce-platform/page.tsx': {
    removeImports: ['ArrowRight', 'ShoppingCart', 'Zap', 'Globe', 'MapPin', 'Download', 'Pause', 'RefreshCw', 'Eye', 'Filter', 'Calendar', 'Target', 'CreditCard', 'Truck', 'Award', 'TrendingUp', 'Cpu', 'Database', 'Activity', 'Lock']
  }
};

function fixFile(filePath, config) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Find the lucide-react import
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (importMatch) {
    let currentImports = importMatch[1].split(',').map(imp => imp.trim());
    
    // Remove specified imports
    if (config.removeImports) {
      currentImports = currentImports.filter(imp => !config.removeImports.includes(imp.trim()));
    }
    
    // Add specified imports
    if (config.addImports) {
      config.addImports.forEach(imp => {
        if (!currentImports.includes(imp)) {
          currentImports.push(imp);
        }
      });
    }
    
    // Create new import statement
    const newImport = `import { \n  ${currentImports.join(',\n  ')}\n} from 'lucide-react';`;
    content = content.replace(importMatch[0], newImport);
  }
  
  fs.writeFileSync(fullPath, content);
  console.log(`Fixed ${filePath}`);
}

// Apply fixes
Object.entries(fixes).forEach(([filePath, config]) => {
  fixFile(filePath, config);
});

console.log('Fixed all final errors');