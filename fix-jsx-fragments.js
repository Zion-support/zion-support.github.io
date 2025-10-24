#!/usr/bin/env node

import fs from 'fs';

// List of files that need fixing based on the type check errors
const filesToFix = [
  '/workspace/app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/app/blog/ai-enterprise-transformation-2025/page.tsx',
  '/workspace/app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  '/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx',
  '/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx',
  '/workspace/app/offline/page.tsx',
  '/workspace/app/page-minimal.tsx',
  '/workspace/app/page-optimized.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/team/page.tsx',
  '/workspace/app/terms/page.tsx',
];

// // Function to process a single file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Remove extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Fix JSX fragment issues - ensure proper opening and closing
    if (content.includes('<>') && !content.includes('</>')) {
      // Find the last closing div or main tag and add </> before it
      const _lines = content.split('\n');
      let _lastClosingTagIndex = -1;

      for (let i = lines.length - 1; i >= 0; i--) {
        if (
          lines[i].trim().startsWith('</') &&
          !lines[i].includes('</>') &&
          !lines[i].includes('</Helmet>')
        ) {
          lastClosingTagIndex = i;
          break;
        }
      }

      if (lastClosingTagIndex !== -1) {
        lines.splice(lastClosingTagIndex + 1, 0, '    </>');
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix function declarations
    content = content.replace(
      /export default function (\w+)\(\) \{/,
      'const $1: React.FC = () => {'
    );

    // Add proper export at the end
    if (!content.includes('export default') && content.includes('const ')) {
      //       const componentName = content.match(/const (\w+): React\.FC/)?.[1];
      if (componentName) {
        content = content.replace(/^\s*}\s*$/, `  );\n};\n\nexport default ${componentName};`);
        modified = true;
      }
    }

    // Fix any remaining syntax issues
    content = content.replace(
      /\{\s*title:\s*['"`][^'"`]*['"`]\s*,\s*description:\s*['"`][^'"`]*['"`]\s*,\s*type:\s*['"`][^'"`]*['"`]\s*,\s*url:\s*['"`][^'"`]*['"`]\s*\}/g,
      ''
    );

    if (modified) {
      fs.writeFileSync(filePath, content);
      //       return true;
    }

    return false;
  } catch (error) {
    //     return false;
  }
}

// Process all files
let _fixedCount = 0;
filesToFix.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// 
