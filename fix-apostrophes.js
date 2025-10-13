#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
// Common contractions and their escaped versions
const contractions = {
  "Let's": "Let&apos;s",
  "don't": "don&apos;t",
  "can't": "can&apos;t",
  "won't": "won&apos;t",
  "it's": "it&apos;s",
  "you're": "you&apos;re",
  "we're": "we&apos;re",
  "they're": "they&apos;re",
  "I'm": "I&apos;m",
  "I'll": "I&apos;ll",
  "I've": "I&apos;ve",
  "I'd": "I&apos;d",
  "doesn't": "doesn&apos;t",
  "isn't": "isn&apos;t",
  "aren't": "aren&apos;t",
  "wasn't": "wasn&apos;t",
  "weren't": "weren&apos;t",
  "hasn't": "hasn&apos;t",
  "haven't": "haven&apos;t",
  "hadn't": "hadn&apos;t",
  "wouldn't": "wouldn&apos;t",
  "couldn't": "couldn&apos;t",
  "shouldn't": "shouldn&apos;t",
  "mustn't": "mustn&apos;t",
  "needn't": "needn&apos;t",
  "shan't": "shan&apos;t",
  "here's": "here&apos;s",
  "there's": "there&apos;s",
  "what's": "what&apos;s",
  "where's": "where&apos;s",
  "when's": "when&apos;s",
  "why's": "why&apos;s",
  "how's": "how&apos;s",
  "who's": "who&apos;s",
  "that's": "that&apos;s",
  "this's": "this&apos;s",
  "these's": "these&apos;s",
  "those's": "those&apos;s"
}
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
let modified = false
    // Fix contractions
    for (const [contraction, escaped] of Object.entries(contractions)) {
      const regex = new RegExp(`\\b${contraction.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g')
      if (content.includes(contraction)) {
        content = content.replace(regex, escaped)
        modified = true
      }
    }
    
    // Fix standalone apostrophes in text content
    content = content.replace(/(\w)'(\w)/g, '$1&apos;$2')
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed apostrophes in: ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir)
  
  for (const file of files) {
    const filePath = path.join(dir, file)
const stat = fs.statSync(filePath)
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath)
    }
  }
}

// Process the workspace
processDirectory('/workspace')
console.log('Apostrophe fixing complete!')