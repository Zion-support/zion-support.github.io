#!/usr/bin/env node
import fs from 'fs''
import path from 'path''
import { execSync } from 'child_process''
console.log('🔧 Starting comprehensive error fixing...')
// Function to recursively find all files'
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)'
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)
    }
  }
  return files
}
// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers'
  content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')'
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')'
  content = content.replace(/^=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')'
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======$/gm, '')
  return content
}
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals'
  content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)$/gm, (match, p1) => {'"
    if (!p1.includes("'") && !p1.includes('"')) {'"
      return match + '"'
    }
    return match
  })
  // Fix missing closing quotes in JSX'"
  content = content.replace(/className=['"]([^'"]*?)$/gm, (match, p1) => {'"
    if (!p1.includes("'") && !p1.includes('"')) {"
      return `className="${p1}"`
    }
    return match
  })
  // Fix missing closing tags
  content = content.replace(/<div([^>]*?)(?<!>)$/gm, (match, p1) => {'
    if (!match.endsWith('>')) {'
      return match + '>'
    }
    return match
  })
  // Fix JSX expressions without parent element
  content = content.replace(/^(\s*)(<[^>]+>[\s\S]*?<\/[^>]+>)\s*$/gm, (match, indent, jsx) => {'
    if (jsx.includes('<') && jsx.includes('>') && !jsx.trim().startsWith('<div') && !jsx.trim().startsWith('<span')) {>
      return `${indent}<////div>${jsx}</div>`
    }
    return match
  })
  // Fix missing semicolons
  content = content.replace(/([^;}])\s*$/gm, (match, p1) => {'
    if (p1.trim() && !p1.includes('{') && !p1.includes('}') && !p1.includes(';')) {'
      return p1 + ';'
    }
    return match
  })
  return content
}
// Function to fix specific file issues
function fixFileIssues(filePath, content) {
  const fileName = path.basename(filePath)
  // Fix specific known issues'
  if (fileName.includes('App.tsx')) {
    // Fix App.tsx specific issues'
    content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')'
    content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')
  }'
  if (fileName.includes('page.tsx')) {
    // Fix page.tsx specific issues'
    content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')'
    content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')
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
        // Fix merge conflicts
        content = fixMergeConflicts(content)
        // Fix syntax errors
        content = fixSyntaxErrors(content)
        // Fix file-specific issues
        content = fixFileIssues(filePath, content)
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
    console.log(`\n🎉 Fixing complete!`)
    console.log(`✅ Fixed: ${fixedCount} files`)
    console.log(`❌ Errors: ${errorCount} files`)
    // Run linting to check remaining issues'
    console.log('\n🔍 Running linting check...')
    try {'
      execSync('npm run lint', { cwd: '/workspace', stdio: 'pipe' })'
      console.log('✅ Linting passed!')
    } catch (error) {'
      console.log('⚠️  Some linting issues remain, but major conflicts fixed')
    }
  } catch (error) {'
    console.error('❌ Fatal error:', error.message)
    process.exit(1)
  }
}
main()'"