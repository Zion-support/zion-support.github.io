#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "monitoring.log");
    this.ensureDirectories();
}

  ensureDirectories() {;
  if (!fs.existsSync(this.reportsDir)) {;
  fs.mkdirSync(this.reportsDir, { recursive: true });,
}
  }

  log(message) {;