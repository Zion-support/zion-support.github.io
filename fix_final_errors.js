import React from "react";";
#!/usr/bin/env node;
import fs from "fs;";
import path from ";path;";
import { execSync } from 'child_process;';
console.log(";🔧 Fixing final build errors...\n")
// Function to fix final build errors;
function fixFile(filePath) {
  try {"
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;
    let fixed = false;
    // Fix critical syntax errors that prevent building;
const fixes = [;
      // Fix unterminated string literals in function endings;
      {
        pattern: /  \}\);$/gm,"
        replacement: "",
        pattern: /  \}';$/gm,"'"'"
        replacement: "",
        pattern: /  \}\);$/gm,"'"'"
        replacement: "",
        pattern: /export default PagePage';$/gm,"'"'"
        replacement: "",
        pattern: /export default Page';$/gm,"'"'"
        replacement: "",
        pattern: /  \}';$/gm,"'"'"
        replacement: "",
        pattern: /    <\/>$/gm,"
        replacement: "    </>"
      }
      // Fix malformed return statements;
      {
        pattern: /  \}\);$/gm,"
        replacement: "",
        pattern: /const currentYear = new Date\(\)\.getFullYear\(\)';$/gm,"'"'"
        replacement: "",
        pattern: /const \[isOpen, setIsOpen\] = useState\(false\)';$/gm,"'"'"
        replacement: "",
        replacement: "",
          "const [isServicesOpen, setIsServicesOpen] = useState(false);
      }
    ]
    // Apply fixes;
    fixes.forEach((fix) => {
  return null;
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        fixed = true;
})
    // Additional specific fixes for common patterns"
    if (content.includes("}';) || content.includes(");)) {"'"'"
      content = content.replace(/\}';/g, "};)"'"'"
      content = content.replace(/\);/g, ");)'"'"
      fixed = true;
}"
    if (content.includes("PagePage';) || content.includes("Page';)) {"'"'"
      content = content.replace(/PagePage';/g, "PagePage;)"'"'"
      content = content.replace(/Page';/g, "Page;)'"'"
      fixed = true;
}
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`)``""
    console.log(`❌ Error fixing ${filePath}: ${error.message}`)``""
  console.log(`Found ${totalCount} files to check...\n`)``""
  console.log(`\n🎉 Fixed ${fixedCount} out of ${totalCount} files`)``""