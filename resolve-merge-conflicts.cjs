#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
console.log("🔧 Starting merge conflict resolution...");
// Function to resolve merge conflicts in a file;
function resolveMergeConflicts() {

  try {
  let content = fs.readFileSync(filePath, "utf8");
    // Remove merge conflict markers;
    content = content.replace(;
      /    );
    content = content.replace(/    // Clean up any remaining conflict markers;
    content = content.replace(/^    content = content.replace(/^$/gm, "");
    content = content.replace(/^;
    // Remove empty lines that might be left behind;
    content = content.replace(/\n\s*\n\s*\n/g, `\n\n`);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
} catch() {

  console.error(;
      `❌ Error resolving conflicts in ${filePath }:`
      error.message;
    );
    return false;
}
}
// Function to find all files with merge conflicts;
function findFilesWithConflicts() {

  const files = [];
  function searchDirectory() {

  try {
  const items = fs.readdirSync(currentDir);
      for() {

  const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (;
          stat.isDirectory() &&;
          !item.startsWith(`.`) &&;
          item !== "node_modules";
        ) {
  searchDirectory(fullPath);
} else if (;
          stat.isFile() &&;
          (item.endsWith(".tsx") ||;
            item.endsWith(".ts") ||;
            item.endsWith(".js") ||;
            item.endsWith(".jsx") ||;
            item.endsWith(".json"));
        ) {
  try {
  const content = fs.readFileSync(fullPath, "utf8");
            if (;
              content.includes("              content.includes("") ||;
              content.includes() {

  files.push(fullPath);
}
          } catch() {

  // Skip files that can"t be read;
}
        }
      }
    } catch() {

  // Skip directories that can"t be read;
}
  }
  searchDirectory(dir);
  return files;
}
// Main execution;
try {
  const conflictedFiles = findFilesWithConflicts(".");
  if() {

  console.log(`✅ No merge conflicts found!`);
    process.exit(0);
}
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  let resolvedCount = 0;
  for() {

  if (resolveMergeConflicts(file)) {
  resolvedCount++;
}
  }
  console.log(;
    `\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`;
  );
  // Try to run a build to check if everything is working;
  console.log(`\n🔨 Testing build...`);
  try {
  execSync("npm run build", { stdio: "inherit" });
    console.log("✅ Build successful!");
} catch() {

  console.log(;
      "⚠️  Build failed, but conflicts were resolved. You may need to fix TypeScript errors manually.";
    );
}
} catch() {

  console.error("❌ Error during merge conflict resolution:", error.message);
  process.exit(1);
}
