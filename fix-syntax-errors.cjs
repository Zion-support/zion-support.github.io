const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/5g-implementation/page.tsx',
  'app/about/page.tsx',
  'app/ad-management/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining-pro/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-fintech-solutions/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-fraud-detection-pro/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-language-translation/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-nlp-text-analysis/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-time-series-forecasting/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-services/page.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix icon:color: syntax error
    content = content.replace(/icon:color:/g, 'icon: ArrowRightIcon,\n      color:');
    
    // Fix other common syntax errors
    content = content.replace(/,\s*}/g, '\n    }');
    content = content.replace(/{\s*,/g, '{\n      ');
    content = content.replace(/,\s*,/g, ',');
    
    // Fix unterminated strings
    content = content.replace(/"([^"]*);""/g, '"$1"');
    content = content.replace(/""([^"]*);""/g, '"$1"');
    content = content.replace(/""([^"]*);/g, '"$1"');
    
    // Fix malformed JSX
    content = content.replace(/<div[^>]*>""/g, '<div>');
    content = content.replace(/""<\/div>/g, '</div>');
    
    // Fix class name issues
    content = content.replace(/className="([^"]*);""/g, 'className="$1"');
    content = content.replace(/className="""([^"]*);""/g, 'className="$1"');
    
    // Fix color class issues
    content = content.replace(/text-gray-90o0/g, 'text-gray-900');
    content = content.replace(/text-gray-60o0/g, 'text-gray-600');
    content = content.replace(/text-gray-30o0/g, 'text-gray-300');
    content = content.replace(/bg-gray-90o0/g, 'bg-gray-900');
    content = content.replace(/bg-gray-60o0/g, 'bg-gray-600');
    content = content.replace(/bg-gray-30o0/g, 'bg-gray-300');
    content = content.replace(/border-blue-20o0/g, 'border-blue-200');
    content = content.replace(/border-green-20o0/g, 'border-green-200');
    content = content.replace(/border-purple-20o0/g, 'border-purple-200');
    content = content.replace(/text-blue-90o0/g, 'text-blue-900');
    content = content.replace(/text-green-90o0/g, 'text-green-900');
    content = content.replace(/text-purple-90o0/g, 'text-purple-900');
    content = content.replace(/text-blue-70o0/g, 'text-blue-700');
    content = content.replace(/text-green-70o0/g, 'text-green-700');
    content = content.replace(/text-purple-70o0/g, 'text-purple-700');
    content = content.replace(/bg-blue-60o0/g, 'bg-blue-600');
    content = content.replace(/bg-green-60o0/g, 'bg-green-600');
    content = content.replace(/bg-purple-60o0/g, 'bg-purple-600');
    content = content.replace(/hover:bg-blue-70o0/g, 'hover:bg-blue-700');
    content = content.replace(/hover:bg-green-70o0/g, 'hover:bg-green-700');
    content = content.replace(/hover:bg-purple-70o0/g, 'hover:bg-purple-700');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixSyntaxErrors);

console.log('Finished fixing syntax errors');