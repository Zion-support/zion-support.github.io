#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// Basic, safe replacements to address common accidental syntax corruption in this repo
const replacements = [
  // Remove stray backticks or unmatched quotes at line end
  { pattern: /([\}\)\]>\w"'])(;?)[`]+$/gm, replacement: '$1$2' },
  // Fix accidental "};" or similar
  { pattern: /\};/g, replacement: '};' },
  // Fix duplicated closing lines
  { pattern: /\n\s*console\.log\([^\n]*\)\s*\n\s*console\.log\(/g, replacement: match => match.replace(/\n\s*console\.log\(/, '\n// console.log(') },
]

function fixContent(content) {
  let fixed = content
  for (const { pattern, replacement } of replacements) {
    fixed = fixed.replace(pattern, replacement)
  }
  return fixed
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false
    const original = fs.readFileSync(filePath, 'utf8')
    const fixed = fixContent(original)
    if (fixed !== original) {
      fs.writeFileSync(filePath, fixed, 'utf8')
      console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}: ${error.message}`)
    return false
  }
}

const defaultGlobs = [
  'components/**/*.js',
  'components/**/*.tsx',
  'pages/**/*.tsx',
  'src/**/*.{js,jsx,ts,tsx}',
  '*.cjs',
  '*.js',
]

function listFiles() {
  // Minimal file lister: traverse workspace and collect likely files
  const root = process.cwd()
  const results = []
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.name.startsWith('.git')) continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(cjs|js|jsx|ts|tsx)$/.test(entry.name)) results.push(full)
    }
  }
  walk(root)
  return results
}

let fixedCount = 0
for (const file of listFiles()) {
  if (fixFile(file)) fixedCount++
}
console.log(`Fixed ${fixedCount} files`)