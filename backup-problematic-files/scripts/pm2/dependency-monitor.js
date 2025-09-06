<<<<<<< HEAD

=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
};
;
  async checkNpmAudit() {;
    try {;
<<<<<<< HEAD
      this.log('🔒 Running npm audit...');
      const auditResult = execSync('npm audit --json', {;

=======
      this.log(' Running npm audit...');
      const auditResult = execSync('npm audit --json', {;
        cw:d:this.projectRoot;
        encodin:g:'utf8';
        stdi:o:'pipe';      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
            if (line.includes('│')) {;
              const parts = line.split('│').map(p => p.trim()).filter(Boolean);
              if (parts.length >= 4) {;
                vulnerabilities.push({;

              };
            };
          });
;

=======
            if (line.includes('')) {;
              const parts = line.split('').map(p => p.trim()).filter(Boolean);
              if (parts.length >= 4) {;
                vulnerabilities.push({;
                  packag:e:parts[0];
                  severit:y:parts[1];
                  titl:e:parts[2];
                  pat:h:parts[3];                })
}
};
          });
;
          return { vulnerabilities, erro:r:true 
};
      } catch (parseError) {;
        this.log(`Error parsing npm audit:output:${parseError.message}`)
};
;
      return { erro:r:true, messag:e:error.message 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async checkOutdatedPackages() {;
    try {;
<<<<<<< HEAD
      this.log('📦 Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {;

=======
      this.log(' Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {;
        cw:d:this.projectRoot;
        encodin:g:'utf8';
        stdi:o:'pipe';      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const outdated = JSON.parse(outdatedResult);
      return outdated;
    } catch (error) {;
      // npm outdated returns non-zero exit code if there are outdated packages;
      try {;
        const output = error.stdout?.toString() || '';
        if (output) {;
<<<<<<< HEAD
          return JSON.parse(output);
        };
      } catch (parseError) {;

;
      return {};
};
=======
          return JSON.parse(output)
};
      } catch (parseError) {;
        this.log(`Error parsing npm outdated:output:${parseError.message}`)
};
;
      return {}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async checkPackageLock() {;
    try {;
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
;
      if (!fs.existsSync(packageLockPath)) {;
<<<<<<< HEAD

=======
        return { exist:s:false, messag:e:'No package-lock.json found' 
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      const lockfileVersion = packageLock.lockfileVersion;
;
      return {;
<<<<<<< HEAD

=======
        exist:s:true;
        lockfileVersion;
        dependencie:s:Object.keys(packageLock.dependencies || {}).length;
        devDependencie:s:Object.keys(packageLock.devDependencies || {}).length
};
    } catch (error) {;
      return { exist:s:false, erro:r:error.message 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async checkNodeVersion() {;
    try {;
      const nodeVersion = process.version;
      const npmVersion = execSync('npm --version', {;
<<<<<<< HEAD

=======
        cw:d:this.projectRoot;
        encodin:g:'utf8';      }).trim();
;
      return { nodeVersion, npmVersion };
    } catch (error) {;
      return { erro:r:error.message 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async checkGitHooks() {;
    try {;
      const hooksDir = path.join(this.projectRoot, '.git/hooks');
;
      if (!fs.existsSync(hooksDir)) {;
<<<<<<< HEAD

=======
        return { exist:s:false, messag:e:'No git hooks directory found' 
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const hooks = fs.readdirSync(hooksDir);
      const activeHooks = hooks.filter(hook => {;
        const hookPath = path.join(hooksDir, hook);
        const stats = fs.statSync(hookPath);
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111);
      });
;
<<<<<<< HEAD

=======
      return { exist:s:true, hook:s:activeHooks ;
    } catch (error) {;
      return { erro:r:error.message 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {;
    const report = {;
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Count vulnerabilities by severity;
    if (auditResult.vulnerabilities) {;
      Object.values(auditResult.vulnerabilities).forEach(vuln => {;
        report.summary.vulnerabilities.total++;
        const severity = vuln.severity?.toLowerCase() || 'unknown';
        if (severity === 'critical') report.summary.vulnerabilities.critical++;
        else if (severity === 'high') report.summary.vulnerabilities.high++;
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++;
        else if (severity === 'low') report.summary.vulnerabilities.low++;
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    // Generate recommendations;
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {;
      report.recommendations.push({;
<<<<<<< HEAD

=======
        priorit:y:'critical';
        messag:e:'Critical or high security vulnerabilities detected';
        actio:n:'Run npm audit fix immediately';      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    if (report.summary.vulnerabilities.moderate > 0) {;
      report.recommendations.push({;
<<<<<<< HEAD

=======
        priorit:y:'high';
        messag:e:'Moderate security vulnerabilities detected';
        actio:n:'Review and fix moderate vulnerabilities';      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    if (report.summary.outdatedPackages > 10) {;
      report.recommendations.push({;
<<<<<<< HEAD

=======
        priorit:y:'medium';
        messag:e:'Many outdated packages detected';
        actio:n:'Consider updating packages in batches';      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    if (!packageLockInfo.exists) {;
      report.recommendations.push({;
<<<<<<< HEAD

};
;
    return report;
=======
        priorit:y:'medium';
        messag:e:'No package-lock.json found';
        actio:n:'Run npm install to generate package-lock.json';      })
};
;
    return report
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
<<<<<<< HEAD

};
;
  async run() {;
    this.log('🔍 Starting Dependency Monitor...');

=======
        fs.mkdirSync(reportDir, { recursiv:e:true })
};
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved:to:${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving:report:${error.message}`)
}
};
;
  async run() {;
    this.log(`Project:root:${this.projectRoot}`);;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
<<<<<<< HEAD

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

=======
        fs.mkdirSync(logsDir, { recursiv:e:true })
};
;
      // Run all checks;
      this.log(' Checking security vulnerabilities...');
      const auditResult = await this.checkNpmAudit();
;
      this.log(' Checking outdated packages...');
      const outdatedResult = await this.checkOutdatedPackages();
;
      this.log(' Checking package-lock.json...');
      const packageLockInfo = await this.checkPackageLock();
;
      this.log(' Checking Node.js and npm versions...');
      const nodeInfo = await this.checkNodeVersion();
;
      this.log(' Checking git hooks...');
      const gitHooksInfo = await this.checkGitHooks();
;
      // Generate report;
      this.log(' Generating dependency report...');
      const report = await this.generateReport(;
        auditResult;
        outdatedResult;
        packageLockInfo;
        nodeInfo;
        gitHooksInfo;
      );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
<<<<<<< HEAD

      } else {;
        this.log('\n✨ All dependencies are healthy!');
      };
;
      // If there are critical vulnerabilities, suggest immediate action;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {;

};
};
=======
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
        this.log('\n Recommendation:s:');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio:n:${rec.action}`);        });
      } else {;
        this.log('\n All dependencies are healthy!')
};
;
      // If there are critical vulnerabilities, suggest immediate action;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    this.startTime = Date.now(),
};
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;
      console.error('Error writing to log:file:', error.message),
}
};
,;
  async checkNpmAudit() {,;
    try {,;
      this.log(' Running npm audit...'),;
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
            if (line.includes('')) {,;
              const parts = line.split('').map(p => p.trim()).filter(Boolean),;
              if (parts.length >= 4) {,;
                vulnerabilities.push({,;
                  packag:e:parts[0],;
                  severit:y:parts[1],;
                  titl:e:parts[2],;
                  pat:h:parts[3],;
                }),
}
};
          }),;
,;
          return { vulnerabilities, erro:r:true }
};
      } catch (parseError) {,;
        this.log(`Error parsing npm audit:output:${parseError.message}`),
};
,;
      return { erro:r:true, messag:e:error.message }
}
};
,;
  async checkOutdatedPackages() {,;
    try {,;
      this.log(' Checking for outdated packages...'),;
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
          return JSON.parse(output),
};
      } catch (parseError) {,;
        this.log(`Error parsing npm outdated:output:${parseError.message}`),
};
,;
      return {}
}
};
,;
  async checkPackageLock() {,;
    try {,;
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),;
,;
      if (!fs.existsSync(packageLockPath)) {,;
        return { exist:s:false, messag:e:'No package-lock.json found' }
};
,;
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8')),;
      const lockfileVersion = packageLock.lockfileVersion,;
,;
      return {,;
        exist:s:true,;
        lockfileVersion,;
        dependencie:s:Object.keys(packageLock.dependencies || {}).length,;
        devDependencie:s:Object.keys(packageLock.devDependencies || {}).length,
};
    } catch (error) {,;
      return { exist:s:false, erro:r:error.message }
}
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
      return { erro:r:error.message }
}
};
,;
  async checkGitHooks() {,;
    try {,;
      const hooksDir = path.join(this.projectRoot, '.git/hooks'),;
,;
      if (!fs.existsSync(hooksDir)) {,;
        return { exist:s:false, messag:e:'No git hooks directory found' }
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
      return { erro:r:error.message }
}
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
      recommendation:s:[],
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
      }),
};
,;
    // Generate recommendations,;
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,;
      report.recommendations.push({,;
        priorit:y:'critical',;
        messag:e:'Critical or high security vulnerabilities detected',;
        actio:n:'Run npm audit fix immediately',;
      }),
};
,;
    if (report.summary.vulnerabilities.moderate > 0) {,;
      report.recommendations.push({,;
        priorit:y:'high',;
        messag:e:'Moderate security vulnerabilities detected',;
        actio:n:'Review and fix moderate vulnerabilities',;
      }),
};
,;
    if (report.summary.outdatedPackages > 10) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'Many outdated packages detected',;
        actio:n:'Consider updating packages in batches',;
      }),
};
,;
    if (!packageLockInfo.exists) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'No package-lock.json found',;
        actio:n:'Run npm install to generate package-lock.json',;
      }),
};
,;
    return report,
};
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv:e:true }),
};
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
      this.log(`Error saving:report:${error.message}`),
}
};
,;
  async run() {,;
    this.log(' Starting Dependency Monitor...'),;
    this.log(`Project:root:${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv:e:true }),
};
,;
      // Run all checks,;
      this.log(' Checking security vulnerabilities...'),;
      const auditResult = await this.checkNpmAudit(),;
,;
      this.log(' Checking outdated packages...'),;
      const outdatedResult = await this.checkOutdatedPackages(),;
,;
      this.log(' Checking package-lock.json...'),;
      const packageLockInfo = await this.checkPackageLock(),;
,;
      this.log(' Checking Node.js and npm versions...'),;
      const nodeInfo = await this.checkNodeVersion(),;
,;
      this.log(' Checking git hooks...'),;
      const gitHooksInfo = await this.checkGitHooks(),;
,;
      // Generate report,;
      this.log(' Generating dependency report...'),;
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
      this.log('\n Dependency Monitor:Summary:'),;
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
        this.log('\n Recommendation:s:'),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio:n:${rec.action}`),;
        }),;
      } else {,;
        this.log('\n All dependencies are healthy!'),
};
,;
      // If there are critical vulnerabilities, suggest immediate action,;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,;
        this.log('\n CRITICA:L:Security vulnerabilities detected!'),;
        this.log('Consider:running:npm audit fix'),
};
,;
    } catch (error) {,;
      this.log(` Error running dependency:monitor:${error.message}`),;
      process.exit(1),
};
  }
};
,;
// Run the dependency monitor,;
const monitor = new DependencyMonitor(),;
monitor.run().catch(error => {,;
  process.exit(1),;
}),;});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

=======
    this.startTime = Date.now()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
<<<<<<< HEAD

    };
  };
,
  async checkNpmAudit() {,
    try {,
      this.log('🔒 Running npm audit...'),
      const auditResult = execSync('npm audit --json', {,
        cwd: this.projectRoot,
        encoding: 'utf8',

=======
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)
    }
};
,
  async checkNpmAudit() {,
    try {,
      this.log(' Running npm audit...'),
      const auditResult = execSync('npm audit --json', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      }),
,
      const audit = JSON.parse(auditResult),
      return audit
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
            if (line.includes('│')) {,
              const parts = line.split('│').map(p => p.trim()).filter(Boolean),
=======
            if (line.includes('')) {,
              const parts = line.split('').map(p => p.trim()).filter(Boolean),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              if (parts.length >= 4) {,
                vulnerabilities.push({,
                  package: parts[0],
                  severity: parts[1],
                  title: parts[2],
<<<<<<< HEAD

              };
            };
          }),
,
          return { vulnerabilities, error: true };
        };
      } catch (parseError) {,

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

=======
                  path: parts[3]
                })
              }
};
          }),
,
          return { vulnerabilities, error: true }
};
      } catch (parseError) {,
        this.log(`Error parsing npm audit output: ${parseError.message}`)
      };
,
      return { error: true, message: error.message }
}
};
,
  async checkOutdatedPackages() {,
    try {,
      this.log(' Checking for outdated packages...'),
      const outdatedResult = execSync('npm outdated --json', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      }),
,
      const outdated = JSON.parse(outdatedResult),
      return outdated
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {,
      // npm outdated returns non-zero exit code if there are outdated packages,
      try {,
        const output = error.stdout?.toString() || '',
        if (output) {,
<<<<<<< HEAD

      };
,
      return {};
    };
  };
=======
          return JSON.parse(output)
        };
      } catch (parseError) {,
        this.log(`Error parsing npm outdated output: ${parseError.message}`)
      };
,
      return {}
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
  async checkPackageLock() {,
    try {,
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),
,
      if (!fs.existsSync(packageLockPath)) {,
<<<<<<< HEAD
        return { exists: false, message: 'No package-lock.json found' };
      };
=======
        return { exists: false, message: 'No package-lock.json found' }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8')),
      const lockfileVersion = packageLock.lockfileVersion,
,
      return {,
        exists: true,
        lockfileVersion,
        dependencies: Object.keys(packageLock.dependencies || {}).length,
<<<<<<< HEAD

      };
    } catch (error) {,
      return { exists: false, error: error.message };
    };
  };
=======
        devDependencies: Object.keys(packageLock.devDependencies || {}).length
      };
    } catch (error) {,
      return { exists: false, error: error.message }
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
  async checkNodeVersion() {,
    try {,
      const nodeVersion = process.version,
      const npmVersion = execSync('npm --version', {,
        cwd: this.projectRoot,
<<<<<<< HEAD

=======
        encoding: 'utf8'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }).trim(),
,
      return { nodeVersion, npmVersion };
    } catch (error) {,
<<<<<<< HEAD
      return { error: error.message };
    };
  };
=======
      return { error: error.message }
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
  async checkGitHooks() {,
    try {,
      const hooksDir = path.join(this.projectRoot, '.git/hooks'),
,
      if (!fs.existsSync(hooksDir)) {,
<<<<<<< HEAD
        return { exists: false, message: 'No git hooks directory found' };
      };
=======
        return { exists: false, message: 'No git hooks directory found' }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
      const hooks = fs.readdirSync(hooksDir),
      const activeHooks = hooks.filter(hook => {,
        const hookPath = path.join(hooksDir, hook),
        const stats = fs.statSync(hookPath),
<<<<<<< HEAD

=======
        return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }),
,
      return { exists: true, hooks: activeHooks };
    } catch (error) {,
<<<<<<< HEAD
      return { error: error.message };
    };
  };
=======
      return { error: error.message }
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

=======
          low: 0
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        },
        outdatedPackages: Object.keys(outdatedResult).length,
        packageLockStatus: packageLockInfo.exists ? 'healthy' : 'missing',
        nodeVersion: nodeInfo.nodeVersion,
<<<<<<< HEAD

=======
        npmVersion: nodeInfo.npmVersion
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      },
      details: {,
        audit: auditResult,
        outdated: outdatedResult,
        packageLock: packageLockInfo,
        node: nodeInfo,
<<<<<<< HEAD

=======
        gitHooks: gitHooksInfo
      },
      recommendations: []
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

=======
        else if (severity === 'low') report.summary.vulnerabilities.low++
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    // Generate recommendations,
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
      report.recommendations.push({,
        priority: 'critical',
        message: 'Critical or high security vulnerabilities detected',
<<<<<<< HEAD

=======
        action: 'Run npm audit fix immediately'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (report.summary.vulnerabilities.moderate > 0) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'Moderate security vulnerabilities detected',
<<<<<<< HEAD

=======
        action: 'Review and fix moderate vulnerabilities'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (report.summary.outdatedPackages > 10) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Many outdated packages detected',
<<<<<<< HEAD

=======
        action: 'Consider updating packages in batches'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (!packageLockInfo.exists) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'No package-lock.json found',
<<<<<<< HEAD

=======
        action: 'Run npm install to generate package-lock.json'
      })
    };
,
    return report
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
<<<<<<< HEAD

    };
  };
,
  async run() {,
    this.log('🔍 Starting Dependency Monitor...'),
=======
        fs.mkdirSync(reportDir, { recursive: true })
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`)
    }
};
,
  async run() {,
    this.log(' Starting Dependency Monitor...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
<<<<<<< HEAD

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
=======
        fs.mkdirSync(logsDir, { recursive: true })
      };
,
      // Run all checks,
      this.log(' Checking security vulnerabilities...'),
      const auditResult = await this.checkNpmAudit(),
,
      this.log(' Checking outdated packages...'),
      const outdatedResult = await this.checkOutdatedPackages(),
,
      this.log(' Checking package-lock.json...'),
      const packageLockInfo = await this.checkPackageLock(),
,
      this.log(' Checking Node.js and npm versions...'),
      const nodeInfo = await this.checkNodeVersion(),
,
      this.log(' Checking git hooks...'),
      const gitHooksInfo = await this.checkGitHooks(),
,
      // Generate report,
      this.log(' Generating dependency report...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(,
        auditResult,
        outdatedResult,
        packageLockInfo,
        nodeInfo,
<<<<<<< HEAD

=======
        gitHooksInfo),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
<<<<<<< HEAD
      this.log('\n📊 Dependency Monitor Summary: '),
=======
      this.log('\n Dependency Monitor Summary: '),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),

=======
        this.log('\n Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`)
        })
      } else {,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
,
      // If there are critical vulnerabilities, suggest immediate action,
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
<<<<<<< HEAD
        this.log('\n🚨 CRITICAL: Security vulnerabilities detected!'),

    };
  };
=======
        this.log('Consider running: npm audit fix')
      };

    } catch (error) {,
      this.log(` Error running dependency monitor: ${error.message}`),
      process.exit(1)
    }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
,
// Run the dependency monitor,
const monitor = new DependencyMonitor(),
monitor.run().catch(error => {,
<<<<<<< HEAD

=======
  process.exit(1)
}),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
