import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix remaining import path issues
    const replacements = [
      // Fix SEOOptimizer component
      {
        pattern: /import\s+{\s*useRouter\s*}\s+from\s+'\.\.\/\.\.\/utils\/navigation';/g,
        replacement: "import { useRouter } from '../utils/navigation';"
      },
      // Fix root-level files
      {
        pattern: /import\s+{\s*Metadata\s*}\s+from\s+'\.\/types\/next';/g,
        replacement: "import { Metadata } from './types/next';"
      },
      {
        pattern: /import\s+Link\s+from\s+'\.\/utils\/link';/g,
        replacement: "import Link from './utils/link';"
      },
      // Fix MetadataRoute namespace issue
      {
        pattern: /MetadataRoute\./g,
        replacement: "MetadataRoute"
      }
    ];

    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      // console.log(`Fixed final imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
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
// console.log('Fixing final import issues...');
const fixedCount = processDirectory(appDir);
// console.log(`Fixed ${fixedCount} files`);