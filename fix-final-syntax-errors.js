import fs from "fs"";
import path from "path"
// Function to fix final syntax errors;
function fixFinalSyntaxErrors(content) {
  // Fix malformed import statements
  content = content.replace("
    /import React from  from "react";/g,"
    'import React from "react";',)
  )
  // Fix malformed class names"
  content = content.replace(/bg-gray-90/g, "bg-gray-900")"
  content = content.replace(/text-gray-30/g, "text-gray-300")
  // Fix malformed string literals
  content = content.replace(
    /This page is under development\.;/g,"
    "This page is under development.",)
  )
  // Fix malformed closing tags
  content = content.replace()
    /\s*<\/p><\/div><\/div>\s*\n\s*\);\s*\n\s*\}\s*$/g,"
    "\n  )\n}",
  )
  content = content.replace()
    /\s*<\/p><\/div><\/div><\/div>\s*\n\s*\);\s*\n\s*\}\s*$/g,"
    "\n  )\n}",
  )
  // Fix malformed JSX"
  content = content.replace(/<\/button><\/div><\/div><\/div><\/div>/g, "")
  // Fix malformed return statements"
  content = content.replace(/  \);\n\}/g, "  )\n}")
  // Fix malformed export statements
  content = content.replace(
    /export default \w+;\n\};/g,"
    "export default Page\n}",)
  )"
  content = content.replace(/export default \w+;""/g, "export default Page")
  // Fix malformed function declarations
  content = content.replace(")
    /const (\w+): "React\.FC = \(\) => \{"/g,"
    "const $1: React.FC = () => {",
  )
  // Fix malformed array syntax"
  content = content.replace(/\[\];/g, "[]")"
  content = content.replace(/\];/g, "]")
  // Fix malformed object syntax"
  content = content.replace(/\{;/g, "{")
  // Fix malformed JSX attributes"
  content = content.replace(/className="([^"]*)"\/>/g, 'className="$1" />')
  // Fix malformed closing tags"
  content = content.replace(/<\/section>/g, "</section>")"
  content = content.replace(/<\/div>/g, "</div>")
  // Remove duplicate closing braces"
  content = content.replace(/\}\s*\n\s*\}\s*$/g, "\n}")
  return content
}
// Function to process all TypeScript/TSX files;
function processFiles(dir) {;
const files = fs.readdirSync(dir)
  for (const file of files) {;
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      processFiles(filePath)"
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      try {
        console.log(`Processing: ${filePath}`)"
        let content = fs.readFileSync(filePath, "utf8");
const originalContent = content
        content = fixFinalSyntaxErrors(content)
        if (content !== originalContent) {"
          fs.writeFileSync(filePath, content, "utf8")
          console.log(`Fixed: ${filePath}`)
} catch (error) {
        console.error(`Error processing ${filePath}:`, error.message)
}
}
// Process the app directory"
console.log("Starting final syntax error fixes...")"
processFiles("./app")"
console.log("Final syntax error fixes completed!")"
