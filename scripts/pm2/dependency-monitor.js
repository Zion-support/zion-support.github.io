#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json');
    this.startTime = Date.now();

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // // // // // // // console.log(message);

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // // // // // // // console.error('Failed to write to log file:', error.message);
    }
  }

  async checkNpmAudit() {
    try {
      this.log('🔒 Running npm audit...');
      const auditResult = execSync('npm audit --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {
      // npm audit might fail if there are vulnerabilities
      try {
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        if (output.includes('npm ERR!')) {
          // Try to parse the error output for vulnerability info
          const lines = output.split('\n');
          const vulnerabilities = [];

          lines.forEach(line => {
            if (line.includes('│')) {
              const parts = line.split('│').map(p => p.trim()).filter(Boolean);
              if (parts.length >= 4) {
                vulnerabilities.push({
                  package: parts[0],
                  severity: parts[1],
                  title: parts[2],
                  path: parts[3]
                });


          });

          return { vulnerabilities, error: true };

      } catch (parseError) {
        this.log(`Error parsing npm audit output: ${parseError.message}`);

      return { error: true, message: error.message };


  async checkOutdatedPackages() {
    try {
      this.log('📦 Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      const outdated = JSON.parse(outdatedResult);
      return outdated;
    } catch (error) {
      // npm outdated returns non-zero exit code if there are outdated packages
      try {
        const output = error.stdout?.toString() || '';
        if (output) {
          return JSON.parse(output);

      } catch (parseError) {
        this.log(`Error parsing npm outdated output: ${parseError.message}`);

      return { /* empty */ };


  async checkPackageLock() {
    try {
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');

      if (!fs.existsSync(packageLockPath)) {
        return { exists: false, message: 'No package-lock.json found' };

      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      const lockfileVersion = packageLock.lockfileVersion;

      return {
        exists: true,
        lockfileVersion,
        dependencies: Object.keys(packageLock.dependencies || { /* empty */ }).length,
        devDependencies: Object.keys(packageLock.devDependencies || { /* empty */ }).length
      };
    } catch (error) {
      return { exists: false, error: error.message };


  async checkNodeVersion() {
    try {
      const nodeVersion = process.version;
      const npmVersion = execSync('npm --version', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();

      return { nodeVersion, npmVersion };
    } catch (error) {
      return { error: error.message };


  async checkGitHooks() {
    try {
      const hooksDir = path.join(this.projectRoot, '.git/hooks');

      if (!fs.existsSync(hooksDir)) {
        return { exists: false, message: 'No git hooks directory found' };

      const hooks = fs.readdirSync(hooksDir);
      const activeHooks = hooks.filter(hook => {
        const hookPath = path.join(hooksDir, hook);
        const stats = fs.statSync(hookPath);
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111);
      });

      return { exists: true, hooks: activeHooks };
    } catch (error) {
      return { error: error.message };


  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        vulnerabilities: {
          total: 0,
          critical: 0,
          high: 0,
          moderate: 0,
          low: 0
        },
        outdatedPackages: Object.keys(outdatedResult).length,
        packageLockStatus: packageLockInfo.exists ? 'healthy' : 'missing',
        nodeVersion: nodeInfo.nodeVersion,
        npmVersion: nodeInfo.npmVersion
      },
      details: {
        audit: auditResult,
        outdated: outdatedResult,
        packageLock: packageLockInfo,
        node: nodeInfo,
        gitHooks: gitHooksInfo
      },
      recommendations: []
    };

    // Count vulnerabilities by severity
    if (auditResult.vulnerabilities) {
      Object.values(auditResult.vulnerabilities).forEach(vuln => {
        report.summary.vulnerabilities.total++;
        const severity = vuln.severity?.toLowerCase() || 'unknown';
        if (severity === 'critical') report.summary.vulnerabilities.critical++;
        else if (severity === 'high') report.summary.vulnerabilities.high++;
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++;
        else if (severity === 'low') report.summary.vulnerabilities.low++;
      });

    // Generate recommendations
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {
      report.recommendations.push({
        priority: 'critical',
        message: 'Critical or high security vulnerabilities detected',
        action: 'Run npm audit fix immediately'
      });

    if (report.summary.vulnerabilities.moderate > 0) {
      report.recommendations.push({
        priority: 'high',
        message: 'Moderate security vulnerabilities detected',
        action: 'Review and fix moderate vulnerabilities'
      });

    if (report.summary.outdatedPackages > 10) {
      report.recommendations.push({
        priority: 'medium',
        message: 'Many outdated packages detected',
        action: 'Consider updating packages in batches'
      });

    if (!packageLockInfo.exists) {
      report.recommendations.push({
        priority: 'medium',
        message: 'No package-lock.json found',
        action: 'Run npm install to generate package-lock.json'
      });

    return report;

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);


  async run() {
    this.log('🔍 Starting Dependency Monitor...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });

      // Run all checks
      this.log('🔒 Checking security vulnerabilities...');
      const auditResult = await this.checkNpmAudit();

      this.log('📦 Checking outdated packages...');
      const outdatedResult = await this.checkOutdatedPackages();

      this.log('📋 Checking package-lock.json...');
      const packageLockInfo = await this.checkPackageLock();

      this.log('🟢 Checking Node.js and npm versions...');
      const nodeInfo = await this.checkNodeVersion();

      this.log('🎣 Checking git hooks...');
      const gitHooksInfo = await this.checkGitHooks();

      // Generate report
      this.log('📊 Generating dependency report...');
      const report = await this.generateReport(
        auditResult,
        outdatedResult,
        packageLockInfo,
        nodeInfo,
        gitHooksInfo
      );

      // Save report
      await this.saveReport(report);

      const duration = Date.now() - this.startTime;

      // Log summary
      this.log('\n📊 Dependency Monitor Summary:');
      this.log(`Security vulnerabilities: ${report.summary.vulnerabilities.total}`);
      this.log(`  Critical: ${report.summary.vulnerabilities.critical}`);
      this.log(`  High: ${report.summary.vulnerabilities.high}`);
      this.log(`  Moderate: ${report.summary.vulnerabilities.moderate}`);
      this.log(`  Low: ${report.summary.vulnerabilities.low}`);
      this.log(`Outdated packages: ${report.summary.outdatedPackages}`);
      this.log(`Package lock status: ${report.summary.packageLockStatus}`);
      this.log(`Node version: ${report.summary.nodeVersion}`);
      this.log(`NPM version: ${report.summary.npmVersion}`);
      this.log(`Duration: ${duration}ms`);

      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {
        this.log('\n✨ All dependencies are healthy!');

      // If there are critical vulnerabilities, suggest immediate action
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {
        this.log('\n🚨 CRITICAL: Security vulnerabilities detected!');
        this.log('Consider running: npm audit fix');

    } catch (error) {
      this.log(`❌ Error running dependency monitor: ${error.message}`);
      process.exit(1);



// Run the dependency monitor
const monitor = new DependencyMonitor();
monitor.run().catch(error => {
  // // // // // // // console.error('Fatal error:', error);
  process.exit(1);
});
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}