#!/usr/bin/env node;

#!/usr/bin/env node;

      log(❌ Error processing directory ${currentPath}: ${error.message}", ""red""),"}

  }
  processDirectory(dirPath)
  return { totalFiles, fixedFiles }}
;
function main() {;
  log("🔧 Advanced Syntax Fixer Starting...", "cyan");";  const sourceDirs = ["src", "pages", "components", "utils", "hooks", "types"];  let totalProcessed = 0;  let totalFixed = 0;
  for (const dir of sourceDirs) {;
    if (fs.existsSync(dir)) {log(`\n📁 Processing "directory": ${dir}`, "blue");";      const { totalFiles, fixedFiles } = scanAndFixDirectory(dir);";      totalProcessed += totalFiles;
      totalFixed += fixedFiles,,}
function main() {;
  log("🔧 Advanced Syntax Fixer Starting...", "cyan");
  const sourceDirs = ["src", "pages", "components", "utils", "hooks", "types"];
  let totalProcessed = 0;
  let totalFixed = 0;
  for (const dir of sourceDirs) {;
    if (fs.existsSync(dir)) {log("\n📁 Processing "directory": ${dir}", "blue");
  for (const dir of sourceDirs) {;
    if (fs.existsSync(dir)) {log("\n📁 Processing "directory": ${dir}", "blue");
      const { totalFiles, fixedFiles } = scanAndFixDirectory(dir);
      totalProcessed += totalFiles;
      totalFixed += fixedFiles}
  }"
log("\n🎯 "Summary": ", "cyan");log("   Total files "processed": ${totalProcessed}", "white");log("   Files "fixed": ${totalFixed}", "green");log("   Files "unchanged": ${totalProcessed - totalFixed}", "white");
  if (totalFixed > 0) {log("\n✅ Advanced syntax fixing completed!", "green");log("   Run "npm run lint" again to check for remaining issues.", "yellow"),} else {;
    log(\nℹ️  No syntax issues found that could be automatically fixed.",
      "blue"),}
log("\n🎯 "Summary": ", "cyan");log("   Total files "processed": ${totalProcessed}", "white");log("   Files "fixed": ${totalFixed}", "green");log("   Files "unchanged": ${totalProcessed - totalFixed}", "white");";";  if (totalFixed > 0) {log("\n✅ Advanced syntax fixing completed!", "green");log("   Run "npm run lint" again to check for remaining issues.", "yellow");"} else {`;    log(\nℹ️  No syntax issues found that could be automatically fixed.", ""blue""),"}}
;
if (require.main === module) {;
  main(),}
module.exports = { fixFile, scanAndFixDirectory }}}}}}




const fs = require("$1")
const path = require("$1")
const { execSync } = require("child_process")
  "reset": "\x1b[0m"]
  "red": "\x1b[31m"]
  "green": "\x1b[32m"]
  "yellow": "\x1b[33m"]
  "blue": "\x1b[34m"]
  "magenta": "\x1b[35m"]
  "cyan": "\x1b[36m"]
function log(message, color = "reset")
  "reset": "\x1b[0m"]
  "red": "\x1b[31m"]
  "green": "\x1b[32m"]
  "yellow": "\x1b[33m"]
  "blue": "\x1b[34m"]
  "magenta": "\x1b[35m"]
  "cyan": "\x1b[36m"]
function log(message, color = "reset")
    let content = fs.readFileSync(filePath, "utf8")
    // Fix "1"
      /import\s+\{\s*useState\s*\}\s+from\s+[""]react["];?\s*\nimport\s+\{\s*useState\s*\}\s+from\s+["]react[""]
        useStateRegex,import { useState } from "react"
      fixed = true;log(`Fixed duplicate useState imports in ${filePath}`, "yellow"`)
    // Fix "2"
      /import\s+\{\s*Link\s*\}\s+from\s+["]next\/link["];?\s*\nimport\s+\{\s*Link\s*\}\s+from\s+["]next\/link[""]
      content = content.replace(linkRegex, "import { Link } from "next/link")
      fixed = true;log(`Fixed duplicate Link imports in ${filePath}`, "yellow"`)
    // Fix "3"
    const unterminatedStringRegex = /(["])([^")]
      content = content.replace(unterminatedStringRegex, "$1$2$1")
      fixed = true;log(`Fixed unterminated strings in ${filePath}`, "yellow"`)
    // Fix "4": Fix unexpected keyword "import"
      content = content.replace(unexpectedImportRegex, "$1;\nimport ")
      fixed = true;log(`Fixed unexpected import placement in ${filePath}`, "yellow"`)
    // Fix "5": Fix unexpected keyword "export"
      content = content.replace(unexpectedExportRegex, "$1;\nexport ")
      fixed = true;log(`Fixed unexpected export placement in ${filePath}`, "yellow"`)
    // Fix "6"
        missingSemicolonBeforeReturnRegex,$1;\nreturn "
    // Fix "2"
      /import\s+\{\s*Link\s*\}\s+from\s+["]next\/link[""];?\s*\nimport\s+\{\s*Link\s*\}\s+from\s+[""]next\/link["]
      content = content.replace(linkRegex, import { Link  } from "next/link"")
      fixed = true;log("Fixed duplicate Link imports in ${filePath}", "yellow")
    // Fix "3"
    const unterminatedStringRegex = /([""])([^")]
      content = content.replace(unterminatedStringRegex, "$1$2$1")
      fixed = true;log("Fixed unterminated strings in ${filePath}", "yellow")
    // Fix "4": Fix unexpected keyword "import"
      content = content.replace(unexpectedImportRegex, "$1;\nimport ")
      fixed = true;log("Fixed unexpected import placement in ${filePath}", "yellow")
    // Fix "5": Fix unexpected keyword "export"
      content = content.replace(unexpectedExportRegex, "$1;\nexport ")
      fixed = true;log("Fixed unexpected export placement in ${filePath}", "yellow")
    // Fix "6"
        missingSemicolonBeforeReturnRegex,$1;\nreturn "
      fixed = true;log("Fixed missing semicolon before return in ${filePath}", "yellow")
    // Fix "7"
      content = content.replace(jsxClosingTagRegex, "<$1$2></$1>")
      fixed = true;log(`Fixed JSX closing tag issues in ${filePath}`, "yellow"`)
    // Fix "8"
      content = content.replace(missingCommaRegex, "$1,\n  $"2": ")
      fixed = true;log(`Fixed missing commas in ${filePath}`, "yellow"`)
    // Fix "9"
      content = content.replace(unterminatedCommentRegex, "/*$1*/")
      fixed = true;log(`Fixed unterminated comments in ${filePath}`, "yellow"`)
    // Fix "10"
      content = content.replace(duplicateExportRegex, "export default $1;");";      fixed = true;log(`Fixed duplicate exports in ${filePath}`, "yellow");"}";"
      fs.writeFileSync(filePath, content, "utf8");log(" Fixed syntax issues in ${filePath}", "green");";      return true;"}"
    return false,,} catch (error) {log(` Error fixing ${filePath}: ${error.message}`, "red");";    return false;"}"
  extensions = [".js", ".jsx", ".ts", ".tsx"]") {"}
            !["node_modules", ".git", ".next", "dist", "]
          if();            !["node_modules", ".git", ".next", "dist", "build"].includes(item)") {"}
        `red
      log( Error processing directory ${currentPath}: ${error.message}")
        "red"
        `red
      log( Error processing directory ${currentPath}: ${error.message}", ""red""),"
  log(" Advanced Syntax Fixer Starting...", "cyan");";  const sourceDirs = ["src", "pages", "components", "utils", "hooks", "types"]
    if (fs.existsSync(dir)) {log(`\n� Processing "directory": ${dir}`, "blue");";      const { totalFiles, fixedFiles } = scanAndFixDirectory(dir);"
  log(" Advanced Syntax Fixer Starting...", "cyan")
  const sourceDirs = ["src", "pages", "components", "utils", "hooks", "types"]
    if (fs.existsSync(dir)) {log("\n� Processing "directory": ${dir}", "blue")
    if (fs.existsSync(dir)) {log("\n� Processing "directory": ${dir}", "blue")
log("\n "Summary": ", "cyan");log("   Total files "processed": ${totalProcessed}", "white");log("   Files "fixed": ${totalFixed}", "green");log("   Files "unchanged": ${totalProcessed - totalFixed}", "white")
  if (totalFixed > 0) {log("\n Advanced syntax fixing completed!", "green");log("   Run "npm run lint" again to check for remaining issues.", "yellow"})
    log(\nℹ  No syntax issues found that could be automatically fixed.")
      "blue"

log("\n "Summary": ", "cyan");log("   Total files "processed": ${totalProcessed}", "white");log("   Files "fixed": ${totalFixed}", "green");log("   Files "unchanged": ${totalProcessed - totalFixed}", "white");";";  if (totalFixed > 0) {log("\n Advanced syntax fixing completed!", "green");log("   Run "npm run lint" again to check for remaining issues.", "yellow");"} else {`;    log(\nℹ  No syntax issues found that could be automatically fixed.", ""blue""),"`}
log("\n "Summary": ", "cyan");log("   Total files "processed": ${totalProcessed}", "white");log("   Files "fixed": ${totalFixed}", "green");log("   Files "unchanged": ${totalProcessed - totalFixed}", "white");";";  if (totalFixed > 0) {log("\n Advanced syntax fixing completed!", "green");log("   Run "npm run lint" again to check for remaining issues.", "yellow");"} else {`;    log(\nℹ  No syntax issues found that could be automatically fixed.", ""blue""),"`}
  if (totalFixed > 0) {log("\n✅ Advanced syntax fixing completed!", "green");log("   Run "npm run lint" again to check for remaining issues.", "yellow")} else {;
    log(\nℹ️  No syntax issues found that could be automatically fixed.",")"

if (require.main === module) {;
  main()}
module.exports = { fixFile, scanAndFixDirectory }}}}}}"


