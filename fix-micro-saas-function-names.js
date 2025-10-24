const fs = require('fs');
const path = require('path');

// List of micro-saas pages that need function name fixes
const microSaasPages = [
  'app/micro-saas/ai-email-marketing-automation/page.tsx',
  'app/micro-saas/ai-expense-tracker/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx'
];

// Function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Fix function names in micro-saas pages
microSaasPages.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the page name from the path
    const pageName = filePath.split('/')[1];
    const functionName = kebabToPascalCase(pageName);
    
    // Replace the function name
    content = content.replace(
      /export default function [^(]+\(/,
      `export default function ${functionName}(`
    );
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed function name in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All micro-saas function names fixed!');