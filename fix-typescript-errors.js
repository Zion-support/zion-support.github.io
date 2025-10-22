import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with unused React imports
const filesWithUnusedReact = [
  'app/5g-implementation/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/about/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/components/ImageOptimizer.tsx',
  'app/database-management/page.tsx',
  'app/demo/page.tsx',
  'app/mobile-development/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/pricing/page.tsx',
  'app/privacy/page.tsx',
  'app/services/page.tsx',
  'app/support/page.tsx',
  'app/terms/page.tsx',
  'app/tutorials/page.tsx',
  'app/web-development/page.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-customer-sentiment-tracker/page.tsx',
  'app/zion-ai-customer-support-pro/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/zion-ai-task-scheduler/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-ai-workflow-automator/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-customer-satisfaction-monitor/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-smart-expense-tracker/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused React import
    if (content.startsWith('import React from "react";\n')) {
      content = content.replace('import React from "react";\n', '');
      console.log(`Fixed unused React import in ${filePath}`);
    }
    
    fs.writeFileSync(fullPath, content);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithUnusedReact.forEach(fixFile);

console.log('TypeScript errors fixed!');