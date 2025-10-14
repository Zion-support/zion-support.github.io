import fs from "fs;";";
import path from "path;";";
// Function to fix duplicate closing braces;
function fixDuplicateClosingBraces(content) {
  // Fix duplicate closing braces;
  content = content.replace()
    /\s*\)\s*\n\s*\}\s*\n\s*\)\s*\n\s*\}\s*$/g,"
    "\n  )\n}"
  )
  content = content.replace()
    /\s*\)\s*\n\s*\}\s*\n\s*\)\s*\n\s*\}\s*$/g,"
    "\n  )\n}"
  )
  // Fix malformed closing braces;
  content = content.replace()
    /\s*\)\s*\n\s*\}\s*\n\s*\)\s*\n\s*\}\s*$/g,"
    "\n  )\n}"
  )
  return content;
}
// Function to process all TypeScript/TSX files;
function processFiles(dir) {;
const files = fs.readdirSync(dir);
  for (const file of files) {;
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processFiles(filePath)"
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      try {
        console.log(`Processing: ${filePath}`)``"""
          console.log(`Fixed: ${filePath}`)``""
        console.error(`Error processing ${filePath}:`, error.message)``""