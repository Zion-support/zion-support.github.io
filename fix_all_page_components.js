#!/usr/bin/env node

import fs from 'fs';

// List of files that need to be fixed with their correct component names
const filesToFix = [
  { path: './app/ai-powered-devops/page.tsx', name: 'AiPoweredDevopsPage' },
  { path: './app/ai-powered-email-analyzer/page.tsx', name: 'AiPoweredEmailAnalyzerPage' },
  { path: './app/medical-records-manager/page.tsx', name: 'MedicalRecordsManagerPage' },
  { path: './app/online-learning-platform/page.tsx', name: 'OnlineLearningPlatformPage' },
  { path: './app/property-management-ai/page.tsx', name: 'PropertyManagementAiPage' },
  { path: './app/supply-chain-optimizer/page.tsx', name: 'SupplyChainOptimizerPage' },
  { path: './app/test/page.tsx', name: 'TestPage' }
];

console.log(`Fixing ${filesToFix.length} page components`);

filesToFix.forEach(({ path, name }) => {
  try {
    console.log(`Fixing: ${path} -> ${name}`);
    
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace const Page with the correct component name
    content = content.replace(/const Page:/g, `const ${name}:`);
    
    // Replace export default Page with the correct component name
    content = content.replace(/export default Page/g, `export default ${name}`);
    
    fs.writeFileSync(path, content);
    console.log(`✓ Fixed: ${path}`);
    
  } catch (error) {
    console.error(`Error processing ${path}:`, error.message);
  }
});

console.log(`\nFixed ${filesToFix.length} page components`);