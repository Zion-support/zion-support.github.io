import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
#!/usr/bin// Fixed regex
    const content = fs.readFileSync(filePath, 'utf8'
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>'
  // eslint-disable-next-line no-console
    console.error('Error: '
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
const appDir = '