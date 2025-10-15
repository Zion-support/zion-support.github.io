#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");

// Function to fix unused variables in a file
function fixUnusedVars(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Remove unused imports from lucide-react
    const lucideImportRegex =
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const matches = content.match(lucideImportRegex);

    if (matches) {
      matches.forEach((match) => {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(",").map((imp) => imp.trim());

        // Check which imports are actually used
        const usedImports = imports.filter((imp) => {
          const importName = imp.split(" as ")[0].trim();
          return (
            content.includes(importName) &&
            !content.includes(`'${importName}'`) &&
            !content.includes(`"${importName}"`)
          );
        });

        if (usedImports.length === 0) {
          // Remove the entire import line
          content = content.replace(match + "\n", "");
          modified = true;
        } else if (usedImports.length < imports.length) {
          // Replace with only used imports
          const newImport = `import { ${usedImports.join(", ")} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }

    // Remove unused variable declarations
    const unusedVarRegex = /^\s*const\s+(\w+)\s*=\s*[^;]+;\s*$/gm;
    const varMatches = content.match(unusedVarRegex);

    if (varMatches) {
      varMatches.forEach((match) => {
        const varName = match.match(/const\s+(\w+)\s*=/)[1];
        const varUsageRegex = new RegExp(`\\b${varName}\\b`, "g");
        const usages = content.match(varUsageRegex) || [];

        if (usages.length <= 1) {
          // Only the declaration itself
          content = content.replace(match + "\n", "");
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with unused variable errors
function findFilesWithUnusedVars() {
  try {
    const result = execSync(
      'npm run lint 2>&1 | grep "is defined but never used" | cut -d: -f1 | sort -u',
      {
        encoding: "utf8",
        cwd: process.cwd(),
      },
    );
    return result
      .trim()
      .split("\n")
      .filter((f) => f.length > 0);
  } catch (error) {
    return [];
  }
}

// Main function
function main() {
  console.log("Starting unused variable cleanup...");

  const filesWithUnusedVars = findFilesWithUnusedVars();

  if (filesWithUnusedVars.length === 0) {
    console.log("No files with unused variables found.");
    return;
  }

  console.log(
    `Found ${filesWithUnusedVars.length} files with unused variables:`,
  );
  filesWithUnusedVars.forEach((file) => console.log(`  - ${file}`));

  let fixedCount = 0;

  filesWithUnusedVars.forEach((file) => {
    if (fixUnusedVars(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed unused variables in ${fixedCount} files.`);
}

main();
