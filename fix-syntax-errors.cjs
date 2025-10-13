const fs = require('fs');
const path = require('path');

// List of files with missing closing braces
const filesToFix = [
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-marketing-automation/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/contact/page.tsx',
  'app/custom-development/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/page.tsx',
  'app/pricing/page.tsx',
  'app/smart-expense-categorizer/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-neural-interface/page.tsx',
  'app/zion-cloud-vault-pro/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Count opening and closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      console.log(`Fixing ${filePath}: adding ${missingBraces} closing braces`);
      
      // Add missing closing braces at the end
      for (let i = 0; i < missingBraces; i++) {
        content += '\n}';
      }
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed ${fixedCount} files`);