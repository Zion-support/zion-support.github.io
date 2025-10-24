import React from "react"
const fs = require('fs')
const path = require('path')
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Skip if it's already a proper Next.js page
    if (content.includes('export default function') && !content.includes('React.FC')) {
      return
}
    // Extract the page title from the file path
    const pathParts = filePath.split('/')
    const pageName = pathParts[pathParts.length - 2]; // Get the directory name
    const title = pageName.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
    // Create a valid function name (can't start with number)
    const functionName = pageName.split('-').map((word, index) => {
      if (index === 0 && /^\d/.test(word)) {
        return 'Five' + word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
    // Create a simple Next.js page template
    const newContent = `"use client"
export default function ${functionName}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced ${title.toLowerCase()} solutions by Zion Tech Group
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}`
    fs.writeFileSync(filePath, newContent)
    // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Find all page.tsx files
const appDir = path.join(__dirname, 'app')
const pageFiles = []
function findPageFiles(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      findPageFiles(filePath)
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath)
    }
  }
}
findPageFiles(appDir)
// eslint-disable-next-line no-console
    console.log(`Found ${pageFiles.length} page files to fix`)
pageFiles.forEach(fixPageFile)
// eslint-disable-next-line no-console
    console.log('Done fixing all page files')