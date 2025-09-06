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