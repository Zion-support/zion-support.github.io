<<<<<<< HEAD
#!/usr/bin/env node

<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Fix merge conflicts in a file
=======
// Function to fix merge conflicts in a file
>>>>>>> origin/main
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
<<<<<<< HEAD
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Clean up any remaining empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      modified = true;
    }
    
=======
    // Pattern to match merge conflict markers
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g;
    
    // Replace merge conflicts with the HEAD version (first part)
    content = content.replace(conflictPattern, (match) => {
      modified = true;
      const lines = match.split('\n');
      let result = [];
      let inHead = false;
      let inSeparator = false;
      
      for (let line of lines) {
        if (line.includes('<<<<<<< HEAD')) {
          inHead = true;
          continue;
        } else if (line.includes('=======')) {
          inHead = false;
          inSeparator = true;
          continue;
        } else if (line.includes('>>>>>>>')) {
          inSeparator = false;
          break;
        } else if (inHead && !inSeparator) {
          result.push(line);
        }
      }
      
      return result.join('\n');
    });
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
    content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
    
>>>>>>> origin/main
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    }
    
<<<<<<< HEAD
=======
    return false;
=======
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
>>>>>>> origin/main
>>>>>>> origin/main
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
<<<<<<< HEAD
=======
=======
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// Main execution
console.log('Fixing merge conflicts...');

const files = getAllFiles('./app');
files.forEach(file => {
  fixMergeConflicts(file);
});

// Fix other important files
const otherFiles = [
  './App.tsx',
  './main.tsx',
  './vite.config.ts'
];

otherFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
});

console.log('Done fixing merge conflicts!');
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
<<<<<<< HEAD
// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (['node_modules', 'dist', 'build', '.git', '.next', 'out'].includes(item)) {
          continue;
        }
        fixedCount += fixFilesInDirectory(fullPath);
      } else if (stat.isFile()) {
        // Only process TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          if (fixMergeConflicts(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
=======
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++;
        }
      }
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
  }
  
  return fixedCount;
}
<<<<<<< HEAD

// Main execution
console.log('Starting merge conflict resolution...');

// Fix files in the main directories
const directories = [
  '/workspace/app',
  '/workspace/api',
  '/workspace/hooks',
  '/workspace'
];

let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += fixFilesInDirectory(dir);
  }
}

// Also fix specific files in the root
const rootFiles = [
  'App.tsx',
  'App_minimal.tsx',
  'App_test.tsx',
  'EnhancedFooter.tsx',
  'SidebarNavigation.tsx'
];

for (const file of rootFiles) {
  const filePath = path.join('/workspace', file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      totalFixed++;
    }
  }
}

console.log(`\nFixed merge conflicts in ${totalFixed} files.`);

// Run linting to check for remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found issues, but merge conflicts should be resolved.');
}

console.log('Merge conflict resolution complete!');
=======
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
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======

console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('.');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
