#!/usr/bin/env node;
const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "comprehensive-automation.log");
    this.ensureDirectories();
}

  ensureDirectories() {;
  if (!fs.existsSync(this.reportsDir)) {;
  fs.mkdirSync(this.reportsDir, { recursive: true });,
}
  }

  log(message) {;