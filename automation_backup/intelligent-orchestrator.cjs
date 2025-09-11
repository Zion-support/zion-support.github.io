#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const { execSync, spawn } = require("child_process")
class $1 {
  constructor() {

  this.automationSystems = new Map();
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.logFile = path.join(__dirname, "logs", `intelligent-orchestrator.log`);
    this.ensureLogDirectory();
    this.loadAutomationSystems();
}

  ensureLogDirectory() {;
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
  fs.mkdirSync(logDir, { recursive: true });,
}
  }

  log(message) {;