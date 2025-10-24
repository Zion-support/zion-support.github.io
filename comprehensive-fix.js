#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
//Function to fix all syntax errors comprehensively
function fixAllErrors(content) {
  let fixed = content
  //Fix malformed import statements;
  fixed = fixed.replace(/import\s*{\s*React\s*from\s*"react"\s*$/gm, "import React from "react";")
  fixed = fixed.replace(/import\s*{\s*React\s*}\s*from\s*"react"\s*$/gm, "import React from "react";")
  fixed = fixed.replace(/import\s*React\s*from\s*"react"\s*$/gm, "import React from "react";")
  //Fix import statements with missing semicolons;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1  } from "$2";")
  //Fix import statements with missing from keyword;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*;\s*$/gm, "import { $1  } from "lucide-react";")
  //Fix import statements with extra from;
  fixed = fixed.replace(/from\s*from\s*[""]([^""]+)[""]\s*$/gm, "from "$1";")
  //Fix import statements with missing closing brace;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1  } from "$2";")
  //Fix import statements with missing opening brace
  fixed = fixed.replace(/import\s*([^{][^}]+)\s*from\s*[""]([^""]+)[""]\s*$/gm, (match, imports, source) => {;
   ;
const cleanImports = imports.trim()
    return`import { ${cleanImports} } from "${source}";`
  })
  //Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, "const$1 = () => {\n")
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, "function$1() {\n")
  //Fix malformed JSX returns
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*$/gm, "return (\n    <$1>")
  fixed = fixed.replace(/return\s*<([^>]+)>\s*$/gm, "return (\n    <$1>")
  //Fix missing closing brackets and parentheses
  fixed = fixed.replace(/}\s*,\s*$/gm, "}\n")
  fixed = fixed.replace(/\)\s*,\s*$/gm, ")\n")
  //Fix malformed JSX attributes
  fixed = fixed.replace(/className\s*=\s*"([^"]*)"\s*\/\s*>/g, "className="$1" />")
  fixed = fixed.replace(/className\s*=\s*"([^"]*)"\s*\/\s*\/>/g, "className="$1" />")
  //Fix malformed component returns
  fixed = fixed.replace(/return\s+return\s*\(/g, "return (")
  fixed = fixed.replace(/return\s*\(\s*<div\s*\/>\s*,\s*/g, "return (\n    ")
  //Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)className\s*=\s*"([^"]*)"\s*\/\s*>/g, "<$1 className="$2" />")
  fixed = fixed.replace(/<(\w+)className\s*=\s*"([^"]*)"\s*\/\s*\/>/g, "<$1 className="$2" />")
  //Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*(\w+)\s*>\s*,\s*$/gm, "</$1>")
  fixed = fixed.replace(/<\/\s*(\w+)\s*>\s*;\s*$/gm, "</$1>")
  //Fix malformed function calls
  fixed = fixed.replace(/\(\s*\)\s*=>\s*{\s*;\s*}/g, "() => {\n  //TODO: Implement\n}")
  //Fix malformed object properties
  fixed = fixed.replace(/:\s*"([^"]*)"\s*,\s*$/gm, ": "$1"")
  //Fix malformed array elements
  fixed = fixed.replace(/,\s*$/gm, "")
  //Fix malformed string literals
  fixed = fixed.replace(/"([^"]*)"\s*,\s*$/gm, ""$1"")
  //Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]+)\s*\}\s*,\s*$/gm, "{$1}")
  //Fix malformed component declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, "export default function$1() {\n")
  //Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, "const$1 = () => {\n")
  //Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, "<>\n")
  fixed = fixed.replace(/<\/>\s*;\s*$/gm, "</>\n")
  //Fix malformed closing brackets
  fixed = fixed.replace(/}\s*;\s*$/gm, "}\n")
  //Fix malformed semicolons
  fixed = fixed.replace(/;\s*$/gm, "")
  //Fix malformed commas
  fixed = fixed.replace(/,\s*$/gm, "")
  //Fix malformed parentheses
  fixed = fixed.replace(/\)\s*;\s*$/gm, ")\n")
  //Fix malformed brackets
  fixed = fixed.replace(/\]\s*;\s*$/gm, "]\n")
  //Fix malformed braces
  fixed = fixed.replace(/\}\s*;\s*$/gm, "}\n")
  //Fix malformed JSX attributes with spaces
  fixed = fixed.replace(/\s+className\s*=\s*"([^"]*)"\s*\/\s*>/g, " className="$1" />")
  //Fix malformed JSX elements with spaces
  fixed = fixed.replace(/\s+<(\w+)\s*className\s*=\s*"([^"]*)"\s*\/\s*>/g, " <$1 className="$2" />")
  //Fix malformed closing tags with spaces
  fixed = fixed.replace(/\s+<\/\s*(\w+)\s*>\s*,\s*$/gm, " </$1>")
  //Fix malformed JSX expressions with spaces
  fixed = fixed.replace(/\s+\{\s*([^}]+)\s*\}\s*,\s*$/gm, " {$1}")
  //Fix malformed function calls with spaces
  fixed = fixed.replace(/\s+\(\s*\)\s*=>\s*{\s*;\s*}/g, " () => {\n  //TODO: Implement\n}")
  //Fix malformed object properties with spaces
  fixed = fixed.replace(/\s+:\s*"([^"]*)"\s*,\s*$/gm, " : "$1"")
  //Fix malformed array elements with spaces
  fixed = fixed.replace(/\s+,\s*$/gm, "")
  //Fix malformed string literals with spaces
  fixed = fixed.replace(/\s+"([^"]*)"\s*,\s*$/gm, " "$1"")
  //Fix malformed JSX expressions with spaces
  fixed = fixed.replace(/\s+\{\s*([^}]+)\s*\}\s*,\s*$/gm, " {$1}")
  //Fix malformed component declarations with spaces
  fixed = fixed.replace(/\s+export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, " export default function$1() {\n")
  //Fix malformed arrow functions with spaces
  fixed = fixed.replace(/\s+const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, " const$1 = () => {\n")
  //Fix malformed JSX fragments with spaces
  fixed = fixed.replace(/\s+<>\s*$/gm, " <>\n")
  fixed = fixed.replace(/\s+<\/>\s*;\s*$/gm, " </>\n")
  //Fix malformed closing brackets with spaces
  fixed = fixed.replace(/\s+}\s*;\s*$/gm, " }\n")
  //Fix malformed semicolons with spaces
  fixed = fixed.replace(/\s+;\s*$/gm, "")
  //Fix malformed commas with spaces
  fixed = fixed.replace(/\s+,\s*$/gm, "")
  //Fix malformed parentheses with spaces
  fixed = fixed.replace(/\s+\)\s*;\s*$/gm, " )\n")
  //Fix malformed brackets with spaces
  fixed = fixed.replace(/\s+\]\s*;\s*$/gm, " ]\n")
  //Fix malformed braces with spaces
  fixed = fixed.replace(/\s+\}\s*;\s*$/gm, " }\n")
  //Fix specific patterns found in the files
  fixed = fixed.replace(/import\s*{\s*React\s*from\s*"react"\s*$/gm, "import React from "react";")
  fixed = fixed.replace(/import\s*{\s*React\s*}\s*from\s*"react"\s*$/gm, "import React from "react";")
  fixed = fixed.replace(/import\s*React\s*from\s*"react"\s*$/gm, "import React from "react";")
  //Fix import statements with missing semicolons;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1  } from "$2";")
  //Fix import statements with missing from keyword;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*;\s*$/gm, "import { $1  } from "lucide-react";")
  //Fix import statements with extra from;
  fixed = fixed.replace(/from\s*from\s*[""]([^""]+)[""]\s*$/gm, "from "$1";")
  //Fix import statements with missing closing brace;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1  } from "$2";")
  //Fix import statements with missing opening brace
  fixed = fixed.replace(/import\s*([^{][^}]+)\s*from\s*[""]([^""]+)[""]\s*$/gm, (match, imports, source) => {;
   ;
const cleanImports = imports.trim()
    return`import { ${cleanImports} } from "${source}";`
  })
  return fixed
}

//Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixed = fixAllErrors(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed)
      console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing${filePath}:`, error.message)
    return false
  }
}

//Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        //Skip node_modules and other directories
        if (item !== "node_modules" && item !== ".git" && item !== ".next") {
          fixedCount+= processDirectory(fullPath)
        }
      } else if (item.endsWith(".tsx") || item.endsWith(".ts") || item.endsWith(".jsx") || item.endsWith(".js")) {
        if (processFile(fullPath)) {
          fixedCount++
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory${dirPath}:`, error.message)
  }
  
  return fixedCount
}

//Main execution console.log("Starting comprehensive error fixes...")
const totalFixed = processDirectory("/workspace")
console.log(`Fixed${totalFixed} files`)