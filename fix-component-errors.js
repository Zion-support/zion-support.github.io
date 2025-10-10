#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix component errors
function fixComponentErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Fix syntax errors
    const syntaxPatterns = [
      // Fix missing commas
      {
        regex: /(\w+)\s*=\s*([^,;]+)(\s*)(\n\s*[a-zA-Z_$])/g,
        replacement: '$1 = $2,$3$4'
      },
      // Fix malformed JSX
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
    
    syntaxPatterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix 2: Fix specific component issues
    if (filePath.includes('AnimatedCounter.tsx')) {
      // Fix the specific error in AnimatedCounter
      content = content.replace(/const\s+(\w+)\s*=\s*([^,;]+)(\s*)(\n\s*[a-zA-Z_$])/g, 'const $1 = $2,$3$4');
    }
    
    if (filePath.includes('ContactForm.tsx')) {
      // Fix the specific error in ContactForm
      content = content.replace(/const\s+(\w+)\s*=\s*([^,;]+)(\s*)(\n\s*[a-zA-Z_$])/g, 'const $1 = $2,$3$4');
    }
    
    if (filePath.includes('ContentCarousel.tsx')) {
      // Fix JSX parent element issue
      content = content.replace(/^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm, 
        (match, indent, first, second) => `${indent}<>\n${indent}  ${first}\n${indent}  ${second}\n${indent}</>`);
    }
    
    if (filePath.includes('ContentPromotionBanner.tsx')) {
      // Fix JSX parent element issue
      content = content.replace(/^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm, 
        (match, indent, first, second) => `${indent}<>\n${indent}  ${first}\n${indent}  ${second}\n${indent}</>`);
    }
    
    // Fix 3: Remove unused eslint-disable directives
    content = content.replace(/\/\/ eslint-disable-next-line no-console\n/g, '');
    content = content.replace(/\/\/ eslint-disable no-console\n/g, '');
    
    // Fix 4: Fix React Hook dependencies
    if (filePath.includes('Analytics.tsx')) {
      content = content.replace(
        /useEffect\(\(\) => \{[\s\S]*?\}, \[\]\)/g,
        'useEffect(() => {\n    initializeErrorTracking();\n    initializePerformanceMonitoring();\n    initializeUserBehaviorTracking();\n  }, [initializeErrorTracking, initializePerformanceMonitoring, initializeUserBehaviorTracking])'
      );
    }
    
    // Fix 5: Fix fast refresh issues
    if (filePath.includes('AnalyticsProvider.tsx')) {
      // Move constants to a separate file or make them part of the component
      content = content.replace(/export const [^=]+ = [^;]+;/g, '');
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed component errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing component errors in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting component error fixes...');

const problematicComponents = [
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/Analytics.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/AnimatedCounter.tsx',
  'app/components/ContactForm.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx'
];

let fixedCount = 0;
problematicComponents.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixComponentErrors(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed component errors in ${fixedCount} files`);

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
        
        // Fix common component issues
        const commonPatterns = [
          // Remove unused eslint-disable directives
          {
            regex: /\/\/ eslint-disable-next-line no-console\n/g,
            replacement: ''
          },
          {
            regex: /\/\/ eslint-disable no-console\n/g,
            replacement: ''
          },
          // Fix malformed JSX
          {
            regex: /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=\n\s*<[^\/]|$)/g,
            replacement: (match, tagName, attributes, innerContent) => {
              if (!innerContent.includes(`</${tagName}>`) && !attributes.includes('/')) {
                return `<${tagName}${attributes}>${innerContent}</${tagName}>`;
              }
              return match;
            }
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

console.log('Component error fixes completed!');