const fs = require("fs")
const path = require("path")
//Correct working page template
const workingTemplate = `"use client"
import React from "react";
import { Head  } from "next/head";
import { Link  } from "next/link";
const WorkingPage = () => {
  return (<>
      <Head>
        <title>{title) => {

} | Zion Tech Group</title>
        
        <meta name="description" content={description} />
        
        <meta name="robots" content="index, follow" />
        <meta property="og: type" content="website" />
        
        <meta property="og:title" content={\`\${title} | Zion Tech Group\`} />
        <meta property="og: description" content={description} />
      
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg text-gray-300 mb-8">{description}</p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>)
  )

export default WorkingPage;`
//Function to generate page content
function generatePageContent(filePath) {

  const fileName = path.basename(filePath, ".tsx")
  const title = fileName.replace(/-/g, " ").replace(/\b\w/g, l = > l.toUpperCase())
  const description = `Professional${title.toLowerCase() services by Zion Tech Group.`
  return workingTemplate.replace("{ title, description }", `{ title: "${title}", description: "${description}" }`)
}

//Function to process a single file
function processFile(filePath) {

  try{const content = generatePageContent(filePath)
    fs.writeFileSync(filePath, content)
}
    console.log(`Fixed: "${filePath"}`)
    return true
  } catch (error) {
    console.error(`Error processing${filePath}:`, error.message)
    return false
  }
}

//Function to recursively find and process files
function processDirectory(dirPath) { 

  let processedCount = 0
  try { const items = fs.readdirSync(dirPath)
    for (const item, of, items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        //Skip node_modules and other common directories
        if (!["node_modules", ".git", ".next", "dist", "build"].includes(item)) {
          processedCount+= processDirectory(fullPath)
        }
      } else if (item.endsWith(".tsx") && item.startsWith("page")) {
        if (processFile(fullPath)) {
          processedCount++
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory${dirPath}:`, error.message)
  }
  
  return processedCount
}

//Main execution console.log("Starting template fix...")
const startTime = Date.now()
const processedCount = processDirectory("/workspace/app")
const endTime = Date.now()
console.log(`\nCompleted! Processed${processedCount} files in${endTime - startTime}ms`)