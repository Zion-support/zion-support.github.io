const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const files = [
  'app/services/mobile-development/page.tsx',
  'app/services/it-services/page.tsx',
  'app/services/project-management/page.tsx',
  'app/services/ai-services/page.tsx',
  'app/services/blockchain/page.tsx',
  'app/services/automation-solutions/page.tsx',
  'app/services/crm-platform/page.tsx',
  'app/services/industry-solutions/finance/page.tsx',
  'app/services/mobile-app-development/page.tsx',
  'app/services/ai-hr-management/page.tsx',
  'app/services/crm-solution/page.tsx',
  'app/services/helpdesk-platform/page.tsx',
  'app/services/ecommerce-platform/page.tsx',
  'app/services/digital-transformation/page.tsx',
  'app/services/analytics-dashboard/page.tsx',
  'app/services/cloud-services/page.tsx',
  'app/services/ai-inventory-management/page.tsx',
  'app/services/project-management-suite/page.tsx',
  'app/services/social-media-management/page.tsx',
  'app/services/email-automation/page.tsx',
  'app/services/micro-saas/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the better version (after )
    content = content.replace(/[\s\S]*?    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
files.forEach(fixMergeConflicts);
console.log('All merge conflicts fixed!');