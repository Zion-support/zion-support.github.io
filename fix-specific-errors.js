#!/usr/bin/env node;
import fs from "fs
import path from "path
import { glob } from "glob
// Function to fix specific syntax errors;
function fixSpecificErrors(content, filePath) {
  let fixed = content
  let changes = []
  // Fix 1: Remove extra quotes and semicolons from import statements
  if (fixed.includes("'")) {
    fixed = fixed.replace(
      /'/g
      ",)
    )
    changes.push("Fixed malformed React import")
}
  // Fix 2: Fix malformed import statements with extra quotes
  fixed = fixed.replace()
    /import\s+{\s*([^}]+)\s*}\s+from\s+'([^']+)';'/g
    "import { 1 } from '$2';
  )
  fixed = fixed.replace()
    /import\s+(\w+)\s+from\s+'([^']+)';'/g
    "import $1 from '$2'
  )
  // Fix 3: Fix malformed object properties with extra quotes and semicolons
  fixed = fixed.replace(/(\w+):\s*"([^"]*?),\s*""/g, '$1: "$2",')
  fixed = fixed.replace(/(\w+):\s*'([^']*?)',\s*''/g$1: '$2')
  fixed = fixed.replace(")
    /(\w+):\s*"([^"]*?),\s*'([^']*?)'"/g
    '$1: "$2", $3: "$4"'
  )
  // Fix 4: Fix malformed JSX attributes with extra quotes
  fixed = fixed.replace(/(\w+)=\s*"([^"]*?),\s*""/g, '$1="$2"')
  fixed = fixed.replace(/(\w+)=\s*'([^']*?)',\s*''/g$1='$2'")
  // Fix 5: Fix malformed function declarations
  fixed = fixed.replace(")
    /const\s+(\w+):\s*"React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*""/g
    "const $1: React.FC = () => {
  )
  fixed = fixed.replace(")
    /const\s+(\w+):\s*"React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*''/g
    "const $1: React.FC = () => {
  )
  // Fix 6: Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*{\s*;/gconst $1 = [{")
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*{\s*''/gconst $1 = [{")
  // Fix 7: Fix malformed object properties in arrays
  fixed = fixed.replace(/icon:\s*"([^"]*?),\s*''/g, 'icon: "$1",')
  fixed = fixed.replace(/title:\s*"'([^']*?)'",\s*';''/g, 'title: "$1",')
  fixed = fixed.replace(")
    /description:\s*"'([^']*?)'",\s*';''/g
    'description: "$1",'
  )
  fixed = fixed.replace(/color:\s*"'([^']*?)'\s*}'/g, 'color: "$1"')
  // Fix 8: Fix malformed string literals
  fixed = fixed.replace(/"([^"]*?)'([^']*?)'"/g, '"$1$2"')
  fixed = fixed.replace(/'([^']*?)([^"]*?)'/g'$1$2'")
  // Fix 9: Fix malformed JSX elements
  fixed = fixed.replace(")
    /<(\w+)\s+className="([^"]*?),\s*""/g
    '<$1 className="$2"'
  )
  fixed = fixed.replace()
    /<(\w+)\s+className='([^']*?)',\s*''/g
    "<$1 className='$2'
  )
  // Fix 10: Fix malformed closing tags
  fixed = fixed.replace(/<\/(\w+)>>\s*,\s*""/g</$1>)
  fixed = fixed.replace(/<\/(\w+)>\s*,\s*''/g</$1>)
  // Fix 11: Fix malformed function calls
  fixed = fixed.replace(/(\w+)\(\s*([^)]*?)\s*,\s*""/g$1($2))
  fixed = fixed.replace(/(\w+)\(\s*([^)]*?)\s*,\s*''/g$1($2))
  // Fix 12: Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*$/gmreturn ()
  fixed = fixed.replace(/return\s*\(\s*<\s*$/gmreturn (<")
  // Fix 13: Fix malformed conditional statements
  fixed = fixed.replace(/if\s*\(\s*([^)]*?)\s*\)\s*{\s*$/gmif ($1) {")
  fixed = fixed.replace(/else\s*{\s*$/gmelse {")
  // Fix 14: Fix malformed try-catch blocks
  fixed = fixed.replace(/try\s*{\s*$/gmtry {")
  fixed = fixed.replace()
    /}\s*catch\s*\(\s*(\w+)\s*\)\s*{\s*$/gm
    "} catch ($1) {)
  // Fix 15: Fix malformed switch statements
  fixed = fixed.replace(/switch\s*\(\s*(\w+)\s*\)\s*{\s*$/gmswitch ($1) {")
  // Fix 16: Fix malformed for loops
  fixed = fixed.replace()
    /for\s*\(\s*(\w+)\s+(\w+)\s*=\s*0;\s*(\w+)\s*<\s*(\w+);\s*(\w+)\+\+\)\s*{\s*$/gm
    "for (let $2 = 0; $2 < $4; $2++) {
  )
  // Fix 17: Fix malformed while loops
  fixed = fixed.replace(/while\s*\(\s*([^)]*?)\s*\)\s*{\s*$/gmwhile ($1) {")
  // Fix 18: Fix malformed do-while loops
  fixed = fixed.replace(/do\s*{\s*$/gmdo {")
  fixed = fixed.replace()
    /}\s*while\s*\(\s*([^)]*?)\s*\)\s*;\s*$/gm
    "} while ($1)
  )
  // Fix 19: Fix malformed for-in loops
  fixed = fixed.replace()
    /for\s*\(\s*(\w+)\s+in\s+(\w+)\s*\)\s*{\s*$/gm
    "for ($1 in $2) {
  )
  // Fix 20: Fix malformed for-of loops
  fixed = fixed.replace()
    /for\s*\(\s*(\w+)\s+of\s+(\w+)\s*\)\s*{\s*$/gm
    "for ($1 of $2) {
  )
  // Fix 21: Fix malformed object destructuring
  fixed = fixed.replace()
    /\{\s*(\w+),\s*(\w+)\s*\}\s*=\s*(\w+)/g
    "{$1, $2} = $3
  )
  // Fix 22: Fix malformed array destructuring
  fixed = fixed.replace()
    /\[\s*(\w+),\s*(\w+)\s*\]\s*=\s*(\w+)/g
    "[$1, $2] = $3
  )
  // Fix 23: Fix malformed template literals
  fixed = fixed.replace(/`([^`]*?)\n/g`$1`\n")
  // Fix 24: Fix malformed regular expressions
  fixed = fixed.replace(/\/\s*([^\/]*?)\s*\/\s*$/gm/$1/")
  // Fix 25: Fix malformed comments
  fixed = fixed.replace(/\/\*\s*([^*]*?)\s*\*\/\s*$/gm/* $1 */")
  // Fix 26: Fix malformed single-line comments
  fixed = fixed.replace(/\/\/\s*([^\n]*?)\s*$/gm// $1")
  // Fix 27: Fix malformed HTML comments
  fixed = fixed.replace(/<!--\s*([^-]*?)\s*-->>\s*$/gm<!-- $1 -->)
  // Fix 28: Fix malformed JSX comments
  fixed = fixed.replace(/{\s*\/\*\s*([^*]*?)\s*\*\/\s*}\s*$/gm{/* $1 */})
  // Fix 29: Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]*?)\s*\}\s*$/gm{$1})
  // Fix 30: Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\//g<>>)
  fixed = fixed.replace(/<\/>\s*<\/>/g</>)
  // Clean up extra whitespace and newlines
  fixed = fixed.replace(/\n\s*\n\s*\n/g\n\n")
  fixed = fixed.replace(/\s+$/gm)
  return { content: fixed, changes }
}
// Function to process a single file;
function processFile(filePath) {
  try {
const content = fs.readFileSync(filePathutf8")
const result = fixSpecificErrors(content, filePath)
    if (result.changes.length > 0) {
      fs.writeFileSync(filePath, result.content)
      console.log(`✅ Fixed ${filePath}:`)
      result.changes.forEach((change) => console.log(`   - ${change}`))
      return true
}
    return false
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return false
}
// Main function
async function main() {
  console.log("🔧 Starting specific syntax error fixes...\n")
  // Get all TypeScript and JavaScript files;
const patterns = [
    "app/**/*.tsx
    "app/**/*.ts
    "src/**/*.tsx
    "src/**/*.ts
    "*.tsx
    "*.ts
  ]
  let totalFiles = 0
  let fixedFiles = 0
  for (const pattern of patterns) {;
const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      totalFiles++
      if (processFile(file)) {
        fixedFiles++
}
}
  console.log(`\n📊 Summary:`)
  console.log(`   Total files processed: ${totalFiles}`)
  console.log(`   Files fixed: ${fixedFiles}`)
  console.log(`   Files unchanged: ${totalFiles - fixedFiles}`)
  if (fixedFiles > 0) {
    console.log("\n✨ Specific syntax errors have been fixed!")
  } else {
    console.log("\n✅ No specific syntax errors found to fix.")
}
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
export { fixSpecificErrors, processFile }
}}}}}}}}}}}}}}}}}}}}}}}}
