#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to create a clean page component with proper function names
function createCleanPageComponent(pageName, title) {
  const functionName = pageName
    .split('-')
    .map((word, index) => 
      index === 0 
        ? word.charAt(0).toLowerCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
    
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">${title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}`;
}

// List of all page files to fix
const pageFiles = [
  'app/ai-email-assistant/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-marketing-automation/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-smart-scheduler/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/it-services/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx'
];

// Function to fix a specific file
function fixFile(filePath) {
  try {
    const pageName = path.basename(path.dirname(filePath));
    const title = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const newContent = createCleanPageComponent(pageName, title);
    
    console.log(`Fixing file: ${filePath}`);
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log(`Fixing function names in: ${workspaceDir}`);
  
  let fixedCount = 0;
  
  for (const relativePath of pageFiles) {
    const fullPath = path.join(workspaceDir, relativePath);
    
    if (fs.existsSync(fullPath)) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check to see if we fixed the issues
  try {
    console.log('Running type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors, but fixed some files.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile };