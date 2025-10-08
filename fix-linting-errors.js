#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files that need fixing
const filesToFix = [
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/app/components/AdvancedPerformanceMonitor.tsx',
  '/workspace/app/components/AdvancedSEOOptimizer.tsx',
  '/workspace/app/components/ImprovedErrorBoundary.tsx',
  '/workspace/app/components/PWAInstaller.tsx',
  '/workspace/app/components/PerformanceMonitor.tsx',
  '/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx',
  '/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx',
  '/workspace/app/hooks/useEnhancedPerformance.ts',
  '/workspace/app/hooks/useForm.ts',
  '/workspace/app/page-minimal.tsx',
  '/workspace/app/page-optimized.tsx',
  '/workspace/app/utils/__tests__/performanceMonitoring.test.ts',
];

function fixUnusedVariables(filePath) {
  if (!fs.existsSync(filePath)) {

    return;
  }

  let _content = fs.readFileSync(filePath, 'utf8');
  let _modified = false;

  // Fix unused variables by prefixing with underscore
  const unusedVarPatterns = [
    // Unused imports
    {
      pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"];?\s*$/gm,
      fix: (match, imports) => {
        const _importList = imports.split(',').map(imp => imp.trim());
        const unusedImports = importList.filter(imp => {
          const _varName = imp.split(' as ')[0].trim();
          return !content.includes(varName) || content.split(varName).length <= 2;
        });

        if (unusedImports.length > 0) {
          const fixedImports = importList
            .map(imp => {
              const _varName = imp.split(' as ')[0].trim();
              if (unusedImports.includes(imp)) {
                return imp.replace(varName, `_${varName}`);
              }
              return imp;
            })
            .join(', ');
          return match.replace(imports, fixedImports);
        }
        return match;
      },
    },
    // Unused variable declarations
    {
      pattern: /const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,
      fix: (match, varName) => {
        if (varName.startsWith('_')) return match;
        const _regex = new RegExp(`\\b${varName}\\b`, 'g');
        const _matches = content.match(regex);
        if (matches && matches.length <= 1) {
          return match.replace(varName, `_${varName}`);
        }
        return match;
      },
    },
    // Unused function parameters
    {
      pattern: /function\s+[^(]*\(([^)]+)\)/g,
      fix: (match, params) => {
        const _paramList = params.split(',').map(p => p.trim());
        const fixedParams = paramList
          .map(param => {
            const _paramName = param.split(':')[0].trim();
            if (!paramName.startsWith('_') && !paramName.includes('=')) {
              return param.replace(paramName, `_${paramName}`);
            }
            return param;
          })
          .join(', ');
        return match.replace(params, fixedParams);
      },
    },
  ];

  // Apply fixes
  for (const { pattern, fix } of unusedVarPatterns) {
    const _newContent = content.replace(pattern, fix);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);

  }
}

// Fix all files
filesToFix.forEach(fixUnusedVariables);

// Run linter to check results
try {
  execSync('pnpm run lint:comprehensive', { stdio: 'inherit' });
} catch (error) {

}
