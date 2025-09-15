#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.logFile = path.join(this.projectRoot, 'logs', 'merge-conflict-fixer.log')
    this.reportFile = path.join(this.projectRoot, 'error-reports')
    fs.appendFileSync(this.logFile, logMessage + '\n')
      const gitStatus = execSync('git status --porcelain', { "encoding"})
          "type"
          "description"
        "successRate"
        "version"
<<<<<<< HEAD
  console.error('Fatal "error")
=======
  console.error('Fatal "error")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
