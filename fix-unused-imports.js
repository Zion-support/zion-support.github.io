import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Files with TypeScript errors that need fixing
const filesToFix = [
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-email-marketing/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-neural-memory-assistant/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-project-manager/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/DynamicPageLoader.tsx'
];

// Unused imports to remove
const unusedImports = [
  'BarChart3', 'DollarSign', 'Settings', 'Zap', 'Users', 'Lock', 'FileText', 'Shield', 'Mail',
  'Cloud', 'Cpu', 'React', 'Helmet', 'Clock', 'Calendar', 'PieChart', 'Hash', 'Image', 'MessageCircle',
  'ArrowRightIcon', 'RocketLaunchIcon'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    content = content.replace(lucideImportRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImport);
      });
      
      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove entire import line
      } else if (usedImports.length !== importList.length) {
        modified = true;
        return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      }
      return match;
    });
    
    // Remove unused React imports
    if (content.includes("import React") && !content.includes("React.") && !content.includes("<React.")) {
      content = content.replace(/import\s+React[^;]*;?\s*\n?/g, '');
      modified = true;
    }
    
    // Remove unused Helmet imports
    if (content.includes("import { Helmet }") && !content.includes("<Helmet")) {
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from[^;]*;?\s*\n?/g, '');
      modified = true;
    }
    
    // Remove unused variables
    const unusedVars = ['isVisible', 'setIsVisible', 'error', 'specialties'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+\\[${varName}[^\\]]*\\]\\s*=\\s*useState[^;]*;?\\s*\\n?`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixUnusedImports);

console.log('Unused imports cleanup completed!');