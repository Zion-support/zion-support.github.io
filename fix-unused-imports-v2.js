import fs from 'fs';

// Files with TypeScript errors that need fixing
const filesToFix = [
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-email-marketing/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-neural-memory-assistant/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-project-manager/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/DynamicPageLoader.tsx'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused React imports (only if React is not used in JSX)
    if (content.includes("import React") && !content.includes("<React.") && !content.includes("React.")) {
      content = content.replace(/import\s+React[^;]*;?\s*\n?/g, '');
      modified = true;
    }
    
    // Remove unused Helmet imports
    if (content.includes("import { Helmet }") && !content.includes("<Helmet")) {
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from[^;]*;?\s*\n?/g, '');
      modified = true;
    }
    
    // Remove unused useState variables
    const unusedVars = ['isVisible', 'setIsVisible', 'error', 'specialties'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+\\[${varName}[^\\]]*\\]\\s*=\\s*useState[^;]*;?\\s*\\n?`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });
    
    // Remove unused useEffect imports
    if (content.includes("import { useEffect }") && !content.includes("useEffect(")) {
      content = content.replace(/import\s*{\s*useEffect\s*}\s*from[^;]*;?\s*\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixUnusedImports);

console.log('Unused imports cleanup completed!');