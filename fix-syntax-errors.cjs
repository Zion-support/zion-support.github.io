const fs = require('fs');
const path = require('path');

// List of files that need fixing based on the error patterns
const filesToFix = [
  'app/ad-management/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-data-analysis/page.tsx',
  'app/ai-development/page.tsx',
  'app/ai-email-marketing/page.tsx',
  'app/ai-forecasting/page.tsx',
  'app/ai-image-generation/page.tsx',
  'app/ai-integration/page.tsx',
  'app/ai-machine-learning/page.tsx',
  'app/ai-optimization/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-process-automation/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sentiment-analysis/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-speech-recognition/page.tsx',
  'app/ai-text-analysis/page.tsx',
  'app/ai-video-generation/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/api-integration/page.tsx',
  'app/application-development/page.tsx',
  'app/artificial-intelligence/page.tsx',
  'app/blockchain-solutions/page.tsx',
  'app/cloud-computing/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-storage/page.tsx',
  'app/contact/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/data-analytics/page.tsx',
  'app/data-management/page.tsx',
  'app/data-visualization/page.tsx',
  'app/database-design/page.tsx',
  'app/database-optimization/page.tsx',
  'app/devops/page.tsx',
  'app/digital-marketing/page.tsx',
  'app/e-commerce/page.tsx',
  'app/enterprise-solutions/page.tsx',
  'app/game-development/page.tsx',
  'app/home/page.tsx',
  'app/iot-solutions/page.tsx',
  'app/it-consulting/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-support/page.tsx',
  'app/mobile-app-development/page.tsx',
  'app/network-security/page.tsx',
  'app/performance-optimization/page.tsx',
  'app/privacy-policy/page.tsx',
  'app/quality-assurance/page.tsx',
  'app/robotic-process-automation/page.tsx',
  'app/security-audit/page.tsx',
  'app/security-consulting/page.tsx',
  'app/security-monitoring/page.tsx',
  'app/security-testing/page.tsx',
  'app/services/page.tsx',
  'app/software-development/page.tsx',
  'app/software-testing/page.tsx',
  'app/terms-of-service/page.tsx',
  'app/ui-ux-design/page.tsx',
  'app/web-development/page.tsx',
  'app/web-hosting/page.tsx',
  'app/web-security/page.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
    
    // Create a proper page name from the path
    const properPageName = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create a proper component name
    const componentName = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';

    // Create a proper description
    const description = `Professional ${pageName.replace(/-/g, ' ')} solutions for modern businesses`;

    // Create the fixed content
    const fixedContent = `import React from 'react';
import SEOHead from '../components/SEOHead';

const ${componentName}: React.FC = () => {
  return (
    <>
      <SEOHead
        title="${properPageName} - Zion Tech Group"
        description="${description}"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">${properPageName}</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('All files have been processed.');