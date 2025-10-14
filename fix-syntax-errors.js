#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Common patterns to fix
const fixes = [
  // Fix malformed import statements
  {
    pattern: /import React from  from 'react';/g,
    replacement: "import React from 'react'
  },
  {
    pattern: /import React from 'react';'use client'/g,
    replacement: "import React from 'react';\n'use client
  },
  {
    pattern: /import React from 'react';'react-helmet-async';/g,
    replacement: "import React from 'react';\nimport { Helmet } from 'react-helmet-async'
  },
  
  // Fix malformed strings with extra quotes
  {
    pattern: /title: "([^"]*)"",/g,
    replacement: 'title: "$1",
  },
  {
    pattern: /description: "([^"]*)"",/g,
    replacement: 'description: "$1",
  },
  {
    pattern: /color: "([^"]*)"",/g,
    replacement: 'color: "$1",
  },
  
  // Fix duplicate properties
  {
    pattern: /color: "([^"]*)",\s*color: "([^"]*)",/g,
    replacement: 'color: "$1",
  },
  
  // Fix malformed JSX closing tags
  {
    pattern: /}\s*<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm,
    replacement: '}
  },
  
  // Fix malformed function endings
  {
    pattern: /}\s*\);\s*}\s*}\s*''\s*$/gm,
    replacement: '}
  },
  
// Fix malformed JSX fragments
  {
    pattern: /<>\s*<\/>\s*$/gm,
    replacement: 
  },
  
  // Fix unterminated string literals
  {
    pattern: /"([^"]*)\n/g,
    replacement: '"$1"\n
  },
  
  // Fix missing semicolons in imports
  {
    pattern: /import ([^;]+)\n/g,
    replacement: 'import $1;\n
  },
  
  // Fix malformed export statements
  {
    pattern: /export default function ([^{]+)\s*{\s*}\s*$/gm,
    replacement: 'export default function $1 {\n  return (\n    <div>Page under development</div>\n  );\n}
  }
]

// Get all TypeScript files
const files = glob.sync('app/**/*.tsx', { cwd: process.cwd() })

let fixedCount = 0
let errorCount = 0

console.log(`Found ${files.length} TypeScript files to check...`)

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8')
    let originalContent = content
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement)
    })
    
    // Additional specific fixes
    // Fix common malformed patterns
    content = content.replace(/}\s*\);\s*}\s*}\s*''\s*$/gm, '}')
    content = content.replace(/}\s*\);\s*}\s*}\s*$/gm, '}')
    content = content.replace(/}\s*}\s*''\s*$/gm, '}')
    content = content.replace(/}\s*}\s*$/gm, '}')
    
    // Fix malformed JSX
    content = content.replace(/<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm, '')
    
    // Fix duplicate closing braces
    content = content.replace(/}\s*}\s*}\s*$/gm, '}')
    
    // Fix malformed function declarations
    content = content.replace(/const ([^=]+) = \(\) => {\s*}\s*$/gm, 'const $1 = () => {\n  return (\n    <div>Page under development</div>\n  );\n};')
    
    // Fix malformed export statements
    content = content.replace(/export default function ([^{]+)\s*{\s*}\s*$/gm, 'export default function $1 {\n  return (\n    <div>Page under development</div>\n  );\n}')
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    content = content.trim() + '\n
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8')
      console.log(`Fixed: ${file}`)
      fixedCount++
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message)
    errorCount++
  }
})

console.log(`\nFixed ${fixedCount} files`)
console.log(`Errors: ${errorCount} files`)
console.log('Done!')
