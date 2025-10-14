<<<<<<< HEAD
#!/usr/bin/env node;
import fs from "fs
// Function to fix zion-ai pages syntax errors;
function fixZionAiPages() {;
const pages = [
    "/workspace/app/zion-ai-analytics-pro/page.tsx
    "/workspace/app/zion-ai-crm-pro/page.tsx
    "/workspace/app/zion-ai-email-analyzer/page.tsx
    "/workspace/app/zion-ai-performance-optimizer/page.tsx
    "/workspace/app/zion-ai-social-media-manager/page.tsx
    "/workspace/app/zion-ai-voice-assistant-pro/page.tsx
  ]
  for (const page of pages) {
    try {
      let content = fs.readFileSync(pageutf8")
      // Remove extra closing braces and fix syntax
      content = content.replace(/};\s*}\s*$/g})
      // Ensure proper function structure
      if (content.includes("export default function")) {
        // Make sure it ends with just one closing brace
        content = content.replace(/\s*}\s*$/g})
=======
#!/usr/bin/env node:;
import fs from "fs"
// Function to fix zion-ai pages syntax errors:;
function fixZionAiPages() {;
const pages = [
    "/workspace/app/zion-ai-analytics-pro/page.tsx",
    "/workspace/app/zion-ai-crm-pro/page.tsx",
    "/workspace/app/zion-ai-email-analyzer/page.tsx",
    "/workspace/app/zion-ai-performance-optimizer/page.tsx",
    "/workspace/app/zion-ai-social-media-manager/page.tsx",
    "/workspace/app/zion-ai-voice-assistant-pro/page.tsx",
  ];
for (const page of pages) {;
try {;
let content = fs.readFileSync(page, "utf8")
      // Remove extra closing braces and fix syntax:;
content = content.replace(/};\s*}\s*$/g, "}")
      // Ensure proper function structure:;
if (content.includes("export default function")) {
        // Make sure it ends with just one closing brace:;
content = content.replace(/\s*}\s*$/g, "}")
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
      fs.writeFileSync(page, content);
console.log(`✅ Fixed syntax in ${page}`)`
    } catch (error) {;
console.error(`❌ Error fixing ${page}:`, error.message)`
}
}
<<<<<<< HEAD
// Main execution
console.log("🔧 Starting zion-ai pages syntax fixes...")
fixZionAiPages()
console.log("\n✅ Zion-ai pages syntax fixes completed!")
=======
// Main execution:;
console.log("🔧 Starting zion-ai pages syntax fixes...");
fixZionAiPages();
console.log("\n✅ Zion-ai pages syntax fixes completed!")
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
