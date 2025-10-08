#!/usr/bin/env node

import fs from 'fs';

// List of files that still have syntax issues
const filesToFix = [
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx',
  '/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx',
  '/workspace/app/offline/page.tsx',
  '/workspace/app/page-minimal.tsx',
  '/workspace/app/page-optimized.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/team/page.tsx',
  '/workspace/app/terms/page.tsx',
];

// console.log(`Fixing ${filesToFix.length} files`);

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove any remaining metadata exports
    content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');

    // Remove any broken metadata lines
    const lines = content.split('\n');
    const filteredLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip lines that look like broken metadata
      if (
        line.includes('export const metadata') ||
        (line.includes('title:') && !line.includes('<title>') && !line.includes('//')) ||
        (line.includes('description:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('type:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('url:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('keywords:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('openGraph:') && !line.includes('//')) ||
        (line.includes('twitter:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.includes('images:') && !line.includes('<meta') && !line.includes('//')) ||
        (line.trim() === '{' && i > 0 && lines[i - 1].includes('metadata')) ||
        (line.trim() === '},' && i > 0 && lines[i - 1].includes('metadata')) ||
        (line.trim() === '};' && i > 0 && lines[i - 1].includes('metadata'))
      ) {
        continue;
      }

      filteredLines.push(line);
    }

    content = filteredLines.join('\n');

    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Fix function declarations
    content = content.replace(
      /export default function (\w+)\(\) \{/,
      'const $1: React.FC = () => {'
    );

    // Add proper export at the end if missing
    if (!content.includes('export default') && content.includes('const ')) {
      //       const componentName = content.match(/const (\w+): React\.FC/)?.[1];
      if (componentName) {
        content = content.replace(/^\s*}\s*$/, `  );\n};\n\nexport default ${componentName};`);
        modified = true;
      }
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      //       console.log(`✓ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    //     console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files`);
