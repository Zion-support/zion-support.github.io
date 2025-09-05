#!/usr/bin/env node

/**
 * System Report Generator
 * Generates comprehensive system reports for the Ultimate PM2 Automation System
 */

const fs = require('fs'
const path = require('path'
const { execSync } = require('child_process'
    this.reportFile = path.join(this.projectRoot, 'logs', 'system-report.json'
    this.htmlReportFile = path.join(this.projectRoot, 'logs', 'system-report.html'
      await fs.mkdir(path.join(this.projectRoot, 'logs'
      console.log('Logs directory already exists'
  log(message, level = 'INFO'
        systemInfo.cpuCount = require('os'
        systemInfo.totalMemory = require('os'
        systemInfo.freeMemory = require('os'
        systemInfo.loadAverage = require('os'
      this.log(`Failed to get system info: ${error.message}`, 'ERROR'
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8'
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR'
        online: processes.filter(p => p.pm2_env.status === 'online'
        stopped: processes.filter(p => p.pm2_env.status === 'stopped'
        errored: processes.filter(p => p.pm2_env.status === 'errored'
      this.log(`Failed to get process metrics: ${error.message}`, 'ERROR'
      const logDir = path.join(this.projectRoot, 'logs'
        if (file.endsWith('.log'
          const content = await fs.readFile(filePath, 'utf8'
      this.log(`Failed to analyze logs: ${error.message}`, 'ERROR'
      this.log(`Failed to generate report data: ${error.message}`, 'ERROR'
        priority: 'high'
        category: 'Processes'
        action: 'Check process logs and restart failed processes'
        priority: 'medium'
        category: 'Processes'
        action: 'Restart stopped processes'
        priority: 'high'
        category: 'Logs'
        action: 'Investigate error logs and fix underlying issues'
        priority: 'medium'
        category: 'Logs'
        action: 'Review warning logs and address potential issues'
            <div class="