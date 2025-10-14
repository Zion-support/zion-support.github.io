const fs = require("fs");
const path = require("path");

// Files that need hyphen fixes
const filesToFix = [
  "app/global-error.tsx",
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

    // Get the base name without extension and convert hyphens to camelCase
    const baseName = path.basename(filePath, path.extname(filePath));
    const camelCaseName = baseName.replace(/-([a-z])/g, (g) =>
      g[1].toUpperCase(),
    );

    // Fix function names with hyphens
    content = content.replace(
      new RegExp(`export default function ${baseName}\\(\\)`, "g"),
      `export default function ${camelCaseName}()`,
    );
    content = content.replace(
      new RegExp(`const ${baseName}:`, "g"),
      `const ${camelCaseName}:`,
    );

    // Fix specific issues
    if (filePath.includes("medical-records-manager")) {
      content = content.replace(/""([^"]*);""/g, '"$1"');
    }

    if (filePath.includes("support/page.tsx")) {
      content = content.replace(/,\s*}/g, "\n  }");
    }

    if (
      filePath.includes("types/next.d.ts") ||
      filePath.includes("vite-env.d.ts")
    ) {
      content = content.replace(
        /declare module "next"\(\s*\)/g,
        'declare module "next"',
      );
    }

    // Fix specific function names
    content = content.replace(/global-error/g, "globalError");
    content = content.replace(/not-found/g, "notFound");
    content = content.replace(/page-backup/g, "pageBackup");
    content = content.replace(/page-optimized/g, "pageOptimized");
    content = content.replace(/service-template/g, "serviceTemplate");
    content = content.replace(/sitemap-page/g, "sitemapPage");
    content = content.replace(
      /performanceMonitoring\.test/g,
      "performanceMonitoringTest",
    );
    content = content.replace(
      /accessibilityEnhancer/g,
      "accessibilityEnhancer",
    );
    content = content.replace(/errorHandler/g, "errorHandler");
    content = content.replace(/testRunner/g, "testRunner");

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log("Finished fixing hyphen names");
