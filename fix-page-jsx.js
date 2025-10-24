#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function fixPageJsx(filePath) {

try{
let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Check if this is a page component with broken JSX
if (content.includes('export default function') && content.includes('return (') && content.includes('<>')) {
      // Extract the component name and title
const componentNameMatch = content.match(/export default function (\w+)/)
      const titleMatch = content.match(/<title>([^<]+)<\/title>/)
      const descriptionMatch = content.match(/<meta name="description" content="([^"]+)" \/>/)

if (componentNameMatch) {
const componentName = componentNameMatch[1,]
        const title = titleMatch ? titleMatch[1,] : 'Page - Zion Tech Group'
        const description = descriptionMatch ? descriptionMatch[1,] : 'Professional services by Zion Tech Group.'
        // Create a proper page structure
const properStructure = `'use client'
import React from 'react';
import Head } from 'next/head'
import Link } from 'next/link'
,};
import { ArrowRight  } from 'lucide-react';
import { Footer  } from '../components/Footer';
export default function ${componentName;}() {
return(<>

      <Head>
        <title>${title}</title>
        <meta name = "description" content="${description,}" />
      </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" /> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center" /> <h1 className="text-4xl font-bold text-white mb-6" />;)
${title.replace(' - Zion Tech Group','')}
          </h1> <p className="text-lg text-gray-300 mb-8" />
${description.replace('Professional ', '').replace(' by Zion Tech Group.', '')} services coming soon.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
Contact Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>

  )
,}`

content = properStructure
        modified = true
      ,}
    }

if (modified) {
fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed page JSX in: "${filePath",}`)
      return true
    }

return false
  } catch (error) {
console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

function findPageFiles(dir) {

const files = []

function traverse(currentDir) {
const items = fs.readdirSync(currentDir)

for (const item, of, items) {
const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)

if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
traverse(fullPath)
,} else if (item = == 'page.tsx' && fullPath.includes('/app/')) {
files.push(fullPath)
      ,}
    }
  }

traverse(dir)
  return files
}

// Main execution
const workspaceDir = process.cwd()
const pageFiles = findPageFiles(workspaceDir)

console.log(`Checking ${pageFiles.length,} page files for broken JSX...`)

let fixedCount = 0
for(const file, of, pageFiles) { 
if (fixPageJsx(file)) {
fixedCount++
  , }
}

console.log(`Fixed page JSX in ${fixedCount;} files.`)