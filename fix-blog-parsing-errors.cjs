const fs = require('fs');
const path = require('path');

// List of blog files with parsing errors
const blogFiles = [
  'src/blog/ai-2025-january-advanced-ai-revolution/page.tsx',
  'src/blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx',
  'src/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx',
  'src/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx',
  'src/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx',
  'src/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  'src/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  'src/blog/ai-2026-autonomous-agent-factories/page.tsx',
  'src/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  'src/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  'src/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  'src/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  'src/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  'src/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  'src/blog/ai-2026-enterprise-breakthrough/page.tsx',
  'src/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  'src/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  'src/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  'src/blog/ai-autonomous-business-systems-2026/page.tsx',
  'src/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  'src/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  'src/blog/ai-trends-2026-future-enterprise-transformation/page.tsx'
];

function fixBlogFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file ends with just }; or similar patterns
    const lines = content.split('\n');
    const lastLine = lines[lines.length - 1].trim();
    
    // Fix common patterns
    if (lastLine === '};' || lastLine === '}' || lastLine === ');') {
      // Replace the last line with proper closing
      lines[lines.length - 1] = '  );';
      lines.push('}');
      content = lines.join('\n');
    } else if (lastLine.endsWith(');') && !lastLine.includes('return')) {
      // Add missing closing brace
      lines.push('}');
      content = lines.join('\n');
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Fixing blog parsing errors...');

let fixedCount = 0;
blogFiles.forEach(file => {
  if (fixBlogFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} blog files.`);