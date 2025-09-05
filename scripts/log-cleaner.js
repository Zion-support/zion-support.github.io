#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
    this.projectRoot = path.join(__dirname, '..'
    this.logDir = path.join(this.projectRoot, 'logs'
    this.errorReportDir = path.join(this.projectRoot, 'error-reports'
    // Write to cleanup log (don'
    const logFile = path.join(this.logDir, 'log-cleaner.log'
      fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n'
      this.log('info', 'Cleaning old log files...'
        this.log('info', 'Log directory does not exist'
        // Don't clean the log-cleaner'
        if (file === 'log-cleaner.log'
              "reason"
        "reason"
              "reason"
              "reason"
cursor/fix-lint-push-and-merge-to-main-f3c1
