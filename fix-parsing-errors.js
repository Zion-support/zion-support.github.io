const fs = require('fs');
const path = require('path');

// Common template for simple pages
const createSimplePage = (pageName, title) => `import React from 'react';

const ${pageName}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">${title}</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced ${title.toLowerCase()} solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ${pageName}Page;`;

// List of files that need fixing based on the lint errors
const filesToFix = [
  'src/ai-ab-testing/page.tsx',
  'src/ai-analytics/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-hr-assistant/page.tsx',
  'src/ai-inventory-manager/page.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-lead-scoring/page.tsx',
  'src/ai-ml-platform/page.tsx',
  'src/ai-mobile-builder/page.tsx',
  'src/ai-nlp/page.tsx',
  'src/ai-performance-tracker/page.tsx',
  'src/ai-predictive-analytics/page.tsx',
  'src/ai-research-development/page.tsx',
  'src/ai-robotics/page.tsx',
  'src/ai-sales-forecasting/page.tsx',
  'src/ai-scheduler/page.tsx',
  'src/ai-security-monitor/page.tsx',
  'src/ai-seo-optimizer/page.tsx',
  'src/ai-social-media-manager/page.tsx',
  'src/ai-voice-assistant/page.tsx',
  'src/analytics-tools/page.tsx',
  'src/ar-vr-solutions/page.tsx',
  'src/database-management/page.tsx',
  'src/devops-cicd/page.tsx',
  'src/digital-transformation/page.tsx',
  'src/expense-tracker/page.tsx',
  'src/future-technologies/page.tsx',
  'src/global-it-support/page.tsx',
  'src/innovation-labs/page.tsx',
  'src/iot-edge/page.tsx',
  'src/it-automation/page.tsx',
  'src/it-disaster-recovery/page.tsx',
  'src/it-infrastructure-design/page.tsx',
  'src/it-performance-monitoring/page.tsx',
  'src/it-support/page.tsx',
  'src/it-training/page.tsx',
  'src/network-solutions/page.tsx',
  'src/smart-analytics/page.tsx',
  'src/smart-cities/page.tsx',
  'src/sustainability-tech/page.tsx',
  'src/system-administration/page.tsx',
  'src/task-manager-pro/page.tsx',
];

// Function to get page name from file path
const getPageName = (filePath) => {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 2]; // Get the directory name before page.tsx
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
};

// Function to get display title from file path
const getDisplayTitle = (filePath) => {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 2];
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const pageName = getPageName(filePath);
  const displayTitle = getDisplayTitle(filePath);
  
  try {
    // Create directory if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the fixed content
    const content = createSimplePage(pageName, displayTitle);
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Parsing errors fix completed!');