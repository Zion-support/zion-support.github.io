const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Replace HTML entities back to proper quotes
    content = content.replace(/&ldquo;/g, '"');
    content = content.replace(/&rdquo;/g, '"');
    content = content.replace(/&lsquo;/g, "'");
    content = content.replace(/&rsquo;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    modified = true;

    // Fix 2: Fix export statements - replace __variableName with actual component name
    const exportMatch = content.match(/export default __(\w+);/);
    if (exportMatch) {
      const componentName = exportMatch[1];
      // Find the actual component name in the file
      const componentMatch = content.match(/const (\w+): React\.FC/);
      if (componentMatch) {
        content = content.replace(`export default __${componentName};`, `export default ${componentMatch[1]};`);
        modified = true;
      }
    }

    // Fix 3: Add missing imports for commonly used icons
    const commonIcons = [
      'Brain', 'Shield', 'Users', 'Award', 'Zap', 'Globe', 'Target', 'CheckCircle',
      'Star', 'Phone', 'Play', 'Mail', 'BarChart3', 'Cpu', 'Database', 'Activity',
      'Cloud', 'Smartphone', 'Headphones', 'ShoppingCart', 'Eye', 'Lock', 'Network',
      'FileText', 'Settings', 'Pause', 'RefreshCw', 'Download', 'MapPin', 'Filter',
      'Calendar', 'CreditCard', 'Truck', 'TrendingUp', 'Clock', 'Heart', 'ShoppingBag',
      'Tag', 'Bell', 'Gift', 'Package', 'MessageSquare', 'Percent', 'ArrowRight'
    ];

    // Check if file uses any of these icons but doesn't import them
    const usesIcons = commonIcons.some(icon => content.includes(`<${icon}`) || content.includes(`<${icon} `));
    
    if (usesIcons) {
      // Find existing lucide-react import
      const importMatch = content.match(/import \{([^}]+)\} from 'lucide-react';/);
      if (importMatch) {
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        const usedIcons = commonIcons.filter(icon => 
          (content.includes(`<${icon}`) || content.includes(`<${icon} `)) && 
          !existingImports.includes(icon)
        );
        
        if (usedIcons.length > 0) {
          const newImports = [...existingImports, ...usedIcons];
          content = content.replace(
            /import \{([^}]+)\} from 'lucide-react';/,
            `import { ${newImports.join(', ')} } from 'lucide-react';`
          );
          modified = true;
        }
      } else {
        // No existing import, add one
        const usedIcons = commonIcons.filter(icon => 
          content.includes(`<${icon}`) || content.includes(`<${icon} `)
        );
        
        if (usedIcons.length > 0) {
          // Add import after React import
          const reactImportMatch = content.match(/import React[^;]+;/);
          if (reactImportMatch) {
            content = content.replace(
              reactImportMatch[0],
              `${reactImportMatch[0]}\nimport { ${usedIcons.join(', ')} } from 'lucide-react';`
            );
            modified = true;
          }
        }
      }
    }

    // Fix 4: Remove unused imports
    const unusedImports = [
      'memo', 'lazy', 'Suspense', 'useState', 'useEffect', 'ShoppingCart', 'Zap', 'Globe',
      'MapPin', 'Download', 'Pause', 'RefreshCw', 'Eye', 'Filter', 'Calendar', 'Target',
      'CreditCard', 'Truck', 'Award', 'TrendingUp', 'Cpu', 'Database', 'Activity', 'Lock',
      'Clock', 'Heart', 'Star as StarIcon', 'ShoppingBag', 'Tag', 'Headphones', 'Bell',
      'Gift', 'Package', 'MessageSquare', 'Percent', 'PieChart', 'LineChart', 'TrendingDown',
      'Calculator', 'Banknote', 'Wallet', 'Receipt', 'ChartBar', 'Coins', 'Building2',
      'PiggyBank', 'HandCoins', 'PenTool', 'Video', 'Tablet', 'Laptop', 'Wifi', 'User',
      'Trophy', 'Lightbulb', 'Clipboard', 'Share2', 'Upload', 'Edit', 'Trash2'
    ];

    // Remove unused React imports
    if (content.includes("import React, { memo, lazy, Suspense }")) {
      content = content.replace(/import React, \{ memo, lazy, Suspense \}/g, 'import React');
      modified = true;
    }

    if (content.includes("import React, { useState, useEffect, memo, lazy, Suspense }")) {
      content = content.replace(/import React, \{ useState, useEffect, memo, lazy, Suspense \}/g, 'import React');
      modified = true;
    }

    // Remove unused individual imports
    unusedImports.forEach(importName => {
      if (content.includes(importName) && !content.includes(`<${importName}`) && !content.includes(`<${importName} `)) {
        // Remove from import statement
        content = content.replace(new RegExp(`,\\s*${importName}`, 'g'), '');
        content = content.replace(new RegExp(`${importName}\\s*,`, 'g'), '');
        content = content.replace(new RegExp(`\\{ ${importName} \\}`, 'g'), '{}');
        modified = true;
      }
    });

    // Fix 5: Remove duplicate ArrowRight imports
    const arrowRightMatches = content.match(/ArrowRight/g);
    if (arrowRightMatches && arrowRightMatches.length > 1) {
      const lines = content.split('\n');
      let arrowRightCount = 0;
      const newLines = lines.map(line => {
        if (line.includes('ArrowRight') && line.includes('import')) {
          arrowRightCount++;
          if (arrowRightCount === 1) {
            return line;
          } else {
            return line.replace(/,\s*ArrowRight/g, '');
          }
        }
        return line;
      });
      content = newLines.join('\n');
      modified = true;
    }

    // Fix 6: Remove unused variables
    if (content.includes('const [activeTab, setActiveTab] = useState')) {
      if (!content.includes('activeTab') || !content.includes('setActiveTab')) {
        content = content.replace(/const \[activeTab, setActiveTab\] = useState\([^)]*\);\n?/g, '');
        modified = true;
      }
    }

    // Fix 7: Remove empty import statements
    if (content.includes("import { } from 'lucide-react';")) {
      content = content.replace(/import \{ \} from 'lucide-react';\n/g, '');
      modified = true;
    }

    // Fix 8: Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    modified = true;

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
console.log('Starting final error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);
console.log('Final error fixes completed!');