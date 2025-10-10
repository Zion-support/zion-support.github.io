#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common JSX syntax issues
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Add missing closing tags for JSX fragments
    const fragmentPattern = /<>\s*([\s\S]*?)(?=\n\s*<\/>|$)/g;
    content = content.replace(fragmentPattern, (match, innerContent) => {
      if (!innerContent.trim().includes('</>')) {
        modified = true;
        return `<>${innerContent}</>`;
      }
      return match;
    });
    
    // Fix 2: Fix unclosed JSX elements
    const unclosedTagPattern = /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=\n\s*<[^\/]|$)/g;
    content = content.replace(unclosedTagPattern, (match, tagName, attributes, innerContent) => {
      if (!innerContent.includes(`</${tagName}>`) && !attributes.includes('/')) {
        modified = true;
        return `<${tagName}${attributes}>${innerContent}</${tagName}>`;
      }
      return match;
    });
    
    // Fix 3: Fix missing closing braces in JSX expressions
    const jsxExpressionPattern = /(\{[^}]*?)(\s*)(<\/[^>]+>)/g;
    content = content.replace(jsxExpressionPattern, (match, expression, whitespace, closingTag) => {
      if (!expression.includes('}')) {
        modified = true;
        return `${expression}}${whitespace}${closingTag}`;
      }
      return match;
    });
    
    // Fix 4: Fix JSX expressions that need parent elements
    const multipleRootPattern = /^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm;
    content = content.replace(multipleRootPattern, (match, indent, firstElement, secondElement) => {
      modified = true;
      return `${indent}<>\n${indent}  ${firstElement}\n${indent}  ${secondElement}\n${indent}</>`;
    });
    
    // Fix 5: Fix missing commas in object literals
    const objectLiteralPattern = /(\{[^}]*?)(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g;
    content = content.replace(objectLiteralPattern, (match, before, whitespace, property) => {
      if (!before.endsWith(',') && !before.endsWith('{')) {
        modified = true;
        return `${before},${whitespace}${property}`;
      }
      return match;
    });
    
    // Fix 6: Fix missing semicolons
    const semicolonPattern = /([a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*[^;]+)(\s*)(\n\s*[a-zA-Z_$])/g;
    content = content.replace(semicolonPattern, (match, assignment, whitespace, nextLine) => {
      if (!assignment.includes(';')) {
        modified = true;
        return `${assignment};${whitespace}${nextLine}`;
      }
      return match;
    });
    
    // Fix 7: Fix malformed JSX attributes
    const malformedAttributePattern = /(\w+)\s*=\s*([^"'>\s]+)(?=\s*[^=])/g;
    content = content.replace(malformedAttributePattern, (match, attrName, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{')) {
        modified = true;
        return `${attrName}="${value}"`;
      }
      return match;
    });
    
    // Fix 8: Fix missing closing tags for specific elements
    const commonElements = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside'];
    commonElements.forEach(tag => {
      const openPattern = new RegExp(`<${tag}([^>]*)>([^<]*?)(?=\\n\\s*<[^/]|$)`, 'g');
      content = content.replace(openPattern, (match, attributes, innerContent) => {
        if (!innerContent.includes(`</${tag}>`)) {
          modified = true;
          return `<${tag}${attributes}>${innerContent}</${tag}>`;
        }
        return match;
      });
    });
    
    // Fix 9: Fix TypeScript interface/type syntax
    const interfacePattern = /(interface|type)\s+(\w+)\s*\{([^}]*?)(\s*)(\n\s*[a-zA-Z_$])/g;
    content = content.replace(interfacePattern, (match, keyword, name, body, whitespace, nextLine) => {
      if (!body.includes('}')) {
        modified = true;
        return `${keyword} ${name} {${body}}${whitespace}${nextLine}`;
      }
      return match;
    });
    
    // Fix 10: Fix missing closing parentheses in function calls
    const functionCallPattern = /(\w+)\s*\(([^)]*?)(\s*)(\n\s*[a-zA-Z_$])/g;
    content = content.replace(functionCallPattern, (match, funcName, args, whitespace, nextLine) => {
      if (!args.includes(')')) {
        modified = true;
        return `${funcName}(${args})${whitespace}${nextLine}`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTSXFiles() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" | head -50', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(f => f.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('Starting JSX syntax fixes...');

const tsxFiles = findTSXFiles();
console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
});

console.log(`Fixed JSX syntax in ${fixedCount} files`);

// Also run a more aggressive cleanup for specific problematic files
const problematicFiles = [
  'app/components/AnimatedCounter.tsx',
  'app/components/ContactForm.tsx',
  'app/components/EnhancedAccessibilityEnhancer.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedHero.tsx',
  'app/components/EnhancedLoading.tsx',
  'app/components/EnhancedLoadingSkeleton.tsx',
  'app/components/EnhancedPerformanceMonitor.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/EnhancedSEOOptimizer.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/FuturisticHero.tsx',
  'app/components/FuturisticServiceCard.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/LazyImage.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/OptimizedLoadingSpinner.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceEnhancer.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/components/ServiceCardSkeleton.tsx',
  'app/components/SystemMonitor.tsx'
];

console.log('Applying aggressive fixes to problematic files...');
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove any remaining merge conflict markers
      content = content.replace(/^<<<<<<<.*$/gm, '');
      content = content.replace(/^=======.*$/gm, '');
      content = content.replace(/^>>>>>>>.*$/gm, '');
      
      // Fix common syntax issues
      content = content.replace(/,\s*\)/g, ')');
      content = content.replace(/,\s*}/g, '}');
      content = content.replace(/,\s*]/g, ']');
      
      // Ensure proper JSX structure
      if (content.includes('export default') && !content.includes('return')) {
        content = content.replace(/export default function/, 'export default function');
        if (!content.includes('return (')) {
          content = content.replace(/export default function[^{]*{/, 'export default function() {\n  return (');
        }
      }
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Applied aggressive fixes to: ${file}`);
    } catch (error) {
      console.error(`Error applying aggressive fixes to ${file}:`, error.message);
    }
  }
});

console.log('JSX syntax fixes completed!');