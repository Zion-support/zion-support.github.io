const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Function to fix remaining issues in a file
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix href to to in Link components (more comprehensive)
    const hrefToToRegex = /<Link\s+([^>]*?)href={['"]([^'"]+)['"]}([^>]*?)>/g;
    content = content.replace(hrefToToRegex, (match, before, href, after) => {
      modified = true;
      return `<Link ${before}to={'${href}'}${after}>`;
    });

    // Fix remaining href attributes in Link components
    const hrefAttributeRegex = /href={['"]([^'"]+)['"]}/g;
    content = content.replace(hrefAttributeRegex, (match, href) => {
      // Only replace if it's inside a Link component
      const beforeMatch = content.substring(0, content.indexOf(match));
      const lastLinkOpen = beforeMatch.lastIndexOf("<Link");
      const lastLinkClose = beforeMatch.lastIndexOf(">");

      if (lastLinkOpen > lastLinkClose) {
        modified = true;
        return `to={'${href}'}`;
      }
      return match;
    });

    // Remove Metadata type references
    const metadataRegex = /export\s+const\s+metadata:\s*Metadata\s*=/g;
    content = content.replace(metadataRegex, (match) => {
      modified = true;
      return "// export const metadata: Metadata = // Removed for Vite";
    });

    // Fix dynamic imports that weren't caught
    const dynamicRegex = /const\s+(\w+)\s+=\s+dynamic\(/g;
    content = content.replace(dynamicRegex, (match, varName) => {
      modified = true;
      return `const ${varName} = lazy(`;
    });

    // Fix dynamic import closing
    const dynamicCloseRegex =
      /,\s*\{\s*loading:\s*\(\)\s+=>\s+<(\w+)Skeleton\s*\/>,\s*\}\);?/g;
    content = content.replace(dynamicCloseRegex, (match, skeletonName) => {
      modified = true;
      return `);`;
    });

    // Add React import if missing and we have JSX
    if (
      content.includes("<") &&
      content.includes(">") &&
      !content.includes("import React")
    ) {
      const lines = content.split("\n");
      let insertIndex = 0;

      // Find the first import statement or add at the beginning
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("import ")) {
          insertIndex = i;
          break;
        }
      }

      if (!content.includes("import React")) {
        lines.splice(insertIndex, 0, "import React from 'react';");
        content = lines.join("\n");
        modified = true;
      }
    }

    // Add lazy import if we have lazy usage
    if (content.includes("lazy(") && !content.includes("import { lazy }")) {
      const lines = content.split("\n");
      let insertIndex = 0;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("import ")) {
          insertIndex = i;
          break;
        }
      }

      lines.splice(insertIndex, 0, "import { lazy } from 'react';");
      content = lines.join("\n");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files in the app directory
const patterns = ["app/**/*.tsx", "app/**/*.ts", "app/**/*.jsx", "app/**/*.js"];

let totalFixed = 0;

patterns.forEach((pattern) => {
  const files = glob.sync(pattern, { cwd: process.cwd() });

  files.forEach((file) => {
    // Skip certain directories
    if (
      file.includes("node_modules") ||
      file.includes(".next") ||
      file.includes("dist") ||
      file.includes("build")
    ) {
      return;
    }

    if (fixRemainingIssues(file)) {
      totalFixed++;
    }
  });
});

console.log(`\nTotal files fixed: ${totalFixed}`);
