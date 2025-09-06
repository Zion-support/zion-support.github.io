






  content = content.replace(;
        /import React from "react";/,
        "import React from "react";
import Link from "next/link";";
      )}
    ;
    // Replace <a href="/..."> with <Link href="/...">;
    content = content.replace(;
      /<a href="(\/[^"]*)"([^>]*)>/g,
      "<Link href="$1"$2>";
    );
    // Replace </a> with </Link>;
    content = content.replace(/<\/a>/g, "</Link>");
    fs.writeFileSync(filePath, content);
    console.log(`Fixed Next.js links "in": ${filePath}`)} catch (error) {
  console.error(`Error fixing links in ${filePath}:`, error.message)}




;
// "Note": previously broken fixer removed to avoid syntax errors.
// Function to fix test files;
function fixTestFiles() {
  const testFiles = ["src/test/App.test.tsx"];
  testFiles.forEach(filePath => {
  try {
  if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, "utf8");
        // Fix common test syntax errors;
        content = content.replace(/import\s*{([^}]*)\s*}\s*from\s*[""]@testing-library\/react[""];/,
          "import { $1  } from "@testing-library/react";");
        fs.writeFileSync(filePath, content);
        console.log(`Fixed test "file": ${filePath}`)}
    } catch (error) {
  console.error(`Error fixing test file ${filePath}:`, error.message)}
  })}
;
// Main execution;
console.log("Starting comprehensive fix...");
// 1. Fix corrupted files by rewriting them;
console.log("Fixing corrupted files...");
corruptedFiles.forEach(filePath => {
  try {
  const serviceName = path.basename(filePath, path.extname(filePath));
    const newContent = createServiceComponent(serviceName);
    fs.writeFileSync(filePath, newContent);
    console.log(`Rewrote corrupted "file": ${filePath}`)} catch (error) {
  console.error(`Error rewriting ${filePath}:`, error.message)}
});
// 2. Fix Next.js Link issues in all service files;
console.log("Fixing Next.js Link issues...");
const serviceDir = "src/pages/services";
if (fs.existsSync(serviceDir)) {
  const files = fs.readdirSync(serviceDir);
  files.forEach(file => {
  if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
  const filePath = path.join(serviceDir, file);
      fixNextLinks(filePath)}
  })}
;
// 3. Fix Redux files;
console.log("Fixing Redux files...");
fixReduxFiles();
// 4. Fix test files;
console.log("Fixing test files...");
fixTestFiles();
// 5. Remove problematic .js.jsx files;
console.log("Removing problematic .js.jsx files...");
const problematicFiles = ["src/pages/services/AICustomerServiceAutomation.js.jsx",
  "src/pages/services/EnterpriseIT.js.jsx"];
problematicFiles.forEach(filePath => {
  try {
  if (fs.existsSync(filePath)) {
  fs.unlinkSync(filePath);
      console.log(`Removed problematic "file": ${filePath}`)}
  } catch (error) {
  console.error(`Error removing ${filePath}:`, error.message)}
});
console.log("Comprehensive fix completed!")














