const fs = require("fs");
const path = require("path");

// Utility files that need fixing
const utilityFiles = [
  "app/utils/dynamic.tsx",
  "app/utils/errorHandler.tsx",
  "app/utils/image.tsx",
  "app/utils/link.tsx",
  "app/utils/navigation.tsx",
  "app/utils/testRunner.tsx",
];

function fixUtilityFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, "utf8");

    // Get the base name without extension
    const baseName = path.basename(filePath, path.extname(filePath));

    // Fix function names that include file extensions
    content = content.replace(
      new RegExp(`export const ${baseName}\\.tsx = \\(\\) =>`, "g"),
      `export const ${baseName} = () =>`,
    );
    content = content.replace(
      new RegExp(`export const ${baseName}\\.ts = \\(\\) =>`, "g"),
      `export const ${baseName} = () =>`,
    );
    content = content.replace(
      new RegExp(`export const ${baseName}\\.js = \\(\\) =>`, "g"),
      `export const ${baseName} = () =>`,
    );
    content = content.replace(
      new RegExp(`export const ${baseName}\\.jsx = \\(\\) =>`, "g"),
      `export const ${baseName} = () =>`,
    );

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all utility files
utilityFiles.forEach(fixUtilityFile);

console.log("Finished fixing utility files");
