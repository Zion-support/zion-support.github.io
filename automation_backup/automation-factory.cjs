#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
class $1 {
  constructor() {

  this.scripts = new Map();
    this.runningScripts = new Map();
    this.logFile = path.join(__dirname, "logs", `automation-factory.log`);
    this.ensureLogDirectory();
    this.loadExistingScripts();
}

  ensureLogDirectory() {;
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
  fs.mkdirSync(logDir, { recursive: true });,
}
  }

  log(message) {;