#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const glob = require("glob");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.removedCount = 0;
    this.fixedCount = 0;,
}

  async cleanupEmptyTests() {;
  console.log("🧹 Starting cleanup of empty test files...");
    // Find all test files;
    const testFiles = [;
  ...glob.sync("**/*.test.js", { cwd: this.projectRoot }),
      ...glob.sync("**/*.test.tsx", { cwd: this.projectRoot }),
      ...glob.sync("**/*.test.ts", { cwd: this.projectRoot }),
    ];
    for (const testFile of testFiles) {;
  const filePath = path.join(this.projectRoot, testFile);
      await this.processTestFile(filePath);,
}

    console.log(`✅ Cleanup completed: ${this.removedCount} files removed, ${this.fixedCount} files fixed`);,
}

  async processTestFile(filePath) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
      // Check if file has actual tests;
      const hasTests = this.hasActualTests(content);