import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

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
