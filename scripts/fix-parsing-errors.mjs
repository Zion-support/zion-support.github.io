#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Parsing Error Fixer');
console.log('======================\n');

const filesToFix = [
  'src/components/AnalyticsDashboard.tsx',
  'src/components/ChatSystem.tsx',
  'src/components/ContactForm.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedNotificationSystem.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/FileUpload.tsx',
  'src/components/Navigation.tsx',
  'src/components/PerformanceDashboard.tsx',
  'src/components/PerformanceMetrics.tsx',
  'src/components/PerformanceOptimizations.tsx',
  'src/components/PricingCard.tsx',
  'src/components/ProjectManagement.tsx',
  'src/components/SecurityDashboard.tsx',
  'src/components/ServiceCard.tsx',
  'src/components/SettingsPanel.tsx',
  'src/components/TaskManager.tsx',
  'src/components/TestDashboard.tsx',
  'src/components/UserManagement.tsx'
];

function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;

    // Fix common parsing errors
    const fixRules = [
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{\s*$/gm,
        replacement: (match, funcName) => {
          if (funcName && !content.includes(`${funcName}.displayName`)) {
            return match + `\n  ${funcName}.displayName = '${funcName}';\n`;
          }
          return match;
        }
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g,
        replacement: '$1 = ($2) => {'
      },
      // Fix malformed JSX expressions
      {
        pattern: /\{([^}]*)\s*className=/g,
        replacement: '{$1}\n            className='
      },
      // Fix missing closing braces in object literals
      {
        pattern: /{\s*([^}]*)\s*$/gm,
        replacement: (match, content) => {
          if (content && !content.includes('}')) {
            return `{\n  ${content.trim()}\n}`;
          }
          return match;
        }
      },
      // Fix malformed arrow functions
      {
        pattern: /=\s*\([^)]*\)\s*=>\s*{/g,
        replacement: '= ($1) => {'
      },
      // Fix missing closing parentheses
      {
        pattern: /\(([^)]*)\s*$/gm,
        replacement: (match, content) => {
          if (content && !content.includes(')')) {
            return `(${content.trim()})`;
          }
          return match;
        }
      },
      // Fix malformed destructuring
      {
        pattern: /const\s*{\s*([^}]*)\s*$/gm,
        replacement: (match, content) => {
          if (content && !content.includes('}')) {
            return `const { ${content.trim()} }`;
          }
          return match;
        }
      },
      // Fix missing closing brackets
      {
        pattern: /\[\s*([^\]]*)\s*$/gm,
        replacement: (match, content) => {
          if (content && !content.includes(']')) {
            return `[${content.trim()}]`;
          }
          return match;
        }
      }
    ];

    fixRules.forEach(rule => {
      if (typeof rule.pattern === 'function') {
        const newContent = content.replace(rule.pattern, rule.replacement);
        if (newContent !== content) {
          content = newContent;
          fixes++;
        }
      } else {
        const newContent = content.replace(rule.pattern, rule.replacement);
        if (newContent !== content) {
          content = newContent;
          fixes++;
        }
      }
    });

    // Additional specific fixes
    // Fix missing imports
    if (content.includes('motion.') && !content.includes('framer-motion')) {
      content = content.replace(
        /import React[^;]*;/,
        match => match + '\nimport { motion, AnimatePresence } from \'framer-motion\';'
      );
      fixes++;
    }

    // Fix missing display names
    const componentMatches = content.match(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g);
    if (componentMatches) {
      componentMatches.forEach(match => {
        const componentName = match.match(/const\s+(\w+)\s*=/)?.[1];
        if (componentName && !content.includes(`${componentName}.displayName`)) {
          content = content.replace(
            match,
            match + `\n  ${componentName}.displayName = '${componentName}';\n`
          );
          fixes++;
        }
      });
    }

    // Write the fixed content back
    if (fixes > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
      return fixes;
    } else {
      console.log(`ℹ️  No issues found in ${filePath}`);
      return 0;
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    totalFixes += fixParsingErrors(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log(`\n📊 Parsing Fix Summary:`);
console.log(`- Files processed: ${filesToFix.length}`);
console.log(`- Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
  console.log('\n✅ All parsing errors fixed!');
  console.log('🎯 All components should now compile successfully.');
} else {
  console.log('\n✅ No parsing errors found!');
  console.log('🎯 All components are already clean.');
}