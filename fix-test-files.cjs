const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log("🔧 Fixing test files syntax errors...")
// Find all test files with syntax errors
const testDirs = ["__tests__"]
const fixedFiles = []
testDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir, { recursive: true })
    files.forEach(file => {
  if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".ts") || file.endsWith(".tsx")) {
  const filePath = path.join(dir, file)
        if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, "utf8")
          let originalContent = content
          // Fix common syntax errors from the comprehensive fixer
          // 1. Fix malformed imports like "import React from "react";";"
          content = content.replace(/from\s+"([^"]+)";";/g, "from "$1";")
          content = content.replace(/import\s+"([^"]+)";";/g, "import "$1";")
          // 2. Fix unterminated strings in imports
          content = content.replace(/import\s+([^]+);";/g, "import $1;")
          // 3. Fix double quotes in imports
          content = content.replace(/import\s+([^"]*)"([^"]*)"([^"]*);";/g, "import $1"$2"$3;")
          // 4. Fix malformed component imports
          content = content.replace(/from\s+"([^"]+)";";/g, "from "$1";")
          if (content !== originalContent) {
  fs.writeFileSync(filePath, content, "utf8")
            fixedFiles.push(filePath)
            console.log(`✅ Fixed ${filePath}`);}
        }
      }
    });}
})
console.log(`✅ Fixed ${fixedFiles.length} test files`)
if (fixedFiles.length > 0) {
  console.log("Fixed files:")
  fixedFiles.forEach(file => console.log(`  - ${file}`));}

console.log("🎉 Test file fixing completed!")