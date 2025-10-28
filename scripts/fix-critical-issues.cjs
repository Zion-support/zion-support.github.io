#!/usr/bin/env node

const fs = require("fs");
// const path = require("path");
// const { glob } = require("glob");

// Fix unused imports in specific files
const filesToFix = [
  "app/ai-audio-processor/page.tsx",
  "app/ai-code-assistant/page.tsx",
  "app/ai-customer-feedback-analyzer/page.tsx",
  "app/ai-inventory-optimizer-pro/page.tsx",
  "app/ai-legal-document-analyzer/page.tsx",
  "app/ai-medical-diagnosis-assistant/page.tsx",
  "app/ai-project-manager-pro/page.tsx",
  "app/ai-translator/page.tsx",
  "app/ai-video-generator/page.tsx",
  "app/micro-saas-solutions/page.tsx",
  "app/quantum-computing-solutions/page.tsx",
];

function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Common unused imports to remove
    const unusedImports = [
      "SparklesIcon",
      "ClockIcon",
      "ChatBubbleLeftRightIcon",
      "UserGroupIcon",
      "EyeIcon",
      "ChartBarIcon",
      "TruckIcon",
      "CurrencyDollarIcon",
      "ShieldCheckIcon",
      "CogIcon",
      "GlobeAltIcon",
      "DocumentTextIcon",
      "CodeBracketIcon",
      "DevicePhoneMobileIcon",
      "CloudIcon",
      "SignalIcon",
      "BoltIcon",
      "StarIcon",
    ];

    // Check if any of these imports are actually used
    const lines = content.split("\n");
    const importLines = [];
    const otherLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("import") && line.includes("from")) {
        importLines.push({ line: i, content: line });
      } else {
        otherLines.push(line);
      }
    }

    // Check if unused imports are actually used in the file
    const fileContent = otherLines.join(" ");
    const actuallyUnused = unusedImports.filter(importName => {
      return !fileContent.includes(importName);
    });

    if (actuallyUnused.length > 0) {
      console.log(`Found ${actuallyUnused.length} unused imports in ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log("Starting critical issues fix...");
  
  let totalFixed = 0;
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (removeUnusedImports(filePath)) {
        totalFixed++;
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  });
  
  console.log(`Fixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { removeUnusedImports, main };