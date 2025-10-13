#!/usr/bin/env node

import fs from "fs";
import path from "path";

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split("\n");
    const newLines = [];
    let inConflict = false;
    let keepHead = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("")) {
        inConflict = true;
        keepHead = true;
        modified = true;
        continue;
      } else if (line.startsWith("")) {
        keepHead = false;
        continue;
      } else if (line.startsWith("        inConflict = false;
        keepHead = false;
        continue;
      }

      if (!inConflict || keepHead) {
        newLines.push(line);
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, newLines.join("\n"));
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];

  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!["node_modules", ".git", "dist", "build"].includes(item)) {
          walkDir(fullPath);
        }
      } else if (
        stat.isFile() &&
        (item.endsWith(".tsx") || item.endsWith(".ts") || item.endsWith(".js"))
      ) {
        const content = fs.readFileSync(fullPath, "utf8");
        if (
          content.includes("") ||
          content.includes("") ||
          content.includes("        ) {
          files.push(fullPath);
        }
      }
    }
  }

  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || "/workspace";
console.log(`Scanning for merge conflicts in: ${workspaceDir}`);

const filesWithConflicts = findFilesWithConflicts(workspaceDir);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
