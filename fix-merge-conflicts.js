#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(filePath) {
  const fullPath = path.join(__dirname, filePath);
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with merge conflicts
const filesWithConflicts = [
  'app/components/Footer.tsx',
  'app/components/Navigation.tsx',
  'app/about/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/api-development/page.tsx',
  'app/api/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/business-apps/page.tsx',
  'app/cloud-infrastructure-manager/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page-backup.tsx',
  'app/compliance/page-fixed.tsx',
  'app/contact/page-broken2.tsx',
  'app/crm-lite/page.tsx',
  'app/custom-development/page.tsx',
  'app/custom-software/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/cybersecurity-suite/page.tsx',
  'app/data-analytics/page.tsx',
  'app/data-analytics-bi/page.tsx',
  'app/data-center/page.tsx',
  'app/data-protection/page.tsx',
  'app/database-management/page.tsx',
  'app/database-services/page.tsx',
  'app/developer-tools/page.tsx',
  'app/devops-cicd/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/digital-twin-platform/page.tsx',
  'app/docs/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/edge-computing/page.tsx',
  'app/email-marketing-automation/page.tsx',
  'app/email-optimizer/page.tsx',
  'app/enterprise/page.tsx',
  'app/enterprise-security/page.tsx',
  'app/error.tsx',
  'app/expense-tracker/page.tsx',
  'app/faq/page.tsx',
  'app/financial-it/page.tsx',
  'app/health/page.tsx',
  'app/healthcare-it/page.tsx',
  'app/innovation-labs/page.tsx',
  'app/intelligent-database-migration/page.tsx',
  'app/intelligent-email-infrastructure/page.tsx',
  'app/investors/page.tsx',
  'app/iot/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-platform/page.tsx',
  'app/it-asset-management/page.tsx',
  'app/it-consulting/page.tsx',
  'app/it-infrastructure-solutions/page.tsx',
  'app/it-performance/page.tsx',
  'app/it-support/page.tsx',
  'app/it-training/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/loading.tsx',
  'app/managed-it/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas/ai-content-writer/page.tsx',
  'app/micro-saas/analytics-dashboard/page.tsx',
  'app/micro-saas/appointment-scheduler/page.tsx',
  'app/micro-saas/chat-analytics/page.tsx',
  'app/micro-saas/content-generator/page.tsx',
  'app/micro-saas/document-processor/page.tsx',
  'app/micro-saas/email-marketing/page.tsx',
  'app/micro-saas/expense-tracker/page.tsx',
  'app/micro-saas/inventory-management/page.tsx',
  'app/micro-saas/lead-scoring/page.tsx',
  'app/micro-saas/seo-optimizer/page.tsx',
  'app/micro-saas/social-manager/page.tsx',
  'app/micro-saas/support-bot/page.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/network-design/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/network-security/page.tsx',
  'app/network-solutions/page.tsx',
  'app/news/page.tsx',
  'app/not-found.tsx',
  'app/online-learning-platform/page.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/page-original.tsx',
  'app/partners/page.tsx',
  'app/penetration-testing/page.tsx',
  'app/process-automation/page.tsx',
  'app/productivity/page.tsx',
  'app/project-management-pro/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/quantum-ai/page.tsx',
  'app/robotics-integration/page.tsx',
  'app/security-monitoring/page.tsx',
  'app/security-monitoring-suite/page.tsx',
  'app/seo-optimizer/page.tsx',
  'app/sla/page.tsx',
  'app/smart-analytics/page.tsx',
  'app/smart-cities/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/smart-contract-security-audit/page.tsx',
  'app/specialized-services/page.tsx',
  'app/status/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/system-status/page.tsx',
  'app/task-manager-pro/page.tsx',
  'app/utils/testRunner.tsx',
  'app/web-development/page.tsx'
];

// Main function
function fixMergeConflicts() {
  console.log('Starting to fix merge conflicts...');
  
  filesWithConflicts.forEach(resolveMergeConflicts);
  
  console.log('Finished fixing merge conflicts!');
}

// Run the fix
fixMergeConflicts();