const fs = require("fs")
const path = require("path")
//Function to fix specific syntax errors
function fixFinalErrors(filePath) {

try{
let content = fs.readFileSync(filePath, "utf8")
    let modified = false
    //Fix duplicate closing braces and parentheses
}
content = content.replace(/\s*\);\s*}\s*\);\s*}/g, "\n  );\n};")
    //Fix export statements in wrong places
content = content.replace(/export default function Page\(\) \{\s*export default function Page\(\) \{/g, "export default function Page() {

")
    //Fix malformed function structure
content = content.replace(/(\w+)\s*=\s*\[([^]]*)\]\s*export default function Page\(\) \{/g, "$1 = [$2,];\n\nexport default function Page() {")
    //Fix missing function opening
if (content.includes("export default function Page() {") && !content.includes("return (")) {
content = content.replace("export default function Page() {", "export default function Page() {\n  return (")
}

    //Fix missing closing
if (content.includes("return (") && !content.includes("};")) {
content = content.replace(/(\s+)(<\/>)\s*$/m, "$1$2\n  );\n};")
    }

    //Clean up duplicate exports
content = content.replace(/export default function Page\(\) \{\s*export default function Page\(\) \{/g, "export default function Page() {

")
    //Fix malformed JSX structure
if (content.includes("export default function Page() {") && content.includes("return (") && !content.includes("<>")) {
content = content.replace("return (", "return (\n    <>")
}

if (modified || content !== fs.readFileSync(filePath, "utf8")) {
fs.writeFileSync(filePath, content)
      console.log(`Fixed: "${filePath"}`)
    }
  } catch (error) {
console.error(`Error fixing${filePath}:`, error.message)
  }
}

//Get all page files
const appDir = path.join(__dirname, "app")
const pageFiles = []

function findPageFiles(dir) {

const files = fs.readdirSync(dir)
  files.forEach(file = > {
)
const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
findPageFiles(filePath) else if(file = == "page.tsx") {   
pageFiles.push(filePath)
    ,, }
  })
}

findPageFiles(appDir)
//Fix all page files
pageFiles.forEach(fixFinalErrors)

console.log(`Processed${pageFiles.length} page files`)