#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "deployment-reports");
    this.logFile = path.join(this.reportsDir, "deployment-automation.log");
    this.results = {;
  timestamp: new Date().toISOString(),
      status: "running",
      preDeployment: {},
      build: {},
      tests: {},
      deployment: {},
      postDeployment: {},