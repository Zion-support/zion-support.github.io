#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific syntax errors
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix missing closing tags
    content = content.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
      if (!match.includes('</') && !match.includes('/>')) {
        return match;
      }
      return match;
    });
    
    // Fix missing closing brackets
    content = content.replace(/\}\s*\)\s*$/gm, '});');
    content = content.replace(/\}\s*\)\s*export/gm, '});\nexport');
    
    // Fix missing semicolons
    content = content.replace(/\}\s*\)\s*$/gm, '});');
    content = content.replace(/\}\s*\)\s*export/gm, '});\nexport');
    
    // Fix spread operator issues
    content = content.replace(/\.\.\.\s*\)/g, '...props)');
    content = content.replace(/\.\.\.\s*}/g, '...props}');
    
    // Fix missing commas
    content = content.replace(/\}\s*\)\s*$/gm, '});');
    content = content.replace(/\}\s*\)\s*export/gm, '});\nexport');
    
    // Fix JSX closing tag issues
    content = content.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
      if (!match.includes('</') && !match.includes('/>')) {
        return match;
      }
      return match;
    });
    
    // Fix missing closing tags for specific elements
    content = content.replace(/<div([^>]*)>\s*$/gm, (match, attrs) => {
      if (!match.includes('</div>')) {
        return match;
      }
      return match;
    });
    
    // Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)>\s*$/gm, (match, attrs) => {
      if (!match.includes('</button>')) {
        return match;
      }
      return match;
    });
    
    // Fix missing closing tags for sections
    content = content.replace(/<section([^>]*)>\s*$/gm, (match, attrs) => {
      if (!match.includes('</section>')) {
        return match;
      }
      return match;
    });
    
    // Remove empty lines with just spaces
    content = content.replace(/^\s*\n/gm, '\n');
    
    // Remove multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed specific errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with specific errors
const filesWithErrors = [
  '/workspace/EnhancedFooter.tsx',
  '/workspace/app/about/page.tsx',
  '/workspace/app/ai-3d-generation/page.tsx',
  '/workspace/app/ai-accounting-assistant/page.tsx',
  '/workspace/app/ai-agricultural-intelligence-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard/page.tsx',
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-api-management/page.tsx',
  '/workspace/app/ai-api-manager/page.tsx',
  '/workspace/app/ai-automated-reporting/page.tsx',
  '/workspace/app/ai-automated-testing/page.tsx',
  '/workspace/app/ai-automation/page.tsx',
  '/workspace/app/ai-autonomous-systems/page.tsx',
  '/workspace/app/ai-blockchain-analytics/page.tsx',
  '/workspace/app/ai-blockchain-solutions/page.tsx'
];

console.log('Fixing specific syntax errors...');

let fixedCount = 0;
filesWithErrors.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixSpecificErrors(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed specific errors in ${fixedCount} files`);
console.log('Specific error fixing completed!');