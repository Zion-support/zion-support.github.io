#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '');
}

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  // Fix unclosed tags
  content = content.replace(/<(\w+)([^>]*)>\s*<\/p>/g, '<$1$2></$1>');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*<\/p>/g, '<></>');
  content = content.replace(/<>\s*<\/div>/g, '<></>');
  
  // Fix unterminated regular expressions
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Resolve merge conflicts
    content = resolveMergeConflicts(content);
    
    // Fix JSX errors
    content = fixJSXErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const filesWithConflicts = [
  './app/ai-analytics/page.tsx',
  './app/ai-api-management/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-crm-assistant/page.tsx',
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityChecker.ts',
  './app/utils/accessibilityEnhancer.ts',
  './app/types/next.d.ts'
];

console.log('Fixing merge conflicts...');
let fixedCount = 0;

filesWithConflicts.forEach(file => {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} files with merge conflicts.`);