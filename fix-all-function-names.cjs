const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'app/ecommerce-analytics-pro/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-api-manager/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-ai-data-warehouse/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/zion-ai-expense-tracker/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/zion-ai-mobile-app-builder/page.tsx',
  'app/zion-ai-social-listener/page.tsx',
  'app/zion-ai-testing-automation/page.tsx',
  'app/zion-ai-workflow-automation/page.tsx',
  'app/zion-ecommerce-optimizer/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx'
];

function fixFunctionName(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2];
    
    // Convert kebab-case to PascalCase
    const functionName = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    // Replace the function name
    const functionRegex = /export default function [A-Za-z-]+Page\(/;
    content = content.replace(functionRegex, `export default function ${functionName}(`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath} -> ${functionName}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting to fix function names...');
let fixedCount = 0;

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    if (fixFunctionName(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed ${fixedCount} function names`);