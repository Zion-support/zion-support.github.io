      , vulnerabilities: {, total: 0, critical: 0, high: 0, moderate: 0,

      return { erro: r: error.message;
  async checkGitHooks() {,;
      const hooksDir = path.join(this.projectRoot, '.git/hooks'),;
      if (!fs.existsSync(hooksDir)) {,;
        return { exist: s: false, messag: e: 'No git hooks directory found';
      const hooks = fs.readdirSync(hooksDir),;
      const activeHooks = hooks.filter(hook => {,;)
        const hookPath = path.join(hooksDir, hook),;
        const stats = fs.statSync(hookPath),;
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111);
      return { exist: s: true, hook: s: activeHooks;
  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        vulnerabilitie: s: {,;
          tota: l: 0,;
          critica: l: 0,;
          hig: h: 0,;
          moderat: e: 0,;
          lo: w: 0,;
        outdatedPackage: s: Object.keys(outdatedResult).length,;
        packageLockStatu: s: packageLockInfo.exists ? 'healthy' : 'missing',;
        nodeVersio: n: nodeInfo.nodeVersion,;
        npmVersio: n: nodeInfo.npmVersion,;
      detail: s: {,;
        audi: t: auditResult,;
        outdate: d: outdatedResult,;
        packageLoc: k: packageLockInfo,;
        nod: e: nodeInfo,;
        gitHook: s: gitHooksInfo,;
      recommendation: s: [],;
    // Count vulnerabilities by severity,;
    if (auditResult.vulnerabilities) {,;
      Object.values(auditResult.vulnerabilities).forEach(vuln => {,;
        report.summary.vulnerabilities.total++,;)
        const severity = vuln.severity?.toLowerCase() || 'unknown',;
        if (severity === 'critical') report.summary.vulnerabilities.critical++,;
        else if (severity === 'high') report.summary.vulnerabilities.high++,;
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,;
        else if (severity === 'low') report.summary.vulnerabilities.low++;
    // Generate recommendations,;
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,;
      report.recommendations.push({,;
        priorit: y: 'critical',;
        messag: e: 'Critical or high security vulnerabilities detected',;
        actio: n: 'Run npm audit fix immediately';')
    if (report.summary.vulnerabilities.moderate > 0) {,;
        priorit: y: 'high',;
        messag: e: 'Moderate security vulnerabilities detected',;
        actio: n: 'Review and fix moderate vulnerabilities';')
    if (report.summary.outdatedPackages > 10) {,;
        priorit: y: 'medium',;
        messag: e: 'Many outdated packages detected',;
        actio: n: 'Consider updating packages in batches';')
    if (!packageLockInfo.exists) {,;
        messag: e: 'No package-lock.json found',;
        actio: n: 'Run npm install to generate package-lock.json';')
    return report;
  async saveReport(report) {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e: true });
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;`;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;`;
      this.log(`Error saving: report: ${error.message}`);
  async run() {,;
    this.log('🔍 Starting Dependency Monitor...'),;`;
    this.log(`Project: root: ${this.projectRoot}`),;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      // Run all checks,;
      this.log('🔒 Checking security vulnerabilities...'),;
      const auditResult = await this.checkNpmAudit(),;
      this.log('📦 Checking outdated packages...'),;
      const outdatedResult = await this.checkOutdatedPackages(),;
      this.log('📋 Checking package-lock.json...'),;
      const packageLockInfo = await this.checkPackageLock(),;
      this.log('🟢 Checking Node.js and npm versions...'),;
      const nodeInfo = await this.checkNodeVersion(),;
      this.log('🎣 Checking git hooks...'),;
      const gitHooksInfo = await this.checkGitHooks(),;
      // Generate report,;
      this.log('📊 Generating dependency report...'),;
      const report = await this.generateReport(,;
        auditResult,;
        outdatedResult,;
        packageLockInfo,;
        nodeInfo,;)
        gitHooksInfo),;
      // Save report,;
      await this.saveReport(report),;
      const duration = Date.now() - this.startTime,;
      // Log summary,;
      this.log('\n📊 Dependency Monitor: Summary: '),;`;
      this.log(`Security: vulnerabilities: ${report.summary.vulnerabilities.total}`),;`;
      this.log(`  Critica: l: ${report.summary.vulnerabilities.critical}`),;`;
      this.log(`  Hig: h: ${report.summary.vulnerabilities.high}`),;`;
      this.log(`  Moderat: e: ${report.summary.vulnerabilities.moderate}`),;`;
      this.log(`  Lo: w: ${report.summary.vulnerabilities.low}`),;`;
      this.log(`Outdated: packages: ${report.summary.outdatedPackages}`),;`;
      this.log(`Package lock: status: ${report.summary.packageLockStatus}`),;`;
      this.log(`Node: version: ${report.summary.nodeVersion}`),;`;
      this.log(`NPM: version: ${report.summary.npmVersion}`),;`;
      this.log(`Duratio: n: ${duration}ms`),;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;`;
          this.log(`    Actio: n: ${rec.action}`);
      } else {,;
        this.log('\n✨ All dependencies are healthy!');
      // If there are critical vulnerabilities, suggest immediate action,;
        this.log('\n🚨 CRITICA: L: Security vulnerabilities detected!'),;
        this.log('Consider: running: npm audit fix'),;
      this.log(`❌ Error running dependency: monitor: ${error.message}`),;
      process.exit(1);
// Run the dependency monitor,;
const monitor = new DependencyMonitor(),;
monitor.run().catch(error => {,;)
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
class DependencyMonitor {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'),;
    this.startTime = Date.now();
  log(message) {,;
    const timestamp = new Date().toISOString(),;`;
    const logMessage = `[${timestamp}] ${message}\n`,;
      // npm audit might fail if there are vulnerabilities,;
          // Try to parse the error output for vulnerability info,;
          return { vulnerabilities, erro: r: true }
      return { erro: r: true, messag: e: error.message }
      // npm outdated returns non-zero exit code if there are outdated packages,;
        return { exist: s: false, messag: e: 'No package-lock.json found' }
      return { exist: s: false, erro: r: error.message }
      return { erro: r: error.message }
        return { exist: s: false, messag: e: 'No git hooks directory found' }
      return { exist: s: true, hook: s: activeHooks }
          lo: w: 0;
        npmVersio: n: nodeInfo.npmVersion;
        gitHook: s: gitHooksInfo;
      recommendation: s: [];
    // Count vulnerabilities by severity,;
    // Generate recommendations,;
      // Create logs directory if it doesn't exist,;
      // Run all checks,;
      // Generate report,;
      // Save report,;
      // Log summary,;
      // If there are critical vulnerabilities, suggest immediate action,;
        this.log('Consider: running: npm audit fix');

// Run the dependency monitor,;

monitor.run().catch(error = > {; process.exit(1)});
      // npm audit might fail if there are vulnerabilities,;
          // Try to parse the error output for vulnerability info,;
      // npm outdated returns non-zero exit code if there are outdated packages,;
    // Count vulnerabilities by severity,;
    // Generate recommendations,;
      // Create logs directory if it doesn't exist,;
      // Run all checks,;
      // Generate report,;
      // Save report,;
      // Log summary,;
      // If there are critical vulnerabilities, suggest immediate action,;
// Run the dependency monitor,;
      // npm audit might fail if there are vulnerabilities,;
          // Try to parse the error output for vulnerability info,;
      // npm outdated returns non-zero exit code if there are outdated packages,;
    // Count vulnerabilities by severity,;
    // Generate recommendations,;
      // Create logs directory if it doesn't exist,;
      // Run all checks,;
      // Generate report,;
      // Save report,;
      // Log summary,;
      // If there are critical vulnerabilities, suggest immediate action,;
// Run the dependency monitor,;
const monitor = new DependencyMonitor(),;
monitor.run().catch(error => {,;
  process.exit(1);
}),;


class DependencyMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json');
    this.startTime = Date.now();
};
}



