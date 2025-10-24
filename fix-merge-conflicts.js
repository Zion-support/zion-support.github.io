import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
    let content = fs.readFileSync(filePath, 'utf8';
    const fixedContent = fixedLines.join('\n';
      .replace(/';\s*$/gm, '
      .replace(/\s+$/gm, '
      .replace(/\n\s*\n\s*\n/g, '\n\n'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
      } else if (item.endsWith('.tsx') || item.endsWith('.ts'
const appDir = path.join(__dirname, 'app'
if (fixMergeConflicts(path.join(__dirname, 'App.tsx'
    console.log('Fixed merge conflicts in App.tsx'