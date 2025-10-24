const fs = require('fs');
const path = require('path');

// List of files that need function name fixes
const filesToFix = [
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/analytics/page.tsx',
  'app/api/page.tsx',
  'app/automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

console.log(`Fixing function names in ${filesToFix.length} files...`);

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Create a proper function name from the directory name
  const fileName = path.basename(path.dirname(filePath));
  const functionName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  // Replace the function declaration
  content = content.replace(
    /export default function [^(]+\(\)/,
    `export default function ${functionName}()`
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed function name in: ${filePath} -> ${functionName}`);
});

console.log('All function names fixed!');
