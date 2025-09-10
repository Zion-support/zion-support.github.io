<<<<<<< HEAD
    content = content.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, "");
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< .*$/gm, "");
    content = content.replace(/^=======.*$/gm, "");
    content = content.replace(/^>>>>>>> .*$/gm, "");
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n");
    fs.writeFileSync(filePath, content);
    return true} catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false}
}
// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    // Remove unused imports from lucide-react
    const lines = content.split('\n');
    const newLines = [];
    const usedIcons = new Set();
    // Find all used icons in the file
    for (const line of lines) {
      const iconMatches = line.match(/(?:<|{)([A-Z][a-zA-Z0-9]*)(?:\s|>|})/g);
      if (iconMatches) {
        iconMatches.forEach(match => {
          const iconName = match.replace(/[<>{}\s]/g, '');
          if (iconName && iconName[0] === iconName[0].toUpperCase()) {
            usedIcons.add(iconName)}
        })}
    }
    // Process import lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Check if this is an import line from lucide-react
      if (line.includes('from "lucide-react"') || line.includes("from 'lucide-react'")) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*["']lucide-react["']/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => usedIcons.has(imp));
          if (usedImports.length === 0) {
            // Remove the entire import line
            continue} else if (usedImports.length < imports.length) {
            // Keep only used imports
            newLines.push(`import { ${usedImports.join(', ')} } from "lucide-react";`);
            continue}
        }
      }
      newLines.push(line)}
    fs.writeFileSync(filePath, newLines.join('\n'));
    return true} catch (error) {
    console.error(`❌ Error cleaning imports in ${filePath}:`, error.message);
    return false}
}
// Function to find all files with issues
function findFilesWithIssues(dir) {
  const files = [];
  function searchDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== "node_modules") {
          searchDirectory(fullPath)} else if (stat.isFile() && (
          item.endsWith(".tsx") || 
          item.endsWith(".ts") || 
          item.endsWith(".js") || 
          item.endsWith(".jsx")
        )) {
          try {
            const content = fs.readFileSync(fullPath, "utf8");
            if (content.includes("<<<<<<<") || content.includes("") || content.includes(">>>>>>>")) {
              files.push(fullPath)}
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  searchDirectory(dir);
  return files}
// Main execution
try {
  const conflictedFiles = findFilesWithIssues(".");
  if (conflictedFiles.length === 0) {
    } else {
    conflictedFiles.forEach(file => );
    let resolvedCount = 0;
    for (const file of conflictedFiles) {
      if (resolveMergeConflicts(file)) {
        resolvedCount++}
    }
    }
  // Try to run lint fix
  try {
    execSync("npm run "lint": fix", { "stdio": "inherit" });
    } catch (error) {
    }
} catch (error) {
  console.error("❌ Error during lint error "fixing": ", error.message);
  process.exit(1)}
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
#!/usr/bin/env node;
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(" Starting lint error fixes...")
    let content = fs.readFileSync(filePath, "utf8")
    content = content.replace(/[\s\S]*?[\s\S]*?[^\n]*/g, "")
    content = content.replace(/[^\n]*[\s\S]*?[\s\S]*?[^\n]*/g, "")
    content = content.replace(/^.*$/gm, "")
    content = content.replace(/^.*$/gm, "")
    content = content.replace(/^.*$/gm, "")
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n")
    console.log(` Resolved conflicts "in"`)
    let content = fs.readFileSync(filePath, "utf8")
      if (line.includes('from "lucide-react"') || line.includes(')
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*["']lucide-react[']
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
// Get all files with lint errors;
const lintOutput = execSync("npm run lint 2>&1", { encoding: "utf8" });
const errorLines = lintOutput.split("\n").filter(line => line.includes("Error: Parsing error"));
// Extract file paths from error lines;
const errorFiles = new Set();
errorLines.forEach(line => {;
  const match = line.match(/^\.\/(.+?):\d+:\d+\s+Error:/);
  if (match) {;
  errorFiles.add(match[1]);,
}
});
console.log(`Found ${errorFiles.size} files with lint errors`);
// Function to fix common syntax errors;
function fixFile(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix 1: Add missing semicolons after import statements;
    if (content.includes("import {") && !content.includes("import {") + ";" && !content.includes("from "")) {;
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*([^])/g, "import { $1 } from \"$2\"; $3");
      modified = true;,
}

    // Fix 2: Fix malformed import statements;
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*([^])/g, "import { $1 } from \"$2\"; $3");
    // Fix 3: Fix missing semicolons after variable declarations;
    content = content.replace(/(const|let|var)\s+(\w+)\s*=\s*([^]+)(?!)/g, "$1 $2 = $3;");
    // Fix 4: Fix malformed JSX/TSX syntax;
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*([^}]+)\s*}/g, "export default function $1() {\n  $2\n}");
    // Fix 5: Fix unterminated strings;
    content = content.replace(/[""]([^""]*)\s*$/gm, "\"$1\";");
    // Fix 6: Remove malformed characters and fix basic syntax;
    content = content.replace(/<=/g, "");
    content = content.replace(/=>/g, "=>");
    content = content.replace(/""/g, "\"");
    content = content.replace(/""/g, """);
    // Fix 7: Fix malformed function declarations;
    content = content.replace(/export\s*{\s*function\s*}\s*export\s+default/g, "export default");
    // Fix 8: Fix malformed return statements;
    content = content.replace(/return\s*\(\s*""/g, "return (\n    <div>");
    content = content.replace(/return\s*\(\s*""/g, "return (\n    <div>");
    // Fix 9: Fix malformed JSX attributes;
    content = content.replace(/className\s*=\s*[""]([^""]*)\s*[""]/g, "className="$1"");
    // Fix 10: Fix malformed array/object syntax;
    content = content.replace(/\[\s*"([^"]*)"\s*\]/g, "[\"$1\"]");
    content = content.replace(/{\s*"([^"]*)"\s*}/g, "{\"$1\"}");
    if (modified) {;
  fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;,
}

    return false;,
} catch (error) {;
  console.error(`Error fixing ${filePath}:`, error.message);
    return false;,
}
}

// Fix each file;
let fixedCount = 0;
errorFiles.forEach(filePath => {;
  if (fixFile(filePath)) {;
  fixedCount++;,
}
});
console.log(`Fixed ${fixedCount} files`);
// Run lint again to check remaining errors;
console.log("\nRunning lint again to check remaining errors...");
try {;
  execSync("npm run lint", { stdio: "inherit" });
  console.log("All lint errors fixed!");,
} catch (error) {;
  console.log("Some lint errors remain. Manual review may be needed.');,
}))))
>>>>>>> origin/automation-fixes
