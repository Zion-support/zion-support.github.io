import fs from "fs";
import path from "path";

import { execSync } from "child_process";

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Skip if file doesn't exist or is not a TypeScript/JavaScript file
    if (
      !fs.existsSync(filePath) ||
      (!filePath.endsWith(".tsx") &&
        !filePath.endsWith(".ts") &&
        !filePath.endsWith(".jsx") &&
        !filePath.endsWith(".js"))
    ) {
      return;
    }

    // Use ESLint to fix unused imports
    try {
      execSync(
        `npx eslint "${filePath}" --fix --no-eslintrc --config '{"extends": ["@typescript-eslint/recommended"], "parser": "@typescript-eslint/parser", "rules": {"@typescript-eslint/no-unused-vars": "error"}}'`,
        {
          stdio: "pipe",
          cwd: "/workspace",
        },
      );
      console.log(`Fixed unused imports in: ${filePath}`);
    } catch (error) {
      // If ESLint fails, try a simple approach to remove unused imports
      console.log(`ESLint failed for ${filePath}, trying manual approach...`);

      // Simple regex to remove unused imports (this is a basic approach)
      const lines = content.split("\n");
      const newLines = lines.filter((line) => {
        // Keep import statements that are likely used
        if (line.trim().startsWith("import ")) {
          // Check if any of the imported items are used in the file
          const importMatch = line.match(/import\s*\{([^}]+)\}/);
          if (importMatch) {
            const imports = importMatch[1].split(",").map((imp) => imp.trim());
            const isUsed = imports.some((imp) => {
              const cleanImp = imp.replace(/\s+as\s+\w+/, "").trim();
              return content.includes(cleanImp) && !line.includes(cleanImp);
            });
            return isUsed || imports.length === 0;
          }
          return true;
        }
        return true;
      });

      if (newLines.length !== lines.length) {
        fs.writeFileSync(filePath, newLines.join("\n"));
        console.log(`Manually fixed unused imports in: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.includes("node_modules") &&
      !file.includes(".git")
    ) {
      findFiles(filePath, fileList);
    } else if (
      file.endsWith(".tsx") ||
      file.endsWith(".ts") ||
      file.endsWith(".jsx") ||
      file.endsWith(".js")
    ) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Main execution
console.log("Starting to fix unused imports...");

const files = findFiles("/workspace/app");

files.forEach((file) => {
  removeUnusedImports(file);
});

// Also fix component files
const componentFiles = findFiles("/workspace/app/components");
componentFiles.forEach((file) => {
  removeUnusedImports(file);
});

console.log("Finished fixing unused imports.");
