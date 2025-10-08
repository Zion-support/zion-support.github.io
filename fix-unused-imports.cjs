#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with unused Link imports
const files = [
  '/workspace/app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  '/workspace/app/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  '/workspace/app/blog/ai-2026-autonomous-agent-factories/page.tsx',
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  '/workspace/app/blog/ai-trends-2026-future-enterprise-transformation/page.tsx',
  '/workspace/app/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  '/workspace/app/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx',
  '/workspace/app/blog/agent-release-runbooks-v2-2026/page.tsx',
  '/workspace/app/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx',
  '/workspace/app/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  '/workspace/app/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  '/workspace/app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  '/workspace/app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  '/workspace/app/blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2026-enterprise-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  '/workspace/app/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx'
];

// Also fix other pages with unused Link imports
const otherFiles = [
  '/workspace/app/contact/page.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/team/page.tsx',
  '/workspace/app/terms/page.tsx'
];

const allFiles = [...files, ...otherFiles];

allFiles.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused Link import
      content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];\s*\n?/g, '');
      
      // Remove unused Link import with other imports
      content = content.replace(/import\s*{\s*[^}]*,\s*Link\s*[^}]*}\s*from\s*['"]react-router-dom['"];\s*\n?/g, '');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused Link import in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Finished fixing unused Link imports');