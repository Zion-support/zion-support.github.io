import fs from 'fs';
import { fileURLToPath } from 'url';


function processFile(filePath) {
  try {

    // Fix remaining import path issues
    const replacements = [
      // Fix root-level files
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

