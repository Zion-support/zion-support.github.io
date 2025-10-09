const fs = require('fs');
const path = require('path');

const pagesToFix = [
  'app/sla/page.tsx',
  'app/productivity/page.tsx',
  'app/networking/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/devops/page.tsx',
  'app/cloud-services/page.tsx',
  'app/business-apps/page.tsx',
  'app/api/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-lead-generation/page.tsx'
];

pagesToFix.forEach(pagePath => {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Remove Navigation and Footer imports
    content = content.replace(/import.*Navigation.*from.*\n/g, '');
    content = content.replace(/import.*Footer.*from.*\n/g, '');
    
    // Remove Navigation and Footer components from JSX
    content = content.replace(/<Navigation\s*\/>\s*\n/g, '');
    content = content.replace(/<Footer\s*\/>\s*\n/g, '');
    
    // Remove empty lines that might be left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(pagePath, content);
    console.log(`Fixed ${pagePath}`);
  } catch (error) {
    console.error(`Error fixing ${pagePath}:`, error.message);
  }
});

console.log('All pages fixed!');