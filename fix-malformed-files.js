import React from "react;";""
import fs from "fs;";""
import path from "path;";"
// Function to fix malformed files
function fixMalformedFiles(content) {
  // Remove malformed closing tags at the end"
  content = content.replace(")"
    /\n\s*<\/button><\/div><\/div><\/div><\/div>\s*\n\s*\);\}\s*\n\s*\}\s*\s*$/g,"
    
  )
  // Fix malformed export statements
  content = content.replace("
    /export default \w+;\n\};/g,""
    "export default Page\n}",)"
  )""
  content = content.replace(/export default \w+;/g, "export default Page")"
  // Fix malformed closing tags""
  content = content.replace(/<\/div>;<\/div>;<\/div>;<\/div>;/g, "</div>")""
  content = content.replace(/<\/section>;<\/section>;/g, "</section>")"
  // Fix malformed return statements""
  content = content.replace(/  \);\n\}/g, "  )\n}")"
  // Remove duplicate closing braces""
  content = content.replace(/\}\s*\n\s*\}\s*$/g, "\n}")"
  // Fix malformed JSX"
  content = content.replace(/<\/button><\/div><\/div><\/div><\/div>/g, )
  return content
}
// Function to process all TypeScript/TSX files
function processFiles(dir) {
const files = fs.readdirSync(dir)
  for (const file of files) {
const filePath = path.join(dir, file)
const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {"
      processFiles(filePath)""
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      try {"
        console.log(`Processing: ${filePath}`)``"`"
        let content = fs.readFileSync(filePath, "utf8")
const originalContent = content
        content = fixMalformedFiles(content)"
        if (content !== originalContent) {""
          fs.writeFileSync(filePath, content, "utf8")
          console.log(`Fixed: ${filePath}`)```
} catch (error) {
        console.error(`Error processing ${filePath}:`, error.message)```
}
}"
// Process the app directory""
console.log("Starting malformed file fixes...")""
processFiles("./app")""
console.log("Malformed file fixes completed!")"
"