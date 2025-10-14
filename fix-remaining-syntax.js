#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific syntax patterns
function fixSpecificSyntax(content) {
  let fixed = content;
  
  // Fix unterminated strings
  fixed = fixed.replace(/"([^"]*)$/gm, '"$1"');
  fixed = fixed.replace(/'([^']*)$/gm, "'$1'");
  
  // Fix JSX syntax issues
  fixed = fixed.replace(/<([^>]*?)>/g, (match, inner) => {
    if (inner.includes('<') && !inner.includes('>')) {
      return match + '>';
    }
    return match;
  });
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>/g, (match, attrs) => {
    if (!fixed.includes('</div>')) {
      return match + '</div>';
    }
    return match;
  });
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>([^<]*?)<\/>/g, (match, inner) => {
    if (inner.trim()) {
      return `<div>${inner}</div>`;
    }
    return match;
  });
  
  // Fix missing parentheses
  fixed = fixed.replace(/\(([^)]*)$/gm, '($1)');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n\s*export/g, '$1;\nexport');
  fixed = fixed.replace(/([^;}])\n\s*import/g, '$1;\nimport');
  fixed = fixed.replace(/([^;}])\n\s*const/g, '$1;\nconst');
  fixed = fixed.replace(/([^;}])\n\s*function/g, '$1;\nfunction');
  
  // Fix React import issues
  if (fixed.includes('React') && !fixed.includes("import React")) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  // Remove unused React imports
  if (fixed.includes("import React from 'react';") && !fixed.match(/<[A-Z]/)) {
    fixed = fixed.replace(/import React from 'react';\n?/g, '');
  }
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n' + '}'.repeat(openBraces - closeBraces);
  }
  
  // Clean up extra whitespace and empty lines
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  fixed = fixed.trim() + '\n';
  
  return fixed;
}

// Function to find and fix all problematic files
function fixAllFiles() {
  const problematicFiles = [
    '/workspace/app/about/page.tsx',
    '/workspace/app/ad-management/page.tsx',
    '/workspace/app/ai-3d-generation/page.tsx',
    '/workspace/app/ai-analytics/page.tsx',
    '/workspace/app/ai-automation-platform/page.tsx',
    '/workspace/app/ai-automation-suite/page.tsx',
    '/workspace/app/ai-chatbot-builder/page.tsx',
    '/workspace/app/ai-content-creation/page.tsx',
    '/workspace/app/ai-content-generation/page.tsx',
    '/workspace/app/ai-customer-sentiment-tracker/page.tsx',
    '/workspace/app/ai-customer-support/page.tsx',
    '/workspace/app/ai-customer-support-chatbot/page.tsx',
    '/workspace/app/ai-cybersecurity/page.tsx',
    '/workspace/app/ai-data-analytics/page.tsx',
    '/workspace/app/ai-data-analytics-pro/page.tsx',
    '/workspace/app/ai-data-mining-pro/page.tsx',
    '/workspace/app/ai-data-visualization/page.tsx',
    '/workspace/app/ai-ecommerce-solutions/page.tsx',
    '/workspace/app/ai-education-platform/page.tsx',
    '/workspace/app/ai-financial-analysis/page.tsx',
    '/workspace/app/ai-fintech/page.tsx',
    '/workspace/app/ai-fintech-solutions/page.tsx',
    '/workspace/app/ai-fraud-detection-pro/page.tsx',
    '/workspace/app/ai-healthcare/page.tsx',
    '/workspace/app/ai-healthcare-diagnostics/page.tsx',
    '/workspace/app/ai-holographic-workspace/page.tsx',
    '/workspace/app/ai-hr-recruitment-pro/page.tsx',
    '/workspace/app/ai-image-recognition-pro/page.tsx',
    '/workspace/app/ai-language-translation/page.tsx',
    '/workspace/app/ai-marketing/page.tsx',
    '/workspace/app/ai-mobile-app-builder/page.tsx',
    '/workspace/app/ai-mobile-app-development/page.tsx',
    '/workspace/app/ai-mobile-builder/page.tsx',
    '/workspace/app/ai-nlp-text-analysis/page.tsx',
    '/workspace/app/ai-powered-devops/page.tsx',
    '/workspace/app/ai-predictive-analytics/page.tsx',
    '/workspace/app/ai-project-management/page.tsx',
    '/workspace/app/ai-recommendation-engine/page.tsx',
    '/workspace/app/ai-sales-automation/page.tsx',
    '/workspace/app/ai-services/page.tsx',
    '/workspace/app/ai-solutions/page.tsx',
    '/workspace/app/ai-supply-chain-optimizer/page.tsx',
    '/workspace/app/ai-time-series-forecasting/page.tsx',
    '/workspace/app/ai-translation-service/page.tsx',
    '/workspace/app/ai-voice-assistant/page.tsx',
    '/workspace/app/ai-workflow-automation/page.tsx'
  ];
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const filePath of problematicFiles) {
    try {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixSpecificSyntax(content);
        
        if (content !== fixed) {
          fs.writeFileSync(filePath, fixed, 'utf8');
          console.log(`✓ Fixed ${filePath}`);
          successCount++;
        } else {
          console.log(`- No changes needed for ${filePath}`);
        }
      } else {
        console.log(`- File not found: ${filePath}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  return { successCount, errorCount };
}

// Main execution
console.log('🔧 Fixing remaining syntax errors...');
const { successCount, errorCount } = fixAllFiles();

console.log(`\n📊 Results:`);
console.log(`  ✓ Successfully processed: ${successCount} files`);
console.log(`  ✗ Errors: ${errorCount} files`);

console.log('\n✨ Syntax fixing complete!');