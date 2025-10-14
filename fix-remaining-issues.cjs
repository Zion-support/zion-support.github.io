const fs = require("fs");
const path = require("path");

// Files with unused imports that need to be fixed
const filesWithUnusedImports = [
  "app/custom-software/page.tsx",
  "app/cybersecurity-solutions/page.tsx",
  "app/cybersecurity/page.tsx",
  "app/database-management/page.tsx",
  "app/enterprise/page.tsx",
  "app/it-infrastructure/page.tsx",
  "app/it-services/page.tsx",
  "app/it-solutions/page.tsx",
  "app/mobile-development/page.tsx",
  "app/network-infrastructure/page.tsx",
  "app/page.tsx",
  "app/quantum-computing/page.tsx",
  "app/support/page.tsx",
  "app/tutorials/page.tsx",
  "main.tsx",
];

// Files with test imports that need to be fixed
const testFiles = [
  "app/penetration-testing/page.tsx",
  "app/test-simple/page.tsx",
];

function fixUnusedImports(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, "utf8");

    // Remove CheckCircleIcon import
    content = content.replace(/,\s*CheckCircleIcon\s*,?/g, ",");
    content = content.replace(/CheckCircleIcon\s*,?\s*/g, "");

    // Remove Circle import
    content = content.replace(/,\s*Circle\s*,?/g, ",");
    content = content.replace(/Circle\s*,?\s*/g, "");

    // Remove Clock import
    content = content.replace(/,\s*Clock\s*,?/g, ",");
    content = content.replace(/Clock\s*,?\s*/g, "");

    // Remove registration import
    content = content.replace(/,\s*registration\s*,?/g, ",");
    content = content.replace(/registration\s*,?\s*/g, "");

    // Clean up any double commas
    content = content.replace(/,\s*,/g, ",");
    content = content.replace(/{\s*,/g, "{");
    content = content.replace(/,\s*}/g, "}");

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function fixTestFiles(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, "utf8");

    // Remove test imports
    content = content.replace(
      /import\s*{\s*describe,\s*test,\s*expect,\s*it,\s*beforeEach\s*}\s*from\s*['"]@jest\/globals['"];?\s*/g,
      "",
    );

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed test imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix unused imports
filesWithUnusedImports.forEach(fixUnusedImports);

// Fix test files
testFiles.forEach(fixTestFiles);

console.log("Finished fixing remaining issues");
