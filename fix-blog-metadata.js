import fs from 'fs';
import path from 'path';

const blogFiles = [
  'app/blog/ai-trends-2026-future-enterprise-transformation/page.tsx',
  'app/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx',
  'app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  'app/blog/ai-2026-enterprise-breakthrough/page.tsx',
  'app/blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx',
  'app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  'app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  'app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  'app/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  'app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  'app/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  'app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  'app/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  'app/blog/ai-powered-autonomous-business-processes-2026/page.tsx',
  'app/blog/ai-2026-autonomous-agent-factories/page.tsx',
  'app/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx',
  'app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  'app/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  'app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  'app/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx'
];

blogFiles.forEach(filePath => {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix the malformed metadata export
    content = content.replace(
      /\/\/ export const metadata: Metadata = \/\/ Removed for Vite \{\s*([\s\S]*?)\n\};/g,
      (match, metadataContent) => {
        // Comment out the entire metadata block
        const lines = metadataContent.split('\n');
        const commentedLines = lines.map(line => line.trim() ? `// ${line}` : '//');
        return `// export const metadata: Metadata = { // Removed for Vite\n${commentedLines.join('\n')}\n// };`;
      }
    );
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Blog metadata fixes completed');