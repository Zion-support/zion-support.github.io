#!/usr/bin/env node

import fs from 'fs'
import { glob } from 'glob'

// Function to fix import statements
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false

    // Fix missing spaces in import statements
    content = content.replace(/import([A-Za-z])/g, 'import $1')
    content = content.replace(/import\s+{([^}]*)}/g, 'import { $1 }')
    content = content.replace(/import\s+([A-Za-z][A-Za-z0-9]*)\s+from/g, 'import $1 from')
    content = content.replace(/from\s+'([^']*)'/g, "from '$1'")
    content = content.replace(/from\s+"([^"]*)"/g, 'from "$1"')

    // Fix specific patterns
    content = content.replace(/importReact/g, 'import React')
    content = content.replace(/import{/g, 'import { ')
    content = content.replace(/}from/g, ' } from')
    content = content.replace(/} from/g, ' } from')

    // Fix component imports
    content = content.replace(/import([A-Z][a-zA-Z]*)from/g, 'import $1 from')

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content)
      return true
    }

    return false
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error.message)
    return false
  }
}

// Function to fix all files
async function fixAllImports() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ]

  let totalFixed = 0

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixImports(file)) {
        totalFixed++
        console.log(`Fixed imports: ${file}`)
      }
    }
  }

  console.log(`\nFixed imports in ${totalFixed} files`)
}

// Run the fix
fixAllImports().catch(console.error)