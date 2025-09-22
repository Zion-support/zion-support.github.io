"use strict";

const fs = require("fs");
const path = require("path");

class CodeQualityChecker {
  constructor() {
    this.issues = [];
    this.maxBytes = parseInt(process.env.MAX_FILE_BYTES || "200000", 10); // default 200KB
  }

  checkFileSize(filePath) {
    const stats = fs.statSync(filePath);
    if (stats.size > this.maxBytes) {
      this.issues.push(`Large file: ${filePath} (${stats.size} bytes)`);
    }
  }

  shouldScanFile(fileName) {
    return (
      fileName.endsWith(".js") ||
      fileName.endsWith(".ts") ||
      fileName.endsWith(".tsx")
    );
  }

  scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      if (item.startsWith(".")) continue;
      if (item === "node_modules") continue;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        this.scanDirectory(fullPath);
      } else if (stat.isFile() && this.shouldScanFile(item)) {
        this.checkFileSize(fullPath);
      }
    }
  }

  run() {
    const startDir = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
    this.scanDirectory(startDir);
    console.log(`Found ${this.issues.length} code quality issues`);
    for (const issue of this.issues) {
      console.log(issue);
    }
    process.exit(0);
  }
}

new CodeQualityChecker().run();
