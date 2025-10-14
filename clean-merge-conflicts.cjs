const fs = require("fs");
const path = require("path");

// Function to clean merge conflict markers
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Remove merge conflict markers
    content = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, "")
      .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, "")
      .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, "")
      .replace(/<<<<<<< HEAD/g, "")
      .replace(/=======/g, "")
      .replace(/>>>>>>> [^\n]+/g, "")
      // Clean up extra newlines
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/\n\s*$/g, "\n");

    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and clean all files with merge conflicts
function cleanAllMergeConflicts() {
  const appDir = path.join(__dirname, "app");
  let cleanedCount = 0;
  let errorCount = 0;

  function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (
        file.endsWith(".tsx") ||
        file.endsWith(".ts") ||
        file.endsWith(".jsx") ||
        file.endsWith(".js")
      ) {
        if (cleanMergeConflicts(filePath)) {
          cleanedCount++;
        } else {
          errorCount++;
        }
      }
    }
  }

  // Clean app directory
  walkDir(appDir);

  // Clean root files
  const rootFiles = ["App.tsx", "main.tsx"];
  for (const file of rootFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      } else {
        errorCount++;
      }
    }
  }

  console.log(`\nCleaned ${cleanedCount} files`);
  console.log(`Errors in ${errorCount} files`);
}

// Run the cleanup
cleanAllMergeConflicts();
