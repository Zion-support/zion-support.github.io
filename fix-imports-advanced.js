import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getRelativePath(fromPath, toPath) {
  const _relative = path.relative(path.dirname(fromPath), toPath);
  return relative.startsWith('.') ? relative : './' + relative;
}

function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Calculate relative paths based on file location
    const _isInBlog = filePath.includes('/blog/');
    const _isInComponents = filePath.includes('/components/');
    const _isInGuides = filePath.includes('/guides/');
    const _isInPages = filePath.includes('/pages/');

    let _utilsPath = '../utils/';
    let _typesPath = '../types/';

    if (isInBlog || isInGuides || isInPages) {
      utilsPath = '../../utils/';
      typesPath = '../../types/';
    } else if (isInComponents) {
      utilsPath = '../utils/';
      typesPath = '../types/';
    }

    // Define replacements with dynamic paths
    const replacements = [
      {
        pattern: /import\s+Link\s+from\s+'next\/link';/g,
        replacement: `import Link from '${utilsPath}link';`,
      },
      {
        pattern: /import\s+Image\s+from\s+'next\/image';/g,
        replacement: `import Image from '${utilsPath}image';`,
      },
      {
        pattern: /import\s+dynamic\s+from\s+'next\/dynamic';/g,
        replacement: `import dynamic from '${utilsPath}dynamic';`,
      },
      {
        pattern: /import\s+{\s*useRouter\s*}\s+from\s+'next\/navigation';/g,
        replacement: `import { useRouter } from '${utilsPath}navigation';`,
      },
      {
        pattern: /import\s+{\s*usePathname\s*}\s+from\s+'next\/navigation';/g,
        replacement: `import { usePathname } from '${utilsPath}navigation';`,
      },
      {
        pattern: /import\s+{\s*useSearchParams\s*}\s+from\s+'next\/navigation';/g,
        replacement: `import { useSearchParams } from '${utilsPath}navigation';`,
      },
      {
        pattern: /import\s+{\s*Metadata\s*}\s+from\s+'next';/g,
        replacement: `import { Metadata } from '${typesPath}next';`,
      },
      {
        pattern: /import\s+{\s*MetadataRoute\s*}\s+from\s+'next';/g,
        replacement: `import { MetadataRoute } from '${typesPath}next';`,
      },
      {
        pattern: /import\s+type\s+{\s*Metadata\s*}\s+from\s+'next';/g,
        replacement: `import type { Metadata } from '${typesPath}next';`,
      },
      {
        pattern: /'use client';/g,
        replacement: "// 'use client'; // Removed for Vite compatibility",
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

      return true;
    }
    return false;
  } catch (error) {

    return false;
  }
}

function processDirectory(dirPath) {
  const _items = fs.readdirSync(dirPath);
  let _totalFixed = 0;

  items.forEach(item => {
    const _fullPath = path.join(dirPath, item);
    const _stat = fs.statSync(fullPath);

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
const _appDir = path.join(__dirname, 'app');

const _fixedCount = processDirectory(appDir);
