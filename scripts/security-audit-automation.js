#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SecurityAuditAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'security-audit-automation.log');
    this.securityReportFile = path.join(this.projectRoot, 'logs', 'security-audit-report.json');
    this.fixedVulnerabilities = [];
    this.remainingVulnerabilities = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async runSecurityAudit() {
    this.log('🔍 Running comprehensive security audit...');
    
    const auditResults = {
      npm: await this.runNpmAudit(),
      snyk: await this.runSnykAudit(),
      codeScan: await this.runCodeSecurityScan(),
      dependencyCheck: await this.runDependencyCheck(),
      secretsScan: await this.runSecretsScan()
    };
    
    return auditResults;
  }

  async runNpmAudit() {
    this.log('Running npm security audit...');
    
    const result = await this.runCommand('npm audit --json', { silent: true });
    
    if (result.success) {
      try {
        const audit = JSON.parse(result.output);
        return {
          success: true,
          vulnerabilities: audit.metadata?.vulnerabilities || {},
          summary: audit.metadata?.summary || {},
          advisories: audit.advisories || {},
          timestamp: new Date().toISOString()
        };
      } catch (e) {
        this.log('Failed to parse npm audit results', 'WARN');
        return { success: false, error: e.message };
      }
    }
    
    return { success: false, error: result.error };
  }

  async runSnykAudit() {
    this.log('Running Snyk security audit...');
    
    // Check if Snyk is installed
    const snykCheck = await this.runCommand('snyk --version', { silent: true });
    
    if (!snykCheck.success) {
      this.log('Snyk not installed - skipping Snyk audit', 'WARN');
      return { success: false, message: 'Snyk not installed' };
    }
    
    const result = await this.runCommand('snyk test --json', { silent: true });
    
    if (result.success) {
      try {
        const snykResults = JSON.parse(result.output);
        return {
          success: true,
          vulnerabilities: snykResults.vulnerabilities || [],
          summary: snykResults.summary || {},
          timestamp: new Date().toISOString()
        };
      } catch (e) {
        this.log('Failed to parse Snyk results', 'WARN');
        return { success: false, error: e.message };
      }
    }
    
    return { success: false, error: result.error };
  }

  async runCodeSecurityScan() {
    this.log('Running code security scan...');
    
    const securityIssues = [];
    const files = this.getSourceFiles();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const issues = this.scanCodeForSecurityIssues(content, file);
        securityIssues.push(...issues);
      } catch (error) {
        this.log(`Error scanning ${file}: ${error.message}`, 'WARN');
      }
    }
    
    return {
      success: true,
      issues: securityIssues,
      timestamp: new Date().toISOString()
    };
  }

  scanCodeForSecurityIssues(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Check for dangerous patterns
      if (line.includes('eval(') && !line.includes('// safe')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          severity: 'critical',
          type: 'code-injection',
          message: 'eval() usage detected - potential code injection risk',
          recommendation: 'Avoid eval() - use safer alternatives'
        });
      }
      
      if (line.includes('innerHTML') && !line.includes('DOMPurify') && !line.includes('sanitize')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          severity: 'high',
          type: 'xss',
          message: 'innerHTML usage without sanitization - potential XSS risk',
          recommendation: 'Use DOMPurify or similar sanitization library'
        });
      }
      
      if (line.includes('localStorage.setItem') && line.includes('password')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          severity: 'medium',
          type: 'data-exposure',
          message: 'Password stored in localStorage - security risk',
          recommendation: 'Use secure storage methods for sensitive data'
        });
      }
      
      if (line.includes('console.log') && (line.includes('password') || line.includes('token') || line.includes('secret'))) {
        issues.push({
          file: filePath,
          line: lineNumber,
          severity: 'medium',
          type: 'data-exposure',
          message: 'Sensitive data logged to console',
          recommendation: 'Remove or redact sensitive data from logs'
        });
      }
      
      if (line.includes('http://') && !line.includes('localhost')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          severity: 'medium',
          type: 'insecure-protocol',
          message: 'HTTP protocol usage - data transmitted insecurely',
          recommendation: 'Use HTTPS for production environments'
        });
      }
      
      if (line.includes('process.env') && line.includes('NODE_ENV') && line.includes('production')) {
        // Check if sensitive environment variables are exposed
        if (line.includes('API_KEY') || line.includes('SECRET') || line.includes('PASSWORD')) {
          issues.push({
            file: filePath,
            line: lineNumber,
            severity: 'high',
            type: 'env-exposure',
            message: 'Sensitive environment variable exposed in production code',
            recommendation: 'Use build-time environment variable substitution'
          });
        }
      }
    }
    
    return issues;
  }

  async runDependencyCheck() {
    this.log('Running dependency security check...');
    
    // Check for known vulnerable packages
    const result = await this.runCommand('npm audit --audit-level=moderate --json', { silent: true });
    
    if (result.success) {
      try {
        const audit = JSON.parse(result.output);
        return {
          success: true,
          vulnerabilities: audit.metadata?.vulnerabilities || {},
          advisories: audit.advisories || {},
          timestamp: new Date().toISOString()
        };
      } catch (e) {
        this.log('Failed to parse dependency check results', 'WARN');
        return { success: false, error: e.message };
      }
    }
    
    return { success: false, error: result.error };
  }

  async runSecretsScan() {
    this.log('Scanning for secrets and sensitive data...');
    
    const secrets = [];
    const files = this.getSourceFiles();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const foundSecrets = this.scanForSecrets(content, file);
        secrets.push(...foundSecrets);
      } catch (error) {
        this.log(`Error scanning ${file} for secrets: ${error.message}`, 'WARN');
      }
    }
    
    return {
      success: true,
      secrets,
      timestamp: new Date().toISOString()
    };
  }

  scanForSecrets(content, filePath) {
    const secrets = [];
    const lines = content.split('\n');
    
    // Common secret patterns
    const secretPatterns = [
      { pattern: /(api[_-]?key|apikey)\s*[:=]\s*['"`][^'"`]{20,}['"`]/gi, type: 'API Key' },
      { pattern: /(secret|password|token)\s*[:=]\s*['"`][^'"`]{10,}['"`]/gi, type: 'Secret' },
      { pattern: /(aws_access_key_id|aws_secret_access_key)\s*[:=]\s*['"`][^'"`]+['"`]/gi, type: 'AWS Credentials' },
      { pattern: /(sk_live_|pk_live_|sk_test_|pk_test_)[a-zA-Z0-9]{24}/gi, type: 'Stripe Key' },
      { pattern: /(ghp_|gho_|ghu_|ghs_|ghr_)[a-zA-Z0-9]{36}/gi, type: 'GitHub Token' },
      { pattern: /(AIza|ya29)[a-zA-Z0-9_-]{35}/gi, type: 'Google API Key' }
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      for (const pattern of secretPatterns) {
        const matches = line.match(pattern.pattern);
        if (matches) {
          secrets.push({
            file: filePath,
            line: lineNumber,
            type: pattern.type,
            severity: 'critical',
            message: `${pattern.type} detected in code`,
            recommendation: 'Move secrets to environment variables or secure configuration'
          });
        }
      }
    }
    
    return secrets;
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'services', 'scripts'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectFiles(dirPath, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.js') || 
      file.endsWith('.jsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.tsx') ||
      file.endsWith('.json') ||
      file.endsWith('.env') ||
      file.endsWith('.config.js')
    );
  }

  collectFiles(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        this.collectFiles(itemPath, files);
      } else {
        files.push(itemPath);
      }
    }
  }

  async fixVulnerabilities(auditResults) {
    this.log('🔧 Starting vulnerability fixes...');
    
    let totalFixed = 0;
    
    // Fix npm vulnerabilities
    if (auditResults.npm.success && Object.keys(auditResults.npm.vulnerabilities).length > 0) {
      this.log('Fixing npm vulnerabilities...');
      const fixedCount = await this.fixNpmVulnerabilities(auditResults.npm);
      totalFixed += fixedCount;
    }
    
    // Fix code security issues
    if (auditResults.codeScan.success && auditResults.codeScan.issues.length > 0) {
      this.log('Fixing code security issues...');
      const fixedCount = await this.fixCodeSecurityIssues(auditResults.codeScan.issues);
      totalFixed += fixedCount;
    }
    
    // Fix secrets exposure
    if (auditResults.secretsScan.success && auditResults.secretsScan.secrets.length > 0) {
      this.log('Fixing secrets exposure...');
      const fixedCount = await this.fixSecretsExposure(auditResults.secretsScan.secrets);
      totalFixed += fixedCount;
    }
    
    return totalFixed;
  }

  async fixNpmVulnerabilities(npmAudit) {
    let fixedCount = 0;
    
    try {
      // Try automatic fix first
      this.log('Running npm audit fix...');
      const fixResult = await this.runCommand('npm audit fix', { silent: true });
      
      if (fixResult.success) {
        this.log('✅ npm vulnerabilities fixed automatically');
        fixedCount = Object.values(npmAudit.vulnerabilities).reduce((sum, count) => sum + count, 0);
      }
      
      // Try force fix for remaining vulnerabilities
      this.log('Attempting to fix remaining vulnerabilities...');
      const forceFixResult = await this.runCommand('npm audit fix --force', { silent: true });
      
      if (forceFixResult.success) {
        this.log('✅ Remaining vulnerabilities fixed with force');
        fixedCount += Object.values(npmAudit.vulnerabilities).reduce((sum, count) => sum + count, 0);
      }
      
    } catch (error) {
      this.log(`Error fixing npm vulnerabilities: ${error.message}`, 'ERROR');
    }
    
    return fixedCount;
  }

  async fixCodeSecurityIssues(issues) {
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        if (await this.fixCodeSecurityIssue(issue)) {
          fixedCount++;
          this.fixedVulnerabilities.push({
            ...issue,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.remainingVulnerabilities.push({
            ...issue,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix security issue in ${issue.file}: ${error.message}`, 'ERROR');
        this.remainingVulnerabilities.push({
          ...issue,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixCodeSecurityIssue(issue) {
    const filePath = path.join(this.projectRoot, issue.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    switch (issue.type) {
      case 'code-injection':
        // Replace eval() with safer alternatives
        if (content.includes('eval(')) {
          content = content.replace(/eval\s*\(/g, '// SECURITY: eval() removed - use safer alternatives');
          modified = true;
        }
        break;
        
      case 'xss':
        // Add DOMPurify import and sanitization
        if (content.includes('innerHTML') && !content.includes('DOMPurify')) {
          if (!content.includes('import DOMPurify')) {
            content = content.replace(/import React/, 'import React\nimport DOMPurify from "dompurify";');
          }
          content = content.replace(/\.innerHTML\s*=\s*([^;]+)/g, '.innerHTML = DOMPurify.sanitize($1)');
          modified = true;
        }
        break;
        
      case 'data-exposure':
        // Remove or redact sensitive data logging
        if (content.includes('console.log') && (content.includes('password') || content.includes('token'))) {
          content = content.replace(/console\.log\([^)]*password[^)]*\)/gi, '// SECURITY: Password logging removed');
          content = content.replace(/console\.log\([^)]*token[^)]*\)/gi, '// SECURITY: Token logging removed');
          modified = true;
        }
        break;
        
      case 'insecure-protocol':
        // Replace HTTP with HTTPS
        content = content.replace(/http:\/\/(?!localhost)/g, 'https://');
        modified = true;
        break;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  }

  async fixSecretsExposure(secrets) {
    let fixedCount = 0;
    
    for (const secret of secrets) {
      try {
        if (await this.fixSecretExposure(secret)) {
          fixedCount++;
          this.fixedVulnerabilities.push({
            ...secret,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.remainingVulnerabilities.push({
            ...secret,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix secret exposure in ${secret.file}: ${error.message}`, 'ERROR');
        this.remainingVulnerabilities.push({
          ...secret,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixSecretExposure(secret) {
    const filePath = path.join(this.projectRoot, secret.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace hardcoded secrets with environment variable references
    if (secret.type === 'API Key' || secret.type === 'Secret') {
      content = content.replace(/(api[_-]?key|apikey|secret|password|token)\s*[:=]\s*['"`][^'"`]+['"`]/gi, 
        '$1: process.env.$1?.toUpperCase() || "MISSING_ENV_VAR"');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  }

  async generateReport(auditResults, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalVulnerabilities: this.countTotalVulnerabilities(auditResults),
        fixedVulnerabilities: fixedCount,
        remainingVulnerabilities: this.remainingVulnerabilities.length,
        successRate: this.fixedVulnerabilities.length / (this.fixedVulnerabilities.length + this.remainingVulnerabilities.length) * 100
      },
      auditResults,
      fixedVulnerabilities: this.fixedVulnerabilities,
      remainingVulnerabilities: this.remainingVulnerabilities,
      recommendations: this.generateSecurityRecommendations(auditResults)
    };
    
    // Save report
    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Security audit report generated: ${fixedCount} vulnerabilities fixed`);
    return report;
  }

  countTotalVulnerabilities(auditResults) {
    let total = 0;
    
    if (auditResults.npm.success) {
      total += Object.values(auditResults.npm.vulnerabilities).reduce((sum, count) => sum + count, 0);
    }
    
    if (auditResults.codeScan.success) {
      total += auditResults.codeScan.issues.length;
    }
    
    if (auditResults.secretsScan.success) {
      total += auditResults.secretsScan.secrets.length;
    }
    
    return total;
  }

  generateSecurityRecommendations(auditResults) {
    const recommendations = [];
    
    // Critical vulnerabilities
    const criticalIssues = this.remainingVulnerabilities.filter(v => v.severity === 'critical');
    if (criticalIssues.length > 0) {
      recommendations.push({
        category: 'critical',
        priority: 'critical',
        message: `${criticalIssues.length} critical security issues require immediate attention`,
        action: 'Review and fix immediately'
      });
    }
    
    // High severity issues
    const highIssues = this.remainingVulnerabilities.filter(v => v.severity === 'high');
    if (highIssues.length > 0) {
      recommendations.push({
        category: 'high',
        priority: 'high',
        message: `${highIssues.length} high severity security issues detected`,
        action: 'Fix within 24 hours'
      });
    }
    
    // Dependency updates
    if (auditResults.npm.success && Object.keys(auditResults.npm.vulnerabilities).length > 0) {
      recommendations.push({
        category: 'dependencies',
        priority: 'medium',
        message: 'Update vulnerable dependencies',
        action: 'Run npm audit fix and update packages'
      });
    }
    
    // Code security
    if (auditResults.codeScan.success && auditResults.codeScan.issues.length > 0) {
      recommendations.push({
        category: 'code',
        priority: 'medium',
        message: 'Review code security patterns',
        action: 'Implement security best practices'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Security Audit Automation');
    
    try {
      // Run security audit
      const auditResults = await this.runSecurityAudit();
      
      // Log initial status
      this.log(`📊 Security audit results:`);
      this.log(`  - npm vulnerabilities: ${auditResults.npm.success ? Object.values(auditResults.npm.vulnerabilities).reduce((sum, count) => sum + count, 0) : 'N/A'}`);
      this.log(`  - Code security issues: ${auditResults.codeScan.success ? auditResults.codeScan.issues.length : 'N/A'}`);
      this.log(`  - Secrets exposed: ${auditResults.secretsScan.success ? auditResults.secretsScan.secrets.length : 'N/A'}`);
      
      // Fix vulnerabilities
      const fixedCount = await this.fixVulnerabilities(auditResults);
      
      // Generate final report
      const report = await this.generateReport(auditResults, fixedCount);
      
      this.log(`✅ Security audit completed! Fixed ${fixedCount} vulnerabilities`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} security recommendations:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in security audit automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the security audit automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new SecurityAuditAutomation();
  automation.run().catch(console.error);
}

export default SecurityAuditAutomation;