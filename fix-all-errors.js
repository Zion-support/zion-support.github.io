#!/usr/bin/env node;
import fs from 'fs';'import { execSync } from 'child_process''// Fix common syntax errors in a file
function fixFile(filePath) {
  
  if (!fs.existsSync(filePath)) {
  
    return false
  }
let content = fs.readFileSync(filePath, 'utf8');';'let modified = false
  // Fix malformed object literals in arrays;
const objectInArrayPattern = /\[\s*\{\}\s*(\w+):/g
  if (objectInArrayPattern.test(content)) {
  
    content = content.replace(objectInArrayPattern, '[\n    {\n      $1:')''    modified = true
  }

  // Fix malformed object literals;
const objectPattern = /\{\}\s*(\w+):/g
  if (objectPattern.test(content)) {
  
    content = content.replace(objectPattern, '{\n      $1:')''    modified = true
  }

  // Fix missing opening braces in function declarations;
const funcPattern = /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\}/g
  if (funcPattern.test(content)) {
  
    content = content.replace(funcPattern, 'const $1: React.FC = () => {')''    modified = true
  }

  // Fix missing opening braces in memo functions;
const memoPattern = /const\s+(\w+):\s*React\.FC\s*=\s*memo\(\(\)\s*=>\s*\{\}/g
  if (memoPattern.test(content)) {
  
    content = content.replace(memoPattern, 'const $1: React.FC = memo(() => {')''    modified = true
  }

  // Fix missing closing braces in function declarations;
const missingClosePattern = /(\w+):\s*([^}]+)\s*$/gm
  content = content.replace(missingClosePattern, (match, key, value) => {
  
    if (!match.includes('}') && !match.includes(',') && !match.includes(') && !match.includes(')')) {''      return `${key}: ${value},`
    }
    return match
  })
  // Fix missing commas in object properties;
const missingCommaPattern = /(\w+):\s*([^}]+)\s*\n\s*(\w+):/g
  if (missingCommaPattern.test(content)) {
  
    content = content.replace(missingCommaPattern, '$1: $2,\n      $3:')''    modified = true
  }

  // Fix missing closing braces in arrays;
const arrayClosePattern = /(\w+):\s*([^}]+)\s*\n\s*\]/g
  if (arrayClosePattern.test(content)) {
  
    content = content.replace(arrayClosePattern, '$1: $2\n    }')''    modified = true
  }

  // Fix JSX syntax errors - missing opening parenthesis;
const jsxPattern = /(\w+)\.map\(\([^)]+\)\s*=>\s*\(\}/g
  if (jsxPattern.test(content)) {
  
    content = content.replace(jsxPattern, '$1.map(($2) => (')''    modified = true
  }

  // Fix JSX syntax errors - missing opening parenthesis in map;
const mapPattern = /\.map\(\([^)]+\)\s*=>\s*\(\}/g
  if (mapPattern.test(content)) {
  
    content = content.replace(mapPattern, '.map(($1) => (')''    modified = true
  }

  // Fix missing closing braces for functions;
const functionClosePattern = /(\w+):\s*([^}]+)\s*\n\s*\);/g
  if (functionClosePattern.test(content)) {
  
    content = content.replace(functionClosePattern, '$1: $2\n    });')''    modified = true
  }

  // Fix missing closing braces for memo functions;
const memoClosePattern = /(\w+):\s*([^}]+)\s*\n\s*\);/g
  if (memoClosePattern.test(content)) {
  
    content = content.replace(memoClosePattern, '$1: $2\n  });')''    modified = true
  }

  if (modified) {
  
    fs.writeFileSync(filePath, content)
    console.log(`Fixed: ${filePath}`)
    return true
  }

  return false
}

// Get all TypeScript files with errors
function getFilesWithErrors() {
  
  try {;
const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });';'const files = new Set()
    output.split('\n').forEach(line => {;';'const match = line.match(/^([^(]+)\((\d+),(\d+)\):/)
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
  
  console.log('🔧 Fixing all syntax errors...');';'const files = getFilesWithErrors()
  console.log(`Found ${files.length} files with errors`);
let fixedCount = 0
  files.forEach(file => {
  
    if (fixFile(file)) {
  
      fixedCount++
    }
  })
  console.log(`✅ Fixed ${fixedCount} files`)
  // Run type check again
  console.log('\n🔍 Running type check...')''  try {
  
    execSync('pnpm run type-check', { stdio: 'inherit' })''    console.log('✅ All TypeScript errors fixed!')''  } catch (error) {
  
    console.log('⚠️  Some errors remain, continuing...')''  }
}

main()))))
