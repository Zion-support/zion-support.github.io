const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  'app/ai-data-analytics/page.tsx',
  'app/ai-fraud-detection/page.tsx', 
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Footer.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/pages/AdminPage.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-ai-video-generator/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/5g-solutions/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Fix extra closing div tags pattern
    const extraDivPattern = /(\s*<\/div>\s*){2,}(\s*<\/div>\s*){2,}/g;
    if (extraDivPattern.test(content)) {
      content = content.replace(extraDivPattern, '\n    </div>\n  );');
      modified = true;
    }

    // Fix missing closing div tags
    const missingDivPattern = /(\s*<\/div>\s*){1,2}\s*\);\s*}/g;
    if (missingDivPattern.test(content)) {
      content = content.replace(missingDivPattern, '\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix incorrect closing tags like </>
    content = content.replace(/<\s*\/\s*>/g, '</div>');
    if (content.includes('</>')) {
      modified = true;
    }

    // Fix h1/h2/h3 tag mismatches
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*<\/h2>/g, '<h1$1>$2</h1>');
    content = content.replace(/<h2([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h3$1>$2</h3>');

    // Fix malformed JSX structure in Footer
    if (filePath.includes('Footer.tsx')) {
      content = content.replace(
        /<\/div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">/g,
        '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">'
      );
      content = content.replace(
        /<\/div><div className="lg:col-span-1">/g,
        '<div className="lg:col-span-1">'
      );
      content = content.replace(
        /<\/div><div className="flex items-center space-x-2 mb-4">/g,
        '<div className="flex items-center space-x-2 mb-4">'
      );
      content = content.replace(
        /<\/div><p className="text-gray-400 mb-4">/g,
        '<p className="text-gray-400 mb-4">'
      );
      content = content.replace(
        /<\/div><ul className="space-y-2">/g,
        '<ul className="space-y-2">'
      );
      content = content.replace(
        /<\/div><h1 className="text-lg font-semibold mb-4">AI Services<\/h3>/g,
        '<h3 className="text-lg font-semibold mb-4">AI Services</h3>'
      );
    }

    // Fix malformed JSX structure in PerformanceDashboard
    if (filePath.includes('PerformanceDashboard.tsx')) {
      content = content.replace(
        /<\/div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">/g,
        '<div className="grid grid-cols-1 md:grid-cols-3 gap-6">'
      );
      content = content.replace(
        /<\/div><div className="bg-blue-50 rounded-lg p-4">/g,
        '<div className="bg-blue-50 rounded-lg p-4">'
      );
      content = content.replace(
        /<\/div><h1 className="text-lg font-semibold text-blue-900 mb-2">\s*Render Time\s*<\/h3>/g,
        '<h3 className="text-lg font-semibold text-blue-900 mb-2">Render Time</h3>'
      );
    }

    // Fix "use client" directive placement
    if (content.includes('import React') && content.includes('"use client"') && !content.startsWith('"use client"')) {
      content = content.replace(/import React[^;]*;\s*"use client";/g, '"use client";\nimport React from "react";');
      modified = true;
    }

    // Fix missing React import
    if (!content.includes('import React') && content.includes('export default function')) {
      content = content.replace(/^/, '"use client";\nimport React from "react";\n\n');
      modified = true;
    }

    // Fix variable name issues
    content = content.replace(/\b_renderTime\b/g, 'renderTime');
    content = content.replace(/\b_memoryUsage\b/g, 'memoryUsage');
    content = content.replace(/\b_fps\b/g, 'fps');
    content = content.replace(/\b_frameCount\b/g, 'frameCount');
    content = content.replace(/\b_updateMetrics\b/g, 'updateMetrics');

    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting syntax error fixes...');
filesToFix.forEach(fixFile);
console.log('Syntax error fixes completed!');