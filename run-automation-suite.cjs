#!/usr/bin/env node
/**
 * Automation Suite Runner
 * Runs all automation scripts and generates comprehensive reports
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationSuiteRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "automation-suite.log");
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
