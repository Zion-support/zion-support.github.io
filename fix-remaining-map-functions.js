import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMapFunctions(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific patterns
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.from, fix.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
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
  const files = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMapFunctions(filePath)) {
        totalFixed++;
      }
    }
  }

  return totalFixed;
}

const appDir = path.join(__dirname, 'app');
