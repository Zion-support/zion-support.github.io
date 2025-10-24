#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  const fullPath = path.join(__dirname, filePath);
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix common syntax errors
    content = content.replace(/,\s*\]\s*;\s*\]\s*;\s*\]\s*;/g, '];');
    content = content.replace(/,\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, ');');
    content = content.replace(/,\s*\}\s*;\s*\}\s*;\s*\}\s*;/g, '};');
    
    // Fix malformed object literals
    content = content.replace(/example:\s*\{,\s*request:\s*\{,/g, 'example: {\n    request: {');
    content = content.replace(/copyToClipboard\s*=\s*\([^)]*\)\s*=>\s*\{,/g, 'copyToClipboard = (code, id) => {\n    ');
    content = content.replace(/setCopiedCode\(id\),\s*setTimeout/g, 'setCopiedCode(id);\n    setTimeout');
    content = content.replace(/setTimeout\(\(\)\s*=>\s*setCopiedCode\(null\),\s*2000\)\}\s*const/g, 'setTimeout(() => setCopiedCode(null), 2000);\n  };\n\n  const');
    
    // Fix missing closing tags
    content = content.replace(/<\/Helmet>\s*$/gm, '</Helmet>');
    
    // Fix malformed JSX
    content = content.replace(/<Helmet>\s*<title[^>]*><\/title>\s*<meta[^>]*><\/meta>\s*<meta[^>]*><\/meta>\s*<\/Helmet>/g, (match) => {
      return match.replace(/<\/Helmet>/, '</Helmet>');
    });
    
    // Fix missing semicolons and commas
    content = content.replace(/([^;}])\s*const\s/g, '$1;\n  const ');
    content = content.replace(/([^;}])\s*function\s/g, '$1;\n  function ');
    content = content.replace(/([^;}])\s*export\s/g, '$1;\n  export ');
    
    // Fix missing imports
    if (content.includes('useState') && !content.includes("import { useState }")) {
      content = content.replace(/import React[^;]*;/g, (match) => {
        if (match.includes('useState')) return match;
        return match.replace('import React', 'import React, { useState }');
      });
    }
    
    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
      content = content.replace(/import React[^;]*;/g, (match) => {
        return match + '\nimport { Helmet } from \'react-helmet-async\';';
      });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with syntax errors
const filesWithSyntaxErrors = [
  'app/analytics-tools/page.tsx',
  'app/api-development/page.tsx',
  'app/api-docs/page.tsx',
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
function fixAllSyntaxErrors() {
  console.log('Starting to fix syntax errors...');
  
  filesWithSyntaxErrors.forEach(fixSyntaxErrors);
  
  console.log('Finished fixing syntax errors!');
}

// Run the fix
fixAllSyntaxErrors();
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix array syntax issues in metadata objects
    // Pattern: { name: "value" } -> { name: "value" }
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix specific patterns that are causing issues
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    
    // Fix array syntax in benefits arrays
    content = content.replace(/benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]/g, 
      'benefits: [\n      "$1",\n      "$2",\n      "$3",\n      "$4"\n    ]');
    
    // Fix array syntax in features arrays
    content = content.replace(/benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]/g, 
      'benefits: [\n      "$1",\n      "$2",\n      "$3",\n      "$4"\n    ]');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix specific syntax issues
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    
    // Fix array syntax issues
    content = content.replace(/\[\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\]/g, 
      `[
                { name: "$1", path: "$2" },
                { name: "$3", path: "$4" },
                { name: "$5", path: "$6" },
                { name: "$7", path: "$8" }
              ]`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing from the app directory
walkDirectory('./app');
console.log('Syntax fixing completed!');
