/* eslint-env node */
const fs = require('fs');
const path = require('path');

// Files that need to be fixed
const filesToFix = [
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
  'app/zion-ai-database-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    console.log(`Fixing ${filePath}...`);
    
    // Fix the ErrorBoundary wrapper structure
    content = content.replace(
      / {4}<>\s*<Navigation \/>/g,
      '    <ErrorBoundary>\n      <Navigation />'
    );
    
    content = content.replace(
      / {4}<\/>\s*<\/ErrorBoundary>/g,
      '    </ErrorBoundary>'
    );
    
    // Remove any remaining duplicate function declarations
    const duplicateFunctionRegex = /export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{[\s\S]*?\n\}/g;
    content = content.replace(duplicateFunctionRegex, '');
    
    // Remove any remaining references to old function names
    content = content.replace(/<AichatbotbuilderPage \/>/g, '<Page />');
    content = content.replace(/<AicontentgeneratorPage \/>/g, '<Page />');
    content = content.replace(/<AiemailassistantPage \/>/g, '<Page />');
    content = content.replace(/<AileadgenerationPage \/>/g, '<Page />');
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
console.log('Fixing remaining syntax issues...');
filesToFix.forEach(fixFile);

console.log('Done!');