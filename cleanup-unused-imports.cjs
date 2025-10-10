#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files with unused imports that need cleaning
const filesToClean = [
  'src/ai-content-writer/page.tsx',
  'src/ai-fraud-detection/page.tsx',
  'src/it-services/page.tsx',
  'src/services/page.tsx',
  'src/web-development/page.tsx',
  'src/page-minimal.tsx',
  'src/page-optimized.tsx',
  'src/privacy/page.tsx',
  'src/terms/page.tsx',
  'src/offline/page.tsx',
  'src/blog/ai-cost-optimization-breakthrough-2026/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'Zap', 'ArrowRight', 'Mail', 'Shield', 'AlertTriangle', 'Eye', 'Smartphone', 'Clock', 'Lock',
  'Star', 'Globe', 'Cpu', 'Target', 'Sparkles', 'DollarSign', 'Award', 'FileText', 'Search',
  'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'CreditCard', 'Building', 'Factory',
  'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Briefcase',
  'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3',
  'Compass', 'PieChart', 'TrendingDown', 'Activity', 'Phone', 'MapPin'
];

function cleanFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(lucideImportRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp);
      });
      
      if (usedImports.length !== importList.length) {
        modified = true;
        if (usedImports.length === 0) {
          return ''; // Remove entire import if no imports left
        }
        return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      }
      return match;
    });

    // Remove unused variables
    const unusedVars = ['HomePage', 'UnifiedBanner', 'ContentPromotion', 'ContentShowcase', 'OptimizedHomePage'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+${varName}\\s*=.*?;?\\s*`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Clean all files
console.log('Cleaning unused imports...');
filesToClean.forEach(cleanFile);

console.log('Done!');