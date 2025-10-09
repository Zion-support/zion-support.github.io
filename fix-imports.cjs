#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common imports that might be missing
const commonImports = {
  'Link': 'next/link',
  'useMemo': 'react',
  'useCallback': 'react',
  'useState': 'react',
  'useEffect': 'react',
  'Zap': 'lucide-react',
  'Shield': 'lucide-react',
  'Globe': 'lucide-react',
  'Star': 'lucide-react',
  'CheckCircle': 'lucide-react',
  'ArrowRight': 'lucide-react',
  'Phone': 'lucide-react',
  'Mail': 'lucide-react',
  'MapPin': 'lucide-react',
  'Clock': 'lucide-react',
  'Users': 'lucide-react',
  'TrendingUp': 'lucide-react',
  'Heart': 'lucide-react',
  'Lightbulb': 'lucide-react',
  'Brain': 'lucide-react',
  'Target': 'lucide-react',
  'Settings': 'lucide-react',
  'RefreshCw': 'lucide-react',
  'Eye': 'lucide-react',
  'Database': 'lucide-react',
  'AlertTriangle': 'lucide-react',
  'Lock': 'lucide-react',
  'Briefcase': 'lucide-react',
  'ArrowLeft': 'lucide-react'
};

// Find all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check for missing imports
  Object.keys(commonImports).forEach(importName => {
    // Check if the import is used but not imported
    const isUsed = new RegExp(`\\b${importName}\\b`).test(content);
    const isImported = new RegExp(`import.*${importName}.*from`).test(content);
    
    if (isUsed && !isImported) {
      console.log(`Adding missing import ${importName} to ${file}`);
      
      const importSource = commonImports[importName];
      
      if (importSource === 'react') {
        // Add to existing React import
        const reactImportMatch = content.match(/import\s+React(?:\s*,\s*\{([^}]*)\})?\s+from\s+['"]react['"]/);
        if (reactImportMatch) {
          const existingImports = reactImportMatch[1] ? reactImportMatch[1].split(',').map(s => s.trim()) : [];
          if (!existingImports.includes(importName)) {
            existingImports.push(importName);
            const newImport = `import React, { ${existingImports.join(', ')} } from 'react'`;
            content = content.replace(reactImportMatch[0], newImport);
            modified = true;
          }
        } else {
          // Add new React import
          const firstImport = content.match(/import\s+.*?from\s+['"][^'"]+['"]/);
          if (firstImport) {
            const newImport = `import React, { ${importName} } from 'react';\n`;
            content = content.replace(firstImport[0], newImport + firstImport[0]);
            modified = true;
          }
        }
      } else if (importSource === 'next/link') {
        // Add Link import
        const nextImportMatch = content.match(/import\s+.*?from\s+['"]next\/link['"]/);
        if (!nextImportMatch) {
          const firstImport = content.match(/import\s+.*?from\s+['"][^'"]+['"]/);
          if (firstImport) {
            const newImport = `import Link from 'next/link';\n`;
            content = content.replace(firstImport[0], newImport + firstImport[0]);
            modified = true;
          }
        }
      } else if (importSource === 'lucide-react') {
        // Add to existing lucide-react import or create new one
        const lucideImportMatch = content.match(/import\s+\{([^}]*)\}\s+from\s+['"]lucide-react['"]/);
        if (lucideImportMatch) {
          const existingImports = lucideImportMatch[1].split(',').map(s => s.trim());
          if (!existingImports.includes(importName)) {
            existingImports.push(importName);
            const newImport = `import { ${existingImports.join(', ')} } from 'lucide-react'`;
            content = content.replace(lucideImportMatch[0], newImport);
            modified = true;
          }
        } else {
          // Add new lucide-react import
          const firstImport = content.match(/import\s+.*?from\s+['"][^'"]+['"]/);
          if (firstImport) {
            const newImport = `import { ${importName} } from 'lucide-react';\n`;
            content = content.replace(firstImport[0], newImport + firstImport[0]);
            modified = true;
          }
        }
      }
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${file}`);
  }
});

console.log('Import fixing complete!');