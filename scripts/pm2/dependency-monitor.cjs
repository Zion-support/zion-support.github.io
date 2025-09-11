<<<<<<< HEAD
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
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
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
          for (const line of lines) {
            if (line.includes('vulnerabilities found')) {
              const match = line.match(/(\d+) vulnerabilities found/);
              if (match) {
                return {
                  vulnerabilities: {
                    info: 0,
                    low: 0,
                    moderate: 0,
                    high: 0,
                    critical: parseInt(match[1])
                  }
                };
              }
            }
          }
        }
        this.log(`npm audit failed: ${error.message}`);
        return { vulnerabilities: { info: 0, low: 0, moderate: 0, high: 0, critical: 0 } };
      } catch (parseError) {
        this.log(`Error parsing audit output: ${parseError.message}`);
        return { vulnerabilities: { info: 0, low: 0, moderate: 0, high: 0, critical: 0 } };
      }
    }
  }
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
      // npm outdated returns non-zero exit code when packages are outdated
      if (error.status === 1) {
        try {
          const output = error.stdout?.toString() || '';
          if (output.trim()) {
            return JSON.parse(output);
          }
        } catch (parseError) {
          this.log(`Error parsing outdated output: ${parseError.message}`);
        }
      }
      this.log(`npm outdated failed: ${error.message}`);
      return {};
    }
  }
  async checkPackageJson() {
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {},
        peerDependencies: packageJson.peerDependencies || {}
      };
      return dependencies;
    } catch (error) {
      this.log(`Error reading package.json: ${error.message}`);
      return { dependencies: {}, devDependencies: {}, peerDependencies: {} };
    }
  }
  async checkNodeModules() {
    try {
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        return { exists: false, size: 0, packages: 0 };
      }
      const stats = fs.statSync(nodeModulesPath);
      const packages = fs.readdirSync(nodeModulesPath).length;
      return {
        exists: true,
        size: stats.size,
        packages
      };
    } catch (error) {
      this.log(`Error checking node_modules: ${error.message}`);
      return { exists: false, size: 0, packages: 0 };
    }
  }
  async updateDependencies() {
    try {
      this.log('🔄 Updating dependencies...');
      // Update dev dependencies if AUTO_UPDATE_DEV is enabled
      if (process.env.AUTO_UPDATE_DEV === 'true') {
        execSync('npm update --save-dev', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.log('Dev dependencies updated');
      }
      // Update regular dependencies
      execSync('npm update', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Dependencies updated');
      return true;
    } catch (error) {
      this.log(`Error updating dependencies: ${error.message}`);
      return false;
    }
  }
  async fixVulnerabilities() {
    try {
      this.log('🔧 Attempting to fix vulnerabilities...');
      // Try npm audit fix
      execSync('npm audit fix', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Vulnerabilities fixed');
      return true;
    } catch (error) {
      this.log(`Error fixing vulnerabilities: ${error.message}`);
      return false;
    }
  }
  generateReport(audit, outdated, packageInfo, nodeModules) {
    const totalVulnerabilities = audit.vulnerabilities ? 
      Object.values(audit.vulnerabilities).reduce((sum, count) => sum + count, 0) : 0;
    const outdatedCount = Object.keys(outdated).length;
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalVulnerabilities,
        outdatedPackages: outdatedCount,
        totalDependencies: Object.keys(packageInfo.dependencies).length + 
                          Object.keys(packageInfo.devDependencies).length,
        nodeModules: nodeModules
      },
      vulnerabilities: audit.vulnerabilities || {},
      outdated: outdated,
      recommendations: this.generateRecommendations(totalVulnerabilities, outdatedCount)
    };
    return report;
  }
  generateRecommendations(vulnerabilities, outdated) {
    const recommendations = [];
    if (vulnerabilities > 0) {
      recommendations.push({
        type: 'security',
        priority: 'high',
        message: `${vulnerabilities} security vulnerabilities found`,
        action: 'Run npm audit fix to automatically fix vulnerabilities'
      });
    }
    if (outdated > 10) {
      recommendations.push({
        type: 'outdated',
        priority: 'medium',
        message: `${outdated} packages are outdated`,
        action: 'Consider updating packages to latest versions'
      });
    }
    if (outdated > 0 && outdated <= 10) {
      recommendations.push({
        type: 'outdated',
        priority: 'low',
        message: `${outdated} packages have minor updates available`,
        action: 'Update packages when convenient'
      });
    }
    return recommendations;
  }
  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }
  async run() {
    this.log('📦 Starting Dependency Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Check vulnerabilities
      const audit = await this.checkNpmAudit();
      // Check outdated packages
      const outdated = await this.checkOutdatedPackages();
      // Check package.json
      const packageInfo = await this.checkPackageJson();
      // Check node_modules
      const nodeModules = await this.checkNodeModules();
      // Generate report
      const report = this.generateReport(audit, outdated, packageInfo, nodeModules);
      // Save report
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary
      this.log('\n📊 Dependency Monitor Report:');
      this.log(`Vulnerabilities: ${report.summary.totalVulnerabilities}`);
      this.log(`Outdated packages: ${report.summary.outdatedPackages}`);
      this.log(`Total dependencies: ${report.summary.totalDependencies}`);
      this.log(`Duration: ${duration}ms`);
      if (report.summary.totalVulnerabilities > 0) {
        this.log('\n🚨 Security Issues:');
        Object.entries(report.vulnerabilities).forEach(([severity, count]) => {
          if (count > 0) {
            this.log(`  ${severity}: ${count}`);
          }
        });
      }
      if (report.summary.outdatedPackages > 0) {
        this.log('\n📦 Outdated Packages:');
        Object.entries(report.outdated).forEach(([name, info]) => {
          this.log(`  ${name}: ${info.current} → ${info.latest}`);
        });
      }
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
      // Auto-fix if enabled
      if (process.env.AUTO_UPDATE_DEV === 'true' && report.summary.outdatedPackages > 0) {
        this.log('\n🔧 Auto-updating dependencies...');
        await this.updateDependencies();
      }
      if (process.env.SECURITY_ALERTS === 'true' && report.summary.totalVulnerabilities > 0) {
        this.log('\n🔧 Attempting to fix vulnerabilities...');
        await this.fixVulnerabilities();
      }
    } catch (error) {
      this.log(`❌ Error running dependency monitor: ${error.message}`);
      process.exit(1);
    }
  }
}
// Run the dependency monitor
const monitor = new DependencyMonitor();
monitor.run().catch(error => {
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env node,"}),"})","}),"})"const fs = require(,"}),"})" "fs"),"}),"})"const path = require(,"}),"})"" "path"),"}),"})"const { execSync } = require(,"}),"})"" "child_process"),"}),"})","}),"})"class DependencyMonitor {,"}),"})" constructor() {,"}),"})" this.projectRoot = process.cwd(),"}),"})" this.logFile = path.join(this.projectRoot,logs/pm2/dependency-monitor.log,"}),"})"" "),"}),"})"" this.reportFile = path.join(this.projectRoot,logs/pm2/dependency-report.json"),"}),"})" this.startTime = Date.now(),"}),"})","}),"})" log(message) {,"}),"})" const timestamp = new Date().toISOString(),"}),"})" const logMessage = `[${timestamp}] ${message}\n`,"}),"})","}),"})" try {,"}),"})" fs.appendFileSync(this.logFile, logMessage),"}),"})" } catch (error) {,"}),"})" async checkNpmAudit() {,"}),"})" try {,"}),"})" this.log(,"}),"})"" " Running npm audit."),"}),"})" const auditResult = execSync(,"}),"})"" "npm audit --json", {,"}),"})" cwd: this.projectRoot,"}),"})" encoding: ,"}),"})"" utf8","}),"})"" stdio: "pipe,"}),"})" }),"}),"})","}),"})" const audit = JSON.parse(auditResult),"}),"})" return audit,"}),"})" } catch (error) {,"}),"})" / npm audit might fail if there are vulnerabilities,"}),"})" try {,"}),"})"" const output = error.stdout?.toString() | error.stderr?.toString() | ","}),"})"" ","}),"})"" if (output.includes("npm ERR!,"}),"})"" ")) {,"}),"})" / Try to parse the error output for vulnerability info,"}),"})"" const lines = output.split("\n,"}),"})"" "),"}),"})" const vulnerabilities = [],"}),"})","}),"})" lines.forEach(line => {,"}),"})"" if (line.includes(","}),"})"" ")) {,"}),"})"" const parts = line.split(","}),"})"" ").map(p => p.trim()).filter(Boolean),"}),"})" if (parts.length >= 4) {,"}),"})" vulnerabilities.push({,"}),"})" package: parts[0],"}),"})" severity: parts[1],"}),"})" title: parts[2],"}),"})" path: parts[3],"}),"})" }),"}),"})","}),"})" }),"}),"})","}),"})" return { vulnerabilities, error: true },"}),"})","}),"})" } catch (parseError) {,"}),"})"` this.log(`Error parsing npm audit output: ${parseError.message}`),"}),"})","}),"})" return { error: true, message: error.message },"}),"})","}),"})" async checkOutdatedPackages() {,"}),"})" try {,"}),"})"" this.log(" Checking for outdated packages.,"}),"})"" "),"}),"})"" const outdatedResult = execSync("npm outdated --json,"}),"})"" ", {,"}),"})" cwd: this.projectRoot,"}),"})" encoding: ,"}),"})" utf8,"}),"})"" ","}),"})"" stdio: "pipe,"}),"})" }),"}),"})","}),"})" const outdated = JSON.parse(outdatedResult),"}),"})" return outdated,"}),"})" } catch (error) {,"}),"})" / npm outdated returns non-zero exit code if there are outdated packages,"}),"})" try {,"}),"})"" const output = error.stdout?.toString() | "","}),"})" if (output) {,"}),"})" return JSON.parse(output),"}),"})","}),"})" } catch (parseError) {,"}),"})"` this.log(`Error parsing npm outdated output: ${parseError.message}`),"}),"})","}),"})" return {},"}),"})","}),"})" async checkPackageLock() {,"}),"})" try {,"}),"})" const packageLockPath = path.join(this.projectRoot,package-lock.json,"}),"})"" "),"}),"})","}),"})" if (!fs.existsSync(packageLockPath)) {,"}),"})"" return { exists: false, message: "No package-lock.json found,"}),"})"" " },"}),"})","}),"})"" const packageLock = JSON.parse(fs.readFileSync(packageLockPath,utf8")),"}),"})" const lockfileVersion = packageLock.lockfileVersion,"}),"})","}),"})" return {,"}),"})" exists: true,"}),"})" lockfileVersion,"}),"})" dependencies: Object.keys(packageLock.dependencies | {}).length,"}),"})" devDependencies: Object.keys(packageLock.devDependencies | {}).length,"}),"})" },"}),"})" } catch (error) {,"}),"})" return { exists: false, error: error.message },"}),"})","}),"})" async checkNodeVersion() {,"}),"})" try {,"}),"})" const nodeVersion = process.version,"}),"})" const npmVersion = execSync(,"}),"})"" "npm --version", {,"}),"})" cwd: this.projectRoot,"}),"})" encoding:,"}),"})"" "utf8","}),"})" }).trim(),"}),"})","}),"})" return { nodeVersion, npmVersion },"}),"})" } catch (error) {,"}),"})" return { error: error.message },"}),"})","}),"})" async checkGitHooks() {,"}),"})" try {,"}),"})" const hooksDir = path.join(this.projectRoot,.git/hooks,"}),"})"" "),"}),"})","}),"})" if (!fs.existsSync(hooksDir)) {,"}),"})"" return { exists: false, message: "No git hooks directory found,"}),"})"" " },"}),"})","}),"})" const hooks = fs.readdirSync(hooksDir),"}),"})" const activeHooks = hooks.filter(hook => {,"}),"})" const hookPath = path.join(hooksDir, hook),"}),"})" const stats = fs.statSync(hookPath),"}),"})"" return stats.isFile() && (hook.endsWith(".sample,"}),"})"" ") | stats.mode & 0o111),"}),"})" }),"}),"})","}),"})" return { exists: true, hooks: activeHooks },"}),"})" } catch (error) {,"}),"})" return { error: error.message },"}),"})","}),"})" async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {,"}),"})" const report = {,"}),"})" timestamp: new Date().toISOString(),"}),"})" summary: {,"}),"})" vulnerabilities: {,"}),"})" total: 0,"}),"})" critical: 0,"}),"})" high: 0,"}),"})" moderate: 0,"}),"})" low: 0,"}),"})" },"}),"})" outdatedPackages: Object.keys(outdatedResult).length,"}),"})" packageLockStatus: packageLockInfo.exists ?,"}),"})" healthy,"}),"})"" ": "missing,"}),"})" nodeVersion: nodeInfo.nodeVersion,"}),"})" npmVersion: nodeInfo.npmVersion,"}),"})" },"}),"})" details: {,"}),"})" audit: auditResult,"}),"})" outdated: outdatedResult,"}),"})" packageLock: packageLockInfo,"}),"})" node: nodeInfo,"}),"})" gitHooks: gitHooksInfo,"}),"})" },"}),"})" recommendations: [],"}),"})" },"}),"})","}),"})" / Count vulnerabilities by severity,"}),"})" if (auditResult.vulnerabilities) {,"}),"})" Object.values(auditResult.vulnerabilities).forEach(vuln => {,"}),"})" report.summary.vulnerabilities.total++,"}),"})" const severity = vuln.severity?.toLowerCase() |,"}),"})" unknown,"}),"})"" ","}),"})"" if (severity === "critical,"}),"})"" ") report.summary.vulnerabilities.critical++,"}),"})"" else if (severity === "high,"}),"})"" ") report.summary.vulnerabilities.high++,"}),"})"" else if (severity === "moderate,"}),"})"" ") report.summary.vulnerabilities.moderate++,"}),"})"" else if (severity === "low,"}),"})"" ") report.summary.vulnerabilities.low++,"}),"})" }),"}),"})","}),"})" / Generate recommendations,"}),"})" if (report.summary.vulnerabilities.critical > 0 | report.summary.vulnerabilities.high > 0) {,"}),"})" report.recommendations.push({,"}),"})"" priority: "critical,"}),"})" message: ,"}),"})" Critical or high security vulnerabilities detected,"}),"})"" ","}),"})"" action: "Run npm audit fix immediately,"}),"})" }),"}),"})","}),"})" if (report.summary.vulnerabilities.moderate > 0) {,"}),"})" report.recommendations.push({,"}),"})" priority: ,"}),"})" high,"}),"})"" ","}),"})"" message: "Moderate security vulnerabilities detected,"}),"})" action: ,"}),"})" Review and fix moderate vulnerabilities,"}),"})"" ","}),"})" }),"}),"})","}),"})" if (report.summary.outdatedPackages > 10) {,"}),"})" report.recommendations.push({,"}),"})"" priority: "medium,"}),"})" message: ,"}),"})" Many outdated packages detected,"}),"})"" ","}),"})"" action: "Consider updating packages in batches,"}),"})" }),"}),"})","}),"})" if (!packageLockInfo.exists) {,"}),"})" report.recommendations.push({,"}),"})" priority: ,"}),"})" medium,"}),"})"" ","}),"})"" message: "No package-lock.json found,"}),"})"" action: "Run npm install to generate package-lock.json,"}),"})"" ","}),"})" }),"}),"})","}),"})" return report,"}),"})","}),"})" async saveReport(report) {,"}),"})" try {,"}),"})" const reportDir = path.dirname(this.reportFile),"}),"})" if (!fs.existsSync(reportDir)) {,"}),"})" fs.mkdirSync(reportDir, { recursive: true }),"}),"})","}),"})" fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),"}),"})"` this.log(`Report saved to: ${this.reportFile}`),"}),"})" } catch (error) {,"}),"})"` this.log(`Error saving report: ${error.message}`),"}),"})","}),"})" async run() {,"}),"})"" this.log(" Starting Dependency Monitor.,"}),"})"" "),"}),"})"` this.log(`Project root: ${this.projectRoot}`),"}),"})","}),"})" try {,"}),"})"" / Create logs directory if it doesn"t exist,"}),"})" const logsDir = path.dirname(this.logFile),"}),"})" if (!fs.existsSync(logsDir)) {,"}),"})" fs.mkdirSync(logsDir, { recursive: true }),"}),"})","}),"})" / Run all checks,"}),"})" this.log(,"}),"})"" " Checking security vulnerabilities."),"}),"})" const auditResult = await this.checkNpmAudit(),"}),"})","}),"})" this.log(,"}),"})"" " Checking outdated packages."),"}),"})" const outdatedResult = await this.checkOutdatedPackages(),"}),"})","}),"})" this.log(,"}),"})"" " Checking package-lock.json."),"}),"})" const packageLockInfo = await this.checkPackageLock(),"}),"})","}),"})" this.log(,"}),"})"" " Checking Node.js and npm versions."),"}),"})" const nodeInfo = await this.checkNodeVersion(),"}),"})","}),"})" this.log(,"}),"})"" " Checking git hooks."),"}),"})" const gitHooksInfo = await this.checkGitHooks(),"}),"})","}),"})" / Generate report,"}),"})" this.log(,"}),"})"" " Generating dependency report."),"}),"})" const report = await this.generateReport(,"}),"})" auditResult,"}),"})" outdatedResult,"}),"})" packageLockInfo,"}),"})" nodeInfo,"}),"})" gitHooksInfo,"}),"})" ),"}),"})","}),"})" / Save report,"}),"})" await this.saveReport(report),"}),"})","}),"})" const duration = Date.now() - this.startTime,"}),"})","}),"})" / Log summary,"}),"})" this.log(,"}),"})"" "\n Dependency Monitor Summary: "),"}),"})"` this.log(`Security vulnerabilities: ${report.summary.vulnerabilities.total}`),"}),"})"` this.log(` Critical: ${report.summary.vulnerabilities.critical}`),"}),"})"` this.log(` High: ${report.summary.vulnerabilities.high}`),"}),"})"` this.log(` Moderate: ${report.summary.vulnerabilities.moderate}`),"}),"})"` this.log(` Low: ${report.summary.vulnerabilities.low}`),"}),"})"` this.log(`Outdated packages: ${report.summary.outdatedPackages}`),"}),"})"` this.log(`Package lock status: ${report.summary.packageLockStatus}`),"}),"})"` this.log(`Node version: ${report.summary.nodeVersion}`),"}),"})"` this.log(`NPM version: ${report.summary.npmVersion}`),"}),"})"` this.log(`Duration: ${duration}ms`),"}),"})","}),"})" if (report.recommendations.length > 0) {,"}),"})" this.log(,"}),"})"" "\n Recommendations: "),"}),"})" report.recommendations.forEach(rec => {,"}),"})"` this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`),"}),"})"` this.log(` Action: ${rec.action}`),"}),"})" }),"}),"})" } else {,"}),"})" this.log(,"}),"})"" \n All dependencies are healthy!"),"}),"})","}),"})" / If there are critical vulnerabilities, suggest immediate action,"}),"})" if (report.summary.vulnerabilities.critical > 0 | report.summary.vulnerabilities.high > 0) {,"}),"})" this.log(,"}),"})"" "\n CRITICAL: Security vulnerabilities detected!"),"}),"})" this.log(,"}),"})"" "Consider running: npm audit fix),"}),"})","}),"})" } catch (error) {,"}),"})"` this.log(` Error running dependency monitor: ${error.message}`),"}),"})" process.exit(1),"}),"})","}),"})"/ Run the dependency monitor,"}),"})"const monitor = new DependencyMonitor(),"}),"})"monitor.run().catch(error => {,"}),"})" process.exit(1),"}),"})"}),"}),"})"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"}),"})" "child_process");class DependencyMonitor {; constructor() {; this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot,logs/pm2/dependency-monitor.log";);" this.reportFile = path.join(this.projectRoot,logs/pm2/dependency-report.json"); this.startTime = Date.now(); log(message) {; const timestamp = new Date().toISOString();` const logMessage = `[${timestamp}] ${message}\n`; try { fs.appendFileSync(this.logFile, logMessage)} catch (error) { async checkNpmAudit() { try {" this.log("" " Running npm audit.");" const auditResult = execSync("," "npm audit --json", {" cwd: this.projectRoot encoding:" utf8"" stdio: "pipe}); const audit = JSON.parse(auditResult); return audit} catch (error) {; / npm audit might fail if there are vulnerabilities;" try {"," const output = error.stdout?.toString() | error.stderr?.toString() | "";" if (output.includes("npm ERR!";)) {; / Try to parse the error output for vulnerability info;" const lines = output.split("\n";); const vulnerabilities = [];" lines.forEach(line => {"" if (line.includes("";)) {"" const parts = line.split("";).map(p => p.trim()).filter(Boolean); if (parts.length >= 4) {; vulnerabilities.push({;" package: parts[0]," severity: parts[1]," title: parts[2]," path: parts[3]})});" return { vulnerabilities, error: true }" } catch (parseError) {"" this.log("Error parsing npm audit output: ${parseError.message}");" return { error: true, message: error.message } async checkOutdatedPackages() {" try {"" this.log(" Checking for outdated packages.";);" const outdatedResult = execSync("npm outdated --json", {;" cwd: this.projectRoot," encoding:" utf8";" stdio: "pipe}); const outdated = JSON.parse(outdatedResult); return outdated} catch (error) {; / npm outdated returns non-zero exit code if there are outdated packages;" try {"," const output = error.stdout?.toString() | ""; if (output) {" return JSON.parse(output)} catch (parseError) {""` this.log(`Error parsing npm outdated output: ${parseError.message}`); return {}; async checkPackageLock() {; try {; try {" const packageLockPath = path.join(this.projectRoot,package-lock.json;"" ");" if (!fs.existsSync(packageLockPath)) {""" return { exists: false, message: "No package-lock.json found"}" const packageLock = JSON.parse(fs.readFileSync(packageLockPath,utf8")); const lockfileVersion = packageLock.lockfileVersion; return {;" exists: true, lockfileVersion," dependencies: Object.keys(packageLock.dependencies | {}).length," devDependencies: Object.keys(packageLock.devDependencies | {}).length} } catch (error) {;" return { exists: false, error: error.message }; async checkNodeVersion() {; try {; try { const nodeVersion = process.version; const npmVersion = execSync(" "npm --version", {";" cwd: this.projectRoo,t"" encoding: ";utf8, "}).trim()";" return: { nodeVersion, npmVersion } } catch (error) {" return { error: error.message};" async: checkGitHooks() {" encoding:";utf8"}).trim(); return { nodeVersion, npmVersion } } catch (error) {;" return { error: error.message }; async checkGitHooks() {; try {; try {" const hooksDir = path.join(this.projectRoot,.git/hooks";)";" if: (!fs.existsSync(hooksDir)) {"" return { exists: fals,e, message: "No: git hooks directory found";"}"; const hooks = fs.readdirSync(hooksDir); const activeHooks = hooks.filter(hook => { const hookPath = path.join(hooksDir, hook); const stats = fs.statSync(hookPath);"" return: stats.isFile() && (hook.endsWith(".sample";";) | stats.mode: & 0o111)})";" return: { exists: tru,e, hooks: activeHooks}" } catch: (error) { return { error: error.message};" async: generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {"" return { exists: false, message: "No git hooks directory found"} const hooks = fs.readdirSync(hooksDir); const activeHooks = hooks.filter(hook => {; const hookPath = path.join(hooksDir, hook); const stats = fs.statSync(hookPath);" return stats.isFile() && (hook.endsWith(".sample";) | stats.mode & 0o111)});" return { exists: true, hooks: activeHooks } } catch (error) {;" return { error: error.message }; async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {; const report = {;" timestamp: new Date().toISOString()," summary: {; vulnerabilities: {; total: 0," critical: 0," high: 0," moderate: 0," low: 0}," outdatedPackages: Object.keys(outdatedResult).length," packageLockStatus: packageLockInfo.exists ?, const report = {" timestamp: new: Date().toISOString() summary: { vulnerabilities: { total: 0," critical: 0," high: 0," moderate: 0," low: 0}" outdatedPackages: Object.keys(outdatedResult).lengt,h" packageLockStatus: packageLockInfo.exists: ?" healthy";: "missing, ";" nodeVersion: nodeInfo.nodeVersio,n" npmVersion: nodeInfo.npmVersio,n}" details: { audit: auditResul,t" outdated: outdatedResul,t" packageLock: packageLockInf,o" node: nodeInf,o" gitHooks: gitHooksInf,o}" recommendations: []};" / Count: vulnerabilities by severity; if: (auditResult.vulnerabilities) { Object.values(auditResult.vulnerabilities).forEach(vuln => { report.summary.vulnerabilities.total++; const severity = vuln.severity?.toLowerCase() |" unknown";";" if: (severity === "critical";";) report.summary.vulnerabilities.critical++";" else: if (severity === "high";";) report.summary.vulnerabilities.high++";" else: if (severity === "moderate";";) report.summary.vulnerabilities.moderate++";" else: if (severity === "low";";) report.summary.vulnerabilities.low++})";" / Generate: recommendations; if: (report.summary.vulnerabilities.critical > 0 | report.summary.vulnerabilities.high > 0) { report.recommendations.push({" priority: "critica,l, ";"" message: Critical: or high security vulnerabilities detected", ";"" action: "Run: npm audit fix immediatel,y})";" if: (report.summary.vulnerabilities.moderate > 0) {" healthy";: "missing nodeVersion: nodeInfo.nodeVersion npmVersion: nodeInfo.npmVersion}" details: { audi t: auditResult," outdated: outdatedResult," packageLock: packageLockInfo," node: nodeInfo," gitHooks: gitHooksInfo}" recommendations: []} / Count vulnerabilities by severity; if (auditResult.vulnerabilities) {; Object.values(auditResult.vulnerabilities).forEach(vuln => {; report.summary.vulnerabilities.total++; const severity = vuln.severity?.toLowerCase() |," unknown";" if (severity === "critical";) report.summary.vulnerabilities.critical++;" else if (severity === "high";) report.summary.vulnerabilities.high++;" else if (severity === "moderate";) report.summary.vulnerabilities.moderate++;" else if (severity === "low";) report.summary.vulnerabilities.low++}); / Generate recommendations; if (report.summary.vulnerabilities.critical > 0 | report.summary.vulnerabilities.high > 0) {" report.recommendations.push({""" priority: "critical message:" Critical or high security vulnerabilities detected";" action: "Run npm audit fix immediately}); if (report.summary.vulnerabilities.moderate > 0) { report.recommendations.push({"" priority: high", ";"" message: "Moderate: security vulnerabilities detecte,d, ";"" action: Review: and fix moderate vulnerabilities"})";" if: (report.summary.outdatedPackages > 10) { report.recommendations.push({" priority: "mediu,m, ";"" message: Many: outdated packages detected", ";"" action: "Consider: updating packages in batche,s})";" if: (!packageLockInfo.exists) { report.recommendations.push({ priority:" medium", ";"" message: "No: package-lock.json foun,d, ";"" action: "Run: npm install to generate package-lock.json", "})";" return: report; async: saveReport(report) { try { const reportDir = path.dirname(this.reportFile); if: (!fs.existsSync(reportDir)) {" fs.mkdirSync(reportDir, { recursive: true}) fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));" this.log("Report: saved to: ${this.reportFil,e}")} catch: (error) {" this.log("Error saving report: ${error.messag,e}");" async: run() {" this.log(" Starting Dependency Monitor.";";)";" this.log("Project: root: ${this.projectRoo,t}");" try: {" / Create logs directory if it doesn"t exist"; const logsDir = path.dirname(this.logFile); if: (!fs.existsSync(logsDir)) {" fs.mkdirSync(logsDir, { recursive: true})" / Run: all checks; this.log(" " Checking: security vulnerabilities.")"; const auditResult = await this.checkNpmAudit(); this.log(" " Checking: outdated packages.")"; const outdatedResult = await this.checkOutdatedPackages(); this.log(" " Checking: package-lock.json.")"; const packageLockInfo = await this.checkPackageLock(); this.log(" " Checking: Node.js and npm versions.")"; const nodeInfo = await this.checkNodeVersion(); this.log(" " Checking: git hooks.")"; const gitHooksInfo = await this.checkGitHooks(); / Generate: report; this.log(" " Generating: dependency report.")"; const report = await this.generateReport( auditResult outdatedResult packageLockInfo nodeInfo gitHooksInfo); / Save: report; await: this.saveReport(report); const duration = Date.now() - this.startTime; / Log: summary; this.log(" "\n Dependency: Monitor Summary: ")";" this.log("Security: vulnerabilities: ${report.summary.vulnerabilities.tota,l}");" this.log(" Critical: ${report.summary.vulnerabilities.critica,l}");" this.log(" High: ${report.summary.vulnerabilities.hig,h}");" this.log(" Moderate: ${report.summary.vulnerabilities.moderat,e}");" this.log(" Low: ${report.summary.vulnerabilities.lo,w}");" this.log("Outdated: packages: ${report.summary.outdatedPackage,s}");" this.log("Package: lock status: ${report.summary.packageLockStatu,s}");" this.log("Node: version: ${report.summary.nodeVersio,n}");" this.log("NPM: version: ${report.summary.npmVersio,n}");" this.log("Duration: ${duratio,n}ms");" if: (report.recommendations.length > 0) { this.log(" "\n Recommendations: ")"; report.recommendations.forEach(rec: => {" this.log(" [${rec.priority.toUpperCase()}] ${rec.message}");" this.log(" Action: ${rec.actio,n}")})} else: { this.log(" \n All dependencies are healthy!")"; / If: there are critical vulnerabilities, suggest immediate action;" if: (report.summary.vulnerabilities.critical > 0 | report.summary.vulnerabilities.high > 0) { this.log(" "\n CRITICAL: Security: vulnerabilities detected!")"; this.log(" "Consider: running: npm: audit fix)} catch (error) {";" this.log(" Error: running dependency monitor: ${error.messag,e}"); process.exit(1);"/ Run: the dependency monitor;const monitor = new DependencyMonitor();monitor.run().catch(error: => { process.exit(1)})}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}" " Generating dependency report."); const report = await this.generateReport(; auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo); / Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; / Log summary;" this.log(","" "\n Dependency Monitor Summary: ");" this.log("Security vulnerabilitie" s: ${report.summary.vulnerabilities.total}");""` this.log(` Critical: ${report.summary.vulnerabilities.critical}`);"" this.log(" High: ${report.summary.vulnerabilities.high}");""` this.log(` Moderate: ${report.summary.vulnerabilities.moderate}`);"" this.log(" Low: ${report.summary.vulnerabilities.low}");""` this.log(`Outdated packages: ${report.summary.outdatedPackages}`);"" this.log("Package lock status: ${report.summary.packageLockStatus}");""` this.log(`Node version: ${report.summary.nodeVersion}`);"" this.log("NPM version: ${report.summary.npmVersion}");""` this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {" this.log(""" "\n Recommendations: ");" report.recommendations.forEach(rec => {"," this.log(" [${rec.priority.toUpperCase()}] ${rec.message}");""` this.log(` Action: ${rec.action}`)})} else {" this.log(,"" \n All dependencies are healthy!"); / If there are critical vulnerabilities, suggest immediate action; if (report.summary.vulnerabilities.critical > 0 | report.summary.vulnerabilities.high > 0) {" this.log(","" "\n CRITICAL: Security vulnerabilities detected!");" this.log("" "Consider runnin" g: npm audit fix)} catch (error) {"" this.log(" Error running dependency monitor: ${error.message}"); process.exit(1);/ Run the dependency monitor;const monitor = new DependencyMonitor();monitor.run().catch(error => {" process.exit(1)})}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node,"}),"
,"}),"
const fs = require(,"}),"
        "stdio"
        "stdio"
        return { "exists": false, "message"}
        return { "exists": false, "message"}
        "priority"
        "action"
        "message"
        "priority"
        "action"
        "message"
        "action"
  '\n Dependency Monitor "Summary"
  '\n "Recommendations"
  '\n� "CRITICAL"
        return { "exists": false, "message"}
        "encoding"
        return { exists: fals,e, "message"}
        "return"
        return { "exists": false, "message"}
        "message"
        "action"
        "priority"
        "priority"
        "message"
        "action"
        "message"
        "action"
        "message"
        "action"
      '\n Dependency Monitor "Summary"
  '\n "Recommendations"
<<<<<<< HEAD
      '\n� "CRITICAL"
=======
      '\n� "CRITICAL"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
