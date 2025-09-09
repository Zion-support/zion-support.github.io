#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SmartSecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/smart-security-auditor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/smart-security-auditor-report.json');
    this.securityHistory = this.loadSecurityHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadSecurityHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).securityHistory || []}
    } catch (error) {
      this.log(`Failed to load security history: ${error.message}`, 'warn')}
    return []}

  saveSecurityHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        securityHistory: this.securityHistory,
        totalAudits: this.securityHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save security history: ${error.message}`, 'error')}
  }

  async performSecurityAudit() {
    this.log('🔒 Performing comprehensive security audit...');
    
    const audit = {
      dependencies: await this.auditDependencies(),
      code: await this.auditCode(),
      configuration: await this.auditConfiguration(),
      files: await this.auditFiles(),
      network: await this.auditNetworkSecurity(),
      authentication: await this.auditAuthentication()
    };

    this.log(`Security Audit Results:`);
    this.log(`  - Dependency Vulnerabilities: ${audit.dependencies.vulnerabilities.length}`);
    this.log(`  - Code Security Issues: ${audit.code.issues.length}`);
    this.log(`  - Configuration Issues: ${audit.configuration.issues.length}`);
    this.log(`  - File Security Issues: ${audit.files.issues.length}`);
    this.log(`  - Network Security Issues: ${audit.network.issues.length}`);
    this.log(`  - Authentication Issues: ${audit.authentication.issues.length}`);

    return audit}

  async auditDependencies() {
    try {
      this.log('📦 Auditing dependencies for vulnerabilities...');
      
      const vulnerabilities = [];
      
      // Run npm audit
      try {
        const auditOutput = execSync('npm audit --json' { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          stdio: 'pipe' 
        });
        
        const audit = JSON.parse(auditOutput);
        if (audit.vulnerabilities) {
          Object.keys(audit.vulnerabilities).forEach(name => {
            const vuln = audit.vulnerabilities[name];
            vulnerabilities.push({
              name,
              severity: vuln.severity,
              title: vuln.title,
              description: vuln.description,
              fixAvailable: vuln.fixAvailable,
              via: vuln.via,
              type: 'dependency'
            })})}
      } catch (error) {
        // npm audit returns non-zero when vulnerabilities are found
        if (error.stdout) {
          try {
            const audit = JSON.parse(error.stdout);
            if (audit.vulnerabilities) {
              Object.keys(audit.vulnerabilities).forEach(name => {
                const vuln = audit.vulnerabilities[name];
                vulnerabilities.push({
                  name,
                  severity: vuln.severity,
                  title: vuln.title,
                  description: vuln.description,
                  fixAvailable: vuln.fixAvailable,
                  via: vuln.via,
                  type: 'dependency'
                })})}
          } catch (parseError) {
            this.log(`Failed to parse audit results: ${parseError.message}`, 'warn')}
        }
      }
      
      return {
        vulnerabilities,
        count: vulnerabilities.length,
        critical: vulnerabilities.filter(v => v.severity === 'critical').length,
        high: vulnerabilities.filter(v => v.severity === 'high').length,
        medium: vulnerabilities.filter(v => v.severity === 'medium').length,
        low: vulnerabilities.filter(v => v.severity === 'low').length
      }} catch (error) {
      this.log(`Dependency audit failed: ${error.message}`, 'error');
      return { vulnerabilities: [], count: 0, critical: 0, high: 0, medium: 0, low: 0 }}
  }

  async auditCode() {
    try {
      this.log('💻 Auditing code for security issues...');
      
      const issues = [];
      const files = this.getSourceFiles();
      
      for (const file of files) {
        const fileIssues = this.analyzeFileSecurity(file);
        issues.push(...fileIssues)}
      
      return {
        issues,
        count: issues.length,
        critical: issues.filter(i => i.severity === 'critical').length,
        high: issues.filter(i => i.severity === 'high').length,
        medium: issues.filter(i => i.severity === 'medium').length,
        low: issues.filter(i => i.severity === 'low').length
      }} catch (error) {
      this.log(`Code audit failed: ${error.message}`, 'error');
      return { issues: [], count: 0, critical: 0, high: 0, medium: 0, low: 0 }}
  }

  getSourceFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath)}
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDirectory(this.projectRoot);
    return files}

  analyzeFileSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const issues = [];
      
      const securityPatterns = [
        // Critical security issues
        { pattern: /eval\s*\(/, severity: 'critical', message: 'Use of eval() is extremely dangerous and can lead to code injection' }, { pattern: /Function\s*\(/, severity: 'critical', message: 'Use of Function constructor can lead to code injection' }, { pattern: /setTimeout\s*\(\s*['"`][^'"`]*['"`]/, severity: 'critical', message: 'Dynamic code execution via setTimeout with string' }, { pattern: /setInterval\s*\(\s*['"`][^'"`]*['"`]/, severity: 'critical', message: 'Dynamic code execution via setInterval with string' },
        
        // High severity issues
        { pattern: /innerHTML\s*=/, severity: 'high', message: 'Direct innerHTML assignment can lead to XSS attacks' }, { pattern: /document\.write/, severity: 'high', message: 'document.write() can lead to XSS attacks' }, { pattern: /password\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded password detected' }, { pattern: /api[Kk]ey\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded API key detected' }, { pattern: /secret\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded secret detected' }, { pattern: /token\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded token detected' },
        
        // Medium severity issues
        { pattern: /localStorage\.setItem/, severity: 'medium', message: 'Sensitive data stored in localStorage' }, { pattern: /sessionStorage\.setItem/, severity: 'medium', message: 'Sensitive data stored in sessionStorage' }, { pattern: /cookie\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'medium', message: 'Hardcoded cookie value' }, { pattern: /window\.location\s*=/, severity: 'medium', message: 'Direct window.location assignment can lead to open redirects' }, { pattern: /location\.href\s*=/, severity: 'medium', message: 'Direct location.href assignment can lead to open redirects' },
        
        // Low severity issues
        { pattern: /console\.log/, severity: 'low', message: 'Console.log statements may leak sensitive information' }, { pattern: /alert\s*\(/, severity: 'low', message: 'Alert statements may leak sensitive information' }, { pattern: /confirm\s*\(/, severity: 'low', message: 'Confirm statements may leak sensitive information' }
      ];
      
      lines.forEach((line, index) => {
        securityPatterns.forEach(({ pattern, severity, message }) => {
          if (pattern.test(line)) {
            issues.push({
              file: filePath,
              line: index + 1,
              severity,
              message,
              code: line.trim(),
              type: 'code'
            })}
        })});
      
      return issues} catch (error) {
      return []}
  }

  async auditConfiguration() {
    try {
      this.log('⚙️ Auditing configuration files...');
      
      const issues = [];
      const configFiles = [
        'package.json',
        'next.config.js',
        'next.config.cjs',
        'next.config.mjs',
        '.env',
        '.env.local',
        '.env.production',
        'netlify.toml',
        'vercel.json'
      ];
      
      for (const configFile of configFiles) {
        if (fs.existsSync(configFile)) {
          const fileIssues = this.analyzeConfigSecurity(configFile);
          issues.push(...fileIssues)}
      }
      
      return {
        issues,
        count: issues.length,
        critical: issues.filter(i => i.severity === 'critical').length,
        high: issues.filter(i => i.severity === 'high').length,
        medium: issues.filter(i => i.severity === 'medium').length,
        low: issues.filter(i => i.severity === 'low').length
      }} catch (error) {
      this.log(`Configuration audit failed: ${error.message}`, 'error');
      return { issues: [], count: 0, critical: 0, high: 0, medium: 0, low: 0 }}
  }

  analyzeConfigSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const issues = [];
      
      const configPatterns = [
        { pattern: /password\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded password in configuration' }, { pattern: /api[Kk]ey\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded API key in configuration' }, { pattern: /secret\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded secret in configuration' }, { pattern: /token\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded token in configuration' }, { pattern: /debug\s*:\s*true/, severity: 'medium', message: 'Debug mode enabled in production configuration' }, { pattern: /NODE_ENV\s*[:=]\s*['"`]development['"`]/, severity: 'medium', message: 'Development environment in production' }
      ];
      
      lines.forEach((line, index) => {
        configPatterns.forEach(({ pattern, severity, message }) => {
          if (pattern.test(line)) {
            issues.push({
              file: filePath,
              line: index + 1,
              severity,
              message,
              code: line.trim(),
              type: 'configuration'
            })}
        })});
      
      return issues} catch (error) {
      return []}
  }

  async auditFiles() {
    try {
      this.log('📁 Auditing file permissions and sensitive files...');
      
      const issues = [];
      
      // Check for sensitive files that shouldn't be in the repository
      const sensitiveFiles = [
        '.env',
        '.env.local',
        '.env.production',
        'config.json',
        'secrets.json',
        'credentials.json',
        'private-key.pem',
        'public-key.pem',
        'id_rsa',
        'id_rsa.pub'
      ];
      
      for (const sensitiveFile of sensitiveFiles) {
        if (fs.existsSync(sensitiveFile)) {
          issues.push({
            file: sensitiveFile,
            severity: 'high',
            message: 'Sensitive file found in repository',
            type: 'file'
          })}
      }
      
      // Check file permissions
      const checkPermissions = (filePath) => {
        try {
          const stats = fs.statSync(filePath);
          const mode = stats.mode;
          const permissions = (mode & parseInt('777', 8)).toString(8);
          
          if (permissions.includes('7')) { // World writable
            issues.push({
              file: filePath,
              severity: 'medium',
              message: 'File has overly permissive permissions',
              permissions,
              type: 'file'
            })}
        } catch (error) {
          // Skip files we can't check
        }
      };
      
      // Check permissions for key files
      const keyFiles = ['package.json', 'next.config.js', 'next.config.cjs'];
      keyFiles.forEach(file => {
        if (fs.existsSync(file)) {
          checkPermissions(file)}
      });
      
      return {
        issues,
        count: issues.length,
        critical: issues.filter(i => i.severity === 'critical').length,
        high: issues.filter(i => i.severity === 'high').length,
        medium: issues.filter(i => i.severity === 'medium').length,
        low: issues.filter(i => i.severity === 'low').length
      }} catch (error) {
      this.log(`File audit failed: ${error.message}`, 'error');
      return { issues: [], count: 0, critical: 0, high: 0, medium: 0, low: 0 }}
  }

  async auditNetworkSecurity() {
    try {
      this.log('🌐 Auditing network security...');
      
      const issues = [];
      const files = this.getSourceFiles();
      
      for (const file of files) {
        const fileIssues = this.analyzeNetworkSecurity(file);
        issues.push(...fileIssues)}
      
      return {
        issues,
        count: issues.length,
        critical: issues.filter(i => i.severity === 'critical').length,
        high: issues.filter(i => i.severity === 'high').length,
        medium: issues.filter(i => i.severity === 'medium').length,
        low: issues.filter(i => i.severity === 'low').length
      }} catch (error) {
      this.log(`Network security audit failed: ${error.message}`, 'error');
      return { issues: [], count: 0, critical: 0, high: 0, medium: 0, low: 0 }}
  }

  analyzeNetworkSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const issues = [];
      
      const networkPatterns = [
        { pattern: /http:\/\//, severity: 'medium', message: 'HTTP protocol used instead of HTTPS' }, { pattern: /fetch\s*\(\s*['"`]http:/, severity: 'medium', message: 'HTTP fetch request detected' }, { pattern: /axios\.get\s*\(\s*['"`]http:/, severity: 'medium', message: 'HTTP axios request detected' }, { pattern: /XMLHttpRequest.*http:/, severity: 'medium', message: 'HTTP XMLHttpRequest detected' }, { pattern: /websocket.*ws:\/\//, severity: 'medium', message: 'Unencrypted WebSocket connection' }
      ];
      
      lines.forEach((line, index) => {
        networkPatterns.forEach(({ pattern, severity, message }) => {
          if (pattern.test(line)) {
            issues.push({
              file: filePath,
              line: index + 1,
              severity,
              message,
              code: line.trim(),
              type: 'network'
            })}
        })});
      
      return issues} catch (error) {
      return []}
  }

  async auditAuthentication() {
    try {
      this.log('🔐 Auditing authentication and authorization...');
      
      const issues = [];
      const files = this.getSourceFiles();
      
      for (const file of files) {
        const fileIssues = this.analyzeAuthentication(file);
        issues.push(...fileIssues)}
      
      return {
        issues,
        count: issues.length,
        critical: issues.filter(i => i.severity === 'critical').length,
        high: issues.filter(i => i.severity === 'high').length,
        medium: issues.filter(i => i.severity === 'medium').length,
        low: issues.filter(i => i.severity === 'low').length
      }} catch (error) {
      this.log(`Authentication audit failed: ${error.message}`, 'error');
      return { issues: [], count: 0, critical: 0, high: 0, medium: 0, low: 0 }}
  }

  analyzeAuthentication(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const issues = [];
      
      const authPatterns = [
        { pattern: /password\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded password in authentication code' }, { pattern: /admin\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'medium', message: 'Hardcoded admin credentials' }, { pattern: /root\s*[:=]\s*['"`][^'"`]+['"`]/, severity: 'medium', message: 'Hardcoded root credentials' }, { pattern: /jwt.*secret.*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded JWT secret' }, { pattern: /session.*secret.*['"`][^'"`]+['"`]/, severity: 'high', message: 'Hardcoded session secret' }
      ];
      
      lines.forEach((line, index) => {
        authPatterns.forEach(({ pattern, severity, message }) => {
          if (pattern.test(line)) {
            issues.push({
              file: filePath,
              line: index + 1,
              severity,
              message,
              code: line.trim(),
              type: 'authentication'
            })}
        })});
      
      return issues} catch (error) {
      return []}
  }

  async autoFixSecurityIssues(audit) {
    this.log('🔧 Auto-fixing security issues...');
    
    const fixes = [];
    
    // Fix dependency vulnerabilities
    if (audit.dependencies.vulnerabilities.length > 0) {
      try {
        this.log('Fixing dependency vulnerabilities...');
        execSync('npm audit fix' { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 120000 
        });
        fixes.push({ type: 'dependencies', success: true, count: audit.dependencies.vulnerabilities.length });
        this.log('✅ Dependency vulnerabilities fixed')} catch (error) {
        fixes.push({ type: 'dependencies', success: false, error: error.message });
        this.log(`❌ Failed to fix dependency vulnerabilities: ${error.message}`, 'error')}
    }
    
    // Remove sensitive files
    const sensitiveFiles = audit.files.issues.filter(i => i.message.includes('Sensitive file'));
    for (const issue of sensitiveFiles) {
      try {
        this.log(`Removing sensitive file: ${issue.file}`);
        fs.unlinkSync(issue.file);
        fixes.push({ type: 'sensitive-files', success: true, file: issue.file });
        this.log(`✅ Removed sensitive file: ${issue.file}`)} catch (error) {
        fixes.push({ type: 'sensitive-files', success: false, file: issue.file, error: error.message });
        this.log(`❌ Failed to remove sensitive file ${issue.file}: ${error.message}`, 'error')}
    }
    
    return fixes}

  async generateSecurityReport() {
    this.log('📊 Generating security audit report...');
    
    const audit = await this.performSecurityAudit();
    const fixes = await this.autoFixSecurityIssues(audit);
    
    // Calculate security score
    const securityScore = this.calculateSecurityScore(audit);
    
    const report = {
      timestamp: new Date().toISOString(),
      audit,
      fixes,
      securityScore,
      summary: {
        overallScore: securityScore,
        totalIssues: audit.dependencies.count + audit.code.count + audit.configuration.count + 
                    audit.files.count + audit.network.count + audit.authentication.count,
        criticalIssues: audit.dependencies.critical + audit.code.critical + audit.configuration.critical + 
                       audit.files.critical + audit.network.critical + audit.authentication.critical,
        highIssues: audit.dependencies.high + audit.code.high + audit.configuration.high + 
                   audit.files.high + audit.network.high + audit.authentication.high,
        fixesApplied: fixes.filter(f => f.success).length
      },
      recommendations: this.generateSecurityRecommendations(audit)
    };

    const reportFile = path.join(this.projectRoot, 'logs/smart-security-auditor-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Security report saved to ${reportFile}`);
    return report}

  calculateSecurityScore(audit) {
    let score = 100;
    
    // Deduct points for issues based on severity
    score -= audit.dependencies.critical * 10;
    score -= audit.dependencies.high * 5;
    score -= audit.dependencies.medium * 2;
    score -= audit.dependencies.low * 1;
    
    score -= audit.code.critical * 15;
    score -= audit.code.high * 8;
    score -= audit.code.medium * 3;
    score -= audit.code.low * 1;
    
    score -= audit.configuration.critical * 12;
    score -= audit.configuration.high * 6;
    score -= audit.configuration.medium * 2;
    score -= audit.configuration.low * 1;
    
    score -= audit.files.critical * 10;
    score -= audit.files.high * 5;
    score -= audit.files.medium * 2;
    score -= audit.files.low * 1;
    
    score -= audit.network.critical * 8;
    score -= audit.network.high * 4;
    score -= audit.network.medium * 2;
    score -= audit.network.low * 1;
    
    score -= audit.authentication.critical * 12;
    score -= audit.authentication.high * 6;
    score -= audit.authentication.medium * 2;
    score -= audit.authentication.low * 1;
    
    return Math.max(0, Math.min(100, score.toFixed(2)))}

  generateSecurityRecommendations(audit) {
    const recommendations = [];
    
    if (audit.dependencies.critical > 0 || audit.dependencies.high > 0) {
      recommendations.push('Immediately update dependencies with critical or high severity vulnerabilities')}
    
    if (audit.code.critical > 0) {
      recommendations.push('Remove or replace dangerous code patterns like eval() and Function constructor')}
    
    if (audit.configuration.high > 0) {
      recommendations.push('Remove hardcoded credentials from configuration files')}
    
    if (audit.files.high > 0) {
      recommendations.push('Remove sensitive files from the repository and add them to .gitignore')}
    
    if (audit.network.medium > 0) {
      recommendations.push('Use HTTPS instead of HTTP for all network communications')}
    
    if (audit.authentication.high > 0) {
      recommendations.push('Implement proper authentication and authorization mechanisms')}
    
    if (audit.dependencies.count > 10) {
      recommendations.push('Regularly audit and update dependencies')}
    
    if (audit.code.count > 20) {
      recommendations.push('Implement security code review processes')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Smart Security Auditor...');
    
    try {
      // Generate comprehensive security report
      const report = await this.generateSecurityReport();
      
      // Save security history
      this.securityHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        securityScore: report.securityScore
      });
      
      this.saveSecurityHistory();

      this.log(`🎯 Security Audit Complete:`);
      this.log(`   - Overall Security Score: ${report.securityScore}/100`);
      this.log(`   - Total Issues: ${report.summary.totalIssues}`);
      this.log(`   - Critical Issues: ${report.summary.criticalIssues}`);
      this.log(`   - High Issues: ${report.summary.highIssues}`);
      this.log(`   - Fixes Applied: ${report.summary.fixesApplied}`)} catch (error) {
      this.log(`❌ Security Auditor failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the security auditor
if (import.meta.url === `file://${process.argv[1]}`) {
  const auditor = new SmartSecurityAuditor();
  auditor.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;