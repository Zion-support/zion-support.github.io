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
      console.error('Failed to write to log file:', error.message);
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
                vulnerabilities.push({
                  count: parseInt(match[1]),
                  severity: 'unknown'
                });
              }
            }
          }
          
          return {
            vulnerabilities: vulnerabilities,
            error: 'Audit failed due to vulnerabilities'
          };
        }
      } catch (parseError) {
        this.log(`Failed to parse audit error: ${parseError.message}`);
      }
      
      this.log(`npm audit failed: ${error.message}`);
      return { vulnerabilities: [], error: error.message };
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
      try {
        const output = error.stdout?.toString() || '';
        if (output.trim()) {
          const outdated = JSON.parse(output);
          return outdated;
        }
      } catch (parseError) {
        this.log(`Failed to parse outdated packages: ${parseError.message}`);
      }
      
      this.log(`npm outdated failed: ${error.message}`);
      return {};
    }
  }

  async checkPackageLock() {
    try {
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      
      if (!fs.existsSync(packageLockPath)) {
        return { exists: false, issues: ['package-lock.json not found'] };
      }
      
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      
      const issues = [];
      
      // Check for lockfile version
      if (packageLock.lockfileVersion < 2) {
        issues.push('Outdated lockfile version');
      }
      
      // Check for integrity issues
      const packages = packageLock.packages || {};
      for (const [pkgName, pkgData] of Object.entries(packages)) {
        if (pkgData.integrity && !pkgData.integrity.startsWith('sha512-')) {
          issues.push(`Weak integrity hash for ${pkgName}`);
        }
      }
      
      return {
        exists: true,
        lockfileVersion: packageLock.lockfileVersion,
        issues
      };
    } catch (error) {
      this.log(`Error checking package-lock.json: ${error.message}`);
      return { exists: false, issues: [`Error reading package-lock.json: ${error.message}`] };
    }
  }

  async checkNodeModules() {
    try {
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      
      if (!fs.existsSync(nodeModulesPath)) {
        return { exists: false, issues: ['node_modules not found'] };
      }
      
      const stats = fs.statSync(nodeModulesPath);
      const issues = [];
      
      // Check if node_modules is a directory
      if (!stats.isDirectory()) {
        issues.push('node_modules is not a directory');
      }
      
      // Check for common problematic files
      const problematicFiles = ['.DS_Store', 'Thumbs.db', '.git'];
      for (const file of problematicFiles) {
        const filePath = path.join(nodeModulesPath, file);
        if (fs.existsSync(filePath)) {
          issues.push(`Found ${file} in node_modules`);
        }
      }
      
      return {
        exists: true,
        isDirectory: stats.isDirectory(),
        issues
      };
    } catch (error) {
      this.log(`Error checking node_modules: ${error.message}`);
      return { exists: false, issues: [`Error checking node_modules: ${error.message}`] };
    }
  }

  async updateDependencies() {
    try {
      if (process.env.AUTO_UPDATE_DEV === 'true') {
        this.log('🔄 Updating development dependencies...');
        
        // Update dev dependencies
        execSync('npm update --save-dev', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        this.log('Development dependencies updated');
        return true;
      } else {
        this.log('Auto-update disabled for development dependencies');
        return false;
      }
    } catch (error) {
      this.log(`Error updating dependencies: ${error.message}`);
      return false;
    }
  }

  async installMissingDependencies() {
    try {
      this.log('📥 Checking for missing dependencies...');
      
      // Try to install dependencies
      execSync('npm install', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('Dependencies installation completed');
      return true;
    } catch (error) {
      this.log(`Error installing dependencies: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      audit: await this.checkNpmAudit(),
      outdated: await this.checkOutdatedPackages(),
      packageLock: await this.checkPackageLock(),
      nodeModules: await this.checkNodeModules(),
      updates: {
        devDependencies: await this.updateDependencies(),
        missing: await this.installMissingDependencies()
      }
    };

    // Save report
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Dependency report generated: ${this.reportFile}`);
    return report;
  }

  async checkSecurityAlerts() {
    try {
      if (process.env.SECURITY_ALERTS === 'true') {
        const audit = await this.checkNpmAudit();
        
        if (audit.vulnerabilities && audit.vulnerabilities.length > 0) {
          this.log('🚨 Security vulnerabilities detected!');
          
          for (const vuln of audit.vulnerabilities) {
            this.log(`  - ${vuln.count} ${vuln.severity} vulnerabilities`);
          }
          
          return true;
        } else {
          this.log('✅ No security vulnerabilities found');
          return false;
        }
      }
      
      return false;
    } catch (error) {
      this.log(`Error checking security alerts: ${error.message}`);
      return false;
    }
  }

  async start() {
    this.log('Dependency Monitor started');
    
    try {
      // Check for security alerts
      const hasSecurityIssues = await this.checkSecurityAlerts();
      
      // Generate comprehensive report
      const report = await this.generateReport();
      
      // Log summary
      this.log(`Dependency monitoring completed in ${report.duration}ms`);
      this.log(`  - Vulnerabilities: ${report.audit.vulnerabilities?.length || 0}`);
      this.log(`  - Outdated packages: ${Object.keys(report.outdated).length}`);
      this.log(`  - Package lock issues: ${report.packageLock.issues?.length || 0}`);
      this.log(`  - Node modules issues: ${report.nodeModules.issues?.length || 0}`);
      
      if (hasSecurityIssues) {
        this.log('⚠️  Security issues detected - manual review recommended');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`Dependency Monitor error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Start the monitor if this script is run directly
if (require.main === module) {
  const monitor = new DependencyMonitor();
  monitor.start().catch(error => {
    console.error('Dependency Monitor failed:', error.message);
    process.exit(1);
  });
}

module.exports = DependencyMonitor;
=======
#!/usr/bin/env node;
const fs = require ('fs');
const path = require ('path');
const {
  execSync 
}= require ('child process');
;
;
return {
  
}
}
};
;
async checkPackageLock () {
  ;
try {
  ;
const packageLockPath = path.join (this.projectRoot, 'package-lock.json');
;
if (!fs.existsSync (packageLockPath) ) {
  ;
return {
  exists: false, message: 'No package-lock.json found' 
}
};
;
const packageLock = JSON.parse (fs.readFileSync (packageLockPath, 'utf8') );
const lockfileVersion = packageLock.lockfileVersion;
;
return {
  ;
exists: true;
lockfileVersion;
dependencies: Object.keys (packageLock.dependencies || {
  
}) .length;
devDependencies: Object.keys (packageLock.devDependencies || {
  
}) .length 
}
}catch (error) {
  ;
return {
  exists: false, error: error.message 
}
}
};
;
async checkNodeVersion () {
  ;
try {
  ;
const nodeVersion = process.version;
const npmVersion = execSync ('npm --version', {
  ;
cwd: this.projectRoot;
encoding: 'utf8' 
}) .trim ();
;
return {
  nodeVersion, npmVersion 
}
}catch (error) {
  ;
return {
  error: error.message 
}
}
};
;
async checkGitHooks () {
  ;
try {
  ;
const hooksDir = path.join (this.projectRoot, '.git/hooks');
;
if (!fs.existsSync (hooksDir) ) {
  ;
return {
  exists: false, message: 'No git hooks directory found' 
}
};
;
const hooks = fs.readdirSync (hooksDir);
const activeHooks = hooks.filter (hook = > {
  ;
const hookPath = path.join (hooksDir, hook);
const stats = fs.statSync (hookPath);
return stats.isFile () && (hook.endsWith ('.sample') || stats.mode & 0o111) 
});
;
return {
  exists: true, hooks: activeHooks 
}
}catch (error) {
  ;
return {
  error: error.message 
}
}
};
;
async generateReport (auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {
  ;
const report = {
  ;
timestamp: new Date () .toISOString ();
summary: {
  ;
vulnerabilities: {
  ;
total: 0;
critical: 0;
high: 0;
moderate: 0;
low: 0 
};
outdatedPackages: Object.keys (outdatedResult) .length;
packageLockStatus: packageLockInfo.exists ? 'healthy': 'missing';
nodeVersion: nodeInfo.nodeVersion;
npmVersion: nodeInfo.npmVersion 
};
details: {
  ;
audit: auditResult;
outdated: outdatedResult;
packageLock: packageLockInfo;
node: nodeInfo;
gitHooks: gitHooksInfo 
};
recommendations: [] 
};
;
//Count vulnerabilities by severity;
if (auditResult.vulnerabilities) {
  ;
Object.values (auditResult.vulnerabilities) .forEach (vuln = > {
  ;
report.summary.vulnerabilities.total++;
const severity = vuln.severity?.toLowerCase () || 'unknown';
if (severity = = = 'critical') report.summary.vulnerabilities.critical++;
else if (severity = = = 'high') report.summary.vulnerabilities.high++;
else if (severity = = = 'moderate') report.summary.vulnerabilities.moderate++;
else if (severity = = = 'low') report.summary.vulnerabilities.low++ 
}) 
};
;
//Generate recommendations;
if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {
  ;
report.recommendations.push ({
  ;
priority: 'critical';
message: 'Critical or high security vulnerabilities detected';
action: 'Run npm audit fix immediately' 
}) 
};
;
if (report.summary.vulnerabilities.moderate > 0) {
  ;
report.recommendations.push ({
  ;
priority: 'high';
message: 'Moderate security vulnerabilities detected';
action: 'Review and fix moderate vulnerabilities' 
}) 
};
;
if (report.summary.outdatedPackages > 10) {
  ;
report.recommendations.push ({
  ;
priority: 'medium';
message: 'Many outdated packages detected';
action: 'Consider updating packages in batches' 
}) 
};
;
if (!packageLockInfo.exists) {
  ;
report.recommendations.push ({
  ;
priority: 'medium';
message: 'No package-lock.json found';
action: 'Run npm install to generate package-lock.json' 
}) 
};
;
return report;
};
;
async saveReport (report) {
  ;
try {
  ;
const reportDir = path.dirname (this.reportFile);
if (!fs.existsSync (reportDir) ) {
  ;
fs.mkdirSync (reportDir, {
  recursive: true 
}) 
};
;
fs.writeFileSync (this.reportFile, JSON.stringify (report, null, 2) );
this.log (`Report saved to: $ {
  this.reportFile 
}`) 
}catch (error) {
  ;
this.log (`Error saving report: $ {
  error.message 
}`) 
}
};
;
async run () {
  ;
this.log ('🔍 Starting Dependency Monitor...');
this.log (`Project root: $ {
  this.projectRoot 
}`);
;
try {
  ;
//Create logs directory if it doesn't exist;
const logsDir = path.dirname (this.logFile);
if (!fs.existsSync (logsDir) ) {
  ;
fs.mkdirSync (logsDir, {
  recursive: true 
}) 
};
;
//Run all checks;
this.log ('🔒 Checking security vulnerabilities...');
const auditResult = await this.checkNpmAudit ();
;
this.log ('📦 Checking outdated packages...');
const outdatedResult = await this.checkOutdatedPackages ();
;
this.log ('📋 Checking package-lock.json...');
const packageLockInfo = await this.checkPackageLock ();
;
this.log ('🟢 Checking Node.js and npm versions...');
const nodeInfo = await this.checkNodeVersion ();
;
this.log ('🎣 Checking git hooks...');
const gitHooksInfo = await this.checkGitHooks ();
;
//Generate report;
this.log ('📊 Generating dependency report...');
const report = await this.generateReport (;
auditResult;
outdatedResult;
packageLockInfo;
nodeInfo;
gitHooksInfo;
);
;
//Save report;
await this.saveReport (report);
;
const duration = Date.now () - this.startTime;
;
//Log summary;
this.log ('\n📊 Dependency Monitor Summary: ');
this.log (`Security vulnerabilities: $ {
  report.summary.vulnerabilities.total 
}`);
this.log (`Critical: $ {
  report.summary.vulnerabilities.critical 
}`);
this.log (`High: $ {
  report.summary.vulnerabilities.high 
}`);
this.log (`Moderate: $ {
  report.summary.vulnerabilities.moderate 
}`);
this.log (`Low: $ {
  report.summary.vulnerabilities.low 
}`);
this.log (`Outdated packages: $ {
  report.summary.outdatedPackages 
}`);
this.log (`Package lock status: $ {
  report.summary.packageLockStatus 
}`);
this.log (`Node version: $ {
  report.summary.nodeVersion 
}`);
this.log (`NPM version: $ {
  report.summary.npmVersion 
}`);
this.log (`Duration: $ {
  duration 
}ms`);
;
if (report.recommendations.length > 0) {
  ;
this.log ('\n💡 Recommendations: ');
report.recommendations.forEach (rec = > {
  ;
this.log (`[$ {
  rec.priority.toUpperCase () 
}] $ {
  rec.message 
}`);
this.log (`Action: $ {
  rec.action 
}`) 
}) 
}else {
  ;
this.log ('\n✨ All dependencies are healthy!') 
};
;
//If there are critical vulnerabilities, suggest immediate action;
if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {
  ;
this.log ('\n🚨 CRITICAL: Security vulnerabilities detected!');
this.log ('Consider running: npm audit fix') 
};
}catch (error) {
  ;
this.log (`❌ Error running dependency monitor: $ {
  error.message 
}`);
process.exit (1) 
}
}
};
;
// Run the dependency monitor;
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
