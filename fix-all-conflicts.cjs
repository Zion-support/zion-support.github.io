#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Check if file has merge conflicts
    if (!content.includes("<<<<<<< HEAD")) {
      return false;
    }

    console.log(`Fixing merge conflicts in: ${filePath}`);

    // Remove all merge conflict markers and keep the HEAD version
    content = content.replace(
      /<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g,
      "$1",
    );

    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, "");
    content = content.replace(/=======\n/g, "");
    content = content.replace(/>>>>>>> [^\n]+\n/g, "");

    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, "\n\n");

    // Write the cleaned content back
    fs.writeFileSync(filePath, content, "utf8");

    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync(
      'grep -r "<<<<<<< HEAD" --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" . | cut -d: -f1 | sort -u',
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
  console.log("Starting merge conflict resolution...");

  const filesWithConflicts = findFilesWithConflicts();

  if (filesWithConflicts.length === 0) {
    console.log("No files with merge conflicts found.");
    return;
  }

  console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach((file) => console.log(`  - ${file}`));

  let fixedCount = 0;

  filesWithConflicts.forEach((file) => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed merge conflicts in ${fixedCount} files.`);

  if (fixedCount > 0) {
    console.log("Running linter to check for remaining issues...");
    try {
      execSync("npm run lint", { stdio: "inherit" });
      console.log("Linting completed successfully!");
    } catch (error) {
      console.log("Linting found some issues that need manual fixing.");
    }
  }
}

main();
