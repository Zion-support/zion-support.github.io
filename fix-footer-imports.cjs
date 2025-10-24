#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all files that need fixing
const files = [
  'app/5g-iot-solutions/page.tsx',
  'app/ai-content-management/page.tsx',
  'app/it-training/page.tsx',
  'app/specialized-services/page.tsx',
  'app/ai-sentiment-analyzer/page.tsx',
  'app/blockchain-solutions-pro/page.tsx',
  'app/mobile-development/page.tsx',
  'app/database-services/page.tsx',
  'app/gdpr/page.tsx',
  'app/ai-telepathic-interface/page.tsx',
  'app/zion-ai-crm-optimizer/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-seo-optimizer/page.tsx',
  'app/zion-smart-analytics-dashboard/page.tsx',
  'app/zion-smart-expense-tracker/page.tsx',
  'app/zion-ai-code-assistant/page.tsx',
  'app/zion-cybersecurity-audit/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/zion-blockchain-solutions/page.tsx',
  'app/components/Header.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/zion-ai-voice-synthesis/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/smart-contract-security-audit/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/ad-management/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-ai-price-optimizer/page.tsx',
  'app/system-administration/page.tsx',
  'app/page.tsx',
  'app/zion-ai-voice-assistant/page.tsx',
  'app/zion-customer-insights/page.tsx',
  'app/zion-ai-email-assistant/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-form-builder/page.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-chat-ai/page.tsx',
  'app/zion-iot-solutions/page.tsx',
  'app/zion-ai-customer-service-pro/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/system-integration/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-marketing-automation/page.tsx',
  'app/zion-crm-intelligence/page.tsx',
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/accessibility/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-ai-data-visualizer/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/zion-workflow-automation/page.tsx',
  'app/zion-ai-task-scheduler/page.tsx',
  'app/test-simple/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx',
  'app/zion-ai-workflow-automator-pro/page.tsx',
  'app/zion-ai-scheduling-assistant/page.tsx',
  'app/zion-ai-predictive-maintenance/page.tsx',
  'app/security-monitoring-suite/page.tsx',
  'app/zion-ai-document-ai/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-fraud-detector/page.tsx',
  'app/zion-api-development/page.tsx',
  'app/zion-devops-automation/page.tsx',
  'app/zion-ai-workflow-automator/page.tsx',
  'app/zion-ai-translation-service/page.tsx',
  'app/security-monitoring/page.tsx',
  'app/zion-ai-fraud-detection/page.tsx',
  'app/zion-ai-content-moderation/page.tsx',
  'app/security-automation/page.tsx',
  'app/zion-customer-satisfaction-monitor/page.tsx',
  'app/zion-smart-crm-automation/page.tsx',
  'app/system-status/page.tsx',
  'app/zion-ai-customer-sentiment-tracker/page.tsx',
  'app/zion-ai-energy-manager/page.tsx',
  'app/zion-smart-inventory-manager/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/zion-ai-video-editor/page.tsx',
  'app/zion-ai-image-recognition/page.tsx',
  'app/security/page.tsx',
  'app/zion-ai-image-generator/page.tsx',
  'app/zion-ai-predictive-analytics/page.tsx',
  'app/zion-ai-recruitment-pro/page.tsx',
  'app/zion-ai-meeting-assistant/page.tsx',
  'app/zion-ai-website-analyzer/page.tsx',
  'app/zion-ai-social-scheduler-pro/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/micro-saas/ai-customer-support-chatbot/page.tsx',
  'app/micro-saas/email-marketing/page.tsx',
  'app/micro-saas/ai-content-writer/page.tsx',
  'app/micro-saas/ai-inventory-manager/page.tsx',
  'app/micro-saas/content-generator/page.tsx',
  'app/micro-saas/expense-tracker/page.tsx',
  'app/micro-saas/page.tsx',
  'app/micro-saas/ai-social-media-scheduler/page.tsx',
  'app/micro-saas/inventory-management/page.tsx',
  'app/micro-saas/social-manager/page.tsx',
  'app/micro-saas/contract-manager/page.tsx',
  'app/micro-saas/ai-expense-tracker/page.tsx',
  'app/micro-saas/chat-analytics/page.tsx',
  'app/micro-saas/email-signature/page.tsx',
  'app/micro-saas/support-bot/page.tsx',
  'app/micro-saas/appointment-scheduler/page.tsx',
  'app/micro-saas/document-processor/page.tsx',
  'app/micro-saas/seo-optimizer/page.tsx',
  'app/micro-saas/ai-project-manager/page.tsx',
  'app/micro-saas/ai-content-writer-pro/page.tsx',
  'app/micro-saas/ai-email-marketing-automation/page.tsx',
  'app/micro-saas/analytics-dashboard/page.tsx',
  'app/micro-saas/lead-scoring/page.tsx',
  'app/micro-saas/employee-directory/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/zion-ai-customer-support-pro/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx'
];

function getRelativePath(filePath) {
  const depth = filePath.split('/').length - 1;
  const relativePath = '../'.repeat(depth) + 'components/Footer';
  return relativePath;
}

let fixedCount = 0;

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes("@/components/Footer")) {
        const relativePath = getRelativePath(filePath);
        content = content.replace(/@\/components\/Footer/g, relativePath);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath} -> ${relativePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);