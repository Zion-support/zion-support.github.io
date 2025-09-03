#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditEnhanced {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
    this.securityScore = 100}

  async runSecurityAudit() {
    console.log('🔒 Starting Enhanced Security Audit...');
    
    try {
      // Check for known vulnerabilities
      await this.checkDependencyVulnerabilities();
      
      // Check for security best practices
      await this.checkSecurityBestPractices();
      
      // Check for sensitive data exposure
      await this.checkSensitiveDataExposure();
      
      // Check for insecure configurations
      await this.checkInsecureConfigurations();
      
      // Generate security report
      this.generateSecurityReport();
      
      console.log('✅ Security audit completed')} catch (error) {
      console.error('❌ Security audit failed:', error.message)}
  }

  async checkDependencyVulnerabilities() {
    console.log('🔍 Checking dependency vulnerabilities...');
    
    try {
      const result = execSync('npm audit --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 60000
      });
      
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([packageName, vuln]) => {
          this.vulnerabilities.push({
            type: 'dependency',
            package: packageName,
            severity: vuln.severity,
            description: vuln.description,
            recommendation: `Update ${packageName} to version ${vuln.fixAvailable?.version || 'latest'}`
          });
          
          // Deduct points based on severity
          switch (vuln.severity) {
            case 'critical':
              this.securityScore -= 20;
              break;
            case 'high':
              this.securityScore -= 15;
              break;
            case 'moderate':
              this.securityScore -= 10;
              break;
            case 'low':
              this.securityScore -= 5;
              break}
        })}
      
      console.log(`✅ Found ${this.vulnerabilities.length} dependency vulnerabilities`)} catch (error) {
      console.log('⚠️  Could not check dependency vulnerabilities')}
  }

  async checkSecurityBestPractices() {
    console.log('🔍 Checking security best practices...');
    
    // Check for console.log statements in production code
    this.checkConsoleLogs();
    
    // Check for hardcoded secrets
    this.checkHardcodedSecrets();
    
    // Check for insecure HTTP usage
    this.checkInsecureHTTP();
    
    // Check for missing security headers
    this.checkSecurityHeaders()}

  checkConsoleLogs() {
    const srcPath = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcPath)) return;
    
    const files = this.getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        if (line.includes('console.log') && !line.trim().startsWith('//')) {
          this.vulnerabilities.push({
            type: 'code_quality',
            file: path.relative(this.projectRoot, file),
            line: index + 1,
            severity: 'low',
            description: 'Console.log statement found in production code',
            recommendation: 'Remove or comment out console.log statements for production'
          });
          this.securityScore -= 1}
      })})}

  checkHardcodedSecrets() {
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx', '.json', '.env']);
    const secretPatterns = [
      /password\s*[:=]\s*['"][^'"]+['"]/i,
      /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i,
      /secret\s*[:=]\s*['"][^'"]+['"]/i,
      /token\s*[:=]\s*['"][^'"]+['"]/i
    ];
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        secretPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            this.vulnerabilities.push({
              type: 'secrets',
              file: path.relative(this.projectRoot, file),
              severity: 'high',
              description: 'Potential hardcoded secret found',
              recommendation: 'Move secrets to environment variables'
            });
            this.securityScore -= 10}
        })} catch (error) {
        // Skip files that can't be read
      }
    })}

  checkInsecureHTTP() {
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx']);
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('http://') && !content.includes('localhost')) {
          this.vulnerabilities.push({
            type: 'insecure_protocol',
            file: path.relative(this.projectRoot, file),
            severity: 'moderate',
            description: 'Insecure HTTP protocol used',
            recommendation: 'Use HTTPS instead of HTTP for production'
          });
          this.securityScore -= 5}
      } catch (error) {
        // Skip files that can't be read
      }
    })}

  checkSecurityHeaders() {
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    const nextConfigCjsPath = path.join(this.projectRoot, 'next.config.cjs');
    
    let configExists = false;
    let hasSecurityHeaders = false;
    
    if (fs.existsSync(nextConfigPath) || fs.existsSync(nextConfigCjsPath)) {
      configExists = true;
      
      // Check if security headers are configured
      const configPath = fs.existsSync(nextConfigPath) ? nextConfigPath : nextConfigCjsPath;
      const configContent = fs.readFileSync(configPath, 'utf8');
      
      if (configContent.includes('securityHeaders') || configContent.includes('headers')) {
        hasSecurityHeaders = true}
    }
    
    if (configExists && !hasSecurityHeaders) {
      this.recommendations.push({
        type: 'configuration',
        description: 'Add security headers to Next.js configuration',
        recommendation: 'Configure security headers like X-Frame-Options, X-Content-Type-Options, etc.'
      });
      this.securityScore -= 5}
  }

  checkSensitiveDataExposure() {
    console.log('🔍 Checking for sensitive data exposure...');
    
    // Check for exposed API endpoints
    this.checkExposedEndpoints();
    
    // Check for debug information in production
    this.checkDebugInformation()}

  checkExposedEndpoints() {
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx']);
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('process.env') && content.includes('console.log')) {
          this.vulnerabilities.push({
            type: 'data_exposure',
            file: path.relative(this.projectRoot, file),
            severity: 'moderate',
            description: 'Environment variables might be logged',
            recommendation: 'Remove console.log statements that might expose sensitive data'
          });
          this.securityScore -= 5}
      } catch (error) {
        // Skip files that can't be read
      }
    })}

  checkDebugInformation() {
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx']);
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('debugger') || content.includes('console.debug')) {
          this.vulnerabilities.push({
            type: 'debug_info',
            file: path.relative(this.projectRoot, file),
            severity: 'low',
            description: 'Debug information found in code',
            recommendation: 'Remove debug statements for production'
          });
          this.securityScore -= 2}
      } catch (error) {
        // Skip files that can't be read
      }
    })}

  checkInsecureConfigurations() {
    console.log('🔍 Checking insecure configurations...');
    
    // Check package.json for insecure configurations
    this.checkPackageJsonSecurity();
    
    // Check for missing .gitignore entries
    this.checkGitignoreSecurity()}

  checkPackageJsonSecurity() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check for scripts that might be insecure
      if (packageJson.scripts) {
        Object.entries(packageJson.scripts).forEach(([scriptName, script]) => {
          if (script.includes('--unsafe') || script.includes('--insecure')) {
            this.vulnerabilities.push({
              type: 'insecure_script',
              script: scriptName,
              severity: 'high',
              description: 'Insecure script configuration found',
              recommendation: 'Remove unsafe flags from scripts'
            });
            this.securityScore -= 15}
        })}
    }
  }

  checkGitignoreSecurity() {
    const gitignorePath = path.join(this.projectRoot, '.gitignore');
    
    if (fs.existsSync(gitignorePath)) {
      const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
      
      const requiredEntries = ['.env', 'node_modules', '.next', 'dist'];
      
      requiredEntries.forEach(entry => {
        if (!gitignoreContent.includes(entry)) {
          this.recommendations.push({
            type: 'gitignore',
            description: `Add ${entry} to .gitignore`,
            recommendation: `Ensure ${entry} is not committed to version control`
          });
          this.securityScore -= 3}
      })}
  }

  getAllFiles(dir, extensions) {
    let files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(this.getAllFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    });
    
    return files}

  generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      securityScore: Math.max(0, this.securityScore),
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        critical: this.vulnerabilities.filter(v => v.severity === 'critical').length,
        high: this.vulnerabilities.filter(v => v.severity === 'high').length,
        moderate: this.vulnerabilities.filter(v => v.severity === 'moderate').length,
        low: this.vulnerabilities.filter(v => v.severity === 'low').length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n🔒 Security Audit Results:');
    console.log('='.repeat(50));
    console.log(`Security Score: ${report.securityScore}/100`);
    console.log(`Total Vulnerabilities: ${report.summary.totalVulnerabilities}`);
    console.log(`Critical: ${report.summary.critical}`);
    console.log(`High: ${report.summary.high}`);
    console.log(`Moderate: ${report.summary.moderate}`);
    console.log(`Low: ${report.summary.low}`);
    console.log('='.repeat(50));
    
    console.log(`\n📄 Detailed report saved to: ${reportPath}`)}
}

// Run the security audit
const securityAudit = new SecurityAuditEnhanced();
securityAudit.runSecurityAudit().catch(error => {
  console.error('Fatal error:', error.message);
  process.exit(1)});