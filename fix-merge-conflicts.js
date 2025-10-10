#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        // Skip until =======
        while (i < lines.length && lines[i].trim() !== '=======') {
          i++;
        }
        i++; // Skip the ======= line
        
        // Take content until >>>>>>> 
        while (i < lines.length && !lines[i].trim().startsWith('>>>>>>> ')) {
          result.push(lines[i]);
          i++;
        }
        i++; // Skip the >>>>>>> line
      } else {
        result.push(line);
        i++;
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files with merge conflicts

try {
  // Get files with merge conflicts using a simpler approach
  const files = [
    '/workspace/src/components/PerformanceDashboard.tsx',
    '/workspace/app/types/next.d.ts',
    '/workspace/app/ai-climate-solutions-pro/page.tsx',
    '/workspace/app/ai-autonomous-systems/page.tsx',
    '/workspace/app/ai-content-delivery-network/page.tsx',
    '/workspace/app/ai-content-writer/page.tsx',
    '/workspace/app/ai-blockchain-analytics/page.tsx',
    '/workspace/app/ai-api-management/page.tsx',
    '/workspace/app/consultation/page.tsx',
    '/workspace/app/case-studies/page.tsx',
    '/workspace/app/careers/page.tsx',
    '/workspace/app/partners/page.tsx',
    '/workspace/app/ai-computer-vision/page.tsx',
    '/workspace/app/ai-content-studio/page.tsx',
    '/workspace/app/ai-api-manager/page.tsx',
    '/workspace/app/ai-content-generation/page.tsx',
    '/workspace/app/ai-cloud-infrastructure/page.tsx',
    '/workspace/app/ai-blockchain-solutions/page.tsx',
    '/workspace/app/ai-crm-assistant/page.tsx',
    '/workspace/app/utils/accessibilityEnhancer.ts',
    '/workspace/app/utils/accessibilityChecker.ts',
    '/workspace/app/ai-code-security-auditor/page.tsx',
    '/workspace/app/ai-code-assistant/page.tsx',
    '/workspace/app/blog/page.tsx'
  ];
  
  console.log(`Processing ${files.length} files with merge conflicts`);
  
  let fixed = 0;
  for (const file of files) {
    if (fs.existsSync(file) && fixMergeConflicts(file)) {
      fixed++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixed} files`);
} catch (error) {
  console.error('Error:', error.message);
}