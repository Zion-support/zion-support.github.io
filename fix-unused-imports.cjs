const fs = require('fs');
const path = require('path');

// List of files with unused imports that need fixing
const filesToFix = [
  'src/ai-automation/page.tsx',
  'src/ai-code-generation/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-project-manager/page.tsx',
  'src/ai-sales-automation/page.tsx',
  'src/ai-scheduler/page.tsx',
  'src/ai-social-media-manager/page.tsx',
  'src/ai-workflow-automation/page.tsx',
  'src/ai-writing-assistant/page.tsx',
  'src/api-docs/page.tsx',
  'src/business-apps/page.tsx',
  'src/careers/page.tsx',
  'src/cloud-migration/page.tsx',
  'src/compliance/page.tsx',
  'src/consultation/page.tsx',
  'src/contact/page.tsx',
  'src/demo/page.tsx',
  'src/expense-tracker/page.tsx',
  'src/it-consulting/page.tsx',
  'src/it-infrastructure/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'Clock', 'Users', 'ArrowRight', 'Star', 'Award', 'Shield', 'Zap', 'Globe', 'Target',
  'MessageSquare', 'Headphones', 'Bot', 'AlertTriangle', 'Database', 'Settings', 'PieChart',
  'TrendingUp', 'Eye', 'Mail', 'MapPin', 'Calendar', 'AlertCircle', 'DollarSign', 'Building',
  'ShoppingCart', 'Cloud', 'Home', 'BarChart', 'Phone', 'Link', 'Search', 'Terminal', 'Bug',
  'Brain', 'Cpu', 'Sparkles', 'FileText', 'Lock', 'Smartphone', 'DollarSign', 'Award'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused variables
    content = content.replace(/const \[isLoaded, setIsLoaded\] = useState\(false\);\s*\n/g, '');
    content = content.replace(/const \[.*?\] = useState\(.*?\);\s*\n/g, (match) => {
      if (match.includes('isLoaded') || match.includes('setIsLoaded')) {
        return '';
      }
      return match;
    });
    
    // Remove unused pricingPlans
    content = content.replace(/const pricingPlans = \[[\s\S]*?\];\s*\n/g, '');
    
    // Remove unused Helmet imports
    content = content.replace(/import \{ Helmet \} from 'react-helmet-async';\s*\n/g, '');
    
    // Remove unused Link imports from react-router-dom
    content = content.replace(/import \{ Link \} from 'react-router-dom';\s*\n/g, '');
    
    // Clean up lucide-react imports by removing unused ones
    const lucideMatch = content.match(/import \{([^}]+)\} from 'lucide-react';/);
    if (lucideMatch) {
      const imports = lucideMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => {
        // Check if the import is actually used in the file
        const importName = imp.trim();
        if (unusedImports.includes(importName)) {
          // Check if it's used in the file content
          const regex = new RegExp(`\\b${importName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import statement
        }
        return true;
      });
      
      if (usedImports.length !== imports.length) {
        content = content.replace(
          /import \{([^}]+)\} from 'lucide-react';/,
          `import {${usedImports.join(', ')}} from 'lucide-react';`
        );
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixUnusedImports(fullPath);
  }
});

console.log('Unused imports fixed!');