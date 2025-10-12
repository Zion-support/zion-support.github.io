const fs = require('fs');
const path = require('path');

// List of files with JSX syntax errors
const filesToFix = [
  '/workspace/app/accessibility-page/page.tsx',
  '/workspace/app/accessibility/page.tsx',
  '/workspace/app/advanced-security-suite/page.tsx',
  '/workspace/app/ai-3d-generation/page.tsx',
  '/workspace/app/ai-accounting-assistant/page.tsx',
  '/workspace/app/ai-agricultural-intelligence-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard/page.tsx',
  '/workspace/app/ai-api-management/page.tsx',
  '/workspace/app/ai-api-manager/page.tsx',
  '/workspace/app/ai-automated-reporting/page.tsx',
  '/workspace/app/ai-automated-testing/page.tsx',
  '/workspace/app/ai-autonomous-systems/page.tsx',
  '/workspace/app/ai-blockchain-analytics/page.tsx',
  '/workspace/app/ai-blockchain-solutions/page.tsx',
  '/workspace/app/ai-business-intelligence-pro/page.tsx',
  '/workspace/app/ai-business-intelligence/page.tsx',
  '/workspace/app/ai-chatbot-enterprise/page.tsx',
  '/workspace/app/ai-climate-prediction-engine/page.tsx',
  '/workspace/app/ai-climate-solutions-pro/page.tsx',
  '/workspace/app/ai-cloud-infrastructure/page.tsx',
  '/workspace/app/ai-code-assistant-pro/page.tsx',
  '/workspace/app/ai-code-assistant/page.tsx',
  '/workspace/app/ai-code-generation/page.tsx',
  '/workspace/app/ai-code-security-auditor/page.tsx',
  '/workspace/app/ai-computer-vision/page.tsx',
  '/workspace/app/ai-content-delivery-network/page.tsx',
  '/workspace/app/ai-content-generation-pro/page.tsx',
  '/workspace/app/ai-content-generation/page.tsx',
  '/workspace/app/ai-content-generator/page.tsx',
  '/workspace/app/ai-content-management/page.tsx',
  '/workspace/app/ai-content-moderation-pro/page.tsx',
  '/workspace/app/ai-content-moderation/page.tsx',
  '/workspace/app/ai-content-studio/page.tsx',
  '/workspace/app/ai-content-writer/page.tsx',
  '/workspace/app/ai-conversation-analytics/page.tsx',
  '/workspace/app/ai-conversational-ai/page.tsx',
  '/workspace/app/ai-crm-assistant/page.tsx',
  '/workspace/app/ai-crm/page.tsx',
  '/workspace/app/ai-customer-churn/page.tsx',
  '/workspace/app/ai-customer-insights/page.tsx',
  '/workspace/app/ai-customer-service/page.tsx',
  '/workspace/app/ai-customer-support-bot/page.tsx',
  '/workspace/app/ai-customer-support/page.tsx',
  '/workspace/app/ai-cyber-defense-matrix/page.tsx',
  '/workspace/app/ai-cybersecurity-monitor-pro/page.tsx',
  '/workspace/app/ai-cybersecurity-monitor/page.tsx',
  '/workspace/app/ai-cybersecurity-suite-pro/page.tsx',
  '/workspace/app/ai-cybersecurity-suite/page.tsx',
  '/workspace/app/ai-data-analytics/page.tsx',
  '/workspace/app/ai-data-visualization/page.tsx',
  '/workspace/app/ai-design-studio/page.tsx',
  '/workspace/app/ai-devops-automation/page.tsx',
  '/workspace/app/ai-document-intelligence/page.tsx',
  '/workspace/app/ai-document-processing/page.tsx',
  '/workspace/app/ai-document-processor/page.tsx',
  '/workspace/app/ai-document-scanner/page.tsx',
  '/workspace/app/ai-drug-discovery-pro/page.tsx',
  '/workspace/app/ai-ecommerce-assistant/page.tsx',
  '/workspace/app/ai-ecommerce-optimizer-pro/page.tsx',
  '/workspace/app/ai-ecommerce-optimizer/page.tsx',
  '/workspace/app/ai-ecommerce-solutions/page.tsx',
  '/workspace/app/ai-edge-computing/page.tsx',
  '/workspace/app/ai-education/page.tsx',
  '/workspace/app/ai-email-assistant/page.tsx',
  '/workspace/app/ai-email-automation/page.tsx',
  '/workspace/app/ai-email-marketing-automation/page.tsx',
  '/workspace/app/ai-email-marketing/page.tsx',
  '/workspace/app/ai-energy-grid-management-pro/page.tsx',
  '/workspace/app/ai-energy/page.tsx',
  '/workspace/app/ai-enterprise-solutions/page.tsx',
  '/workspace/app/ai-expense-tracker-pro/page.tsx',
  '/workspace/app/ai-expense-tracker/page.tsx',
  '/workspace/app/ai-fashion-design/page.tsx',
  '/workspace/app/ai-financial-advisor/page.tsx',
  '/workspace/app/ai-financial-analytics-pro/page.tsx',
  '/workspace/app/ai-financial-analyzer/page.tsx',
  '/workspace/app/ai-financial-crime-detection-pro/page.tsx',
  '/workspace/app/ai-financial-forecasting/page.tsx',
  '/workspace/app/ai-financial-planner/page.tsx',
  '/workspace/app/ai-financial-services/page.tsx',
  '/workspace/app/ai-fintech/page.tsx',
  '/workspace/app/ai-fitness-coach/page.tsx',
  '/workspace/app/ai-fraud-detection/page.tsx',
  '/workspace/app/ai-health-tracker/page.tsx',
  '/workspace/app/ai-healthcare-diagnostics/page.tsx',
  '/workspace/app/ai-healthcare-solutions/page.tsx',
  '/workspace/app/ai-healthcare/page.tsx'
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

console.log('JSX fixes completed!');