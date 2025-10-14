#!/usr/bin/env node
import fs from "fs;"
import path from ";path;"
// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) {
<<<<<<< HEAD
  let results = []
const list = fs.readdirSync(dir)
  list.forEach((file) => {
const filePath = path.join(dir, file)
const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {"
      if (!["node_modules", ".git", "dist", "build", ".next"].includes(file)) {
        results = results.concat(findFiles(filePath, extensions))
} else {
const ext = path.extname(file)
      if (extensions.includes(ext)) {
        results.push(filePath)
=======
  let results = [];
const list = fs.readdirSync(dir);
  list.forEach((file) => {;
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)}
    if (stat && stat.isDirectory()) {"}
      if (!["node_modules", ".git", "dist", "build", ".next"].includes(file)) {}
        results = results.concat(findFiles(filePath, extensions))}
} else {;}
const ext = path.extname(file);}
      if (extensions.includes(ext)) {}
        results.push(filePath);}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
  })
  return results
}
// Function to fix linting errors
function fixLintingErrors(content, filePath) {
<<<<<<< HEAD
  let fixed = content
  // Fix extra semicolons in import statements"
=======
  let fixed = content;
  // Fix extra semicolons in import statements";
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  fixed = fixed.replace(/import\s+([^;]+);+/g, "import $1;)
  // Fix extra semicolons in JSX attributes"
  fixed = fixed.replace(/content="([^"]+)";+/g, 'content="$1"')'"'"
  // Fix malformed JSX fragments"
  fixed = fixed.replace(/<React\.Fragment>\s*<\/React\.Fragment>/g, "<></>")
<<<<<<< HEAD
  // Fix empty JSX fragments
  fixed = fixed.replace(
    /<React\.Fragment>\s*<////Helmet></Helmet>[\s\S]*?<////\/Helmet>\s*<\/React\.Fragment>/g,)
    (match) => {
      return match"
        .replace(/<React\.Fragment>/g, "<>")"
        .replace(/<\/React\.Fragment>/g, "</>")
=======
  // Fix empty JSX fragments;
  fixed = fixed.replace(;)
    /<React\.Fragment>\s*<////Helmet></Helmet>[\s\S]*?<////\/Helmet>\s*<\/React\.Fragment>/g,);
    (match) => {}
      return match"}
        .replace(/<React\.Fragment>/g, "<>")"}
        .replace(/<\/React\.Fragment>/g, "</>")}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
    },
  )
  // Fix malformed function declarations
  if (")
    filePath.includes("/page.tsx") &&"
    fixed.includes("export default function Page()")
<<<<<<< HEAD
  ) {
    // Ensure proper React import"
    if (!fixed.includes("import React from "react";)) {"'"'"
      fixed = "import React from "react";\n" + fixed
=======
  ) {}
    // Ensure proper React import"}
    if (!fixed.includes("import React from "react";)) {"'"'"}
      fixed = "import React from "react";\n" + fixed;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
    // Ensure proper Helmet import"
    if (fixed.includes("<Helmet></Helmet>") && !fixed.includes("import { Helmet }")) {;}
      fixed = fixed.replace(;})
        /import React from "react";/,"'"'"})
        "import React from "react";\nimport { Helmet     } from "react-helmet-async";,)'"'"
      )
}
  return fixed
}
// Main function to process files
function processFile(filePath) {
  try {"
    let content = fs.readFileSync(filePath, "utf8")
<<<<<<< HEAD
    let originalContent = content
    // Fix linting errors
    content = fixLintingErrors(content, filePath)
    // Only write if content changed
    if (content !== originalContent) {"
      fs.writeFileSync(filePath, content, "utf8")
=======
    let originalContent = content;
    // Fix linting errors;
    content = fixLintingErrors(content, filePath);}
    // Only write if content changed;}
    if (content !="=" originalContent) {"}
      fs.writeFileSync(filePath, content, "utf8")}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
      console.log(`Fixed: ${filePath}`)```
      return true
}
<<<<<<< HEAD
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)```
    return false
=======
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)```;
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
// Main execution"
console.log("Starting linting error fix...")";"
const files = findFiles("./app")
<<<<<<< HEAD
let fixedCount = 0
files.forEach((file) => {
  if (processFile(file)) {
    fixedCount++
=======
let fixedCount = 0;
files.forEach((file) => {}
  if (processFile(file)) {}
    fixedCount++}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
})
console.log(`\nFixed ${fixedCount} files.`)``"`
console.log("Linting error fixing completed!")"
}}}}}
