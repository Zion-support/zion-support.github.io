#!/usr/bin/env node

import fs from 'fs';

const files = [
  '/workspace/app/5g-edge-computing/page.tsx',
  '/workspace/app/5g-implementation/page.tsx',
  '/workspace/app/5g-infrastructure/page.tsx',
  '/workspace/app/5g-mobile-applications/page.tsx',
  '/workspace/app/5g-network-infrastructure/page.tsx'
];

const functionNames = [
  'FiveGEdgeComputingPage',
  'FiveGImplementationPage',
  'FiveGInfrastructurePage',
  'FiveGMobileApplicationsPage',
  'FiveGNetworkInfrastructurePage'
];

console.log('🔧 Fixing function names...');

files.forEach((file, index) => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Replace the function name
      const oldPattern = /export default function [^(]+\(/;
      const newFunctionName = functionNames[index];
      content = content.replace(oldPattern, `export default function ${newFunctionName}(`);
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed function name in: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing ${file}: ${error.message}`);
  }
});

console.log('✅ Function names fixed!');