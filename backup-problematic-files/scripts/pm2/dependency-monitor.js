<<<<<<< HEAD
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
      , vulnerabilities: {, total: 0, critical: 0, high: 0, moderate: 0,
    low: 0;
    },
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
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
};
;
  async checkNpmAudit() {;
    try {;
      this.log('🔒 Running npm audit...');
      const auditResult = execSync('npm audit --json', {;
<<<<<<< HEAD
        cwd: this.projectRoot, encoding: 'utf8',
        stdio: 'pipe',
      });
=======
        cw:d:this.projectRoot;
        encodin:g:'utf8';
        stdi:o:'pipe';      });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
                  package: parts[0], severity: parts[1],
                  title: parts[2], path: parts[3],
                });
=======
                  packag:e:parts[0];
                  severit:y:parts[1];
                  titl:e:parts[2];
                  pat:h:parts[3];                });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              };
            };
          });
;
<<<<<<< HEAD
          return { vulnerabilities, error: true ,
        };
      } catch (parseError) {;
        this.log(`Error parsing npm audit output: ${parseError.message}`);
      };
;
      return { error: true, message: error.message ,
};
=======
          return { vulnerabilities, erro:r:true ;
        };
      } catch (parseError) {;
        this.log(`Error parsing npm audit:output:${parseError.message}`);
      };
;
      return { erro:r:true, messag:e:error.message ;};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
  async checkOutdatedPackages() {;
    try {;
      this.log('📦 Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {;
<<<<<<< HEAD
        cwd: this.projectRoot, encoding: 'utf8',
        stdio: 'pipe',
      });
=======
        cw:d:this.projectRoot;
        encodin:g:'utf8';
        stdi:o:'pipe';      });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        this.log(`Error parsing npm outdated output: ${parseError.message}`);
      };
=======
        this.log(`Error parsing npm outdated:output:${parseError.message}`);      };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        return { exists: false, message: 'No package-lock.json found' ,
      };
=======
        return { exist:s:false, messag:e:'No package-lock.json found' ;      };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
;
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      const lockfileVersion = packageLock.lockfileVersion;
;
      return {;
<<<<<<< HEAD
        exists: true, lockfileVersion,
        dependencies: Object.keys(packageLock.dependencies || {}).length;
        devDependencies: Object.keys(packageLock.devDependencies || {}).length;
      };
    } catch (error) {;
      return { exists: false, error: error.message ,
};
=======
        exist:s:true;
        lockfileVersion;
        dependencie:s:Object.keys(packageLock.dependencies || {}).length;
        devDependencie:s:Object.keys(packageLock.devDependencies || {}).length;
      };
    } catch (error) {;
      return { exist:s:false, erro:r:error.message ;};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
  async checkNodeVersion() {;
    try {;
      const nodeVersion = process.version;
      const npmVersion = execSync('npm --version', {;
<<<<<<< HEAD
        cwd: this.projectRoot, encoding: 'utf8',
      }).trim();
;
      return { nodeVersion, npmVersion };
    } catch (error) {;
      return { error: error.message ,
};
=======
        cw:d:this.projectRoot;
        encodin:g:'utf8';      }).trim();
;
      return { nodeVersion, npmVersion };
    } catch (error) {;
      return { erro:r:error.message ;};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
  async checkGitHooks() {;
    try {;
      const hooksDir = path.join(this.projectRoot, '.git/hooks');
;
      if (!fs.existsSync(hooksDir)) {;
<<<<<<< HEAD
        return { exists: false, message: 'No git hooks directory found' ,
      };
=======
        return { exist:s:false, messag:e:'No git hooks directory found' ;      };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
;
      const hooks = fs.readdirSync(hooksDir);
      const activeHooks = hooks.filter(hook => {;
        const hookPath = path.join(hooksDir, hook);
        const stats = fs.statSync(hookPath);
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111);
      });
;
<<<<<<< HEAD
      return { exists: true, hooks: activeHooks ,
    } catch (error) {;
      return { error: error.message ,
};
=======
      return { exist:s:true, hook:s:activeHooks ;
    } catch (error) {;
      return { erro:r:error.message ;};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {;
    const report = {;
<<<<<<< HEAD
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
=======
      timestam:p:new Date().toISOString();
      summar:y:{;
        vulnerabilitie:s:{;
          tota:l:0;
          critica:l:0;
          hig:h:0;
          moderat:e:0;
          lo:w:0;
        ;
        outdatedPackage:s:Object.keys(outdatedResult).length;
        packageLockStatu:s:packageLockInfo.exists ? 'healthy' :'missing';
        nodeVersio:n:nodeInfo.nodeVersion;
        npmVersio:n:nodeInfo.npmVersion;
      ;
      detail:s:{;
        audi:t:auditResult;
        outdate:d:outdatedResult;
        packageLoc:k:packageLockInfo;
        nod:e:nodeInfo;
        gitHook:s:gitHooksInfo;
      ;
      recommendation:s:[];
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        priority: 'critical', message: 'Critical or high security vulnerabilities detected',
        action: 'Run npm audit fix immediately',
      });
=======
        priorit:y:'critical';
        messag:e:'Critical or high security vulnerabilities detected';
        actio:n:'Run npm audit fix immediately';      });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
    if (report.summary.vulnerabilities.moderate > 0) {;
      report.recommendations.push({;
<<<<<<< HEAD
        priority: 'high', message: 'Moderate security vulnerabilities detected',
        action: 'Review and fix moderate vulnerabilities',
      });
=======
        priorit:y:'high';
        messag:e:'Moderate security vulnerabilities detected';
        actio:n:'Review and fix moderate vulnerabilities';      });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
    if (report.summary.outdatedPackages > 10) {;
      report.recommendations.push({;
<<<<<<< HEAD
        priority: 'medium', message: 'Many outdated packages detected',
        action: 'Consider updating packages in batches',
      });
=======
        priorit:y:'medium';
        messag:e:'Many outdated packages detected';
        actio:n:'Consider updating packages in batches';      });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
    if (!packageLockInfo.exists) {;
      report.recommendations.push({;
<<<<<<< HEAD
        priority: 'medium', message: 'No package-lock.json found',
        action: 'Run npm install to generate package-lock.json',
      });
=======
        priorit:y:'medium';
        messag:e:'No package-lock.json found';
        actio:n:'Run npm install to generate package-lock.json';      });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
    return report;
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
};
=======
        fs.mkdirSync(reportDir, { recursiv:e:true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved:to:${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving:report:${error.message}`);};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
;
  async run() {;
    this.log('🔍 Starting Dependency Monitor...');
<<<<<<< HEAD
    this.log(`Project root: ${this.projectRoot}`);
;
=======
    this.log(`Project:root:${this.projectRoot}`);;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursive: true });
      };
=======
        fs.mkdirSync(logsDir, { recursiv:e:true });      };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        packageLockInfo, nodeInfo, gitHooksInfo);
=======
        packageLockInfo;
        nodeInfo;
        gitHooksInfo;
      );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
<<<<<<< HEAD
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
=======
      this.log('\n📊 Dependency Monitor:Summary:');
      this.log(`Security:vulnerabilities:${report.summary.vulnerabilities.total}`);
      this.log(`  Critica:l:${report.summary.vulnerabilities.critical}`);
      this.log(`  Hig:h:${report.summary.vulnerabilities.high}`);
      this.log(`  Moderat:e:${report.summary.vulnerabilities.moderate}`);
      this.log(`  Lo:w:${report.summary.vulnerabilities.low}`);
      this.log(`Outdated:packages:${report.summary.outdatedPackages}`);
      this.log(`Package lock:status:${report.summary.packageLockStatus}`);
      this.log(`Node:version:${report.summary.nodeVersion}`);
      this.log(`NPM:version:${report.summary.npmVersion}`);
      this.log(`Duratio:n:${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendation:s:');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio:n:${rec.action}`);        });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      } else {;
        this.log('\n✨ All dependencies are healthy!');
      };
;
      // If there are critical vulnerabilities, suggest immediate action;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {;
<<<<<<< HEAD
        this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'), this.log('Consider running: npm audit fix'),
      ;
;
    } catch (error) {;
      this.log(`❌ Error running dependency monitor: ${error.message}`);
      process.exit(1);
=======
        this.log('\n🚨 CRITICA:L:Security vulnerabilities detected!');
        this.log('Consider:running:npm audit fix');
    } catch (error) {;
      this.log(`❌ Error running dependency:monitor:${error.message}`);      process.exit(1);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
};
};
;
// Run the dependency monitor;
const monitor = new DependencyMonitor();
monitor.run().catch(error => {;
  process.exit(1);
});
<<<<<<< HEAD
=======
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
,;
class DependencyMonitor {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'),;
    this.startTime = Date.now(),;
  };
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;
      console.error('Error writing to log:file:', error.message),;
    };
  };
,;
  async checkNpmAudit() {,;
    try {,;
      this.log('🔒 Running npm audit...'),;
      const auditResult = execSync('npm audit --json', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
        stdi:o:'pipe',;
      }),;
,;
      const audit = JSON.parse(auditResult),;
      return audit,;
    } catch (error) {,;
      // npm audit might fail if there are vulnerabilities,;
      try {,;
        const output = error.stdout?.toString() || error.stderr?.toString() || '',;
        if (output.includes('npm ERR!')) {,;
          // Try to parse the error output for vulnerability info,;
          const lines = output.split('\n'),;
          const vulnerabilities = [],;
,;
          lines.forEach(line => {,;
            if (line.includes('│')) {,;
              const parts = line.split('│').map(p => p.trim()).filter(Boolean),;
              if (parts.length >= 4) {,;
                vulnerabilities.push({,;
                  packag:e:parts[0],;
                  severit:y:parts[1],;
                  titl:e:parts[2],;
                  pat:h:parts[3],;
                }),;
              };
            };
          }),;
,;
          return { vulnerabilities, erro:r:true };
        };
      } catch (parseError) {,;
        this.log(`Error parsing npm audit:output:${parseError.message}`),;
      };
,;
      return { erro:r:true, messag:e:error.message };
    };
  };
,;
  async checkOutdatedPackages() {,;
    try {,;
      this.log('📦 Checking for outdated packages...'),;
      const outdatedResult = execSync('npm outdated --json', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
        stdi:o:'pipe',;
      }),;
,;
      const outdated = JSON.parse(outdatedResult),;
      return outdated,;
    } catch (error) {,;
      // npm outdated returns non-zero exit code if there are outdated packages,;
      try {,;
        const output = error.stdout?.toString() || '',;
        if (output) {,;
          return JSON.parse(output),;
        };
      } catch (parseError) {,;
        this.log(`Error parsing npm outdated:output:${parseError.message}`),;
      };
,;
      return {};
    };
  };
,;
  async checkPackageLock() {,;
    try {,;
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),;
,;
      if (!fs.existsSync(packageLockPath)) {,;
        return { exist:s:false, messag:e:'No package-lock.json found' };
      };
,;
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8')),;
      const lockfileVersion = packageLock.lockfileVersion,;
,;
      return {,;
        exist:s:true,;
        lockfileVersion,;
        dependencie:s:Object.keys(packageLock.dependencies || {}).length,;
        devDependencie:s:Object.keys(packageLock.devDependencies || {}).length,;
      };
    } catch (error) {,;
      return { exist:s:false, erro:r:error.message };
    };
  };
,;
  async checkNodeVersion() {,;
    try {,;
      const nodeVersion = process.version,;
      const npmVersion = execSync('npm --version', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }).trim(),;
,;
      return { nodeVersion, npmVersion };
    } catch (error) {,;
      return { erro:r:error.message };
    };
  };
,;
  async checkGitHooks() {,;
    try {,;
      const hooksDir = path.join(this.projectRoot, '.git/hooks'),;
,;
      if (!fs.existsSync(hooksDir)) {,;
        return { exist:s:false, messag:e:'No git hooks directory found' };
      };
,;
      const hooks = fs.readdirSync(hooksDir),;
      const activeHooks = hooks.filter(hook => {,;
        const hookPath = path.join(hooksDir, hook),;
        const stats = fs.statSync(hookPath),;
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111),;
      }),;
,;
      return { exist:s:true, hook:s:activeHooks };
    } catch (error) {,;
      return { erro:r:error.message };
    };
  };
,;
  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {,;
    const report = {,;
      timestam:p:new Date().toISOString(),;
      summar:y:{,;
        vulnerabilitie:s:{,;
          tota:l:0,;
          critica:l:0,;
          hig:h:0,;
          moderat:e:0,;
          lo:w:0,;
        },;
        outdatedPackage:s:Object.keys(outdatedResult).length,;
        packageLockStatu:s:packageLockInfo.exists ? 'healthy' :'missing',;
        nodeVersio:n:nodeInfo.nodeVersion,;
        npmVersio:n:nodeInfo.npmVersion,;
      },;
      detail:s:{,;
        audi:t:auditResult,;
        outdate:d:outdatedResult,;
        packageLoc:k:packageLockInfo,;
        nod:e:nodeInfo,;
        gitHook:s:gitHooksInfo,;
      },;
      recommendation:s:[],;
    };
,;
    // Count vulnerabilities by severity,;
    if (auditResult.vulnerabilities) {,;
      Object.values(auditResult.vulnerabilities).forEach(vuln => {,;
        report.summary.vulnerabilities.total++,;
        const severity = vuln.severity?.toLowerCase() || 'unknown',;
        if (severity === 'critical') report.summary.vulnerabilities.critical++,;
        else if (severity === 'high') report.summary.vulnerabilities.high++,;
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,;
        else if (severity === 'low') report.summary.vulnerabilities.low++,;
      }),;
    };
,;
    // Generate recommendations,;
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,;
      report.recommendations.push({,;
        priorit:y:'critical',;
        messag:e:'Critical or high security vulnerabilities detected',;
        actio:n:'Run npm audit fix immediately',;
      }),;
    };
,;
    if (report.summary.vulnerabilities.moderate > 0) {,;
      report.recommendations.push({,;
        priorit:y:'high',;
        messag:e:'Moderate security vulnerabilities detected',;
        actio:n:'Review and fix moderate vulnerabilities',;
      }),;
    };
,;
    if (report.summary.outdatedPackages > 10) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'Many outdated packages detected',;
        actio:n:'Consider updating packages in batches',;
      }),;
    };
,;
    if (!packageLockInfo.exists) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'No package-lock.json found',;
        actio:n:'Run npm install to generate package-lock.json',;
      }),;
    };
,;
    return report,;
  };
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv:e:true }),;
      };
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
      this.log(`Error saving:report:${error.message}`),;
    };
  };
,;
  async run() {,;
    this.log('🔍 Starting Dependency Monitor...'),;
    this.log(`Project:root:${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
      };
,;
      // Run all checks,;
      this.log('🔒 Checking security vulnerabilities...'),;
      const auditResult = await this.checkNpmAudit(),;
,;
      this.log('📦 Checking outdated packages...'),;
      const outdatedResult = await this.checkOutdatedPackages(),;
,;
      this.log('📋 Checking package-lock.json...'),;
      const packageLockInfo = await this.checkPackageLock(),;
,;
      this.log('🟢 Checking Node.js and npm versions...'),;
      const nodeInfo = await this.checkNodeVersion(),;
,;
      this.log('🎣 Checking git hooks...'),;
      const gitHooksInfo = await this.checkGitHooks(),;
,;
      // Generate report,;
      this.log('📊 Generating dependency report...'),;
      const report = await this.generateReport(,;
        auditResult,;
        outdatedResult,;
        packageLockInfo,;
        nodeInfo,;
        gitHooksInfo,;
      ),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
      this.log('\n📊 Dependency Monitor:Summary:'),;
      this.log(`Security:vulnerabilities:${report.summary.vulnerabilities.total}`),;
      this.log(`  Critica:l:${report.summary.vulnerabilities.critical}`),;
      this.log(`  Hig:h:${report.summary.vulnerabilities.high}`),;
      this.log(`  Moderat:e:${report.summary.vulnerabilities.moderate}`),;
      this.log(`  Lo:w:${report.summary.vulnerabilities.low}`),;
      this.log(`Outdated:packages:${report.summary.outdatedPackages}`),;
      this.log(`Package lock:status:${report.summary.packageLockStatus}`),;
      this.log(`Node:version:${report.summary.nodeVersion}`),;
      this.log(`NPM:version:${report.summary.npmVersion}`),;
      this.log(`Duratio:n:${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation:s:'),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio:n:${rec.action}`),;
        }),;
      } else {,;
        this.log('\n✨ All dependencies are healthy!'),;
      };
,;
      // If there are critical vulnerabilities, suggest immediate action,;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,;
        this.log('\n🚨 CRITICA:L:Security vulnerabilities detected!'),;
        this.log('Consider:running:npm audit fix'),;
      };
,;
    } catch (error) {,;
      this.log(`❌ Error running dependency:monitor:${error.message}`),;
      process.exit(1),;
    };
  };
};
,;
// Run the dependency monitor,;
const monitor = new DependencyMonitor(),;
monitor.run().catch(error => {,;
  process.exit(1),;
}),;});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    this.startTime = Date.now(),
=======
    this.startTime = Date.now()
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
<<<<<<< HEAD
      fs.appendFileSync(this.logFile, logMessage),
    } catch (error) {,
      console.error('Error writing to log file:', error.message),
=======
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
  };
,
  async checkNpmAudit() {,
    try {,
      this.log('🔒 Running npm audit...'),
      const auditResult = execSync('npm audit --json', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
<<<<<<< HEAD
        stdio: 'pipe',
      }),
,
      const audit = JSON.parse(auditResult),
      return audit,
=======
        stdio: 'pipe'
      }),
,
      const audit = JSON.parse(auditResult),
      return audit
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
                  path: parts[3],
                }),
=======
                  path: parts[3]
                })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              };
            };
          }),
,
          return { vulnerabilities, error: true };
        };
      } catch (parseError) {,
<<<<<<< HEAD
        this.log(`Error parsing npm audit output: ${parseError.message}`),
=======
        this.log(`Error parsing npm audit output: ${parseError.message}`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        stdio: 'pipe',
      }),
,
      const outdated = JSON.parse(outdatedResult),
      return outdated,
=======
        stdio: 'pipe'
      }),
,
      const outdated = JSON.parse(outdatedResult),
      return outdated
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    } catch (error) {,
      // npm outdated returns non-zero exit code if there are outdated packages,
      try {,
        const output = error.stdout?.toString() || '',
        if (output) {,
<<<<<<< HEAD
          return JSON.parse(output),
        };
      } catch (parseError) {,
        this.log(`Error parsing npm outdated output: ${parseError.message}`),
=======
          return JSON.parse(output)
        };
      } catch (parseError) {,
        this.log(`Error parsing npm outdated output: ${parseError.message}`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        devDependencies: Object.keys(packageLock.devDependencies || {}).length,
=======
        devDependencies: Object.keys(packageLock.devDependencies || {}).length
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        encoding: 'utf8',
=======
        encoding: 'utf8'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111),
=======
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
          low: 0,
=======
          low: 0
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        },
        outdatedPackages: Object.keys(outdatedResult).length,
        packageLockStatus: packageLockInfo.exists ? 'healthy' : 'missing',
        nodeVersion: nodeInfo.nodeVersion,
<<<<<<< HEAD
        npmVersion: nodeInfo.npmVersion,
=======
        npmVersion: nodeInfo.npmVersion
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      },
      details: {,
        audit: auditResult,
        outdated: outdatedResult,
        packageLock: packageLockInfo,
        node: nodeInfo,
<<<<<<< HEAD
        gitHooks: gitHooksInfo,
      },
      recommendations: [],
=======
        gitHooks: gitHooksInfo
      },
      recommendations: []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        else if (severity === 'low') report.summary.vulnerabilities.low++,
      }),
=======
        else if (severity === 'low') report.summary.vulnerabilities.low++
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    // Generate recommendations,
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
      report.recommendations.push({,
        priority: 'critical',
        message: 'Critical or high security vulnerabilities detected',
<<<<<<< HEAD
        action: 'Run npm audit fix immediately',
      }),
=======
        action: 'Run npm audit fix immediately'
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    if (report.summary.vulnerabilities.moderate > 0) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'Moderate security vulnerabilities detected',
<<<<<<< HEAD
        action: 'Review and fix moderate vulnerabilities',
      }),
=======
        action: 'Review and fix moderate vulnerabilities'
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    if (report.summary.outdatedPackages > 10) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Many outdated packages detected',
<<<<<<< HEAD
        action: 'Consider updating packages in batches',
      }),
=======
        action: 'Consider updating packages in batches'
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    if (!packageLockInfo.exists) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'No package-lock.json found',
<<<<<<< HEAD
        action: 'Run npm install to generate package-lock.json',
      }),
    };
,
    return report,
=======
        action: 'Run npm install to generate package-lock.json'
      })
    };
,
    return report
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
=======
        fs.mkdirSync(reportDir, { recursive: true })
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursive: true }),
=======
        fs.mkdirSync(logsDir, { recursive: true })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        gitHooksInfo,
      ),
=======
        gitHooksInfo),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
          this.log(`    Action: ${rec.action}`),
        }),
      } else {,
        this.log('\n✨ All dependencies are healthy!'),
=======
          this.log(`    Action: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ All dependencies are healthy!')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      };
,
      // If there are critical vulnerabilities, suggest immediate action,
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
        this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'),
<<<<<<< HEAD
        this.log('Consider running: npm audit fix'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running dependency monitor: ${error.message}`),
      process.exit(1),
=======
        this.log('Consider running: npm audit fix')
      };

    } catch (error) {,
      this.log(`❌ Error running dependency monitor: ${error.message}`),
      process.exit(1)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
  };
};
,
// Run the dependency monitor,
const monitor = new DependencyMonitor(),
monitor.run().catch(error => {,
<<<<<<< HEAD
  process.exit(1),
}),
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
=======
  process.exit(1)
}),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
