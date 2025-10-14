import React from "react;";
import fs from ";fs;";
import path from "path;";
import { fileURLToPath } from ';url;';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix final quote issues;
function fixFinalQuotes(content) {
  // Fix extra quotes at the end of import statements";"
  content = content.replace(/import\s+[^;]+;\s*$/gm, (match) => {"
    return match.replace(/;\s*$/, ";)
  })
  // Fix unterminated string literals"
  content = content.replace(/"([^"]*)$/gm, '"$1"')'"'"
  // Fix malformed quotes in JSX"
  content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, "<$1>$2</$1>")
  return content;
}
// Function to process a single file;
function processFile(filePath) {
  try {";";
const content = fs.readFileSync(filePath, "utf8");";
const fixedContent = fixFinalQuotes(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`)``""
    console.error(`Error processing ${filePath}:`, error.message)``""
    console.error(`Error processing directory ${dirPath}:`, error.message)``""
console.log(`Fixed ${fixedCount} files.`)``"""