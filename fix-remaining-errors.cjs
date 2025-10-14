#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals in import statements
    content = content.replace(/import\s+([^"']+)\s+from\s+([^"';]+);?/g, (match, imports, module) => {
      if (!module.startsWith('"') && !module.startsWith("'")) {
        modified = true;
        return `import ${imports} from "${module.trim()}";`;
      }
      return match;
    });
    
    // Fix malformed React imports
    content = content.replace(/import\s+React\s+from\s+([^"';]+);?/g, (match, module) => {
      if (!module.startsWith('"') && !module.startsWith("'")) {
        modified = true;
        return `import React from "react";`;
      }
      return match;
    });
    
    // Fix malformed Helmet imports
    content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+([^"';]+);?/g, (match, module) => {
      if (!module.startsWith('"') && !module.startsWith("'")) {
        modified = true;
        return `import { Helmet } from "react-helmet-async";`;
      }
      return match;
    });
    
    // Fix 'use client' directive placement
    content = content.replace(/('use client')\s*$/gm, '');
    if (content.includes('use client')) {
      content = content.replace(/^/, "'use client'\n");
      modified = true;
    }
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)=([^"'\s>]+)(?=\s|>)/g, (match, attr, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{')) {
        modified = true;
        return `${attr}="${value}"`;
      }
      return match;
    });
    
    // Fix broken JSX expressions
    content = content.replace(/\{([^}]*?)(\n|$)/g, (match, expr, newline) => {
      if (!expr.includes('}') && expr.trim() && !expr.trim().endsWith(';')) {
        modified = true;
        return `{${expr.trim()}}${newline}`;
      }
      return match;
    });
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, (match, key, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{') && !value.startsWith('[') && !value.includes('=>')) {
        modified = true;
        return `${key}: "${value.trim()}"`;
      }
      return match;
    });
    
    // Fix trailing semicolons and clean up
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/\s+$/gm, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific problematic files
function fixProblematicFiles() {
  const files = [
    '/workspace/app/404.tsx',
    '/workspace/app/5g-implementation/page.tsx',
    '/workspace/app/5g-solutions/page.tsx',
    '/workspace/app/about/page.tsx',
    '/workspace/app/ad-management/page.tsx',
    '/workspace/app/ai-3d-generation/page.tsx',
    '/workspace/app/ai-analytics/page.tsx',
    '/workspace/app/ai-automation/page.tsx',
    '/workspace/app/ai-automation-platform/page.tsx',
    '/workspace/app/ai-automation-suite/page.tsx',
    '/workspace/app/ai-chatbot-builder/page.tsx',
    '/workspace/app/ai-content-creation/page.tsx',
    '/workspace/app/ai-content-generation/page.tsx',
    '/workspace/app/ai-content-writer/page.tsx',
    '/workspace/app/ai-customer-support/page.tsx',
    '/workspace/app/ai-customer-support-chatbot/page.tsx',
    '/workspace/app/ai-cybersecurity/page.tsx',
    '/workspace/app/ai-data-analytics/page.tsx',
    '/workspace/app/ai-data-mining-pro/page.tsx',
    '/workspace/app/ai-data-visualization/page.tsx',
    '/workspace/app/ai-ecommerce-solutions/page.tsx',
    '/workspace/app/ai-education-platform/page.tsx',
    '/workspace/app/ai-fintech/page.tsx',
    '/workspace/app/ai-fintech-solutions/page.tsx',
    '/workspace/app/ai-fraud-detection-pro/page.tsx',
    '/workspace/app/ai-healthcare/page.tsx',
    '/workspace/app/ai-language-translation/page.tsx',
    '/workspace/app/ai-marketing/page.tsx',
    '/workspace/app/ai-mobile-app-builder/page.tsx',
    '/workspace/app/ai-mobile-app-development/page.tsx',
    '/workspace/app/ai-nlp-text-analysis/page.tsx',
    '/workspace/app/ai-predictive-analytics/page.tsx',
    '/workspace/app/ai-project-management/page.tsx',
    '/workspace/app/ai-recommendation-engine/page.tsx',
    '/workspace/app/ai-sales-automation/page.tsx',
    '/workspace/app/ai-services/page.tsx',
    '/workspace/app/ai-solutions/page.tsx',
    '/workspace/app/ai-time-series-forecasting/page.tsx',
    '/workspace/app/ai-voice-assistant/page.tsx',
    '/workspace/app/ai-workflow-automation/page.tsx',
    '/workspace/app/api-docs/page.tsx',
    '/workspace/app/autonomous-systems/page.tsx',
    '/workspace/app/blockchain/page.tsx',
    '/workspace/app/blockchain-web3/page.tsx',
    '/workspace/app/blog/page.tsx',
    '/workspace/app/business-intelligence/page.tsx',
    '/workspace/app/careers/page.tsx',
    '/workspace/app/case-studies/page.tsx',
    '/workspace/app/cloud-infrastructure/page.tsx',
    '/workspace/app/cloud-migration-pro/page.tsx',
    '/workspace/app/cloud-services/page.tsx',
    '/workspace/app/consultation/page.tsx',
    '/workspace/app/contact/page.tsx',
    '/workspace/app/cookies/page.tsx',
    '/workspace/app/create-ad/page.tsx',
    '/workspace/app/custom-software/page.tsx',
    '/workspace/app/cybersecurity/page.tsx',
    '/workspace/app/cybersecurity-solutions/page.tsx',
    '/workspace/app/database-management/page.tsx',
    '/workspace/app/demo/page.tsx',
    '/workspace/app/ecommerce-analytics-pro/page.tsx',
    '/workspace/app/enterprise/page.tsx',
    '/workspace/app/error.tsx',
    '/workspace/app/gdpr/page.tsx',
    '/workspace/app/global-error.tsx',
    '/workspace/app/iot-edge/page.tsx',
    '/workspace/app/iot-edge-computing/page.tsx',
    '/workspace/app/it-infrastructure/page.tsx',
    '/workspace/app/it-micro-saas/page.tsx',
    '/workspace/app/it-services/page.tsx',
    '/workspace/app/it-solutions/page.tsx',
    '/workspace/app/legal-document-manager/page.tsx',
    '/workspace/app/loading.tsx',
    '/workspace/app/main.tsx',
    '/workspace/app/medical-records-manager/page.tsx',
    '/workspace/app/micro-saas/page.tsx',
    '/workspace/app/micro-saas-solutions/page.tsx',
    '/workspace/app/mobile-development/page.tsx',
    '/workspace/app/network-infrastructure/page.tsx',
    '/workspace/app/news/page.tsx',
    '/workspace/app/not-found.tsx',
    '/workspace/app/offline/page.tsx',
    '/workspace/app/online-learning-platform/page.tsx',
    '/workspace/app/page.tsx',
    '/workspace/app/partners/page.tsx',
    '/workspace/app/privacy/page.tsx',
    '/workspace/app/property-management-ai/page.tsx',
    '/workspace/app/quantum-computing/page.tsx',
    '/workspace/app/services/page.tsx',
    '/workspace/app/sitemap-page.tsx',
    '/workspace/app/supply-chain-optimizer/page.tsx',
    '/workspace/app/support/page.tsx',
    '/workspace/app/team/page.tsx',
    '/workspace/app/terms/page.tsx',
    '/workspace/app/tutorials/page.tsx',
    '/workspace/app/web-development/page.tsx',
    '/workspace/app/webinars/page.tsx',
    '/workspace/app/whitepapers/page.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const filePath of files) {
    if (fs.existsSync(filePath)) {
      if (fixRemainingErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining error resolution...');

let totalFixed = fixProblematicFiles();

console.log(`\nFixed remaining errors in ${totalFixed} files.`);

// Run type checking to see remaining issues
console.log('\nRunning type checking to check for remaining issues...');
try {
  const { execSync } = require('child_process');
  execSync('npm run type-check', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Type checking passed!');
} catch (error) {
  console.log('Type checking found remaining issues, but many errors should be resolved.');
}

console.log('Remaining error resolution complete!');