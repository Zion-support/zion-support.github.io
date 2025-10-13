const fs = require('fs');
const path = require('path');

// List of files with JSX errors
const filesToFix = [
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
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
    
    // Find the second export default function (the correct one)
    const exportMatches = content.match(/export default function (\w+)/g);
    if (exportMatches && exportMatches.length >= 2) {
      const secondFunctionName = exportMatches[1].replace('export default function ', '');
      
      // Remove everything before the second export default function
      const secondExportIndex = content.indexOf(exportMatches[1]);
      content = content.substring(secondExportIndex);
      
      // Add the imports back
      content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

` + content;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure proper closing tags
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