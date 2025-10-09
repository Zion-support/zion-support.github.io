#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const filesToFix = [
  './app/system-status/page.tsx',
  './app/support/page.tsx',
  './app/news/page.tsx',
  './app/security/page.tsx',
  './app/developer-tools/page.tsx',
  './app/docs/page.tsx',
  './app/cookies/page.tsx',
  './app/gdpr/page.tsx',
  './app/compliance/page.tsx',
  './app/components/EnhancedErrorBoundary.tsx'
];

const gitBranchString = ' cursor/analyze-improve-and-deploy-application-cde4';

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove the git branch string
    content = content.replace(new RegExp(gitBranchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '');
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('🎉 Git branch string cleanup complete!');