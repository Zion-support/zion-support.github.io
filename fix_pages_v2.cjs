const fs = require('fs');

const filesToFix = [
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
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-survey-builder/page.tsx'
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the second export default function and extract everything from there
    const lines = content.split('\n');
    let secondFunctionStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('export default function') && i > 0) {
        secondFunctionStart = i;
        break;
      }
    }
    
    if (secondFunctionStart !== -1) {
      // Keep only the second function and everything after it
      const newContent = lines.slice(secondFunctionStart).join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPageFile);
console.log('All page files have been processed.');