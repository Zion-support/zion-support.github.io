const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/test/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/online-learning-platform/page.tsx'
];

function fixPage(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix the icon component usage
    const newContent = content
      .replace(
        /<feature\.icon className="[^"]+" \/>/g,
        '{React.createElement(feature.icon, { className: "w-12 h-12 text-emerald-400 mb-4" })}'
      );
    
    fs.writeFileSync(fullPath, newContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPage);
console.log('All pages have been fixed for icon component usage!');