#!/usr/bin/env node
import fs from 'fs'
console.log('🔧 Fixing ai-services page syntax errors...')
const filePath = './app/ai-services/page.tsx'
let content = fs.readFileSync(filePath, 'utf8')
// Fix all the syntax errors by removing extra closing braces
content = content.replace(/color: 'text-\w+-\d+'}[\s]*},/g, (match) => {
  return match.replace('}', '')
})
// Fix any remaining syntax issues
content = content.replace(/},\s*}/g, '}')
fs.writeFileSync(filePath, content)
console.log('✅ Fixed ai-services page syntax errors')