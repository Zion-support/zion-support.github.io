const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove unused imports and fix export statements
    if (filePath.includes('/5g-') || filePath.includes('/ai-')) {
      // Remove unused imports from lucide-react
      const unusedImports = [
        'Zap', 'Brain', 'MapPin', 'Download', 'Pause', 'RefreshCw', 'Settings',
        'Eye', 'Filter', 'Calendar', 'Target', 'Users', 'Award', 'TrendingUp',
        'Database', 'Radio', 'Antenna', 'Router', 'Server', 'Network', 'Lock',
        'Activity', 'AlertTriangle', 'FileText', 'Clock', 'Languages', 'Send',
        'ThumbsUp', 'ThumbsDown', 'AlertCircle', 'CheckSquare', 'XCircle',
        'Cpu', 'Smartphone', 'Cloud', 'Key', 'Search', 'MessageCircle', 'Globe',
        'ShoppingCart', 'CreditCard', 'Truck', 'Heart', 'Headphones', 'Bell',
        'Gift', 'Package', 'MessageSquare', 'Percent', 'Star as StarIcon',
        'ShoppingBag', 'Tag', 'Phone', 'Mail', 'Play', 'CheckCircle', 'Star',
        'BarChart3', 'Shield'
      ];

      // Remove unused React imports
      if (content.includes("import React, { memo, lazy, Suspense }")) {
        content = content.replace(/import React, \{ memo, lazy, Suspense \}/g, 'import React');
        modified = true;
      }

      // Remove unused individual React imports
      if (content.includes("import React from 'react'") && !content.includes('useState') && !content.includes('useEffect')) {
        content = content.replace(/import React from 'react';\n/g, '');
        modified = true;
      }

      // Fix export statements - replace __variableName with actual component name
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

      // Remove unused imports from lucide-react
      const importMatch = content.match(/import \{([^}]+)\} from 'lucide-react';/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = imports.filter(imp => {
          const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
          return content.includes(cleanImp) && !unusedImports.includes(cleanImp);
        });
        
        if (usedImports.length !== imports.length) {
          if (usedImports.length > 0) {
            content = content.replace(
              /import \{([^}]+)\} from 'lucide-react';/,
              `import { ${usedImports.join(', ')} } from 'lucide-react';`
            );
          } else {
            content = content.replace(/import \{([^}]+)\} from 'lucide-react';\n/g, '');
          }
          modified = true;
        }
      }

      // Fix duplicate ArrowRight imports
      const arrowRightMatches = content.match(/ArrowRight/g);
      if (arrowRightMatches && arrowRightMatches.length > 1) {
        // Keep only the first import
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
    }

    // Fix 2: Remove console statements
    if (content.includes('console.log') || content.includes('console.warn') || content.includes('console.error')) {
      content = content.replace(/console\.(log|warn|error)\([^)]*\);\n?/g, '');
      modified = true;
    }

    // Fix 3: Remove unused variables
    if (content.includes('const [activeTab, setActiveTab] = useState')) {
      if (!content.includes('activeTab') || !content.includes('setActiveTab')) {
        content = content.replace(/const \[activeTab, setActiveTab\] = useState\([^)]*\);\n?/g, '');
        modified = true;
      }
    }

    // Fix 4: Fix unescaped entities
    content = content.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '&ldquo;$1&rdquo;$2&ldquo;$3&rdquo;');
    content = content.replace(/'([^']*)'/g, '&lsquo;$1&rsquo;');
    modified = true;

    // Fix 5: Remove unused imports in App.tsx
    if (filePath.includes('App.tsx')) {
      if (content.includes("import { Network, Router, Shield } from 'lucide-react';")) {
        content = content.replace(/import \{ Network, Router, Shield \} from 'lucide-react';\n/g, '');
        modified = true;
      }
    }

    // Fix 6: Fix empty import statements
    if (content.includes("import { } from 'lucide-react';")) {
      content = content.replace(/import \{ \} from 'lucide-react';\n/g, '');
      modified = true;
    }

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
console.log('Starting comprehensive error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);
console.log('Comprehensive error fixes completed!');