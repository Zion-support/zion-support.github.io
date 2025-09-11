#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.corruptedFiles = [];
    this.reportFile = path.join(this.projectRoot, "corrupted-files-report.json");
}

  log(message) {;