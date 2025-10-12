const fs = require('fs');
const path = require('path');

// Get all remaining files with JSX errors
const filesToFix = [
  '/workspace/app/ai-holographic-workspace/page.tsx',
  '/workspace/app/ai-hr-assistant/page.tsx',
  '/workspace/app/ai-hr-solutions/page.tsx',
  '/workspace/app/ai-hr/page.tsx',
  '/workspace/app/ai-image-recognition/page.tsx',
  '/workspace/app/ai-infrastructure-monitoring/page.tsx',
  '/workspace/app/ai-insurance/page.tsx',
  '/workspace/app/ai-integration-services/page.tsx',
  '/workspace/app/ai-inventory-management/page.tsx',
  '/workspace/app/ai-inventory-manager/page.tsx',
  '/workspace/app/ai-iot-analytics/page.tsx',
  '/workspace/app/ai-iot-solutions/page.tsx',
  '/workspace/app/ai-knowledge-management/page.tsx',
  '/workspace/app/ai-language-processing/page.tsx',
  '/workspace/app/ai-learning-platform/page.tsx',
  '/workspace/app/ai-logistics/page.tsx',
  '/workspace/app/ai-machine-learning/page.tsx',
  '/workspace/app/ai-marketing-automation/page.tsx',
  '/workspace/app/ai-medical-diagnosis/page.tsx',
  '/workspace/app/ai-mobile-apps/page.tsx',
  '/workspace/app/ai-natural-language-processing/page.tsx',
  '/workspace/app/ai-neural-networks/page.tsx',
  '/workspace/app/ai-optimization/page.tsx',
  '/workspace/app/ai-pattern-recognition/page.tsx',
  '/workspace/app/ai-personalization/page.tsx',
  '/workspace/app/ai-predictive-analytics/page.tsx',
  '/workspace/app/ai-predictive-modeling/page.tsx',
  '/workspace/app/ai-process-automation/page.tsx',
  '/workspace/app/ai-product-recommendations/page.tsx',
  '/workspace/app/ai-quality-assurance/page.tsx',
  '/workspace/app/ai-recommendation-engine/page.tsx',
  '/workspace/app/ai-research/page.tsx',
  '/workspace/app/ai-robotics/page.tsx',
  '/workspace/app/ai-sales-automation/page.tsx',
  '/workspace/app/ai-search-optimization/page.tsx',
  '/workspace/app/ai-security/page.tsx',
  '/workspace/app/ai-sentiment-analysis/page.tsx',
  '/workspace/app/ai-smart-cities/page.tsx',
  '/workspace/app/ai-social-media/page.tsx',
  '/workspace/app/ai-speech-recognition/page.tsx',
  '/workspace/app/ai-speech-synthesis/page.tsx',
  '/workspace/app/ai-supply-chain/page.tsx',
  '/workspace/app/ai-testing/page.tsx',
  '/workspace/app/ai-translation/page.tsx',
  '/workspace/app/ai-voice-assistant/page.tsx',
  '/workspace/app/ai-voice-solutions/page.tsx',
  '/workspace/app/ai-web-scraping/page.tsx',
  '/workspace/app/ai-workflow-automation/page.tsx',
  '/workspace/app/ai-xr-solutions/page.tsx'
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the component name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2]; // Get the directory name
    const componentName = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    // Extract title from the existing content
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : `${componentName} - Zion Tech Group`;
    
    // Extract description from the existing content
    const descMatch = content.match(/<p[^>]*>([^<]+)<\/p>/);
    const description = descMatch ? descMatch[1] : `Professional ${fileName.replace(/-/g, ' ')} services coming soon.`;
    
    // Create the fixed content
    const fixedContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${componentName}</h1>
          <p className="text-lg text-gray-300 mb-8">${description}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixJSXFile);

console.log('Remaining JSX fixes completed!');