const fs = require('fs');
const path = require('path');

// List of files with JSX errors
const filesToFix = [
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/pricing/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the first function declaration and keep only the second one
    const lines = content.split('\n');
    let newLines = [];
    let foundFirstFunction = false;
    let braceCount = 0;
    let inFirstFunction = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('export default function PageTsxPage()') && !foundFirstFunction) {
        foundFirstFunction = true;
        inFirstFunction = true;
        continue;
      }
      
      if (inFirstFunction) {
        // Count braces to know when the first function ends
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        if (braceCount === 0 && line.includes('}')) {
          inFirstFunction = false;
          continue;
        }
        continue;
      }
      
      newLines.push(line);
    }
    
    // Join the lines and clean up
    let newContent = newLines.join('\n');
    
    // Remove any remaining incomplete JSX or syntax issues
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines
    newContent = newContent.replace(/\n\s*$/g, '\n'); // Remove trailing whitespace
    
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('All files fixed!');
