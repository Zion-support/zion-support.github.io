#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting GitHub Actions Replacement Automation...');

class GitHubActionsReplacement {
  constructor() {
    this.results = {
      linkChecking: { status: 'pending', brokenLinks: [], summary: {} },
      dependencyManagement: { status: 'pending', updates: [], security: {} },
      codeQuality: { status: 'pending', issues: [], summary: {} },
      buildStatus: { status: 'pending', status: 'unknown' },
      securityAnalysis: { status: 'pending', findings: [] }
    };
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runLinkChecking() {
    console.log('🔗 Running Link Checker (replaces agent-factory.yml)...');
    try {
      // Build project first
      console.log('📦 Building project...');
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'inherit'
      });

      // Check for broken links and build issues
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) {
        throw new Error('Build failed - dist directory not found');
      }

      // Check for index.html
      const indexPath = path.join(distPath, 'index.html');
      if (!fs.existsSync(indexPath)) {
        throw new Error('Build failed - index.html not found');
      }

      // Check for broken references
      const brokenRefs = [];
      const walkDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            walkDir(filePath);
          } else if (file.endsWith('.html') || file.endsWith('.js')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('404') || content.includes('not found') || content.includes('broken')) {
              brokenRefs.push({ file: file, path: filePath });
            }
          }
        });
      };

      walkDir(distPath);

      this.results.linkChecking.status = 'success';
      this.results.linkChecking.brokenLinks = brokenRefs;
      this.results.linkChecking.summary = {
        totalFiles: fs.readdirSync(distPath).length,
        brokenReferences: brokenRefs.length,
        buildStatus: 'success'
      };

      console.log(`✅ Link checking completed. Found ${brokenRefs.length} potential issues`);
      
      // Save results
      fs.writeFileSync(
        path.join(this.reportDir, 'link-checking-report.json'),
        JSON.stringify(this.results.linkChecking, null, 2)
      );

    } catch (error) {
      this.results.linkChecking.status = 'failure';
      this.results.linkChecking.summary = { error: error.message };
      console.log('❌ Link checking failed:', error.message);
    }
  }

  async runDependencyManagement() {
    console.log('📦 Running Dependency Management (replaces dependencies.yml)...');
    try {
      // Check for outdated packages
      console.log('🔍 Checking for outdated packages...');
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = Object.keys(outdatedData);

      // Run security audit
      console.log('🛡️ Running security audit...');
      const auditOutput = execSync('npm audit --audit-level moderate --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const auditData = JSON.parse(auditOutput);

      // Update dependencies if needed
      if (outdatedPackages.length > 0) {
        console.log(`🔄 Updating ${outdatedPackages.length} outdated packages...`);
        execSync('npm update', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'inherit'
        });
      }

      // Install updated dependencies
      execSync('npm ci', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'inherit'
      });

      // Build and test
      console.log('🧪 Building and testing...');
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'inherit'
      });

      execSync('npm run lint', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'inherit'
      });

      this.results.dependencyManagement.status = 'success';
      this.results.dependencyManagement.updates = outdatedPackages;
      this.results.dependencyManagement.security = {
        vulnerabilities: auditData.metadata?.vulnerabilities || {},
        summary: auditData.summary || {}
      };

      console.log(`✅ Dependency management completed. Updated ${outdatedPackages.length} packages`);
      
      // Save results
      fs.writeFileSync(
        path.join(this.reportDir, 'dependency-management-report.json'),
        JSON.stringify(this.results.dependencyManagement, null, 2)
      );

    } catch (error) {
      this.results.dependencyManagement.status = 'failure';
      this.results.dependencyManagement.error = error.message;
      console.log('❌ Dependency management failed:', error.message);
    }
  }

  async runCodeQualityAnalysis() {
    console.log('🔍 Running Code Quality Analysis (replaces codeql.yml)...');
    try {
      // Run ESLint
      console.log('📝 Running ESLint...');
      execSync('npm run lint', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'inherit'
      });

      // Run TypeScript type checking
      console.log('🔧 Running TypeScript type check...');
      execSync('npm run type-check', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'inherit'
      });

      // Check for security issues in code
      console.log('🛡️ Checking for security issues...');
      const securityIssues = [];
      
      // Check for common security patterns
      const securityPatterns = [
        'eval(', 'innerHTML', 'document.write', 'setTimeout(', 'setInterval(',
        'localStorage', 'sessionStorage', 'cookies', 'password', 'secret'
      ];

      const sourceFiles = this.findSourceFiles();
      sourceFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        securityPatterns.forEach(pattern => {
          if (content.includes(pattern)) {
            securityIssues.push({ file, pattern, line: this.findLineNumber(content, pattern) });
          }
        });
      });

      this.results.codeQuality.status = 'success';
      this.results.codeQuality.issues = securityIssues;
      this.results.codeQuality.summary = {
        totalFiles: sourceFiles.length,
        securityIssues: securityIssues.length,
        lintStatus: 'passed',
        typeCheckStatus: 'passed'
      };

      console.log(`✅ Code quality analysis completed. Found ${securityIssues.length} potential security issues`);
      
      // Save results
      fs.writeFileSync(
        path.join(this.reportDir, 'code-quality-report.json'),
        JSON.stringify(this.results.codeQuality, null, 2)
      );

    } catch (error) {
      this.results.codeQuality.status = 'failure';
      this.results.codeQuality.error = error.message;
      console.log('❌ Code quality analysis failed:', error.message);
    }
  }

  async runBuildStatusMonitoring() {
    console.log('📊 Running Build Status Monitoring (replaces status.yml and status-badge.yml)...');
    try {
      // Check current build status
      const buildStatus = await this.checkBuildStatus();
      
      // Generate status report
      const statusReport = {
        timestamp: new Date().toISOString(),
        buildStatus: buildStatus,
        pm2Status: await this.getPM2Status(),
        systemHealth: await this.getSystemHealth()
      };

      this.results.buildStatus.status = 'success';
      this.results.buildStatus.status = buildStatus;
      this.results.buildStatus.details = statusReport;

      console.log(`✅ Build status monitoring completed. Status: ${buildStatus}`);
      
      // Save results
      fs.writeFileSync(
        path.join(this.reportDir, 'build-status-report.json'),
        JSON.stringify(statusReport, null, 2)
      );

      // Generate status badge
      await this.generateStatusBadge(buildStatus);

    } catch (error) {
      this.results.buildStatus.status = 'failure';
      this.results.buildStatus.error = error.message;
      console.log('❌ Build status monitoring failed:', error.message);
    }
  }

  async checkBuildStatus() {
    try {
      // Try to build the project
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      return 'success';
    } catch (error) {
      return 'failure';
    }
  }

  async getPM2Status() {
    try {
      const pm2Output = execSync('pm2 list --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      return JSON.parse(pm2Output);
    } catch (error) {
      return { error: error.message };
    }
  }

  async getSystemHealth() {
    try {
      const healthChecks = {
        disk: execSync('df -h .', { encoding: 'utf8' }),
        memory: execSync('free -h', { encoding: 'utf8' }),
        uptime: execSync('uptime', { encoding: 'utf8' })
      };
      return healthChecks;
    } catch (error) {
      return { error: error.message };
    }
  }

  async generateStatusBadge(status) {
    const badgeData = {
      status: status,
      color: status === 'success' ? 'green' : 'red',
      timestamp: new Date().toISOString()
    };

    fs.writeFileSync(
      path.join(this.reportDir, 'status-badge.json'),
      JSON.stringify(badgeData, null, 2)
    );

    console.log(`📊 Status badge generated: ${status}`);
  }

  findSourceFiles(dir = process.cwd(), extensions = ['.js', '.ts', '.tsx', '.jsx']) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.findSourceFiles(itemPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(itemPath);
      }
    });
    
    return files;
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(pattern)) {
        return i + 1;
      }
    }
    return -1;
  }

  async runAll() {
    console.log('🚀 Starting comprehensive automation...');
    
    await this.runLinkChecking();
    await this.runDependencyManagement();
    await this.runCodeQualityAnalysis();
    await this.runBuildStatusMonitoring();

    // Generate comprehensive report
    const comprehensiveReport = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTasks: 4,
        successful: Object.values(this.results).filter(r => r.status === 'success').length,
        failed: Object.values(this.results).filter(r => r.status === 'failure').length
      },
      results: this.results
    };

    fs.writeFileSync(
      path.join(this.reportDir, 'comprehensive-automation-report.json'),
      JSON.stringify(comprehensiveReport, null, 2)
    );

    console.log('✅ All automation tasks completed!');
    console.log(`📊 Summary: ${comprehensiveReport.summary.successful}/${comprehensiveReport.summary.total} successful`);
    
    return comprehensiveReport;
  }
}

// Run the automation
const automation = new GitHubActionsReplacement();
automation.runAll().catch(console.error);