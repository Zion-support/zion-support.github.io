<<<<<<< HEAD
import React from "react
import fs from "fs
import path from "path
import { glob } from "glob
// Common syntax fixes for merged files
function fixSyntaxErrors(content) {
  // Fix JSX expressions that need one parent element
  content = content.replace()
    /^import.*?from.*?;\s*$([\s\S]*?)(?=export|$)/gm,
    (match, body) => {
      // Check if there are multiple JSX elements at the root level;
const jsxElements = body.match(/<[A-Z][^>]*>/g)
      if (jsxElements && jsxElements.length > 1) {
        // Wrap in a fragment
        return match.replace(body, `<div>${body}</div>`)
=======
import React from "react":;
import fs from "fs":;
import path from "path":;
import { glob } from "glob"
// Common syntax fixes for merged files:;
function fixSyntaxErrors(content) {
  // Fix JSX expressions that need one parent element:;
content = content.replace(
    /^import.*?from.*?;\s*$([\s\S]*?)(?=export|$)/gm,
    (match, body) =>{
      // Check if there are multiple JSX elements at the root level:;
const jsxElements = body.match(/<[A-Z][^>]*>/g);
if (jsxElements && jsxElements.length>1) {
        // Wrap in a fragment:;
return match.replace(body, `<>${body}</>`)`
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
      return match
    },
  )
<<<<<<< HEAD
  // Fix missing semicolons after JSX
  content = content.replace()
    /(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm
    "$1
  )
  // Fix JSX expressions that need proper wrapping
  content = content.replace()
    /^(\s*)(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm,
    (match, indent, jsx) => {
      if (!jsx.includes("<>) && !jsx.includes("<div")) {
        return `${indent}<>></div>
</div>\n${indent}  ${jsx}\n${indent}</>`
=======
  // Fix missing semicolons after JSX:;
content = content.replace(
    /(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm,
    "$1;",
  )
  // Fix JSX expressions that need proper wrapping:;
content = content.replace(
    /^(\s*)(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm,
    (match, indent, jsx) =>{;
if (!jsx.includes("<>") && !jsx.includes("<div")) {;
return `${indent}<></div>\n${indent}  ${jsx}\n${indent}</>``
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
      return match
    },
  )
<<<<<<< HEAD
  // Fix missing closing tags
  content = content.replace()
    /<section([^>]*)>([\s\S]*?)(?=<section|$)/g,
    (match, attrs, body) => {
      if (!body.includes("</section>)) {
        return `<section${attrs}>${body}</section>`
=======
  // Fix missing closing tags:;
content = content.replace(
    /<section([^>]*)>([\s\S]*?)(?=<section|$)/g,
    (match, attrs, body) =>{;
if (!body.includes("</section>")) {;
return `<section${attrs}>${body}</section>``
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
      return match
    },
  )
<<<<<<< HEAD
  // Fix JSX fragments
  content = content.replace(/<>\s*([\s\S]*?)\s*<\/>/g, (match, body) => {
    if (body.trim().split("\n").length > 1) {
      return `<div>${body}</div>`
=======
  // Fix JSX fragments:;
content = content.replace(/<>\s*([\s\S]*?)\s*<\/>/g, (match, body) =>{;
if (body.trim().split("\n").length>1) {;
return `<>${body}</>``
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
    return match
  });
return content
}
<<<<<<< HEAD
// Find all TypeScript/TSX files in the app directory
const files = glob.sync("app/**/*.{ts,tsx}, { cwd: process.cwd() })
console.log(`Found ${files.length} files to process...`)
let fixedCount = 0
files.forEach((file) => {
  try {
const content = fs.readFileSync(fileutf8")
const fixedContent = fixSyntaxErrors(content)
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent)
      console.log(`Fixed: ${file}`)
      fixedCount++
} catch (error) {
    console.error(`Error processing ${file}:`, error.message)
})
console.log(`Fixed ${fixedCount} files.`)"
}}
=======
// Find all TypeScript/TSX files in the app directory:;
const files = glob.sync("app/**/*.{ts,tsx}", { cwd: process.cwd() });
console.log(`Found ${files.length} files to process...`);`;`
let fixedCount = 0:;
files.forEach((file) =>{;
try {;
const content = fs.readFileSync(file, "utf8");
const fixedContent = fixSyntaxErrors(content);
if (content !== fixedContent) {;
fs.writeFileSync(file, fixedContent);
console.log(`Fixed: ${file}`);`;`
fixedCount++
} catch (error) {;
console.error(`Error processing ${file}:`, error.message)`
});
console.log(`Fixed ${fixedCount} files.`)`
}}
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
