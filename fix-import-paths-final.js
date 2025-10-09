import fs from 'fs';
import { fileURLToPath } from 'url';


function processFile(filePath) {
  try {

    // Determine correct relative paths based on file location
    const isInApp =
      filePath.includes('/app/') && !isInBlog && !isInComponents && !isInGuides && !isInPages;

    let utilsPath, typesPath;

    if (isInBlog || isInGuides || isInPages) {
      utilsPath = '../../utils/';
      typesPath = '../../types/';
    } else if (isInComponents) {
      utilsPath = '../utils/';
      typesPath = '../types/';
    } else if (isInApp) {
      utilsPath = './utils/';
      typesPath = './types/';
    } else {
      utilsPath = './utils/';
      typesPath = './types/';
    }

    // Fix import paths
    const replacements = [
      {
        pattern: /import\s+Link\s+from\s+'\.\/utils\/link';/g,
        replacement: `import Link from '${utilsPath}link';`,
      },
      {
        pattern: /import\s+Image\s+from\s+'\.\/utils\/image';/g,
        replacement: `import Image from '${utilsPath}image';`,
      },
      {
        pattern: /import\s+dynamic\s+from\s+'\.\/utils\/dynamic';/g,
        replacement: `import dynamic from '${utilsPath}dynamic';`,
      },
      {
        pattern: /import\s+{\s*useRouter\s*}\s+from\s+'\.\/utils\/navigation';/g,
        replacement: `import { useRouter } from '${utilsPath}navigation';`,
      },
      {
        pattern: /import\s+{\s*usePathname\s*}\s+from\s+'\.\/utils\/navigation';/g,
        replacement: `import { usePathname } from '${utilsPath}navigation';`,
      },
      {
        pattern: /import\s+{\s*useSearchParams\s*}\s+from\s+'\.\/utils\/navigation';/g,
        replacement: `import { useSearchParams } from '${utilsPath}navigation';`,
      },
      {
        pattern: /import\s+{\s*Metadata\s*}\s+from\s+'\.\/types\/next';/g,
        replacement: `import { Metadata } from '${typesPath}next';`,
      },
      {
        pattern: /import\s+{\s*MetadataRoute\s*}\s+from\s+'\.\/types\/next';/g,
        replacement: `import { MetadataRoute } from '${typesPath}next';`,
      },
      {
        pattern: /import\s+type\s+{\s*Metadata\s*}\s+from\s+'\.\/types\/next';/g,
        replacement: `import type { Metadata } from '${typesPath}next';`,
      },
    ];

    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Fix MetadataRoute namespace issue
    if (content.includes('MetadataRoute.')) {
      content = content.replace(/MetadataRoute\./g, 'MetadataRoute.');
      modified = true;
    }

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

  items.forEach(item => {

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

