#!/usr/bin/env nodeimport fs from 'fs'
console.log('🔧 Fixing ai-services page syntax errors...')
const filePath = './app/ai-services/page.tsx'
let content = fs.readFileSync(filePath, 'utf8')
content = content.replace(/color: 'text-\w+-\d+'}[\s]*},/g, (match) => {
  return match.replace('}', '')
})
content = content.replace(/},\s*}/g, '}')
fs.writeFileSync(filePath, content)
console.log('✅ Fixed ai-services page syntax errors')