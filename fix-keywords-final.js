import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


function processFile(filePath) {
  try {

    // Fix keywords type issues - convert string to array
    const replacements = [
      {
        pattern: /keywords:\s*'([^']+)',/g,
        replacement: "keywords: ['$1'],",
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

