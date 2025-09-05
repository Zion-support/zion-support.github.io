#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      syntaxFixes: { success: false, duration: 0, errors: [] },
      linting: { success: false, duration: 0, errors: [] },
      testing: { success: false, duration: 0, errors: [] },
      securityAudit: { success: false, duration: 0, errors: [] },
      performanceOptimization: { success: false, duration: 0, errors: [] },
      build: { success: false, duration: 0, errors: [] },
      deployment: { success: false, duration: 0, errors: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async fixSyntaxErrors() {
    const startTime = Date.now();
    this.log('\n🔧 PHASE 1: FIXING SYNTAX ERRORS');
    
    try {
      // Fix common syntax issues in automation files
      const automationFiles = [
        'automation/master-automation-orchestrator.cjs',
        'scripts/run-all-automations.cjs'
      ];

      for (const file of automationFiles) {
        if (fs.existsSync(file)) {
          let content = fs.readFileSync(file, 'utf8');
          
          // Remove duplicate object definitions
          content = content.replace(/(\s*\}\s*;\s*)(\s*"[^"]*":\s*\{[^}]*\},?\s*)+/g, '};');
          content = content.replace(/(\s*\}\s*;\s*)(\s*[a-zA-Z_][a-zA-Z0-9_]*:\s*\{[^}]*\},?\s*)+/g, '};');
          
          // Remove duplicate catch blocks
          content = content.replace(/(\s*\}\s*catch\s*\([^)]*\)\s*\{[^}]*\}\s*)(\s*catch\s*\([^)]*\)\s*\{[^}]*\})+/g, '$1');
          
          fs.writeFileSync(file, content);
          this.log(`Fixed syntax errors in ${file}`);
        }
      }

      this.results.syntaxFixes = {
        success: true,
        duration: Date.now() - startTime,
        errors: []
      };
    } catch (error) {
      this.results.syntaxFixes = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message]
      };
    }
  }

  async runLinting() {
    const startTime = Date.now();
    this.log('\n🔍 PHASE 2: RUNNING LINTING');
    
    const result = await this.runCommand('npm run lint:fix', 'ESLint Fix');
    this.results.linting = {
      success: result.success,
      duration: Date.now() - startTime,
      errors: result.success ? [] : [result.error]
    };
  }

  async runTests() {
    const startTime = Date.now();
    this.log('\n🧪 PHASE 3: RUNNING TESTS');
    
    const result = await this.runCommand('npm run test:smoke', 'Smoke Tests');
    this.results.testing = {
      success: result.success,
      duration: Date.now() - startTime,
      errors: result.success ? [] : [result.error]
    };
  }

  async runSecurityAudit() {
    const startTime = Date.now();
    this.log('\n🔒 PHASE 4: SECURITY AUDIT');
    
    try {
      // Run npm audit
      const auditResult = await this.runCommand('npm audit --audit-level moderate', 'Security Audit');
      
      // Run security scan if script exists
      let securityScanResult = { success: true };
      if (fs.existsSync('scripts/security-audit-enhanced.cjs')) {
        securityScanResult = await this.runCommand('node scripts/security-audit-enhanced.cjs', 'Security Scan');
      }
      
      this.results.securityAudit = {
        success: auditResult.success && securityScanResult.success,
        duration: Date.now() - startTime,
        errors: [...(auditResult.success ? [] : [auditResult.error]), ...(securityScanResult.success ? [] : [securityScanResult.error])]
      };
    } catch (error) {
      this.results.securityAudit = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message]
      };
    }
  }

  async runPerformanceOptimization() {
    const startTime = Date.now();
    this.log('\n⚡ PHASE 5: PERFORMANCE OPTIMIZATION');
    
    try {
      // Run performance optimization scripts if they exist
      const perfScripts = [
        'scripts/performance-optimizer.cjs',
        'scripts/ux-optimizer.cjs',
        'scripts/seo-optimizer.cjs'
      ];

      let allSuccess = true;
      const errors = [];

      for (const script of perfScripts) {
        if (fs.existsSync(script)) {
          const result = await this.runCommand(`node ${script}`, `Performance Optimization: ${script}`);
          if (!result.success) {
            allSuccess = false;
            errors.push(result.error);
          }
        }
      }

      this.results.performanceOptimization = {
        success: allSuccess,
        duration: Date.now() - startTime,
        errors
      };
    } catch (error) {
      this.results.performanceOptimization = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message]
      };
    }
  }

  async runBuild() {
    const startTime = Date.now();
    this.log('\n🏗️ PHASE 6: BUILDING APPLICATION');
    
    const result = await this.runCommand('npm run build', 'Application Build');
    this.results.build = {
      success: result.success,
      duration: Date.now() - startTime,
      errors: result.success ? [] : [result.error]
    };
  }

  async commitAndPush() {
    const startTime = Date.now();
    this.log('\n📤 PHASE 7: COMMITTING AND PUSHING CHANGES');
    
    try {
      // Add all changes
      await this.runCommand('git add .', 'Git Add');
      
      // Commit changes
      const commitMessage = `Automated improvements: ${new Date().toISOString()}`;
      await this.runCommand(`git commit -m "${commitMessage}"`, 'Git Commit');
      
      // Push changes
      await this.runCommand('git push origin HEAD', 'Git Push');
      
      this.results.deployment = {
        success: true,
        duration: Date.now() - startTime,
        errors: []
      };
    } catch (error) {
      this.results.deployment = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message]
      };
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    const successfulPhases = Object.values(this.results).filter(r => r.success).length;
    const totalPhases = Object.keys(this.results).length;

    this.log('\n📊 AUTOMATION REPORT');
    this.log('='.repeat(50));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Successful Phases: ${successfulPhases}/${totalPhases}`);
    this.log('');

    Object.entries(this.results).forEach(([phase, result]) => {
      const status = result.success ? '✅' : '❌';
      const duration = `${result.duration}ms`;
      this.log(`${status} ${phase}: ${duration}`);
      if (!result.success && result.errors.length > 0) {
        result.errors.forEach(error => this.log(`   Error: ${error}`));
      }
    });

    // Save report to file
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulPhases,
      totalPhases,
      results: this.results
    };

    fs.writeFileSync('automation-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Report saved to automation-report.json');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Automation Runner');
    this.log('='.repeat(50));

    try {
      await this.fixSyntaxErrors();
      await this.runLinting();
      await this.runTests();
      await this.runSecurityAudit();
      await this.runPerformanceOptimization();
      await this.runBuild();
      await this.commitAndPush();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the automation
if (require.main === module) {
  const runner = new ComprehensiveAutomationRunner();
  runner.run().catch(console.error);
}

module.exports = ComprehensiveAutomationRunner;