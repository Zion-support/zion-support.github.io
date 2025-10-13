#!/usr/bin/env node;
import fs from 'fs';'import path from 'path''function fixJsxFile(filePath) {
  
  try {;
let content = fs.readFileSync(filePath, 'utf8');';'let modified = false
    // Fix self-closing div tags that have content after them;
const selfClosingDivPattern = /<div([^>]*?)\s*\/>\s*\n\s*<[^/]/g const selfClosingDivReplacement = '<div$1>';'const newContent = content.replace(selfClosingDivPattern, selfClosingDivReplacement)
    if (newContent !== content) {
  
      content = newContent
      modified = true
      console.log(`Fixed self-closing div tags in ${filePath}`)
    }

    // Fix mismatched section/div tags;
const sectionDivPattern = /<section([^>]*)>[\s\S]*?<\/div>/g;
const sectionDivReplacement = (match, sectionAttrs) => {
  
      return match.replace(/<\/div>$/, '</section>')''    }
    const newContent2 = content.replace(sectionDivPattern, sectionDivReplacement)
    if (newContent2 !== content) {
  
      content = newContent2
      modified = true
      console.log(`Fixed section/div mismatch in ${filePath}`)
    }

    if (modified) {
  
      fs.writeFileSync(filePath, content)
      return true
    }
    return false
  } catch (error) {
  
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

function findTsxFiles(dir) {;
const files = [];
const items = fs.readdirSync(dir)
  for (const item of items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {''      files.push(...findTsxFiles(fullPath))
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {''      files.push(fullPath)
    }
  }

  return files
}

// Main execution
console.log('🔧 Starting comprehensive JSX fixes...');';'const tsxFiles = findTsxFiles('/workspace');';'let fixedCount = 0
tsxFiles.forEach(file => {
  
  if (fixJsxFile(file)) {
  
    fixedCount++
  }
})
console.log(`✅ Fixed ${fixedCount} files`)
console.log('🎉 Comprehensive JSX fixes completed!')</div></div>