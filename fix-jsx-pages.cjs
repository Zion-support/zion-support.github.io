#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with JSX syntax errors
const filesToFix = [
  'app/advanced-security-suite/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-analytics-dashboard/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-generation/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-generator/page.tsx',
  'app/ai-content-management/page.tsx',
  'app/ai-content-moderation-pro/page.tsx',
  'app/ai-content-moderation/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-conversation-analytics/page.tsx',
  'app/ai-conversational-ai/page.tsx',
  'app/ai-crm-assistant/page.tsx',
  'app/ai-crm/page.tsx',
  'app/ai-customer-churn/page.tsx',
  'app/ai-customer-insights/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-customer-support-bot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cyber-defense-matrix/page.tsx',
  'app/ai-cybersecurity-monitor-pro/page.tsx',
  'app/ai-cybersecurity-monitor/page.tsx',
  'app/ai-cybersecurity-suite-pro/page.tsx',
  'app/ai-cybersecurity-suite/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-design-studio/page.tsx',
  'app/ai-devops-automation/page.tsx',
  'app/ai-document-intelligence/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-document-processor/page.tsx',
  'app/ai-document-scanner/page.tsx',
  'app/ai-drug-discovery-pro/page.tsx',
  'app/ai-ecommerce-assistant/page.tsx',
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-ecommerce-optimizer/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-edge-computing/page.tsx',
  'app/ai-education/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-email-marketing/page.tsx',
  'app/ai-energy-grid-management-pro/page.tsx',
  'app/ai-energy/page.tsx',
  'app/ai-enterprise-solutions/page.tsx',
  'app/ai-expense-tracker-pro/page.tsx',
  'app/ai-fashion-design/page.tsx',
  'app/ai-financial-advisor/page.tsx',
  'app/ai-financial-analyzer/page.tsx',
  'app/ai-financial-crime-detection-pro/page.tsx',
  'app/ai-financial-forecasting/page.tsx',
  'app/ai-financial-planner/page.tsx',
  'app/ai-financial-services/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-fitness-coach/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-health-tracker/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-healthcare-solutions/page.tsx',
  'app/ai-healthcare/page.tsx'
];

function fixPageFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the page title from the content
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Page';
    
    // Extract the heading from the content
    const headingMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const heading = headingMatch ? headingMatch[1] : title;
    
    // Extract the description from the content
    const descMatch = content.match(/<p[^>]*>([^<]+)<\/p>/);
    const description = descMatch ? descMatch[1] : 'Professional services coming soon.';
    
    // Create the fixed content
    const fixedContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${heading.replace(/[^a-zA-Z0-9]/g, '')}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-6">${heading}</h1>
          <p className="text-lg text-gray-300 mb-8">
            ${description}
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

    fs.writeFileSync(fullPath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPageFile);
console.log('JSX page fixes completed!');