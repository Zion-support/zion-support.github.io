#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with syntax errors to fix
const filesToFix = [
  'src/hooks/usePerformance.ts',
  'src/utils/enhancedAccessibility.ts',
  'src/utils/enhancedErrorHandling.ts',
  'src/utils/enhancedPerformanceMonitoring.ts',
  'src/utils/performance.ts',
  'src/utils/performanceOptimizations.ts',
  'src/utils/security.ts',
  'src/utils/seoEnhancer.ts',
  'src/utils/seoOptimizer.ts',
  'src/utils/testHelpers.ts'
];

function fixSyntaxErrors() {
  filesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix unterminated template literals
      [/\`([^`]*?)\`;\s*$/gm, '`;'],
      [/\`([^`]*?)\`\s*$/gm, '`;'],
      [/\`([^`]*?)\`\s*$/gm, '`;'],
      
      // Fix malformed template literals with backticks
      [/\`([^`]*?)\`\`/g, '`$1`'],
      [/\$\{([^}]*?)\`\}/g, '${$1}'],
      
      // Fix unterminated strings
      [/'([^']*?)$/gm, "'$1';"],
      [/"([^"]*?)$/gm, '"$1";'],
      
      // Fix missing closing braces
      [/(\s+)(\w+):\s*$/gm, '$1$2: null;'],
      
      // Fix malformed function signatures
      [/\}\s*\):\s*string\s*=>/g, '}): string =>'],
      [/\}\s*\):\s*\{[^}]*\}\s*=>/g, '}): { [key: string]: any } =>'],
      
      // Fix unterminated comments
      [/\*\/\s*$/gm, '*/'],
      
      // Fix malformed object literals
      [/,(\s*})/g, '$1'],
      [/,(\s*\])/g, '$1'],
      
      // Fix missing semicolons
      [/([^;}])\s*$/gm, '$1;'],
      
      // Fix malformed template literals in function calls
      [/\`([^`]*?)\`\`/g, '`$1`'],
    ];

    fixes.forEach(([pattern, replacement]) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  });
}

fixSyntaxErrors();
console.log('Syntax error fixing completed!');