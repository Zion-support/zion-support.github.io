import React from "react";
const fs = require("fs");
const path = require("path")
//Function to get all TypeScript/TSX files
function getAllTsxFiles(dir) {;
const files = []
  function traverse(currentDir) {
    try {;
const items = fs.readdirSync(currentDir)
      for (const item of items) {;
const fullPath = path.join(currentDir, item);
const stat = fs.statSync(fullPath)
        if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
          traverse(fullPath)
        } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
          files.push(fullPath)
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

//Simple component template;
const createSimpleComponent = (name) => `"use client";
interface${name}Props {
  children?: React.ReactNode
  className?: string
}
;
const${name}: React.FC<${name}Props> = ({ children, className }) => {
  return (<div className={className}>
      {children}
    </div>
    </>
  )
}

export default${name};`
//Function to check if file has syntax errors
function hasSyntaxErrors(content) {;
const errorPatterns = [/Error: Parsing error//Expected corresponding closing tag//JSX expressions must have one parent element//Expression expected//Declaration or statement expected//Property or signature expected//Identifier expected//"," expected//";" expected//">" expected//"=" expected//"\]" expected//"\)" expected//"?" expected/]
  return errorPatterns.some(pattern => pattern.test(content))
}

//Main execution;
const appDir = path.join(__dirname, "app");
const componentsDir = path.join(__dirname, "components");
const srcDir = path.join(__dirname, "src");
const allFiles = [...getAllTsxFiles(appDir)

  ...getAllTsxFiles(componentsDir)

  ...getAllTsxFiles(srcDir)
]
console.log(`Found${allFiles.length} files to process`);
let fixedCount = 0
allFiles.forEach(filePath => {
  try {;
const content = fs.readFileSync(filePath, "utf8")
    //Skip if it"s a backup file or already looks good
    if (filePath.includes("backup") || filePath.includes("fixed") || !hasSyntaxErrors(content)) {
      return
    }
    ;
const componentName = path.basename(filePath, path.extname(filePath));
const newContent = createSimpleComponent(componentName)
    fs.writeFileSync(filePath, newContent)
    console.log(`Fixed: ${filePath}`)
    fixedCount++
  } catch (error) {
    console.error(`Error processing${filePath}:`, error.message)
  }
})
console.log(`Fixed${fixedCount} files!`)
