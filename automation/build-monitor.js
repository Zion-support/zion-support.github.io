#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);
class BuildMonitor {
  constructor() {    this.isRunning = false;
    this.checkInterval = parseInt(process.env.BUILD_CHECK_INTERVAL) || 300000; // 5 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.lastBuildTime = null;
    this.buildHistory = [];
    this.maxBuildHistory = 10;
  }
  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }
  async checkBuildStatus() {
    try {
      this.log('info', 'Checking build status...');
      // Check if .next directory exists and is recent
      const nextDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(nextDir)) {
        const stats = fs.statSync(nextDir);
        const age = Date.now() - stats.mtime.getTime();
        const maxAge = 30 * 60 * 1000; // 30 minutes
        if (age > maxAge) {
          this.log('warn', 'Build is stale, triggering rebuild...');
          await this.triggerBuild();
        } else {
          this.log('info', 'Build is fresh');
        }
      } else {
        this.log('warn', 'No build found, triggering build...');
        await this.triggerBuild();
      }
            
  switch (command) {
    case 'start':
      monitor.start().catch(console.error);
      break;
    case 'stop':
      monitor.stop().catch(console.error);
      break;
    case 'status':
      console.log(`Build monitor running: ${monitor.isRunning}`);
      break;
    case 'check':
      monitor.checkBuildStatus().catch(console.error);
      break;
    case 'build':
      monitor.triggerBuild().catch(console.error);
      break;
    case 'stats':
      monitor.getBuildStats().then(stats => {
        console.log('Build Statistics:', JSON.stringify(stats, null, 2));
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node build-monitor.js [start|stop|status|check|build|stats]');
  }
}
module.exports = BuildMonitor;
module.exports = BuildMonitor;
