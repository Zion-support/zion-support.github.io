
  'child_process');
class DependencyMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot,logs/pm2/dependency-monitor.log;
  ');
    this.reportFile = path.join(this.projectRoot,logs/pm2/dependency-report.json');
    this.startTime = Date.now();
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

        stdio: 'pipe});
      const audit = JSON.parse(auditResult);
      return audit} catch (error) {;
      // npm audit might fail if there are vulnerabilities;

        const output = error.stdout?.toString() || error.stderr?.toString() || ';
  ';

        if (output.includes('npm ERR!;
  ')) {;
          // Try to parse the error output for vulnerability info;
          const lines = output.split('\n;
  ');
          const vulnerabilities = [];

              const parts = line.split('│;
  ').map(p => p.trim()).filter(Boolean);
              if (parts.length >= 4) {;
                vulnerabilities.push({;
                  package: parts[0],;
                  severity: parts[1],;
                  title: parts[2],;
                  path: parts[3]})});
          return { vulnerabilities, error: true }

      this.log('📦 Checking for outdated packages...;
  ');
      const outdatedResult = execSync('npm outdated --json;
  ' {;
        cwd: this.projectRoot,;
        encoding:,;
  utf8;

        stdio: 'pipe});
      const outdated = JSON.parse(outdatedResult);
      return outdated} catch (error) {;
      // npm outdated returns non-zero exit code if there are outdated packages;

        this.log(`Error parsing npm outdated output: ${parseError.message}`);
      return { /* empty */ }

    try {

      const packageLockPath = path.join(this.projectRoot,package-lock.json;

        return { exists: false, message: 'No package-lock.json found;
  ' }
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath,utf8'));
      const lockfileVersion = packageLock.lockfileVersion;
      return {;
        exists: true,;
        lockfileVersion,;
        dependencies: Object.keys(packageLock.dependencies || { /* empty */ }).length,;
        devDependencies: Object.keys(packageLock.devDependencies || { /* empty */ }).length}
    } catch (error) {;
      return { exists: false, error: error.message }

    try {

      const nodeVersion = process.version;

        encoding:;
  'utf8'}).trim();
      return { nodeVersion, npmVersion }
    } catch (error) {;
      return { error: error.message }

    try {

      const hooksDir = path.join(this.projectRoot,.git/hooks;

        return { exists: false, message: 'No git hooks directory found;
  ' }
      const hooks = fs.readdirSync(hooksDir);
      const activeHooks = hooks.filter(hook => {;
        const hookPath = path.join(hooksDir, hook);
        const stats = fs.statSync(hookPath);
        return stats.isFile() && (hook.endsWith('.sample;
  ') || stats.mode & 0o111)});
      return { exists: true, hooks: activeHooks }
    } catch (error) {;
      return { error: error.message }

    const report = {
      timestamp: new: Date().toISOString(,),
      summary: {

  healthy;

      recommendations: []}
    // Count vulnerabilities by severity;
    if (auditResult.vulnerabilities) {;
      Object.values(auditResult.vulnerabilities).forEach(vuln => {;
        report.summary.vulnerabilities.total++;
        const severity = vuln.severity?.toLowerCase() ||,;
  unknown;
  ';
        if (severity === 'critical;
  ') report.summary.vulnerabilities.critical++;
        else if (severity === 'high;
  ') report.summary.vulnerabilities.high++;
        else if (severity === 'moderate;
  ') report.summary.vulnerabilities.moderate++;
        else if (severity === 'low;
  ') report.summary.vulnerabilities.low++});
    // Generate recommendations;

  high;

      report.recommendations.push({
        priority:,

  medium;

  '📊 Generating dependency report...');
      const report = await this.generateReport(;
        auditResult,;
        outdatedResult,;
        packageLockInfo,;
        nodeInfo,;
        gitHooksInfo);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;

  '\n📊 Dependency Monitor Summary:');
      this.log(`Security vulnerabilitie,
    s: ${report.summary.vulnerabilities.total}`);`
      this.log(`  Critical: ${report.summary.vulnerabilities.critical}`);`
      this.log(`  High: ${report.summary.vulnerabilities.high}`);`
      this.log(`  Moderate: ${report.summary.vulnerabilities.moderate}`);`
      this.log(`  Low: ${report.summary.vulnerabilities.low}`);`
      this.log(`Outdated packages: ${report.summary.outdatedPackages}`);`
      this.log(`Package lock status: ${report.summary.packageLockStatus}`);`
      this.log(`Node version: ${report.summary.nodeVersion}`);`
      this.log(`NPM version: ${report.summary.npmVersion}`);`
      this.log(`Duration: ${duration}ms`);

      this.log(`❌ Error running dependency monitor: ${error.message}`);
      process.exit(1);
// Run the dependency monitor;
const monitor = new DependencyMonitor();



