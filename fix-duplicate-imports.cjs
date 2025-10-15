#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports and malformed import statements
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const result = [];
  const imports = new Map(); // module -> { default: [], named: [] }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an import statement
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s+(?:{([^}]+)}|([^{][^;]+?))\s+from\s+['"]([^'"]+)['"];?/);
      if (match) {
        const namedImports = match[1];
        const defaultImport = match[2];
        const moduleName = match[3];
        
        if (!imports.has(moduleName)) {
          imports.set(moduleName, { default: [], named: [] });
        }
        
        if (namedImports) {
          const namedImportList = namedImports.split(',').map(imp => imp.trim());
          imports.get(moduleName).named.push(...namedImportList);
        } else if (defaultImport) {
          imports.get(moduleName).default.push(defaultImport.trim());
        }
      }
    } else if (line.trim().startsWith(',') || line.trim().startsWith('  ,')) {
      // Skip malformed import lines that start with comma
      continue;
    } else {
      result.push(line);
    }
  }
  
  // Generate new import statements
  for (const [moduleName, { default: defaultImports, named: namedImports }] of imports) {
    if (defaultImports.length > 0 && namedImports.length > 0) {
      // Both default and named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.unshift(`import ${defaultImports[0]}, { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    } else if (defaultImports.length > 0) {
      // Only default imports
      result.unshift(`import ${defaultImports[0]} from '${moduleName}';`);
    } else if (namedImports.length > 0) {
      // Only named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.unshift(`import { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    }
  }
  
  return result.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix duplicate imports
    content = fixDuplicateImports(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicate imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with known duplicate import issues
const problematicFiles = [
  'App.tsx',
  'app/App.tsx',
  'app/ai-customer-support-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-financial-platform/page.tsx',
  'app/case-studies/page.tsx',
  'app/components/Footer.tsx',
  'app/contact/page.tsx',
  'app/database-solutions/page.tsx',
  'app/micro-saas-solutions/page.tsx',
  'app/micro-saas/page.tsx',
  'app/performance-monitoring/page.tsx',
  'app/services/page.tsx',
  'app/support/page.tsx'
];

console.log(`Fixing ${problematicFiles.length} files with duplicate import issues...`);

let fixedCount = 0;
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);