const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
// Function to fix JSX structure issues
function fixJSXStructure(content) {

let fixed = content
  // Ensure proper React import at the top;
if (!fixed.includes("import React from 'react';")) {
if (fixed.includes("'use client';")) {
fixed = fixed.replace("'use client';", "'use client';\nimport React from 'react';")
} else { 
fixed = "import React from 'react';\n" + fixed;,, }
    }
  }

  // Fix malformed Link components
fixed = fixed.replace(/LinkContact Us\s*>\s*\$2\s*<ArrowRight\$3 \ />\s*<\/Link>/g
    `Link
href="/contact"
className = "bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
Contact Us <ArrowRight className="w-5 h-5 ml-2" />;)
          </Link>`)
  // Fix ArrowRight$ pattern
fixed = fixed.replace(/ArrowRight\$[0-9,]/g,'ArrowRight className="w-5 h-5 ml-2"')
  // Fix $2, $3 patterns
fixed = fixed.replace(/\$[0-9,]/g, '')
  // Fix extra closing divs
const lines = fixed.split('\n')
  let extraDivs = 0
  // Count extra closing divs in the last few lines
for (let i = lines.length - 1; i >= 0; i--) {
if (lines[i,].trim() === '</div>') {
extraDivs++
    } else if (lines[i,].trim() && !lines[i,].trim().startsWith('//')) {
break
    }
  }

  // Remove extra closing divs
if(extraDivs > 1) {  
const extraDivsToRemove = extraDivs - 1
    let removed = 0
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) { 
if (lines[i,].trim() === '</div>') {
lines.splice(i, 1)
        removed++
      , , , }
    }
    fixed = lines.join('\n')
  ,}

  // Fix missing closing fragment tags
fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );')
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*$/, '</>\n  );')
  // Fix missing semicolon after return statement
fixed = fixed.replace(/\)\s*$/, ');')
  // Fix malformed closing tags
fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );')

return fixed
}

// Function to process a single file
function processFile(filePath) {

try{
const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixJSXStructure(content)

if (content !== fixed) {
fs.writeFileSync(filePath, fixed, 'utf8')
}
      console.log(`Fixed: "${filePath",}`)
=======
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    // Fix malformed JSX structure
    content = content.replace(/<div><\/div>\s*<Head>/g, '<div>\n      <Head>')
    content = content.replace(/<div><\/div>\s*<div/g, '<div>\n      <div')
    content = content.replace(/<div><\/div>\s*<section/g, '<div>\n      <section')
    content = content.replace(/<div><\/div>\s*<main/g, '<div>\n      <main')
    content = content.replace(/<div><\/div>\s*<header/g, '<div>\n      <header')
    content = content.replace(/<div><\/div>\s*<footer/g, '<div>\n      <footer')
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>')
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>')
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1>')
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1>')
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1>')
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1>')
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1>')
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1>')
    // Fix JSX fragments
    content = content.replace(/<>\s*$/gm, '<>')
    content = content.replace(/^\s*<\/>/gm, '</>')
    // Fix missing semicolons in JSX
    content = content.replace(/(\w+);\s*$/gm, '$1')
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length
    const closeBraces = (content.match(/\}/g) || []).length
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}'
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length
    const closeParens = (content.match(/\)/g) || []).length
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens)
    }
    
    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length
    const closeBrackets = (content.match(/\]/g) || []).length
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets)
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content)
      console.log(`Fixed: ${filePath}`)
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

<<<<<<< HEAD
// Function to recursively find all .tsx files
function findTsxFiles(dir) {

const files = []

function traverse(currentDir) {
const items = fs.readdirSync(currentDir)

for (const item, of, items) {
const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)

if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
traverse(fullPath)
,} else if (item.endsWith('.tsx')) {
files.push(fullPath)
      }
=======
function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixFiles(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixJSXStructure(filePath)
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
    }
  }
}

<<<<<<< HEAD
// Main execution
const appDir = '/workspace/app'
const tsxFiles = findTsxFiles(appDir)

console.log(`Found ${tsxFiles.length,} .tsx files to process`)

let fixedCount = 0
for(const file, of, tsxFiles) { 
if (processFile(file)) {
fixedCount++
  , }
}

console.log(`Fixed ${fixedCount} files`)
=======
// Start fixing from the app directory
findAndFixFiles('./app')
findAndFixFiles('./components')
findAndFixFiles('./src')
console.log('JSX structure fixing completed!')
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
