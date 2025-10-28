const fs = require('fs');
const path = require('path');

// Files that have duplicate issues
const filesToFix = [
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx',
  'app/5g-mobile-applications/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    console.log(`Fixing ${filePath}...`);
    
    // Remove duplicate React imports
    const lines = content.split('\n');
    const uniqueLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a React import
      if (line.includes('import React')) {
        if (!seenImports.has('React')) {
          uniqueLines.push(line);
          seenImports.add('React');
        }
      } else {
        uniqueLines.push(line);
      }
    }
    
    content = uniqueLines.join('\n');
    
    // Fix duplicate function declarations
    // Remove all function declarations and keep only the first one as default export
    const functionRegex = /^export default function \w+Page\(\) \{[\s\S]*?\n\}/gm;
    const matches = content.match(functionRegex);
    
    if (matches && matches.length > 1) {
      // Keep only the first function declaration
      const firstMatch = matches[0];
      const firstMatchIndex = content.indexOf(firstMatch);
      const lastMatch = matches[matches.length - 1];
      const lastMatchEndIndex = content.indexOf(lastMatch) + lastMatch.length;
      
      // Remove all function declarations
      content = content.replace(functionRegex, '');
      
      // Add back only the first one
      content = content.slice(0, firstMatchIndex) + firstMatch + content.slice(lastMatchEndIndex);
    }
    
    // Fix any remaining function declarations that aren't default exports
    content = content.replace(/^function \w+Page\(\) \{/gm, 'export default function Page() {');
    
    // Remove any remaining references to old function names
    content = content.replace(/<AichatbotbuilderPage \/>/g, '<Page />');
    content = content.replace(/<AicontentgeneratorPage \/>/g, '<Page />');
    content = content.replace(/<AiemailassistantPage \/>/g, '<Page />');
    content = content.replace(/<AileadgenerationPage \/>/g, '<Page />');
    content = content.replace(/<MedicalrecordsmanagerPage \/>/g, '<Page />');
    content = content.replace(/<MicrosaasservicesPage \/>/g, '<Page />');
    content = content.replace(/<OnlinelearningplatformPage \/>/g, '<Page />');
    content = content.replace(/<PropertymanagementaiPage \/>/g, '<Page />');
    content = content.replace(/<SupplychainoptimizerPage \/>/g, '<Page />');
    content = content.replace(/<TestPage \/>/g, '<Page />');
    content = content.replace(/<ZionaiapitesterPage \/>/g, '<Page />');
    content = content.replace(/<ZionaidatabaseoptimizerPage \/>/g, '<Page />');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Fixing duplicate issues...');
filesToFix.forEach(fixFile);

console.log('Done!');