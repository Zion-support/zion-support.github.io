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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
