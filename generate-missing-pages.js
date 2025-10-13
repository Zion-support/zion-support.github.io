const fs = require('fs');
const path = require('path');

// List of missing pages from App.tsx
const missingPages = [
  'app/ai-services/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/tutorials/page.tsx',
  'app/demo/page.tsx',
  'app/support/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/web-development/page.tsx',
  'app/mobile-development/page.tsx',
  'app/database-management/page.tsx',
  'app/custom-software/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx',
  'app/zion-ai-customer-sentiment-tracker/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx',
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-task-scheduler/page.tsx',
  'app/zion-ai-customer-support-pro/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx',
  'app/zion-smart-expense-tracker/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-customer-satisfaction-monitor/page.tsx',
  'app/zion-ai-workflow-automator/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-iot-solutions/page.tsx'
];

// Template for a basic page
const pageTemplate = (title, description, pageName) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, Shield, Zap } from 'lucide-react';

export default function ${pageName}Page() {
  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for your business",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and implementation for immediate results",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;

// Generate pages
missingPages.forEach(pagePath => {
  const dir = path.dirname(pagePath);
  const fileName = path.basename(pagePath, '.tsx');
  const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Generate title and description from path
  const title = pagePath.split('/').pop().replace('page.tsx', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = `Advanced ${title.toLowerCase()} solutions by Zion Tech Group`;
  
  // Write the page file
  const content = pageTemplate(title, description, pageName);
  fs.writeFileSync(pagePath, content);
  console.log(`Generated: ${pagePath}`);
});

console.log('All missing pages generated successfully!');