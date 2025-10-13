const fs = require('fs');
const path = require('path');

// List of files with JSX errors
const filesToFix = [
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/pricing/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx',
  'app/zion-ai-survey-builder/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the first function definition and keep the second one
    const firstFunctionRegex = /export default function PageTsxPage\(\) \{[^}]*\}/s;
    content = content.replace(firstFunctionRegex, '');
    
    // Remove the duplicate import and export statements
    content = content.replace(/import React from 'react';\nimport { Helmet } from 'react-helmet-async';\n\n\n/g, '');
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n\n\n/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure proper closing tags
    if (!content.includes('export default function')) {
      console.log(`Skipping ${filePath} - no export function found`);
      return;
    }
    
    // Add missing closing tags if needed
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      for (let i = 0; i < missingDivs; i++) {
        content += '\n    </div>';
      }
    }
    
    // Ensure the file ends with proper closing
    if (!content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('JSX error fixing completed!');