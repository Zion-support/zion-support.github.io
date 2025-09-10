#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.corruptedFiles = [];
    this.reportFile = path.join(this.projectRoot, "corrupted-files-report.json");,
}

  log(message) {;
  const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);,
}

  isFileCorrupted(filePath) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
      // Check for common corruption patterns;
      const corruptionPatterns = [;
  /import.*\{[^}]*\}[^]*$/m, // Missing semicolon after import;
        /export.*\{[^}]*\}[^]*$/m, // Missing semicolon after export;
        /[""]\s*;\s*[""]/, // Semicolons inside strings;
        /[^]\s*;\s*[""]/, // Semicolons before strings;
        /import.*from.*[""][^""]*[""]\s*[^]/, // Import without semicolon;
        /export.*default.*function.*\{[^}]*$/, // Incomplete function;
        /return\s*\(\s*$/, // Incomplete return statement;
        /<[^>]*>\s*$/, // Incomplete JSX;
        /const\s+\w+\s*=\s*\[[^\]]*$/, // Incomplete array;
        /const\s+\w+\s*=\s*\{[^}]*$/, // Incomplete object;
      ];
      // Check if file has multiple corruption patterns;
      let corruptionCount = 0;
      for (const pattern of corruptionPatterns) {;
  if (pattern.test(content)) {;
  corruptionCount++;,
}
      }

      // If more than 3 corruption patterns, consider it corrupted;
      return corruptionCount > 3;,
} catch (error) {;
  return true; // If we can"t read the file, it"s corrupted;,
}
  }

  getAllFiles(dir, extensions = [".js", ".jsx", ".ts", ".tsx"]) {;
  const files = [];
    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);
    for (const item of items) {
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;
  files.push(...this.getAllFiles(fullPath, extensions));,
} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
  files.push(fullPath);,
}
    }

    return files;,
}

  async cleanCorruptedFiles() {;
  this.log("🔍 Scanning for corrupted files...");
    const srcDir = path.join(this.projectRoot, "src");
    const pagesDir = path.join(this.projectRoot, "pages");
    const allFiles = [;
  ...this.getAllFiles(srcDir),
      ...this.getAllFiles(pagesDir);
    ];
    this.log(`📁 Found ${allFiles.length} files to check`);