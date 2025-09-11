#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const { spawn } = require("child_process")
class $1 {
  constructor() {

  this.processes = new Map();
    this.logFile = path.join(__dirname, "logs", `automation-launcher.log`);
    this.ensureLogDirectory();
}

  ensureLogDirectory() {;
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
  fs.mkdirSync(logDir, { recursive: true });,
}
  }

  log(message) {;