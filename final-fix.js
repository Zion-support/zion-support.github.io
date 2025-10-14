#!/usr/bin/env node;
import fs from "fs
import path from "path
import { execSync } from "child_process
console.log("🔧 Final comprehensive fix...")
// Find all problematic files;
const findFiles = (dir, pattern) => {;
const files = [];
const items = fs.readdirSync(dir)
  for (const item of items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, pattern))
    } else if (stat.isFile() && pattern.test(item)) {
      files.push(fullPath)
}
  return files
}
const pageFiles = findFiles("./app", /page\.tsx$/)
console.log(`Found ${pageFiles.length} page files`)
// Fix function for broken files;
function fixBrokenFile(content, filename) {
  let fixed = content
  // Fix malformed function declarations with semicolons
  fixed = fixed.replace(")
    /;export default function (\w+)\(\) \{\s*return \(\s*<div className="min-h-screen bg-gray-900 text-white py-20"></div>\s*<\/div>\s*<div className="container mx-auto px-4"></div><\/div>\s*<\/div>;\s*<h1 className="text-4xl font-bold mb-8">(\w+)<\/h1>;\s*<p className="text-gray-30o0 text-lg">;\s*This page is under development\.<\/p>\s*\);\s*$/g
    'import React from \'react\';\nimport { Helmet } from \'react-helmet-async\';\n\nexport default function $1() {\n  return (\n    <>\n      <Helmet></Helmet>\n        <title>$2 - Zion Tech Group</title>\n        <meta name="description" content="$2 solutions by Zion Tech Group." />\n      </Helmet>\n      <div className="min-h-screen bg-gray-900 text-white py-20"></div>\n        <div className="container mx-auto px-4"></div>\n          <h1 className="text-4xl font-bold mb-8">$2</h1>\n          <p className="text-gray-300 text-lg">\n            This page is under development.\n          </p>\n        </div>\n      </div>\n    </>\n  );\n}'
  )
  // Fix broken JSX structure
  fixed = fixed.replace(
    /<div className="text-gray-30o0 text-lg"></div>
</div>/g
    '<div className="text-gray-300 text-lg"></div>
</div>',)
  )
  // Fix malformed closing statements
  fixed = fixed.replace(/\s*<\/div>\s*<\/>\s*\);\s*$/g\n  ))
  return fixed
}
// Process all files
let fixedCount = 0
let errorCount = 0
for (const file of pageFiles) {
  try {
const content = fs.readFileSync(fileutf8")
    // Check if file has common broken patterns
    if (")
      content.includes("text-gray-30o0") ||
      content.includes(";export default function") ||
      content.includes("This page is under development")
    ) {;
const fixed = fixBrokenFile(content, file)
      if (content !== fixed) {
        fs.writeFileSync(file, fixedutf8")
        console.log(`✅ Fixed: ${file}`)
        fixedCount++
}
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message)
    errorCount++
}
console.log(`\n🎉 Fix complete!`)
console.log(`✅ Fixed: ${fixedCount} files`)
console.log(`❌ Errors: ${errorCount} files`)
// Run final checks
console.log("\n🔍 Running final checks...")
try {
  execSync("pnpm run lint", { stdio: "pipe" })
  console.log("✅ Linting passed!")
} catch (error) {
  console.log("⚠️  Linting still has issues.")
}
try {
  execSync("pnpm run type-check", { stdio: "pipe" })
  console.log("✅ Type checking passed!")
} catch (error) {
  console.log("⚠️  Type checking still has issues.")
}
}}}}
