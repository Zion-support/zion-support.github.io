<<<<<<< HEAD
=======
#!/usr/bin/env node;
origin/cursor/automate-test-improve-and-merge-code-2533

const fs = require('fs')const path = require('path')const { execSync }  = require('child_process')class DependencyMonitor {constructor() {this.projectRoot = process.cwd()this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log')this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json')this.startTime = Date.now()}log(message) {const timestamp = new Date().toISOString(;'
  }
  const logMessage  = `[${timestamp}] ${message}\n`;try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log "file": ', error.message)}async checkNpmAudit() {try {this.log('🔒 Running npm audit...')const audit = JSON.parse(auditResult;
  return audit} catch (error) {// npm audit might fail if there are vulnerabilities; try {const output = error.stdout?.toString() || error.stderr?.toString() || ''; if (output.includes('npm ERR!')) {// Try to parse the error output for vulnerability info;'
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

<<<<<<< HEAD
      , vulnerabilities: {, total: 0, critical: 0, high: 0, moderate: 0,
=======
const lines = output.split('\n';'
  const vulnerabilities  = [];lines.forEach(line = > {if (line.includes('│')) {const parts = line.split('│').map(p = > p.trim()).filter(Boolean)if (parts.length > = 4) {vulnerabilities.push({"package": parts[0], "severity": parts[1], "title": parts[2],"path": parts[3]})},'
})return { vulnerabilities, "error": true }} catch (parseError) {this.log(`Error parsing npm audit "output": ${parseError.messag,`}`);`return { "error": true, "message": error.message },;
}async checkOutdatedPackages() {try {this.log('📦 Checking for outdated packages...')const outdated = JSON.parse(outdatedResult)return outdated} catch (error) {// npm outdated;
  }
  returns non-zero exit code if there are outdated packages; try {const output = error.stdout?.toString() || ''; if (output) {return JSON.parse(output)} catch (parseError) {this.log(`Error parsing npm outdated "output": ${parseError.message}`)}return {},`}async checkPackageLock() {try {const packageLockPath = path.join(this.projectRoot, 'package-lock.json')if (!fs.existsSync(packageLockPath)) ;'
  }
  return { "exists": false, "message": 'No package-lock.json found' ;'
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8');'
const lockfileVersion  = packageLock.lockfileVersion;return {"exists": true, lockfileVersion, "dependencies": Object.keys(packageLock.dependencies || ,;
}).length; "devDependencies": Object.keys(packageLock.devDependencies || {}).length
} catch (error) {return { "exists": false, "error": error.message }
}async checkNodeVersion() {try {const nodeVersion = process.version;

}

const npmVersion = execSync('npm --version', {"cwd": this.projectRoot,"encoding": 'utf8,;'
}).trim()return { nodeVersion, npmVersion } catch (error) {return { "error": error.message }
}async checkGitHooks() {try {const hooksDir  = path.join(this.projectRoot, '.git/hooks')if (!fs.existsSync(hooksDir)) ;'
  }
  return { "exists": false, "message": 'No git hooks directory found' ;'
}

const hooks = fs.readdirSync(hooksDir)const activeHooks = hooks.filter(hook = > {const hookPath = path.join(hooksDir, hook)const stats = fs.statSync(hookPath)return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)})return { "exists": true, "hooks": activeHooks ,;'
} catch (error) ;
return { "error": error.message },;
}async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) ;
  const report = {"timestamp": new Date().toISOString(), "summary": {, "vulnerabilities": {, "total": 0, "critical": 0, "high": 0, "moderate": 0,"low": 0;
    }
    "outdatedPackages": Object.keys(outdatedResult).length, "packageLockStatus": packageLockInfo.exists ? 'healthy': 'missing', "nodeVersion": nodeInfo.nodeVersion;'
    "npmVersion": nodeInfo.npmVersio
}"details": {, "audit": auditResult, "outdated": outdatedResult, "packageLock": packageLockInfo, "node": nodeInfo;
    }
    "gitHooks": gitHooksInfo;
    }
    "recommendations": [
}// Count vulnerabilities by severity; if (auditResult.vulnerabilities) {Object.values(auditResult.vulnerabilities).forEach(vuln = > {report.summary.vulnerabilities.total++;

}

const severity = vuln.severity?.toLowerCase() |'unknown'; if (severity = = = 'critical') report.summary.vulnerabilities.critical++; else if (severity = = = 'high') report.summary.vulnerabilities.high++; else if (severity = = = 'moderate') report.summary.vulnerabilities.moderate++; else if (severity = = = 'low') report.summary.vulnerabilities.low++})}// Generate recommendations; if (report.summary.vulnerabilities.critical > 0 |report.summary.vulnerabilities.high > 0) {report.recommendations.push({"priority": 'critical', "message": 'Critical or high security vulnerabilities detected', "action": 'Run npm audit fix immediately'},'
}if (report.summary.vulnerabilities.moderate > 0) {report.recommendations.push({"priority": 'high', "message": 'Moderate security vulnerabilities detected', "action": 'Review and fix moderate vulnerabilities'},'
}if (report.summary.outdatedPackages > 10) {report.recommendations.push({"priority": 'medium', "message": 'Many outdated packages detected', "action": 'Consider updating packages in batches'},'
}if (!packageLockInfo.exists) {report.recommendations.push({"priority": 'medium', "message": 'No package-lock.json found', "action": 'Run npm install to generate package-lock.json'})}return repor,'
}async saveReport(report) {try {const reportDir = path.dirname(this.reportFile)if (!fs.existsSync(reportDir)) {fs.mkdirSync(reportDir, { "recursive": true }
}fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))this.log(`Report saved "to": ${this.reportFile}`)} catch (error) {this.log(`Error saving "report": ${error.message}`)}async run() {this.log('🔍 Starting Dependency Monitor...')this.log(`Project "root": ${this.projectRoo,`}`)try {// Create logs directory if it doesn't exist;'

}

const logsDir = path.dirname(this.logFile)if (!fs.existsSync(logsDir)) {fs.mkdirSync(logsDir, { "recursive": true }
}// Run all checks; this.log('🔒 Checking security vulnerabilities...')const auditResult = await this.checkNpmAudit()this.log('📦 Checking outdated packages...')const outdatedResult = await this.checkOutdatedPackages()this.log('📋 Checking package-lock.json...')const packageLockInfo = await this.checkPackageLock()this.log('🟢 Checking Node.js and npm versions...')const nodeInfo = await this.checkNodeVersion()this.log('🎣 Checking git hooks...';'
const gitHooksInfo = await this.checkGitHooks()// Generate report; this.log('📊 Generating dependency report...')const report = await this.generateReport(auditResult; outdatedResult; packageLockInfo, nodeInfo, gitHooksInfo)// Save report; await this.saveReport(report)const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Dependency Monitor "Summary": ')this.log(`Security "vulnerabilities": ${report.summary.vulnerabilities.total}`)this.log(` "Critical": ${report.summary.vulnerabilities.critical}`)this.log(` "High": ${report.summary.vulnerabilities.high}`)this.log(` "Moderate": ${report.summary.vulnerabilities.moderate}`)this.log(` "Low": ${report.summary.vulnerabilities.low}`)this.log(`Outdated "packages": ${report.summary.outdatedPackages}`)this.log(`Package lock "status": ${report.summary.packageLockStatus}`)this.log(`Node "version": ${report.summary.nodeVersion}`)this.log(`NPM "version": ${report.summary.npmVersion}`)this.log(`"Duration": ${duratio,;`}ms`)if (report.recommendations.length > 0) {this.log('\n💡 "Recommendations": '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`)this.log(` "Action": ${rec.action}`)})} else {this.log('\n✨ All dependencies are healthy!','}// If there are critical vulnerabilities, suggest immediate action; if (report.summary.vulnerabilities.critical > 0 |report.summary.vulnerabilities.high > 0) {this.log('\n🚨 "CRITICAL": Security vulnerabilities detected!')this.log('Consider "running": npm audit fix')}'
} catch (error) {this.log(`❌ Error running dependency "monitor": ${error.message}`)process.exit(1)},`}
// Run the dependency monitor;

<<<<<<< HEAD

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
=======
const monitor = new DependencyMonitor()monitor.run().catch(error = > {process.exit(1)})log(message) {const timestamp = new Date().toISOString(;
  }
  const logMessage  = `[${timestamp}] ${message}\n`;try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {,console.error('Error writing to "log": "file":', error.message)}'},,async checkNpmAudit() {,try {,this.log('🔒 Running npm audit...'),const auditResult = execSync('npm audit --json', {"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const audit = JSON.parse(auditResult);
  return audit;
    } catch (error) {,// npm audit might fail if there are vulnerabilities,try {,const output = error.stdout?.toString() || error.stderr?.toString() || '',if (output.includes('npm ERR!')) {,// Try to parse the error output for vulnerability info,const lines = output.split('\n'),const vulnerabilities = [],,lines.forEach((line) => {,if (line.includes('│')) {;'
  }
  const parts = line.split('│').map(p => p.trim()).filter(Boolean),if (parts.length >= 4) {,vulnerabilities.push({,"packag": "e": parts[0],"severit": "y": parts[1],"titl": "e": parts[2],"pat": "h": parts[3];'
                })}
monitor.run().catch(error = > {process.exit(1)});
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
  log(message) {;

<<<<<<< HEAD
}



=======
}

const timestamp = new Date().toISOString();

const logMessage = `[${timestamp}] ${message}\n`;`;
    try {;
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {,;
      }
      console.error('Error writing to "log": "file":', error.message);'
}
},;
,;
  async checkNpmAudit() {,;
    }
    try {,;
      }
      this.log('🔒 Running npm audit...'),;'

const auditResult = execSync('npm audit --json', {;'
        }
        "cw": "d": this.projectRoot,;
        "encodin": "g": 'utf8',;'
        "stdi": "o": 'pipe';'
      }),;
,;

const audit = JSON.parse(auditResult),;
      return audit;
    } catch (error) {,;
      // npm audit might fail if there are vulnerabilities,;
      }
      try {,;

}

const output = error.stdout?.toString() || error.stderr?.toString() || '',;'
        if (output.includes('npm ERR!')) {,;'
          // Try to parse the error output for vulnerability info,;

}

const lines = output.split('\n'),;'

const vulnerabilities = [],;
,;
          lines.forEach((line) => {,;
            }
            if (line.includes('│')) {,;'

}

const parts = line.split('│').map(p => { return p.trim()).filter(Boolean),; }'
              if (parts.length >= 4) {,;
                }
                vulnerabilities.push({,;
                  }
                  "packag": "e": parts[0],;
                  "severit": "y": parts[1],;
                  "titl": "e": parts[2],;
                  "pat": "h": parts[3];
                });
              }
            }
          }),,return { vulnerabilities, "erro": "r": true;
        }
      } catch (parseError) {,this.log(`Error parsing npm "audit": "output": ${parseError.message}`,`},,return { "erro": "r": true, "messag": "e": error.message;
}
},,async checkOutdatedPackages() {,try {,this.log('📦 Checking for outdated packages...'),const outdatedResult = execSync('npm outdated --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const outdated = JSON.parse(outdatedResult);
  return outdated;
    } catch (error) {,// npm outdated returns non-zero exit code if there are outdated packages,try {,const output = error.stdout?.toString() || '',if (output) {,return JSON.parse(output)}'
      } catch (parseError) {,this.log(`Error parsing npm "outdated": "output": ${parseError.message}`,`},;
  return {}
}
},,async checkPackageLock() {,try {;
  }
  const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),,if (!fs.existsSync(packageLockPath)) {;'
  }
  return { "exist": "s": false, "messag": "e": 'No package-lock.json found';'
      },,const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));'
  const lockfileVersion = packageLock.lockfileVersion,;
return {,"exist": "s": true,lockfileVersion,"dependencie": "s": Object.keys(packageLock.dependencies || ,;
}).length,"devDependencie": "s": Object.keys(packageLock.devDependencies || 
}).length;
      }
    } catch (error) {,return { "exist": "s": false, "erro": "r": error.message;
}
},,async checkNodeVersion() {,try {,const nodeVersion = process.version;
  }
  const npmVersion = execSync('npm --version', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8';'
      }).trim(),,return { nodeVersion, npmVersion }
    } catch (error) {,return { "erro": "r": error.message;
}
},,async checkGitHooks() {,try {,const hooksDir = path.join(this.projectRoot, '.git/hooks'),,if (!fs.existsSync(hooksDir)) {;'
  }
  return { "exist": "s": false, "messag": "e": 'No git hooks directory found';'
      },,const hooks = fs.readdirSync(hooksDir),const activeHooks = hooks.filter((hook) => {,const hookPath = path.join(hooksDir, hook);
  }
  const stats = fs.statSync(hookPath),return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)}),;'
  return { "exist": "s": true, "hook": "s": activeHooks;
    } catch (error) {,return { "erro": "r": error.message;
}
},,async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {,const report = {,"timestam": "p": new Date().toISOString(),"summar": "y": {,"vulnerabilitie": "s": {,"tota": "l": 0,"critica": "l": 0,"hig": "h": 0,"moderat": "e": 0,"lo": "w": 0,,"outdatedPackage": "s": Object.keys(outdatedResult).length,"packageLockStatu": "s": packageLockInfo.exists ? 'healthy' : 'missing',"nodeVersio": "n": nodeInfo.nodeVersion,"npmVersio": "n": nodeInfo.npmVersion,,"detail": "s": {,"audi": "t": auditResult,"outdate": "d": outdatedResult,"packageLoc": "k": packageLockInfo,"nod": "e": nodeInfo,"gitHook": "s": gitHooksInfo,,"recommendation": "s": [],,,// Count vulnerabilities by severity,if (auditResult.vulnerabilities) {,Object.values(auditResult.vulnerabilities).forEach((vuln) => {,report.summary.vulnerabilities.total++;'
  }
  const severity = vuln.severity?.toLowerCase() || 'unknown',if (severity === 'critical') report.summary.vulnerabilities.critical++,else if (severity === 'high') report.summary.vulnerabilities.high++,else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,else if (severity === 'low') report.summary.vulnerabilities.low++;'
      })},,// Generate recommendations,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,report.recommendations.push({,"priorit": "y": 'critical',"messag": "e": 'Critical or high security vulnerabilities detected',"actio": "n": 'Run npm audit fix immediately';'
      })},,if (report.summary.vulnerabilities.moderate > 0) {,report.recommendations.push({,"priorit": "y": 'high',"messag": "e": 'Moderate security vulnerabilities detected',"actio": "n": 'Review and fix moderate vulnerabilities';'
      })},,if (report.summary.outdatedPackages > 10) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'Many outdated packages detected',"actio": "n": 'Consider updating packages in batches';'
      })},,if (!packageLockInfo.exists) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'No package-lock.json found',"actio": "n": 'Run npm install to generate package-lock.json';'
      })},,return report;
},,async saveReport(report) {,try {,const reportDir = path.dirname(this.reportFile),if (!fs.existsSync(reportDir)) {,fs.mkdirSync(reportDir, { "recursiv": "e": true }
},,fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),this.log(`Report "saved": "to": ${this.reportFile}`,`} catch (error) {,this.log(`Error "saving": "report": ${error.message}`)},`},,async run() {,this.log('🔍 Starting Dependency Monitor...'),this.log(`"Project": "root": ${this.projectRoo,`}`),,try {,// Create logs directory if it doesn't exist,const logsDir = path.dirname(this.logFile),if (!fs.existsSync(logsDir)) {,fs.mkdirSync(logsDir, { "recursiv": "e": true },'
},,// Run all checks,this.log('🔒 Checking security vulnerabilities...'),const auditResult = await this.checkNpmAudit(),,this.log('📦 Checking outdated packages...'),const outdatedResult = await this.checkOutdatedPackages(),,this.log('📋 Checking package-lock.json...'),const packageLockInfo = await this.checkPackageLock(),,this.log('🟢 Checking Node.js and npm versions...'),const nodeInfo = await this.checkNodeVersion(),,this.log('🎣 Checking git hooks...'),const gitHooksInfo = await this.checkGitHooks(),,// Generate report,this.log('📊 Generating dependency report...'),const report = await this.generateReport(,auditResult,outdatedResult,packageLockInfo,nodeInfo,gitHooksInfo),,// Save report,await this.saveReport(report),,const duration = Date.now() - this.startTime,,// Log summary,this.log('\n📊 Dependency "Monitor": "Summary": '),this.log(`"Security": "vulnerabilities": ${report.summary.vulnerabilities.tota,`}`),this.log(`  "Critica": "l": ${report.summary.vulnerabilities.critica,`}`),this.log(`  "Hig": "h": ${report.summary.vulnerabilities.hig,`}`),this.log(`  "Moderat": "e": ${report.summary.vulnerabilities.moderat,`}`),this.log(`  "Lo": "w": ${report.summary.vulnerabilities.lo,`}`),this.log(`"Outdated": "packages": ${report.summary.outdatedPackage,`}`),this.log(`Package "lock": "status": ${report.summary.packageLockStatu,`}`),this.log(`"Node": "version": ${report.summary.nodeVersio,`}`),this.log(`"NPM": "version": ${report.summary.npmVersio,`}`),this.log(`"Duratio": "n": ${duratio,`}ms`),,if (report.recommendations.length > 0) {,this.log('\n💡 "Recommendation": "s": '),report.recommendations.forEach((rec) => {,this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),this.log(`    "Actio": "n": ${rec.action}`)},`} else {,this.log('\n✨ All dependencies are healthy!')},,// If there are critical vulnerabilities, suggest immediate action,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,this.log('\n🚨 "CRITICA": "L": Security vulnerabilities detected!'),this.log('"Consider": "running": npm audit fix','
} catch (error) {,this.log(`❌ Error running "dependency": "monitor": ${error.messag,`}`),process.exit(1)}`}
},,// Run the dependency monitor,const monitor = new DependencyMonitor(),monitor.run().catch((error) => {,process.exit(1)}),#!/usr/bin/env node,const fs = require('fs'),const path = require('path'),const { execSync } = require('child_process'),,class DependencyMonitor {,constructor() {,this.projectRoot = process.cwd(),this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'),this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'),this.startTime = Date.now()},,log(message) {,const timestamp = new Date().toISOString(),const logMessage = `[${timestamp}] ${message}\n`,,try {,fs.appendFileSync(this.logFile, logMessage)} catch (error) {,console.error('Error writing to "log": "file":', error.message)}'  },,async checkNpmAudit() {,try {,this.log('🔒 Running npm audit...');'
  }
  const auditResult = execSync('npm audit --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const audit = JSON.parse(auditResult);
  return audit;
    } catch (error) {,// npm audit might fail if there are vulnerabilities,try {,const output = error.stdout?.toString() || error.stderr?.toString() || '',if (output.includes('npm ERR!')) {,// Try to parse the error output for vulnerability info,const lines = output.split('\n'),const vulnerabilities = [],,lines.forEach((line) => {,if (line.includes('│')) {;'
  }
  const parts = line.split('│').map(p => p.trim()).filter(Boolean),if (parts.length >= 4) {,vulnerabilities.push({,"packag": "e": parts[0],"severit": "y": parts[1],"titl": "e": parts[2],"pat": "h": parts[3];'
                })}
            }
          }),,return { vulnerabilities, "erro": "r": true }
        }
     
} catch (parseError) {,this.log(`Error parsing npm "audit": "output": ${parseError.message}`,`},,return { "erro": "r": true, "messag": "e": error.message }
    }
 
},,async checkOutdatedPackages() {,try {,this.log('📦 Checking for outdated packages...'),const outdatedResult = execSync('npm outdated --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const outdated = JSON.parse(outdatedResult);
  return outdated;
    } catch (error) {,// npm outdated returns non-zero exit code if there are outdated packages,try {,const output = error.stdout?.toString() || '',if (output) {,return JSON.parse(output)}'
      } catch (parseError) {,this.log(`Error parsing npm "outdated": "output": ${parseError.message}`,`},,return {}
    }
  },,async checkPackageLock() {,try {,const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),,if (!fs.existsSync(packageLockPath)) {;'
  }
  return { "exist": "s": false, "messag": "e": 'No package-lock.json found' }'
     
},,const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));'
  const lockfileVersion = packageLock.lockfileVersion,;
return {,"exist": "s": true,lockfileVersion,"dependencie": "s": Object.keys(packageLock.dependencies || ,;
}).length,"devDependencie": "s": Object.keys(packageLock.devDependencies || 
}).length;
      }
    } catch (error) {,return { "exist": "s": false, "erro": "r": error.message }
    }
 
},,async checkNodeVersion() {,try {,const nodeVersion = process.version;
  }
  const npmVersion = execSync('npm --version', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8';'
      }).trim(),,return { nodeVersion, npmVersion }
    } catch (error) {,return { "erro": "r": error.message }
    }
 
},,async checkGitHooks() {,try {,const hooksDir = path.join(this.projectRoot, '.git/hooks'),,if (!fs.existsSync(hooksDir)) {,return { "exist": "s": false, "messag": "e": 'No git hooks directory found' }'
     
},,const hooks = fs.readdirSync(hooksDir),const activeHooks = hooks.filter((hook) => {,const hookPath = path.join(hooksDir, hook),const stats = fs.statSync(hookPath),return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)}),,return { "exist": "s": true, "hook": "s": activeHooks }'
   
} catch (error) {;
  }
  return { "erro": "r": error.message }
    }
 
},,async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {;
  }
  const report = {,"timestam": "p": new Date().toISOString(),"summar": "y": {,"vulnerabilitie": "s": {,"tota": "l": 0,"critica": "l": 0,"hig": "h": 0,"moderat": "e": 0,"lo": "w": 0;
        },"outdatedPackage": "s": Object.keys(outdatedResult).length,"packageLockStatu": "s": packageLockInfo.exists ? 'healthy' : 'missing',"nodeVersio": "n": nodeInfo.nodeVersion,"npmVersio": "n": nodeInfo.npmVersion;'
      },"detail": "s": {,"audi": "t": auditResult,"outdate": "d": outdatedResult,"packageLoc": "k": packageLockInfo,"nod": "e": nodeInfo,"gitHook": "s": gitHooksInfo;
      },"recommendation": "s": [];
    },,// Count vulnerabilities by severity,if (auditResult.vulnerabilities) {,Object.values(auditResult.vulnerabilities).forEach(vuln = > {,report.summary.vulnerabilities.total++;
  }
  const severity = vuln.severity?.toLowerCase() || 'unknown',if (severity === 'critical') report.summary.vulnerabilities.critical++,else if (severity === 'high') report.summary.vulnerabilities.high++,else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,else if (severity === 'low') report.summary.vulnerabilities.low++;'
      })},,// Generate recommendations,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,report.recommendations.push({,"priorit": "y": 'critical',"messag": "e": 'Critical or high security vulnerabilities detected',"actio": "n": 'Run npm audit fix immediately';'
      })},,if (report.summary.vulnerabilities.moderate > 0) {,report.recommendations.push({,"priorit": "y": 'high',"messag": "e": 'Moderate security vulnerabilities detected',"actio": "n": 'Review and fix moderate vulnerabilities';'
      })},,if (report.summary.outdatedPackages > 10) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'Many outdated packages detected',"actio": "n": 'Consider updating packages in batches';'
      })},,if (!packageLockInfo.exists) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'No package-lock.json found',"actio": "n": 'Run npm install to generate package-lock.json';'
      })},,return report;
  },,async saveReport(report) {,try {,const reportDir = path.dirname(this.reportFile),if (!fs.existsSync(reportDir)) {,fs.mkdirSync(reportDir, { "recursiv": "e": true }
},,fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),this.log(`Report "saved": "to": ${this.reportFile}`,`} catch (error) {,this.log(`Error "saving": "report": ${error.message}`)}` 
},,async run() {,this.log('🔍 Starting Dependency Monitor...'),this.log(`"Project": "root": ${this.projectRoo,`}`),,try {,// Create logs directory if it doesn't exist,const logsDir = path.dirname(this.logFile),if (!fs.existsSync(logsDir)) {,fs.mkdirSync(logsDir, { "recursiv": "e": true },'
},,// Run all checks,this.log('🔒 Checking security vulnerabilities...'),const auditResult = await this.checkNpmAudit(),,this.log('📦 Checking outdated packages...'),const outdatedResult = await this.checkOutdatedPackages(),,this.log('📋 Checking package-lock.json...'),const packageLockInfo = await this.checkPackageLock(),,this.log('🟢 Checking Node.js and npm versions...'),const nodeInfo = await this.checkNodeVersion(),,this.log('🎣 Checking git hooks...'),const gitHooksInfo = await this.checkGitHooks(),,// Generate report,this.log('📊 Generating dependency report...'),const report = await this.generateReport(,auditResult,outdatedResult,packageLockInfo,nodeInfo,gitHooksInfo),,// Save report,await this.saveReport(report),,const duration = Date.now() - this.startTime,,// Log summary,this.log('\n📊 Dependency "Monitor": "Summary": '),this.log(`"Security": "vulnerabilities": ${report.summary.vulnerabilities.tota,`}`),this.log(`  "Critica": "l": ${report.summary.vulnerabilities.critica,`}`),this.log(`  "Hig": "h": ${report.summary.vulnerabilities.hig,`}`),this.log(`  "Moderat": "e": ${report.summary.vulnerabilities.moderat,`}`),this.log(`  "Lo": "w": ${report.summary.vulnerabilities.lo,`}`),this.log(`"Outdated": "packages": ${report.summary.outdatedPackage,`}`),this.log(`Package "lock": "status": ${report.summary.packageLockStatu,`}`),this.log(`"Node": "version": ${report.summary.nodeVersio,`}`),this.log(`"NPM": "version": ${report.summary.npmVersio,`}`),this.log(`"Duratio": "n": ${duratio,`}ms`),,if (report.recommendations.length > 0) {,this.log('\n💡 "Recommendation": "s": '),report.recommendations.forEach((rec) => {,this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),this.log(`    "Actio": "n": ${rec.action}`)},`} else {,this.log('\n✨ All dependencies are healthy!')},,// If there are critical vulnerabilities, suggest immediate action,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,this.log('\n🚨 "CRITICA": "L": Security vulnerabilities detected!'),this.log('"Consider": "running": npm audit fix'),'
} catch (error) {,this.log(`❌ Error running "dependency": "monitor": ${error.messag,`}`),process.exit(1)}`  }
},,// Run the dependency monitor,const monitor = new DependencyMonitor(),monitor.run().catch((error) => {,process.exit(1)}),monitor.run().catch(error = > {process.exit(1)})#!/usr/bin/env node,const fs = require('fs'),const path = require('path'),const { execSync } = require('child_process'),,class DependencyMonitor {,constructor() {,this.projectRoot = process.cwd(),this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'),this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'),this.startTime = Date.now()},,log(message) {,const timestamp = new Date().toISOString(),const logMessage = `[${timestamp}] ${message}\n`,,try {,fs.appendFileSync(this.logFile, logMessage)} catch (error) {,console.error('Error writing to "log": "file":', error.message)}'},,async checkNpmAudit() {,try {,this.log('🔒 Running npm audit...');'
  }
  const auditResult = execSync('npm audit --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const audit = JSON.parse(auditResult);
  return audit;
    } catch (error) {,// npm audit might fail if there are vulnerabilities,try {,const output = error.stdout?.toString() || error.stderr?.toString() || '',if (output.includes('npm ERR!')) {,// Try to parse the error output for vulnerability info,const lines = output.split('\n'),const vulnerabilities = [],,lines.forEach((line) => {,if (line.includes('│')) {;'
  }
  const parts = line.split('│').map(p => p.trim()).filter(Boolean),if (parts.length >= 4) {,vulnerabilities.push({,"packag": "e": parts[0],"severit": "y": parts[1],"titl": "e": parts[2],"pat": "h": parts[3];'
                })}
            }
          }),,return { vulnerabilities, "erro": "r": true;
        }
      } catch (parseError) {,this.log(`Error parsing npm "audit": "output": ${parseError.message}`,`},,return { "erro": "r": true, "messag": "e": error.message;
}
},,async checkOutdatedPackages() {,try {,this.log('📦 Checking for outdated packages...'),const outdatedResult = execSync('npm outdated --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const outdated = JSON.parse(outdatedResult);
  return outdated;
    } catch (error) {,// npm outdated returns non-zero exit code if there are outdated packages,try {,const output = error.stdout?.toString() || '',if (output) {,return JSON.parse(output)}'
      } catch (parseError) {,this.log(`Error parsing npm "outdated": "output": ${parseError.message}`,`},;
  return {}
}
},,async checkPackageLock() {,try {;
  }
  const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),,if (!fs.existsSync(packageLockPath)) {;'
  }
  return { "exist": "s": false, "messag": "e": 'No package-lock.json found';'
      },,const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));'
  const lockfileVersion = packageLock.lockfileVersion,;
return {,"exist": "s": true,lockfileVersion,"dependencie": "s": Object.keys(packageLock.dependencies || ,;
}).length,"devDependencie": "s": Object.keys(packageLock.devDependencies || 
}).length;
      }
    } catch (error) {,return { "exist": "s": false, "erro": "r": error.message;
}
},,async checkNodeVersion() {,try {,const nodeVersion = process.version;
  }
  const npmVersion = execSync('npm --version', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8';'
      }).trim(),,return { nodeVersion, npmVersion }
    } catch (error) {,return { "erro": "r": error.message;
}
},,async checkGitHooks() {,try {,const hooksDir = path.join(this.projectRoot, '.git/hooks'),,if (!fs.existsSync(hooksDir)) {;'
  }
  return { "exist": "s": false, "messag": "e": 'No git hooks directory found';'
      },,const hooks = fs.readdirSync(hooksDir),const activeHooks = hooks.filter((hook) => {,const hookPath = path.join(hooksDir, hook);
  }
  const stats = fs.statSync(hookPath),return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)}),;'
  return { "exist": "s": true, "hook": "s": activeHooks;
    } catch (error) {,return { "erro": "r": error.message;
}
},,async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {,const report = {,"timestam": "p": new Date().toISOString(),"summar": "y": {,"vulnerabilitie": "s": {,"tota": "l": 0,"critica": "l": 0,"hig": "h": 0,"moderat": "e": 0,"lo": "w": 0,,"outdatedPackage": "s": Object.keys(outdatedResult).length,"packageLockStatu": "s": packageLockInfo.exists ? 'healthy' : 'missing',"nodeVersio": "n": nodeInfo.nodeVersion,"npmVersio": "n": nodeInfo.npmVersion,,"detail": "s": {,"audi": "t": auditResult,"outdate": "d": outdatedResult,"packageLoc": "k": packageLockInfo,"nod": "e": nodeInfo,"gitHook": "s": gitHooksInfo,,"recommendation": "s": [],,,// Count vulnerabilities by severity,if (auditResult.vulnerabilities) {,Object.values(auditResult.vulnerabilities).forEach((vuln) => {,report.summary.vulnerabilities.total++;'
  }
  const severity = vuln.severity?.toLowerCase() || 'unknown',if (severity === 'critical') report.summary.vulnerabilities.critical++,else if (severity === 'high') report.summary.vulnerabilities.high++,else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,else if (severity === 'low') report.summary.vulnerabilities.low++;'
      })},,// Generate recommendations,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,report.recommendations.push({,"priorit": "y": 'critical',"messag": "e": 'Critical or high security vulnerabilities detected',"actio": "n": 'Run npm audit fix immediately';'
      })},,if (report.summary.vulnerabilities.moderate > 0) {,report.recommendations.push({,"priorit": "y": 'high',"messag": "e": 'Moderate security vulnerabilities detected',"actio": "n": 'Review and fix moderate vulnerabilities';'
      })},,if (report.summary.outdatedPackages > 10) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'Many outdated packages detected',"actio": "n": 'Consider updating packages in batches';'
      })},,if (!packageLockInfo.exists) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'No package-lock.json found',"actio": "n": 'Run npm install to generate package-lock.json';'
      })},,return report;
},,async saveReport(report) {,try {,const reportDir = path.dirname(this.reportFile),if (!fs.existsSync(reportDir)) {,fs.mkdirSync(reportDir, { "recursiv": "e": true }
},,fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),this.log(`Report "saved": "to": ${this.reportFile}`,`} catch (error) {,this.log(`Error "saving": "report": ${error.message}`)},`},,async run() {,this.log('🔍 Starting Dependency Monitor...'),this.log(`"Project": "root": ${this.projectRoo,`}`),,try {,// Create logs directory if it doesn't exist,const logsDir = path.dirname(this.logFile),if (!fs.existsSync(logsDir)) {,fs.mkdirSync(logsDir, { "recursiv": "e": true },'
},,// Run all checks,this.log('🔒 Checking security vulnerabilities...'),const auditResult = await this.checkNpmAudit(),,this.log('📦 Checking outdated packages...'),const outdatedResult = await this.checkOutdatedPackages(),,this.log('📋 Checking package-lock.json...'),const packageLockInfo = await this.checkPackageLock(),,this.log('🟢 Checking Node.js and npm versions...'),const nodeInfo = await this.checkNodeVersion(),,this.log('🎣 Checking git hooks...'),const gitHooksInfo = await this.checkGitHooks(),,// Generate report,this.log('📊 Generating dependency report...'),const report = await this.generateReport(,auditResult,outdatedResult,packageLockInfo,nodeInfo,gitHooksInfo),,// Save report,await this.saveReport(report),,const duration = Date.now() - this.startTime,,// Log summary,this.log('\n📊 Dependency "Monitor": "Summary": '),this.log(`"Security": "vulnerabilities": ${report.summary.vulnerabilities.tota,`}`),this.log(`  "Critica": "l": ${report.summary.vulnerabilities.critica,`}`),this.log(`  "Hig": "h": ${report.summary.vulnerabilities.hig,`}`),this.log(`  "Moderat": "e": ${report.summary.vulnerabilities.moderat,`}`),this.log(`  "Lo": "w": ${report.summary.vulnerabilities.lo,`}`),this.log(`"Outdated": "packages": ${report.summary.outdatedPackage,`}`),this.log(`Package "lock": "status": ${report.summary.packageLockStatu,`}`),this.log(`"Node": "version": ${report.summary.nodeVersio,`}`),this.log(`"NPM": "version": ${report.summary.npmVersio,`}`),this.log(`"Duratio": "n": ${duratio,`}ms`),,if (report.recommendations.length > 0) {,this.log('\n💡 "Recommendation": "s": '),report.recommendations.forEach((rec) => {,this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),this.log(`    "Actio": "n": ${rec.action}`)},`} else {,this.log('\n✨ All dependencies are healthy!')},,// If there are critical vulnerabilities, suggest immediate action,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,this.log('\n🚨 "CRITICA": "L": Security vulnerabilities detected!'),this.log('"Consider": "running": npm audit fix','
} catch (error) {,this.log(`❌ Error running "dependency": "monitor": ${error.messag,`}`),process.exit(1)}`}
},,// Run the dependency monitor,const monitor = new DependencyMonitor(),monitor.run().catch((error) => {,process.exit(1)}),#!/usr/bin/env node,const fs = require('fs'),const path = require('path'),const { execSync } = require('child_process'),,class DependencyMonitor {,constructor() {,this.projectRoot = process.cwd(),this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log'),this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json'),this.startTime = Date.now()},,log(message) {,const timestamp = new Date().toISOString(),const logMessage = `[${timestamp}] ${message}\n`,,try {,fs.appendFileSync(this.logFile, logMessage)} catch (error) {,console.error('Error writing to "log": "file":', error.message)}'  },,async checkNpmAudit() {,try {,this.log('🔒 Running npm audit...');'
  }
  const auditResult = execSync('npm audit --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const audit = JSON.parse(auditResult);
  return audit;
    } catch (error) {,// npm audit might fail if there are vulnerabilities,try {,const output = error.stdout?.toString() || error.stderr?.toString() || '',if (output.includes('npm ERR!')) {,// Try to parse the error output for vulnerability info,const lines = output.split('\n'),const vulnerabilities = [],,lines.forEach((line) => {,if (line.includes('│')) {;'
  }
  const parts = line.split('│').map(p => p.trim()).filter(Boolean),if (parts.length >= 4) {,vulnerabilities.push({,"packag": "e": parts[0],"severit": "y": parts[1],"titl": "e": parts[2],"pat": "h": parts[3];'
                })}
            }
          }),,return { vulnerabilities, "erro": "r": true }
        }
     
} catch (parseError) {,this.log(`Error parsing npm "audit": "output": ${parseError.message}`,`},,return { "erro": "r": true, "messag": "e": error.message }
    }
 
},,async checkOutdatedPackages() {,try {,this.log('📦 Checking for outdated packages...'),const outdatedResult = execSync('npm outdated --json', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8',"stdi": "o": 'pipe';'
      }),,const outdated = JSON.parse(outdatedResult);
  return outdated;
    } catch (error) {,// npm outdated returns non-zero exit code if there are outdated packages,try {,const output = error.stdout?.toString() || '',if (output) {,return JSON.parse(output)}'
      } catch (parseError) {,this.log(`Error parsing npm "outdated": "output": ${parseError.message}`,`},,return {}
    }
  },,async checkPackageLock() {,try {,const packageLockPath = path.join(this.projectRoot, 'package-lock.json'),,if (!fs.existsSync(packageLockPath)) {;'
  }
  return { "exist": "s": false, "messag": "e": 'No package-lock.json found' }'
     
},,const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));'
  const lockfileVersion = packageLock.lockfileVersion,;
return {,"exist": "s": true,lockfileVersion,"dependencie": "s": Object.keys(packageLock.dependencies || ,;
}).length,"devDependencie": "s": Object.keys(packageLock.devDependencies || 
}).length;
      }
    } catch (error) {,return { "exist": "s": false, "erro": "r": error.message }
    }
 
},,async checkNodeVersion() {,try {,const nodeVersion = process.version;
  }
  const npmVersion = execSync('npm --version', {,"cw": "d": this.projectRoot,"encodin": "g": 'utf8';'
      }).trim(),,return { nodeVersion, npmVersion }
    } catch (error) {,return { "erro": "r": error.message }
    }
 
},,async checkGitHooks() {,try {,const hooksDir = path.join(this.projectRoot, '.git/hooks'),,if (!fs.existsSync(hooksDir)) {,return { "exist": "s": false, "messag": "e": 'No git hooks directory found' }'
     
},,const hooks = fs.readdirSync(hooksDir),const activeHooks = hooks.filter((hook) => {,const hookPath = path.join(hooksDir, hook),const stats = fs.statSync(hookPath),return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)}),,return { "exist": "s": true, "hook": "s": activeHooks }'
   
} catch (error) {;
  }
  return { "erro": "r": error.message }
    }
 
},,async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {;
  }
  const report = {,"timestam": "p": new Date().toISOString(),"summar": "y": {,"vulnerabilitie": "s": {,"tota": "l": 0,"critica": "l": 0,"hig": "h": 0,"moderat": "e": 0,"lo": "w": 0;
        },"outdatedPackage": "s": Object.keys(outdatedResult).length,"packageLockStatu": "s": packageLockInfo.exists ? 'healthy' : 'missing',"nodeVersio": "n": nodeInfo.nodeVersion,"npmVersio": "n": nodeInfo.npmVersion;'
      },"detail": "s": {,"audi": "t": auditResult,"outdate": "d": outdatedResult,"packageLoc": "k": packageLockInfo,"nod": "e": nodeInfo,"gitHook": "s": gitHooksInfo;
      },"recommendation": "s": [];
    },,// Count vulnerabilities by severity,if (auditResult.vulnerabilities) {,Object.values(auditResult.vulnerabilities).forEach(vuln = > {,report.summary.vulnerabilities.total++;
  }
  const severity = vuln.severity?.toLowerCase() || 'unknown',if (severity === 'critical') report.summary.vulnerabilities.critical++,else if (severity === 'high') report.summary.vulnerabilities.high++,else if (severity === 'moderate') report.summary.vulnerabilities.moderate++,else if (severity === 'low') report.summary.vulnerabilities.low++;'
      })},,// Generate recommendations,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,report.recommendations.push({,"priorit": "y": 'critical',"messag": "e": 'Critical or high security vulnerabilities detected',"actio": "n": 'Run npm audit fix immediately';'
      })},,if (report.summary.vulnerabilities.moderate > 0) {,report.recommendations.push({,"priorit": "y": 'high',"messag": "e": 'Moderate security vulnerabilities detected',"actio": "n": 'Review and fix moderate vulnerabilities';'
      })},,if (report.summary.outdatedPackages > 10) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'Many outdated packages detected',"actio": "n": 'Consider updating packages in batches';'
      })},,if (!packageLockInfo.exists) {,report.recommendations.push({,"priorit": "y": 'medium',"messag": "e": 'No package-lock.json found',"actio": "n": 'Run npm install to generate package-lock.json';'
      })},,return report;
  },,async saveReport(report) {,try {,const reportDir = path.dirname(this.reportFile),if (!fs.existsSync(reportDir)) {,fs.mkdirSync(reportDir, { "recursiv": "e": true }
},,fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),this.log(`Report "saved": "to": ${this.reportFile}`,`} catch (error) {,this.log(`Error "saving": "report": ${error.message}`)}` 
},,async run() {,this.log('🔍 Starting Dependency Monitor...'),this.log(`"Project": "root": ${this.projectRoo,`}`),,try {,// Create logs directory if it doesn't exist,const logsDir = path.dirname(this.logFile),if (!fs.existsSync(logsDir)) {,fs.mkdirSync(logsDir, { "recursiv": "e": true },'
},,// Run all checks,this.log('🔒 Checking security vulnerabilities...'),const auditResult = await this.checkNpmAudit(),,this.log('📦 Checking outdated packages...'),const outdatedResult = await this.checkOutdatedPackages(),,this.log('📋 Checking package-lock.json...'),const packageLockInfo = await this.checkPackageLock(),,this.log('🟢 Checking Node.js and npm versions...'),const nodeInfo = await this.checkNodeVersion(),,this.log('🎣 Checking git hooks...'),const gitHooksInfo = await this.checkGitHooks(),,// Generate report,this.log('📊 Generating dependency report...'),const report = await this.generateReport(,auditResult,outdatedResult,packageLockInfo,nodeInfo,gitHooksInfo),,// Save report,await this.saveReport(report),,const duration = Date.now() - this.startTime,,// Log summary,this.log('\n📊 Dependency "Monitor": "Summary": '),this.log(`"Security": "vulnerabilities": ${report.summary.vulnerabilities.tota,`}`),this.log(`  "Critica": "l": ${report.summary.vulnerabilities.critica,`}`),this.log(`  "Hig": "h": ${report.summary.vulnerabilities.hig,`}`),this.log(`  "Moderat": "e": ${report.summary.vulnerabilities.moderat,`}`),this.log(`  "Lo": "w": ${report.summary.vulnerabilities.lo,`}`),this.log(`"Outdated": "packages": ${report.summary.outdatedPackage,`}`),this.log(`Package "lock": "status": ${report.summary.packageLockStatu,`}`),this.log(`"Node": "version": ${report.summary.nodeVersio,`}`),this.log(`"NPM": "version": ${report.summary.npmVersio,`}`),this.log(`"Duratio": "n": ${duratio,`}ms`),,if (report.recommendations.length > 0) {,this.log('\n💡 "Recommendation": "s": '),report.recommendations.forEach((rec) => {,this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),this.log(`    "Actio": "n": ${rec.action}`)},`} else {,this.log('\n✨ All dependencies are healthy!')},,// If there are critical vulnerabilities, suggest immediate action,if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,this.log('\n🚨 "CRITICA": "L": Security vulnerabilities detected!'),this.log('"Consider": "running": npm audit fix'),'
} catch (error) {,this.log(`❌ Error running "dependency": "monitor": ${error.messag,`}`),process.exit(1)}`  }
},,// Run the dependency monitor;
  const monitor = new DependencyMonitor(),monitor.run().catch((error) => {,process.exit(1)}),, "vulnerabilities": {, "total": 0, "critical": 0, "high": 0, "moderate": 0,"low": 0;
    },class DependencyMonitor {constructor() {this.projectRoot = process.cwd()this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log')this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json')this.startTime = Date.now()}log(message) {const timestamp = new Date().toISOString(;'
  }
  const logMessage  = `[${timestamp}] ${message}\n`;try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log "file":', error.message)}async checkNpmAudit() {try {this.log('🔒 Running npm audit...')const auditResult = execSync('npm audit --json', {"cwd": this.projectRoot, "encoding": 'utf8',"stdio": 'pipe';'      })const audit = JSON.parse(auditResult;
  return audit;
    } catch (error) {// npm audit might fail if there are vulnerabilities;
      }
      try {const output = error.stdout?.toString() || error.stderr?.toString() || '';'
        }
        if (output.includes('npm ERR!')) {// Try to parse the error output for vulnerability info;'

}

const lines = output.split('\n';'
  const vulnerabilities  = [];lines.forEach(line = > {if (line.includes('│')) ;'
  }
  const parts = line.split('│').map(p => p.trim()).filter(Boolean)if (parts.length >= 4) {vulnerabilities.push({"package": parts[0], "severity": parts[1],"title": parts[2], "path": parts[3];'
                })}})return { vulnerabilities, "error": true;
        } catch (parseError) {this.log(`Error parsing npm audit "output": ${parseError.message}`,`}return { "error": true, "message": error.message;
}async checkOutdatedPackages() {try {this.log('📦 Checking for outdated packages...')const outdatedResult = execSync('npm outdated --json', {"cwd": this.projectRoot, "encoding": 'utf8',"stdio": 'pipe';'
      })const outdated = JSON.parse(outdatedResult;
  return outdated;
    } catch (error) {// npm outdated returns non-zero exit code if there are outdated packages;
      }
      try {const output = error.stdout?.toString() || '';'
        }
        if (output) {return JSON.parse(output)} catch (parseError) {this.log(`Error parsing npm outdated "output": ${parseError.message}`)}return {},`}async checkPackageLock() {try {const packageLockPath = path.join(this.projectRoot, 'package-lock.json')if (!fs.existsSync(packageLockPath)) ;'
  }
  return { "exists": false, "message": 'No package-lock.json found';'
      }

const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8');'
const lockfileVersion  = packageLock.lockfileVersion;return {"exists": true, lockfileVersion,"dependencies": Object.keys(packageLock.dependencies || ,;
}).length;
},;
,;
// Run the dependency monitor,;

const monitor = new DependencyMonitor(),;
monitor.run().catch((error) => {,;
  }
  process.exit(1);
}),;


      , "vulnerabilities": {, "total": 0, "critical": 0, "high": 0, "moderate": 0
    }
    "low": 0;
    },
,
    // Count vulnerabilities by severity,
    if (auditResult.vulnerabilities) {,
      Object.values(auditResult.vulnerabilities).forEach(vuln = $2;
        report.summary.vulnerabilities.total++,
        const severity = $2;
        if (severity = $2;
        else if (severity = $2;
        else if (severity = $2;
        else if (severity = $2;
,
    // Generate recommendations,
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
      report.recommendations.push({,
        priorit: 'critical',
        messag: 'Critical or high security vulnerabilities detected',
        actio: 'Run npm audit fix immediately'
      })
    },
,
    if (report.summary.vulnerabilities.moderate > 0) {,
      report.recommendations.push({,
        priorit: 'high',
        messag: 'Moderate security vulnerabilities detected',
        actio: 'Review and fix moderate vulnerabilities'
      })
    },
,
    if (report.summary.outdatedPackages > 10) {,
      report.recommendations.push({,
        priorit: 'medium',
        messag: 'Many outdated packages detected',
        actio: 'Consider updating packages in batches'
      })
    },
,
    if (!packageLockInfo.exists) {,
      report.recommendations.push({,
        priorit: 'medium',
        messag: 'No package-lock.json found',
        actio: 'Run npm install to generate package-lock.json'
      })
    },
,
    return report
  },
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname($2);
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: true})
      },
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving: report: ${error.message}`)
    }
  },
,
  async run() {,
    this.log($2);
    this.log($2);
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname($2);
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursiv: true})
      },
,
      // Run all checks,
      this.log($2);
      const auditResult = await this.checkNpmAudit($2);
,
      this.log($2);
      const outdatedResult = await this.checkOutdatedPackages($2);
,
      this.log($2);
      const packageLockInfo = await this.checkPackageLock($2);
,
      this.log($2);
      const nodeInfo = await this.checkNodeVersion($2);
,
      this.log($2);
      const gitHooksInfo = await this.checkGitHooks($2);
,
      // Generate report,
      this.log($2);
      const report = await this.generateReport($2);
,
      // Save report,
      await this.saveReport($2);
,
      const duration = $2;
,
      // Log summary,
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
,
      if (report.recommendations.length > 0) {,
        this.log($2);
        report.recommendations.forEach(rec = $2;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ All dependencies are healthy!')
      },
,
      // If there are critical vulnerabilities, suggest immediate action,
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {,
        this.log($2);
        this.log('Consider: running: npm audit fix')
      }

class DependencyMonitor {;
  }
  constructor() {;
    }
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log');'
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json');'
    this.startTime = Date.now()
};
;
  log(message) {;

}

const timestamp = new Date().toISOString();

const logMessage = `[${timestamp}] ${message}\n`;`;
    try {;
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      }
      console.error('Error writing to log "file":', error.message)'
};
};
;
  async checkNpmAudit() {;
    }
    try {;
      }
      this.log('🔒 Running npm audit...');'

const auditResult = execSync('npm audit --json', {;'
        }
        "cwd": this.projectRoot, "encoding": 'utf8','
        "stdio": 'pipe''
     
});
;
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {;
      // npm audit might fail if there are vulnerabilities;
      }
      try {;

}

const output = error.stdout?.toString() || error.stderr?.toString() || '';'
        if (output.includes('npm ERR!')) {;'
          // Try to parse the error output for vulnerability info;

}

const lines = output.split('\n');'

const vulnerabilities = [];
;
          lines.forEach((line) => {;
            }
            if (line.includes('│')) {;'

}

const parts = line.split('│').map(p => { return p.trim()).filter(Boolean); }'
              if (parts.length >= 4) {;
                }
                vulnerabilities.push({;
                  }
                  "package": parts[0], "severity": parts[1],
                  "title": parts[2], "path": parts[3]
                })
};

            };
          });
;
return { vulnerabilities, "error": true;
       
};
      } catch (parseError) {;
        }
        this.log(`Error parsing npm audit "output": ${parseError.message}`),`};

;
return { "error": true, "message": error.message;
}
};
};
;
  async checkOutdatedPackages() {;
    }
    try {;
      }
      this.log('📦 Checking for outdated packages...');'

const outdatedResult = execSync('npm outdated --json', {;'
        }
        "cwd": this.projectRoot, "encoding": 'utf8','
        "stdio": 'pipe''
     
});
;
      const outdated = JSON.parse(outdatedResult);
      return outdated;
    } catch (error) {;
      // npm outdated returns non-zero exit code if there are outdated packages;
      }
      try {;

}

const output = error.stdout?.toString() || '';'
        if (output) {;
}
return JSON.parse(output);
};

      } catch (parseError) {;
        }
        this.log(`Error parsing npm outdated "output": ${parseError.message}`),`};

;
      return {};
};
};
;
  async checkPackageLock() {;
    }
    try {;

}

const packageLockPath = path.join(this.projectRoot, 'package-lock.json');'
;
      if (!fs.existsSync(packageLockPath)) {;
}
return { "exists": false, "message": 'No package-lock.json found';'
     
};
;

const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));'

const lockfileVersion = packageLock.lockfileVersion;
;
      return {;
        }
        "exists": true, lockfileVersion,
        "dependencies": Object.keys(packageLock.dependencies || 
}).length;
        "devDependencies": Object.keys(packageLock.devDependencies || 
}).length;
      } catch (error) {return { "exists": false, "error": error.message;
}async checkNodeVersion() {try {const nodeVersion = process.version;

}

const npmVersion = execSync('npm --version', {"cwd": this.projectRoot, "encoding": 'utf8';'
      }).trim()return { nodeVersion, npmVersion } catch (error) {return { "error": error.message;
}async checkGitHooks() {try {const hooksDir = path.join(this.projectRoot, '.git/hooks')if (!fs.existsSync(hooksDir)) ;'
  }
  return { "exists": false, "message": 'No git hooks directory found';'
      }

const hooks = fs.readdirSync(hooksDir)const activeHooks = hooks.filter((hook) => {const hookPath = path.join(hooksDir, hook;
  }
  const stats = fs.statSync(hookPath)return stats.isFile() && (hook.endsWith('.sample') || stats.mode & 0o111)};'
  return { "exists": true, "hooks": activeHooks;
    } catch (error) {return { "error": error.message;
}async generateReport(auditResult, outdatedResult, packageLockInfo, nodeInfo, gitHooksInfo) {const report = {"timestamp": new Date().toISOString(), "summary": {,"vulnerabilities": {, "total": 0,"critical": 0, "high": 0,"moderate": 0, "low": 0,"outdatedPackages": Object.keys(outdatedResult).length, "packageLockStatus": packageLockInfo.exists ? 'healthy' : 'missing',"nodeVersion": nodeInfo.nodeVersion, "npmVersion": nodeInfo.npmVersion,"details": {, "audit": auditResult,"outdated": outdatedResult, "packageLock": packageLockInfo,"node": nodeInfo, "gitHooks": gitHooksInfo,"recommendations": [], ,// Count vulnerabilities by severity;'
    }
    if (auditResult.vulnerabilities) {Object.values(auditResult.vulnerabilities).forEach((vuln) => {report.summary.vulnerabilities.total++;

}

const severity = vuln.severity?.toLowerCase() || 'unknown';'
        if (severity === 'critical') report.summary.vulnerabilities.critical++;'
        else if (severity === 'high') report.summary.vulnerabilities.high++;'
        else if (severity === 'moderate') report.summary.vulnerabilities.moderate++;'
        else if (severity === 'low') report.summary.vulnerabilities.low++;'
      })}// Generate recommendations;
    if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {report.recommendations.push({"priority": 'critical', "message": 'Critical or high security vulnerabilities detected',"action": 'Run npm audit fix immediately';'
      })}if (report.summary.vulnerabilities.moderate > 0) {report.recommendations.push({"priority": 'high', "message": 'Moderate security vulnerabilities detected',"action": 'Review and fix moderate vulnerabilities';'
      })}if (report.summary.outdatedPackages > 10) {report.recommendations.push({"priority": 'medium', "message": 'Many outdated packages detected',"action": 'Consider updating packages in batches';'
      })}if (!packageLockInfo.exists) {report.recommendations.push({"priority": 'medium', "message": 'No package-lock.json found',"action": 'Run npm install to generate package-lock.json';'
      })}return report;
}async saveReport(report) {try {const reportDir = path.dirname(this.reportFile)if (!fs.existsSync(reportDir)) {fs.mkdirSync(reportDir, { "recursive": true }
}fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))this.log(`Report saved "to": ${this.reportFile}`)} catch (error) {this.log(`Error saving "report": ${error.message}`)}async run() {this.log('🔍 Starting Dependency Monitor...')this.log(`Project "root": ${this.projectRoo,`}`)try {// Create logs directory if it doesn't exist;'

}

const logsDir = path.dirname(this.logFile)if (!fs.existsSync(logsDir)) {fs.mkdirSync(logsDir, { "recursive": true }
}// Run all checks;
      this.log('🔒 Checking security vulnerabilities...')const auditResult = await this.checkNpmAudit()this.log('📦 Checking outdated packages...')const outdatedResult  = await this.checkOutdatedPackages()this.log('📋 Checking package-lock.json...')const packageLockInfo  = await this.checkPackageLock()this.log('🟢 Checking Node.js and npm versions...')const nodeInfo  = await this.checkNodeVersion()this.log('🎣 Checking git hooks...';'
  const gitHooksInfo  = await this.checkGitHooks()// Generate report;
      this.log('📊 Generating dependency report...')const report = await this.generateReport(auditResult;'
        outdatedResult;
        packageLockInfo, nodeInfo, gitHooksInfo)// Save report;
      await this.saveReport(report)const duration  = Date.now() - this.startTime;// Log summary;
      this.log('\n📊 Dependency Monitor "Summary": '),this.log(`Security "vulnerabilities": ${report.summary.vulnerabilities.total}`)this.log(`  "Critical": ${report.summary.vulnerabilities.critical}`)this.log(`  "High": ${report.summary.vulnerabilities.high}`)this.log(`  "Moderate": ${report.summary.vulnerabilities.moderate}`)this.log(`  "Low": ${report.summary.vulnerabilities.low}`)this.log(`Outdated "packages": ${report.summary.outdatedPackages}`)this.log(`Package lock "status": ${report.summary.packageLockStatus}`)this.log(`Node "version": ${report.summary.nodeVersion}`)this.log(`NPM "version": ${report.summary.npmVersion}`)this.log(`"Duration": ${duratio,`}ms`)if (report.recommendations.length > 0) {this.log('\n💡 "Recommendations": '), report.recommendations.forEach((rec) => {,this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`)this.log(`    "Action": ${rec.action}`)})} else {this.log('\n✨ All dependencies are healthy!','}// If there are critical vulnerabilities, suggest immediate action;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {this.log('\n🚨 "CRITICAL": Security vulnerabilities detected!'), this.log('Consider "running": npm audit fix'),;'
    } catch (error) {this.log(`❌ Error running dependency "monitor": ${error.message}`)process.exit(1)},`}// Run the dependency monitor;

const monitor  = new DependencyMonitor()"outdated_packages": Object.keys (outdated_result).length, "packageLockStatus": packageLockInfo.exists ? 'healthy': 'missing', "node_version": node_info.node_version,"npm_version": node_info.npm_versio,;'
} "details": {, "audit": audit_result, "outdated": outdated_result, "package_lock": packageLockInfo, "node": node_info,"git_hooks": gitHooksInfo;
    },"recommendations": [
}// Count vulnerabilities by severity; // Check condition;
if ( {) {$2;
} Object.values (audit_result.vulnerabilities).for_each (vuln = > { report.summary.vulnerabilities.total++;

}

const severity = vuln.severity?.toLowerCase () || 'unknown'; // Check condition;'
if (report.summary.vulnerabilities.critical++) {$2;
} else // Check condition;
if (report.summary.vulnerabilities.high++) {$2;
} else // Check condition;
if (report.summary.vulnerabilities.moderate++) {$2;
} else if (report.summary.vulnerabilities.low++})}) {$2;
} // Generate recommendations; // Check condition;
if ( {) {$2;
} report.recommendations.push ({ "priority": 'critical', "message": 'Critical or high security vulnerabilities detected', "action": 'Run npm audit fix immediately'},'
}// Check condition;
if ( {) {$2;
} report.recommendations.push ({ "priority": 'high', "message": 'Moderate security vulnerabilities detected', "action": 'Review and fix moderate vulnerabilities'},'
}// Check condition;
if ( {) {$2;
} report.recommendations.push ({ "priority": 'medium', "message": 'Many outdated packages detected', "action": 'Consider updating packages in batches'},'
}// Check condition;
if ( {) {$2;
} report.recommendations.push ({ "priority": 'medium', "message": 'No package - lock.json found', "action": 'Run npm install to generate package - lock.json'})}return repor,'
}async save_report (report) { try { const report_dir = path.dirname (this.report_file)if () {) {$2;
} fs.mkdir_sync (report_dir, { "recursive": true }
}fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2))this.log (`Report saved "to": ${this.report_file}`)} catch (error) { this.log (`Error saving "report": ${error.message}`)}async run () { this.log ('🔍 Starting Dependency Monitor...')this.log (`Project "root": ${this.project_roo,`}`)try { // Create logs directory if it doesn't exist;'

}

const logs_dir = path.dirname (this.log_file)if () {) {$2;
} fs.mkdir_sync (logs_dir, { "recursive": true }
}// Run all checks; this.log ('🔒 Checking security vulnerabilities...')const audit_result = await this.checkNpmAudit ()this.log ('📦 Checking outdated packages...')const outdated_result  = await this.checkOutdatedPackages ()this.log ('📋 Checking package - lock.json...')const packageLockInfo  = await this.checkPackageLock ()this.log ('🟢 Checking Node.js and npm versions...')const node_info  = await this.checkNodeVersion ()this.log ('🎣 Checking git hooks...';'
const gitHooksInfo  = await this.checkGitHooks ()// Generate report; this.log ('📊 Generating dependency report...')const report = await this.generate_report ( audit_result; outdated_result; packageLockInfo, node_info, gitHooksInfo)// Save report; await this.save_report (report)const duration  = Date.now () - this.start_time;// Log summary; this.log ('\n📊 Dependency Monitor "Summary": ')this.log (`Security "vulnerabilities": ${report.summary.vulnerabilities.total}`)this.log (` "Critical": ${report.summary.vulnerabilities.critical}`)this.log (` "High": ${report.summary.vulnerabilities.high}`)this.log (` "Moderate": ${report.summary.vulnerabilities.moderate}`)this.log (` "Low": ${report.summary.vulnerabilities.low}`)this.log (`Outdated "packages": ${report.summary.outdated_packages}`)this.log (`Package lock "status": ${report.summary.packageLockStatus}`)this.log (`Node "version": ${report.summary.node_version}`)this.log (`NPM "version": ${report.summary.npm_version}`)this.log (`"Duration": ${duratio,;`}ms`)// Check condition;`if ( {) {$2;
} this.log ('\n💡 "Recommendations": '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`)this.log (` "Action": ${rec.action}`)})} else { this.log ('\n✨ All dependencies are healthy!','}// If there are critical vulnerabilities, suggest immediate action; // Check condition;
if ( {) {$2;
} this.log ('\n🚨 "CRITICAL": Security vulnerabilities detected!')this.log ('Consider "running": npm audit fix')}'
} catch (error) { this.log (`❌ Error running dependency "monitor": ${error.message}`)process.exit (1)},`}// Run the dependency monitor;

const monitor = new DependencyMonitor ()monitor.run ().catch (error = > { process.exit (1)});
monitor.run().catch(error = > {process.exit(1)})ursor/fix-website-loading-errors-and-merge-6662;
monitor.run().catch(error = > {process.exit(1)})
        packageLockInfo, nodeInfo, gitHooksInfo);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
      this.log('\n📊 Dependency Monitor "Summary": '),'
      this.log(`Security "vulnerabilities": ${report.summary.vulnerabilities.tota,`}`);`      this.log(`  "Critical": ${report.summary.vulnerabilities.critica,`}`);`      this.log(`  "High": ${report.summary.vulnerabilities.hig,`}`);`      this.log(`  "Moderate": ${report.summary.vulnerabilities.moderat,`}`);`      this.log(`  "Low": ${report.summary.vulnerabilities.lo,`}`);`      this.log(`Outdated "packages": ${report.summary.outdatedPackage,`}`);`      this.log(`Package lock "status": ${report.summary.packageLockStatu,`}`);`      this.log(`Node "version": ${report.summary.nodeVersio,`}`);`      this.log(`NPM "version": ${report.summary.npmVersio,`}`);`      this.log(`"Duration": ${duratio,`}ms`);`;
      if (report.recommendations.length > 0) {;
        }
        this.log('\n💡 "Recommendations": '), report.recommendations.forEach((rec) => {,'
          }
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);`          this.log(`    "Action": ${rec.actio,`}`);`        });
      } else {;
        }
        this.log('\n✨ All dependencies are healthy!')'
};

;
      // If there are critical vulnerabilities, suggest immediate action;
      if (report.summary.vulnerabilities.critical > 0 || report.summary.vulnerabilities.high > 0) {;
        }
        this.log('\n🚨 "CRITICAL": Security vulnerabilities detected!'), this.log('Consider "running": npm audit fix'),'
      ;
;
    } catch (error) {;
      }
      this.log(`❌ Error running dependency "monitor": ${error.messag,`}`);`      process.exit(1)
};
};
;
// Run the dependency monitor;
const monitor = new DependencyMonitor();

    "outdated_packages": Object.keys (outdated_result).length, "packageLockStatus": packageLockInfo.exists ? 'healthy': 'missing', "node_version": node_info.node_version,'
    "npm_version": node_info.npm_versio
} "details": {
      , "audit": audit_result, "outdated": outdated_result, "package_lock": packageLockInfo, "node": node_info
    }
    "git_hooks": gitHooksInfo;
    },
    "recommendations": [
}
; // Count vulnerabilities by severity; // Check condition,
if ( {) {
  $2
} Object.values (audit_result.vulnerabilities).for_each (vuln = > { report.summary.vulnerabilities.total++;

}

const severity = vuln.severity?.toLowerCase () || 'unknown'; // Check condition;'
if (report.summary.vulnerabilities.critical++) {
  $2
} else // Check condition,
if (report.summary.vulnerabilities.high++) {
  $2
} else // Check condition,
if (report.summary.vulnerabilities.moderate++) {
  $2
} else if (report.summary.vulnerabilities.low++})}) {
  $2
} // Generate recommendations; // Check condition,
if ( {) {
  $2
} report.recommendations.push ({ "priority": 'critical', "message": 'Critical or high security vulnerabilities detected', "action": 'Run npm audit fix immediately'},'
}
; // Check condition,
if ( {) {
  $2
} report.recommendations.push ({ "priority": 'high', "message": 'Moderate security vulnerabilities detected', "action": 'Review and fix moderate vulnerabilities'},'
}
; // Check condition,
if ( {) {
  $2
} report.recommendations.push ({ "priority": 'medium', "message": 'Many outdated packages detected', "action": 'Consider updating packages in batches'},'
}
; // Check condition,
if ( {) {
  $2
} report.recommendations.push ({ "priority": 'medium', "message": 'No package - lock.json found', "action": 'Run npm install to generate package - lock.json'},'
}
; return report}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { "recursive": true }
}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved "to": ${this.report_file}`)} catch (error) { this.log (`Error saving "report": ${error.message}`),`}
; async run () { this.log ('🔍 Starting Dependency Monitor...'); this.log (`Project "root": ${this.project_roo,`}`);`; try { // Create logs directory if it doesn't exist;'

}

const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { "recursive": true }
}
; // Run all checks; this.log ('🔒 Checking security vulnerabilities...');'

const audit_result = await this.checkNpmAudit ();
; this.log ('📦 Checking outdated packages...');'

const outdated_result = await this.checkOutdatedPackages ();
; this.log ('📋 Checking package - lock.json...');'

const packageLockInfo = await this.checkPackageLock ();
; this.log ('🟢 Checking Node.js and npm versions...');'

const node_info = await this.checkNodeVersion ();
; this.log ('🎣 Checking git hooks...');'

const gitHooksInfo = await this.checkGitHooks ();
; // Generate report; this.log ('📊 Generating dependency report...');'

const report = await this.generate_report ( audit_result; outdated_result; packageLockInfo, node_info, gitHooksInfo);
; // Save report; await this.save_report (report);
;

const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Dependency Monitor "Summary": '); this.log (`Security "vulnerabilities": ${report.summary.vulnerabilities.tota,`}`); this.log (` "Critical": ${report.summary.vulnerabilities.critica,`}`); this.log (` "High": ${report.summary.vulnerabilities.hig,`}`); this.log (` "Moderate": ${report.summary.vulnerabilities.moderat,`}`); this.log (` "Low": ${report.summary.vulnerabilities.lo,`}`); this.log (`Outdated "packages": ${report.summary.outdated_package,`}`); this.log (`Package lock "status": ${report.summary.packageLockStatu,`}`); this.log (`Node "version": ${report.summary.node_versio,`}`); this.log (`NPM "version": ${report.summary.npm_versio,`}`); this.log (`"Duration": ${duratio,`}ms`);`; // Check condition,
if ( {) {
  $2
} this.log ('\n💡 "Recommendations": '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` "Action": ${rec.action}`)})} else { this.log ('\n✨ All dependencies are healthy!','}
; // If there are critical vulnerabilities, suggest immediate action; // Check condition,
if ( {) {
  $2
} this.log ('\n🚨 "CRITICAL": Security vulnerabilities detected!'); this.log ('Consider "running": npm audit fix')}'
} catch (error) { this.log (`❌ Error running dependency "monitor": ${error.messag,`}`); process.exit (1)}}`
;
// Run the dependency monitor;

const monitor = new DependencyMonitor ();
monitor.run ().catch (error = > { process.exit (1)});
;

monitor.run().catch(error = > {; process.exit(1)});


>>>>>>> origin/cursor/delete-old-data-records-6bba
