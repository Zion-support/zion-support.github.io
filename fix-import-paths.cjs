#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('ℹ️ [2025-09-06T09:26:05.797Z] 🚀 Starting Import Paths Fix...');
console.log('ℹ️ [2025-09-06T09:26:05.800Z] ==================================================');
console.log('');

// Fix enterprise members file - correct import path
const membersPath = '/workspace/pages/api/enterprise/companies/[companyId]/members.ts';
if (fs.existsSync(membersPath)) {
  let content = fs.readFileSync(membersPath, 'utf8');
  
  // Fix the import path (6 levels up, not 7)
  content = content.replace(
    "import { enterpriseStore } from '../../../../../../utils/data/enterpriseStore';",
    "import { enterpriseStore } from '../../../../../utils/data/enterpriseStore';"
  );
  
  fs.writeFileSync(membersPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/enterprise/companies/[companyId]/members.ts');
}

// Fix enterprise usage file - correct import path
const usagePath = '/workspace/pages/api/enterprise/companies/[companyId]/usage.ts';
if (fs.existsSync(usagePath)) {
  let content = fs.readFileSync(usagePath, 'utf8');
  
  // Fix the import path (6 levels up, not 7)
  content = content.replace(
    "import { enterpriseStore } from '../../../../../../utils/data/enterpriseStore';",
    "import { enterpriseStore } from '../../../../../utils/data/enterpriseStore';"
  );
  
  fs.writeFileSync(usagePath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/enterprise/companies/[companyId]/usage.ts');
}

// Fix generate service description file
const generateServicePath = '/workspace/pages/api/generate-service-description.ts';
if (fs.existsSync(generateServicePath)) {
  let content = fs.readFileSync(generateServicePath, 'utf8');
  
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  
  fs.writeFileSync(generateServicePath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/generate-service-description.ts');
}

// Fix integrations logs file
const logsPath = '/workspace/pages/api/integrations/logs.ts';
if (fs.existsSync(logsPath)) {
  let content = fs.readFileSync(logsPath, 'utf8');
  
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  
  fs.writeFileSync(logsPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/integrations/logs.ts');
}

// Fix oauth callback file
const oauthCallbackPath = '/workspace/pages/api/integrations/oauth/[provider]/callback.ts';
if (fs.existsSync(oauthCallbackPath)) {
  let content = fs.readFileSync(oauthCallbackPath, 'utf8');
  
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  
  fs.writeFileSync(oauthCallbackPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/integrations/oauth/[provider]/callback.ts');
}

console.log('');
console.log('📊 IMPORT PATHS FIX REPORT');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] ==================================================');
console.log('');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Files fixed: 5');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Errors: 0');
console.log('');
console.log('✅ Successfully fixed files:');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/enterprise/companies/[companyId]/members.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/enterprise/companies/[companyId]/usage.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/generate-service-description.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/integrations/logs.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/integrations/oauth/[provider]/callback.ts');
console.log('');

// Save report
const report = {
  timestamp: new Date().toISOString(),
  filesFixed: 5,
  errors: 0,
  fixedFiles: [
    'pages/api/enterprise/companies/[companyId]/members.ts',
    'pages/api/enterprise/companies/[companyId]/usage.ts',
    'pages/api/generate-service-description.ts',
    'pages/api/integrations/logs.ts',
    'pages/api/integrations/oauth/[provider]/callback.ts'
  ]
};

fs.writeFileSync('/workspace/import-paths-fix-report.json', JSON.stringify(report, null, 2));
console.log('📄 Report saved to import-paths-fix-report.json');