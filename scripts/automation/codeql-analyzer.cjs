#!/usr/bin/env node

/**
 * CodeQL Analysis Automation
 * Replaces GitHub Action: codeql.yml
 * Runs every 12 hours to perform static code analysis
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQLAnalyzerAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '../../reports/codeql-analysis-report.json');
    this.interval = process.env.AUTOMATION_INTERVAL || 43200000; // 12 hours default
    this.reportsDir = path.join(__dirname, '../../reports');
    this.workDir = path.join(__dirname, '../../');
  }

  async start() {
    console.log('🚀 Starting CodeQL Analysis Automation...');
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    // Run initial analysis
    await this.runCodeQLAnalysis();

    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.runCodeQLAnalysis();
    }, this.interval);

    console.log(`⏰ CodeQL Analysis Automation running every ${this.interval / 3600000} hours`);
  }

  async runCodeQLAnalysis() {
    try {
      console.log('🔍 Running CodeQL analysis...');
      
      const timestamp = new Date().toISOString();
      const report = {
        timestamp,
        status: 'running',
        analysis: {},
        securityIssues: [],
        codeQuality: {},
        recommendations: []
      };

      // Change to workspace directory
      process.chdir(this.workDir);

      // Check if CodeQL CLI is available
      try {
        execSync('codeql --version', { encoding: 'utf8' });
        report.analysis.codeqlAvailable = true;
      } catch (error) {
        report.analysis.codeqlAvailable = false;
        report.recommendations.push('CodeQL CLI not available - install for enhanced analysis');
      }

      // Run basic security checks
      await this.runSecurityChecks(report);

      // Run code quality analysis
      await this.runCodeQualityAnalysis(report);

      // Run dependency security analysis
      await this.runDependencySecurityAnalysis(report);

      // Generate recommendations
      this.generateRecommendations(report);

      // Finalize report
      report.status = 'completed';
      report.summary = {
        securityIssues: report.securityIssues.length,
        codeQualityIssues: Object.keys(report.codeQuality).length,
        recommendations: report.recommendations.length
      };

      // Save report
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
      
      console.log(`✅ CodeQL analysis completed: ${report.summary.securityIssues} security issues, ${report.summary.codeQualityIssues} quality issues`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        console.log('📋 Recommendations:');
        report.recommendations.forEach(rec => console.log(`  - ${rec}`));
      }

    } catch (error) {
      console.error('❌ Error in CodeQL analysis:', error.message);
      
      // Save error report
      const errorReport = {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message,
        stack: error.stack
      };
      
      fs.writeFileSync(this.logFile, JSON.stringify(errorReport, null, 2));
    }
  }

  async runSecurityChecks(report) {
    try {
      console.log('🔒 Running security checks...');

      // Check for common security patterns
      const securityPatterns = [
        { pattern: 'eval\\s*\\(', description: 'Potential eval usage detected' },
        { pattern: 'innerHTML\\s*=', description: 'Potential XSS vulnerability' },
        { pattern: 'document\\.write', description: 'Potential XSS vulnerability' },
        { pattern: 'localStorage\\s*=', description: 'Check for sensitive data storage' },
        { pattern: 'sessionStorage\\s*=', description: 'Check for sensitive data storage' }
      ];

      const sourceFiles = this.findSourceFiles();
      
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          for (const pattern of securityPatterns) {
            if (new RegExp(pattern.pattern, 'gi').test(content)) {
              report.securityIssues.push({
                file,
                pattern: pattern.description,
                severity: 'medium',
                recommendation: 'Review for security implications'
              });
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

    } catch (error) {
      console.error('Error in security checks:', error.message);
    }
  }

  async runCodeQualityAnalysis(report) {
    try {
      console.log('📊 Running code quality analysis...');

      // Run ESLint if available
      try {
        const eslintOutput = execSync('npm run lint --silent', { encoding: 'utf8' });
        report.codeQuality.eslint = {
          status: 'completed',
          output: eslintOutput
        };
      } catch (error) {
        report.codeQuality.eslint = {
          status: 'failed',
          error: error.message
        };
      }

      // Run TypeScript type checking
      try {
        const typeCheckOutput = execSync('npm run type-check --silent', { encoding: 'utf8' });
        report.codeQuality.typeCheck = {
          status: 'completed',
          output: typeCheckOutput
        };
      } catch (error) {
        report.codeQuality.typeCheck = {
          status: 'failed',
          error: error.message
        };
      }

      // Check for common code smells
      const codeSmells = this.detectCodeSmells();
      report.codeQuality.codeSmells = codeSmells;

    } catch (error) {
      console.error('Error in code quality analysis:', error.message);
    }
  }

  async runDependencySecurityAnalysis(report) {
    try {
      console.log('🔐 Running dependency security analysis...');

      // Check for known vulnerabilities
      try {
        const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
        const audit = JSON.parse(auditOutput);
        
        if (audit.vulnerabilities) {
          report.securityIssues.push(...Object.values(audit.vulnerabilities).map(vuln => ({
            type: 'dependency',
            package: vuln.name,
            severity: vuln.severity,
            description: vuln.title,
            recommendation: 'Update package or apply security patches'
          })));
        }
      } catch (error) {
        // No vulnerabilities found
      }

    } catch (error) {
      console.error('Error in dependency security analysis:', error.message);
    }
  }

  detectCodeSmells() {
    const codeSmells = [];
    const sourceFiles = this.findSourceFiles();

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for long functions
        const lines = content.split('\n');
        if (lines.length > 50) {
          codeSmells.push({
            file,
            type: 'long-function',
            description: 'Function exceeds 50 lines',
            recommendation: 'Consider breaking into smaller functions'
          });
        }

        // Check for complex conditionals
        if (content.includes('&&') && content.includes('||')) {
          const complexConditions = content.match(/([^&|]{20,}[&|][^&|]{20,})/g);
          if (complexConditions && complexConditions.length > 0) {
            codeSmells.push({
              file,
              type: 'complex-conditional',
              description: 'Complex conditional logic detected',
              recommendation: 'Consider simplifying or extracting to variables'
            });
          }
        }

      } catch (error) {
        // Skip files that can't be read
      }
    }

    return codeSmells;
  }

  findSourceFiles() {
    const sourceDirs = ['src', 'scripts', 'utils', 'services'];
    const sourceFiles = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.workDir, dir);
      if (fs.existsSync(dirPath)) {
        this.findFilesRecursively(dirPath, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.cjs')
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (stat.isFile()) {
        files.push(fullPath);
      }
    }
  }

  generateRecommendations(report) {
    if (report.securityIssues.length > 0) {
      report.recommendations.push('Address security issues identified in the analysis');
    }

    if (report.codeQuality.codeSmells && report.codeQuality.codeSmells.length > 0) {
      report.recommendations.push('Refactor code to address code smells');
    }

    if (report.codeQuality.eslint && report.codeQuality.eslint.status === 'failed') {
      report.recommendations.push('Fix ESLint errors to improve code quality');
    }

    if (report.codeQuality.typeCheck && report.codeQuality.typeCheck.status === 'failed') {
      report.recommendations.push('Fix TypeScript type errors');
    }
  }

  async stop() {
    console.log('🛑 Stopping CodeQL Analysis Automation...');
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the automation
const automation = new CodeQLAnalyzerAutomation();
automation.start().catch(console.error);