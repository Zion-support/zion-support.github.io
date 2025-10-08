import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that need specific fixes
const specificFixes = {
  'app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx': {
    keywords:
      'autonomous business intelligence, AI 2026, enterprise AI, business automation, machine learning, AI breakthrough',
  },
  'app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx': {
    keywords:
      'autonomous enterprise automation, AI 2026, enterprise automation, business process automation, AI systems, digital transformation',
  },
  'app/blog/ai-2026-enterprise-breakthrough/page.tsx': {
    keywords:
      'enterprise AI breakthrough, AI 2026, enterprise transformation, business intelligence, AI solutions, digital innovation',
  },
  'app/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx': {
    keywords:
      'AI breakthrough 2026, enterprise AI, business transformation, AI revolution, machine learning, digital innovation',
  },
  'app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx': {
    keywords:
      'AI consciousness breakthrough, AI 2026, artificial consciousness, enterprise AI, business intelligence, AI innovation',
  },
  'app/blog/ai-2026-hyperconscious-computing-revolution/page.tsx': {
    keywords:
      'hyperconscious computing, AI 2026, artificial consciousness, enterprise AI, business intelligence, AI revolution',
  },
};

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply specific fixes
    const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
    if (specificFixes[relativePath]) {
      const fix = specificFixes[relativePath];
      if (fix.keywords) {
        const keywordArray = fix.keywords
          .split(', ')
          .map(k => `'${k}'`)
          .join(', ');
        const pattern = /keywords:\s*'[^']+',/g;
        if (pattern.test(content)) {
          content = content.replace(pattern, `keywords: [${keywordArray}],`);
          modified = true;
        }
      }
    }

    // General fixes
    const replacements = [
      // Fix import paths for components
      {
        pattern: /import\s+{\s*useRouter\s*}\s+from\s+'\.\.\/\.\.\/utils\/navigation';/g,
        replacement: "import { useRouter } from '../utils/navigation';",
      },
      // Fix import paths for root-level files
      {
        pattern: /import\s+{\s*Metadata\s*}\s+from\s+'\.\/types\/next';/g,
        replacement: "import { Metadata } from './types/next';",
      },
      {
        pattern: /import\s+Link\s+from\s+'\.\/utils\/link';/g,
        replacement: "import Link from './utils/link';",
      },
    ];

    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (processFile(fullPath)) {
        totalFixed++;
      }
    }
  });

  return totalFixed;
}

// Process the app directory
const appDir = path.join(__dirname, 'app');
console.log('Fixing final comprehensive issues...');
const fixedCount = processDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);
