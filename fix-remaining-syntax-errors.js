#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get all files with syntax errors from the lint output
const filesToFix = [
  './app/contexts/AnalyticsContextDefinition.tsx',
  './app/create-ad/page.tsx',
  './app/data/services.tsx',
  './app/data/servicesData.tsx',
  './app/ecommerce-analytics-pro/page.tsx',
  './app/error.tsx',
  './app/global-error.tsx',
  './app/it-infrastructure/page.tsx',
  './app/legal-document-manager/page.tsx',
  './app/loading.tsx',
  './app/main.tsx',
  './app/medical-records-manager/page.tsx',
  './app/micro-saas-services/microSaasServices.tsx',
  './app/micro-saas-services/services.tsx',
  './app/micro-saas/page.tsx',
  './app/not-found.tsx',
  './app/offline/page.tsx',
  './app/online-learning-platform/page.tsx',
  './app/page-backup.tsx',
  './app/page-optimized.tsx',
  './app/pages/5GSolutionsPage.tsx',
  './app/pages/AIServicesPage.tsx',
  './app/pages/BlogPage.tsx',
  './app/pages/CareersPage.tsx',
  './app/pages/CaseStudiesPage.tsx',
  './app/pages/CloudInfrastructurePage.tsx',
  './app/pages/ContactPage.tsx',
  './app/pages/DemoPage.tsx',
  './app/pages/DigitalTransformationPage.tsx',
  './app/pages/DocumentationPage.tsx',
  './app/pages/FiveGSolutionsPage.tsx',
  './app/pages/ITServicesPage.tsx',
  './app/pages/PricingPage.tsx',
  './app/pages/PrivacyPage.tsx',
  './app/pages/ServicesPage.tsx',
  './app/pages/SolutionsPage.tsx',
  './app/pages/SupportPage.tsx',
  './app/pages/TeamPage.tsx',
  './app/pages/TermsPage.tsx',
  './app/pages/TutorialsPage.tsx',
  './app/partners/page.tsx',
  './app/penetration-testing/page.tsx',
  './app/pricing/page.tsx',
  './app/property-management-ai/page.tsx',
  './app/service-template.tsx',
  './app/sitemap-page.tsx',
  './app/solutions/page.tsx',
  './app/supply-chain-optimizer/page.tsx',
  './app/support/page.tsx',
  './app/test-simple/page.tsx',
  './app/types/next.d.ts',
  './app/utils/__tests__/performanceMonitoring.test.ts',
  './app/utils/accessibilityEnhancer.ts',
  './app/utils/analytics.ts',
  './app/utils/dynamic.tsx',
  './app/utils/errorHandler.tsx',
  './app/utils/image.tsx',
  './app/utils/imageOptimizer.ts',
  './app/utils/lazyLoading.tsx',
  './app/utils/link.tsx',
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
console.log('Starting to fix remaining syntax errors...');
filesToFix.forEach(fixFile);
console.log('Finished fixing remaining syntax errors.');