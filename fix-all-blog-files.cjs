#!/usr/bin/env node

const fs = require('fs');

// List of blog files with parsing errors
const files = [
  '/workspace/src/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx',
  '/workspace/src/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  '/workspace/src/blog/ai-2026-autonomous-agent-factories/page.tsx',
  '/workspace/src/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  '/workspace/src/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-enterprise-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  '/workspace/src/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  '/workspace/src/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/src/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/src/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  '/workspace/src/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  '/workspace/src/blog/ai-trends-2026-future-enterprise-transformation/page.tsx'
];

// Fix a single blog file
function fixBlogFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file ends with }; instead of ); };
    if (content.trim().endsWith('};')) {
      // Find the last occurrence of '};' and replace it with '); };'
      const lastIndex = content.lastIndexOf('};');
      if (lastIndex !== -1) {
        content = content.substring(0, lastIndex) + '); };' + content.substring(lastIndex + 2);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed parsing error in: ${filePath}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing all blog parsing errors...');

let fixedCount = 0;

files.forEach(file => {
  if (fixBlogFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed parsing errors in ${fixedCount} files.`);