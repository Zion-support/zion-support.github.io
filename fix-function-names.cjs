const fs = require("fs");
const path = require("path");

// Find all page files with invalid function names
function findInvalidFunctionNames(dir) {
  const invalidFiles = [];

  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith(".tsx") && file === "page.tsx") {
        try {
          const content = fs.readFileSync(filePath, "utf8");
          // Check if function name starts with a number
          if (
            content.includes("export default function 5") ||
            content.includes("export default function 6") ||
            content.includes("export default function 7") ||
            content.includes("export default function 8") ||
            content.includes("export default function 9")
          ) {
            invalidFiles.push(filePath);
          }
        } catch (e) {
          // File might be corrupted
        }
      }
    });
  }

  scanDirectory(dir);
  return invalidFiles;
}

// Fix function names that start with numbers
function fixFunctionName(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Replace function names that start with numbers
  const fixedContent = content
    .replace(
      /export default function 5(\w+)/g,
      "export default function Five$1",
    )
    .replace(/export default function 6(\w+)/g, "export default function Six$1")
    .replace(
      /export default function 7(\w+)/g,
      "export default function Seven$1",
    )
    .replace(
      /export default function 8(\w+)/g,
      "export default function Eight$1",
    )
    .replace(
      /export default function 9(\w+)/g,
      "export default function Nine$1",
    );

  fs.writeFileSync(filePath, fixedContent);
  console.log("Fixed function name in: " + filePath);
}

// Find and fix all files with invalid function names
const invalidFiles = findInvalidFunctionNames("/workspace/app");

console.log(
  "Found " + invalidFiles.length + " files with invalid function names",
);

invalidFiles.forEach((filePath) => {
  fixFunctionName(filePath);
});

console.log("All function names have been fixed!");
