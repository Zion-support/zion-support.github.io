#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const { execSync, spawn } = require("child_process")
const chokidar = require("chokidar")
class $1 {
  constructor() {

  this.isRunning = false;
    this.watcher = null;
    this.errorCount = 0;
    this.lastCheck = null;
    this.logFile = path.join(__dirname, "logs", `lint-monitor.log`);
    this.ensureLogDirectory();
}

  ensureLogDirectory() {;
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
  fs.mkdirSync(logDir, { recursive: true });,
}
  }

  log(message) {;