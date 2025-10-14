#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Template for fixing broken page files
const pageTemplate = (title, description) => `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div>
        <div>
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}`;

// Page configurations
const pageConfigs = {
  'ai-3d-generation': 'AI 3D Generation',
  'ai-analytics': 'AI Analytics',
  'ai-automation-platform': 'AI Automation Platform',
  'ai-automation-suite': 'AI Automation Suite',
  'ai-automation': 'AI Automation',
  'ai-chatbot-builder': 'AI Chatbot Builder',
  'ai-content-creation': 'AI Content Creation',
  'ai-content-generation': 'AI Content Generation',
  'ai-content-writer': 'AI Content Writer',
  'ai-customer-support-chatbot': 'AI Customer Support Chatbot',
  'ai-customer-support': 'AI Customer Support',
  'ai-cybersecurity': 'AI Cybersecurity',
  'ai-data-analytics': 'AI Data Analytics',
  'ai-data-mining-pro': 'AI Data Mining Pro',
  'ai-data-visualization': 'AI Data Visualization',
  'ai-ecommerce-solutions': 'AI E-commerce Solutions',
  'ai-education-platform': 'AI Education Platform',
  'ai-financial-analysis': 'AI Financial Analysis',
  'ai-fintech-solutions': 'AI Fintech Solutions',
  'ai-fintech': 'AI Fintech',
  'ai-fraud-detection-pro': 'AI Fraud Detection Pro',
  'ai-healthcare': 'AI Healthcare',
  'ai-language-translation': 'AI Language Translation',
  'ai-marketing': 'AI Marketing',
  'ai-mobile-app-builder': 'AI Mobile App Builder',
  'ai-mobile-app-development': 'AI Mobile App Development',
  'ai-mobile-builder': 'AI Mobile Builder',
  'ai-nlp-text-analysis': 'AI NLP Text Analysis',
  'ai-predictive-analytics': 'AI Predictive Analytics',
  'ai-project-management': 'AI Project Management',
  'ai-recommendation-engine': 'AI Recommendation Engine',
  'ai-sales-automation': 'AI Sales Automation',
  'ai-supply-chain-optimizer': 'AI Supply Chain Optimizer',
  'ai-time-series-forecasting': 'AI Time Series Forecasting',
  'ai-translation-service': 'AI Translation Service',
  'ai-voice-assistant': 'AI Voice Assistant',
  'ai-workflow-automation': 'AI Workflow Automation',
  'api-docs': 'API Documentation',
  'autonomous-systems': 'Autonomous Systems',
  'blockchain-web3': 'Blockchain Web3',
  'business-intelligence': 'Business Intelligence',
  'cloud-infrastructure-management': 'Cloud Infrastructure Management',
  'cloud-infrastructure': 'Cloud Infrastructure',
  'cloud-migration-pro': 'Cloud Migration Pro',
  'cloud-services': 'Cloud Services',
  'create-ad': 'Create Ad'
};

async function fixPages() {
  console.log('Fixing page files...');
  
  const files = await glob('app/*/page.tsx');
  let fixed = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if file has syntax errors
      if (content.includes("'  return (") || content.includes('Unterminated string literal') || content.includes('JSX expressions must have one parent element')) {
        const pageName = file.split('/')[1];
        const title = pageConfigs[pageName] || pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
        
        const newContent = pageTemplate(title, description);
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixed++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixed} page files`);
}

fixPages().catch(console.error);
