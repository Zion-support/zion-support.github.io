#!/usr/bin/env node

import fs from "fs";

// Function to fix semicolons in arrays
function fixArraySemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Fix semicolons after arrays in object properties
    content = content.replace(/:\s*\[[^\]]+\];/g, (match) => {
      return match.replace(";", "");
    });

    fs.writeFileSync(filePath, content);
    console.log(`Fixed array semicolons in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const files = [
    "src/ai-ab-testing/page.tsx",
    "src/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx",
    "src/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx",
    "src/blog/ai-enterprise-transformation-2025/page.tsx",
    "src/blog/ai-innovation-labs-product-development-2025/page.tsx",
    "src/enterprise/page.tsx",
    "src/gdpr/page.tsx",
    "src/marketing-tools/page.tsx",
    "src/security/page.tsx",
    "src/system-status/page.tsx",
    "src/test-page.tsx",
  ];

  console.log("Fixing array semicolons...");

  let fixedCount = 0;
  files.forEach((file) => {
    if (fs.existsSync(file)) {
      if (fixArraySemicolons(file)) {
        fixedCount++;
      }
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main();
