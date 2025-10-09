import fs from 'fs';
import path from 'path';

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
  'src/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  'src/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  'src/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  'src/blog/ai-trends-2026-future-enterprise-transformation/page.tsx'
];

function fixBlogFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find the last line that ends with just '};' and add missing closing parenthesis
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i].trim();
      if (line === '};' && i > 0) {
        // Check if the previous line ends with 'main>' or similar
        const prevLine = lines[i - 1].trim();
        if (prevLine.endsWith('</main>') || prevLine.endsWith('</div>')) {
          lines[i] = '  );';
          lines[i + 1] = '};';
          break;
        }
      }
    }
    
    const fixedContent = lines.join('\n');
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed parsing error in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all blog files
blogFiles.forEach(file => {
  fixBlogFile(file);
});

console.log('Finished fixing blog parsing errors');