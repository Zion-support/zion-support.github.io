#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Audit Fixer
 * Fixes security vulnerabilities and creates audit configuration
 */
class SecurityAuditFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      vulnerabilitiesFixed: [],
      packagesUpdated: [],
      configurationsCreated: [],
      errors: []
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'PROGRESS'
              ? '🔄'
              : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 60000,
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  createAuditConfig() {
    const auditConfigPath = path.join(this.projectRoot, 'audit-ci.json');
    
    const auditConfig = {
      "moderate": true,
      "high": true,
      "critical": true,
      "allowlist": [],
      "skip-dev": false,
      "report-type": "full",
      "output-format": "text"
    };

    try {
      fs.writeFileSync(auditConfigPath, JSON.stringify(auditConfig, null, 2));
      this.log('Created audit-ci.json configuration', 'SUCCESS');
      this.results.configurationsCreated.push('audit-ci.json');
    } catch (error) {
      this.log(`Failed to create audit config: ${error.message}`, 'ERROR');
      this.results.errors.push(`Failed to create audit config: ${error.message}`);
    }
  }

  async fixSecurityVulnerabilities() {
    this.log('Fixing security vulnerabilities...', 'PROGRESS');

    try {
      // Run npm audit fix
      const auditFixResult = await this.runCommand(
        'npm audit fix --force',
        'Fix Security Vulnerabilities'
      );

      if (auditFixResult.success) {
        this.results.vulnerabilitiesFixed.push('npm audit fix completed');
      }

      // Update packages
      const updateResult = await this.runCommand(
        'npm update',
        'Update Packages'
      );

      if (updateResult.success) {
        this.results.packagesUpdated.push('npm update completed');
      }

      // Install security tools
      const securityTools = [
        'audit-ci',
        'npm-audit-resolver',
        'snyk'
      ];

      for (const tool of securityTools) {
        const installResult = await this.runCommand(
          `npm install --save-dev ${tool}`,
          `Install ${tool}`
        );

        if (installResult.success) {
          this.results.packagesUpdated.push(tool);
        }
      }

    } catch (error) {
      this.log(`Failed to fix security vulnerabilities: ${error.message}`, 'ERROR');
      this.results.errors.push(`Failed to fix security vulnerabilities: ${error.message}`);
    }
  }

  createSecurityScripts() {
    const scriptsDir = path.join(this.projectRoot, 'scripts', 'security');
    
    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir, { recursive: true });
    }

    // Create security audit script
    const securityAuditScript = `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class SecurityAuditor {
  constructor() {
    this.results = {
      vulnerabilities: [],
      recommendations: [],
      fixed: 0
    };
  }

  async runAudit() {
    console.log('🔒 Running Security Audit...');
    
    try {
      // Run npm audit
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        this.results.vulnerabilities = Object.keys(auditData.vulnerabilities);
        console.log(\`Found \${this.results.vulnerabilities.length} vulnerabilities\`);
      }
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save report
      fs.writeFileSync('security-audit-report.json', JSON.stringify(this.results, null, 2));
      console.log('✅ Security audit completed');
      
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
    }
  }

  generateRecommendations() {
    this.results.recommendations = [
      'Update all packages to latest versions',
      'Remove unused dependencies',
      'Use npm audit fix to automatically fix vulnerabilities',
      'Consider using npm audit --audit-level moderate for stricter checks',
      'Regularly run security audits in CI/CD pipeline'
    ];
  }
}

const auditor = new SecurityAuditor();
auditor.runAudit().catch(console.error);`;

    try {
      fs.writeFileSync(path.join(scriptsDir, 'security-audit.js'), securityAuditScript);
      this.log('Created security audit script', 'SUCCESS');
      this.results.configurationsCreated.push('security-audit.js');
    } catch (error) {
      this.log(`Failed to create security script: ${error.message}`, 'ERROR');
      this.results.errors.push(`Failed to create security script: ${error.message}`);
    }
  }

  async run() {
    this.log('🔒 Starting Security Audit Fixer');
    this.log('='.repeat(50));

    try {
      // Create audit configuration
      this.createAuditConfig();

      // Create security scripts
      this.createSecurityScripts();

      // Fix security vulnerabilities
      await this.fixSecurityVulnerabilities();

      this.generateReport();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 SECURITY AUDIT FIXER REPORT');
    this.log('='.repeat(50));
    this.log(`Total Duration: ${Math.round(totalDuration / 1000)}s`);
    this.log(`Vulnerabilities Fixed: ${this.results.vulnerabilitiesFixed.length}`);
    this.log(`Packages Updated: ${this.results.packagesUpdated.length}`);
    this.log(`Configurations Created: ${this.results.configurationsCreated.length}`);
    this.log(`Errors: ${this.results.errors.length}`);

    if (this.results.vulnerabilitiesFixed.length > 0) {
      this.log('\n🔒 Fixed Vulnerabilities:');
      this.results.vulnerabilitiesFixed.forEach(vuln => {
        this.log(`  - ${vuln}`);
      });
    }

    if (this.results.packagesUpdated.length > 0) {
      this.log('\n📦 Updated Packages:');
      this.results.packagesUpdated.forEach(pkg => {
        this.log(`  - ${pkg}`);
      });
    }

    if (this.results.configurationsCreated.length > 0) {
      this.log('\n⚙️ Created Configurations:');
      this.results.configurationsCreated.forEach(config => {
        this.log(`  - ${config}`);
      });
    }

    if (this.results.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.results.errors.forEach(error => {
        this.log(`  - ${error}`);
      });
    }

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
    };

    fs.writeFileSync(
      'security-audit-fixer-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to security-audit-fixer-report.json');
  }
}

// Run the security audit fixer
if (require.main === module) {
  const fixer = new SecurityAuditFixer();
  fixer.run().catch(console.error);
}

module.exports = SecurityAuditFixer;