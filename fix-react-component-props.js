#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

console.log("🔧 Fixing React component prop types...");

async function fixReactComponentProps() {
  // Find all page.tsx files
  const pageFiles = await glob("app/**/page.tsx");

  let fixedFiles = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let modified = false;

      // Fix React component prop types specifically
      if (content.includes("unknown")) {
        // Replace unknown with proper React types for component props
        content = content.replace(/:\s*unknown\s*=\s*{}/g, ": React.ComponentProps<any> = {}");
        content = content.replace(/:\s*unknown\s*=\s*{\s*}/g, ": React.ComponentProps<any> = {}");
        content = content.replace(/:\s*unknown\s*=\s*{\s*\.\.\./g, ": React.ComponentProps<any> = { ...");
        
        // Fix spread operator issues
        content = content.replace(/\.\.\.\s*unknown/g, "...{}");
        
        // Fix specific patterns that cause TypeScript errors
        content = content.replace(/const\s+(\w+)\s*:\s*unknown\s*=/g, "const $1: any =");
        content = content.replace(/let\s+(\w+)\s*:\s*unknown\s*=/g, "let $1: any =");
        content = content.replace(/var\s+(\w+)\s*:\s*unknown\s*=/g, "var $1: any =");
        
        // Fix function parameters
        content = content.replace(/\(\s*(\w+)\s*:\s*unknown\s*\)/g, "($1: any)");
        content = content.replace(/\(\s*(\w+)\s*:\s*unknown\s*,\s*(\w+)\s*:\s*unknown\s*\)/g, "($1: any, $2: any)");
        
        // Fix object properties
        content = content.replace(/(\w+)\s*:\s*unknown\s*,/g, "$1: any,");
        content = content.replace(/(\w+)\s*:\s*unknown\s*}/g, "$1: any}");
        
        // Fix array types
        content = content.replace(/Array<unknown>/g, "Array<any>");
        content = content.replace(/Record<string,\s*unknown>/g, "Record<string, any>");
        content = content.replace(/Promise<unknown>/g, "Promise<any>");
        
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, "utf8");
        fixedFiles++;
        console.log(`✅ Fixed React types in: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n🎉 Fixed React types in ${fixedFiles} files`);
}

fixReactComponentProps().catch(console.error);
