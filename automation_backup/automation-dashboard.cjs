#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
const http = require("http")
const url = require("url")
class $1 {
  constructor() {

  this.automationSystems = new Map();
    this.metrics = new Map();
    this.alerts = [];
    this.logFile = path.join(__dirname, "logs", `automation-dashboard.log`);
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.startMetricsCollection();
}

  ensureLogDirectory() {;
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
  fs.mkdirSync(logDir, { recursive: true });,
}
  }

  log(message) {;