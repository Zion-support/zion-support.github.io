const fs = require('fs');
const path = require('path');

// Files to fix with their unused imports
const filesToFix = [
  {
    file: 'src/ai-ecommerce-optimizer/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-ecommerce-solutions/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-fintech/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-healthcare/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-lead-generation/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-marketing/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-ml-platform/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-mobile-app-development/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-project-manager/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/ai-sales-automation/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-services/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/ai-workflow-automation/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/autonomous-systems/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/blockchain-web3/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/business-intelligence/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/careers/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/consultation/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/cybersecurity/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/database/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/demo/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/devops/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/iot-edge-computing/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/it-infrastructure/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/it-services/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/networking/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/news/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/pricing/page.tsx',
    unusedImports: ['ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award']
  },
  {
    file: 'src/quantum-computing/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/robotics/page.tsx',
    unusedImports: ['Brain', 'Zap', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'CheckCircle', 'Star', 'Mail']
  },
  {
    file: 'src/team/page.tsx',
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

console.log('Remaining import fixing completed!');