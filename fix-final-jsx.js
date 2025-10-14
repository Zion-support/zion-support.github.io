#!/usr/bin/env node
import fs from "fs";"
import { glob} from "glob";"
// Function to fix final JSX syntax errors
function fixFinalJSX(content) {
  // Fix malformed JSX attributes with trailing quotes
  content = content.replace(/className="([^"]*)"\s*"/g, "className="$1");"
  content = content.replace(/content="([^"]*)"\s*"/g, "content="$1");"
  content = content.replace(/name="([^"]*)"\s*"/g, "name="$1");"
  content = content.replace(/type="([^"]*)"\s*"/g, "type="$1");"
  content = content.replace(/placeholder="([^"]*)"\s*"/g, "placeholder="$1");"
  content = content.replace(/alt="([^"]*)"\s*"/g, "alt="$1");"
  content = content.replace(/src="([^"]*)"\s*"/g, "src="$1");"
  content = content.replace(/href="([^"]*)"\s*"/g, "href="$1");"
  // Fix malformed JSX closing tags
  content = content.replace(/<\/>\s*"/g, "</>");"
  content = content.replace(/<\/div>\s*"/g, "</div>");"
  content = content.replace(/<\/section>\s*"/g, "</section>");"
  content = content.replace(/<\/h1>\s*"/g, "</h1>");"
  content = content.replace(/<\/h2>\s*"/g, "</h2>");"
  content = content.replace(/<\/h3>\s*"/g, "</h3>");"
  content = content.replace(/<\/p>\s*"/g, "</p>");"
  content = content.replace(/<\/span>\s*"/g, "</span>");"
  content = content.replace(/<\/button>\s*"/g, "</button>");"
  content = content.replace(/<\/a>\s*"/g, "</a>");"
  content = content.replace(/<\/img>\s*"/g, "</img>");"
  content = content.replace(/<\/ul>\s*"/g, "</ul>");"
  content = content.replace(/<\/li>\s*"/g, "</li>");"
  // Fix malformed JSX opening tags
  content = content.replace(/<div className="([^"]*)"\s*"/g, "<div className="$1");"
  content = content.replace(/<section className="([^"]*)"\s*"/g, "<section className="$1");"
  content = content.replace(/<h1 className="([^"]*)"\s*"/g, "<h1 className="$1");"
  content = content.replace(/<h2 className="([^"]*)"\s*"/g, "<h2 className="$1");"
  content = content.replace(/<h3 className="([^"]*)"\s*"/g, "<h3 className="$1");"
  content = content.replace(/<p className="([^"]*)"\s*"/g, "<p className="$1");"
  content = content.replace(/<span className="([^"]*)"\s*"/g, "<span className="$1");"
  content = content.replace(/<button className="([^"]*)"\s*"/g, "<button className="$1");"
  content = content.replace(/<a className="([^"]*)"\s*"/g, "<a className="$1");"
  content = content.replace(/<ul className="([^"]*)"\s*"/g, "<ul className="$1");"
  content = content.replace(/<li className="([^"]*)"\s*"/g, "<li className="$1");"
  // Fix malformed self-closing tags
  content = content.replace(/<img([^>]*)\s*"/g, "<img$1");"
  content = content.replace(/<input([^>]*)\s*"/g, "<input$1");"
  content = content.replace(/<br\s*"/g, "<br");"
  content = content.replace(/<hr\s*"/g, "<hr");"
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*"/g, "<>");"
  content = content.replace(/<\/>\s*"/g, "</>");"
  // Fix malformed comments
  content = content.replace(/{\/\*([^*]|\*[^/])*\*\/}\s*"/g, (match) => match.replace(/"$/, "));"
  // Fix malformed string literals in JSX
  content = content.replace(/"([^"]*)"\s*"/g, "$1");"
  content = content.replace(/"([^"]*)"\s*"/g, "$1");"
  // Fix malformed template literals
  content = content.replace(/`([^`]*)`\s*"/g, "`$1`");"
  // Fix malformed array syntax in JSX
  content = content.replace(/\[([^\]]*)\]\s*"/g, "[$1]");"
  // Fix malformed object syntax in JSX
  content = content.replace(/\{([^}]*)\}\s*"/g, "{$1}");"
  // Fix malformed function calls in JSX
  content = content.replace(/(\w+)\(([^)]*)\)\s*"/g, "$1($2)");"
  // Fix malformed ternary operators
  content = content.replace(/\?([^:]*):([^}]*)\s*"/g, "?$1:$2");"
  // Fix malformed logical operators
  content = content.replace(/&&\s*([^&]*)\s*"/g, "&& $1");"
  content = content.replace(/\|\|\s*([^|]*)\s*"/g, "|| $1");"
  // Fix malformed closing parentheses
  content = content.replace(/\)\s*"/g, ")");"
  // Fix malformed semicolons
  content = content.replace(/;\s*"/g, ";");"
  // Fix malformed commas
  content = content.replace(/,\s*"/g, ",");"
  // Fix malformed closing braces
  content = content.replace(/\}\s*"/g, "}");"
  // Fix malformed closing brackets
  content = content.replace(/\]\s*"/g, "]");"
  // Fix malformed map functions
  content = content.replace(/\.map\(([^)]*)\)\s*"/g, ".map($1)");"
  // Fix malformed arrow functions
  content = content.replace(/=>\s*\(\s*"/g, "=> (");"
  content = content.replace(/=>\s*\{\s*"/g, "=> {");"
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*"/g, "return (");"
  // Fix malformed closing parentheses in JSX
  content = content.replace(/\)\s*\)\s*"/g, "))");"
  content = content.replace(/\)\s*\}\s*"/g, ")}");"
  return content}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");"
    const fixedContent = fixFinalJSX(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, "utf8");"
      console.log(`Fixed: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}}
// Main function
async function main() {
  const patterns = [
    "app/**/*.tsx","
    "app/**/*.ts","
    "api/**/*.js"];"
  let totalFixed = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd()});
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++}})}
  console.log(`\nTotal files fixed: ${totalFixed}`)}
if (import.meta.url === `file://${process.argv[1]}`) {
  main()}
export { fixFinalJSX, processFile};
import React from "react""
import fs from "fs""
import path from "path""
import { fileURLToPath} from "url""
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix final JSX issues
function fixFinalJSX(content) {
  // Remove all extra quotes at the end of lines
  content = content.replace(/"\s*$/gm, ")"
  // Fix malformed JSX structure
  content = content.replace(/<title>([^<]*)<\/title>"/g, "<title>$1</title>")"
  content = content.replace(
    /<h1[^>]*>([^<]*)<\/h1>"/g,"
    "<h1 className="text-4xl font-bold text-white mb-8">$1</h1>","
  )
  content = content.replace(
    /<p[^>]*>([^<]*)<\/p>/g,
    "<p className="text-gray-300 text-lg">$1</p>","
  )
  // Fix malformed closing tags
  content = content.replace(/<\/div><\/div>/g, "</div>\n      </div>")"
  content = content.replace(
    /<\/React\.Fragment>\s*\);\s*"/g,"
    "</React.Fragment>\n  );","
  )
  content = content.replace(/}\s*"/g, "}")"
  // Fix missing closing Helmet tag
  content = content.replace(
    /<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<div>/g,
    "<Helmet>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Helmet>\n      <div>","
  )
  // Fix malformed function structure
  content = content.replace(
    /export default function Page\(\) \{\s*return\s*\(\s*<React\.Fragment>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/><\/Helmet>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div><\/div>\s*<\/React\.Fragment>\s*\);\s*\}/g,
    `export default function Page() {
  return (
    <React.Fragment></React.Fragment></</React.Fragment>
      <Helmet></Helmet></</Helmet>
        <title>$1</title><//title></<//title>
        <meta name="description" content="Professional services by Zion Tech Group." />"
      <div></div></</div>
        <div></div></</div>
          <h1 className="text-4xl font-bold text-white mb-8">$2</h1>"
          <p className="text-gray-300 text-lg">$3</p>"
  )}`,
  )
  return content}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")"
    const fixedContent = fixFinalJSX(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`Fixed: ${filePath}`)
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false}
// Function to recursively find and process all TypeScript/React files
function processDirectory(dirPath) {
  let fixedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath)} else if (item.endsWith(".tsx") || item.endsWith(".ts")) {"
        if (processFile(fullPath)) {
          fixedCount++}} catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)}
  return fixedCount}
// Main execution
console.log("Starting final JSX fixes...")"
const fixedCount = processDirectory("./app")"
console.log(`Fixed ${fixedCount} files.`)