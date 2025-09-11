#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Enhanced CI/CD Automation...');

class EnhancedCICDAutomation {
  constructor() {
    this.ciResults = {
      dependencies: { status: 'pending', result: null },
      linting: { status: 'pending', result: null },
      typeCheck: { status: 'pending', result: null },
      build: { status: 'pending', result: null },
      testing: { status: 'pending', result: null },
      quality: { status: 'pending', result: null }
    };
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async installDependencies() {
    console.log('📦 Installing dependencies...');
    try {
      const startTime = Date.now();
      const output = execSync('npm install', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      
      this.ciResults.dependencies.status = 'success';
      this.ciResults.dependencies.result = {
        duration: `${duration}ms`,
        output: 'Dependencies installed successfully'
      };
      
      console.log(`✅ Dependencies installed in ${duration}ms`);
      
    } catch (error) {
      this.ciResults.dependencies.status = 'failure';
      this.ciResults.dependencies.result = {
        error: error.message,
        output: error.stdout || error.stderr || 'Unknown error'
      };
      console.log('❌ Dependency installation failed:', error.message);
      throw error;
    }
  }

  async runLinting() {
    console.log('🔍 Running linting checks...');
    try {
      const startTime = Date.now();
      const output = execSync('npm run lint', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      
      this.ciResults.linting.status = 'success';
      this.ciResults.linting.result = {
        duration: `${duration}ms`,
        output: output,
        issues: this.parseLintOutput(output)
      };
      
      console.log(`✅ Linting completed in ${duration}ms`);
      
    } catch (error) {
      this.ciResults.linting.status = 'failure';
      this.ciResults.linting.result = {
        error: error.message,
        output: error.stdout || error.stderr || 'Unknown error',
        issues: this.parseLintOutput(error.stdout || error.stderr || '')
      };
      console.log('❌ Linting failed:', error.message);
    }
  }

  parseLintOutput(output) {
    try {
      // Try to parse JSON output
      const lines = output.split('\n');
      const jsonLines = lines.filter(line => line.trim().startsWith('{'));
      
      if (jsonLines.length > 0) {
        const jsonOutput = jsonLines.join('\n');
        const lintData = JSON.parse(jsonOutput);
        return {
          total: lintData.length || 0,
          errors: lintData.filter(issue => issue.severity === 2).length || 0,
          warnings: lintData.filter(issue => issue.severity === 1).length || 0
        };
      }
      
      // Parse text output
      const errorMatches = output.match(/error/g) || [];
      const warningMatches = output.match(/warning/g) || [];
      
      return {
        total: errorMatches.length + warningMatches.length,
        errors: errorMatches.length,
        warnings: warningMatches.length
      };
    } catch (error) {
      return { total: 0, errors: 0, warnings: 0 };
    }
  }

  async runTypeCheck() {
    console.log('🔍 Running TypeScript type checking...');
    try {
      const startTime = Date.now();
      const output = execSync('npm run type-check', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      
      this.ciResults.typeCheck.status = 'success';
      this.ciResults.typeCheck.result = {
        duration: `${duration}ms`,
        output: output,
        issues: this.parseTypeCheckOutput(output)
      };
      
      console.log(`✅ Type checking completed in ${duration}ms`);
      
    } catch (error) {
      this.ciResults.typeCheck.status = 'failure';
      this.ciResults.typeCheck.result = {
        error: error.message,
        output: error.stdout || error.stderr || 'Unknown error',
        issues: this.parseTypeCheckOutput(error.stdout || error.stderr || '')
      };
      console.log('❌ Type checking failed:', error.message);
    }
  }

  parseTypeCheckOutput(output) {
    try {
      const lines = output.split('\n');
      const errorLines = lines.filter(line => line.includes('error TS'));
      const warningLines = lines.filter(line => line.includes('warning TS'));
      
      return {
        total: errorLines.length + warningLines.length,
        errors: errorLines.length,
        warnings: warningLines.length
      };
    } catch (error) {
      return { total: 0, errors: 0, warnings: 0 };
    }
  }

  async runBuild() {
    console.log('🏗️ Building project...');
    try {
      const startTime = Date.now();
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      
      this.ciResults.build.status = 'success';
      this.ciResults.build.result = {
        duration: `${duration}ms`,
        output: 'Build completed successfully',
        buildSize: this.calculateBuildSize()
      };
      
      console.log(`✅ Build completed in ${duration}ms`);
      
    } catch (error) {
      this.ciResults.build.status = 'failure';
      this.ciResults.build.result = {
        error: error.message,
        output: error.stdout || error.stderr || 'Unknown error'
      };
      console.log('❌ Build failed:', error.message);
      throw error;
    }
  }

  calculateBuildSize() {
    try {
      const distDir = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) return '0 B';
      
      let totalSize = 0;
      const walkDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            walkDir(filePath);
          } else {
            totalSize += stat.size;
          }
        });
      };
      
      walkDir(distDir);
      
      // Convert to human readable format
      const units = ['B', 'KB', 'MB', 'GB'];
      let size = totalSize;
      let unitIndex = 0;
      
      while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
      }
      
      return `${size.toFixed(2)} ${units[unitIndex]}`;
    } catch (error) {
      return 'Unknown';
    }
  }

  async runTests() {
    console.log('🧪 Running tests...');
    try {
      const startTime = Date.now();
      
      // Check if tests are available
      const packagePath = path.join(process.cwd(), 'package.json');
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      const scripts = packageData.scripts || {};
      
      let testOutput = '';
      let testCommand = '';
      
      if (scripts.test) {
        testCommand = 'npm test';
      } else if (scripts['test:unit']) {
        testCommand = 'npm run test:unit';
      } else {
        console.log('⚠️ No test scripts found, skipping tests');
        this.ciResults.testing.status = 'skipped';
        this.ciResults.testing.result = {
          reason: 'No test scripts configured',
          output: 'Tests skipped'
        };
        return;
      }
      
      const output = execSync(testCommand, { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const duration = Date.now() - startTime;
      testOutput = output;
      
      this.ciResults.testing.status = 'success';
      this.ciResults.testing.result = {
        duration: `${duration}ms`,
        output: testOutput,
        summary: this.parseTestOutput(testOutput)
      };
      
      console.log(`✅ Tests completed in ${duration}ms`);
      
    } catch (error) {
      this.ciResults.testing.status = 'failure';
      this.ciResults.testing.result = {
        error: error.message,
        output: error.stdout || error.stderr || 'Unknown error'
      };
      console.log('❌ Tests failed:', error.message);
    }
  }

  parseTestOutput(output) {
    try {
      // Look for common test result patterns
      const passedMatches = output.match(/(\d+)\s+passed/g) || [];
      const failedMatches = output.match(/(\d+)\s+failed/g) || [];
      const skippedMatches = output.match(/(\d+)\s+skipped/g) || [];
      
      const passed = passedMatches.length > 0 ? parseInt(passedMatches[0].match(/\d+/)[0]) : 0;
      const failed = failedMatches.length > 0 ? parseInt(failedMatches[0].match(/\d+/)[0]) : 0;
      const skipped = skippedMatches.length > 0 ? parseInt(skippedMatches[0].match(/\d+/)[0]) : 0;
      
      return {
        passed,
        failed,
        skipped,
        total: passed + failed + skipped
      };
    } catch (error) {
      return { passed: 0, failed: 0, skipped: 0, total: 0 };
    }
  }

  async runQualityChecks() {
    console.log('📊 Running quality checks...');
    try {
      const qualityResults = {
        buildSuccess: this.ciResults.build.status === 'success',
        lintingPassed: this.ciResults.linting.status === 'success',
        typeCheckPassed: this.ciResults.typeCheck.status === 'success',
        testsPassed: this.ciResults.testing.status === 'success',
        dependenciesInstalled: this.ciResults.dependencies.status === 'success'
      };
      
      const totalChecks = Object.keys(qualityResults).length;
      const passedChecks = Object.values(qualityResults).filter(Boolean).length;
      const qualityScore = (passedChecks / totalChecks * 100).toFixed(2);
      
      this.ciResults.quality.status = passedChecks === totalChecks ? 'success' : 'failure';
      this.ciResults.quality.result = {
        score: qualityScore,
        passed: passedChecks,
        total: totalChecks,
        details: qualityResults
      };
      
      console.log(`✅ Quality checks completed. Score: ${qualityScore}%`);
      
    } catch (error) {
      this.ciResults.quality.status = 'failure';
      this.ciResults.quality.result = {
        error: error.message,
        score: 0,
        passed: 0,
        total: 0
      };
      console.log('❌ Quality checks failed:', error.message);
    }
  }

  async generateCIReport() {
    console.log('📋 Generating CI/CD report...');
    
    const totalDuration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${totalDuration}ms`,
      summary: {
        total: Object.keys(this.ciResults).length,
        passed: Object.values(this.ciResults).filter(r => r.status === 'success').length,
        failed: Object.values(this.ciResults).filter(r => r.status === 'failure').length,
        skipped: Object.values(this.ciResults).filter(r => r.status === 'skipped').length
      },
      results: this.ciResults,
      quality: this.ciResults.quality.result
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(this.reportDir, 'ci-cd-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(this.reportDir, 'CI_CD_REPORT.md'),
      markdownReport
    );
    
    console.log('📋 CI/CD report generated successfully');
    return report;
  }

  generateMarkdownReport(report) {
    return `# CI/CD Pipeline Report - ${new Date().toLocaleDateString()}

## 📊 Summary
- **Total Duration**: ${report.duration}
- **Total Checks**: ${report.summary.total}
- **Passed**: ${report.summary.passed} ✅
- **Failed**: ${report.summary.failed} ❌
- **Skipped**: ${report.summary.skipped} ⏭️
- **Quality Score**: ${report.quality.score}%

## 🔍 Detailed Results

### 📦 Dependencies
- **Status**: ${this.ciResults.dependencies.status === 'success' ? '✅ Success' : '❌ Failed'}
- **Duration**: ${this.ciResults.dependencies.result?.duration || 'N/A'}
${this.ciResults.dependencies.status === 'failure' ? `- **Error**: ${this.ciResults.dependencies.result?.error || 'Unknown error'}` : ''}

### 🔍 Linting
- **Status**: ${this.ciResults.linting.status === 'success' ? '✅ Success' : '❌ Failed'}
- **Duration**: ${this.ciResults.linting.result?.duration || 'N/A'}
${this.ciResults.linting.result?.issues ? 
  `- **Issues**: ${this.ciResults.linting.result.issues.total} (${this.ciResults.linting.result.issues.errors} errors, ${this.ciResults.linting.result.issues.warnings} warnings)` : 
  ''
}

### 🔍 Type Checking
- **Status**: ${this.ciResults.typeCheck.status === 'success' ? '✅ Success' : '❌ Failed'}
- **Duration**: ${this.ciResults.typeCheck.result?.duration || 'N/A'}
${this.ciResults.typeCheck.result?.issues ? 
  `- **Issues**: ${this.ciResults.typeCheck.result.issues.total} (${this.ciResults.typeCheck.result.issues.errors} errors, ${this.ciResults.typeCheck.result.issues.warnings} warnings)` : 
  ''
}

### 🏗️ Build
- **Status**: ${this.ciResults.build.status === 'success' ? '✅ Success' : '❌ Failed'}
- **Duration**: ${this.ciResults.build.result?.duration || 'N/A'}
${this.ciResults.build.result?.buildSize ? `- **Build Size**: ${this.ciResults.build.result.buildSize}` : ''}

### 🧪 Testing
- **Status**: ${this.ciResults.testing.status === 'success' ? '✅ Success' : this.ciResults.testing.status === 'skipped' ? '⏭️ Skipped' : '❌ Failed'}
- **Duration**: ${this.ciResults.testing.result?.duration || 'N/A'}
${this.ciResults.testing.result?.summary ? 
  `- **Results**: ${this.ciResults.testing.result.summary.passed} passed, ${this.ciResults.testing.result.summary.failed} failed, ${this.ciResults.testing.result.summary.skipped} skipped` : 
  ''
}

### 📊 Quality
- **Status**: ${this.ciResults.quality.status === 'success' ? '✅ Passed' : '❌ Failed'}
- **Score**: ${report.quality.score}%

## 🚨 Pipeline Status

${report.summary.failed > 0 ? 
  `❌ **Pipeline Failed** - ${report.summary.failed} checks failed
  
### Immediate Actions Required:
1. Review failed checks above
2. Fix issues and re-run pipeline
3. Ensure all quality gates pass before deployment` : 
  `✅ **Pipeline Passed** - All checks completed successfully
  
### Ready for:
1. Code review approval
2. Merge to main branch
3. Production deployment`
}

## 📚 Recommendations

${report.quality.score < 80 ? 
  `1. **Improve Quality**: Current quality score (${report.quality.score}%) is below threshold
2. **Fix Issues**: Address all failed checks before proceeding
3. **Code Review**: Implement stricter code review process
4. **Testing**: Improve test coverage and quality` : 
  `1. **Maintain Quality**: Current quality score is excellent
2. **Continue Standards**: Keep up the high quality standards
3. **Monitor Trends**: Track quality metrics over time`
}

## 🔄 Next Steps

1. **Review Results**: Carefully review all check results
2. **Address Issues**: Fix any failed checks
3. **Re-run Pipeline**: Execute pipeline again after fixes
4. **Deploy**: Proceed with deployment if all checks pass

---
*Report generated by Enhanced CI/CD Automation*
`;
  }

  async runPipeline() {
    console.log('🚀 Starting CI/CD pipeline...');
    
    try {
      await this.installDependencies();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runBuild();
      await this.runTests();
      await this.runQualityChecks();
      
      const report = await this.generateCIReport();
      
      console.log('\n🎯 Pipeline Summary:');
      console.log(`Duration: ${report.duration}`);
      console.log(`Total Checks: ${report.summary.total}`);
      console.log(`Passed: ${report.summary.passed} ✅`);
      console.log(`Failed: ${report.summary.failed} ❌`);
      console.log(`Quality Score: ${report.quality.score}%`);
      
      if (report.summary.failed > 0) {
        console.log('\n❌ Pipeline failed. Review failed checks above.');
        process.exit(1);
      } else {
        console.log('\n✅ Pipeline passed successfully! Ready for deployment.');
      }
      
      return report;
      
    } catch (error) {
      console.error('❌ Pipeline failed:', error);
      process.exit(1);
    }
  }
}

// Main execution
async function main() {
  const ci = new EnhancedCICDAutomation();
  
  try {
    await ci.runPipeline();
  } catch (error) {
    console.error('❌ CI/CD automation failed:', error);
    process.exit(1);
  }
}

// Start the CI/CD pipeline
main().catch(console.error);
