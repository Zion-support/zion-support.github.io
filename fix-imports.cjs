const fs = require('fs');
const path = require('path');

// Files to fix with their unused imports
const filesToFix = [
  {
    file: 'src/ai-analytics-dashboard/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-analytics/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-automation/page.tsx',
    unusedImports: ['ArrowRight', 'Mail', 'MapPin']
  },
  {
    file: 'src/ai-computer-vision/page.tsx',
    unusedImports: ['Image', 'Zap', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-content-generation/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-content-studio/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-crm/page.tsx',
    unusedImports: ['Brain', 'Users', 'Target', 'TrendingUp', 'Shield', 'Clock', 'BarChart', 'CheckCircle', 'ArrowRight', 'Star', 'Award', 'Globe', 'Phone', 'Mail', 'Calendar', 'Zap', 'Navigation', 'Footer']
  },
  {
    file: 'src/ai-customer-insights/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-customer-support-bot/page.tsx',
    unusedImports: ['Shield', 'Zap', 'ArrowRight', 'Mail', 'MapPin']
  },
  {
    file: 'src/ai-cybersecurity/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-data-analytics/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-data-visualization/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-design-assistant/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-document-processing/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-document-processor/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  }
];

function fixFile(filePath, unusedImports) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the import line with lucide-react
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const currentImports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = currentImports.filter(imp => !unusedImports.includes(imp));
      
      if (usedImports.length > 0) {
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
      } else {
        // Remove the entire import line if no imports are used
        content = content.replace(importMatch[0], '');
      }
    }
    
    // Remove unused component imports
    const componentImports = ['Navigation', 'Footer'];
    componentImports.forEach(comp => {
      if (unusedImports.includes(comp)) {
        const regex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');
        content = content.replace(regex, '');
      }
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, unusedImports }) => {
  fixFile(file, unusedImports);
});

console.log('Import fixing completed!');