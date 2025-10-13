const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Remove merge conflict markers
    if (
      content.includes("<<<<<<<") ||
      content.includes(">>>>>>>")
    ) {
      content = content.replace(/<<<<<<<[\s\S]*?>>>>>>>/g, "");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Cleaned merge conflicts: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function findAndCleanFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      cleanedCount += findAndCleanFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
    }
  });

  return cleanedCount;
}

// Main execution
const projectRoot = process.cwd();
console.log('Starting cleanup of merge conflicts...');
const cleanedCount = findAndCleanFiles(projectRoot);
console.log(`Cleanup completed. ${cleanedCount} files were cleaned.`);