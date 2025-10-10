#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  './app/ai-api-management/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-crm-assistant/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityChecker.ts',
  './app/utils/accessibilityEnhancer.ts',
  './app/types/next.d.ts'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any orphaned markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');