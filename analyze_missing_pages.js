#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = new Set();

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, fullPath);
        existingPages.add(`/${relativePath}`);
      }
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Navigation links from Navigation.tsx
const navigationLinks = [
  '/',
  '/about',
  '/ai-solutions',
  '/ai-services',
  '/ai-chatbot-builder',
  '/ai-document-processor',
  '/ai-form-builder',
  '/ai-voice-assistant',
  '/ai-fraud-detection',
  '/ai-image-recognition',
  '/ai-lead-scoring',
  '/ai-predictive-maintenance',
  '/ai-price-optimizer',
  '/ai-scheduling-assistant',
  '/ai-content-generator',
  '/ai-crm-optimizer',
  '/ai-data-visualizer',
  '/ai-email-optimizer',
  '/ai-website-analyzer',
  '/ai-social-media-manager',
  '/ai-legal-assistant',
  '/ai-medical-assistant',
  '/ai-education-tutor',
  '/ai-real-estate-analyzer',
  '/ai-supply-chain-optimizer',
  '/ai-3d-model-generator',
  '/ai-audio-processor',
  '/data-analytics',
  '/micro-saas-solutions',
  '/zion-ai-meeting-transcriber',
  '/zion-customer-satisfaction-monitor',
  '/zion-ai-inventory-optimizer-pro',
  '/zion-ai-email-marketing-pro',
  '/zion-ai-workflow-automator-pro',
  '/zion-ai-social-scheduler-pro',
  '/zion-ai-video-generator',
  '/zion-ai-translation-service',
  '/zion-smart-analytics-dashboard',
  '/zion-smart-crm-automation',
  '/zion-smart-inventory-manager',
  '/zion-smart-expense-tracker',
  '/task-manager-pro',
  '/social-media-scheduler',
  '/expense-tracker-pro',
  '/it-solutions',
  '/quantum-computing-solutions',
  '/edge-computing-solutions',
  '/augmented-reality-solutions',
  '/virtual-reality-solutions',
  '/robotic-process-automation',
  '/low-code-platform',
  '/serverless-architecture',
  '/container-orchestration',
  '/ai-infrastructure',
  '/data-lake-solutions',
  '/cloud-infrastructure',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/network-infrastructure',
  '/5g-solutions',
  '/digital-transformation',
  '/blockchain-solutions',
  '/iot-solutions',
  '/devops-automation',
  '/data-engineering',
  '/api-development',
  '/security-audit',
  '/blog',
  '/case-studies',
  '/api-docs',
  '/help',
  '/accessibility',
  '/team',
  '/careers',
  '/partnerships',
  '/contact',
  '/zion-ai-content-moderator',
  '/zion-ai-customer-support-pro',
  '/zion-ai-workflow-automator-pro',
  '/zion-ai-email-marketing-pro',
  '/zion-ai-sales-predictor',
  '/zion-ai-financial-forecaster',
  '/zion-ai-document-analyzer',
  '/zion-ai-task-scheduler',
  '/zion-ai-translation-service',
  '/zion-ai-video-generator',
  '/zion-ai-meeting-transcriber',
  '/zion-customer-satisfaction-monitor',
  '/zion-ai-inventory-optimizer-pro',
  '/zion-ai-social-scheduler-pro',
  '/zion-ai-code-assistant',
  '/zion-ai-voice-assistant',
  '/zion-ai-image-generator',
  '/zion-ai-voice-synthesis',
  '/zion-ai-website-analyzer',
  '/zion-ai-predictive-analytics',
  '/blockchain-solutions-pro',
  '/iot-solutions-pro',
  '/devops-automation-pro',
  '/ai-fraud-detection-pro',
  '/ai-image-recognition-pro',
  '/ai-lead-scoring-pro',
  '/ai-predictive-maintenance-pro',
  '/ai-price-optimizer-pro',
  '/ai-voice-assistant-pro',
  '/zion-ai-customer-churn-predictor-pro',
  '/zion-cybersecurity-audit',
  '/zion-api-development',
  '/pricing',
  '/help'
];

// Footer links from Footer.tsx
const footerLinks = [
  '/ai-services',
  '/it-services',
  '/cloud-infrastructure',
  '/digital-transformation',
  '/data-analytics',
  '/web-development',
  '/mobile-development',
  '/micro-saas-solutions',
  '/ai-chatbot-builder',
  '/ai-document-processor',
  '/ai-form-builder',
  '/ai-voice-assistant',
  '/ai-fraud-detection',
  '/ai-image-recognition',
  '/ai-lead-scoring',
  '/ai-predictive-maintenance',
  '/ai-price-optimizer',
  '/ai-scheduling-assistant',
  '/ai-crm-optimizer',
  '/ai-data-visualizer',
  '/ai-email-optimizer',
  '/ai-website-analyzer',
  '/ai-social-media-manager',
  '/ai-legal-assistant',
  '/ai-medical-assistant',
  '/ai-education-tutor',
  '/ai-real-estate-analyzer',
  '/ai-supply-chain-optimizer',
  '/ai-3d-model-generator',
  '/ai-audio-processor',
  '/pricing',
  '/zion-ai-content-moderator',
  '/zion-ai-customer-support-pro',
  '/zion-ai-workflow-automator-pro',
  '/zion-ai-email-marketing-pro',
  '/zion-ai-customer-churn-predictor',
  '/zion-ai-sales-predictor',
  '/zion-ai-financial-forecaster',
  '/zion-ai-document-analyzer',
  '/zion-ai-task-scheduler',
  '/zion-ai-translation-service',
  '/zion-ai-video-generator',
  '/ai-code-assistant',
  '/ai-translator',
  '/ai-audio-processor',
  '/ai-3d-model-generator',
  '/ai-legal-assistant',
  '/ai-medical-assistant',
  '/ai-education-tutor',
  '/ai-real-estate-analyzer',
  '/ai-supply-chain-optimizer',
  '/zion-ai-fraud-detection',
  '/zion-ai-image-recognition',
  '/zion-ai-lead-scoring',
  '/zion-ai-predictive-maintenance',
  '/zion-ai-price-optimizer',
  '/zion-ai-voice-assistant',
  '/ai-voice-assistant-pro',
  '/ai-image-recognition-pro',
  '/ai-fraud-detection-pro',
  '/ai-lead-scoring-pro',
  '/ai-predictive-maintenance-pro',
  '/ai-price-optimizer-pro',
  '/blockchain-solutions-pro',
  '/iot-solutions-pro',
  '/devops-automation-pro',
  '/quantum-computing-solutions',
  '/edge-computing-solutions',
  '/augmented-reality-solutions',
  '/virtual-reality-solutions',
  '/robotic-process-automation',
  '/low-code-platform',
  '/serverless-architecture',
  '/container-orchestration',
  '/ai-infrastructure',
  '/data-lake-solutions',
  '/micro-saas-solutions',
  '/zion-smart-analytics-dashboard',
  '/zion-smart-crm-automation',
  '/zion-smart-inventory-manager',
  '/zion-smart-expense-tracker',
  '/blockchain-solutions-pro',
  '/iot-solutions-pro',
  '/devops-automation-pro',
  '/quantum-computing-solutions',
  '/edge-computing-solutions',
  '/augmented-reality-solutions',
  '/virtual-reality-solutions',
  '/robotic-process-automation',
  '/low-code-platform',
  '/serverless-architecture',
  '/container-orchestration',
  '/ai-infrastructure',
  '/data-lake-solutions',
  '/about',
  '/team',
  '/careers',
  '/partnerships',
  '/case-studies',
  '/blog',
  '/api-docs',
  '/help',
  '/contact',
  '/accessibility',
  '/privacy',
  '/terms',
  '/cookies'
];

// Combine all links and remove duplicates
const allLinks = [...new Set([...navigationLinks, ...footerLinks])];

// Find missing pages
const missingPages = allLinks.filter(link => !existingPages.has(link));

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total existing pages: ${existingPages.size}`);
console.log(`Total links referenced: ${allLinks.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES LIST ===');
missingPages.forEach(page => console.log(page));

// Create missing pages report
const report = {
  totalExistingPages: existingPages.size,
  totalReferencedLinks: allLinks.length,
  missingPagesCount: missingPages.length,
  missingPages: missingPages,
  existingPages: Array.from(existingPages).sort()
};

fs.writeFileSync('/workspace/missing_pages_analysis.json', JSON.stringify(report, null, 2));
console.log('\n=== REPORT SAVED ===');
console.log('Report saved to: /workspace/missing_pages_analysis.json');