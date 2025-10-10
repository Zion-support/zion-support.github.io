#!/usr/bin/env node

import fs from 'fs';

// Fix the specific remaining errors
const filesToFix = [
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-api-management/page.tsx',
  '/workspace/app/ai-api-manager/page.tsx'
];

function fixAiAnalyticsPage(content) {
  // Fix the missing closing brace in the useCases array
  return content.replace(
    /icon: '📈'\s*}\s*const stats = \[/g,
    "icon: '📈'\n    }\n  ];\n\n  const stats = ["
  );
}

function fixAiApiManagementPage(content) {
  // Fix the malformed content around line 33
  return content.replace(
    /benefits: \['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'\]\s*import \{ CheckCircle, ArrowRight \} from 'lucide-react';\s*const PagePage: React\.FC = \(\) => {/g,
    "benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']\n    }\n  ];\n\n  return (\n    <>\n      <Helmet>\n        <title>AI API Management - Zion Tech Group</title>\n        <meta name=\"description\" content=\"Advanced AI API management solutions for enterprise applications.\" />\n      </Helmet>\n      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">\n        <div className=\"container mx-auto px-4 py-8\">\n          <h1 className=\"text-4xl font-bold text-white mb-8\">AI API Management</h1>\n          <p className=\"text-gray-300 text-lg\">Advanced AI API management solutions for enterprise applications.</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default AiApiManagementPage;"
  );
}

function fixAiApiManagerPage(content) {
  // Same fix as API management
  return content.replace(
    /benefits: \['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'\]\s*import \{ CheckCircle, ArrowRight \} from 'lucide-react';\s*const PagePage: React\.FC = \(\) => {/g,
    "benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']\n    }\n  ];\n\n  return (\n    <>\n      <Helmet>\n        <title>AI API Manager - Zion Tech Group</title>\n        <meta name=\"description\" content=\"Advanced AI API management solutions for enterprise applications.\" />\n      </Helmet>\n      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">\n        <div className=\"container mx-auto px-4 py-8\">\n          <h1 className=\"text-4xl font-bold text-white mb-8\">AI API Manager</h1>\n          <p className=\"text-gray-300 text-lg\">Advanced AI API management solutions for enterprise applications.</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default AiApiManagerPage;"
  );
}

const fixers = {
  '/workspace/app/ai-analytics/page.tsx': fixAiAnalyticsPage,
  '/workspace/app/ai-api-management/page.tsx': fixAiApiManagementPage,
  '/workspace/app/ai-api-manager/page.tsx': fixAiApiManagerPage
};

function fixFile(filePath) {
  try {
    console.log(`Fixing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const fixer = fixers[filePath];
    if (fixer) {
      const fixed = fixer(content);
      fs.writeFileSync(filePath, fixed);
      console.log(`  ✓ Fixed ${filePath}`);
    } else {
      console.log(`  - No specific fixer for ${filePath}`);
    }
  } catch (error) {
    console.error(`  ✗ Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Final error fixes complete!');