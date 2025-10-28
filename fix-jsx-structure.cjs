const fs = require('fs');
const path = require('path');

// CommonJS setup
const __filename = require.resolve('./fix-jsx-structure.cjs');
const __dirname = path.dirname(__filename);

// Files that need to be fixed
const filesToFix = [
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
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
    
    // Remove duplicate ErrorBoundary tags
    content = content.replace(/<ErrorBoundary>\s*<ErrorBoundary>/g, '<ErrorBoundary>');
    
    // Fix the structure to have proper ErrorBoundary wrapper
    content = content.replace(
      /export default function Page\(\) \{\s*return \(\s*<ErrorBoundary>\s*<Navigation \/>/g,
      'export default function Page() {\n  return (\n    <ErrorBoundary>\n      <Navigation />'
    );
    
    // Fix the closing structure
    content = content.replace(
      / {6}<Footer \/>\s*<\/ErrorBoundary>\s*\);\s*}/g,
      '      <Footer />\n    </ErrorBoundary>\n  );\n}'
    );
    
    // Remove any remaining duplicate function declarations
    const duplicateFunctionRegex = /export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{[\s\S]*?\n\}/g;
    content = content.replace(duplicateFunctionRegex, '');
    
    // Remove any remaining references to old function names
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
console.log('Fixing JSX structure...');
filesToFix.forEach(fixFile);

console.log('Done!');