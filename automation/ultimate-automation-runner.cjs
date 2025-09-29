#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UltimateAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.startTime = Date.now();
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.logFile = path.join(this.logsDir, 'ultimate-automation-runner.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async executeScript(scriptPath, description) {
    try {
      this.log(`🔄 ${description}...`);
      const output = execSync(`node ${scriptPath}`, { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runPreFlightChecks() {
    this.log('🔍 Running pre-flight checks...');
    
    const checks = {
      nodeVersion: this.checkNodeVersion(),
      npmVersion: this.checkNpmVersion(),
      dependencies: this.checkDependencies(),
      buildDirectory: this.checkBuildDirectory(),
      gitStatus: this.checkGitStatus()
    };

    const passedChecks = Object.values(checks).filter(check => check.success).length;
    const totalChecks = Object.keys(checks).length;

    this.log(`📊 Pre-flight checks: ${passedChecks}/${totalChecks} passed`);
    
    return {
      success: passedChecks === totalChecks,
      checks,
      summary: { passed: passedChecks, total: totalChecks }
    };
  }

  checkNodeVersion() {
    try {
      const version = process.version;
      const majorVersion = parseInt(version.slice(1).split('.')[0]);
      return {
        success: majorVersion >= 16,
        version,
        requirement: 'Node.js 16+ required'
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  checkNpmVersion() {
    try {
      const version = execSync('npm --version', { encoding: 'utf8' }).trim();
      return {
        success: true,
        version
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const nodeModulesExists = fs.existsSync('node_modules');
      return {
        success: nodeModulesExists,
        hasPackageJson: true,
        hasNodeModules: nodeModulesExists
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  checkBuildDirectory() {
    const buildDirs = ['.next', 'dist', 'build', 'out'];
    const existingDirs = buildDirs.filter(dir => fs.existsSync(dir));
    return {
      success: existingDirs.length > 0,
      existingDirs,
      message: existingDirs.length > 0 ? 'Build directory found' : 'No build directory found'
    };
  }

  checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;
      return {
        success: true,
        hasChanges,
        changesCount: status.split('\n').filter(line => line.trim()).length
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runCoreAutomation() {
    this.log('🚀 Running core automation suite...');
    
    const scripts = [
      {
        path: 'automation/enhanced-master-orchestrator.cjs',
        description: 'Enhanced Master Orchestrator'
      },
      {
        path: 'automation/intelligent-test-automation.cjs',
        description: 'Intelligent Test Automation'
      },
      {
        path: 'automation/performance-monitor-optimizer.cjs',
        description: 'Performance Monitor Optimizer'
      }
    ];

    const results = [];
    
    for (const script of scripts) {
      const result = await this.executeScript(script.path, script.description);
      results.push({
        script: script.description,
        ...result
      });
    }

    const successfulScripts = results.filter(r => r.success).length;
    this.log(`📊 Core automation: ${successfulScripts}/${scripts.length} scripts completed successfully`);
    
    return {
      success: successfulScripts === scripts.length,
      results,
      summary: { successful: successfulScripts, total: scripts.length }
    };
  }

  async runQualityChecks() {
    this.log('🔍 Running quality checks...');
    
    const checks = [
      {
        command: 'npm run lint:fix',
        description: 'Linting and fixing code issues'
      },
      {
        command: 'npm run type-check',
        description: 'TypeScript type checking'
      },
      {
        command: 'npm run build',
        description: 'Building application'
      },
      {
        command: 'npm run test:smoke',
        description: 'Running smoke tests'
      }
    ];

    const results = [];
    
    for (const check of checks) {
      try {
        this.log(`🔄 ${check.description}...`);
        const output = execSync(check.command, { 
          encoding: 'utf8', 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.log(`✅ ${check.description} completed successfully`);
        results.push({
          check: check.description,
          success: true,
          output
        });
      } catch (error) {
        this.log(`❌ ${check.description} failed: ${error.message}`, 'ERROR');
        results.push({
          check: check.description,
          success: false,
          error: error.message
        });
      }
    }

    const successfulChecks = results.filter(r => r.success).length;
    this.log(`📊 Quality checks: ${successfulChecks}/${checks.length} checks passed`);
    
    return {
      success: successfulChecks === checks.length,
      results,
      summary: { successful: successfulChecks, total: checks.length }
    };
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    
    try {
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Parse audit output for vulnerabilities
      const lines = auditOutput.split('\n');
      const vulnerabilities = lines.filter(line => 
        line.includes('vulnerabilities') || line.includes('found')
      );
      
      this.log(`✅ Security audit completed`);
      
      return {
        success: true,
        output: auditOutput,
        vulnerabilities: vulnerabilities
      };
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async generateFinalReport(results) {
    this.log('📊 Generating final report...');
    
    const endTime = Date.now();
    const duration = endTime - this.startTime;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      results,
      summary: {
        totalPhases: Object.keys(results).length,
        successfulPhases: Object.values(results).filter(r => r.success).length,
        overallSuccess: Object.values(results).every(r => r.success)
      }
    };

    const reportPath = path.join(this.reportsDir, 'ultimate-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Final report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Ultimate Automation Runner...');
    
    try {
      // Run all phases
      const preFlightChecks = await this.runPreFlightChecks();
      const coreAutomation = await this.runCoreAutomation();
      const qualityChecks = await this.runQualityChecks();
      const securityAudit = await this.runSecurityAudit();

      const results = {
        preFlightChecks,
        coreAutomation,
        qualityChecks,
        securityAudit
      };

      const finalReport = await this.generateFinalReport(results);
      
      this.log('🎉 Ultimate Automation Runner completed successfully!');
      this.log(`📊 Summary: ${finalReport.summary.successfulPhases}/${finalReport.summary.totalPhases} phases completed successfully`);
      
      if (finalReport.summary.overallSuccess) {
        this.log('✅ All automation phases completed successfully!');
      } else {
        this.log('⚠️ Some automation phases had issues. Check the logs for details.', 'WARN');
      }
      
      return finalReport;
    } catch (error) {
      this.log(`❌ Ultimate Automation Runner failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const runner = new UltimateAutomationRunner();
  runner.run().catch(console.error);
}

module.exports = UltimateAutomationRunner;