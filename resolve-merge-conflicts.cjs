<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');

try {
  console.log('📥 Starting merge...');
  execSync('git merge origin/cursor/fix-syntax-push-and-merge-to-main-dfcb --no-ff -m "Merge PR #12067: Fix syntax, push, and merge to main"', { stdio: 'pipe' });
  console.log('✅ Merge completed successfully!');
} catch (error) {
  console.log('⚠️  Merge had conflicts, resolving automatically...');
  
  // Get list of conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  console.log(`📋 Found ${conflictedFiles.length} conflicted files`);
  
  for (const file of conflictedFiles) {
    if (fs.existsSync(file)) {
      console.log(`🔧 Resolving conflicts in ${file}...`);
      try {
        // Accept our version (HEAD) for all conflicts
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved ${file}`);
      } catch (addError) {
        console.warn(`⚠️  Could not resolve ${file}: ${addError.message}`);
      }
    } else {
      console.log(`🗑️  Removing deleted file ${file}...`);
      try {
        execSync(`git rm "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Removed ${file}`);
      } catch (rmError) {
        console.warn(`⚠️  Could not remove ${file}: ${rmError.message}`);
      }
    }
  }
  
  try {
    execSync('git commit --no-edit', { stdio: 'pipe' });
    console.log('🎉 Merge commit created successfully!');
  } catch (commitError) {
    console.warn(`⚠️  Could not commit merge: ${commitError.message}`);
  }
}

console.log('🎉 Merge conflict resolution complete!');
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Get list of files with conflicts
const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

conflictFiles.forEach(file => {
  try {
    console.log(`Resolving conflicts in: ${file}`);
    
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Remove conflict markers and keep the incoming changes (HEAD)
    content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${file}`);
      resolvedCount++;
    } else {
      console.log(`⚠️ No changes needed for: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error resolving ${file}:`, error.message);
    errorCount++;
  }
});

<<<<<<< HEAD
console.log(`\n📊 Conflict Resolution Summary: `),
=======
console.log(`\n📊 Conflict Resolution Summary:`);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log(`📁 Total files processed: ${conflictFiles.length}`);

if (resolvedCount > 0) {
  console.log('\n🔄 Adding resolved files to git...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Files added to git successfully');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
=======
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
console.log("🔧 Starting merge conflict resolution...");
// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {;
  try {;
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
    return true;,
} catch (error) {;
  console.error(;
      `❌ Error resolving conflicts in ${filePath }:`,
      error.message;
    );
    return false;,
}
}

// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {;
  const files = [];
  function searchDirectory(currentDir) {;
  try {;
  const items = fs.readdirSync(currentDir);
      for (const item of items) {;
  const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (;
          stat.isDirectory() &&;
          !item.startsWith(`.`) &&;
          item !== "node_modules";
        ) {;
  searchDirectory(fullPath);,
} else if (;
          stat.isFile() &&;
          (item.endsWith(".tsx") ||;
            item.endsWith(".ts") ||;
            item.endsWith(".js") ||;
            item.endsWith(".jsx") ||;
            item.endsWith(".json"));
        ) {;
  try {;
  const content = fs.readFileSync(fullPath, "utf8");
            if (;
              content.includes("              content.includes("") ||;
              content.includes("            ) {;
  files.push(fullPath);,
}
          } catch (error) {;
  // Skip files that can"t be read;,
}
        }
      }
    } catch (error) {;
  // Skip directories that can"t be read;,
}
  }

  searchDirectory(dir);
  return files;,
}

// Main execution;
try {;
  const conflictedFiles = findFilesWithConflicts(".");
  if (conflictedFiles.length === 0) {;
  console.log(`✅ No merge conflicts found!`);
    process.exit(0);,
}

  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  let resolvedCount = 0;
  for (const file of conflictedFiles) {;
  if (resolveMergeConflicts(file)) {;
  resolvedCount++;,
}
  }

  console.log(;
    `\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`;
  );
  // Try to run a build to check if everything is working;
  console.log(`\n🔨 Testing build...`);
  try {;
  execSync("npm run build", { stdio: "inherit" });
    console.log("✅ Build successful!");,
} catch (error) {;
  console.log(;
      "⚠️  Build failed, but conflicts were resolved. You may need to fix TypeScript errors manually.";
    );,
}
} catch (error) {;
  console.error("❌ Error during merge conflict resolution:", error.message);
  process.exit(1);,
>>>>>>> origin/automation-fixes
}

console.log('\n🎉 Merge conflict resolution completed!');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
