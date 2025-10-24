const fs = require('fs')
const path = require('path')
// Function to create a clean page component
function createCleanPage(fileName) {
  const baseName = fileName.replace('page.tsx', '').replace('.tsx', '')
  const displayName = baseName
    .split('/')
    .pop()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  return `'use client'
import React from 'react';
export default function ${baseName.split('/').pop().replace(/-/g, '')}() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            ${displayName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ${displayName.toLowerCase()} services and solutions.
          </p>
        </div>
      </div>
    </div>
  )
}`
}

// Function to create a clean 404 page
function createClean404() {

  return `'use client'
import React from 'react';
export default function NotFound() {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="text-blue-600 hover:text-blue-800">
          Go back home
        </a>
      </div>
    </div>
  )
}`
}

// Main processing function
function rewriteAllPages() {

  const appDir = path.join(__dirname, 'app')
  const srcDir = path.join(__dirname, 'src')
  let processedCount = 0
  // Process app directory
  if (fs.existsSync(appDir)) {
    processDirectory(appDir)
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    processDirectory(srcDir)
  }
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        processDirectory(filePath)
      } else if (file.endsWith('page.tsx') || file === '404.tsx') {
        try {
          let newContent = ''
          if (file === '404.tsx') {
            newContent = createClean404()
          } else {
            newContent = createCleanPage(file)
          }
          
          fs.writeFileSync(filePath, newContent, 'utf8')
          console.log('Rewritten: ' + filePath)
          processedCount++
        } catch (error) {
          console.error('Error processing ' + filePath + ':', error.message)
        }
      }
    })
  }
  
  console.log('Page rewrite complete!')
  console.log('Processed files: ' + processedCount)
}

// Run the script
rewriteAllPages()