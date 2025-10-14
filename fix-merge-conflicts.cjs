#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Check if file has merge conflict markers
    if (
      !content.includes("<<<<<<< HEAD") ||
      !content.includes("=======") ||
      !content.includes(">>>>>>>")
    ) {
      return false; // No conflicts
    }

    console.log(`Fixing merge conflicts in: ${filePath}`);

    // Split by conflict markers and take the newer version (after =======)
    const parts = content.split(/<<<<<<< HEAD[\s\S]*?=======\s*/);
    let resolved = parts[0]; // Keep content before first conflict

    // For each conflict, take the part after ======= and before >>>>>>>
    const conflictMatches = content.match(
      /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>>/g,
    );

    if (conflictMatches) {
      conflictMatches.forEach((match) => {
        const afterEquals = match.split("=======")[1];
        const beforeEnd = afterEquals.split(">>>>>>>")[0];
        resolved += beforeEnd;
      });
    }

    // Add any remaining content after the last conflict
    const lastConflictIndex = content.lastIndexOf(">>>>>>>");
    if (lastConflictIndex !== -1) {
      const afterLastConflict = content.substring(lastConflictIndex + 7);
      resolved += afterLastConflict;
    }

    // Clean up any remaining conflict markers
    resolved = resolved.replace(
      /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>>/g,
      "",
    );
    resolved = resolved.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>>/g, "");

    fs.writeFileSync(filePath, resolved);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules"
      ) {
        traverse(fullPath);
      } else if (
        stat.isFile() &&
        (item.endsWith(".tsx") ||
          item.endsWith(".ts") ||
          item.endsWith(".js") ||
          item.endsWith(".jsx"))
      ) {
        try {
          const content = fs.readFileSync(fullPath, "utf8");
          if (
            content.includes("<<<<<<< HEAD") &&
            content.includes("=======") &&
            content.includes(">>>>>>>")
          ) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution
console.log("🔍 Searching for files with merge conflicts...");
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {
  console.log("✅ No files with merge conflicts found.");
  process.exit(0);
}

console.log(`📝 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach((file) => console.log(`  - ${file}`));

console.log("\n🔧 Resolving merge conflicts...");
let fixedCount = 0;

conflictedFiles.forEach((file) => {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(
  `\n✅ Successfully fixed ${fixedCount} out of ${conflictedFiles.length} files.`,
);

if (fixedCount > 0) {
  console.log("\n🧹 Running format and lint fixes...");
  try {
    execSync("npm run format", { stdio: "inherit" });
    console.log("✅ Code formatted successfully.");
  } catch (error) {
    console.log("⚠️  Format command failed, continuing...");
  }

  try {
    execSync("npm run lint:fix", { stdio: "inherit" });
    console.log("✅ Lint fixes applied successfully.");
  } catch (error) {
    console.log("⚠️  Lint fix command failed, continuing...");
  }
}

console.log("\n🎉 Merge conflict resolution complete!");
