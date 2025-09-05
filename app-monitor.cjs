#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AppMonitor {
  constructor() {
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log('[' + new Date().toISOString() + '] ' + message);
  }

  async monitorAppHealth() {
    this.log('🔍 Monitoring App Health');
    const healthChecks = {
      "timestamp": new Date().toISOString(),
      "status": 'healthy',
      "checks": {
        filesystem: this.checkFilesystem(),
        "dependencies": this.checkDependencies(),
        "build": this.checkBuild(),
        "tests": this.checkTests()}};
    fs.writeFileSync(
      path.join(this.projectRoot, 'health-check.json'),
      JSON.stringify(healthChecks, null, 2)
    );
    this.log('✅ Health check completed');
  }

  checkFilesystem() {
    const srcDir = path.join(this.projectRoot, 'src');
    return {
      "status": fs.existsSync(srcDir) ? 'ok' : 'error',
      "message": fs.existsSync(srcDir)
        ? 'Source directory exists'
        : 'Source directory missing'};
  }

  checkDependencies() {
    const packageJson = path.join(this.projectRoot, 'package.json');
    return {
      "status": fs.existsSync(packageJson) ? 'ok' : 'error',
      "message": fs.existsSync(packageJson)
        ? 'Package.json exists'
        : 'Package.json missing'};
  }

  checkBuild() {
    const buildDir = path.join(this.projectRoot, '.next');
    return {
      "status": fs.existsSync(buildDir) ? 'ok' : 'warning',
      "message": fs.existsSync(buildDir)
        ? 'Build directory exists'
        : 'Build directory not found'};
  }

  checkTests() {
    const testDir = path.join(this.projectRoot, '__tests__');
    return {
      "status": fs.existsSync(testDir) ? 'ok' : 'warning',
      "message": fs.existsSync(testDir)
        ? 'Test directory exists'
        : 'Test directory not found'};
  }
}

const monitor = new AppMonitor();
monitor.monitorAppHealth().catch(console.error);
