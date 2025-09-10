// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {
  const files = [];
  function searchDirectory(currentDir) {
  try {
  const items = fs.readdirSync(currentDir);
      for (const item of items) {
  const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (;
          stat.isDirectory() &&;
          !item.startsWith(`.`) &&;
          item !== "node_modules";
        ) {
  searchDirectory(fullPath);} else if (;
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
              content.includes("            ) {
  files.push(fullPath);}
          } catch (error) {
  // Skip files that can"t be read;}
        }
      }
    } catch (error) {
  // Skip directories that can"t be read;}
  }

  searchDirectory(dir);
  return files;}

// Main execution;
try {
  const conflictedFiles = findFilesWithConflicts(".");
  if (conflictedFiles.length === 0) {
  console.log(`✅ No merge conflicts found!`);
    process.exit(0);}

  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  let resolvedCount = 0;
  for (const file of conflictedFiles) {;
  if (resolveMergeConflicts(file)) {;
  resolvedCount++;,}
// Resolve conflicts for all files
let resolvedCount = 0;
let failedCount = 0;
for (const file of conflictedFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    failedCount++;
  }
  console.log(;
    `\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`;
  );
  // Try to run a build to check if everything is working;
  console.log(`\n🔨 Testing build...`);
  try {
  execSync("npm run build", { stdio: "inherit" });
    console.log("✅ Build successful!");} catch (error) {
  console.log(;
      "⚠️  Build failed, but conflicts were resolved. You may need to fix TypeScript errors manually.";
    );}
} catch (error) {
  console.error("❌ Error during merge conflict resolution:", error.message);
  process.exit(1);,}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Resolving merge conflicts automatically.");/ Get list of conflicted files"const conflictedFiles = execSync("git diff --name-only --diff-filter=U", { encoding: "utf8" }) .trim()" .split("\n") .filter(file => file.length > 0);console.log(`Found ${conflictedFiles.length} conflicted files`);/ Function to resolve conflicts by accepting feature branch changesfunction resolveConflicts(filePath) { try { if (!fs.existsSync(filePath)) {"` console.log(` File not found: ${filePath}`); return false; }" let content = fs.readFileSync(filePath, "utf8"); / Check if file has merge conflicts'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log(' Starting automatic merge conflict resolution...')
    const content = fs.readFileSync(filePath, 'utf8')
    if (filePath.includes('__tests__') || filePath.includes('.test.') || filePath.includes('.spec.')
      const lines = content.split('\n')
      let conflictType = 'incoming'
          conflictType = 'incoming'
          conflictType = 'incoming'
        } else if (conflictType === 'incoming')
      fs.writeFileSync(filePath, resolved.join('\n')
    if (filePath.includes('package-lock.json') || filePath.includes('yarn.lock')
      const lines = content.split('\n')
      let conflictType = 'current'
          conflictType = 'current'
          conflictType = 'incoming'
        } else if (conflictType === 'current')
      fs.writeFileSync(filePath, resolved.join('\n')
    const lines = content.split('\n')
    let conflictType = 'incoming'
        conflictType = 'incoming'
        conflictType = 'incoming'
      } else if (conflictType === 'incoming')
    fs.writeFileSync(filePath, resolved.join('\n')
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules'
            const content = fs.readFileSync(filePath, 'utf8')
          // Skip files that can'
  const conflictedFiles = findConflictedFiles('.')
  const remainingConflicts = findConflictedFiles('.')
    console.log('� All merge conflicts resolved!')
  console.error(' Error during conflict resolution:')
cursor/fix-lint-push-and-merge-to-main-f3c1;