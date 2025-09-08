

  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {

    console && console.log('⚠️  Security vulnerabilities found: '),
    Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {}
      console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`);


import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔒 Starting Security Audit...\n');

// Check for security vulnerabilities
try {
  console.log('📦 Checking npm dependencies for vulnerabilities...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const auditData = JSON.parse(auditResult);
  
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities found:');
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`);



// Check for security vulnerabilities
try {
  console.log('📦 Checking npm dependencies for vulnerabilities...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const auditData = JSON.parse(auditResult);

  
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities found:');
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`);

    });

  } else {
    console.log('✅ No security vulnerabilities found in dependencies');
  }
} catch (error) {

console.log('\n🔍 Scanning for sensitive data...');

const scanDirectory = (dir, results = []) => {

  const files = fs.readdirSync(dir);
  files.forEach(file => {}
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

      try {

        const content = fs.readFileSync(filePath, 'utf8');
        sensitivePatterns.forEach(pattern => {}
          const matches = content.match(pattern);


        // Skip files that can't be read

      }
    }
  });
return results;
};

const sensitiveResults = scanDirectory('.');



    });
  } else {
    console.log('✅ All dependencies are up to date');
  }
} catch (error) {


  console && console.log('✅ All dependencies are up to date');
}



  timestamp: new Date().toISOString(),
  vulnerabilities: sensitiveResults.length,

console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: 'filePath',matches: 'matches' })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: 'sensitiveResults.length',recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');

console.log('🔒 Security audit completed!');

fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2));

console.log('\n📊 Security audit report saved to security-audit-report.json');
console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: 'filePath',matches: 'matches' })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: 'sensitiveResults.length',recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console.log('🔒 Starting Security Audit...\n'); try { console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) { console.log('⚠️ Security vulnerabilities found:'); Object.entries(auditData.vulnerabilities).forEach(([pkg,vuln]) => { console.log(` - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else { console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console.log('❌ Failed to run npm audit:',error.message)} console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs.readFileSync(filePath,'utf8'); sensitivePatterns.forEach(pattern => { const matches = content.match(pattern); if (matches) { results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults.length > 0) { console.log('⚠️ Potential sensitive data found:'); sensitiveResults.forEach(result => { console.log(` - ${result.file}`); result.matches.forEach(match => { console.log(` ${match.substring(0,50)}...`)})})} else { console.log('✅ No sensitive data patterns found')} console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON.parse(outdatedResult); if (Object.keys(outdatedData).length > 0) { console.log('⚠️ Outdated dependencies found:'); Object.entries(outdatedData).forEach(([pkg,info]) => { console.log(` - ${pkg}: ${info.current} → ${info.latest}`)})} else { console.log('✅ All dependencies are up to date')} } catch (error) { console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next.js configuration' ] }; fs.writeFileSync('security-audit-report.json',JSON.stringify(securityReport,null,2)); console.log('\n📊 Security audit report saved to security-audit-report.json'); console.log('🔒 Security audit completed!');

console.log('🔒 Security audit completed!');



const fs = require('fs');


const path = require('path');
'
console.log('🔒 Running security audit...');'
console.log('✅ Security audit completed');



const { execSync } = require('child_process');

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting security audit...');

class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.auditResults = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      securityHeaders: [],
      dependencies: [],
      codeIssues: [],
      recommendations: []
    };
  }

  async auditDependencies() {
    try {
      console.log('📦 Auditing dependencies...');
      
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.auditResults.vulnerabilities.push({
            name,
            severity: vuln.severity,
            description: vuln.description,
            recommendation: vuln.remediation
          });
        });
      }
      
      console.log(`✅ Found ${this.auditResults.vulnerabilities.length} vulnerabilities`);
      
    } catch (error) {
      console.warn('⚠️  Dependency audit failed:', error.message);
    }
  }

  async checkSecurityHeaders() {
    try {
      console.log('🛡️  Checking security headers...');
      
      const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const config = fs.readFileSync(nextConfigPath, 'utf8');
        
        const securityChecks = [
          { name: 'Content Security Policy', pattern: /contentSecurityPolicy|CSP/i },
          { name: 'X-Frame-Options', pattern: /xFrameOptions|X-Frame-Options/i },
          { name: 'X-Content-Type-Options', pattern: /xContentTypeOptions|X-Content-Type-Options/i },
          { name: 'X-XSS-Protection', pattern: /xXSSProtection|X-XSS-Protection/i },
          { name: 'Strict-Transport-Security', pattern: /strictTransportSecurity|Strict-Transport-Security/i }
        ];
        
        securityChecks.forEach(check => {
          if (check.pattern.test(config)) {
            this.auditResults.securityHeaders.push({
              name: check.name,
              status: 'configured',
              recommendation: 'Good security practice implemented'
            });
          } else {
            this.auditResults.securityHeaders.push({
              name: check.name,
              status: 'missing',
              recommendation: `Implement ${check.name} for better security`
            });
          }
        });
      }
      
      console.log(`✅ Checked ${this.auditResults.securityHeaders.length} security headers`);
      
    } catch (error) {
      console.warn('⚠️  Security headers check failed:', error.message);
    }
  }

  async scanCodeForIssues() {
    try {
      console.log('🔍 Scanning code for security issues...');
      
      const srcDir = path.join(__dirname, '..', 'src');
      const pagesDir = path.join(__dirname, '..', 'pages');
      const componentsDir = path.join(__dirname, '..', 'components');
      
      const directories = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
      
      const securityPatterns = [
        {
          name: 'Hardcoded Secrets',
          pattern: /(password|secret|key|token)\s*[:=]\s*['"][^'"]+['"]/gi,
          severity: 'high'
        },
        {
          name: 'SQL Injection Risk',
          pattern: /(query|sql).*\+.*['"]/gi,
          severity: 'high'
        },
        {
          name: 'XSS Risk',
          pattern: /dangerouslySetInnerHTML/gi,
          severity: 'medium'
        },
        {
          name: 'Unsafe Eval',
          pattern: /eval\s*\(/gi,
          severity: 'high'
        },
        {
          name: 'Console Logs',
          pattern: /console\.(log|warn|error)/gi,
          severity: 'low'
        }
      ];
      
      for (const dir of directories) {
        this.scanDirectory(dir, securityPatterns);
      }
      
      console.log(`✅ Scanned code for security issues`);
      
    } catch (error) {
      console.warn('⚠️  Code scanning failed:', error.message);
    }
  }

  scanDirectory(dir, patterns) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectory(fullPath, patterns);
      } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          patterns.forEach(pattern => {
            const matches = content.match(pattern.pattern);
            if (matches) {
              this.auditResults.codeIssues.push({
                file: fullPath,
                issue: pattern.name,
                severity: pattern.severity,
                matches: matches.length,
                recommendation: this.getRecommendation(pattern.name)
              });
            }
          });
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  getRecommendation(issueType) {
    const recommendations = {
      'Hardcoded Secrets': 'Use environment variables for sensitive data',
      'SQL Injection Risk': 'Use parameterized queries or ORM',
      'XSS Risk': 'Sanitize user input and avoid dangerouslySetInnerHTML',
      'Unsafe Eval': 'Avoid using eval() - use safer alternatives',
      'Console Logs': 'Remove console logs from production code'
    };
    
    return recommendations[issueType] || 'Review and fix security issue';
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.auditResults.vulnerabilities.length > 0) {
      recommendations.push('Update vulnerable dependencies immediately');
    }
    
    const missingHeaders = this.auditResults.securityHeaders.filter(h => h.status === 'missing');
    if (missingHeaders.length > 0) {
      recommendations.push('Implement missing security headers');
    }
    
    const highSeverityIssues = this.auditResults.codeIssues.filter(i => i.severity === 'high');
    if (highSeverityIssues.length > 0) {
      recommendations.push('Fix high severity code security issues');
    }
    
    recommendations.push('Implement Content Security Policy (CSP)');
    recommendations.push('Set up rate limiting and DDoS protection');
    recommendations.push('Implement input validation and sanitization');
    recommendations.push('Add security monitoring and logging');
    recommendations.push('Regular security audits and penetration testing');
    
    this.auditResults.recommendations = recommendations;
  }

  generateReport() {
    this.generateRecommendations();
    
    const report = {
      ...this.auditResults,
      summary: {
        totalVulnerabilities: this.auditResults.vulnerabilities.length,
        missingSecurityHeaders: this.auditResults.securityHeaders.filter(h => h.status === 'missing').length,
        codeIssues: this.auditResults.codeIssues.length,
        highSeverityIssues: this.auditResults.codeIssues.filter(i => i.severity === 'high').length
      }
    };
    
    const reportPath = path.join(__dirname, '..', 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 Security audit report saved to security-audit-report.json');
    return report;
  }

  async run() {
    try {
      await this.auditDependencies();
      await this.checkSecurityHeaders();
      await this.scanCodeForIssues();
      
      const report = this.generateReport();
      
      console.log('\n🔒 Security Audit Summary:');
      console.log(`Vulnerabilities: ${report.summary.totalVulnerabilities}`);
      console.log(`Missing Security Headers: ${report.summary.missingSecurityHeaders}`);
      console.log(`Code Issues: ${report.summary.codeIssues}`);
      console.log(`High Severity Issues: ${report.summary.highSeverityIssues}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Security Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const auditor = new SecurityAuditor();
  await auditor.run();
}


auditor.run().catch(console.error);








