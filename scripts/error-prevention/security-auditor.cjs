#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'automation/logs/security-auditor.log');
    this.reportFile = path.join(process.cwd(), 'automation/logs/security-report.json');
    this.vulnerabilityCount = 0;
    this.lastAudit = null;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSecurityAudit() {
    this.log('Starting security audit...');
    
    try {
      // Run npm audit
      this.log('Running npm audit...');
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      this.vulnerabilityCount = auditData.metadata?.vulnerabilities?.total || 0;
      this.lastAudit = new Date();
      
      if (this.vulnerabilityCount === 0) {
        this.log('No security vulnerabilities found!');
      } else {
        this.log(`Found ${this.vulnerabilityCount} security vulnerabilities`);
        
        // Log high and critical vulnerabilities
        if (auditData.vulnerabilities) {
          Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
            if (vuln.severity === 'high' || vuln.severity === 'critical') {
              this.log(`HIGH/CRITICAL: ${pkg} - ${vuln.title}`);
            }
          });
        }
      }
      
      // Generate security report
      const report = {
        timestamp: this.lastAudit.toISOString(),
        vulnerabilityCount: this.vulnerabilityCount,
        vulnerabilities: auditData.vulnerabilities || {},
        metadata: auditData.metadata || {},
        status: this.vulnerabilityCount === 0 ? 'secure' : 'vulnerabilities_found'
      };
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
      // Attempt to fix vulnerabilities if found
      if (this.vulnerabilityCount > 0) {
        this.attemptSecurityFix();
      }
      
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`);
      
      // Try to parse partial results
      try {
        const partialResult = JSON.parse(error.stdout || '{}');
        if (partialResult.vulnerabilities) {
          this.vulnerabilityCount = Object.keys(partialResult.vulnerabilities).length;
          this.log(`Partial audit found ${this.vulnerabilityCount} vulnerabilities`);
        }
      } catch (parseError) {
        this.log('Could not parse audit results');
      }
    }
  }

  attemptSecurityFix() {
    this.log('Attempting to fix security vulnerabilities...');
    
    try {
      // Try npm audit fix
      this.log('Running npm audit fix...');
      execSync('npm audit fix', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('Security fix completed successfully');
      
      // Run audit again to verify
      setTimeout(() => this.runSecurityAudit(), 10000);
      
    } catch (error) {
      this.log(`Security fix failed: ${error.message}`);
      
      // Try force fix for non-breaking changes
      try {
        this.log('Attempting npm audit fix --force...');
        execSync('npm audit fix --force', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        this.log('Force security fix completed');
      } catch (forceError) {
        this.log(`Force security fix also failed: ${forceError.message}`);
      }
    }
  }

  checkOutdatedPackages() {
    this.log('Checking for outdated packages...');
    
    try {
      const outdatedResult = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedResult);
      const outdatedCount = Object.keys(outdatedData).length;
      
      if (outdatedCount === 0) {
        this.log('All packages are up to date');
      } else {
        this.log(`Found ${outdatedCount} outdated packages`);
        
        // Log critical outdated packages
        Object.entries(outdatedData).forEach(([pkg, info]) => {
          if (info.current !== info.latest) {
            this.log(`OUTDATED: ${pkg} (${info.current} -> ${info.latest})`);
          }
        });
      }
      
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      if (error.stdout) {
        try {
          const outdatedData = JSON.parse(error.stdout);
          const outdatedCount = Object.keys(outdatedData).length;
          this.log(`Found ${outdatedCount} outdated packages`);
        } catch (parseError) {
          this.log('Could not parse outdated packages info');
        }
      }
    }
  }

  start() {
    this.log('Security auditor started...');
    
    // Run initial security audit
    this.runSecurityAudit();
    
    // Check for outdated packages
    setTimeout(() => this.checkOutdatedPackages(), 5000);
    
    // Schedule daily security audits
    setInterval(() => {
      this.runSecurityAudit();
      setTimeout(() => this.checkOutdatedPackages(), 5000);
    }, 24 * 60 * 60 * 1000); // 24 hours
    
    // Keep process alive
    process.on('SIGINT', () => {
      this.log('Shutting down security auditor...');
      process.exit(0);
    });
  }
}

// Start the auditor
const auditor = new SecurityAuditor();
auditor.start();