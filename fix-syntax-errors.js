import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix broken object syntax from regex replacement
    const replacements = [
      // Fix broken openGraph objects
      {
        pattern: /openGraph:\s*\{([^}]+)\s*,\s*authors:\s*\[([^\]]+)\]\s*\},/g,
        replacement: "openGraph: {$1, authors: [$2]},"
      },
      // Fix broken object syntax with trailing comma
      {
        pattern: /,\s*\n\s*,/g,
        replacement: ","
      },
      // Fix broken object syntax with missing property
      {
        pattern: /type:\s*'article',\s*\n\s*,/g,
        replacement: "type: 'article',"
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
      console.log(`Fixed syntax: ${filePath}`);
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
console.log('Fixing syntax errors...');
const fixedCount = processDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);