#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }

  async auditDependencies() {
    this.log('🔍 Auditing dependencies for vulnerabilities...');
    
    try {
      const result = await this.runCommand('npm audit --audit-level=moderate', 'Dependency Security Audit');
      return result} catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      // This is expected behavior, so we'll treat it as a successful audit with findings
      return { 
        success: true, 
        output: error.stdout || error.message,
        vulnerabilitiesFound: true 
      }}
  }

  async checkEnvironmentVariables() {
    this.log('🔐 Checking environment variables...');
    
    const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
    const findings = [];

    for (const envFile of envFiles) {
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        
        // Check for common security issues
        if (content.includes('PASSWORD=') && !content.includes('PASSWORD=***')) {
          findings.push({
            file: envFile,
            issue: 'Plain text password detected',
            severity: 'high'
          })}
        
        if (content.includes('SECRET=') && !content.includes('SECRET=***')) {
          findings.push({
            file: envFile,
            issue: 'Plain text secret detected',
            severity: 'high'
          })}
        
        if (content.includes('API_KEY=') && !content.includes('API_KEY=***')) {
          findings.push({
            file: envFile,
            issue: 'Plain text API key detected',
            severity: 'medium'
          })}
      }
    }

    return {
      success: true,
      findings: findings,
      filesChecked: envFiles.length
    }}

  async checkCodeSecurity() {
    this.log('🔍 Checking code for security issues...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const securityIssues = [];

    const checkFile = (filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          { pattern: /eval\s*\(/, message: 'eval() usage detected', severity: 'high' }, { pattern: /innerHTML\s*=/, message: 'innerHTML assignment detected', severity: 'medium' }, { pattern: /document\.write/, message: 'document.write() usage detected', severity: 'medium' }, { pattern: /localStorage\.setItem.*password/i, message: 'Password in localStorage detected', severity: 'high' }, { pattern: /console\.log.*password/i, message: 'Password in console.log detected', severity: 'medium' }
        ];

        dangerousPatterns.forEach(({ pattern, message, severity }) => {
          if (pattern.test(content)) {
            securityIssues.push({
              file: filePath,
              issue: message,
              severity: severity
            })}
        })} catch (error) {
        // Skip files that can't be read
      }
    };

    // Check source files
    if (fs.existsSync(srcDir)) {
      this.scanDirectory(srcDir, ['.js', '.jsx', '.ts', '.tsx'], checkFile)}

    // Check pages
    if (fs.existsSync(pagesDir)) {
      this.scanDirectory(pagesDir, ['.js', '.jsx', '.ts', '.tsx'], checkFile)}

    return {
      success: true,
      issues: securityIssues,
      filesScanned: securityIssues.length
    }}

  scanDirectory(dir, extensions, callback) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.scanDirectory(fullPath, extensions, callback)} else if (extensions.includes(path.extname(item))) {
        callback(fullPath)}
    }
  }

  async checkHTTPSConfiguration() {
    this.log('🔒 Checking HTTPS configuration...');
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    const findings = [];

    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      if (!content.includes('https') && !content.includes('secure')) {
        findings.push({
          issue: 'No HTTPS configuration found in next.config.js',
          severity: 'medium'
        })}
    }

    return {
      success: true,
      findings: findings
    }}

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: Object.keys(results).length,
        successful: Object.values(results).filter(r => r.success).length,
        failed: Object.values(results).filter(r => !r.success).length,
        totalIssues: Object.values(results).reduce((sum, r) => {
          return sum + (r.findings ? r.findings.length : 0) + (r.issues ? r.issues.length : 0)}, 0)
      },
      results: results,
      recommendations: this.generateRecommendations(results)
    };

    const reportFile = path.join(this.reportsDir, 'security-audit-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Security audit report generated: ${reportFile}`);
    return report}

  generateRecommendations(results) {
    const recommendations = [];

    if (results.dependencies && results.dependencies.vulnerabilitiesFound) {
      recommendations.push({
        type: 'dependencies',
        message: 'Vulnerabilities found in dependencies. Run npm audit fix to resolve.',
        action: 'npm audit fix'
      })}

    if (results.environment && results.environment.findings.length > 0) {
      recommendations.push({
        type: 'environment',
        message: 'Security issues found in environment files. Review and secure sensitive data.',
        issues: results.environment.findings.length
      })}

    if (results.codeSecurity && results.codeSecurity.issues.length > 0) {
      recommendations.push({
        type: 'code',
        message: 'Security issues found in code. Review and fix dangerous patterns.',
        issues: results.codeSecurity.issues.length
      })}

    return recommendations}

  async run() {
    this.log('🎯 Starting Security Audit');
    
    const results = {
      dependencies: await this.auditDependencies(),
      environment: await this.checkEnvironmentVariables(),
      codeSecurity: await this.checkCodeSecurity(),
      httpsConfig: await this.checkHTTPSConfiguration()
    };

    const report = await this.generateReport(results);

    this.log('🎉 Security Audit Completed');
    this.log(`📊 Summary: ${report.summary.successful}/${report.summary.totalChecks} checks successful`);
    this.log(`🔍 Total issues found: ${report.summary.totalIssues}`);
    
    if (report.recommendations.length > 0) {
      this.log('💡 Security Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`   - ${rec.message}`)})}

    return report}
}

// Run the security auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error)}

module.exports = SecurityAuditor;