#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining issues
function fixAllIssues(content) {
  const lines = content.split('\n');
  const result = [];
  const imports = new Map(); // module -> { default: [], named: [] }
  let hasReactImport = false;
  let hasReactHooks = false;
  
  // First pass: collect all imports and detect React usage
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s+(?:{([^}]+)}|([^{][^;]+?))\s+from\s+['"]([^'"]+)['"];?/);
      if (match) {
        const namedImports = match[1];
        const defaultImport = match[2];
        const moduleName = match[3];
        
        if (moduleName === 'react') {
          hasReactImport = true;
          if (namedImports) {
            const namedImportList = namedImports.split(',').map(imp => imp.trim());
            imports.set(moduleName, { default: [], named: namedImportList });
          } else if (defaultImport) {
            imports.set(moduleName, { default: [defaultImport.trim()], named: [] });
          }
        } else {
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
      }
    }
  }
  
  // Check if React hooks are used
  const codeContent = content.replace(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g, '');
  const usesUseState = codeContent.includes('useState');
  const usesUseEffect = codeContent.includes('useEffect');
  const usesLazy = codeContent.includes('lazy');
  const usesSuspense = codeContent.includes('Suspense');
  const usesMemo = codeContent.includes('memo');
  const usesComponent = codeContent.includes('Component');
  const usesReactNode = codeContent.includes('ReactNode');
  const usesErrorInfo = codeContent.includes('ErrorInfo');
  const usesComponentType = codeContent.includes('ComponentType');
  
  if (usesUseState || usesUseEffect || usesLazy || usesSuspense || usesMemo || usesComponent || usesReactNode || usesErrorInfo || usesComponentType) {
    hasReactHooks = true;
  }
  
  // Second pass: process lines and fix issues
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip malformed import lines
    if (line.trim().startsWith(',') || line.trim().startsWith('  ,')) {
      continue;
    }
    
    // Skip lines that are part of malformed imports
    if (line.trim().startsWith('import ') && line.includes(',') && !line.includes('{') && !line.includes('from')) {
      continue;
    }
    
    // Skip duplicate import lines
    if (line.trim().startsWith('import ') && line.includes('useEffect') && line.includes('useEffect')) {
      continue;
    }
    
    result.push(line);
  }
  
  // Generate clean import statements
  const cleanImports = [];
  
  // Add React import if needed
  if (hasReactHooks && !hasReactImport) {
    const reactImports = [];
    if (usesUseState) reactImports.push('useState');
    if (usesUseEffect) reactImports.push('useEffect');
    if (usesLazy) reactImports.push('lazy');
    if (usesSuspense) reactImports.push('Suspense');
    if (usesMemo) reactImports.push('memo');
    if (usesComponent) reactImports.push('Component');
    if (usesReactNode) reactImports.push('ReactNode');
    if (usesErrorInfo) reactImports.push('ErrorInfo');
    if (usesComponentType) reactImports.push('ComponentType');
    
    if (reactImports.length > 0) {
      cleanImports.push(`import React, { ${reactImports.join(', ')} } from 'react';`);
    } else {
      cleanImports.push(`import React from 'react';`);
    }
  } else if (hasReactImport && imports.has('react')) {
    const reactImports = imports.get('react');
    const allImports = [...reactImports.default, ...reactImports.named];
    const uniqueImports = [...new Set(allImports)];
    
    if (uniqueImports.length > 0) {
      if (reactImports.default.length > 0) {
        cleanImports.push(`import React, { ${reactImports.named.join(', ')} } from 'react';`);
      } else {
        cleanImports.push(`import { ${reactImports.named.join(', ')} } from 'react';`);
      }
    }
  }
  
  // Add other imports
  for (const [moduleName, { default: defaultImports, named: namedImports }] of imports) {
    if (moduleName === 'react') continue;
    
    if (defaultImports.length > 0 && namedImports.length > 0) {
      const uniqueNamed = [...new Set(namedImports)];
      cleanImports.push(`import ${defaultImports[0]}, { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    } else if (defaultImports.length > 0) {
      cleanImports.push(`import ${defaultImports[0]} from '${moduleName}';`);
    } else if (namedImports.length > 0) {
      const uniqueNamed = [...new Set(namedImports)];
      cleanImports.push(`import { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    }
  }
  
  // Insert clean imports at the beginning
  const finalResult = [...cleanImports, ...result];
  
  return finalResult.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix all issues
    content = fixAllIssues(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed all issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Fixing all remaining issues in ${files.length} TypeScript files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);