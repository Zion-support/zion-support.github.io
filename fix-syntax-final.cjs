const fs = require("fs");
const path = require("path");

// Files that need syntax fixes
const filesToFix = [
  "app/data/services.ts",
  "app/data/servicesData.ts",
  "app/global-error.tsx",
  "app/medical-records-manager/page.tsx",
  "app/not-found.tsx",
  "app/page-backup.tsx",
  "app/page-optimized.tsx",
  "app/service-template.tsx",
  "app/sitemap-page.tsx",
  "app/support/page.tsx",
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

    // Fix function declaration syntax
    content = content.replace(
      /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{/g,
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

    // Fix specific syntax errors
    if (
      filePath.includes("services.ts") ||
      filePath.includes("servicesData.ts")
    ) {
      content = content.replace(
        /export\s+const\s+(\w+)\s*=\s*\(\s*\)\s*=>/g,
        "export const $1 = () =>",
      );
    }

    if (
      filePath.includes("global-error.tsx") ||
      filePath.includes("not-found.tsx") ||
      filePath.includes("page-backup.tsx") ||
      filePath.includes("page-optimized.tsx") ||
      filePath.includes("service-template.tsx") ||
      filePath.includes("sitemap-page.tsx")
    ) {
      content = content.replace(
        /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{/g,
        "export default function $1() {",
      );
    }

    if (filePath.includes("support/page.tsx")) {
      content = content.replace(/,\s*}/g, "\n  }");
    }

    if (filePath.includes("medical-records-manager")) {
      content = content.replace(/""([^"]*);""/g, '"$1"');
    }

    if (filePath.includes("types/next.d.ts")) {
      content = content.replace(
        /declare\s+module\s+(\w+)\s*\(\s*\)\s*{/g,
        'declare module "$1" {',
      );
    }

    if (filePath.includes("utils/")) {
      content = content.replace(
        /export\s+const\s+(\w+)\s*=\s*\(\s*\)\s*=>/g,
        "export const $1 = () =>",
      );
    }

    if (filePath.includes("vite-env.d.ts")) {
      content = content.replace(
        /declare\s+module\s+(\w+)\s*\(\s*\)\s*{/g,
        'declare module "$1" {',
      );
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log("Finished fixing syntax errors");
