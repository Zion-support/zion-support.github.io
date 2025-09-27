#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing remaining syntax errors...');

// Function to fix a file
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix common syntax errors
  content = content.replace(/const, serviceDetail, s =/g, 'const serviceDetails =');
  content = content.replace(/tit, l, e:/g, 'title:');
  content = content.replace(/descripti, o, n:/g, 'description:');
  content = content.replace(/imag, e, s\.forEach\(\(img: HTMLImageEleme, n, t\) => \{if \(!i, m, g\.a, l, t\) \{/g, 'images.forEach((img: HTMLImageElement) => {\n    if (!img.alt) {');
  content = content.replace(/issu, e, s\.push\(\{/g, 'issues.push({');
  content = content.replace(/type: "error",/g, 'type: "error",');
  content = content.replace(/message: "Ima, gemissingaltattribute"element: imgrule: "alt-text"/g, 'message: "Image missing alt attribute", element: img, rule: "alt-text"');
  content = content.replace(/\}\)\}\}\);/g, '});');
  content = content.replace(/useEffect\(\(\) => \{if \(typeofwindow === 'undefined'\) return;/g, 'useEffect(() => {\n    if (typeof window === \'undefined\') return;');
  content = content.replace(/console\.log\("Performancemonitoringenabled"\)\};/g, 'console.log("Performance monitoring enabled");\n    }');
  content = content.replace(/if \("memory' in, performan, c, e\) \{/g, 'if ("memory" in performance) {');
  content = content.replace(/con, s, t, memo, r, y = \(performan, c, e, as, a, n, y\)\.memo, r, y;/g, 'const memory = (performance as any).memory;');
  
  // Fix JSX syntax errors
  content = content.replace(/return \(\s*<>/g, 'return (\n    <>');
  content = content.replace(/<SEO \/>\s*<Head>/g, '<SEO />\n      <Head>');
  content = content.replace(/<title>([^<]*)<\/title>\s*<meta name="description"/g, '<title>$1</title>\n        <meta name="description"');
  content = content.replace(/content="([^"]*)" \/>\s*<meta name="viewport"/g, 'content="$1" />\n        <meta name="viewport"');
  content = content.replace(/initial-scale=1" \/>\s*<\/Head>/g, 'initial-scale=1" />\n      </Head>');
  content = content.replace(/<\/Head>\s*<div className="min-h-screen/g, '</Head>\n      <div className="min-h-screen');
  
  // Fix specific malformed class names
  content = content.replace(/className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">/g, 'className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">');
  content = content.replace(/className="container mx-auto px-4 py-8 max-w-4 xl">/g, 'className="container mx-auto px-4 py-8 max-w-4xl">');
  content = content.replace(/className="mb-8">/g, 'className="mb-8">');
  content = content.replace(/className="text-blue-600hover:text-blue-800 font-medium transition-colors">/g, 'className="text-blue-600 hover:text-blue-800 font-medium transition-colors">');
  
  // Fix missing imports
  if (content.includes('useAnalytics') && !content.includes("import { useAnalytics }")) {
    content = content.replace(/import React, { useState, useEffect } from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { useAnalytics } from '../src/hooks/useAnalytics';");
  }
  
  if (content.includes('Link href=') && !content.includes("import Link from 'next/link'")) {
    content = content.replace(/import React, { useState, useEffect } from 'react';/, "import React, { useState, useEffect } from 'react';\nimport Link from 'next/link';");
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filePath}`);
    return true;
  }
  return false;
}

// Fix all remaining problematic files
const filesToFix = [
  '/workspace/pages/enhanced-home.tsx',
  '/workspace/pages/privacy-policy.tsx',
  '/workspace/pages/services.tsx',
  '/workspace/pages/contact.tsx',
  '/workspace/pages/about.tsx',
  '/workspace/src/components/AccessibilityAuditor.tsx',
  '/workspace/src/components/PerformanceOptimizer.tsx'
];

let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`🎉 Fixed ${fixedCount} files`);