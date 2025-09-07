#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

        content = content.replace(/
        
        // Clean up any remaining conflict markers
        content = content.replace(/
        content = content.replace(/
        
        // Write the cleaned content
        fs.writeFileSync(file, content);
        execSync(`git add ${file}`);
        resolvedCount++;
      } catch (error) {
        console.error(`Error resolving ${file}:`, error.message);
      }
    }
  });
  
  return resolvedCount;
}

// Function to resolve add/add conflicts
function resolveAddAddConflicts() {
  console.log('➕ Resolving add/add conflicts...');
  
  const addAddFiles = [
    'zion-os/src/app/admin/deployments/page.tsx',
    'zion-os/src/app/admin/os-deploy/page.tsx',
    'zion-os/src/app/api/user/onboarding/route.ts'
  ];
  
  let resolvedCount = 0;
  
  addAddFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        console.log(`Resolving add/add conflict in ${file}`);
        
        // Read the file content
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove conflict markers and keep both versions
        content = content.replace(/
          const parts = match.split('
