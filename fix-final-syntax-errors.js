#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get all files with remaining syntax errors
const filesToFix = [
  './app/it-infrastructure/page.tsx',
  './app/legal-document-manager/page.tsx',
  './app/main.tsx',
  './app/medical-records-manager/page.tsx',
  './app/micro-saas/page.tsx',
  './app/offline/page.tsx',
  './app/online-learning-platform/page.tsx',
  './app/pages/BlogPage.tsx',
  './app/pages/DemoPage.tsx',
  './app/pages/PricingPage.tsx',
  './app/pages/PrivacyPage.tsx',
  './app/pages/SolutionsPage.tsx',
  './app/pages/SupportPage.tsx',
  './app/pages/TermsPage.tsx',
  './app/pages/TutorialsPage.tsx',
  './app/partners/page.tsx',
  './app/penetration-testing/page.tsx',
  './app/pricing/page.tsx',
  './app/property-management-ai/page.tsx',
  './app/solutions/page.tsx',
  './app/supply-chain-optimizer/page.tsx',
  './app/support/page.tsx',
  './app/test-simple/page.tsx',
  './app/types/next.d.ts',
  './app/utils/__tests__/performanceMonitoring.test.ts',
  './app/utils/accessibilityEnhancer.ts',
  './app/utils/analytics.ts',
  './app/utils/dynamic.tsx',
  './app/utils/imageOptimizer.ts',
  './app/utils/lazyLoading.tsx',
  './app/utils/navigation.tsx',
  './app/utils/seoConstants.ts',
  './app/utils/seoData.ts',
  './app/utils/structuredData.ts',
  './app/utils/testRunner.tsx',
  './app/web-development/page.tsx',
  './app/webinars/page.tsx',
  './app/whitepapers/page.tsx',
  './app/zion-ai-accounting-suite/page.tsx',
  './app/zion-ai-api-manager/page.tsx',
  './app/zion-ai-chatbot-builder/page.tsx',
  './app/zion-ai-data-warehouse/page.tsx',
  './app/zion-ai-document-processor/page.tsx',
  './app/zion-ai-email-optimizer/page.tsx',
  './app/zion-ai-expense-tracker/page.tsx',
  './app/zion-ai-lead-scoring/page.tsx',
  './app/zion-ai-mobile-app-builder/page.tsx',
  './app/zion-ai-social-listener/page.tsx',
  './app/zion-ai-testing-automation/page.tsx',
  './app/zion-ai-workflow-automation/page.tsx',
  './app/zion-ecommerce-optimizer/page.tsx',
  './app/zion-hr-assistant-pro/page.tsx',
  './main.tsx',
  './public/sw.js',
  './vite-env.d.ts'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove git hash at the end
    content = content.replace(/\s+f7f852c0f7415181a1b362c4aa5a784585ad5828\s*$/, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
    content = content.replace(/;\s*{/g, ' {'); // Fix semicolon before opening brace
    content = content.replace(/;\s*return\s*\(/g, ' return ('); // Fix semicolon before return
    content = content.replace(/;\s*export/g, ' export'); // Fix semicolon before export
    
    // Fix JSX syntax issues
    content = content.replace(/;\s*<div/g, ' <div'); // Fix semicolon before JSX
    content = content.replace(/;\s*<\/div>/g, ' </div>'); // Fix semicolon before closing JSX
    content = content.replace(/;\s*<h1/g, ' <h1'); // Fix semicolon before h1
    content = content.replace(/;\s*<p/g, ' <p'); // Fix semicolon before p
    content = content.replace(/;\s*<span/g, ' <span'); // Fix semicolon before span
    
    // Fix string literal issues
    content = content.replace(/'([^']*)'([^']*)'/g, "'$1$2'"); // Fix broken string literals
    content = content.replace(/"([^"]*)"([^"]*)"/g, '"$1$2"'); // Fix broken string literals
    
    // Fix object syntax
    content = content.replace(/{\s*;\s*/g, '{ '); // Fix semicolon after opening brace
    content = content.replace(/;\s*}/g, ' }'); // Fix semicolon before closing brace
    
    // Fix array syntax
    content = content.replace(/\[\s*;\s*/g, '[ '); // Fix semicolon after opening bracket
    content = content.replace(/;\s*\]/g, ' ]'); // Fix semicolon before closing bracket
    
    // Fix function syntax
    content = content.replace(/\(\s*;\s*/g, '( '); // Fix semicolon after opening parenthesis
    content = content.replace(/;\s*\)/g, ' )'); // Fix semicolon before closing parenthesis
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+);\s*$/gm, 'import $1;');
    
    // Fix export statements
    content = content.replace(/export\s+([^;]+);\s*$/gm, 'export $1;');
    
    // Fix React component patterns
    if (content.includes('React.FC') || content.includes('function') || content.includes('const') && content.includes('=')) {
      // Ensure proper JSX return structure
      if (content.includes('return') && !content.includes('return (')) {
        content = content.replace(/return\s+([^;]+);/g, 'return ($1);');
      }
    }
    
    // Fix unterminated string literals
    content = content.replace(/"([^"]*)$/gm, '"$1"'); // Fix unterminated double quotes
    content = content.replace(/'([^']*)$/gm, "'$1'"); // Fix unterminated single quotes
    
    // Fix missing quotes in className attributes
    content = content.replace(/className=([^"'][^>\s]*)/g, 'className="$1"');
    
    // Fix missing quotes in other attributes
    content = content.replace(/(\w+)=([^"'][^>\s]*)/g, '$1="$2"');
    
    // Fix specific patterns for page files
    if (filePath.includes('/page.tsx') || filePath.includes('/pages/')) {
      // Fix common page patterns
      const pagePattern = /"use client";import React from "react";export default function Page\(\) \{\s*return \(\s*<div>Page content<\/div>\s*\)\s*<div>Page content<\/div>\s*\)\s*<div>\s*<\/div>\s*<div>\s*<\/div>"/g;
      const pageReplacement = '"use client";\n\nimport React from "react";\n\nexport default function Page() {\n  return (\n    <div className="min-h-screen bg-gray-900">\n      <div className="container mx-auto px-4 py-8">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>\n          <p className="text-gray-300 text-lg">This page is under development.</p>\n        </div>\n      </div>\n    </div>\n  );\n}';
      content = content.replace(pagePattern, pageReplacement);
    }
    
    // Fix specific patterns for type definition files
    if (filePath.includes('.d.ts')) {
      content = content.replace(/declare module '([^']*) \{\s*const content: "stringexportdefaultcontent\}"'/g, "declare module '$1' {\n  const content: string;\n  export default content;\n}");
    }
    
    // Fix specific patterns for utility files
    if (filePath.includes('/utils/')) {
      // Fix common utility patterns
      content = content.replace(/export\s+const\s+([^=]+)=\s*([^;]+);/g, 'export const $1 = $2;');
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure file ends with newline
    if (!content.endsWith('\n')) {
      content += '\n';
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix final syntax errors...');
filesToFix.forEach(fixFile);
console.log('Finished fixing final syntax errors.');