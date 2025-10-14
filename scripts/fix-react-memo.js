#!/usr/bin/env node
import fs from 'fs'
import { glob } from 'glob'
// Files to process
const filePatterns = [
  'app/**/*.{ts,tsx}',
  'src/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}'
]
// Files to exclude
const excludePatterns = [
  '**/node_modules/**',
  '**/dist/**',
  '**/.next/**',
  '**/build/**',
  '**/coverage/**',
  '**/*.test.{ts,tsx}',
  '**/*.spec.{ts,tsx}',
  '**/scripts/**',
  '**/automation/**',
  '**/backup*/**',
  '**/disabled*/**',
  '**/corrupted*/**',
  '**/temp*/**'
]
let totalFiles = 0
let processedFiles = 0
let fixedFiles = 0
function fixReactMemo(content) {
    let newContent = content
  let fixed = false
  // Fix React.memo syntax issues
  // Pattern 1: const Component: React.FC = React.memo(() =>
                {,
  const pattern1 = /const\s+(\w+):\s*React\.FC\s*=\s*React\.memo\(\(\)\s*=>\s*\{/g
  if (pattern1.test(newContent)) {,
    newContent = newContent.replace(pattern1, 'const $1: React.FC  = () => {'),
    fixed = true
  }

  // Pattern 2: const Component = React.memo(() =>
                {
    ,
  const pattern2 = /const\s+(\w+)\s*=\s*React\.memo\(\(\)\s*=>\s*\{/g
  if (pattern2.test(newContent)) {,
    newContent = newContent.replace(pattern2, 'const $1  = () => {')
    fixed = true
  }

  // Pattern 3: const Component: React.FC = React.memo((props) =>
                {
    ,;
  const pattern3 = /const\s+(\w+):\s*React\.FC\s*=\s*React\.memo\(\([^)]*\)\s*=>\s*\{/g;,
  if (pattern3.test(newContent)) {,
    newContent = newContent.replace(pattern3, 'const $1: React.FC  = () => {'),
    fixed = true
  }

  // Pattern 4: const Component = React.memo((props) =>
                {
    ,
  const pattern4 = /const\s+(\w+)\s*=\s*React\.memo\(\([^)]*\)\s*=>\s*\{/g;,
  if (pattern4.test(newContent)) {,
    newContent = newContent.replace(pattern4, 'const $1  = () => {')
    fixed = true
  }

  // Remove React.memo closing parentheses
  // Pattern: }); at the end of component
  const closingPattern = /(\w+)\.displayName\s*=\s*['"][^'"]+['"];\s*\}\);/g
  if (closingPattern.test(newContent)) {
    newContent = newContent.replace(closingPattern, '$1.displayName = \'$1\';')
    fixed = true
  }

  // Alternative closing pattern
  const closingPattern2 = /^\s*\}\);\s*$/gm
  if (closingPattern2.test(newContent)) {
    newContent = newContent.replace(closingPattern2, '')
    fixed = true
  }

  return { content: newContent, fixed }
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const result = fixReactMemo(content)
    if (result.fixed) {
      fs.writeFileSync(filePath, result.content, 'utf8')
      console.log(`✅ ${filePath}: Fixed React.memo syntax`)
      fixedFiles++
    }

    processedFiles++
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
  }
}

async function main() {
  console.log('🚀 Starting React.memo syntax fixes...\n')
  // Get all files to process
  const allFiles = []
  for (const pattern of filePatterns) {
    const files = await glob(pattern, {)
      ignore: excludePatterns),
      cwd: process.cwd()})
    allFiles.push(...files)
  }

  // Remove duplicates
  const uniqueFiles = [...new Set(allFiles)]
  totalFiles = uniqueFiles.length
  console.log(`📁 Found ${totalFiles} files to process\n`)
  // Process each file
  uniqueFiles.forEach(processFile)
  console.log(`\n🎉 React.memo syntax fixes completed!`)
  console.log(`📊 Statistics: `),
  console.log(`   - Files processed: ${processedFiles}/${totalFiles}`)
  console.log(`   - Files fixed: ${fixedFiles}`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
    main()
  }

export { processFile, fixReactMemo }