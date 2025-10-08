#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Function to fix common lint issues in a file
function fixLintIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Skip if not a source file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.js') && !filePath.endsWith('.jsx')) {
      return false;
    }
    
    // Skip test files and certain directories
    if (filePath.includes('/__tests__/') || filePath.includes('/test/') || filePath.includes('.test.') || filePath.includes('.spec.')) {
      return false;
    }
    
//     console.log(`Fixing lint issues in: ${filePath}`);
    
    // Fix 1: Remove unused React imports (keep if JSX is used)
    if (content.includes('import React from \'react\';') && !content.includes('<') && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // Fix 2: Remove unused Helmet imports
    if (content.includes('import { Helmet } from \'react-helmet-async\';') && !content.includes('<Helmet')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }
    
    // Fix 3: Remove unused lucide-react imports
    const lucideMatch = content.match(/import { ([^}]+) } from 'lucide-react';/);
    if (lucideMatch) {
      const imports = lucideMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => content.includes(imp));
      if (usedImports.length === 0) {
        content = content.replace(/import { [^}]+ } from 'lucide-react';\n?/g, '');
        modified = true;
      } else if (usedImports.length < imports.length) {
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(/import { [^}]+ } from 'lucide-react';/g, newImport);
        modified = true;
      }
    }
    
    // Fix 4: Remove unused variables (simple cases)
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are just unused variable declarations
      if (line.match(/^\s*const\s+\w+\s*=\s*[^;]+;\s*$/) && 
          !line.includes('export') && 
          !line.includes('return') &&
//           !line.includes('console.log') &&
//           !line.includes('console.error') &&
//           !line.includes('console.warn')) {
        
//         const varName = line.match(/const\s+(\w+)/)?.[1];
        if (varName && !content.includes(varName + '.') && !content.includes(varName + '(') && !content.includes(varName + '[')) {
          // Comment out instead of removing to be safe
          fixedLines.push('// ' + line);
          modified = true;
          continue;
        }
      }
      
      // Fix 5: Comment out console statements in production code
//       if (line.includes('console.') && !filePath.includes('test') && !filePath.includes('spec')) {
        if (!line.trim().startsWith('//')) {
          fixedLines.push('// ' + line);
          modified = true;
          continue;
        }
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Fix 6: Remove unused useCallback imports
    if (content.includes('useCallback') && !content.includes('useCallback(')) {
      content = content.replace(/,\s*useCallback/g, '');
      content = content.replace(/useCallback,\s*/g, '');
      if (content.includes('import { useCallback }')) {
        content = content.replace(/import { useCallback } from 'react';\n?/g, '');
      }
      modified = true;
    }
    
    // Fix 7: Remove unused lazy imports
    if (content.includes('lazy') && !content.includes('lazy(')) {
      content = content.replace(/,\s*lazy/g, '');
      content = content.replace(/lazy,\s*/g, '');
      if (content.includes('import { lazy }')) {
        content = content.replace(/import { lazy } from 'react';\n?/g, '');
      }
      modified = true;
    }
    
    // Fix 8: Remove unused Link imports from react-router-dom
    if (content.includes('import { Link } from \'react-router-dom\';') && !content.includes('<Link')) {
      content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
      modified = true;
    }
    
    // Fix 9: Remove unused Users imports
//     const unusedIcons = ['ArrowLeft', 'Search', 'BookOpen', 'Users', 'Star', 'Target', 'CheckCircle', 'Calendar', 'User', 'Tag', 'Cpu'];
    for (const icon of unusedIcons) {
      if (content.includes(icon) && !content.includes(`<${icon}`) && !content.includes(`${icon}.`)) {
        content = content.replace(new RegExp(`,\\s*${icon}`, 'g'), '');
        content = content.replace(new RegExp(`${icon},\\s*`, 'g'), '');
        content = content.replace(new RegExp(`import { ${icon} } from 'lucide-react';\n?`, 'g'), '');
        modified = true;
      }
    }
    
    // Fix 10: Remove unused jest imports in non-test files
    if (content.includes('jest') && !filePath.includes('test') && !filePath.includes('spec')) {
      content = content.replace(/,\s*jest/g, '');
      content = content.replace(/\s*/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
//     console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix lint issues
function fixAllLintIssues(_dir) {
  try {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      
      try {
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (['node_modules', '.git', 'dist', '.next', 'media', '__tests__'].includes(file)) {
            continue;
          }
          fixedCount += fixAllLintIssues(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
          if (fixLintIssues(filePath)) {
            fixedCount++;
          }
        }
      } catch (error) {
//         console.log(`Skipping ${filePath}: ${error.message}`);
        continue;
      }
    }
    
    return fixedCount;
  } catch (error) {
//     console.log(`Skipping directory ${dir}: ${error.message}`);
    return 0;
  }
}

// Main execution
// const workspaceDir = process.cwd();
// console.log('Starting lint issue resolution...');
// const fixedCount = fixAllLintIssues(workspaceDir);
// console.log(`Fixed lint issues in ${fixedCount} files.`);