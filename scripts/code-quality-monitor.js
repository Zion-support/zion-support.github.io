#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.isRunning = false;
    this.checkInterval = 15 * 60 * 1000; // 15 minutes
    this.lastCheck = null;
    this.qualityMetrics = {
      lintErrors: 0,
      typeErrors: 0,
      buildErrors: 0,
      testFailures: 0,
      codeCoverage: 0,
      lastUpdated: null
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'code-quality-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runQualityCheck() {
    if (this.isRunning) {
      this.log('Quality check already in progress, skipping...', 'WARN');
      return;
    }

    this.isRunning = true;
    this.log('Starting comprehensive code quality check...');

    try {
      // Run all quality checks in parallel
      const [lintResult, typeResult, buildResult] = await Promise.allSettled([
        this.checkLinting(),
        this.checkTypeScript(),
        this.checkBuild()
      ]);

      // Update metrics
      this.updateQualityMetrics(lintResult, typeResult, buildResult);
      
      // Generate quality report
      await this.generateQualityReport();
      
      this.lastCheck = new Date();
      this.log('Quality check completed successfully');
      
    } catch (error) {
      this.log(`Quality check failed: ${error.message}`, 'ERROR');
    } finally {
      this.isRunning = false;
    }
  }

  async checkLinting() {
    try {
      const result = await this.runCommand('npm', { args: ['run', 'lint'] });
      return { success: true, errors: 0 };
    } catch (error) {
      const errorCount = this.countLintErrors(error.stderr || error.message);
      return { success: false, errors: errorCount };
    }
  }

  async checkTypeScript() {
    try {
      const result = await this.runCommand('npm', { args: ['run', 'type-check'] });
      return { success: true, errors: 0 };
    } catch (error) {
      const errorCount = this.countTypeErrors(error.stderr || error.message);
      return { success: false, errors: errorCount };
    }
  }

  async checkBuild() {
    try {
      const result = await this.runCommand('npm', { args: ['run', 'build'] });
      return { success: true, errors: 0 };
    } catch (error) {
      const errorCount = this.countBuildErrors(error.stderr || error.message);
      return { success: false, errors: errorCount };
    }
  }

  countLintErrors(output) {
    if (!output) return 0;
    
    // Count ESLint errors
    const errorMatches = output.match(/(\d+)\s+error\(s\)/);
    if (errorMatches) {
      return parseInt(errorMatches[1]);
    }
    
    // Count individual error lines
    const errorLines = output.split('\n').filter(line => 
      line.includes('error') && !line.includes('0 error')
    ).length;
    
    return errorLines;
  }

  countTypeErrors(output) {
    if (!output) return 0;
    
    // Count TypeScript errors
    const errorMatches = output.match(/Found\s+(\d+)\s+error/);
    if (errorMatches) {
      return parseInt(errorMatches[1]);
    }
    
    // Count individual error lines
    const errorLines = output.split('\n').filter(line => 
      line.includes('error TS') || line.includes('error:')
    ).length;
    
    return errorLines;
  }

  countBuildErrors(output) {
    if (!output) return 0;
    
    // Count build errors
    const errorMatches = output.match(/error\s+in\s+(\d+)\s+files?/);
    if (errorMatches) {
      return parseInt(errorMatches[1]);
    }
    
    // Count individual error lines
    const errorLines = output.split('\n').filter(line => 
      line.includes('ERROR') || line.includes('Build failed')
    ).length;
    
    return errorLines;
  }

  updateQualityMetrics(lintResult, typeResult, buildResult) {
    this.qualityMetrics.lintErrors = lintResult.status === 'fulfilled' ? lintResult.value.errors : 0;
    this.qualityMetrics.typeErrors = typeResult.status === 'fulfilled' ? typeResult.value.errors : 0;
    this.qualityMetrics.buildErrors = buildResult.status === 'fulfilled' ? buildResult.value.errors : 0;
    this.qualityMetrics.lastUpdated = new Date().toISOString();
    
    // Calculate overall quality score
    const totalErrors = this.qualityMetrics.lintErrors + this.qualityMetrics.typeErrors + this.qualityMetrics.buildErrors;
    this.qualityMetrics.overallScore = Math.max(0, 100 - (totalErrors * 2)); // Deduct 2 points per error
    
    this.log(`Quality metrics updated - Lint: ${this.qualityMetrics.lintErrors}, Type: ${this.qualityMetrics.typeErrors}, Build: ${this.qualityMetrics.buildErrors}, Score: ${this.qualityMetrics.overallScore}`);
  }

  async generateQualityReport() {
    this.log('Generating quality report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.qualityMetrics,
      recommendations: this.generateRecommendations(),
      summary: this.generateSummary()
    };
    
    const reportFile = path.join(this.logsDir, 'code-quality-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Also generate a human-readable report
    const humanReport = this.generateHumanReadableReport(report);
    const humanReportFile = path.join(this.logsDir, 'code-quality-report.md');
    fs.writeFileSync(humanReportFile, humanReport);
    
    this.log(`Quality reports generated: ${reportFile} and ${humanReportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.qualityMetrics.lintErrors > 0) {
      recommendations.push({
        category: 'Linting',
        priority: this.qualityMetrics.lintErrors > 10 ? 'HIGH' : 'MEDIUM',
        action: 'Run ESLint with --fix flag to auto-resolve issues',
        command: 'npm run lint -- --fix'
      });
    }
    
    if (this.qualityMetrics.typeErrors > 0) {
      recommendations.push({
        category: 'TypeScript',
        priority: this.qualityMetrics.typeErrors > 5 ? 'HIGH' : 'MEDIUM',
        action: 'Fix TypeScript compilation errors before building',
        command: 'npm run type-check'
      });
    }
    
    if (this.qualityMetrics.buildErrors > 0) {
      recommendations.push({
        category: 'Build',
        priority: 'HIGH',
        action: 'Resolve build errors to ensure deployability',
        command: 'npm run build'
      });
    }
    
    if (this.qualityMetrics.overallScore < 70) {
      recommendations.push({
        category: 'Overall',
        priority: 'HIGH',
        action: 'Project quality is below acceptable threshold. Review and fix critical issues.',
        command: 'Review logs and fix errors systematically'
      });
    }
    
    return recommendations;
  }

  generateSummary() {
    const totalErrors = this.qualityMetrics.lintErrors + this.qualityMetrics.typeErrors + this.qualityMetrics.buildErrors;
    
    if (totalErrors === 0) {
      return 'All quality checks passed successfully. Project is in excellent condition.';
    } else if (totalErrors <= 5) {
      return 'Minor quality issues detected. Project is in good condition with room for improvement.';
    } else if (totalErrors <= 20) {
      return 'Moderate quality issues detected. Project needs attention to resolve errors.';
    } else {
      return 'Significant quality issues detected. Project requires immediate attention and systematic error resolution.';
    }
  }

  generateHumanReadableReport(report) {
    return `# Code Quality Report

Generated: ${report.timestamp}

## Quality Metrics

- **Lint Errors**: ${report.metrics.lintErrors}
- **TypeScript Errors**: ${report.metrics.typeErrors}
- **Build Errors**: ${report.metrics.buildErrors}
- **Overall Quality Score**: ${report.metrics.overallScore}/100

## Summary

${report.summary}

## Recommendations

${report.recommendations.map(rec => 
  `### ${rec.category} (${rec.priority} Priority)
  **Action**: ${rec.action}
  **Command**: \`${rec.command}\`
  `
).join('\n')}

## Next Steps

1. Review the recommendations above
2. Execute the suggested commands to fix issues
3. Re-run quality checks to verify improvements
4. Consider setting up pre-commit hooks to prevent future issues

---
*Report generated by Code Quality Monitor*
`;
  }

  async runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, options.args || [], {
        shell: true,
        stdio: 'pipe',
        cwd: this.projectRoot,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject({ stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ error, stdout, stderr });
      });
    });
  }

  async startMonitoring() {
    this.log('Starting code quality monitoring...');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
    
    // Initial check
    await this.runQualityCheck();
    
    // Set up periodic checks
    setInterval(async () => {
      await this.runQualityCheck();
    }, this.checkInterval);
    
    this.log(`Code quality monitoring started. Checking every ${this.checkInterval / 1000 / 60} minutes.`);
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully...');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully...');
      process.exit(0);
    });
  }

  async run() {
    try {
      await this.startMonitoring();
    } catch (error) {
      this.log(`Code quality monitoring failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the code quality monitor if this script is executed directly
if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.run();
}

module.exports = CodeQualityMonitor;