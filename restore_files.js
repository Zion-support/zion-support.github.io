
const fs = $2;
function restoreFile(content) {
  // Fix HTML entities back to normal quotes
  content = content.replace(/"/g, '"')
  content = content.replace(/&apos;/g, "'")
  content = content.replace(/</g, '<')
  content = content.replace(/>/g, '>')
  content = content.replace(/&/g, '&')
  // Fix broken quotes in strings
  content = content.replace(/"use client"/g, '"use client"')
  content = content.replace(/import.*from "([^&]+)"/g, 'import $1 from "$2"')
  content = content.replace(/import {([^}]+)} from "([^&]+)"/g, 'import {$1} from "$2"')
  // Fix broken semicolons
  content = content.replace(/;\s*$/gm, '')
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*;\s*$/gm, 'const $1 = () => {')
  content = content.replace(/return\s*null\s*;\s*}\s*;\s*export/g, 'return null;\n}\n\nexport')
  // Fix missing closing braces
  const openBraces = $2;
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndProcessFiles(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath)
    }
  })
}
// Start processing
// eslint-disable-next-line no-console
    console.log('Starting to restore files...')
findAndProcessFiles('./app')
findAndProcessFiles('./src')
// eslint-disable-next-line no-console
    console.log('Finished restoring files!')