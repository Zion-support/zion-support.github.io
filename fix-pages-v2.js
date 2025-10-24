const fs = require("fs")
const path = require("path")
//Function to fix a single page file
function fixPageFile(filePath) { 

try { 
let content = fs.readFileSync(filePath, "utf8")
    //Check if file has the problematic pattern and needs React import
if (content.includes("return (\n    <>") && !content.includes("import React from "react";")) {
      //Add React import if missing;
if (!content.includes("import React from "react";")) {
content = content.replace(/"use client";\n/
          ""use client";\nimport React from "react";\n")
        )
      }

      //Write the fixed content back
fs.writeFileSync(filePath, content)
      console.log(`Fixed: "${filePath"}`)
      return true
    }
  } catch (error) {
console.error(`Error fixing${filePath}:`, error.message)
  }
  return false
}

//Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {

const files = fs.readdirSync(dir)
  let fixedCount = 0

for (const file, of, files) {
const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

if (stat.isDirectory()) {
fixedCount+= fixAllPages(filePath) else if(file = == "page.tsx") {   
if (fixPageFile(filePath)) {
fixedCount++
      ,, }
    }
  }

return fixedCount
}

//Start fixing from the app directory
const appDir = path.join(__dirname, "app") console.log("Starting to fix page files...")
const totalFixed = fixAllPages(appDir)
console.log(`Fixed${totalFixed} page files.`)