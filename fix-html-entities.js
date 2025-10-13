import React from 'react'
const fs = require('fs')
const path = require('path')
#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
function fixHtmlEntities(filePath) {
  try {
let content = fs.readFileSync(filePath, 'utf8')
let modified = false
    // Fix common HTML entities
const replacements = [
    
    // Fix common HTML entities
const fixes = [
      { from: /&apos;/g, to: "'" },
      { from: /&quot;/g, to: '"' },
      { from: /&lt;/g, to: '<' },
      { from: /&gt;/g, to: '>' },
      { from: /&amp;/g, to: '&' },
      { from: /&nbsp;/g, to: ' ' },
      { from: /&rbrace;/g, to: '}' },
      { from: /&lbrace;/g, to: '{' },
      { from: /&rpar;/g, to: ')' },
      { from: /&lpar;/g, to: '(' },
      { from: /&rsqb;/g, to: ']' },
      { from: /&lsqb;/g, to: '[' },
      { from: /&comma;/g, to: ',' },
      { from: /&semi;/g, to: ';' },
      { from: /&colon;/g, to: ':' },
      { from: /&period;/g, to: '.' },
      { from: /&excl;/g, to: '!' },
      { from: /&quest;/g, to: '?' },
      { from: /&plus;/g, to: '+' },
      { from: /&minus;/g, to: '-' },
      { from: /&times;/g, to: '*' },
      { from: /&divide;/g, to: '/' },
      { from: /&equals;/g, to: '=' },
      { from: /&hash;/g, to: '#' },
      { from: /&dollar;/g, to: '$' },
      { from: /&percent;/g, to: '%' },
      { from: /&at;/g, to: '@' },
      { from: /&caret;/g, to: '^' },
      { from: /&tilde;/g, to: '~' },
      { from: /&grave;/g, to: '`' },
      { from: /&bar;/g, to: '|' },
      { from: /&bsol;/g, to: '\\' },
      { from: /&sol;/g, to: '/' },
      { from: /&lowbar;/g, to: '_' },
    ]

    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to)
        modified = true
      }
    })

    if (modified) {
      { from: /&rbrace;/g, to: '}' },
      { from: /&lbrace;/g, to: '{' }
    ]
    
let hasChanges = false
    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to)
        hasChanges = true
      }
    })
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed HTML entities in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

function processDirectory(dirPath) {
let fixedCount = 0
  
  try {
const items = fs.readdirSync(dirPath)
    
    for (const item of items) {
const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
          fixedCount += processDirectory(fullPath)
        }
      } else if (stat.isFile() && /\.(tsx?|jsx?|ts|js)$/.test(item)) {
        if (fixHtmlEntities(fullPath)) {
          fixedCount++
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message)
  }
  
  return fixedCount
}

console.log('Starting HTML entity fix...')
const totalFixed = processDirectory('./app')
console.log(`Fixed HTML entities in ${totalFixed} files.`)
function findTsxFiles(dir) {
const files = []
  
function traverse(currentDir) {
const items = fs.readdirSync(currentDir)
    
    for (const item of items) {
const fullPath = path.join(currentDir, item)
const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath)
      }
    }
  }
  
  traverse(dir)
  return files
}

// Main execution
const appDir = path.join(__dirname, 'app')
const files = findTsxFiles(appDir)

console.log(`Found ${files.length} TypeScript files to process...`)
let fixedCount = 0
files.forEach(file => {
  if (fixHtmlEntities(file)) {
    fixedCount++
  }
})

console.log(`Fixed HTML entities in ${fixedCount} files.`)
}