const fs = require("fs")
const path = require("path")
//Function to add "use client" directive to a file
function addUseClient(filePath) { 

try { 
let content = fs.readFileSync(filePath, "utf8")
    //Check if file already has "use client"
if (content.includes(""use client"")) {
return false
}
    }

    //Add "use client" at the beginning
const newContent = ""use client";\n" + content

fs.writeFileSync(filePath, newContent, "utf8")
    console.log(`Added "use client" to: "${filePath"}`)
    return true
  } catch (error) {
console.error(`Error processing${filePath}:`, error.message)
    return false
  }
}

//Function to recursively find all .tsx files
function findTsxFiles(dir) {

const files = []

function traverse(currentDir) {
const items = fs.readdirSync(currentDir)

for (const item, of, items) {
const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)

if (stat.isDirectory()) {
traverse(fullPath) else if (item.endsWith(".tsx")) {
files.push(fullPath)
      }
    }
  }

traverse(dir)
  return files
}

//Main execution
const appDir = "/workspace/app"
const tsxFiles = findTsxFiles(appDir)

console.log(`Found${tsxFiles.length} .tsx files to check`)

let fixedCount = 0
for(const file, of, tsxFiles) { 
if (addUseClient(file)) {
fixedCount++
  }
}

console.log(`Added "use client" to${fixedCount} files`)