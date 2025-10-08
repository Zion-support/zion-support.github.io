import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define replacements
const replacements = [
  {
    pattern: /import\s+Link\s+from\s+'next\/link';/g,
    replacement: "import Link from '../utils/link';"
  },
  {
    pattern: /import\s+Image\s+from\s+'next\/image';/g,
    replacement: "import Image from '../utils/image';"
  },
  {
    pattern: /import\s+dynamic\s+from\s+'next\/dynamic';/g,
    replacement: "import dynamic from '../utils/dynamic';"
  },
  {
    pattern: /import\s+{\s*useRouter\s*}\s+from\s+'next\/navigation';/g,
    replacement: "import { useRouter } from '../utils/navigation';"
  },
  {
    pattern: /import\s+{\s*usePathname\s*}\s+from\s+'next\/navigation';/g,
    replacement: "import { usePathname } from '../utils/navigation';"
  },
  {
    pattern: /import\s+{\s*useSearchParams\s*}\s+from\s+'next\/navigation';/g,
    replacement: "import { useSearchParams } from '../utils/navigation';"
  },
  {
    pattern: /import\s+{\s*Metadata\s*}\s+from\s+'next';/g,
    replacement: "import { Metadata } from '../types/next';"
  },
  {
    pattern: /import\s+{\s*MetadataRoute\s*}\s+from\s+'next';/g,
    replacement: "import { MetadataRoute } from '../types/next';"
  },
  {
    pattern: /import\s+type\s+{\s*Metadata\s*}\s+from\s+'next';/g,
    replacement: "import type { Metadata } from '../types/next';"
  },
  {
    pattern: /'use client';/g,
    replacement: "// 'use client'; // Removed for Vite compatibility"
  }
];

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

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
console.log('Fixing Next.js imports in app directory...');
const fixedCount = processDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);