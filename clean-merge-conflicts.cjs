const fs = require("fs");
const path = require("path");

// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Remove merge conflict markers and keep the HEAD version
    content = content
      .replace(/<<<<<<< HEAD\n?/g, "")
      .replace(/=======\n?/g, "")
      .replace(/>>>>>>> [^\n]+\n?/g, "")
      // Clean up any extra whitespace
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/\s+$/gm, "");

    // Write the cleaned content back to the file
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Cleaned merge conflicts: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const appDir = path.join(__dirname, "app");
const filesWithConflicts = [];

function findFilesWithConflicts(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFilesWithConflicts(filePath);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      try {
        const content = fs.readFileSync(filePath, "utf8");
        if (
          content.includes("<<<<<<< HEAD") ||
          content.includes("=======") ||
          content.includes(">>>>>>>")
        ) {
          filesWithConflicts.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  }
}

// Find all files with merge conflicts
findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

// Clean all files with merge conflicts
let cleanedCount = 0;
for (const file of filesWithConflicts) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(
  `Cleaned merge conflicts in ${cleanedCount} out of ${filesWithConflicts.length} files`,
);
