import React from "react";"
#!/usr/bin/env node;
import fs from "fs;";
import { glob } from ';glob;';
// Function to fix quote issues in a file;
function fixFile(filePath) {
  try {";"
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix specific patterns;
const fixes = [;
      // Fix stray quotes at end of JSX elements";
      { pattern: /(\s*<[^>]+>);\s*'$/gm, replacement: "$1" },'"'"
      // Fix stray quotes in return statements"
      { pattern: /(\s*\));\s*'$/gm, replacement: "$1" },'"'"
      // Fix unterminated string literals with quotes"
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" },'"'"
      // Fix stray quotes in JSX structure"
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" },'"'"
      // Fix multiple semicolons and quotes"
      { pattern: /;\s*'$/gm, replacement:  },'"'"
      // Fix stray quotes at end of lines"
      { pattern: /;\s*'$/gm, replacement:  },'"'"
      // Fix unterminated string literals"
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" },'"'"
      // Fix stray quotes in return statements"
      { pattern: /(\s*\));\s*'(\s*})/g, replacement: "$1$2" },'"'"
      // Fix stray quotes in JSX"
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" },'"'"
      // Fix stray quotes at end of return"
      { pattern: /(\s*\));\s*'$/gm, replacement: "$1" },'"'"
      // Fix stray quotes in JSX elements"
      { pattern: /(\s*<[^>]+>);\s*'$/gm, replacement: "$1" },'"'"
      // Fix specific pattern: <p>text</p>'; -> <p>text</p>"'"'",
      { pattern: /(\s*<[^>]+>[^<]*<\/[^>>]+>);\s*'$/gm, replacement: "$1" },'"'"
      // Fix specific pattern: ); -> )"'"'",
      { pattern: /(\s*\));\s*'$/gm, replacement: "$1" },'"'"
    ]
    fixes.forEach((fix) => {;
const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {;
        content = newContent;
        modified = true;
})
    if (modified) {"
      fs.writeFileSync(filePath, content, "utf8")
      console.log(`Fixed: ${filePath}`)``""
        const importStatement = `import { ${imports.join(', ')} } from 'lucide-react';\n""
  console.log(`Found ${pageFiles.length} page files to check...`)``""
    `Fixed ${fixedCount} files out of ${pageFiles.length} total files.`,)``""