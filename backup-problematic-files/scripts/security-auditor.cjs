<<<<<<< HEAD
this.projectRoot = process.cwd();
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.fixes = [];
  }
  async runAudit() {
    console.log('🔒 Running security audit...');
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      if (audit.vulnerabilities) {
        Object.keys(audit.vulnerabilities).forEach(pkg => {
          const vuln = audit.vulnerabilities[pkg];
          this.issues.push({
            package: pkg,
            severity: vuln.severity,
            description: vuln.description
          });
        });
      }
      console.log(`Found ${this.issues.length} security issues`);
    } catch (error) {
      console.log('No security issues found or audit failed');
    }
  }
  async fixIssues() {
    if (this.issues.length > 0) {
      console.log('🔧 Attempting to fix security issues...');
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    this.projectRoot = process.cwd();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    this.reportsDir = path.join(this.projectRoot, 'security-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    }
  async runNpmAudit() {
    this.log('🔍 Running npm audit...');
    try {
      const result = execSync('npm audit --audit-level=moderate --json', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 120000
      });
      const auditData = JSON.parse(result);
      const vulnerabilities = auditData.vulnerabilities || {};
      const vulnerabilityCount = Object.keys(vulnerabilities).length;
      this.log(`🔍 Found ${vulnerabilityCount} vulnerabilities`);
      return {
        vulnerabilities,
        "count": vulnerabilityCount,
        "status": vulnerabilityCount === 0 ? 'secure' : 'vulnerable'
      }} catch (error) {
      this.log(`❌ NPM audit "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkEnvironmentVariables() {
    this.log('🔐 Checking environment variables...');
    try {
      const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
      const foundEnvFiles = [];
      const sensitiveVars = [];
      for (const envFile of envFiles) {
        const envPath = path.join(this.projectRoot, envFile);
        if (fs.existsSync(envPath)) {
          foundEnvFiles.push(envFile);
          const content = fs.readFileSync(envPath, 'utf8');
          // Check for sensitive variables
          const sensitivePatterns = [/API_KEY/i,
            /SECRET/i,
            /PASSWORD/i,
            /TOKEN/i,
            /PRIVATE/i,
            /CREDENTIAL/i
          ];
          const lines = content.split('\n');
          lines.forEach((line, index) => {
            if (line.trim() && !line.startsWith('#')) {
              const [key] = line.split('=');
              if (key && sensitivePatterns.some(pattern => pattern.test(key))) {
                sensitiveVars.push({
                  "file": envFile,
                  "line": index + 1,
                  "variable": key.trim()
                })}
            }
          })}
      }
      this.log(`🔐 Found ${foundEnvFiles.length} environment files`);
      this.log(`🔐 Found ${sensitiveVars.length} potentially sensitive variables`);
      return {
        "envFiles": foundEnvFiles,
        sensitiveVars,
        "status": sensitiveVars.length > 0 ? 'needs_review' : 'secure'
      }} catch (error) {
      this.log(`❌ Environment variables check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found')}
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash',
        'moment',
        'jquery',
        'express',
        'request'
      ];
      const foundVulnerable = Object.keys(dependencies).filter(dep => 
        vulnerablePackages.some(vuln => dep.includes(vuln))
      );
      this.log(`📦 Found ${foundVulnerable.length} potentially vulnerable packages`);
      return {
        "totalDependencies": Object.keys(dependencies).length,
        "vulnerablePackages": foundVulnerable,
        "status": foundVulnerable.length === 0 ? 'secure' : 'needs_review'
      }} catch (error) {
      this.log(`❌ Dependencies check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkCodeSecurity() {
    this.log('🔍 Checking code security...');
    try {
      const securityIssues = [];
      // Check for common security issues in code
      const patterns = [{
          "name": 'eval() usage',
          "pattern": /eval\s*\(/g,
          "severity": 'high'
        },
        {
          "name": 'innerHTML usage',
          "pattern": /\.innerHTML\s*=/g,
          "severity": 'medium'
        },
        {
          "name": 'dangerouslySetInnerHTML usage',
          "pattern": /dangerouslySetInnerHTML/g,
          "severity": 'medium'
        },
        {
          "name": 'console.log with sensitive data',
          "pattern": /console\.log\s*\(\s*['""].*?(password|secret|token|key)['""]/gi,
          "severity": 'high'
        }
      ];
      const files = this.findSourceFiles();
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          patterns.forEach(pattern => {
            const matches = content.match(pattern.pattern);
            if (matches) {
              securityIssues.push({
                "file": path.relative(this.projectRoot, file),
                "issue": pattern.name,
                "severity": pattern.severity,
                "count": matches.length
              })}
          })} catch (error) {
          // Skip files that can't be read
        }
      }
      this.log(`🔍 Found ${securityIssues.length} potential security issues`);
      return {
        "issues": securityIssues,
        "status": securityIssues.length === 0 ? 'secure' : 'needs_review'
      }} catch (error) {
      this.log(`❌ Code security check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  findSourceFiles() {
    const sourceFiles = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const scanDirectory = (dir) => {
      try {
        execSync('npm audit fix', { stdio: 'inherit' });
        this.fixes.push('Applied automatic security fixes');
        console.log('✅ Security fixes applied');
      } catch (error) {
        console.log('❌ Could not apply automatic fixes');
      }
    }
  }
  generateReport() {
    const report = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      timestamp: new Date().toISOString(),
      issues: this.issues,
      fixes: this.fixes,
      summary: {
        totalIssues: this.issues.length,
        fixesApplied: this.fixes.length
      }
    };
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "timestamp": new Date().toISOString(),
      "analysis": {
        npmAudit: await this.runNpmAudit(),
        "environmentVariables": await this.checkEnvironmentVariables(),
        "dependencies": await this.checkDependencies(),
        "codeSecurity": await this.checkCodeSecurity()
      }
    };
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);
    const reportFile = path.join(this.reportsDir, `security-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Security report "generated": ${reportFile}`);
    return report}
  generateRecommendations(analysis) {
    const recommendations = [];
    if (analysis.npmAudit && analysis.npmAudit.count > 0) {
      recommendations.push({
        "type": 'npm_audit',
        "priority": 'high',
        "message": `Found ${analysis.npmAudit.count} vulnerabilities. Run 'npm audit fix' to resolve.`,
        "impact": 'Reduces security risks'
      })}
    if (analysis.environmentVariables && analysis.environmentVariables.sensitiveVars.length > 0) {
      recommendations.push({
        "type": 'environment_variables',
        "priority": 'high',
        "message": 'Found potentially sensitive environment variables. Review and secure them.',
        "impact": 'Prevents credential exposure'
      })}
    if (analysis.dependencies && analysis.dependencies.vulnerablePackages.length > 0) {
      recommendations.push({
        "type": 'dependencies',
        "priority": 'medium',
        "message": 'Found potentially vulnerable packages. Consider updating or replacing them.',
        "impact": 'Reduces security risks'
      })}
    if (analysis.codeSecurity && analysis.codeSecurity.issues.length > 0) {
      recommendations.push({
        "type": 'code_security',
        "priority": 'medium',
        "message": 'Found potential security issues in code. Review and fix them.',
        "impact": 'Improves code security'
      })}
    return recommendations}
  async run() {
    this.log('🔒 Starting Security Auditor...');
    try {
      const report = await this.generateSecurityReport();
      this.log('🎉 Security audit completed!');
      this.log(`🔍 "Vulnerabilities": ${report.analysis.npmAudit.count || 0}`);
      this.log(`🔐 Sensitive "variables": ${report.analysis.environmentVariables.sensitiveVars.length || 0}`);
      this.log(`📦 Vulnerable "packages": ${report.analysis.dependencies.vulnerablePackages.length || 0}`);
      this.log(`🔍 Code security "issues": ${report.analysis.codeSecurity.issues.length || 0}`);
      this.log(`💡 "Recommendations": ${report.recommendations.length}`);
      return report} catch (error) {
      this.log(`💥 Security audit "failed": ${error.message}`);
      throw error}
  }
}
if (require.main === module) {
  const auditor = new SecurityAuditor();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  auditor.run()
    .then((report) => {
      process.exit(0)})
    .catch((error) => {
      console.error('\n💥 Security Auditor "failed": ', error.message);
      process.exit(1)})}
module.exports = SecurityAuditor;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
module.exports = SecurityAuditor;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class SecurityAuditor { constructor() { this.projectRoot = process.cwd();" this.reportsDir = path.join(this.projectRoot, "security-reports"); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async runNpmAudit() {" this.log(" Running npm audit."); try {" const result = execSync("npm audit --audit-level=moderate --json", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 120000 }); const auditData = JSON.parse(result); const vulnerabilities = auditData.vulnerabilities | {}; const vulnerabilityCount = Object.keys(vulnerabilities).length;` this.log(` Found ${vulnerabilityCount} vulnerabilities`); return { vulnerabilities," count: vulnerabilityCount,"" status: vulnerabilityCount === 0 ? "secure" : "vulnerable" }} catch (error) {"` this.log(` NPM audit failed: ${error.message}`);" return { error: error.message }} } async checkEnvironmentVariables() {" this.log(" Checking environment variables."); try {" const envFiles = [".env", ".env.local", ".env.development", ".env.production"]; const foundEnvFiles = []; const sensitiveVars = []; for (const envFile of envFiles) { const envPath = path.join(this.projectRoot, envFile); if (fs.existsSync(envPath)) { foundEnvFiles.push(envFile);" const content = fs.readFileSync(envPath, "utf8"); / Check for sensitive variables const sensitivePatterns = [/API_KEY/i, /SECRET/i, /PASSWORD/i, /TOKEN/i, /PRIVATE/i, /CREDENTIAL/i ];" const lines = content.split("\n"); lines.forEach((line, index) => {" if (line.trim() && !line.startsWith("#")) {" const [key] = line.split("="); if (key && sensitivePatterns.some(pattern => pattern.test(key))) { sensitiveVars.push({" file: envFile," line: index + 1," variable: key.trim() })} } })} }` this.log(` Found ${foundEnvFiles.length} environment files`);` this.log(` Found ${sensitiveVars.length} potentially sensitive variables`); return {" envFiles: foundEnvFiles, sensitiveVars,"" status: sensitiveVars.length > 0 ? "needs_review" : "secure" }} catch (error) {"` this.log(` Environment variables check failed: ${error.message}`);" return { error: error.message }} } async checkDependencies() {" this.log(" Checking dependencies."); try {" const packageJsonPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(packageJsonPath)) {" throw new Error("package.json not found")}" const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")); const dependencies = { .packageJson.dependencies, .packageJson.devDependencies }; / Check for known vulnerable packages" const vulnerablePackages = ["lodash"," "moment"," "jquery"," "express"," "request" ]; const foundVulnerable = Object.keys(dependencies).filter(dep => vulnerablePackages.some(vuln => dep.includes(vuln)) );` this.log(` Found ${foundVulnerable.length} potentially vulnerable packages`); return {" totalDependencies: Object.keys(dependencies).length," vulnerablePackages: foundVulnerable,"" status: foundVulnerable.length === 0 ? "secure" : "needs_review" }} catch (error) {"` this.log(` Dependencies check failed: ${error.message}`);" return { error: error.message }} } async checkCodeSecurity() {" this.log(" Checking code security."); try { const securityIssues = []; / Check for common security issues in code const patterns = [{"" name: "eval() usage"," pattern: /eval\s*\(/g,"" severity: "high" }, {"" name: "innerHTML usage"," pattern: /\.innerHTML\s*=/g,"" severity: "medium" }, {"" name: "dangerouslySetInnerHTML usage"," pattern: /dangerouslySetInnerHTML/g,"" severity: "medium" }, {"" name: "console.log with sensitive data","" pattern: /console\.log\s*\(\s*["""].*?(password|secret|token|key)["""]/gi,"" severity: "high" } ]; const files = this.findSourceFiles(); for (const file of files) { try {" const content = fs.readFileSync(file, "utf8"); patterns.forEach(pattern => { const matches = content.match(pattern.pattern); if (matches) { securityIssues.push({" file: path.relative(this.projectRoot, file)," issue: pattern.name," severity: pattern.severity," count: matches.length })} })} catch (error) {" / Skip files that can"t be read } }` this.log(` Found ${securityIssues.length} potential security issues`); return {" issues: securityIssues,"" status: securityIssues.length === 0 ? "secure" : "needs_review" }} catch (error) {"` this.log(` Code security check failed: ${error.message}`);" return { error: error.message }} } findSourceFiles() { const sourceFiles = [];" const extensions = [".ts", ".tsx", ".js", ".jsx"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); " if (stats.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stats.isFile()) { const ext = path.extname(file); if (extensions.includes(ext)) { sourceFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(this.projectRoot); return sourceFiles} async generateSecurityReport() {" this.log(" Generating security report."); const report = {" timestamp: new Date().toISOString()," analysis: { npmAudit: await this.runNpmAudit()," environmentVariables: await this.checkEnvironmentVariables()," dependencies: await this.checkDependencies()," codeSecurity: await this.checkCodeSecurity() } }; / Generate recommendations report.recommendations = this.generateRecommendations(report.analysis);` const reportFile = path.join(this.reportsDir, `security-report-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(` Security report generated: ${reportFile}`); return report} generateRecommendations(analysis) { const recommendations = []; if (analysis.npmAudit && analysis.npmAudit.count > 0) { recommendations.push({"" type: "npm_audit","" priority: "high",""` message: `Found ${analysis.npmAudit.count} vulnerabilities. Run "npm audit fix" to resolve.`,"" impact: "Reduces security risks" })} if (analysis.environmentVariables && analysis.environmentVariables.sensitiveVars.length > 0) { recommendations.push({"" type: "environment_variables","" priority: "high","" message: "Found potentially sensitive environment variables. Review and secure them.","" impact: "Prevents credential exposure" })} if (analysis.dependencies && analysis.dependencies.vulnerablePackages.length > 0) { recommendations.push({"" type: "dependencies","" priority: "medium","" message: "Found potentially vulnerable packages. Consider updating or replacing them.","" impact: "Reduces security risks" })} if (analysis.codeSecurity && analysis.codeSecurity.issues.length > 0) { recommendations.push({"" type: "code_security","" priority: "medium","" message: "Found potential security issues in code. Review and fix them.","" impact: "Improves code security" })} return recommendations} async run() {" this.log(" Starting Security Auditor."); try { const report = await this.generateSecurityReport(); " this.log(" Security audit completed!");"` this.log(` Vulnerabilities: ${report.analysis.npmAudit.count | 0}`);"` this.log(` Sensitive variables: ${report.analysis.environmentVariables.sensitiveVars.length | 0}`);"` this.log(` Vulnerable packages: ${report.analysis.dependencies.vulnerablePackages.length | 0}`);"` this.log(` Code security issues: ${report.analysis.codeSecurity.issues.length | 0}`);"` this.log(` Recommendations: ${report.recommendations.length}`); return report} catch (error) {"` this.log(` Security audit failed: ${error.message}`); throw error} }}/ Run the auditor if this file is executed directlyif (require.main === module) { const auditor = new SecurityAuditor(); auditor.run() .then((report) => {" console.log("\n Security Auditor completed successfully!");"` console.log(` Vulnerabilities: ${report.analysis.npmAudit.count | 0}`);"` console.log(` Recommendations: ${report.recommendations.length}`); process.exit(0)}) .catch((error) => {"" console.error("\n Security Auditor failed: ", error.message); process.exit(1)})}module.exports = SecurityAuditor;""`"`
=======

module.exports = SecurityAuditor;
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'security-reports')
    this.log(' Running npm audit...')
      const result = execSync('npm audit --audit-level=moderate --json')
        "encoding"
        "status"
        "status"
        "status"
          "name"
          "severity"
          "name"
          "severity"
          "name"
          "severity"
          "name"
          "pattern": /console\.log\s*\(\s*['"")]
          "severity"
        "status"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
<<<<<<< HEAD
      console.error('\n� Security Auditor "failed")
=======
<<<<<<< HEAD
      console.error('\n� Security Auditor "failed")
=======
<<<<<<< HEAD
      console.error('\n� Security Auditor "failed")
=======
      console.error('\n� Security Auditor "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
