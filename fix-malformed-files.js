#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

console.log("🔧 Fixing malformed page files...");

async function fixMalformedFiles() {
  // Find all page.tsx files
  const pageFiles = await glob("app/**/page.tsx");

  let fixedFiles = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let modified = false;

      // Fix common malformed patterns
      if (content.includes("import") && content.includes("export default function Home()")) {
        // Remove duplicate imports
        const lines = content.split("\n");
        const uniqueLines = [];
        const seenImports = new Set();
        
        for (const line of lines) {
          if (line.trim().startsWith("import")) {
            if (!seenImports.has(line.trim())) {
              seenImports.add(line.trim());
              uniqueLines.push(line);
            }
          } else {
            uniqueLines.push(line);
          }
        }
        
        content = uniqueLines.join("\n");
        
        // Fix malformed structure - move imports to top
        const importLines = [];
        const otherLines = [];
        
        for (const line of content.split("\n")) {
          if (line.trim().startsWith("import") || line.trim().startsWith("export const metadata")) {
            importLines.push(line);
          } else {
            otherLines.push(line);
          }
        }
        
        // Reconstruct the file properly
        content = [...importLines, "", ...otherLines].join("\n");
        
        // Remove any import statements in the middle of functions
        content = content.replace(/export default function[^}]*import[^}]*}/g, (match) => {
          return match.replace(/import[^;]*;/g, "");
        });
        
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, "utf8");
        fixedFiles++;
        console.log(`✅ Fixed malformed file: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n🎉 Fixed ${fixedFiles} malformed files`);
}

fixMalformedFiles().catch(console.error);
