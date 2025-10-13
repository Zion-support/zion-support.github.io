#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

function fixUnusedImports(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Find all lucide-react imports
  const lucideImportRegex =
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
  let match;

  while ((match = lucideImportRegex.exec(content)) !== null) {
    const importStatement = match[0];
    const importedIcons = match[1].split(",").map((icon) => icon.trim());

    // Check which icons are actually used in the file
    const usedIcons = importedIcons.filter((icon) => {
      // Create a regex to find the icon usage (not in the import statement)
      const iconRegex = new RegExp(`\\b${icon}\\b`, "g");
      const allMatches = content.match(iconRegex) || [];
      // Count matches outside of import statements
      const importMatches = (importStatement.match(iconRegex) || []).length;
      return allMatches.length > importMatches;
    });

    if (usedIcons.length !== importedIcons.length) {
      if (usedIcons.length > 0) {
        const newImport = `import { ${usedIcons.join(", ")} } from 'lucide-react';`;
        content = content.replace(importStatement, newImport);
      } else {
        // Remove the entire import line if no icons are used
        content = content.replace(importStatement + "\n", "");
      }
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    }
}

// Main execution
async function main() {
  const pageFiles = await glob("app/**/page.tsx");
  pageFiles.forEach(fixUnusedImports);
  }

main().catch(console.error);
