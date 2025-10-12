import fs from 'fs';
import path from 'path';

// Get all AI service pages from App.tsx
const aiServicePages = [
  'ai-analytics', 'ai-automation', 'ai-chatbot-builder', 'ai-cybersecurity',
  'ai-crm', 'ai-data-analytics', 'ai-healthcare', 'ai-financial-services',
  'ai-computer-vision', 'ai-voice-solutions', 'ai-ecommerce-solutions',
  'ai-hr-solutions', 'ai-content-generation', 'ai-workflow-automation',
  'ai-document-processing', 'ai-predictive-analytics', 'ai-edge-computing',
  'ai-video-analysis', 'ai-speech-synthesis', 'ai-recommendation-engine',
  'ai-sentiment-analysis', 'ai-chatbot-enterprise', 'ai-content-moderation',
  'ai-predictive-modeling', 'ai-document-intelligence', 'ai-conversation-analytics',
  'ai-supply-chain-ai', 'ai-healthcare-diagnostics', 'ai-financial-forecasting',
  'ai-iot-analytics', 'ai-conversational-ai', 'ai-automated-testing',
  'ai-knowledge-management', 'ai-customer-churn', 'ai-automated-reporting',
  'ai-voice-assistant', 'ai-content-generation-pro'
];

const itServicePages = [
  'cloud-infrastructure', 'cybersecurity-solutions', 'web-development',
  'mobile-development', 'api-development', 'database-management', 'devops-cicd',
  'it-support', 'data-analytics-bi', 'custom-software', 'network-infrastructure',
  'it-asset-management', 'it-security-services', 'it-project-management',
  'cloud-native-development', 'ai-integration-services', 'blockchain-development',
  'iot-development', 'e-commerce-development', 'api-development-advanced',
  'data-engineering', 'cybersecurity-advanced', 'cloud-migration-advanced',
  'devops-advanced', 'machine-learning-ops', 'enterprise-integration',
  'performance-optimization', 'disaster-recovery-advanced', 'compliance-automation',
  'cloud-cost-optimization', 'security-automation', 'data-visualization',
  'workflow-automation', 'cloud-native-security'
];

const microSaasPages = [
  'zion-analytics-pro', 'zion-chat-ai', 'zion-security-shield', 'zion-cloud-vault',
  'zion-content-studio', 'zion-crm-intelligence', 'zion-data-sync', 'zion-lead-magnet',
  'zion-project-master', 'zion-email-automation', 'zion-inventory-smart',
  'zion-invoice-genius', 'zion-workflow-automation', 'zion-performance-monitor',
  'zion-compliance-manager', 'zion-social-scheduler', 'zion-ai-video-editor',
  'zion-ai-translator-pro', 'zion-ai-code-reviewer', 'zion-customer-insights',
  'zion-ai-email-assistant', 'zion-ai-meeting-assistant', 'zion-ai-seo-optimizer',
  'zion-ai-data-cleaner', 'zion-ai-contract-analyzer', 'zion-ai-survey-builder',
  'zion-ai-accounting-assistant', 'zion-ai-recruitment-pro', 'zion-ai-content-moderation',
  'zion-ai-predictive-maintenance', 'zion-ai-energy-manager', 'zion-ai-supply-chain-optimizer',
  'zion-ai-fraud-detector', 'zion-ai-customer-service-pro', 'zion-ai-marketing-automation',
  'zion-ai-document-ai'
];

const emergingTechPages = [
  '5g-implementation', 'ai-3d-generation', 'ai-holographic-workspace',
  'ai-autonomous-systems', 'ai-blockchain-solutions', 'quantum-computing',
  'ar-vr-solutions', 'iot-integration', 'machine-learning'
];

const companyPages = [
  'team', 'partners', 'status'
];

const resourcePages = [
  'faq', 'docs', 'api-docs', 'community', 'compliance'
];

const allPages = [
  ...aiServicePages,
  ...itServicePages,
  ...microSaasPages,
  ...emergingTechPages,
  ...companyPages,
  ...resourcePages
];

const pageTemplate = (pageName, title, componentName) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName}: React.FC = () => {
  return (

      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ${title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${title.toLowerCase()} services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ${title.toLowerCase()} solutions.
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

  );
};

export default ${componentName};`;

// Fix all pages
allPages.forEach(pageName => {
  const title = pageName.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const componentName = pageName.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';

  const pageDir = path.join('/workspace/app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');

  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });

  // Overwrite page file with correct template
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName));
  console.log(`Fixed: ${pageFile}`);
});

console.log('All pages fixed!');