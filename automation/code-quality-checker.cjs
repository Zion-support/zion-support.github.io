#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Code Quality Checker Automation\n');

const qualityMetrics = {
  totalFiles: 0,
  issues: [],
  coverage: 0,
  complexity: 0,
  maintainability: 0
};

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function checkCodeStyle() {
  log('Checking code style with ESLint...');
  
  try {
    execSync('npx eslint src/ pages/ components/ --format=json --output-file=eslint-report.json', { stdio: 'pipe' });
    log('ESLint check completed');
    
    if (fs.existsSync('eslint-report.json')) {
      const report = JSON.parse(fs.readFileSync('eslint-report.json', 'utf8'));
      qualityMetrics.issues.push(...report);
    }
  } catch (error) {
    log('ESLint check failed', 'warning');
  }
}

function checkTypeScript() {
  log('Checking TypeScript types...');
  
  try {
    execSync('npx tsc --noEmit --pretty', { stdio: 'pipe' });
    log('TypeScript check completed');
  } catch (error) {
    log('TypeScript check found issues', 'warning');
    qualityMetrics.issues.push({
      type: 'typescript',
      message: 'Type checking failed',
      severity: 'error'
    });
  }
}

function runTests() {
  log('Running tests for code quality...');
  
  try {
    execSync('npm test -- --coverage --watchAll=false', { stdio: 'pipe' });
    log('Tests completed');
    
    // Try to extract coverage from coverage report
    if (fs.existsSync('coverage/coverage-summary.json')) {
      const coverage = JSON.parse(fs.readFileSync('coverage/coverage-summary.json', 'utf8'));
      qualityMetrics.coverage = coverage.total.lines.pct || 0;
    }
  } catch (error) {
    log('Tests failed', 'warning');
  }
}

function checkBundleSize() {
  log('Checking bundle size...');
  
  try {
    if (!fs.existsSync('.next')) {
      execSync('npm run build', { stdio: 'pipe' });
    }
    
    const nextDir = '.next/static';
    if (fs.existsSync(nextDir)) {
      const sizeOutput = execSync(`find ${nextDir} -name "*.js" -exec stat -f%z {} + | awk '{sum+=$1} END {print sum}'`, { encoding: 'utf8' });
      const totalSize = parseInt(sizeOutput.trim()) || 0;
      
      if (totalSize > 2 * 1024 * 1024) { // 2MB
        qualityMetrics.issues.push({
          type: 'bundle-size',
          message: `Bundle size ${(totalSize / 1024 / 1024).toFixed(2)}MB exceeds 2MB limit`,
          severity: 'warning'
        });
      }
    }
  } catch (error) {
    log('Bundle size check failed', 'warning');
  }
}

function checkDependencies() {
  log('Checking dependencies...');
  
  try {
    execSync('npm outdated', { stdio: 'pipe' });
    log('Dependencies check completed');
  } catch (error) {
    log('Outdated dependencies found', 'warning');
    qualityMetrics.issues.push({
      type: 'dependencies',
      message: 'Outdated dependencies found',
      severity: 'warning'
    });
  }
}

function generateQualityReport() {
  log('Generating code quality report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    metrics: {
      totalFiles: qualityMetrics.totalFiles,
      coverage: qualityMetrics.coverage,
      issuesCount: qualityMetrics.issues.length,
      issues: qualityMetrics.issues
    },
    recommendations: generateRecommendations()
  };
  
  fs.writeFileSync('quality-report.json', JSON.stringify(report, null, 2));
  log('Quality report saved to quality-report.json');
  
  console.log('\n📊 Code Quality Summary:');
  console.log(`Coverage: ${qualityMetrics.coverage}%`);
  console.log(`Issues Found: ${qualityMetrics.issues.length}`);
  console.log(`Total Files: ${qualityMetrics.totalFiles}`);
  
  return report;
}

function generateRecommendations() {
  const recommendations = [];
  
  if (qualityMetrics.coverage < 80) {
    recommendations.push('Improve test coverage to at least 80%');
  }
  
  if (qualityMetrics.issues.length > 10) {
    recommendations.push('Address code quality issues');
  }
  
  if (qualityMetrics.issues.some(issue => issue.type === 'bundle-size')) {
    recommendations.push('Optimize bundle size');
  }
  
  if (qualityMetrics.issues.some(issue => issue.type === 'dependencies')) {
    recommendations.push('Update outdated dependencies');
  }
  
  return recommendations;
}

async function main() {
  try {
    log('Starting code quality checking automation...');
    
    checkCodeStyle();
    checkTypeScript();
    runTests();
    checkBundleSize();
    checkDependencies();
    
    const report = generateQualityReport();
    
    if (qualityMetrics.issues.length === 0) {
      log('Code quality check completed - no issues found!');
      process.exit(0);
    } else {
      log('Code quality check completed with issues found', 'warning');
      process.exit(1);
    }
    
  } catch (error) {
    log(`Code quality checking failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, qualityMetrics };