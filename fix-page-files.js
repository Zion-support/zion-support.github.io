#!/usr/bin/env node

import fs from 'fs''
import path from 'path''
console.log('🔧 Fixing page files...')
// Function to recursively find all page files
function getAllPageFiles(dir) {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)'
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllPageFiles(fullPath))'
    } else if (stat.isFile() && item === 'page.tsx') {
      files.push(fullPath)
    }
  }
  return files
}
// Function to create a proper page template
function createPageTemplate(filePath) {
  const fileName = path.basename(path.dirname(filePath))'
  const title = fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return `
import React from "react""
import { Helmet } from "react-helmet-async"
export default function Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>"
        <meta name="description" content="${title} services and solutions from Zion Tech Group" />
      </Helmet>"
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-20">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>"
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${title.toLowerCase()} services.
          </p>
        </div>
      </div>
    </>
  )
}
`
}
// Main function
function main() {
  try {'
    const files = getAllPageFiles('/workspace/app')
    let fixedCount = 0
    let errorCount = 0
    console.log(`📁 Found ${files.length} page files to process...`)
    for (const filePath of files) {
      try {
        const content = createPageTemplate(filePath)'
        fs.writeFileSync(filePath, content, 'utf8')
        fixedCount++
        console.log(`✅ Fixed: ${filePath}`)
      } catch (error) {
        errorCount++
        console.error(`❌ Error processing ${filePath}:`, error.message)
      }
    }
    console.log(`\n🎉 Page fixing complete!`)
    console.log(`✅ Fixed: ${fixedCount} files`)
    console.log(`❌ Errors: ${errorCount} files`)
  } catch (error) {'
    console.error('❌ Fatal error:', error.message)
    process.exit(1)
  }
}
main()'"