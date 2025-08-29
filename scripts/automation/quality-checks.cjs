#!/usr/bin/env node

/**
 * Quality Checks Automation Script
 * Replaces GitHub Actions quality-check.yml workflow
 * Runs every 3 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class QualityChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'quality-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runQualityChecks() {
    console.log('🔍 Starting quality checks...');
    
    try {
      // Run linting
      console.log('📝 Running linting checks...');
      const lintResult = this.runLinting();
      
      // Run type checking
      console.log('🔍 Running type checking...');
      const typeCheckResult = this.runTypeCheck();
      
      // Run build verification
      console.log('🏗️ Running build verification...');
      const buildResult = this.runBuild();
      
      // Run tests
      console.log('🧪 Running tests...');
      const testResult = this.runTests();
      
      // Check code coverage
      console.log('📊 Checking code coverage...');
      const coverageResult = this.checkCodeCoverage();
      
      // Generate comprehensive report
      const report = this.generateReport({
        lint: lintResult,
        typeCheck: typeCheckResult,
        build: buildResult,
        tests: testResult,
        coverage: coverageResult
      });
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Quality checks completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Quality checks failed:', error.message);
      this.saveReport({
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  runLinting() {
    try {
      const output = execSync('npm run lint', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Linting passed successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  runTypeCheck() {
    try {
      const output = execSync('npm run type-check', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Type checking passed successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  runBuild() {
    try {
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Build completed successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  runTests() {
    try {
      const output = execSync('npm test', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Tests passed successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  checkCodeCoverage() {
    try {
      // Check if coverage script exists
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      if (packageJson.scripts && packageJson.scripts.coverage) {
        const output = execSync('npm run coverage', { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        return {
          success: true,
          output: output,
          message: 'Code coverage generated successfully'
        };
      } else {
        return {
          success: true,
          message: 'No coverage script found - skipping coverage check',
          skipped: true
        };
      }
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  generateReport(data) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        lint: data.lint?.success || false,
        typeCheck: data.typeCheck?.success || false,
        build: data.build?.success || false,
        tests: data.tests?.success || false,
        coverage: data.coverage?.success || false,
        overall: this.calculateOverallScore(data)
      },
      details: data,
      recommendations: this.generateRecommendations(data)
    };

    return report;
  }

  calculateOverallScore(data) {
    const checks = [
      data.lint?.success,
      data.typeCheck?.success,
      data.build?.success,
      data.tests?.success
    ];
    
    const passedChecks = checks.filter(Boolean).length;
    const totalChecks = checks.length;
    
    return {
      score: Math.round((passedChecks / totalChecks) * 100),
      passed: passedChecks,
      total: totalChecks
    };
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (!data.lint?.success) {
      recommendations.push('📝 Fix linting errors to improve code quality');
    }
    
    if (!data.typeCheck?.success) {
      recommendations.push('🔍 Fix TypeScript type errors');
    }
    
    if (!data.build?.success) {
      recommendations.push('🏗️ Fix build errors to ensure project compiles');
    }
    
    if (!data.tests?.success) {
      recommendations.push('🧪 Fix failing tests to maintain code reliability');
    }
    
    if (data.coverage?.skipped) {
      recommendations.push('📊 Consider adding code coverage reporting');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All quality checks passed successfully');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `quality-check-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Quality check report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'quality-check-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Quality Check Report - ${timestamp}

## Summary
- **Linting**: ${report.summary.lint ? '✅ Passed' : '❌ Failed'}
- **Type Checking**: ${report.summary.typeCheck ? '✅ Passed' : '❌ Failed'}
- **Build**: ${report.summary.build ? '✅ Passed' : '❌ Failed'}
- **Tests**: ${report.summary.tests ? '✅ Passed' : '❌ Failed'}
- **Coverage**: ${report.summary.coverage ? '✅ Passed' : '❌ Failed'}

## Overall Score
- **Score**: ${report.summary.overall.score}%
- **Passed**: ${report.summary.overall.passed}/${report.summary.overall.total} checks

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.summary.overall.score === 100 ? '✅ All Quality Checks Passed' : '⚠️ Quality Issues Detected'}

---
*Report generated automatically by PM2 Quality Checker*
`;

    const filename = `quality-check-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'quality-check-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const checker = new QualityChecker();
  await checker.runQualityChecks();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = QualityChecker;