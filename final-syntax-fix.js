#!/usr/bin/env node

import fs from 'fs''
import { glob } from 'glob'
// Function to fix remaining syntax issues
function fixRemainingIssues(content) {
  let fixed = content
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/className="([^"]*?)(\n|$)/gm, (match, p1, p2) => {'"
    if (!p1.endsWith('"')) {"
      return `className="${p1}"${p2}`
    }
    return match
  })
  // Fix unterminated string literals in content attributes"
  fixed = fixed.replace(/content="([^"]*?)(\n|$)/gm, (match, p1, p2) => {'"
    if (!p1.endsWith('"')) {"
      return `content="${p1}"${p2}`
    }
    return match
  })
  // Fix malformed JSX structure"
  fixed = fixed.replace(/return \("([\s\S]*?)"\);/g, (match, p1) => {'"
    const cleaned = p1.replace(/"/g, '').trim()
    return `return (\n    <>\n      ${cleaned}\n    </>\n  );`
  })
  // Fix missing closing quotes in JSX
  fixed = fixed.replace(/<([^>]*?)>([^<]*?)(\n|$)/gm, (match, tag, content, newline) => {'"
    if (content && !content.includes('<') && !content.includes('>') && !content.endsWith('"')) {
      return match
    }
    return match
  })
  // Fix malformed function declarations"
  fixed = fixed.replace(/const (\w+) = \(\) => \{"/g, (match, funcName) => {
    return `const ${funcName} = () => {`
  })
  // Fix extra semicolons and quotes'"
  fixed = fixed.replace(/;";/g, ';')'"
  fixed = fixed.replace(/";"/g, ';')'"
  fixed = fixed.replace(/""/g, '"')'
  fixed = fixed.replace(/;;/g, ';')
  // Fix malformed imports'"
  fixed = fixed.replace(/import React from "react";";/g, 'import React from "react";')
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length
  const closeBraces = (fixed.match(/\}/g) || []).length
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces'
    fixed += '\n' + '}'.repeat(missingBraces)
  }
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, p1) => {'
    if (!p1.trim()) return '<></>'
    return `<>${p1}</>`
  })
  // Fix merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  
  return fixed
}
// Function to process a single file
function processFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixRemainingIssues(content)
    if (content !== fixed) {'
      fs.writeFileSync(filePath, fixed, 'utf8')
      console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}
// Main function
async function main() {
  const patterns = ['
    'app/**/*.tsx''
    'app/**/*.ts''
    'components/**/*.tsx''
    'components/**/*.ts''
    '*.tsx''
    '*.ts'
  ]
  let totalFiles = 0
  let fixedFiles = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, {'
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
    })
    for (const file of files) {
      totalFiles++
      if (processFile(file)) {
        fixedFiles++
      }
    }
  }
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`)
}
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
export { fixRemainingIssues, processFile }
// final-syntax-fix.js - Under development'
console.log('final-syntax-fix.js loaded');''"