#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with unused Link imports
const filesToFix = [
  'app/blog/ai-2025-january-advanced-ai-revolution/page.tsx',
  'app/blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx',
  'app/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx',
  'app/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx',
  'app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  'app/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  'app/blog/ai-2026-autonomous-agent-factories/page.tsx',
  'app/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  'app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  'app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  'app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  'app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  'app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  'app/blog/ai-2026-enterprise-breakthrough/page.tsx',
  'app/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  'app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx',
  'app/blog/ai-2026-hyperconscious-computing-revolution/page.tsx',
  'app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx',
  'app/blog/ai-trends-2026-future-enterprise-transformation/page.tsx',
  'app/team/page.tsx'
];

function fixUnusedLinkImport(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused Link import
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];\s*\n?/g, '');
    
    // Remove empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*['"]react-router-dom['"];\s*\n?/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixUnusedLinkImport);

console.log('Unused Link imports fixed!');