#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path'); // Added missing import for path

console.log('✨ Starting Quality Checks Automation...');

// Function to run linting
function runLinting() {
  try {
    console.log('🧹 Running ESLint...');
    const result = execSync('npm run lint', { encoding: 'utf8' });
    return {
      success: true,
      output: result,
      issues: 0
    };
  } catch (error) {
    // ESLint returns non-zero exit code when issues are found
    const output = error.stdout || error.stderr || '';
    const issues = (output.match(/error|warning/gi) || []).length;
    
    return {
      success: false,
      output: output,
      issues: issues
    };
  }
}

// Function to run TypeScript type checking
function runTypeChecking() {
  try {
    console.log('🔍 Running TypeScript type check...');
    const result = execSync('npm run type-check', { encoding: 'utf8' });
    return {
      success: true,
      output: result,
      issues: 0
    };
  } catch (error) {
    const output = error.stdout || error.stderr || '';
    const issues = (output.match(/error|warning/gi) || []).length;
    
    return {
      success: false,
      output: output,
      issues: issues
    };
  }
}

// Function to check code formatting
function checkCodeFormatting() {
  try {
    console.log('🎨 Checking code formatting...');
    
    // Check if Prettier is configured
    if (fs.existsSync('./.prettierrc') || fs.existsSync('./.prettierrc.json')) {
      const result = execSync('npx prettier --check .', { encoding: 'utf8' });
      return {
        success: true,
        output: result,
        issues: 0
      };
    } else {
      return {
        success: true,
        output: 'Prettier not configured',
        issues: 0
      };
    }
  } catch (error) {
    const output = error.stdout || error.stderr || '';
    const issues = (output.match(/warn|error/gi) || []).length;
    
    return {
      success: false,
      output: output,
      issues: issues
    };
  }
}

// Function to check for common code smells
function checkCodeSmells() {
  try {
    console.log('👃 Checking for code smells...');
    
    const codeSmells = [];
    
    // Check for TODO comments
    const todoPattern = /TODO|FIXME|HACK|XXX/gi;
    const files = getAllSourceFiles('./src');
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const matches = content.match(todoPattern);
      
      if (matches) {
        const lines = content.split('\n');
        matches.forEach(match => {
          lines.forEach((line, index) => {
            if (line.includes(match)) {
              codeSmells.push({
                file: file,
                line: index + 1,
                type: 'TODO',
                content: line.trim()
              });
            }
          });
        });
      }
    }
    
    return {
      success: true,
      codeSmells: codeSmells,
      count: codeSmells.length
    };
  } catch (error) {
    return {
      success: false,
      codeSmells: [],
      count: 0,
      error: error.message
    };
  }
}

// Function to get all source files
function getAllSourceFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...getAllSourceFiles(fullPath));
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Directory might not exist
  }
  
  return files;
}

// Function to check test coverage
function checkTestCoverage() {
  try {
    console.log('🧪 Checking test coverage...');
    
    if (fs.existsSync('./coverage')) {
      const coverageDir = fs.readdirSync('./coverage');
      const lcovFile = coverageDir.find(file => file.endsWith('.lcov'));
      
      if (lcovFile) {
        const lcovContent = fs.readFileSync(`./coverage/${lcovFile}`, 'utf8');
        const lines = lcovContent.split('\n');
        
        let totalLines = 0;
        let coveredLines = 0;
        
        lines.forEach(line => {
          if (line.startsWith('SF:')) {
            // Source file
          } else if (line.startsWith('LF:')) {
            // Lines found
            totalLines += parseInt(line.split(':')[1]);
          } else if (line.startsWith('LH:')) {
            // Lines hit
            coveredLines += parseInt(line.split(':')[1]);
          }
        });
        
        const coverage = totalLines > 0 ? Math.round((coveredLines / totalLines) * 100) : 0;
        
        return {
          success: true,
          totalLines: totalLines,
          coveredLines: coveredLines,
          coverage: coverage
        };
      }
    }
    
    return {
      success: false,
      message: 'No coverage data found'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Function to check for security issues
function checkSecurityIssues() {
  try {
    console.log('🔒 Checking for security issues...');
    
    const result = execSync('npm audit --json', { encoding: 'utf8' });
    const auditData = JSON.parse(result);
    
    if (auditData.metadata && auditData.metadata.vulnerabilities) {
      const vulns = auditData.metadata.vulnerabilities;
      return {
        success: true,
        vulnerabilities: vulns,
        total: vulns.low + vulns.moderate + vulns.high + vulns.critical
      };
    }
    
    return {
      success: true,
      vulnerabilities: { low: 0, moderate: 0, high: 0, critical: 0 },
      total: 0
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Function to generate quality report
function generateQualityReport(linting, typeChecking, formatting, codeSmells, testCoverage, security) {
  const report = {
    timestamp: new Date().toISOString(),
    linting: linting,
    typeChecking: typeChecking,
    formatting: formatting,
    codeSmells: codeSmells,
    testCoverage: testCoverage,
    security: security,
    summary: {
      totalIssues: 0,
      lintingIssues: linting.issues || 0,
      typeCheckingIssues: typeChecking.issues || 0,
      formattingIssues: formatting.issues || 0,
      codeSmellsCount: codeSmells.count || 0,
      securityVulnerabilities: security.total || 0,
      testCoveragePercent: testCoverage.coverage || 0
    }
  };
  
  report.summary.totalIssues = 
    report.summary.lintingIssues + 
    report.summary.typeCheckingIssues + 
    report.summary.formattingIssues + 
    report.summary.codeSmellsCount + 
    report.summary.securityVulnerabilities;
  
  return report;
}

// Function to provide quality recommendations
function provideQualityRecommendations(report) {
  console.log('\n📋 Quality Improvement Recommendations:');
  
  if (report.summary.lintingIssues > 0) {
    console.log('\n🧹 Linting issues found:');
    console.log(`Total: ${report.summary.lintingIssues}`);
    console.log('Recommendations:');
    console.log('1. Fix ESLint errors and warnings');
    console.log('2. Consider using --fix flag for auto-fixable issues');
    console.log('3. Review ESLint configuration');
  }
  
  if (report.summary.typeCheckingIssues > 0) {
    console.log('\n🔍 TypeScript issues found:');
    console.log(`Total: ${report.summary.typeCheckingIssues}`);
    console.log('Recommendations:');
    console.log('1. Fix type errors and warnings');
    console.log('2. Add proper type annotations');
    console.log('3. Review tsconfig.json configuration');
  }
  
  if (report.summary.formattingIssues > 0) {
    console.log('\n🎨 Formatting issues found:');
    console.log(`Total: ${report.summary.formattingIssues}`);
    console.log('Recommendations:');
    console.log('1. Run: npx prettier --write .');
    console.log('2. Configure Prettier in your editor');
    console.log('3. Use pre-commit hooks for formatting');
  }
  
  if (report.summary.codeSmellsCount > 0) {
    console.log('\n👃 Code smells detected:');
    console.log(`Total: ${report.summary.codeSmellsCount}`);
    console.log('Recommendations:');
    console.log('1. Address TODO/FIXME comments');
    console.log('2. Refactor complex code');
    console.log('3. Remove dead code');
  }
  
  if (report.summary.securityVulnerabilities > 0) {
    console.log('\n🔒 Security vulnerabilities found:');
    console.log(`Total: ${report.summary.securityVulnerabilities}`);
    console.log('Recommendations:');
    console.log('1. Run: npm audit fix');
    console.log('2. Update vulnerable packages');
    console.log('3. Review security advisories');
  }
  
  if (report.summary.testCoveragePercent < 80) {
    console.log('\n🧪 Test coverage can be improved:');
    console.log(`Current coverage: ${report.summary.testCoveragePercent}%`);
    console.log('Recommendations:');
    console.log('1. Add more unit tests');
    console.log('2. Test edge cases and error scenarios');
    console.log('3. Aim for at least 80% coverage');
  }
  
  if (report.summary.totalIssues === 0 && report.summary.testCoveragePercent >= 80) {
    console.log('\n✅ Excellent code quality! All checks passed.');
  }
  
  console.log('\n📚 General quality tips:');
  console.log('1. Run quality checks before committing');
  console.log('2. Use pre-commit hooks for automation');
  console.log('3. Regular code reviews and refactoring');
  console.log('4. Follow coding standards and best practices');
}

// Main function
async function runQualityChecks() {
  try {
    console.log('🚀 Starting comprehensive quality checks...');
    
    // Run various quality checks
    const linting = runLinting();
    const typeChecking = runTypeChecking();
    const formatting = checkCodeFormatting();
    const codeSmells = checkCodeSmells();
    const testCoverage = checkTestCoverage();
    const security = checkSecurityIssues();
    
    // Generate comprehensive report
    const qualityReport = generateQualityReport(
      linting,
      typeChecking,
      formatting,
      codeSmells,
      testCoverage,
      security
    );
    
    // Save detailed report
    fs.writeFileSync('./quality-checks-report.json', JSON.stringify(qualityReport, null, 2));
    
    // Display summary
    console.log('\n📊 Quality Checks Summary:');
    console.log(`Total issues: ${qualityReport.summary.totalIssues}`);
    console.log(`Linting issues: ${qualityReport.summary.lintingIssues}`);
    console.log(`Type checking issues: ${qualityReport.summary.typeCheckingIssues}`);
    console.log(`Formatting issues: ${qualityReport.summary.formattingIssues}`);
    console.log(`Code smells: ${qualityReport.summary.codeSmellsCount}`);
    console.log(`Security vulnerabilities: ${qualityReport.summary.securityVulnerabilities}`);
    console.log(`Test coverage: ${qualityReport.summary.testCoveragePercent}%`);
    
    // Provide recommendations
    provideQualityRecommendations(qualityReport);
    
    console.log('\n✨ Quality Checks Automation completed successfully!');
    console.log('📄 Detailed report saved to: quality-checks-report.json');
    
  } catch (error) {
    console.error('❌ Error in Quality Checks Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runQualityChecks();