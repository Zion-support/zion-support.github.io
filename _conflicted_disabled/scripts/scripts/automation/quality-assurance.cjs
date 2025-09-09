#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class QualityAssurance {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.qaData = {};
    this.qaHistory = [];
    this.maxHistory = 15;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async runQualityChecks() {
    try {
      this.log('🔍 Starting quality assurance checks...', 'info');
      
      const qa = {
        codeQuality: await this.runCodeQualityChecks(),
        testing: await this.runTestingChecks(),
        documentation: await this.runDocumentationChecks(),
        standards: await this.runStandardsChecks(),
        accessibility: await this.runAccessibilityChecks(),
        timestamp: new Date().toISOString()
      };

      // Determine overall QA status
      const allPassed = Object.values(qa).every(step => 
        step && step.status === 'passed' || step.status === 'skipped'
      );
      
      qa.status = allPassed ? 'passed' : 'failed';
      qa.summary = this.generateQASummary(qa);

      this.qaData = qa;
      
      // Store in history
      this.qaHistory.push(qa);
      if (this.qaHistory.length > this.maxHistory) {
        this.qaHistory.shift();
      }

      this.log('Quality assurance checks completed', 'info');
      return qa;
    } catch (error) {
      this.log(`Quality assurance failed: ${error.message}`, 'error');
      return null;
    }
  }

  async runCodeQualityChecks() {
    try {
      this.log('Running code quality checks...', 'info');
      
      const checks = {
        linting: await this.runLinting(),
        formatting: await this.runFormatting(),
        complexity: await this.analyzeComplexity(),
        coverage: await this.checkTestCoverage(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.linting.issues > 0) {
        checks.issues.push(`${checks.linting.issues} linting issues found`);
      }
      
      if (checks.formatting.issues > 0) {
        checks.issues.push(`${checks.formatting.issues} formatting issues found`);
      }
      
      if (checks.complexity.highComplexity > 0) {
        checks.issues.push(`${checks.complexity.highComplexity} high complexity functions`);
      }
      
      if (checks.coverage.coverage < 80) {
        checks.issues.push(`Test coverage below 80% (${checks.coverage.coverage}%)`);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Code quality checks failed']
      };
    }
  }

  async runLinting() {
    try {
      const result = execSync('npm run lint', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        status: 'passed',
        issues: 0,
        message: 'Linting passed'
      };
    } catch (error) {
      // Parse linting output for issues
      const output = error.stdout || error.stderr || '';
      const issues = output.split('\n').filter(line => 
        line.includes('error') || line.includes('warning')
      ).length;
      
      return {
        status: 'failed',
        issues,
        message: `${issues} linting issues found`
      };
    }
  }

  async runFormatting() {
    try {
      // Check if prettier is configured
      const prettierConfig = [
        '.prettierrc',
        '.prettierrc.json',
        '.prettierrc.js',
        'prettier.config.js'
      ];
      
      const hasPrettier = prettierConfig.some(config => 
        fs.existsSync(path.join(this.workingDir, config))
      );

      if (!hasPrettier) {
        return {
          status: 'skipped',
          issues: 0,
          message: 'Prettier not configured'
        };
      }

      // Run prettier check
      try {
        execSync('npx prettier --check .', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return {
          status: 'passed',
          issues: 0,
          message: 'Formatting is correct'
        };
      } catch (error) {
        const output = error.stdout || error.stderr || '';
        const issues = output.split('\n').filter(line => 
          line.includes('warn') || line.includes('error')
        ).length;
        
        return {
          status: 'failed',
          issues,
          message: `${issues} formatting issues found`
        };
      }
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: 0
      };
    }
  }

  async analyzeComplexity() {
    try {
      const srcDir = path.join(this.workingDir, 'src');
      if (!fs.existsSync(srcDir)) {
        return { error: 'Source directory not found' };
      }

      const complexity = {
        highComplexity: 0,
        mediumComplexity: 0,
        lowComplexity: 0,
        totalFunctions: 0,
        averageComplexity: 0
      };

      const files = this.getAllSourceFiles(srcDir);
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const fileComplexity = this.calculateFileComplexity(content);
          
          complexity.totalFunctions += fileComplexity.functions;
          complexity.highComplexity += fileComplexity.highComplexity;
          complexity.mediumComplexity += fileComplexity.mediumComplexity;
          complexity.lowComplexity += fileComplexity.lowComplexity;
        } catch (error) {
          // Skip files that can't be read
        }
      }

      if (complexity.totalFunctions > 0) {
        complexity.averageComplexity = (
          (complexity.highComplexity * 10 + complexity.mediumComplexity * 5 + complexity.lowComplexity * 1) / 
          complexity.totalFunctions
        );
      }

      return complexity;
    } catch (error) {
      return { error: error.message };
    }
  }

  getAllSourceFiles(dir, files = []) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.getAllSourceFiles(fullPath, files);
        } else if (stat.isFile() && ['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(item))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  calculateFileComplexity(content) {
    const complexity = {
      functions: 0,
      highComplexity: 0,
      mediumComplexity: 0,
      lowComplexity: 0
    };

    const lines = content.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Count functions
      if (trimmed.match(/^(export\s+)?(function|const|let|var)\s+(\w+)/)) {
        complexity.functions++;
        
        // Calculate function complexity
        const funcComplexity = this.calculateFunctionComplexity(content, trimmed);
        
        if (funcComplexity > 10) {
          complexity.highComplexity++;
        } else if (funcComplexity > 5) {
          complexity.mediumComplexity++;
        } else {
          complexity.lowComplexity++;
        }
      }
    }

    return complexity;
  }

  calculateFunctionComplexity(content, functionLine) {
    // Simplified complexity calculation
    // In production, use AST analysis
    let complexity = 1;
    
    const complexityPatterns = [
      /\bif\b/g,
      /\belse\b/g,
      /\bfor\b/g,
      /\bwhile\b/g,
      /\bswitch\b/g,
      /\bcase\b/g,
      /\bcatch\b/g,
      /\b&&/g,
      /\b\|\|/g
    ];
    
    for (const pattern of complexityPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    }
    
    return complexity;
  }

  async checkTestCoverage() {
    try {
      // Check if coverage is configured
      const vitestConfig = path.join(this.workingDir, 'vitest.config.ts');
      if (fs.existsSync(vitestConfig)) {
        const configContent = fs.readFileSync(vitestConfig, 'utf8');
        if (configContent.includes('coverage')) {
          try {
            const result = execSync('npm run test:coverage --silent', { 
              cwd: this.workingDir, 
              encoding: 'utf8',
              stdio: 'pipe'
            });
            
            // Parse coverage output
            const lines = result.split('\n');
            let coverage = 0;
            
            for (const line of lines) {
              if (line.includes('All files') && line.includes('%')) {
                const match = line.match(/(\d+(?:\.\d+)?)%/);
                if (match) {
                  coverage = parseFloat(match[1]);
                }
              }
            }
            
            return {
              coverage,
              status: coverage >= 80 ? 'good' : coverage >= 60 ? 'moderate' : 'poor',
              message: `Test coverage: ${coverage}%`
            };
          } catch (error) {
            return {
              coverage: 0,
              status: 'unknown',
              message: 'Coverage check failed'
            };
          }
        }
      }
      
      return {
        coverage: 0,
        status: 'not-configured',
        message: 'Test coverage not configured'
      };
    } catch (error) {
      return {
        coverage: 0,
        status: 'error',
        error: error.message
      };
    }
  }

  async runTestingChecks() {
    try {
      this.log('Running testing checks...', 'info');
      
      const checks = {
        unitTests: await this.runUnitTests(),
        integrationTests: await this.runIntegrationTests(),
        e2eTests: await this.runE2ETests(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.unitTests.status === 'failed') {
        checks.issues.push('Unit tests failed');
      }
      
      if (checks.integrationTests.status === 'failed') {
        checks.issues.push('Integration tests failed');
      }
      
      if (checks.e2eTests.status === 'failed') {
        checks.issues.push('E2E tests failed');
      }

      if (checks.issues.length > 0) {
        checks.status = 'failed';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Testing checks failed']
      };
    }
  }

  async runUnitTests() {
    try {
      execSync('npm test', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        status: 'passed',
        message: 'Unit tests passed'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Unit tests failed'
      };
    }
  }

  async runIntegrationTests() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      if (packageJson.scripts['test:integration']) {
        execSync('npm run test:integration', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return {
          status: 'passed',
          message: 'Integration tests passed'
        };
      } else {
        return {
          status: 'skipped',
          message: 'No integration tests configured'
        };
      }
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Integration tests failed'
      };
    }
  }

  async runE2ETests() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      if (packageJson.scripts['test:e2e']) {
        execSync('npm run test:e2e', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return {
          status: 'passed',
          message: 'E2E tests passed'
        };
      } else {
        return {
          status: 'skipped',
          message: 'No E2E tests configured'
        };
      }
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'E2E tests failed'
      };
    }
  }

  async runDocumentationChecks() {
    try {
      this.log('Running documentation checks...', 'info');
      
      const checks = {
        readme: await this.checkReadme(),
        apiDocs: await this.checkAPIDocs(),
        inlineDocs: await this.checkInlineDocs(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.readme.status === 'missing') {
        checks.issues.push('README file missing or incomplete');
      }
      
      if (checks.apiDocs.status === 'missing') {
        checks.issues.push('API documentation missing');
      }
      
      if (checks.inlineDocs.coverage < 50) {
        checks.issues.push(`Low inline documentation coverage: ${checks.inlineDocs.coverage}%`);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Documentation checks failed']
      };
    }
  }

  async checkReadme() {
    try {
      const readmeFiles = ['README.md', 'README.txt', 'README'];
      let found = false;
      let content = '';
      
      for (const file of readmeFiles) {
        if (fs.existsSync(path.join(this.workingDir, file))) {
          found = true;
          content = fs.readFileSync(path.join(this.workingDir, file), 'utf8');
          break;
        }
      }

      if (!found) {
        return {
          status: 'missing',
          message: 'No README file found'
        };
      }

      // Check README quality
      const lines = content.split('\n').length;
      const hasInstallation = content.toLowerCase().includes('install');
      const hasUsage = content.toLowerCase().includes('usage') || content.toLowerCase().includes('example');
      
      if (lines < 10 || !hasInstallation || !hasUsage) {
        return {
          status: 'incomplete',
          message: 'README is incomplete',
          lines,
          hasInstallation,
          hasUsage
        };
      }

      return {
        status: 'complete',
        message: 'README is complete',
        lines,
        hasInstallation,
        hasUsage
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkAPIDocs() {
    try {
      // Check for common API documentation patterns
      const apiDocPatterns = [
        'API.md',
        'docs/',
        'swagger',
        'openapi',
        'jsdoc'
      ];
      
      let found = false;
      for (const pattern of apiDocPatterns) {
        if (fs.existsSync(path.join(this.workingDir, pattern))) {
          found = true;
          break;
        }
      }

      return {
        status: found ? 'found' : 'missing',
        message: found ? 'API documentation found' : 'API documentation missing'
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkInlineDocs() {
    try {
      const srcDir = path.join(this.workingDir, 'src');
      if (!fs.existsSync(srcDir)) {
        return { coverage: 0, status: 'no-source' };
      }

      const files = this.getAllSourceFiles(srcDir);
      let documentedFunctions = 0;
      let totalFunctions = 0;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line.match(/^(export\s+)?(function|const|let|var)\s+(\w+)/)) {
              totalFunctions++;
              
              // Check if function has documentation above it
              if (i > 0) {
                const prevLine = lines[i - 1].trim();
                if (prevLine.startsWith('//') || prevLine.startsWith('/*') || prevLine.startsWith('*')) {
                  documentedFunctions++;
                }
              }
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      const coverage = totalFunctions > 0 ? Math.round((documentedFunctions / totalFunctions) * 100) : 0;

      return {
        coverage,
        documentedFunctions,
        totalFunctions,
        status: coverage >= 80 ? 'good' : coverage >= 50 ? 'moderate' : 'poor'
      };
    } catch (error) {
      return {
        coverage: 0,
        error: error.message
      };
    }
  }

  async runStandardsChecks() {
    try {
      this.log('Running standards checks...', 'info');
      
      const checks = {
        gitHooks: await this.checkGitHooks(),
        ciConfig: await this.checkCIConfig(),
        security: await this.checkSecurityStandards(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.gitHooks.status === 'missing') {
        checks.issues.push('Git hooks not configured');
      }
      
      if (checks.ciConfig.status === 'missing') {
        checks.issues.push('CI/CD configuration missing');
      }
      
      if (checks.security.status === 'warning') {
        checks.issues.push('Security standards need attention');
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Standards checks failed']
      };
    }
  }

  async checkGitHooks() {
    try {
      const hooksDir = path.join(this.workingDir, '.git', 'hooks');
      const huskyDir = path.join(this.workingDir, '.husky');
      
      if (fs.existsSync(huskyDir)) {
        const hooks = fs.readdirSync(huskyDir);
        const hasPreCommit = hooks.some(hook => hook.includes('pre-commit'));
        const hasPrePush = hooks.some(hook => hook.includes('pre-push'));
        
        return {
          status: hasPreCommit && hasPrePush ? 'configured' : 'partial',
          message: `Git hooks: ${hooks.length} found`,
          hasPreCommit,
          hasPrePush
        };
      } else if (fs.existsSync(hooksDir)) {
        const hooks = fs.readdirSync(hooksDir);
        return {
          status: hooks.length > 0 ? 'configured' : 'missing',
          message: `Git hooks: ${hooks.length} found`
        };
      } else {
        return {
          status: 'missing',
          message: 'No git hooks found'
        };
      }
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkCIConfig() {
    try {
      const ciFiles = [
        '.github/workflows/',
        '.gitlab-ci.yml',
        '.travis.yml',
        'circle.yml',
        'azure-pipelines.yml'
      ];
      
      let found = false;
      for (const file of ciFiles) {
        if (fs.existsSync(path.join(this.workingDir, file))) {
          found = true;
          break;
        }
      }

      return {
        status: found ? 'found' : 'missing',
        message: found ? 'CI/CD configuration found' : 'CI/CD configuration missing'
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkSecurityStandards() {
    try {
      // Check for security-related configurations
      const securityChecks = {
        hasAuditScript: false,
        hasSecurityDeps: false,
        hasEnvConfig: false
      };

      // Check package.json for security scripts
      try {
        const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
        securityChecks.hasAuditScript = !!packageJson.scripts?.audit;
        
        // Check for security dependencies
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        securityChecks.hasSecurityDeps = Object.keys(dependencies).some(dep => 
          dep.includes('security') || dep.includes('audit') || dep.includes('lint')
        );
      } catch (error) {
        // Skip if package.json can't be read
      }

      // Check for environment configuration
      const envFiles = ['.env.example', '.env.template'];
      securityChecks.hasEnvConfig = envFiles.some(file => 
        fs.existsSync(path.join(this.workingDir, file))
      );

      const score = Object.values(securityChecks).filter(Boolean).length;
      
      return {
        status: score >= 2 ? 'good' : score >= 1 ? 'moderate' : 'warning',
        score,
        checks: securityChecks,
        message: `Security score: ${score}/3`
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async runAccessibilityChecks() {
    try {
      this.log('Running accessibility checks...', 'info');
      
      const checks = {
        semantic: await this.checkSemanticHTML(),
        aria: await this.checkARIALabels(),
        contrast: await this.checkColorContrast(),
        keyboard: await this.checkKeyboardNavigation(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.semantic.issues > 0) {
        checks.issues.push(`${checks.semantic.issues} semantic HTML issues`);
      }
      
      if (checks.aria.issues > 0) {
        checks.issues.push(`${checks.aria.issues} ARIA label issues`);
      }
      
      if (checks.contrast.issues > 0) {
        checks.issues.push(`${checks.contrast.issues} color contrast issues`);
      }
      
      if (checks.keyboard.issues > 0) {
        checks.issues.push(`${checks.keyboard.issues} keyboard navigation issues`);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Accessibility checks failed']
      };
    }
  }

  async checkSemanticHTML() {
    try {
      const srcDir = path.join(this.workingDir, 'src');
      if (!fs.existsSync(srcDir)) {
        return { issues: 0, status: 'no-source' };
      }

      const files = this.getAllSourceFiles(srcDir);
      let issues = 0;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common semantic HTML issues
          if (content.includes('<div') && !content.includes('<main') && !content.includes('<section')) {
            issues++;
          }
          
          if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
            issues++;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      return {
        issues,
        status: issues === 0 ? 'good' : issues < 5 ? 'moderate' : 'poor'
      };
    } catch (error) {
      return {
        issues: 0,
        error: error.message
      };
    }
  }

  async checkARIALabels() {
    try {
      const srcDir = path.join(this.workingDir, 'src');
      if (!fs.existsSync(srcDir)) {
        return { issues: 0, status: 'no-source' };
      }

      const files = this.getAllSourceFiles(srcDir);
      let issues = 0;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for missing ARIA labels
          if (content.includes('<img') && !content.includes('alt=')) {
            issues++;
          }
          
          if (content.includes('<input') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
            issues++;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      return {
        issues,
        status: issues === 0 ? 'good' : issues < 3 ? 'moderate' : 'poor'
      };
    } catch (error) {
      return {
        issues: 0,
        error: error.message
      };
    }
  }

  async checkColorContrast() {
    try {
      // This would require analyzing CSS files and color values
      // For now, provide a placeholder
      return {
        issues: 0,
        status: 'not-implemented',
        message: 'Color contrast analysis not implemented'
      };
    } catch (error) {
      return {
        issues: 0,
        error: error.message
      };
    }
  }

  async checkKeyboardNavigation() {
    try {
      // This would require analyzing event handlers and focus management
      // For now, provide a placeholder
      return {
        issues: 0,
        status: 'not-implemented',
        message: 'Keyboard navigation analysis not implemented'
      };
    } catch (error) {
      return {
        issues: 0,
        error: error.message
      };
    }
  }

  generateQASummary(qa) {
    const summary = {
      totalChecks: 0,
      passedChecks: 0,
      failedChecks: 0,
      warningChecks: 0,
      score: 0,
      recommendations: []
    };

    for (const [checkName, check] of Object.entries(qa)) {
      if (checkName === 'timestamp' || checkName === 'status' || checkName === 'summary') continue;
      
      summary.totalChecks++;
      
      if (check.status === 'passed') {
        summary.passedChecks++;
      } else if (check.status === 'failed') {
        summary.failedChecks++;
      } else if (check.status === 'warning') {
        summary.warningChecks++;
      }
    }

    summary.score = summary.totalChecks > 0 ? 
      Math.round((summary.passedChecks / summary.totalChecks) * 100) : 0;

    // Generate recommendations
    if (summary.score < 80) {
      summary.recommendations.push('Quality score is low - address failed checks');
    }
    
    if (summary.warningChecks > 0) {
      summary.recommendations.push('Address warning-level issues');
    }

    return summary;
  }

  async generateQAReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          status: this.qaData.status || 'unknown',
          score: this.qaData.summary?.score || 0,
          totalChecks: this.qaData.summary?.totalChecks || 0,
          passedChecks: this.qaData.summary?.passedChecks || 0
        },
        qa: this.qaData,
        history: this.qaHistory.slice(-5), // Last 5 runs
        recommendations: this.qaData.summary?.recommendations || []
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'quality-assurance-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('QA report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  async run() {
    this.log('🔍 Starting Quality Assurance...', 'info');
    
    try {
      await this.runQualityChecks();
      
      const report = await this.generateQAReport();
      
      if (report) {
        this.log(`✅ Quality assurance completed:`, 'info');
        this.log(`   Status: ${report.summary.status}`, 'info');
        this.log(`   Score: ${report.summary.score}/100`, 'info');
        this.log(`   Checks: ${report.summary.passedChecks}/${report.summary.totalChecks} passed`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
      }
      
    } catch (error) {
      this.log(`Quality assurance failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Quality assurance started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const qa = new QualityAssurance();
  qa.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    qa.log('🛑 Quality assurance shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    qa.log('🛑 Quality assurance shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = QualityAssurance;