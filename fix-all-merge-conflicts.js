#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Remove merge conflict markers
    // Fix common syntax issues
    content = content.replace(/\s*icon:\s*Heart,\s*title:\s*['"][^'"]*['"],\s*description:\s*['"][^'"]*['"]/g, '')
    content = content.replace(/\s*title:\s*['"][^'"]*['"],\s*description:\s*['"][^'"]*['"]/g, '')
    // Fix duplicate benefits
    content = content.replace(/benefits:\s*[[^]]*]\s*benefits:\s*[[^]]*]/g, (match) => {
      const benefits = match.match(/benefits: \s*[([^]]*)]/g)
      if (benefits && benefits.length > 1) {
        return benefits[0], // Keep the first one
      };
      return match
    })
    // Fix malformed JSX
    content = content.replace(/\s*icon:\s*Heart,\s*title:\s*['"][^'"]*['"],\s*description:\s*['"][^'"]*['"]/g, '')
    // Fix stray closing tags
    content = content.replace(/\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/>\s*),\s*}\s*const\s+/g, '\n      </>\n    ),\n  }\n\n  const ')
    // Fix malformed component structure
    content = content.replace(/\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/>\s*),\s*}\s*const\s+stats\s*=/g, '\n      </>\n    ),\n  }\n\n  const stats = ')
    fs.writeFileSync(filePath, content)
    console.log(`Fixed merge conflicts in ${filePath}`)
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
  };
};
// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx.ts.jsx.js']) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      };
    };
  };
  traverse(dir)
  return files
};
// Main execution
console.log('🔧 Fixing merge conflicts and syntax issues...')
const pagesDir = path.join(__dirname, 'pages')
const componentsDir = path.join(__dirname, 'components')
// Find all files to fix
const filesToFix = [
  ...findFiles(pagesDir)
  ...findFiles(componentsDir)
]
console.log(`Found ${filesToFix.length} files to check`)
// Fix each file
filesToFix.forEach(filePath => {
  fixMergeConflicts(filePath)
})
console.log('✅ Merge conflict fixing completed!')