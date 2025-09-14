<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityAuditor {
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'security-reports'),this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    .toISOString()}] ${message}`)}
  runNpmAudit() {
    this.log('🔍 Running npm audit...');
    try {
      const result = execSync('npm audit --json', {"stdio": 'pipe',"cwd": this.projectRoot;
        encoding: 'utf8'});
      const auditData = JSON.parse(result);
      this.log("✅ NPM audit completed");
      return {
        "success": true;
        vulnerabilities: auditData.vulnerabilities || {};
        "metadata": auditData.metadata || {};
        "timestamp": new Date().toISOString()
      }} catch (error) {
      this.log(`❌ NPM audit "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  checkSecurityHeaders() {
    this.log('🛡️ Checking security headers...');
    const securityChecks = {"hasCSP": false,"hasHSTS": false,"hasXFrameOptions": false;
      hasXContentTypeOptions: false;
      hasReferrerPolicy: false};
    try {
      // Check for security-related files
      const securityFiles = ['security.config.js','security.config.ts','middleware.js';
        'middleware.ts';
        'next.config.js';
        'next.config.ts';
        'vite.config.js';
        'vite.config.ts'];
      for (const file of securityFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
          if (content.includes('content-security-policy') || content.includes('csp')) {
            securityChecks.hasCSP = true}
          if (content.includes('strict-transport-security') || content.includes('hsts')) {
            securityChecks.hasHSTS = true}
          if (content.includes('x-frame-options')) {
            securityChecks.hasXFrameOptions = true}
          if (content.includes('x-content-type-options')) {
            securityChecks.hasXContentTypeOptions = true}
          if (content.includes('referrer-policy')) {
            securityChecks.hasReferrerPolicy = true}
        }
      }
      this.log("✅ Security headers check completed");
      return {"success": true,"checks": securityChecks;
        timestamp: new Date().toISOString()}} catch (error) {
      this.log(`❌ Security headers check "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  checkEnvironmentVariables() {
    this.log('🔐 Checking environment variables...');
    try {
      const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
      const foundEnvFiles = [];
      const potentialSecrets = [];
      for (const envFile of envFiles) {
        const envPath = path.join(this.projectRoot, envFile);
        if (fs.existsSync(envPath)) {
          foundEnvFiles.push(envFile);
          const content = fs.readFileSync(envPath, 'utf8');
          // Check for potential secrets (basic check)
          const lines = content.split('\n');
          for (const line of lines) {
            if (line.includes('SECRET') || line.includes('KEY') || line.includes('TOKEN') || line.includes('PASSWORD')) {
              potentialSecrets.push(line.split('=')[0])}
          }
        }
      }
      this.log("✅ Environment variables check completed");
      return {"success": true,foundEnvFiles,potentialSecrets;
        "timestamp": new Date().toISOString()}} catch (error) {
      this.log(`❌ Environment variables check "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  checkDependencies() {
    this.log('📦 Checking dependencies for security issues...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const allDeps = {...packageJson.dependencies,...packageJson.devDependencies};
      const knownVulnerablePackages = ['lodash','moment','jquery';
        'express';
        'request'];
      const foundVulnerablePackages = [];
      for (const [packageName, version] of Object.entries(allDeps)) {
        if (knownVulnerablePackages.includes(packageName)) {
          foundVulnerablePackages.push({ "package": packageName, version })}
      }
      this.log("✅ Dependencies security check completed");
      return {"success": true,"totalDependencies": Object.keys(allDeps).length,foundVulnerablePackages;
        "timestamp": new Date().toISOString()}} catch (error) {
      this.log(`❌ Dependencies security check "failed": ${error.message}`);
      return {"success": false,"error": error.message;
        timestamp: new Date().toISOString()}}
  }
  generateReport() {
    this.log('📊 Generating security audit report...');
    const npmAudit = this.runNpmAudit();
    const securityHeaders = this.checkSecurityHeaders();
    const environmentVariables = this.checkEnvironmentVariables();
    const dependencies = this.checkDependencies();
    const report = {
      "timestamp": new Date().toISOString();
      npmAudit;
      securityHeaders;
      environmentVariables;
      dependencies;
      summary: {npmAuditSuccessful: npmAudit.success,"securityHeadersConfigured": securityHeaders.success ? Object.values(securityHeaders.checks).filter(Boolean).length : 0,"environmentFilesFound": environmentVariables.success ? environmentVariables.foundEnvFiles.length : 0;
        vulnerablePackagesFound: dependencies.success ? dependencies.foundVulnerablePackages.length : 0}
    };
    const reportFile = path.join(this.reportsDir, `security-audit-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved "to": ${reportFile}`);
    // Print summary
    
    
    
    .filter(Boolean).length : 0}/5 configured" : '❌ Failed'}");
    
    
    
    return report}
  async run() {
    try {this.log('🚀 Starting Security Audit'),const report = this.generateReport(),this.log('✅ Security audit completed');
      return report} catch (error) {
      this.log(`💥 Security audit "error": ${error.message}`);
      throw error}
  }
}
// Run the security auditor
if (require.main === module) {const auditor = new SecurityAuditor(),auditor.run().catch(console.error)}
module.exports = SecurityAuditor;
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class SecurityAuditor {" constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, "security-reports"),this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} runNpmAudit() {" this.log(" Running npm audit."); try {"" const result = execSync("npm audit --json", {stdio: "pipe",cwd: this.projectRoot;" encoding: "utf8"}); const auditData = JSON.parse(result);" this.log(" NPM audit completed"); return {" success: true; vulnerabilities: auditData.vulnerabilities | {};" metadata: auditData.metadata | {};" timestamp: new Date().toISOString() }} catch (error) {"` this.log(` NPM audit failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } checkSecurityHeaders() {" this.log(" Checking security headers.");" const securityChecks = {hasCSP: false,hasHSTS: false,hasXFrameOptions: false; hasXContentTypeOptions: false; hasReferrerPolicy: false}; try { / Check for security-related files" const securityFiles = ["security.config.js","security.config.ts","middleware.js";" "middleware.ts";" "next.config.js";" "next.config.ts";" "vite.config.js";" "vite.config.ts"]; for (const file of securityFiles) { const filePath = path.join(this.projectRoot, file); if (fs.existsSync(filePath)) {" const content = fs.readFileSync(filePath, "utf8").toLowerCase();" if (content.includes("content-security-policy") | content.includes("csp")) { securityChecks.hasCSP = true}" if (content.includes("strict-transport-security") | content.includes("hsts")) { securityChecks.hasHSTS = true}" if (content.includes("x-frame-options")) { securityChecks.hasXFrameOptions = true}" if (content.includes("x-content-type-options")) { securityChecks.hasXContentTypeOptions = true}" if (content.includes("referrer-policy")) { securityChecks.hasReferrerPolicy = true} } }" this.log(" Security headers check completed");" return {success: true,checks: securityChecks; timestamp: new Date().toISOString()}} catch (error) {"` this.log(` Security headers check failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } checkEnvironmentVariables() {" this.log(" Checking environment variables."); try {" const envFiles = [".env", ".env.local", ".env.production", ".env.development"]; const foundEnvFiles = []; const potentialSecrets = []; for (const envFile of envFiles) { const envPath = path.join(this.projectRoot, envFile); if (fs.existsSync(envPath)) { foundEnvFiles.push(envFile);" const content = fs.readFileSync(envPath, "utf8"); / Check for potential secrets (basic check)" const lines = content.split("\n"); for (const line of lines) {" if (line.includes("SECRET") | line.includes("KEY") | line.includes("TOKEN") | line.includes("PASSWORD")) {" potentialSecrets.push(line.split("=")[0])} } } }" this.log(" Environment variables check completed");" return {success: true,foundEnvFiles,potentialSecrets;" timestamp: new Date().toISOString()}} catch (error) {"` this.log(` Environment variables check failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } checkDependencies() {" this.log(" Checking dependencies for security issues."); try {" const packageJsonPath = path.join(this.projectRoot, "package.json");" const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")); const allDeps = {.packageJson.dependencies,.packageJson.devDependencies};" const knownVulnerablePackages = ["lodash","moment","jquery";" "express";" "request"]; const foundVulnerablePackages = []; for (const [packageName, version] of Object.entries(allDeps)) { if (knownVulnerablePackages.includes(packageName)) {" foundVulnerablePackages.push({ package: packageName, version })} }" this.log(" Dependencies security check completed");" return {success: true,totalDependencies: Object.keys(allDeps).length,foundVulnerablePackages;" timestamp: new Date().toISOString()}} catch (error) {"` this.log(` Dependencies security check failed: ${error.message}`);" return {success: false,error: error.message; timestamp: new Date().toISOString()}} } generateReport() {" this.log(" Generating security audit report."); const npmAudit = this.runNpmAudit(); const securityHeaders = this.checkSecurityHeaders(); const environmentVariables = this.checkEnvironmentVariables(); const dependencies = this.checkDependencies(); const report = {" timestamp: new Date().toISOString(); npmAudit; securityHeaders; environmentVariables; dependencies;" summary: {npmAuditSuccessful: npmAudit.success,securityHeadersConfigured: securityHeaders.success ? Object.values(securityHeaders.checks).filter(Boolean).length : 0,environmentFilesFound: environmentVariables.success ? environmentVariables.foundEnvFiles.length : 0; vulnerablePackagesFound: dependencies.success ? dependencies.foundVulnerablePackages.length : 0} };` const reportFile = path.join(this.reportsDir, `security-audit-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"` this.log(` Report saved to: ${reportFile}`); / Print summary" console.log("\n SECURITY AUDIT SUMMARY");" console.log("=" * 50);""` console.log(`NPM Audit: ${npmAudit.success ? " Completed" : " Failed"}`);""` console.log(`Security Headers: ${securityHeaders.success ? `${securityHeaders.checks ? Object.values(securityHeaders.checks).filter(Boolean).length : 0}/5 configured" : " Failed"}");""` console.log(`Environment Files: ${environmentVariables.success ? environmentVariables.foundEnvFiles.length : " Failed"}`);""` console.log(`Vulnerable Packages: ${dependencies.success ? dependencies.foundVulnerablePackages.length : " Failed"}`);"` console.log(`Report: ${reportFile}`); return report} async run() {" try {this.log(" Starting Security Audit"),const report = this.generateReport(),this.log(" Security audit completed"); return report} catch (error) {"` this.log(` Security audit error: ${error.message}`); throw error} }}/ Run the security auditorif (require.main === module) {const auditor = new SecurityAuditor(),auditor.run().catch(console.error)}module.exports = SecurityAuditor;""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'security-reports'})
    this.log(' Running npm audit...')
      const result = execSync('npm audit --json', {"stdio"})
// console.log(`NPM "Audit"`)
    console.log(`Security "Headers": ${securityHeaders.success ? `${securityHeaders.checks ? Object.values(securityHeaders.checks).filter(Boolean).length : 0}/5 configured
// console.log(`Environment "Files"`)
    console.log(`Vulnerable "Packages"`)
>>>>>>> main
>>>>>>> main
