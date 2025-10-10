#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix syntax errors in component files
function fixComponentSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Fix malformed function declarations
    const functionPatterns = [
      // Fix function declarations with extra commas
      {
        regex: /(\w+)\s*=\s*([^,;]+)(\s*)(\n\s*[a-zA-Z_$])/g,
        replacement: '$1 = $2,$3$4'
      },
      // Fix arrow functions with extra commas
      {
        regex: /\)\s*=>\s*\{,/g,
        replacement: ') => {'
      },
      // Fix function calls with extra commas
      {
        regex: /(\w+)\s*\([^)]*\),/g,
        replacement: '$1('
      }
    ];
    
    functionPatterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix 2: Fix specific syntax issues
    const syntaxFixes = [
      // Fix malformed variable declarations
      {
        regex: /let\s+(\w+):\s*(\w+),/g,
        replacement: 'let $1: $2;'
      },
      {
        regex: /const\s+(\w+):\s*(\w+),/g,
        replacement: 'const $1: $2;'
      },
      // Fix malformed object properties
      {
        regex: /(\w+):\s*([^,;]+),/g,
        replacement: '$1: $2,'
      },
      // Fix malformed array declarations
      {
        regex: /\[\s*([^]]+)\s*\]/g,
        replacement: (match, content) => {
          if (content.includes(',')) {
            return `[${content}]`;
          }
          return match;
        }
      }
    ];
    
    syntaxFixes.forEach(fix => {
      const newContent = content.replace(fix.regex, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix 3: Fix JSX issues
    const jsxFixes = [
      // Fix unclosed JSX elements
      {
        regex: /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=\n\s*<[^\/]|$)/g,
        replacement: (match, tagName, attributes, innerContent) => {
          if (!innerContent.includes(`</${tagName}>`) && !attributes.includes('/')) {
            return `<${tagName}${attributes}>${innerContent}</${tagName}>`;
          }
          return match;
        }
      },
      // Fix JSX expressions that need parent elements
      {
        regex: /^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm,
        replacement: (match, indent, firstElement, secondElement) => {
          return `${indent}<>\n${indent}  ${firstElement}\n${indent}  ${secondElement}\n${indent}</>`;
        }
      }
    ];
    
    jsxFixes.forEach(fix => {
      const newContent = content.replace(fix.regex, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix 4: Fix specific file issues
    if (filePath.includes('AdvancedPerformanceMonitor.tsx')) {
      // Fix specific issues in this file
      content = content.replace(/const\s+(\w+):\s*(\w+),/g, 'const $1: $2;');
      content = content.replace(/let\s+(\w+):\s*(\w+),/g, 'let $1: $2;');
    }
    
    if (filePath.includes('Analytics.tsx')) {
      // Fix specific issues in this file
      content = content.replace(/const\s+(\w+):\s*(\w+),/g, 'const $1: $2;');
      content = content.replace(/let\s+(\w+):\s*(\w+),/g, 'let $1: $2;');
    }
    
    if (filePath.includes('ContactForm.tsx')) {
      // Fix specific issues in this file
      content = content.replace(/const\s+(\w+):\s*(\w+),/g, 'const $1: $2;');
      content = content.replace(/let\s+(\w+):\s*(\w+),/g, 'let $1: $2;');
    }
    
    if (filePath.includes('ContentCarousel.tsx')) {
      // Fix specific issues in this file
      content = content.replace(/const\s+(\w+):\s*(\w+),/g, 'const $1: $2;');
      content = content.replace(/let\s+(\w+):\s*(\w+),/g, 'let $1: $2;');
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax errors in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive component syntax fixes...');

const problematicComponents = [
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/Analytics.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/ContactForm.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx'
];

let fixedCount = 0;
problematicComponents.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixComponentSyntax(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Also run a comprehensive fix for all component files
console.log('Running comprehensive fix for all component files...');
try {
  const { execSync } = require('child_process');
  const result = execSync('find app/components -name "*.tsx" | head -50', { 
    encoding: 'utf8',
    cwd: process.cwd()
  });
  const allComponentFiles = result.trim().split('\n').filter(f => f.length > 0);
  
  allComponentFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix common syntax issues
        const commonPatterns = [
          // Fix malformed function declarations
          {
            regex: /\)\s*=>\s*\{,/g,
            replacement: ') => {'
          },
          // Fix malformed variable declarations
          {
            regex: /const\s+(\w+):\s*(\w+),/g,
            replacement: 'const $1: $2;'
          },
          {
            regex: /let\s+(\w+):\s*(\w+),/g,
            replacement: 'let $1: $2;'
          },
          // Fix malformed object properties
          {
            regex: /(\w+):\s*([^,;]+),/g,
            replacement: '$1: $2,'
          }
        ];
        
        commonPatterns.forEach(pattern => {
          const newContent = content.replace(pattern.regex, pattern.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Applied comprehensive fix to: ${file}`);
        }
      } catch (error) {
        console.error(`Error applying comprehensive fix to ${file}:`, error.message);
      }
    }
  });
} catch (error) {
  console.error('Error finding component files:', error.message);
}

console.log('Comprehensive component syntax fixes completed!');