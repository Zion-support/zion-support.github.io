#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.scriptsDir = path.join(this.projectRoot, "scripts");
    this.automationDir = path.join(this.scriptsDir, "automation");
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.ensureDirectories();
}

  ensureDirectories() {;
  [this.reportsDir, this.automationDir].forEach(dir => {;
  if (!fs.existsSync(dir)) {;
  fs.mkdirSync(dir, { recursive: true });,