const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files that need fixing
const pageFiles = glob.sync('app/**/page.tsx');

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unused function declarations
    if (content.includes('const AiPoweredDevopsPage: React.FC = () => {')) {
      content = content.replace('const AiPoweredDevopsPage: React.FC = () => {', 'const AiPoweredDevopsPage = () => {');
      modified = true;
    }
    
    if (content.includes('const AiPoweredEmailAnalyzerPage: React.FC = () => {')) {
      content = content.replace('const AiPoweredEmailAnalyzerPage: React.FC = () => {', 'const AiPoweredEmailAnalyzerPage = () => {');
      modified = true;
    }
    
    if (content.includes('const CybersecurityauditPage: React.FC = () => {')) {
      content = content.replace('const CybersecurityauditPage: React.FC = () => {', 'const CybersecurityauditPage = () => {');
      modified = true;
    }
    
    if (content.includes('const LegaldocumentmanagerPage: React.FC = () => {')) {
      content = content.replace('const LegaldocumentmanagerPage: React.FC = () => {', 'const LegaldocumentmanagerPage = () => {');
      modified = true;
    }
    
    // Fix import paths for micro-saas-services
    if (filePath.includes('micro-saas-services/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../../components/Navigation';\nimport Footer from '../../components/Footer';");
      modified = true;
    }
    
    // Fix import paths for other nested directories
    if (filePath.includes('it-services/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../../components/Navigation';\nimport Footer from '../../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('legal-document-manager/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('medical-records-manager/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('online-learning-platform/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('property-management-ai/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('supply-chain-optimizer/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('test/') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (filePath.includes('zion-ai-') && content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(/^(import React from 'react';)/m, "$1\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Remaining import fixing completed!');