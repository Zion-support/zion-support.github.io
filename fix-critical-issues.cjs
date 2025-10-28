const fs = require('fs');
const path = require('path');

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix specific files with known issues
function fixSpecificFiles() {
  const filesToFix = [
    '/workspace/app/ai-services/business-intelligence/page.tsx',
    '/workspace/app/ai-services/content-generation/page.tsx',
    '/workspace/app/ai-services/customer-experience/page.tsx',
    '/workspace/app/ai-services/document-processing/page.tsx',
    '/workspace/app/ai-services/energy-management/page.tsx',
    '/workspace/app/ai-services/fraud-detection/page.tsx',
    '/workspace/app/ai-services/hr-analytics/page.tsx',
    '/workspace/app/ai-services/marketing-automation/page.tsx',
    '/workspace/app/ai-services/predictive-maintenance/page.tsx',
    '/workspace/app/ai-services/process-automation/page.tsx',
    '/workspace/app/ai-services/quality-assurance/page.tsx',
    '/workspace/app/ai-services/supply-chain/page.tsx',
    '/workspace/app/it-services/cloud-migration/page.tsx',
    '/workspace/app/medical-records-manager/page.tsx',
    '/workspace/app/micro-saas/ai-content-writer/page.tsx',
    '/workspace/app/micro-saas/ai-content-writer-pro/page.tsx',
    '/workspace/app/micro-saas/ai-customer-support-chatbot/page.tsx',
    '/workspace/app/micro-saas/ai-email-marketing-automation/page.tsx',
    '/workspace/app/micro-saas/ai-expense-tracker/page.tsx',
    '/workspace/app/micro-saas/ai-inventory-manager/page.tsx',
    '/workspace/app/micro-saas/ai-project-manager/page.tsx',
    '/workspace/app/micro-saas/ai-social-media-scheduler/page.tsx',
    '/workspace/app/micro-saas/analytics-dashboard/page.tsx',
    '/workspace/app/micro-saas/appointment-scheduler/page.tsx',
    '/workspace/app/micro-saas/chat-analytics/page.tsx',
    '/workspace/app/micro-saas/content-generator/page.tsx',
    '/workspace/app/micro-saas/contract-manager/page.tsx',
    '/workspace/app/micro-saas/document-processor/page.tsx',
    '/workspace/app/micro-saas/email-marketing/page.tsx',
    '/workspace/app/micro-saas/email-signature/page.tsx',
    '/workspace/app/micro-saas/employee-directory/page.tsx',
    '/workspace/app/micro-saas/expense-tracker/page.tsx',
    '/workspace/app/micro-saas/inventory-management/page.tsx',
    '/workspace/app/micro-saas/lead-scoring/page.tsx',
    '/workspace/app/micro-saas/seo-optimizer/page.tsx',
    '/workspace/app/micro-saas/social-manager/page.tsx',
    '/workspace/app/micro-saas/support-bot/page.tsx',
    '/workspace/app/micro-saas-services/ai-analytics-dashboard/page.tsx',
    '/workspace/app/micro-saas-services/ai-chatbot-builder/page.tsx',
    '/workspace/app/micro-saas-services/ai-content-generator/page.tsx',
    '/workspace/app/micro-saas-services/ai-email-assistant/page.tsx',
    '/workspace/app/micro-saas-services/ai-lead-generation/page.tsx',
    '/workspace/app/micro-saas-services/page.tsx',
    '/workspace/app/online-learning-platform/page.tsx',
    '/workspace/app/property-management-ai/page.tsx',
    '/workspace/app/supply-chain-optimizer/page.tsx',
    '/workspace/app/test/page.tsx',
    '/workspace/app/zion-ai-api-tester/page.tsx',
    '/workspace/app/zion-ai-database-optimizer/page.tsx'
  ];

  let fixedCount = 0;
  
  for (const filePath of filesToFix) {
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove ErrorBoundary import
        if (content.includes("import { ErrorBoundary } from '../components/ErrorBoundary';")) {
          content = content.replace("import { ErrorBoundary } from '../components/ErrorBoundary';\n", '');
          modified = true;
        }
        
        if (content.includes("import { ErrorBoundary } from './components/ErrorBoundary';")) {
          content = content.replace("import { ErrorBoundary } from './components/ErrorBoundary';\n", '');
          modified = true;
        }
        
        // Remove unused variable declarations
        const unusedVarPatterns = [
          /const\s+[A-Z][a-zA-Z]*Page\s*=\s*[^;]+;/g,
        ];
        
        for (const pattern of unusedVarPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            for (const match of matches) {
              content = content.replace(match + '\n', '');
              modified = true;
            }
          }
        }
        
        // Clean up multiple empty lines
        content = content.replace(/\n\n\n+/g, '\n\n');
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  return fixedCount;
}

// Fix component files with unused props
function fixComponentFiles() {
  const componentFiles = [
    '/workspace/app/components/AccessibilityComponents.tsx',
    '/workspace/app/components/ContentNewsletterSignup.tsx',
    '/workspace/app/components/ContentStatistics.tsx',
    '/workspace/app/components/EnhancedSEO.tsx',
    '/workspace/app/components/Header.tsx',
    '/workspace/app/components/SEOOptimizer.tsx'
  ];

  let fixedCount = 0;
  
  for (const filePath of componentFiles) {
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove unused _props parameter
        if (content.includes('_props')) {
          content = content.replace(/const\s+_props\s*=\s*[^;]+;/g, '');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed component: ${filePath}`);
          fixedCount++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  return fixedCount;
}

// Fix types file
function fixTypesFile() {
  const filePath = '/workspace/app/types/next.d.ts';
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove unused imports and types
      if (content.includes("import { ReactNode } from 'react';")) {
        content = content.replace("import { ReactNode } from 'react';\n", '');
        modified = true;
      }
      
      // Remove unused type declarations
      const unusedTypePatterns = [
        /interface\s+PerformanceEventTiming\s*\{[^}]*\}/g,
        /interface\s+LayoutShift\s*\{[^}]*\}/g,
      ];
      
      for (const pattern of unusedTypePatterns) {
        const matches = content.match(pattern);
        if (matches) {
          for (const match of matches) {
            content = content.replace(match + '\n', '');
            modified = true;
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed types file: ${filePath}`);
        return true;
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Main execution
console.log('Starting critical issues cleanup...');

const pageFixedCount = fixSpecificFiles();
const componentFixedCount = fixComponentFiles();
const typesFixed = fixTypesFile();

console.log(`Fixed ${pageFixedCount} page files`);
console.log(`Fixed ${componentFixedCount} component files`);
console.log(`Fixed types file: ${typesFixed}`);

console.log('Critical issues cleanup completed');