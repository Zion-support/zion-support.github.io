const fs = require("fs");
const path = require("path");

// Files that need specific fixes
const filesToFix = [
  "app/components/Navigation-backup.tsx",
  "app/data/services.ts",
  "app/data/servicesData.ts",
  "app/global-error.tsx",
  "app/medical-records-manager/page.tsx",
  "app/not-found.tsx",
  "app/page-backup.tsx",
  "app/page-optimized.tsx",
  "app/pages/5GSolutionsPage.tsx",
  "app/service-template.tsx",
  "app/sitemap-page.tsx",
  "app/support/page.tsx",
  "app/tutorials/page.tsx",
  "app/types/next.d.ts",
  "app/utils/__tests__/performanceMonitoring.test.ts",
  "app/utils/accessibilityEnhancer.tsx",
  "app/utils/dynamic.tsx",
  "app/utils/errorHandler.tsx",
  "app/utils/image.tsx",
  "app/utils/link.tsx",
  "app/utils/navigation.tsx",
  "app/utils/testRunner.tsx",
  "vite-env.d.ts",
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, "utf8");

    // Fix common syntax errors
    content = content.replace(
      /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{/g,
      "export default function $1() {",
    );
    content = content.replace(
      /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*=>/g,
      "export default function $1() {",
    );
    content = content.replace(
      /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>/g,
      "const $1: React.FC = () =>",
    );
    content = content.replace(
      /const\s+(\w+)\s*=\s*\(\s*\)\s*=>/g,
      "const $1 = () =>",
    );

    // Fix unterminated string literals
    content = content.replace(/"([^"]*);""/g, '"$1"');
    content = content.replace(/""([^"]*);""/g, '"$1"');
    content = content.replace(/""([^"]*);/g, '"$1"');

    // Fix malformed function declarations
    content = content.replace(
      /function\s+(\w+)\s*\(\s*\)\s*=>/g,
      "function $1() {",
    );
    content = content.replace(
      /function\s+(\w+)\s*\(\s*\)\s*{/g,
      "function $1() {",
    );

    // Fix numeric literal issues
    content = content.replace(/5GSolutionsPage/g, "FiveGSolutionsPage");

    // Fix missing commas
    content = content.replace(/React\.FC\s*\(\s*\)/g, "React.FC = ()");
    content = content.replace(/React\.FC\s*=>/g, "React.FC = () =>");

    // Fix specific issues
    if (filePath.includes("medical-records-manager")) {
      content = content.replace(/""([^"]*);""/g, '"$1"');
    }

    if (filePath.includes("tutorials")) {
      content = content.replace(/<className=/g, "<div className=");
    }

    if (filePath.includes("support")) {
      content = content.replace(/,\s*}/g, "\n  }");
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log("Finished fixing final errors");
