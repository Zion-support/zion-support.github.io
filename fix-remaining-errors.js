
import fs from 'fs';'import path from 'path';'import { fileURLToPath } from 'url';';'const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Get all files with errors;
const getAllFilesWithErrors = () => {;
const srcDir = path.join(__dirname, 'src');';'const files = [];
const scanDirectory = (dir) => {;
const items = fs.readdirSync(dir)
    for (const item of items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
  
        scanDirectory(fullPath)
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {''        files.push(fullPath)
      }
    }
  }
  scanDirectory(srcDir)
  return files
}
// Fix all remaining syntax errors;
const fixRemainingErrors = () => {;
const files = getAllFilesWithErrors();
let fixedCount = 0
  for (const filePath of files) {
  
    try {;
let content = fs.readFileSync(filePath, 'utf8');';'let modified = false
      // Fix component names with spaces or special characters;
const componentNameMatch = content.match(/const\s+([A-Za-z0-9\s\-]+)Page: \s*React\.FC/)
      if (componentNameMatch) {,;
const oldName = componentNameMatch[1];,;
const newName = oldName
          .replace(/\s+/g, '')''          .replace(/\-/g, '')''          .replace(/^([a-z])/, (match, letter) => letter.toUpperCase())
        if (oldName !== newName) {
  
          content = content.replace(new RegExp(`const\\s+${oldName.replace(/[\s\-]/g, '\\s+')}Page:\\s*React\\.FC`, 'g'), `const ${newName}Page: React.FC`)''          content = content.replace(new RegExp(`export\\s+default\\s+${oldName.replace(/[\s\-]/g, '\\s+')}Page`, 'g'), `export default ${newName}Page`)''          modified = true
        }
      }

      // Fix any remaining TODO comments that might cause issues
      content = content.replace(/\/\/\s*TODO:.*$/gm, '')''      content = content.replace(/{\s*\/\/\s*TODO:.*?}/g, '{}')''      content = content.replace(/\[\s*\/\/\s*TODO:.*?]/g, '[]')''      content = content.replace(/\(\s*\/\/\s*TODO:.*?\)/g, '()')''      // Fix any malformed JSX
      content = content.replace(/\/\/\s*[^/]/g, '')''      content = content.replace(/<[^>]*\/\/[^>]*>/g, (match) => match.replace(/\/\/.*/, ''))''      // Fix any incomplete function calls or objects
      content = content.replace(/{\s*}\s*$/gm, '{}')''      content = content.replace(/\[\s*\]\s*$/gm, '[]')''      content = content.replace(/\(\s*\)\s*$/gm, '()')''      if (modified) {
  
        fs.writeFileSync(filePath, content)
        console.log(`Fixed: ${path.relative(__dirname, filePath)}`)
        fixedCount++
      }
    } catch (error) {
  
      console.error(`Error fixing ${filePath}:`, error.message)
    }
  }

  console.log(`Fixed ${fixedCount} files!`)
}
fixRemainingErrors()

