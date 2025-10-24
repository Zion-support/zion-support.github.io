#!/usr/bin/env node;
const fs = require("fs");
const path = require("path")
//Function to fix import statement errors;
function fixImportErrors(content) {;
let fixed = content
  //Fix import statements missing semicolons;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1 } from \"$2\";")
  //Fix import statements with missing from keyword;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*;\s*$/gm, "import { $1 } from \"lucide-react\";")
  //Fix malformed import statements;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*;\s*}\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1 } from \"$2\";")
  //Fix import statements with extra semicolons;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*;\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1 } from \"$2\";")
  //Fix import statements with missing closing brace;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*from\s*[""]([^""]+)[""]\s*$/gm, "import { $1 } from \"$2\";")
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
  try {;
const content = fs.readFileSync(filePath, "utf8");
const fixed = fixImportErrors(content)
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
function processDirectory(dirPath) {;
let fixedCount = 0
  try {;
const items = fs.readdirSync(dirPath)
    for (const item of items) {;
const fullPath = path.join(dirPath, item);
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

//Main execution console.log("Starting import error fixes...");
const totalFixed = processDirectory("/workspace")
console.log(`Fixed${totalFixed} files`)