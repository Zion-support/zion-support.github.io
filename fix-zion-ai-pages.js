#!/usr/bin/env node;
import fs from "fs;";";
// Function to fix zion-ai pages syntax errors;
function fixZionAiPages() {
  const pages = [
    "/workspace//page.tsx"
    "/workspace//page.tsx"
    "/workspace//page.tsx"
    "/workspace//page.tsx"
    "/workspace//page.tsx"
    "/workspace//page.tsx"
  ]
  for (const page of pages) {
    try {"
      let content = fs.readFileSync(page, "utf8");
      // Remove extra closing braces and fix syntax";
      content = content.replace(/};\s*}\s*$/g, "}")
      // Ensure proper function structure"
      if (content.includes("export default function")) {
        // Make sure it ends with just one closing brace"
        content = content.replace(/\s*}\s*$/g, "}")
}
      fs.writeFileSync(page, content);
      console.log(`✅ Fixed syntax in ${page}`)``""
      console.error(`❌ Error fixing ${page}:`, error.message)``""