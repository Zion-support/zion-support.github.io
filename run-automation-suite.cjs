const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
class AutomationSuiteRunner {;
  constructor() {;    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "automation-suite.log");
    this.ensureDirectories();
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + "\n")}