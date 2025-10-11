#!/usr/bin/env node

import fs from 'fs'
import { execSync } from 'child_process'
// Fix data structure syntax errors
function fixDataStructures(filePath) {
  if (!fs.existsSync(filePath)) {
    return false
  }

  let content = fs.readFileSync(filePath, 'utf8')
  let modified = false
  // Fix malformed object literals - pattern: {} followed by properties
  const objectPattern = /\{\}\s*(\w+):/g
  if (objectPattern.test(content)) {
    content = content.replace(objectPattern, '{\n      $1:')
    modified = true
  }

  // Fix missing opening braces in arrays
  const arrayPattern = /\[\s*\{\}\s*(\w+):/g
  if (arrayPattern.test(content)) {
    content = content.replace(arrayPattern, '[\n    {\n      $1:')
    modified = true
  }

  // Fix missing closing braces in object literals
  const missingClosePattern = /(\w+):\s*([^}]+)\s*$/gm
  content = content.replace(missingClosePattern, (match, key, value) => {
    if (!match.includes('}') && !match.includes(',')) {
      return `${key}: ${value},`
    }
    return match
  })
  // Fix missing commas in object properties
  const missingCommaPattern = /(\w+):\s*([^}]+)\s*\n\s*(\w+):/g
  if (missingCommaPattern.test(content)) {
    content = content.replace(missingCommaPattern, '$1: $2,\n      $3:')
    modified = true
  }

  // Fix missing closing braces in arrays
  const arrayClosePattern = /(\w+):\s*([^}]+)\s*\n\s*\]/g
  if (arrayClosePattern.test(content)) {
    content = content.replace(arrayClosePattern, '$1: $2\n    }')
    modified = true
  }

  // Fix function declarations missing opening brace
  const funcPattern = /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\}/g
  if (funcPattern.test(content)) {
    content = content.replace(funcPattern, 'const $1: React.FC = () => {')
    modified = true
  }

  if (modified) {
    fs.writeFileSync(filePath, content)
    console.log(`Fixed data structures in: ${filePath}`)
    return true
  }

  return false
}

// Get all TypeScript files with errors
function getFilesWithErrors() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' })
    const files = new Set()
    output.split('\n').forEach(line => {
      const match = line.match(/^([^(]+)\((\d+),(\d+)\):/)
      if (match) {
        files.add(match[1])
      }
    })
    return Array.from(files)
  } catch (error) {
    return []
  }
}

// Main function
function main() {
  console.log('🔧 Fixing data structure syntax errors...')
  const files = getFilesWithErrors()
  console.log(`Found ${files.length} files with errors`)
  let fixedCount = 0
  files.forEach(file => {
    if (fixDataStructures(file)) {
      fixedCount++
    }
  })
  console.log(`✅ Fixed ${fixedCount} files`)
  // Run type check again
  console.log('\n🔍 Running type check...')
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' })
    console.log('✅ All TypeScript errors fixed!')
  } catch (error) {
    console.log('⚠️  Some errors remain, continuing...')
  }
}

main()