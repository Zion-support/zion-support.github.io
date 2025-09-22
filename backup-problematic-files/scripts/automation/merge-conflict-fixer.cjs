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

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
