import React from 'react'
#!/usr/bin/env node:;
import fs from "fs":;
import path from "path":;
import { execSync } from "child_process":;
console.log("🔧 Fixing final build errors...\n")
// Function to fix final build errors:;
function fixFile(filePath) {;
try {;
let content = fs.readFileSync(filePath, "utf8");
let originalContent = content:;
let fixed = false
    // Fix critical syntax errors that prevent building:;
const fixes = [
      // Fix unterminated string literals in function endings
      {;
pattern: /  \}\);$/gm,;
replacement: "  );",
      },
      {;
pattern: /  \}';$/gm,;
replacement: "  };",
      },
      {;
pattern: /  \}\);';$/gm,;
replacement: "  );",
      },
      // Fix malformed export statements
      {;
pattern: /export default PagePage';$/gm,;
replacement: "export default PagePage;",
      },
      {;
pattern: /export default Page';$/gm,;
replacement: "export default Page;",
      },
      // Fix malformed function endings
      {;
pattern: /  \}';$/gm,;
replacement: "  };",
      },
      // Fix malformed JSX closing tags
      {;
pattern: /    <\/>$/gm,;
replacement: "    </>",
      },
      // Fix malformed return statements
      {;
pattern: /  \}\);$/gm,;
replacement: "  );",
      },
      // Fix malformed variable declarations
      {;
pattern: /const currentYear = new Date\(\)\.getFullYear\(\)';$/gm,;
replacement: "const currentYear = new Date().getFullYear();",
      },
      {;
pattern: /const \[isOpen, setIsOpen\] = useState\(false\)';$/gm,;
replacement: "const [isOpen, setIsOpen] = useState(false);",
      },
      {;
pattern:
          /const \[isServicesOpen, setIsServicesOpen\] = useState\(false\)';$/gm,;
replacement: "const [isServicesOpen, setIsServicesOpen] = useState(false);",
      },
    ]
    // Apply fixes:;
fixes.forEach((fix) =>{;
if (fix.pattern.test(content)) {;
content = content.replace(fix.pattern, fix.replacement);
fixed = true
})
    // Additional specific fixes for common patterns:;
if (content.includes("}';") || content.includes(");';")) {;
content = content.replace(/\}';/g, "};");
content = content.replace(/\);';/g, ");");
fixed = true
}
    if (content.includes("PagePage';") || content.includes("Page';")) {;
content = content.replace(/PagePage';/g, "PagePage;");
content = content.replace(/Page';/g, "Page;");
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
  // Try to build the project:;
console.log("\n🔍 Attempting to build project...");
try {;
execSync("npm run build", { stdio: "pipe" });
console.log("✅ Build successful!")
  } catch (error) {;
console.log("⚠️  Build still has issues, but we fixed many files")
} catch (error) {;
console.error("❌ Error during fix process:", error.message);
process.exit(1)
}