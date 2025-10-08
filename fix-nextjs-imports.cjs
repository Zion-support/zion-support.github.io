#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Files to fix
const filesToFix = [
  'app/not-found.tsx',
  'app/page-minimal.tsx',
  'app/page-optimized.tsx',
  'app/offline/page.tsx',
  'app/guides/ai-2027-implementation-roadmap/page.tsx',
  'app/guides/ai-2026-implementation-roadmap/page.tsx',
  'app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  'app/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  'app/components/SEOOptimizer.tsx',
  'app/blog/ai-autonomous-business-systems-2026/page.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/UltimateBusinessIntelligence2025Banner.tsx',
  'app/components/NewestContent2025Banner.tsx',
  'app/components/UltimateBusinessIntelligenceShowcase2025.tsx',
  'app/components/UnifiedContentPromotion.tsx',
  'app/blog/agent-release-runbooks-v2-2026/page.tsx'
];

// Replacement mappings
const replacements = [
  // Remove Next.js imports
  { from: /import.*from ['"]next\/link['"];?\s*\n?/g, to: '' },
  { from: /import.*from ['"]next\/image['"];?\s*\n?/g, to: '' },
  { from: /import.*from ['"]next\/dynamic['"];?\s*\n?/g, to: '' },
  { from: /import.*from ['"]next\/navigation['"];?\s*\n?/g, to: '' },
  { from: /import.*from ['"]next['"];?\s*\n?/g, to: '' },
  
  // Add React Router imports
  { from: /import React from 'react';/g, to: "import React from 'react';\nimport { Link } from 'react-router-dom';" },
  { from: /import React, {/g, to: "import React, { Link } from 'react-router-dom';\nimport React, {" },
  
  // Replace Next.js Link with React Router Link
  { from: /<Link\s+href=/g, to: '<Link to=' },
  { from: /from 'next\/link'/g, to: "from 'react-router-dom'" },
  
  // Replace Next.js Image with regular img
  { from: /<Image\s+/g, to: '<img ' },
  { from: /from 'next\/image'/g, to: '' },
  
  // Replace Next.js dynamic with React lazy
  { from: /import dynamic from 'next\/dynamic';/g, to: "import { lazy } from 'react';" },
  { from: /const (\w+) = dynamic\(/g, to: 'const $1 = lazy(' },
  { from: /loading: \(\) => <[^>]+>,\s*}/g, to: ');' },
  
  // Remove Next.js metadata exports
  { from: /export const metadata: Metadata = \{[\s\S]*?\};\s*\n?/g, to: '' },
  { from: /import.*Metadata.*from ['"]next['"];?\s*\n?/g, to: '' },
  
  // Replace Next.js navigation hooks
  { from: /useRouter\(\)/g, to: 'useNavigate()' },
  { from: /from 'next\/navigation'/g, to: "from 'react-router-dom'" },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply replacements
    for (const replacement of replacements) {
      const newContent = content.replace(replacement.from, replacement.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`\nFixed ${fixedCount} files`);