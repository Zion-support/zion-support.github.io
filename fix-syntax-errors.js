#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// List of files with known syntax errors
const problematicFiles = [
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-customer-support-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-financial-platform/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/api-docs/page.tsx',
  'app/careers/page.tsx',
  'app/components/About.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/AdvancedLoadingStates.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/Breadcrumb.tsx',
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/FuturisticBackground.tsx',
  'app/components/FuturisticCard.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/ProductionErrorBoundary.tsx',
  'app/components/SEO.tsx',
  'app/components/WebVitalsTracker.tsx',
  'app/contact/index.tsx',
  'app/docs/page.tsx',
  'app/it-services/page.tsx',
  'app/pages/HomePage.tsx',
  'app/status/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-fraud-detection-pro/page.tsx',
  'app/zion-ai-image-recognition-pro/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-workflow-automation/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing variable declarations for arrays that start with object literals
    // Look for patterns like: export default function... { { title: ... } ]
    const arrayPattern = /export default function\s+\w+\(\)\s*\{\s*\{\s*title:/;
    if (arrayPattern.test(content)) {
      // Find the function name
      const functionMatch = content.match(/export default function\s+(\w+)\(\)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        
        // Replace the pattern with proper array declaration
        content = content.replace(
          /export default function\s+\w+\(\)\s*\{\s*\{\s*title:/,
          `export default function ${functionName}() {\n  const features = [\n    {\n      title:`
        );
        modified = true;
      }
    }

    // Fix 2: Fix incomplete function definitions that end with just "return;"
    const incompleteFunctionPattern = /const\s+\w+\s*=\s*\(\)\s*=>\s*\{\s*return;\s*\},/;
    if (incompleteFunctionPattern.test(content)) {
      content = content.replace(
        /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return;\s*\},/,
        'const $1 = () => {\n  const features = ['
      );
      modified = true;
    }

    // Fix 3: Fix missing closing brackets and JSX structure
    // Look for patterns where there are object literals after a function but before proper JSX
    const objectAfterFunctionPattern = /export default function\s+\w+\(\)\s*\{\s*\{\s*title:[\s\S]*?\}\s*\];/;
    if (objectAfterFunctionPattern.test(content)) {
      const functionMatch = content.match(/export default function\s+(\w+)\(\)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        
        // Extract the array content
        const arrayMatch = content.match(/\{\s*title:[\s\S]*?\}\s*\];/);
        if (arrayMatch) {
          const arrayContent = arrayMatch[0].replace(/^\{\s*/, '[\n    {\n      ').replace(/\s*\}\s*\]\s*;?\s*$/, '\n  ];\n\n  return (');
          
          content = content.replace(
            /export default function\s+\w+\(\)\s*\{\s*\{\s*title:[\s\S]*?\}\s*\];/,
            `export default function ${functionName}() {\n  const features = ${arrayContent}`
          );
          modified = true;
        }
      }
    }

    // Fix 4: Fix missing closing JSX tags
    const missingClosingTagPattern = /<section[^>]*>[\s\S]*?$/;
    if (missingClosingTagPattern.test(content) && !content.includes('</section>')) {
      // Add closing section tag before the last closing div
      content = content.replace(/(\s*<\/div>\s*\)\s*;?\s*$)/, '\n      </section>\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix 5: Fix duplicate imports
    const duplicateImportPattern = /import.*EnhancedSEO.*from.*EnhancedSEO.*;/;
    if (duplicateImportPattern.test(content)) {
      content = content.replace(/import.*EnhancedSEO.*from.*EnhancedSEO.*;/g, '');
      modified = true;
    }

    // Fix 6: Fix missing closing brackets in JSX
    const missingBracketPattern = /<div[^>]*>[\s\S]*?<div[^>]*>[\s\S]*?$/;
    if (missingBracketPattern.test(content) && (content.match(/<div/g) || []).length > (content.match(/<\/div>/g) || []).length) {
      // Add missing closing div
      content = content.replace(/(\s*\)\s*;?\s*$)/, '\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix 7: Fix syntax errors with missing semicolons and brackets
    content = content.replace(/\}\s*,\s*\{\s*title:/g, '},\n    {\n      title:');
    content = content.replace(/\}\s*\]\s*;\s*const/g, '}\n  ];\n\n  const');
    content = content.replace(/\}\s*\]\s*;\s*return/g, '}\n  ];\n\n  return');

    // Fix 8: Ensure proper JSX structure
    if (content.includes('return (') && !content.includes('return (')) {
      content = content.replace(/return\s*\(/, 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting syntax error fixes...');

let fixedCount = 0;
problematicFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed ${fixedCount} files.`);