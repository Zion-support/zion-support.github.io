#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

console.log("🔧 Fixing any types in page components...");

async function fixAnyTypes() {
  // Find all page.tsx files
  const pageFiles = await glob("app/**/page.tsx");

  let fixedFiles = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let modified = false;

      // Fix common any type issues
      if (content.includes("any")) {
        // Replace any with proper types
        content = content.replace(/:\s*any\b/g, ": unknown");
        content = content.replace(/as\s+any\b/g, "as unknown");
        content = content.replace(/Array<any>/g, "Array<unknown>");
        content = content.replace(/Record<string,\s*any>/g, "Record<string, unknown>");
        content = content.replace(/Promise<any>/g, "Promise<unknown>");
        
        // Fix specific patterns
        content = content.replace(/const\s+(\w+)\s*:\s*any\s*=/g, "const $1: unknown =");
        content = content.replace(/let\s+(\w+)\s*:\s*any\s*=/g, "let $1: unknown =");
        content = content.replace(/var\s+(\w+)\s*:\s*any\s*=/g, "var $1: unknown =");
        
        // Fix function parameters
        content = content.replace(/\(\s*(\w+)\s*:\s*any\s*\)/g, "($1: unknown)");
        content = content.replace(/\(\s*(\w+)\s*:\s*any\s*,\s*(\w+)\s*:\s*any\s*\)/g, "($1: unknown, $2: unknown)");
        
        // Fix object properties
        content = content.replace(/(\w+)\s*:\s*any\s*,/g, "$1: unknown,");
        content = content.replace(/(\w+)\s*:\s*any\s*}/g, "$1: unknown}");
        
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, "utf8");
        fixedFiles++;
        console.log(`✅ Fixed types in: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n🎉 Fixed types in ${fixedFiles} files`);
}

fixAnyTypes().catch(console.error);
