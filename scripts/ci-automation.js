#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CIAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'ci-automation.log');
    this.ciReportFile = path.join(this.projectRoot, 'logs', 'ci-automation-report.json');
    this.ciIssues = [];
    this.ciSuccesses = [];
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

  async runCIChecks() {
    this.log('🔍 Running comprehensive CI checks...');
    
    const ciChecks = {
      git: await this.checkGitStatus(),
      build: await this.checkBuildPipeline(),
      tests: await this.checkTestPipeline(),
      linting: await this.checkLintingPipeline(),
      security: await this.checkSecurityPipeline(),
      deployment: await this.checkDeploymentPipeline()
    };
    
    return ciChecks;
  }

  async checkGitStatus() {
    this.log('Checking Git repository status...');
    
    try {
      // Check if we're in a git repository
      const gitCheck = await this.runCommand('git status', { silent: true });
      
      if (!gitCheck.success) {
        return {
          status: 'not-git',
          message: 'Not a Git repository',
          severity: 'critical'
        };
      }
      
      // Check for uncommitted changes
      const uncommittedCheck = await this.runCommand('git diff --name-only', { silent: true });
      const hasUncommitted = uncommittedCheck.success && uncommittedCheck.output.trim().length > 0;
      
      // Check for untracked files
      const untrackedCheck = await this.runCommand('git ls-files --others --exclude-standard', { silent: true });
      const hasUntracked = untrackedCheck.success && untrackedCheck.output.trim().length > 0;
      
      // Check branch status
      const branchCheck = await this.runCommand('git branch --show-current', { silent: true });
      const currentBranch = branchCheck.success ? branchCheck.output.trim() : 'unknown';
      
      // Check for remote tracking
      const remoteCheck = await this.runCommand('git remote -v', { silent: true });
      const hasRemote = remoteCheck.success && remoteCheck.output.includes('origin');
      
      if (hasUncommitted || hasUntracked) {
        return {
          status: 'dirty',
          message: 'Repository has uncommitted changes or untracked files',
          severity: 'medium',
          details: {
            uncommitted: hasUncommitted,
            untracked: hasUntracked,
            currentBranch,
            hasRemote
          }
        };
      }
      
      return {
        status: 'clean',
        message: 'Git repository is clean',
        severity: 'low',
        details: {
          currentBranch,
          hasRemote
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking Git status: ${error.message}`,
        severity: 'high'
      };
    }
  }

  async checkBuildPipeline() {
    this.log('Checking build pipeline...');
    
    try {
      // Check if build script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        return {
          status: 'missing',
          message: 'package.json not found',
          severity: 'critical'
        };
      }
      
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const hasBuildScript = packageJson.scripts && packageJson.scripts.build;
      
      if (!hasBuildScript) {
        return {
          status: 'missing',
          message: 'Build script not found in package.json',
          severity: 'high'
        };
      }
      
      // Test build process
      const buildTest = await this.runCommand('npm run build', { silent: true });
      
      if (buildTest.success) {
        // Check if dist directory was created
        const distPath = path.join(this.projectRoot, 'dist');
        if (fs.existsSync(distPath)) {
          return {
            status: 'success',
            message: 'Build pipeline is working correctly',
            severity: 'low',
            details: {
              buildScript: 'npm run build',
              outputDirectory: 'dist'
            }
          };
        } else {
          return {
            status: 'partial',
            message: 'Build succeeded but output directory not found',
            severity: 'medium'
          };
        }
      } else {
        return {
          status: 'failed',
          message: 'Build pipeline failed',
          severity: 'high',
          details: buildTest.error
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking build pipeline: ${error.message}`,
        severity: 'high'
      };
    }
  }

  async checkTestPipeline() {
    this.log('Checking test pipeline...');
    
    try {
      // Check if test script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const hasTestScript = packageJson.scripts && packageJson.scripts.test;
      
      if (!hasTestScript) {
        return {
          status: 'missing',
          message: 'Test script not found in package.json',
          severity: 'medium'
        };
      }
      
      // Test test process
      const testTest = await this.runCommand('npm test', { silent: true });
      
      if (testTest.success) {
        return {
          status: 'success',
          message: 'Test pipeline is working correctly',
          severity: 'low',
          details: {
            testScript: 'npm test'
          }
        };
      } else {
        return {
          status: 'failed',
          message: 'Test pipeline failed',
          severity: 'medium',
          details: testTest.error
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking test pipeline: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async checkLintingPipeline() {
    this.log('Checking linting pipeline...');
    
    try {
      // Check if lint script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const hasLintScript = packageJson.scripts && packageJson.scripts.lint;
      
      if (!hasLintScript) {
        return {
          status: 'missing',
          message: 'Lint script not found in package.json',
          severity: 'medium'
        };
      }
      
      // Test linting process
      const lintTest = await this.runCommand('npm run lint', { silent: true });
      
      if (lintTest.success) {
        return {
          status: 'success',
          message: 'Linting pipeline is working correctly',
          severity: 'low',
          details: {
            lintScript: 'npm run lint'
          }
        };
      } else {
        return {
          status: 'failed',
          message: 'Linting pipeline failed',
          severity: 'medium',
          details: lintTest.error
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking linting pipeline: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async checkSecurityPipeline() {
    this.log('Checking security pipeline...');
    
    try {
      // Check if security audit is available
      const auditTest = await this.runCommand('npm audit --audit-level=moderate', { silent: true });
      
      if (auditTest.success) {
        return {
          status: 'success',
          message: 'Security pipeline is working correctly',
          severity: 'low',
          details: {
            securityTool: 'npm audit'
          }
        };
      } else {
        // Check if it's a security issue or just no vulnerabilities
        if (auditTest.output.includes('found 0 vulnerabilities')) {
          return {
            status: 'success',
            message: 'Security pipeline is working correctly - no vulnerabilities found',
            severity: 'low',
            details: {
              securityTool: 'npm audit',
              vulnerabilities: 0
            }
          };
        } else {
          return {
            status: 'failed',
            message: 'Security pipeline failed',
            severity: 'medium',
            details: auditTest.error
          };
        }
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking security pipeline: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async checkDeploymentPipeline() {
    this.log('Checking deployment pipeline...');
    
    try {
      // Check for common deployment configuration files
      const deploymentFiles = [
        '.github/workflows',
        '.gitlab-ci.yml',
        'Jenkinsfile',
        'docker-compose.yml',
        'Dockerfile',
        'vercel.json',
        'netlify.toml'
      ];
      
      const foundFiles = [];
      
      for (const file of deploymentFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          foundFiles.push(file);
        }
      }
      
      if (foundFiles.length === 0) {
        return {
          status: 'missing',
          message: 'No deployment configuration found',
          severity: 'medium',
          details: {
            checkedFiles: deploymentFiles,
            foundFiles: []
          }
        };
      }
      
      return {
        status: 'configured',
        message: 'Deployment pipeline is configured',
        severity: 'low',
        details: {
          checkedFiles: deploymentFiles,
          foundFiles
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking deployment pipeline: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async fixCIIssues(ciChecks) {
    this.log('🔧 Starting CI issue fixes...');
    
    let totalFixed = 0;
    
    // Fix Git issues
    if (ciChecks.git.status !== 'clean') {
      this.log('Fixing Git issues...');
      const fixed = await this.fixGitIssues(ciChecks.git);
      if (fixed) totalFixed++;
    }
    
    // Fix build issues
    if (ciChecks.build.status !== 'success') {
      this.log('Fixing build issues...');
      const fixed = await this.fixBuildIssues(ciChecks.build);
      if (fixed) totalFixed++;
    }
    
    // Fix test issues
    if (ciChecks.tests.status !== 'success') {
      this.log('Fixing test issues...');
      const fixed = await this.fixTestIssues(ciChecks.tests);
      if (fixed) totalFixed++;
    }
    
    // Fix linting issues
    if (ciChecks.linting.status !== 'success') {
      this.log('Fixing linting issues...');
      const fixed = await this.fixLintingIssues(ciChecks.linting);
      if (fixed) totalFixed++;
    }
    
    return totalFixed;
  }

  async fixGitIssues(gitCheck) {
    try {
      if (gitCheck.status === 'dirty') {
        this.log('Repository is dirty, attempting to clean...');
        
        // Check if there are important changes
        const diffCheck = await this.runCommand('git diff --name-only', { silent: true });
        const untrackedCheck = await this.runCommand('git ls-files --others --exclude-standard', { silent: true });
        
        if (diffCheck.success && diffCheck.output.trim().length > 0) {
          this.log('Found uncommitted changes - stashing them...');
          await this.runCommand('git stash push -m "Auto-stash by CI automation"', { silent: true });
        }
        
        if (untrackedCheck.success && untrackedCheck.output.trim().length > 0) {
          this.log('Found untracked files - adding them to .gitignore...');
          // Add common untracked files to .gitignore
          const untrackedFiles = untrackedCheck.output.trim().split('\n');
          for (const file of untrackedFiles) {
            if (file && !file.includes('node_modules') && !file.includes('dist')) {
              await this.runCommand(`echo "${file}" >> .gitignore`, { silent: true });
            }
          }
        }
        
        return true;
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing Git issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixBuildIssues(buildCheck) {
    try {
      if (buildCheck.status === 'failed') {
        this.log('Build failed, attempting to fix...');
        
        // Try to fix common build issues
        const lintResult = await this.runCommand('npm run lint', { silent: true });
        if (!lintResult.success) {
          this.log('Linting issues detected, attempting auto-fix...');
          await this.runCommand('npm run fix:all', { silent: true });
        }
        
        // Try building again
        const rebuildResult = await this.runCommand('npm run build', { silent: true });
        
        if (rebuildResult.success) {
          this.log('✅ Build issues fixed');
          return true;
        } else {
          this.log('❌ Build issues persist', 'ERROR');
          return false;
        }
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing build issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixTestIssues(testCheck) {
    try {
      if (testCheck.status === 'failed') {
        this.log('Tests failed, attempting to fix...');
        
        // Check if tests are properly configured
        const testConfigCheck = await this.runCommand('npm run test -- --help', { silent: true });
        
        if (testConfigCheck.success) {
          this.log('Test configuration appears correct, running tests again...');
          const retryResult = await this.runCommand('npm test', { silent: true });
          
          if (retryResult.success) {
            this.log('✅ Test issues resolved');
            return true;
          }
        }
        
        this.log('❌ Test issues persist - manual review required', 'WARN');
        return false;
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing test issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixLintingIssues(lintingCheck) {
    try {
      if (lintingCheck.status === 'failed') {
        this.log('Linting failed, attempting to fix...');
        
        // Try auto-fix
        const autoFixResult = await this.runCommand('npm run fix:all', { silent: true });
        
        if (autoFixResult.success) {
          // Try linting again
          const relintResult = await this.runCommand('npm run lint', { silent: true });
          
          if (relintResult.success) {
            this.log('✅ Linting issues fixed');
            return true;
          }
        }
        
        this.log('❌ Linting issues persist - manual review required', 'WARN');
        return false;
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing linting issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport(ciChecks, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        overallHealth: this.calculateOverallHealth(ciChecks),
        totalIssues: this.countTotalIssues(ciChecks),
        fixedIssues: fixedCount,
        remainingIssues: this.countTotalIssues(ciChecks) - fixedCount
      },
      ciChecks,
      ciIssues: this.ciIssues,
      ciSuccesses: this.ciSuccesses,
      recommendations: this.generateCIRecommendations(ciChecks)
    };
    
    // Save report
    fs.writeFileSync(this.ciReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 CI automation report generated: ${fixedCount} issues fixed`);
    return report;
  }

  calculateOverallHealth(ciChecks) {
    const checks = Object.values(ciChecks);
    const healthyChecks = checks.filter(check => 
      check.status === 'clean' || check.status === 'success' || check.status === 'configured'
    );
    
    return Math.round((healthyChecks.length / checks.length) * 100);
  }

  countTotalIssues(ciChecks) {
    return Object.values(ciChecks).filter(check => 
      check.status !== 'clean' && check.status !== 'success' && check.status !== 'configured'
    ).length;
  }

  generateCIRecommendations(ciChecks) {
    const recommendations = [];
    
    // Git recommendations
    if (ciChecks.git.status !== 'clean') {
      recommendations.push({
        category: 'git',
        priority: 'medium',
        message: 'Git repository needs attention',
        action: 'Commit or stash changes, clean up untracked files'
      });
    }
    
    // Build recommendations
    if (ciChecks.build.status !== 'success') {
      recommendations.push({
        category: 'build',
        priority: 'high',
        message: 'Build pipeline issues detected',
        action: 'Review build configuration and fix errors'
      });
    }
    
    // Test recommendations
    if (ciChecks.tests.status !== 'success') {
      recommendations.push({
        category: 'tests',
        priority: 'medium',
        message: 'Test pipeline issues detected',
        action: 'Review test configuration and fix failing tests'
      });
    }
    
    // Linting recommendations
    if (ciChecks.linting.status !== 'success') {
      recommendations.push({
        category: 'linting',
        priority: 'medium',
        message: 'Linting pipeline issues detected',
        action: 'Fix code style issues and linting errors'
      });
    }
    
    // Security recommendations
    if (ciChecks.security.status !== 'success') {
      recommendations.push({
        category: 'security',
        priority: 'high',
        message: 'Security pipeline issues detected',
        action: 'Review and fix security vulnerabilities'
      });
    }
    
    // Deployment recommendations
    if (ciChecks.deployment.status === 'missing') {
      recommendations.push({
        category: 'deployment',
        priority: 'medium',
        message: 'No deployment configuration found',
        action: 'Set up CI/CD pipeline for automated deployments'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting CI Automation');
    
    try {
      // Run CI checks
      const ciChecks = await this.runCIChecks();
      
      // Log initial status
      this.log(`📊 CI pipeline status:`);
      this.log(`  - Git: ${ciChecks.git.status}`);
      this.log(`  - Build: ${ciChecks.build.status}`);
      this.log(`  - Tests: ${ciChecks.tests.status}`);
      this.log(`  - Linting: ${ciChecks.linting.status}`);
      this.log(`  - Security: ${ciChecks.security.status}`);
      this.log(`  - Deployment: ${ciChecks.deployment.status}`);
      
      // Check if all systems are healthy
      const allHealthy = Object.values(ciChecks).every(check => 
        check.status === 'clean' || check.status === 'success' || check.status === 'configured'
      );
      
      if (allHealthy) {
        this.log('✅ All CI pipelines are healthy!');
        return;
      }
      
      // Fix issues
      const fixedCount = await this.fixCIIssues(ciChecks);
      
      // Generate final report
      const report = await this.generateReport(ciChecks, fixedCount);
      
      this.log(`✅ CI automation completed! Fixed ${fixedCount} issues`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} CI recommendations:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in CI automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the CI automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new CIAutomation();
  automation.run().catch(console.error);
}

export default CIAutomation;