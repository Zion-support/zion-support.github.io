const fs = require('fs');
const path = require('path');

// List of files to fix
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
    
    // Extract the correct function name from the second export default
    const functionNameMatch = content.match(/export default function (\w+)/g);
    if (functionNameMatch && functionNameMatch.length > 1) {
      const correctFunctionName = functionNameMatch[1].replace('export default function ', '');
      
      // Remove the first malformed function and keep only the second one
      const lines = content.split('\n');
      let inFirstFunction = false;
      let braceCount = 0;
      let startIndex = -1;
      let endIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('export default function PageTsxPage()')) {
          inFirstFunction = true;
          startIndex = i;
        }
        
        if (inFirstFunction) {
          // Count braces to find the end of the first function
          for (const char of line) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
          
          if (braceCount === 0 && startIndex !== i) {
            endIndex = i;
            break;
          }
        }
      }
      
      if (startIndex !== -1 && endIndex !== -1) {
        // Remove the first malformed function
        lines.splice(startIndex, endIndex - startIndex + 1);
        content = lines.join('\n');
      }
    }
    
    // Clean up any remaining malformed content
    content = content.replace(/^\s*$\n/gm, ''); // Remove empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPageFile);
console.log('All page files have been processed.');