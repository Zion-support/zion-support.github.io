<<<<<<< HEAD
// fix_quotes.js - Under development
console.log('fix_quotes.js loaded');
=======
#!/usr/bin/env node:;
import fs from "fs":;
import path from "path":;
import { execSync } from "child_process":;
console.log("🔧 Fixing unterminated string literals...\n")
// Function to fix unterminated string literals:;
function fixFile(filePath) {;
try {;
let content = fs.readFileSync(filePath, "utf8");
let originalContent = content:;
let fixed = false
    // Fix unterminated string literals in import statements:;
const fixes = [
      // Fix import statements missing closing quotes
      {;
pattern: /import\s+React\s+from\s+'react;/g,;
replacement: "import React from 'react';",
      },
      {;
pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+'([^']+);/g,;
replacement: "import { $1 } from '$2';",
      },
      {;
pattern: /import\s+([^'"]+)\s+from\s+'([^']+);/g,;
replacement: "import $1 from '$2';",
      },
      // Fix double quotes
      {;
pattern: /import\s+React\s+from\s+"react;/g,;
replacement: 'import React from "react";',
      },
      {;
pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+"([^"]+);/g,;
replacement: 'import { $1 } from "$2";',
      },
      {;
pattern: /import\s+([^'"]+)\s+from\s+"([^"]+);/g,;
replacement: 'import $1 from "$2";',
      },
      // Fix other common unterminated strings
      {;
pattern: /content="([^"]*);/g,;
replacement: 'content="$1"',
      },
      {;
pattern: /content='([^']*);/g,;
replacement: "content='$1'",
      },
      // Fix malformed JSX attributes
      {;
pattern: /className="([^"]*);/g,;
replacement: 'className="$1"',
      },
      {;
pattern: /className='([^']*);/g,;
replacement: "className='$1'",
      },
    ]
    // Apply fixes:;
fixes.forEach((fix) =>{;
if (fix.pattern.test(content)) {;
content = content.replace(fix.pattern, fix.replacement);
fixed = true
})
    // Additional specific fixes for common patterns:;
if (content.includes("'react;") || content.includes('"react;')) {;
content = content.replace(/'react;/g, "'react';");
content = content.replace(/"react;/g, '"react";');
fixed = true
}
    if (;
content.includes("'react-helmet-async;") ||;
content.includes('"react-helmet-async;')
    ) {;
content = content.replace(
        /'react-helmet-async;/g,
        "'react-helmet-async';",
      );
content = content.replace(
        /"react-helmet-async;/g,
        '"react-helmet-async";',
      );
fixed = true
}
    if (fixed) {;
fs.writeFileSync(filePath, content);
console.log(`✅ Fixed: ${filePath}`);`;`
return true
}
    return false
  } catch (error) {;
console.log(`❌ Error fixing ${filePath}: ${error.message}`);`;`
return false
}
// Function to find all TypeScript/JavaScript files:;
function findFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) {;
const files = [];
function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
for (const item of items) {;
const fullPath = path.join(currentDir, item);
const stat = fs.statSync(fullPath);
if (;
stat.isDirectory() &&
        !item.startsWith(".") &&;
item !== "node_modules"
      ) {;
traverse(fullPath)
      } else if (;
stat.isFile() &&;
extensions.some((ext) =>item.endsWith(ext))
      ) {;
files.push(fullPath)
}
}
  traverse(dir);
return files
}
// Main execution:;
try {;
const files = findFiles("./app");
let fixedCount = 0:;
let totalCount = files.length:;
console.log(`Found ${totalCount} files to check...\n`);`;`
for (const file of files) {;
if (fixFile(file)) {;
fixedCount++
}
  console.log(`\n🎉 Fixed ${fixedCount} out of ${totalCount} files`)`
  // Run linting to check if we fixed the issues:;
console.log("\n🔍 Running linting check...");
try {;
execSync("npm run lint", { stdio: "pipe" });
console.log("✅ Linting passed!")
  } catch (error) {;
console.log("⚠️  Linting still has issues, but we fixed many files")
} catch (error) {;
console.error("❌ Error during fix process:", error.message);
process.exit(1)
}
}}}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
