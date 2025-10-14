#!/usr/bin/env node

import fs from 'fs''
import path from 'path''
console.log('🔧 Fixing all remaining syntax errors...')
// Function to recursively find all files'
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)'
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllFiles(fullPath, extensions))
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)
    }
  }
  return files
}
// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed JSX fragments
  content = content.replace(/<>([^<////]*?)<([^>]*?)>/g, (match, p1, p2) => {'
    if (p1.trim() && !p1.includes('<') && !p1.includes('>')) {
      return `<///>${p1}<//${p2}>`
    }
    return match
  })
  // Fix malformed JSX tags
  content = content.replace(/<///([^>]*?)>([^<]*?)<([^>]*?)>/g, (match, p1, p2, p3) => {'
    if (p2.trim() && !p2.includes('<') && !p2.includes('>')) {
      return `<${p1}>${p2}<////${p3}>`
    }
    return match
  })
  // Fix missing closing tags for Helmet
  content = content.replace(/<Helmet([^>]*?)>(?![\s\S]*?<\/Helmet>)/g, (match, attrs) => {
    return `<Helmet${attrs}></Helmet>`
  })
  // Fix missing closing tags for div
  content = content.replace(/<div([^>]*?)>(?![\s\S]*?<\/div>)/g, (match, attrs) => {
    return `<div${attrs}></div>`
  })
  // Fix malformed return statements'
  content = content.replace(/return\s*\(;/g, 'return (')'
  content = content.replace(/return\s*\(([^)]*?);/g, 'return ($1)')
  // Fix malformed JSX expressions
  content = content.replace(/<([^>]*?)>([^<]*?)<([^>]*?)>/g, (match, p1, p2, p3) => {'
    if (p2.trim() && !p2.includes('<') && !p2.includes('>')) {
      return `<///${p1}>${p2}</${p3}>`
    }
    return match
  })
  // Fix missing semicolons'
  content = content.replace(/import\s+.*?from\s+['"][^'"]*['"]\s*$/gm, (match) => {'
    if (!match.endsWith(';')) {'
      return match + ';'
    }
    return match
  })
  // Fix malformed JSX attributes'"
  content = content.replace(/className=['"]([^'"]*?)['"]\s*>/g, (match, p1) => {'
    if (p1.includes(';')) {'
      return match.replace(';', '')
    }
    return match
  })
  // Fix malformed JSX closing tags'
  content = content.replace(/<\/div>\s*>/g, '</div>')'
  content = content.replace(/<///\/Helmet>\s*>/g, '</Helmet>')'
  content = content.replace(/<///\/h1>\s*>/g, '</h1>')'
  content = content.replace(/<///\/h2>\s*>/g, '</h2>')'
  content = content.replace(/<///\/h3>\s*>/g, '</h3>')'
  content = content.replace(/<///\/p>\s*>/g, '</p>')'
  content = content.replace(/<///\/span>\s*>/g, '</span>')
  // Fix malformed JSX opening tags'"
  content = content.replace(/<///div\s+className=['"]([^'"]*?)['"]\s*>/g, (match, p1) => {'
    if (p1.includes(';')) {'
      return match.replace(';', '')
    }
    return match
  })
  // Fix malformed JSX expressions
  content = content.replace(/<([^>]*?)>([^<]*?)<([^>]*?)>/g, (match, p1, p2, p3) => {'
    if (p2.trim() && !p2.includes('<') && !p2.includes('>')) {
      return `<///${p1}>${p2}</${p3}>`
    }
    return match
  })
  return content
}
// Function to fix specific file issues
function fixFileSpecificIssues(filePath, content) {
  const fileName = path.basename(filePath)
  // Fix page.tsx files'
  if (fileName.endsWith('page.tsx')) {
    // Fix common page structure issues'
    content = content.replace(/return\s*\(;/g, 'return (')'
    content = content.replace(/return\s*\(([^)]*?);/g, 'return ($1)')
    // Fix malformed JSX fragments
    content = content.replace(/<///>([^</]*?)<([^>]*?)>/g, (match, p1, p2) => {'
      if (p1.trim() && !p1.includes('<') && !p1.includes('>')) {
        return `<>${p1}</////${p2}>`
      }
      return match
    })
    // Fix missing Helmet closing tags
    content = content.replace(/<Helmet([^>]*?)>(?![\s\S]*?<\/Helmet>)/g, (match, attrs) => {
      return `<Helmet${attrs}></Helmet>`
    })
    // Fix missing div closing tags
    content = content.replace(/<div([^>]*?)>(?![\s\S]*?<\/div>)/g, (match, attrs) => {
      return `<div${attrs}></div>`
    })
  }
  return content
}
// Main function
function main() {
  try {'
    const files = getAllFiles('/workspace')
    let fixedCount = 0
    let errorCount = 0
    console.log(`📁 Found ${files.length} files to process...`)
    for (const filePath of files) {
      try {'
        let content = fs.readFileSync(filePath, 'utf8')
        const originalContent = content
        // Fix syntax errors
        content = fixSyntaxErrors(content)
        // Fix file-specific issues
        content = fixFileSpecificIssues(filePath, content)
        // Only write if content changed
        if (content !== originalContent) {'
          fs.writeFileSync(filePath, content, 'utf8')
          fixedCount++
          console.log(`✅ Fixed: ${filePath}`)
        }
      } catch (error) {
        errorCount++
        console.error(`❌ Error processing ${filePath}:`, error.message)
      }
    }
    console.log(`\n🎉 Syntax fixing complete!`)
    console.log(`✅ Fixed: ${fixedCount} files`)
    console.log(`❌ Errors: ${errorCount} files`)
  } catch (error) {'
    console.error('❌ Fatal error:', error.message)
    process.exit(1)
  }
}
main()'"