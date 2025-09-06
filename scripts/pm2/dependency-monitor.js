<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
class DependencyMonitor {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkNpmAudit() {try {; this.log('🔒 Running npm audit...'); const auditResult = execSync('npm audit --json', {; cwd: this.projectRoot, encoding: 'utf8', stdio: 'pipe'}); const audit = JSON.parse(auditResult); return audit} catch (error) {// npm audit might fail if there are vulnerabilities; try {; const output = error.stdout?.toString() |error.stderr?.toString() |''; if (output.includes('npm ERR!')) {; // Try to parse the error output for vulnerability info; const lines = output.split('\n'); const vulnerabilities = []; lines.forEach(line = > {; if (line.includes('│')) {; const parts = line.split('│').map(p = > p.trim()).filter(Boolean); if (parts.length > = 4) {; vulnerabilities.push({; package: parts[0], severity: parts[1], title: parts[2]
    path: parts[3]})}}}); return { vulnerabilities, error: true }}} catch (parseError) {this.log(`Error parsing npm audit output: ${parseError.message}`)}; return { error: true, message: error.message }}}; async checkOutdatedPackages() {try {; this.log('📦 Checking for outdated packages...'); const outdatedResult = execSync('npm outdated --json', {; cwd: this.projectRoot, encoding: 'utf8', stdio: 'pipe'}); const outdated = JSON.parse(outdatedResult); return outdated} catch (error) {// npm outdated returns non-zero exit code if there are outdated packages; try {; const output = error.stdout?.toString() |''; if (output) {; return JSON.parse(output)}} catch (parseError) {this.log(`Error parsing npm outdated output: ${parseError.message}`)}; return {}}}; async checkPackageLock() {try {; const packageLockPath = path.join(this.projectRoot, 'package-lock.json'); if (!fs.existsSync(packageLockPath)) {; return { exists: false, message: 'No package-lock.json found' }}; const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8')); const lockfileVersion = packageLock.lockfileVersion; return {exists: true, lockfileVersion, dependencies: Object.keys(packageLock.dependencies |{}).length; devDependencies: Object.keys(packageLock.devDependencies |{}).length}} catch (error) {return { exists: false, error: error.message }}}; async checkNodeVersion() {try {; const nodeVersion = process.version; const npmVersion = execSync('npm --version', {; cwd: this.projectRoot
    encoding: 'utf8'}).trim(); return { nodeVersion, npmVersion }} catch (error) {return { error: error.message }}}; async checkGitHooks() {try {; const hooksDir = path.join(this.projectRoot, '.git/hooks'); if (!fs.existsSync(hooksDir)) {; return { exists: false, message: 'No git hooks directory found' }}; const hooks = fs.readdirSync(hooksDir); const activeHooks = hooks.filter(hook = > {const hookPath = path.join(hooksDir, hook); const stats = fs.statSync(hookPath); return stats.isFile() && (hook.endsWith('.sample') |stats.mode & 0o111)}); return { exists: true, hooks: activeHooks }} catch (error) {return { error: error.message }}}; async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {const report = {; timestamp: new Date().toISOString(), summary: {
      , vulnerabilities: {, total: 0, critical: 0, high: 0, moderate: 0
    low: 0
    }
    outdatedPackages: Object.keys(outdatedResult).length, packageLockStatus: packageLockInfo.exists ? 'healthy': 'missing', nodeVersion: nodeInfo.nodeVersion
    npmVersion: nodeInfo.npmVersion}; details: {
      , audit: auditResult, outdated: outdatedResult, packageLock: packageLockInfo, node: nodeInfo
    gitHooks: gitHooksInfo
    }
    recommendations: []}; // Count vulnerabilities by severity; if (auditResult.vulnerabilities) {Object.values(auditResult.vulnerabilities).forEach(vuln = > {; report.summary.vulnerabilities.total++; const severity = vuln.severity?.toLowerCase() |'unknown'; if (severity = = = 'critical') report.summary.vulnerabilities.critical++; else if (severity = = = 'high') report.summary.vulnerabilities.high++; else if (severity = = = 'moderate') report.summary.vulnerabilities.moderate++; else if (severity = = = 'low') report.summary.vulnerabilities.low++})}; // Generate recommendations; if (report.summary.vulnerabilities.critical > 0 |report.summary.vulnerabilities.high > 0) {report.recommendations.push({; priority: 'critical', message: 'Critical or high security vulnerabilities detected', action: 'Run npm audit fix immediately'})}; if (report.summary.vulnerabilities.moderate > 0) {report.recommendations.push({; priority: 'high', message: 'Moderate security vulnerabilities detected', action: 'Review and fix moderate vulnerabilities'})}; if (report.summary.outdatedPackages > 10) {report.recommendations.push({; priority: 'medium', message: 'Many outdated packages detected', action: 'Consider updating packages in batches'})}; if (!packageLockInfo.exists) {report.recommendations.push({; priority: 'medium', message: 'No package-lock.json found', action: 'Run npm install to generate package-lock.json'})}; return report}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async run() {this.log('🔍 Starting Dependency Monitor...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Run all checks; this.log('🔒 Checking security vulnerabilities...'); const auditResult = await this.checkNpmAudit(); this.log('📦 Checking outdated packages...'); const outdatedResult = await this.checkOutdatedPackages(); this.log('📋 Checking package-lock.json...'); const packageLockInfo = await this.checkPackageLock(); this.log('🟢 Checking Node.js and npm versions...'); const nodeInfo = await this.checkNodeVersion(); this.log('🎣 Checking git hooks...'); const gitHooksInfo = await this.checkGitHooks(); // Generate report; this.log('📊 Generating dependency report...'); const report = await this.generateReport(; auditResult; outdatedResult; packageLockInfo, nodeInfo, gitHooksInfo); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Dependency Monitor Summary: '); this.log(`Security vulnerabilities: ${report.summary.vulnerabilities.total}`); this.log(` Critical: ${report.summary.vulnerabilities.critical}`); this.log(` High: ${report.summary.vulnerabilities.high}`); this.log(` Moderate: ${report.summary.vulnerabilities.moderate}`); this.log(` Low: ${report.summary.vulnerabilities.low}`); this.log(`Outdated packages: ${report.summary.outdatedPackages}`); this.log(`Package lock status: ${report.summary.packageLockStatus}`); this.log(`Node version: ${report.summary.nodeVersion}`); this.log(`NPM version: ${report.summary.npmVersion}`); this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {this.log('\n✨ All dependencies are healthy!')}; // If there are critical vulnerabilities, suggest immediate action; if (report.summary.vulnerabilities.critical > 0 |report.summary.vulnerabilities.high > 0) {this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'); this.log('Consider running: npm audit fix')}
} catch (error) {this.log(`❌ Error running dependency monitor: ${error.message}`); process.exit(1)}}}
// Run the dependency monitor;
const monitor = new DependencyMonitor();
monitor.run().catch(error = > {process.exit(1)});
=======

class DependencyMonitor {; constructor() {; this && this.projectRoot = process && process.cwd(); this && this.logFile = path && path.join(this && this.projectRoot, 'logs/pm2/dependency-monitor && monitor.log'); this && this.reportFile = path && path.join(this && this.projectRoot, 'logs/pm2/dependency-report && report.json'); this && this.startTime = Date && Date.now()};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`;
; try {; fs && fs.appendFileSync(this && this.logFile, logMessage)} catch (error) {; console && console.error('Error writing to log file: ', error && error.message)}};
; async checkNpmAudit() {; try {; this && this.log('🔒 Running npm audit...'); const auditResult = execSync('npm audit --json', {; cwd: this && this.projectRoot, encoding: 'utf8', stdio: 'pipe'});
; const audit = JSON && JSON.parse(auditResult); return audit} catch (error) {; // npm audit might fail if there are vulnerabilities; try {; const output = error && error.stdout?.toString() || error && error.stderr?.toString() || ''; if (output && output.includes('npm ERR!')) {; // Try to parse the error output for vulnerability info; const lines = output && output.split('\n'); const vulnerabilities = [];
; lines && lines.forEach(line = > {; if (line && line.includes('│')) {; const parts = line && line.split('│').map(p = > p && p.trim()).filter(Boolean); if (parts && parts.length > = 4) {; vulnerabilities && vulnerabilities.push({; package: parts[0], severity: parts[1], title: parts[2],
    path: parts[3]})}}});
; return { vulnerabilities, error: true }}} catch (parseError) {; this && this.log(`Error parsing npm audit output: ${parseError && parseError.message}`)};
; return { error: true, message: error && error.message }}};
; async checkOutdatedPackages() {; try {; this && this.log('📦 Checking for outdated packages...'); const outdatedResult = execSync('npm outdated --json', {; cwd: this && this.projectRoot, encoding: 'utf8', stdio: 'pipe'});
; const outdated = JSON && JSON.parse(outdatedResult); return outdated} catch (error) {; // npm outdated returns non-zero exit code if there are outdated packages; try {; const output = error && error.stdout?.toString() || ''; if (output) {; return JSON && JSON.parse(output)}} catch (parseError) {; this && this.log(`Error parsing npm outdated output: ${parseError && parseError.message}`)};
; return {}}};
; async checkPackageLock() {; try {; const packageLockPath = path && path.join(this && this.projectRoot, 'package-lock && lock.json');
; if (!fs && fs.existsSync(packageLockPath)) {; return { exists: false, message: 'No package-lock && lock.json found' }};
; const packageLock = JSON && JSON.parse(fs && fs.readFileSync(packageLockPath, 'utf8')); const lockfileVersion = packageLock && packageLock.lockfileVersion;
; return {; exists: true, lockfileVersion, dependencies: Object && Object.keys(packageLock && packageLock.dependencies || {}).length; devDependencies: Object && Object.keys(packageLock && packageLock.devDependencies || {}).length}} catch (error) {; return { exists: false, error: error && error.message }}};
; async checkNodeVersion() {; try {; const nodeVersion = process && process.version; const npmVersion = execSync('npm --version', {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim();
; return { nodeVersion, npmVersion }} catch (error) {; return { error: error && error.message }}};
; async checkGitHooks() {; try {; const hooksDir = path && path.join(this && this.projectRoot, '.git/hooks');
; if (!fs && fs.existsSync(hooksDir)) {; return { exists: false, message: 'No git hooks directory found' }};
; const hooks = fs && fs.readdirSync(hooksDir); const activeHooks = hooks && hooks.filter(hook = > {; const hookPath = path && path.join(hooksDir, hook); const stats = fs && fs.statSync(hookPath); return stats && stats.isFile() && (hook && hook.endsWith('.sample') || stats && stats.mode & 0o111)});
; return { exists: true, hooks: activeHooks }} catch (error) {; return { error: error && error.message }}};
; async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {; const report = {; timestamp: new Date().toISOString(), summary: {
=======
const fs = require ('fs');
const path = require ('path');
const { exec_sync } = require ('child_process');
;
class DependencyMonitor { constructor () { this.project_root = process.cwd (); this.log_file = path.join (this.project_root, 'logs / pm2 / dependency - monitor.log'); this.report_file = path.join (this.project_root, 'logs / pm2 / dependency - report.json'); this.start_time = Date.now ()}
; log (message) { const timestamp = new Date ().toISOString (); const log_message = `[${timestamp}] ${message}\n`;
; try { fs.appendFileSync (this.log_file, log_message)} catch (error) { console.error ('Error writing to log file: ', error.message)}}
; async checkNpmAudit () { try { this.log ('🔒 Running npm audit...'); const audit_result = exec_sync ('npm audit --json', { cwd: this.project_root, encoding: 'utf8', stdio: 'pipe'});
; const audit = JSON.parse (audit_result); return audit} catch (error) { // npm audit might fail if there are vulnerabilities; try { const output = error.stdout?.to_string () || error.stderr?.to_string () || ''; if () {) {
  $2
} // Try to parse the error output for vulnerability info; const lines = output.split ('\n'); const vulnerabilities = [];
; lines.for_each (line = > { if () {) {
  $2
} const parts = line.split ('│').map (p = > p.trim ()).filter (Boolean); // Check condition
if ( {) {
  $2
} vulnerabilities.push ({ package: parts[0], severity: parts[1], title: parts[2],
    path: parts[3]})}}});
; return { vulnerabilities, error: true }}} catch (parse_error) { this.log (`Error parsing npm audit output: ${parse_error.message}`)}
; return { error: true, message: error.message }}}
; async checkOutdatedPackages () { try { this.log ('📦 Checking for outdated packages...'); const outdated_result = exec_sync ('npm outdated --json', { cwd: this.project_root, encoding: 'utf8', stdio: 'pipe'});
; const outdated = JSON.parse (outdated_result); return outdated} catch (error) { // npm outdated returns non - zero exit code if there are outdated packages; try { const output = error.stdout?.to_string () || ''; // Check condition
if ( {) {
  $2
} return JSON.parse (output)}} catch (parse_error) { this.log (`Error parsing npm outdated output: ${parse_error.message}`)}
; return {}}}
; async checkPackageLock () { try { const packageLockPath = path.join (this.project_root, 'package - lock.json');
; if () {) {
  $2
} return { exists: false, message: 'No package - lock.json found' }}
; const package_lock = JSON.parse (fs.readFileSync (packageLockPath, 'utf8')); const lockfile_version = package_lock.lockfile_version;
; return { exists: true, lockfile_version, dependencies: Object.keys (package_lock.dependencies || {}).length; dev_dependencies: Object.keys (package_lock.dev_dependencies || {}).length}} catch (error) { return { exists: false, error: error.message }}}
; async checkNodeVersion () { try { const node_version = process.version; const npm_version = exec_sync ('npm --version', { cwd: this.project_root,
    encoding: 'utf8'}).trim ();
; return { node_version, npm_version }} catch (error) { return { error: error.message }}}
; async checkGitHooks () { try { const hooks_dir = path.join (this.project_root, '.git / hooks');
; if () {) {
  $2
} return { exists: false, message: 'No git hooks directory found' }}
; const hooks = fs.readdir_sync (hooks_dir); const active_hooks = hooks.filter (hook = > { const hook_path = path.join (hooks_dir, hook); const stats = fs.stat_sync (hook_path); return stats.is_file () && (hook.ends_with ('.sample') || stats.mode & 0o111)});
; return { exists: true, hooks: active_hooks }} catch (error) { return { error: error.message }}}
; async generate_report (audit_result, outdated_result, packageLockInfo, node_info, gitHooksInfo) { const report = { timestamp: new Date ().toISOString (), summary: {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      , vulnerabilities: {, total: 0, critical: 0, high: 0, moderate: 0,
    low: 0;
    },
<<<<<<< HEAD
    outdatedPackages: Object && Object.keys(outdatedResult).length, packageLockStatus: packageLockInfo && packageLockInfo.exists ? 'healthy': 'missing', nodeVersion: nodeInfo && nodeInfo.nodeVersion,
    npmVersion: nodeInfo && nodeInfo.npmVersion}; details: {
      , audit: auditResult, outdated: outdatedResult, packageLock: packageLockInfo, node: nodeInfo,
    gitHooks: gitHooksInfo
    },
    recommendations: []};
; // Count vulnerabilities by severity; if (auditResult && auditResult.vulnerabilities) {; Object && Object.values(auditResult && auditResult.vulnerabilities).forEach(vuln = > {; report && report.summary.vulnerabilities && vulnerabilities.total++; const severity = vuln && vuln.severity?.toLowerCase() || 'unknown'; if (severity = = = 'critical') report && report.summary.vulnerabilities && vulnerabilities.critical++; else if (severity = = = 'high') report && report.summary.vulnerabilities && vulnerabilities.high++; else if (severity = = = 'moderate') report && report.summary.vulnerabilities && vulnerabilities.moderate++; else if (severity = = = 'low') report && report.summary.vulnerabilities && vulnerabilities.low++})};
; // Generate recommendations; if (report && report.summary.vulnerabilities && vulnerabilities.critical > 0 || report && report.summary.vulnerabilities && vulnerabilities.high > 0) {; report && report.recommendations.push({; priority: 'critical', message: 'Critical or high security vulnerabilities detected', action: 'Run npm audit fix immediately'})};
; if (report && report.summary.vulnerabilities && vulnerabilities.moderate > 0) {; report && report.recommendations.push({; priority: 'high', message: 'Moderate security vulnerabilities detected', action: 'Review and fix moderate vulnerabilities'})};
; if (report && report.summary.outdatedPackages > 10) {; report && report.recommendations.push({; priority: 'medium', message: 'Many outdated packages detected', action: 'Consider updating packages in batches'})};
; if (!packageLockInfo && packageLockInfo.exists) {; report && report.recommendations.push({; priority: 'medium', message: 'No package-lock && lock.json found', action: 'Run npm install to generate package-lock && lock.json'})};
; return report};
; async saveReport(report) {; try {; const reportDir = path && path.dirname(this && this.reportFile); if (!fs && fs.existsSync(reportDir)) {; fs && fs.mkdirSync(reportDir, { recursive: true })};
; fs && fs.writeFileSync(this && this.reportFile, JSON && JSON.stringify(report, null, 2)); this && this.log(`Report saved to: ${this && this.reportFile}`)} catch (error) {; this && this.log(`Error saving report: ${error && error.message}`)}};
; async run() {; this && this.log('🔍 Starting Dependency Monitor...'); this && this.log(`Project root: ${this && this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path && path.dirname(this && this.logFile); if (!fs && fs.existsSync(logsDir)) {; fs && fs.mkdirSync(logsDir, { recursive: true })};
; // Run all checks; this && this.log('🔒 Checking security vulnerabilities...'); const auditResult = await this && this.checkNpmAudit();
; this && this.log('📦 Checking outdated packages...'); const outdatedResult = await this && this.checkOutdatedPackages();
; this && this.log('📋 Checking package-lock && lock.json...'); const packageLockInfo = await this && this.checkPackageLock();
; this && this.log('🟢 Checking Node && Node.js and npm versions...'); const nodeInfo = await this && this.checkNodeVersion();
; this && this.log('🎣 Checking git hooks...'); const gitHooksInfo = await this && this.checkGitHooks();
; // Generate report; this && this.log('📊 Generating dependency report...'); const report = await this && this.generateReport(; auditResult; outdatedResult; packageLockInfo, nodeInfo, gitHooksInfo);
; // Save report; await this && this.saveReport(report);
; const duration = Date && Date.now() - this && this.startTime;
; // Log summary; this && this.log('\n📊 Dependency Monitor Summary: '); this && this.log(`Security vulnerabilities: ${report && report.summary.vulnerabilities && vulnerabilities.total}`); this && this.log(` Critical: ${report && report.summary.vulnerabilities && vulnerabilities.critical}`); this && this.log(` High: ${report && report.summary.vulnerabilities && vulnerabilities.high}`); this && this.log(` Moderate: ${report && report.summary.vulnerabilities && vulnerabilities.moderate}`); this && this.log(` Low: ${report && report.summary.vulnerabilities && vulnerabilities.low}`); this && this.log(`Outdated packages: ${report && report.summary.outdatedPackages}`); this && this.log(`Package lock status: ${report && report.summary.packageLockStatus}`); this && this.log(`Node version: ${report && report.summary.nodeVersion}`); this && this.log(`NPM version: ${report && report.summary.npmVersion}`); this && this.log(`Duration: ${duration}ms`);
; if (report && report.recommendations.length > 0) {; this && this.log('\n💡 Recommendations: '), report && report.recommendations.forEach(rec = > {, this && this.log(` [${rec && rec.priority.toUpperCase()}] ${rec && rec.message}`); this && this.log(` Action: ${rec && rec.action}`)})} else {; this && this.log('\n✨ All dependencies are healthy!')};
; // If there are critical vulnerabilities, suggest immediate action; if (report && report.summary.vulnerabilities && vulnerabilities.critical > 0 || report && report.summary.vulnerabilities && vulnerabilities.high > 0) {; this && this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'); this && this.log('Consider running: npm audit fix')};
} catch (error) {; this && this.log(`❌ Error running dependency monitor: ${error && error.message}`); process && process.exit(1)}}};

// Run the dependency monitor;
const monitor = new DependencyMonitor();
monitor && monitor.run().catch(error = > {; process && process.exit(1)});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
class DependencyMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json');
    this.startTime = Date.now();
};
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      console.error('Error writing to log file:', error.message);
};
};
;
  async checkNpmAudit() {;
    try {;
      this.log('🔒 Running npm audit...');
      const auditResult = execSync('npm audit --json', {;
        cwd: this.projectRoot, encoding: 'utf8',
        stdio: 'pipe',
      });
;
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {;
      // npm audit might fail if there are vulnerabilities;
      try {;
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        if (output.includes('npm ERR!')) {;
          // Try to parse the error output for vulnerability info;
          const lines = output.split('\n');
          const vulnerabilities = [];
;
          lines.forEach(line => {;
            if (line.includes('│')) {;
              const parts = line.split('│').map(p => p.trim()).filter(Boolean);
              if (parts.length >= 4) {;
                vulnerabilities.push({;
                  package: parts[0], severity: parts[1],
                  title: parts[2], path: parts[3],
                });
              };
            };
          });
;
          return { vulnerabilities, error: true ,
        };
      } catch (parseError) {;
        this.log(`Error parsing npm audit output: ${parseError.message}`);
      };
;
      return { error: true, message: error.message ,
};
};
;
  async checkOutdatedPackages() {;
    try {;
      this.log('📦 Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {;
        cwd: this.projectRoot, encoding: 'utf8',
        stdio: 'pipe',
      });
;
      const outdated = JSON.parse(outdatedResult);
      return outdated;
    } catch (error) {;
      // npm outdated returns non-zero exit code if there are outdated packages;
      try {;
        const output = error.stdout?.toString() || '';
        if (output) {;
          return JSON.parse(output);
        };
      } catch (parseError) {;
        this.log(`Error parsing npm outdated output: ${parseError.message}`);
      };
;
      return {};
};
};
;
  async checkPackageLock() {;
    try {;
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
;
      if (!fs.existsSync(packageLockPath)) {;
        return { exists: false, message: 'No package-lock.json found' ,
      };
;
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      const lockfileVersion = packageLock.lockfileVersion;
;
      return {;
        exists: true, lockfileVersion,
        dependencies: Object.keys(packageLock.dependencies || {}).length;
        devDependencies: Object.keys(packageLock.devDependencies || {}).length;
      };
    } catch (error) {;
      return { exists: false, error: error.message ,
};
};
;
  async checkNodeVersion() {;
    try {;
      const nodeVersion = process.version;
      const npmVersion = execSync('npm --version', {;
        cwd: this.projectRoot, encoding: 'utf8',
      }).trim();
;
      return { nodeVersion, npmVersion };
    } catch (error) {;
      return { error: error.message ,
};
};
;
  async checkGitHooks() {;
    try {;
      const hooksDir = path.join(this.projectRoot, '.git/hooks');
;
      if (!fs.existsSync(hooksDir)) {;
        return { exists: false, message: 'No git hooks directory found' ,
      };
;
      const hooks = fs.readdirSync(hooksDir);
      const activeHooks = hooks.filter(hook => {;
        const hookPath = path.join(hooksDir, hook);
        const stats = fs.statSync(hookPath);
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111);
      });
;
      return { exists: true, hooks: activeHooks ,
    } catch (error) {;
      return { error: error.message ,
};
};
;
  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {;
    const report = {;
      timestamp: new Date().toISOString(), summary: {,
        vulnerabilities: {, total: 0,
          critical: 0, high: 0,
          moderate: 0, low: 0,
        ;
        outdatedPackages: Object.keys(outdatedResult).length, packageLockStatus: packageLockInfo.exists ? 'healthy' : 'missing',
        nodeVersion: nodeInfo.nodeVersion, npmVersion: nodeInfo.npmVersion,
      ;
      details: {, audit: auditResult,
        outdated: outdatedResult, packageLock: packageLockInfo,
        node: nodeInfo, gitHooks: gitHooksInfo,
      ;
      recommendations: [], ,
;
    // Count vulnerabilities by severity;
    if (auditResult.vulnerabilities) {;
      Object.values(auditResult.vulnerabilities).forEach(vuln => {;
        report.summary.vulnerabilities.total++;
        const severity = vuln.severity?.toLowerCase() || 'unknown';
        if (severity === 'critical') report.summary.vulnerabilities.critical++;
        else if (severity === 'high') report.summary.vulnerabilities.high++;
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++;
        else if (severity === 'low') report.summary.vulnerabilities.low++;
      });
};
;
    // Generate recommendations;
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {;
      report.recommendations.push({;
        priority: 'critical', message: 'Critical or high security vulnerabilities detected',
        action: 'Run npm audit fix immediately',
      });
};
;
    if (report.summary.vulnerabilities.moderate > 0) {;
      report.recommendations.push({;
        priority: 'high', message: 'Moderate security vulnerabilities detected',
        action: 'Review and fix moderate vulnerabilities',
      });
};
;
    if (report.summary.outdatedPackages > 10) {;
      report.recommendations.push({;
        priority: 'medium', message: 'Many outdated packages detected',
        action: 'Consider updating packages in batches',
      });
};
;
    if (!packageLockInfo.exists) {;
      report.recommendations.push({;
        priority: 'medium', message: 'No package-lock.json found',
        action: 'Run npm install to generate package-lock.json',
      });
};
;
    return report;
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
};
};
;
  async run() {;
    this.log('🔍 Starting Dependency Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
      };
;
      // Run all checks;
      this.log('🔒 Checking security vulnerabilities...');
      const auditResult = await this.checkNpmAudit();
;
      this.log('📦 Checking outdated packages...');
      const outdatedResult = await this.checkOutdatedPackages();
;
      this.log('📋 Checking package-lock.json...');
      const packageLockInfo = await this.checkPackageLock();
;
      this.log('🟢 Checking Node.js and npm versions...');
      const nodeInfo = await this.checkNodeVersion();
;
      this.log('🎣 Checking git hooks...');
      const gitHooksInfo = await this.checkGitHooks();
;
      // Generate report;
      this.log('📊 Generating dependency report...');
      const report = await this.generateReport(;
        auditResult;
        outdatedResult;
        packageLockInfo, nodeInfo, gitHooksInfo);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
      this.log('\n📊 Dependency Monitor Summary: '),
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
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {;
        this.log('\n✨ All dependencies are healthy!');
      };
;
      // If there are critical vulnerabilities, suggest immediate action;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {;
        this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'), this.log('Consider running: npm audit fix'),
      ;
;
    } catch (error) {;
      this.log(`❌ Error running dependency monitor: ${error.message}`);
      process.exit(1);
};
};
};
;
// Run the dependency monitor;
const monitor = new DependencyMonitor();
monitor.run().catch(error => {;
  process.exit(1);
});
#!/usr/bin/env node,
const fs = require('fs'),
const path = require('path'),
const { execSync } = require('child_process'),
,
class DependencyMonitor {,
  constructor() {,
    this.projectRoot = process.cwd(),
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'),
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'),
    this.startTime = Date.now(),
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
      fs.appendFileSync(this.logFile, logMessage),
    } catch (error) {,
      console.error('Error writing to log file:', error.message),
    };
  };
,
  async checkNpmAudit() {,
    try {,
      this.log('🔒 Running npm audit...'),
      const auditResult = execSync('npm audit --json', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
      }),
,
      const audit = JSON.parse(auditResult),
      return audit,
    } catch (error) {,
      // npm audit might fail if there are vulnerabilities,
      try {,
        const output = error.stdout?.toString() || error.stderr?.toString() || '',
        if (output.includes('npm ERR!')) {,
          // Try to parse the error output for vulnerability info,
          const lines = output.split('\n'),
          const vulnerabilities = [],
,
          lines.forEach(line => {,
            if (line.includes('│')) {,
              const parts = line.split('│').map(p => p.trim()).filter(Boolean),
              if (parts.length >= 4) {,
                vulnerabilities.push({,
                  package: parts[0],
                  severity: parts[1],
                  title: parts[2],
                  path: parts[3],
                }),
              };
            };
          }),
,
          return { vulnerabilities, error: true };
        };
      } catch (parseError) {,
        this.log(`Error parsing npm audit output: ${parseError.message}`),
      };
,
      return { error: true, message: error.message };
    };
  };
,
  async checkOutdatedPackages() {,
    try {,
      this.log('📦 Checking for outdated packages...'),
      const outdatedResult = execSync('npm outdated --json', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
      }),
,
      const outdated = JSON.parse(outdatedResult),
      return outdated,
    } catch (error) {,
      // npm outdated returns non-zero exit code if there are outdated packages,
      try {,
        const output = error.stdout?.toString() || '',
        if (output) {,
          return JSON.parse(output),
        };
      } catch (parseError) {,
        this.log(`Error parsing npm outdated output: ${parseError.message}`),
      };
,
      return {};
    };
  };
,
  async checkPackageLock() {,
    try {,
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),
,
      if (!fs.existsSync(packageLockPath)) {,
        return { exists: false, message: 'No package-lock.json found' };
      };
,
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8')),
      const lockfileVersion = packageLock.lockfileVersion,
,
      return {,
        exists: true,
        lockfileVersion,
        dependencies: Object.keys(packageLock.dependencies || {}).length,
        devDependencies: Object.keys(packageLock.devDependencies || {}).length,
      };
    } catch (error) {,
      return { exists: false, error: error.message };
    };
  };
,
  async checkNodeVersion() {,
    try {,
      const nodeVersion = process.version,
      const npmVersion = execSync('npm --version', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
      }).trim(),
,
      return { nodeVersion, npmVersion };
    } catch (error) {,
      return { error: error.message };
    };
  };
,
  async checkGitHooks() {,
    try {,
      const hooksDir = path.join(this.projectRoot, '.git/hooks'),
,
      if (!fs.existsSync(hooksDir)) {,
        return { exists: false, message: 'No git hooks directory found' };
      };
,
      const hooks = fs.readdirSync(hooksDir),
      const activeHooks = hooks.filter(hook => {,
        const hookPath = path.join(hooksDir, hook),
        const stats = fs.statSync(hookPath),
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111),
      }),
,
      return { exists: true, hooks: activeHooks };
    } catch (error) {,
      return { error: error.message };
    };
  };
,
  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        vulnerabilities: {,
          total: 0,
          critical: 0,
          high: 0,
          moderate: 0,
          low: 0,
        },
        outdatedPackages: Object.keys(outdatedResult).length,
        packageLockStatus: packageLockInfo.exists ? 'healthy' : 'missing',
        nodeVersion: nodeInfo.nodeVersion,
        npmVersion: nodeInfo.npmVersion,
      },
      details: {,
        audit: auditResult,
        outdated: outdatedResult,
        packageLock: packageLockInfo,
        node: nodeInfo,
        gitHooks: gitHooksInfo,
      },
      recommendations: [],
    };
,
    // Count vulnerabilities by severity,
    if (auditResult.vulnerabilities) {,
      Object.values(auditResult.vulnerabilities).forEach(vuln => {,
        report.summary.vulnerabilities.total++,
        const severity = vuln.severity?.toLowerCase() || 'unknown',
        if (severity === 'critical') report.summary.vulnerabilities.critical++,
        else if (severity === 'high') report.summary.vulnerabilities.high++,
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,
        else if (severity === 'low') report.summary.vulnerabilities.low++,
      }),
    };
,
    // Generate recommendations,
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
      report.recommendations.push({,
        priority: 'critical',
        message: 'Critical or high security vulnerabilities detected',
        action: 'Run npm audit fix immediately',
      }),
    };
,
    if (report.summary.vulnerabilities.moderate > 0) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'Moderate security vulnerabilities detected',
        action: 'Review and fix moderate vulnerabilities',
      }),
    };
,
    if (report.summary.outdatedPackages > 10) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Many outdated packages detected',
        action: 'Consider updating packages in batches',
      }),
    };
,
    if (!packageLockInfo.exists) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'No package-lock.json found',
        action: 'Run npm install to generate package-lock.json',
      }),
    };
,
    return report,
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
    };
  };
,
  async run() {,
    this.log('🔍 Starting Dependency Monitor...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true }),
      };
,
      // Run all checks,
      this.log('🔒 Checking security vulnerabilities...'),
      const auditResult = await this.checkNpmAudit(),
,
      this.log('📦 Checking outdated packages...'),
      const outdatedResult = await this.checkOutdatedPackages(),
,
      this.log('📋 Checking package-lock.json...'),
      const packageLockInfo = await this.checkPackageLock(),
,
      this.log('🟢 Checking Node.js and npm versions...'),
      const nodeInfo = await this.checkNodeVersion(),
,
      this.log('🎣 Checking git hooks...'),
      const gitHooksInfo = await this.checkGitHooks(),
,
      // Generate report,
      this.log('📊 Generating dependency report...'),
      const report = await this.generateReport(,
        auditResult,
        outdatedResult,
        packageLockInfo,
        nodeInfo,
        gitHooksInfo,
      ),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Dependency Monitor Summary: '),
      this.log(`Security vulnerabilities: ${report.summary.vulnerabilities.total}`),
      this.log(`  Critical: ${report.summary.vulnerabilities.critical}`),
      this.log(`  High: ${report.summary.vulnerabilities.high}`),
      this.log(`  Moderate: ${report.summary.vulnerabilities.moderate}`),
      this.log(`  Low: ${report.summary.vulnerabilities.low}`),
      this.log(`Outdated packages: ${report.summary.outdatedPackages}`),
      this.log(`Package lock status: ${report.summary.packageLockStatus}`),
      this.log(`Node version: ${report.summary.nodeVersion}`),
      this.log(`NPM version: ${report.summary.npmVersion}`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`),
        }),
      } else {,
        this.log('\n✨ All dependencies are healthy!'),
      };
,
      // If there are critical vulnerabilities, suggest immediate action,
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
        this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'),
        this.log('Consider running: npm audit fix'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running dependency monitor: ${error.message}`),
      process.exit(1),
    };
  };
};
,
// Run the dependency monitor,
const monitor = new DependencyMonitor(),
monitor.run().catch(error => {,
  process.exit(1),
}),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    outdated_packages: Object.keys (outdated_result).length, packageLockStatus: packageLockInfo.exists ? 'healthy': 'missing', node_version: node_info.node_version,
    npm_version: node_info.npm_version} details: {
      , audit: audit_result, outdated: outdated_result, package_lock: packageLockInfo, node: node_info,
    git_hooks: gitHooksInfo;
    },
    recommendations: []}
; // Count vulnerabilities by severity; // Check condition
if ( {) {
  $2
} Object.values (audit_result.vulnerabilities).for_each (vuln = > { report.summary.vulnerabilities.total++; const severity = vuln.severity?.toLowerCase () || 'unknown'; // Check condition
if (report.summary.vulnerabilities.critical++) {
  $2
} else // Check condition
if (report.summary.vulnerabilities.high++) {
  $2
} else // Check condition
if (report.summary.vulnerabilities.moderate++) {
  $2
} else if (report.summary.vulnerabilities.low++})}) {
  $2
} // Generate recommendations; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'critical', message: 'Critical or high security vulnerabilities detected', action: 'Run npm audit fix immediately'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'high', message: 'Moderate security vulnerabilities detected', action: 'Review and fix moderate vulnerabilities'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'Many outdated packages detected', action: 'Consider updating packages in batches'})}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'No package - lock.json found', action: 'Run npm install to generate package - lock.json'})}
; return report}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { recursive: true })}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}
; async run () { this.log ('🔍 Starting Dependency Monitor...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Run all checks; this.log ('🔒 Checking security vulnerabilities...'); const audit_result = await this.checkNpmAudit ();
; this.log ('📦 Checking outdated packages...'); const outdated_result = await this.checkOutdatedPackages ();
; this.log ('📋 Checking package - lock.json...'); const packageLockInfo = await this.checkPackageLock ();
; this.log ('🟢 Checking Node.js and npm versions...'); const node_info = await this.checkNodeVersion ();
; this.log ('🎣 Checking git hooks...'); const gitHooksInfo = await this.checkGitHooks ();
; // Generate report; this.log ('📊 Generating dependency report...'); const report = await this.generate_report ( audit_result; outdated_result; packageLockInfo, node_info, gitHooksInfo);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Dependency Monitor Summary: '); this.log (`Security vulnerabilities: ${report.summary.vulnerabilities.total}`); this.log (` Critical: ${report.summary.vulnerabilities.critical}`); this.log (` High: ${report.summary.vulnerabilities.high}`); this.log (` Moderate: ${report.summary.vulnerabilities.moderate}`); this.log (` Low: ${report.summary.vulnerabilities.low}`); this.log (`Outdated packages: ${report.summary.outdated_packages}`); this.log (`Package lock status: ${report.summary.packageLockStatus}`); this.log (`Node version: ${report.summary.node_version}`); this.log (`NPM version: ${report.summary.npm_version}`); this.log (`Duration: ${duration}ms`);
; // Check condition
if ( {) {
  $2
} this.log ('\n💡 Recommendations: '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` Action: ${rec.action}`)})} else { this.log ('\n✨ All dependencies are healthy!')}
; // If there are critical vulnerabilities, suggest immediate action; // Check condition
if ( {) {
  $2
} this.log ('\n🚨 CRITICAL: Security vulnerabilities detected!'); this.log ('Consider running: npm audit fix')}
} catch (error) { this.log (`❌ Error running dependency monitor: ${error.message}`); process.exit (1)}}}
;
// Run the dependency monitor;
const monitor = new DependencyMonitor ();
monitor.run ().catch (error = > { process.exit (1)});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
