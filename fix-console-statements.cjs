#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Find all TypeScript and JavaScript files
const files = glob.sync("**/*.{ts,tsx,js,jsx}", {
  ignore: [
    "node_modules/**",
    "dist/**",
    ".next/**",
    "out/**",
    "**/__tests__/**",
    "**/test/**",
    "**/tests/**",
    "**/*.test.*",
    "**/*.spec.*",
  ],
});

let fixedFiles = 0;

files.forEach((filePath) => {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, "utf8");
      let modified = false;

      // Replace console statements with proper logging or remove them
      const consoleRegex =
        /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;

      // Check if file has logger import or is a utility file
      const hasLogger =
        content.includes("import") && content.includes("logger");
      const isUtilityFile =
        filePath.includes("utils/") || filePath.includes("config/");

      if (consoleRegex.test(content)) {
        if (hasLogger) {
          // Replace with logger calls
          content = content.replace(
            /console\.log\(([^)]*)\);/g,
            "logger.info($1);",
          );
          content = content.replace(
            /console\.warn\(([^)]*)\);/g,
            "logger.warn($1);",
          );
          content = content.replace(
            /console\.error\(([^)]*)\);/g,
            "logger.error($1);",
          );
          content = content.replace(
            /console\.info\(([^)]*)\);/g,
            "logger.info($1);",
          );
          content = content.replace(
            /console\.debug\(([^)]*)\);/g,
            "logger.debug($1);",
          );
        } else if (isUtilityFile) {
          // For utility files, wrap in development check
          content = content.replace(
            /console\.(log|warn|error|info|debug)\(([^)]*)\);/g,
            "if (process.env.NODE_ENV === 'development') { console.$1($2); }",
          );
        } else {
          // For other files, remove console statements
          content = content.replace(consoleRegex, "");
        }
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed console statements in: ${filePath}`);
        fixedFiles++;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed console statements in ${fixedFiles} files`);
