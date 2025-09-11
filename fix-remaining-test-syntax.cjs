#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const glob = require("glob");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();,
}

  async fixRemainingSyntaxIssues() {;
  console.log("🔧 Fixing remaining test syntax issues...");
    const testFiles = [;
  ...glob.sync("**/*.test.js", { cwd: this.projectRoot }),
      ...glob.sync("**/*.test.tsx", { cwd: this.projectRoot }),
      ...glob.sync("**/*.test.ts", { cwd: this.projectRoot }),
    ];
    for (const testFile of testFiles) {;