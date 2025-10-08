const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Find all files with merge conflicts
function findConflictFiles() {
  try {
    const output = execSync(
      'grep -r "^<<<<<<<\\|^=======\\|^>>>>>>>" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.jsx" . 2>/dev/null | cut -d: -f1 | sort -u',
      { cwd: __dirname, encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
    );
    return output
      .trim()
      .split("\n")
      .filter(
        (f) =>
          f &&
          !f.includes("node_modules") &&
          !f.includes(".disabled") &&
          !f.includes("backup"),
      );
  } catch (error) {
    console.error("Error finding conflict files:", error.message);
    return [];
  }
}

// Resolve conflicts by taking the "ours" version (origin/main or latest)
function resolveConflict(content) {
  const lines = content.split("\n");
  const result = [];
  let inConflict = false;
  let inOurs = false;
  let conflictDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("<<<<<<<")) {
      inConflict = true;
      inOurs = true;
      conflictDepth++;
      continue;
    }

    if (line.startsWith("=======") && inConflict) {
      inOurs = false;
      continue;
    }

    if (line.startsWith(">>>>>>>") && inConflict) {
      conflictDepth--;
      if (conflictDepth === 0) {
        inConflict = false;
        inOurs = false;
      }
      continue;
    }

    if (!inConflict || inOurs) {
      result.push(line);
    }
  }

  return result.join("\n");
}

// Main execution
const conflictFiles = findConflictFiles();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixed = 0;
for (const file of conflictFiles) {
  const filePath = path.join(__dirname, file);
  try {
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf8");
    if (
      !content.includes("<<<<<<<") &&
      !content.includes("=======") &&
      !content.includes(">>>>>>>")
    ) {
      continue;
    }

    const resolved = resolveConflict(content);
    fs.writeFileSync(filePath, resolved, "utf8");
    console.log(`✓ Resolved: ${file}`);
    fixed++;
  } catch (error) {
    console.error(`✗ Error resolving ${file}:`, error.message);
  }
}

console.log(`\nResolved ${fixed} files`);
