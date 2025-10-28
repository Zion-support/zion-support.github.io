const fs = require('fs');
const path = require('path');

// Define console and __dirname for CommonJS environment
const console = global.console || { log: () => {}, error: () => {} };
const __dirname = path.dirname(require.main.filename);

// Files that have duplicate function declarations
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
  'app/zion-ai-database-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    console.log(`Fixing ${filePath}...`);
    
    // Find all function declarations
    const functionRegex = /export default function \w+\(\) \{[\s\S]*?\n\}/g;
    const matches = content.match(functionRegex);
    
    if (matches && matches.length > 1) {
      console.log(`Found ${matches.length} function declarations in ${filePath}`);
      
      // Keep only the first function declaration
      const firstMatch = matches[0];
      const firstMatchIndex = content.indexOf(firstMatch);
      
      // Remove all function declarations
      content = content.replace(functionRegex, '');
      
      // Add back only the first one at the end
      content = content + '\n' + firstMatch;
    }
    
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
console.log('Fixing function declarations...');
filesToFix.forEach(fixFile);

console.log('Done!');