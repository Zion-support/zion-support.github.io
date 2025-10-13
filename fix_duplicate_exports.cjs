const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
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
    
    // Find all export default functions
    const exportMatches = content.match(/export default function/g);
    if (!exportMatches || exportMatches.length <= 1) {
      console.log(`Skipping ${filePath} - no duplicate exports found`);
      return;
    }
    
    // Split by export default function
    const parts = content.split(/export default function/);
    
    if (parts.length > 2) {
      // Keep only the first export default function and everything before it
      const firstPart = parts[0];
      const secondPart = parts[1];
      
      // Find the end of the first function
      let braceCount = 0;
      let functionEnd = 0;
      let inString = false;
      let stringChar = '';
      
      for (let i = 0; i < secondPart.length; i++) {
        const char = secondPart[i];
        
        if (!inString && (char === '"' || char === "'" || char === '`')) {
          inString = true;
          stringChar = char;
        } else if (inString && char === stringChar && secondPart[i-1] !== '\\') {
          inString = false;
        } else if (!inString) {
          if (char === '{') {
            braceCount++;
          } else if (char === '}') {
            braceCount--;
            if (braceCount === 0) {
              functionEnd = i + 1;
              break;
            }
          }
        }
      }
      
      if (functionEnd > 0) {
        const fixedContent = firstPart + 'export default function' + secondPart.substring(0, functionEnd);
        fs.writeFileSync(filePath, fixedContent);
        console.log(`Fixed ${filePath}`);
      } else {
        console.log(`Could not find function end in ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Done fixing duplicate exports');