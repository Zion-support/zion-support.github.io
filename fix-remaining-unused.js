#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to fix with their unused imports and variables
const filesToFix = [
  {
    file: 'app/components/Analytics.tsx',
    removeImports: ['useEffect', 'Star']
  },
  {
    file: 'app/components/EnhancedAccessibility.tsx',
    removeImports: ['useEffect', 'Link']
  },
  {
    file: 'app/components/EnhancedErrorFeedback.tsx',
    removeImports: ['Component', 'ErrorInfo', 'ReactNode', 'Home', 'AlertTriangle']
  },
  {
    file: 'app/components/EnhancedPerformanceMonitor.tsx',
    removeImports: ['useEffect', 'useState', 'Star']
  },
  {
    file: 'app/components/ErrorBoundary.tsx',
    removeImports: ['Component', 'ErrorInfo', 'ReactNode', 'Home', 'AlertTriangle', 'RefreshCw']
  },
  {
    file: 'app/components/ErrorFallback.tsx',
    removeImports: ['useEffect', 'Link', 'Home', 'AlertTriangle', 'Mail']
  },
  {
    file: 'app/components/Footer.tsx',
    removeImports: ['useMemo']
  },
  {
    file: 'app/components/ImageOptimizer.tsx',
    removeImports: ['useState', 'useRef', 'useEffect', 'Box']
  },
  {
    file: 'app/components/ImprovedErrorBoundary.tsx',
    removeImports: ['Component', 'ErrorInfo', 'ReactNode', 'Link', 'Home', 'AlertTriangle', 'Mail', 'Hand']
  },
  {
    file: 'app/components/ImprovedImage.tsx',
    removeImports: ['useState', 'useRef', 'useEffect', 'Cloud']
  },
  {
    file: 'app/components/ImprovedNavigation.tsx',
    removeImports: ['useState', 'useEffect']
  },
  {
    file: 'app/components/LazyImage.tsx',
    removeImports: ['useState', 'useRef', 'useEffect']
  },
  {
    file: 'app/components/MobileNavigation.tsx',
    removeImports: ['useState', 'Link']
  },
  {
    file: 'app/components/Navigation.tsx',
    removeImports: ['useState', 'useCallback', 'useMemo']
  },
  {
    file: 'app/contact/page.tsx',
    removeVariables: ['formData', 'isSubmitted', 'handleInputChange', 'handleSubmit', 'contactInfo']
  },
  {
    file: 'app/main.tsx',
    removeImports: ['ReactDOM', 'App', 'Helmet']
  },
  {
    file: 'app/pricing/page.tsx',
    removeVariables: ['aiServicesPricing', 'microSaasPricing', 'enterprisePricing', 'faqs']
  },
  {
    file: 'app/services/page.tsx',
    removeVariables: ['services']
  },
  {
    file: 'hooks/usePerformanceOptimization.ts',
    removeImports: ['useEffect', 'useCallback', 'useRef'],
    removeVariables: ['PerformanceOptimizationOptions']
  }
];

function removeUnusedImports(content, importsToRemove) {
  let lines = content.split('\n');
  
  for (const importName of importsToRemove) {
    // Remove from named imports
    lines = lines.map(line => {
      if (line.includes('import') && line.includes('{')) {
        // Handle named imports
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const filteredImports = imports.filter(imp => imp !== importName);
          
          if (filteredImports.length === 0) {
            return ''; // Remove entire line if no imports left
          } else if (filteredImports.length !== imports.length) {
            return line.replace(importMatch[1], filteredImports.join(', '));
          }
        }
      }
      return line;
    });
  }
  
  // Remove empty lines
  lines = lines.filter(line => line.trim() !== '');
  
  return lines.join('\n');
}

function removeUnusedVariables(content, variablesToRemove) {
  let lines = content.split('\n');
  
  for (const variableName of variablesToRemove) {
    lines = lines.filter(line => {
      // Remove variable declarations
      const varMatch = line.match(new RegExp(`\\s*const\\s+${variableName}\\s*=`));
      const letMatch = line.match(new RegExp(`\\s*let\\s+${variableName}\\s*=`));
      const varMatch2 = line.match(new RegExp(`\\s*var\\s+${variableName}\\s*=`));
      
      return !varMatch && !letMatch && !varMatch2;
    });
  }
  
  return lines.join('\n');
}

function fixFile(filePath, config) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    if (config.removeImports) {
      content = removeUnusedImports(content, config.removeImports);
    }
    
    if (config.removeVariables) {
      content = removeUnusedVariables(content, config.removeVariables);
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Fixing remaining unused imports and variables...');
filesToFix.forEach(config => {
  fixFile(config.file, config);
});

console.log('Done!');