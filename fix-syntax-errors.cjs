#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Remove any remaining merge conflict artifacts
    if (
      content.includes("<<<<<<< HEAD") ||
      content.includes("=======") ||
      content.includes(">>>>>>>")
    ) {
      console.log(`Removing merge conflict artifacts from: ${filePath}`);
      content = content.replace(
        /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>>/g,
        "$1",
      );
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>>/g, "");
      content = content.replace(/=======[\s\S]*?>>>>>>>/g, "");
      modified = true;
    }

    // Fix common JSX syntax issues
    const originalContent = content;

    // Fix unclosed JSX tags by adding proper closing tags
    content = content.replace(
      /<div([^>]*)>(?![\s\S]*?<\/div>)/g,
      (match, attrs) => {
        // Only fix if there's no corresponding closing tag
        const openTag = match;
        const afterOpenTag = content.substring(
          content.indexOf(match) + match.length,
        );
        const hasClosingTag = afterOpenTag.includes("</div>");

        if (!hasClosingTag) {
          // Find the end of the content and add closing tag
          const lines = afterOpenTag.split("\n");
          let indent = "";
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim()) {
              indent = lines[i].match(/^(\s*)/)[1];
              break;
            }
          }
          return match + "\n" + indent + "</div>";
        }
        return match;
      },
    );

    // Fix missing closing braces for JSX elements
    content = content.replace(
      /(<[^>]+>)(?![\s\S]*?<\/[^>]+>)(?=\s*$)/gm,
      (match) => {
        const tagName = match.match(/<(\w+)/);
        if (tagName) {
          return match + `</${tagName[1]}>`;
        }
        return match;
      },
    );

    // Fix orphaned closing tags
    content = content.replace(/^\s*<\/[^>]+>\s*$/gm, "");

    // Fix missing function declarations
    if (
      content.includes("return (") &&
      !content.includes("const ") &&
      !content.includes("function ")
    ) {
      content =
        "const Component = () => {\n" +
        content +
        "\n};\n\nexport default Component;";
      modified = true;
    }

    // Fix missing imports for React
    if (content.includes("JSX") && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n");
    content = content.replace(/^\s*\n/gm, "");

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules" &&
        item !== "dist"
      ) {
        traverse(fullPath);
      } else if (
        stat.isFile() &&
        (item.endsWith(".tsx") ||
          item.endsWith(".ts") ||
          item.endsWith(".js") ||
          item.endsWith(".jsx"))
      ) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution
console.log("🔍 Searching for source files to fix...");
const sourceFiles = findSourceFiles(process.cwd());

console.log(`📝 Found ${sourceFiles.length} source files to check.`);

console.log("\n🔧 Fixing syntax errors...");
let fixedCount = 0;

sourceFiles.forEach((file) => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully processed ${fixedCount} files.`);

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

console.log("\n🎉 Syntax error fixing complete!");
