#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('✅ Starting continuous quality checks automation...');

// Get automation interval from environment variable (default: 3 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours

async function runQualityChecks() {
  try {
    console.log(`✅ Running quality checks at ${new Date().toISOString()}`);
    
    // Install dependencies if needed
    console.log('📦 Installing dependencies...');
    try {
      execSync('npm ci', { stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️  Dependency installation failed but continuing...');
    }
    
    // Run linting
    console.log('🔍 Running linting...');
    let lintResults = { issues: 0, details: '' };
    
    try {
      const lintOutput = execSync('npm run lint', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      lintResults.details = lintOutput;
      console.log('✅ Linting completed successfully');
    } catch (error) {
      lintResults.issues = 1;
      lintResults.details = error.message;
      console.log('⚠️  Linting found issues');
    }
    
    // Run type checking
    console.log('🔍 Running type checking...');
    let typeCheckResults = { issues: 0, details: '' };
    
    try {
      const typeCheckOutput = execSync('npm run type-check', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      typeCheckResults.details = typeCheckOutput;
      console.log('✅ Type checking completed successfully');
    } catch (error) {
      typeCheckResults.issues = 1;
      typeCheckResults.details = error.message;
      console.log('⚠️  Type checking found issues');
    }
    
    // Build project
    console.log('🏗️ Building project...');
    let buildResults = { success: false, details: '' };
    
    try {
      execSync('npm run build', { stdio: 'inherit' });
      buildResults.success = true;
      buildResults.details = 'Build completed successfully';
      console.log('✅ Build completed successfully');
    } catch (error) {
      buildResults.details = error.message;
      console.log('❌ Build failed');
    }
    
    // Check code coverage if available
    console.log('📊 Checking code coverage...');
    let coverageResults = { available: false, coverage: 0, details: '' };
    
    try {
      const coverageOutput = execSync('npm run test:coverage', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      coverageResults.available = true;
      coverageResults.details = coverageOutput;
      
      // Extract coverage percentage if available
      const coverageMatch = coverageOutput.match(/All files\s+\|\s+(\d+\.?\d*)%/);
      if (coverageMatch) {
        coverageResults.coverage = parseFloat(coverageMatch[1]);
      }
      
      console.log(`✅ Code coverage: ${coverageResults.coverage}%`);
    } catch (error) {
      console.log('⚠️  Code coverage not available or failed');
    }
    
    // Check for common code quality issues
    console.log('🔍 Checking for code quality issues...');
    const qualityIssues = findQualityIssues('./src');
    
    // Check file sizes and complexity
    console.log('📏 Analyzing file sizes and complexity...');
    const fileAnalysis = analyzeFileComplexity('./src');
    
    // Generate quality report
    console.log('📊 Generating quality checks report...');
    const report = {
      timestamp: new Date().toISOString(),
      linting: lintResults,
      typeChecking: typeCheckResults,
      build: buildResults,
      coverage: coverageResults,
      qualityIssues: qualityIssues.length,
      fileAnalysis: fileAnalysis,
      summary: 'Quality checks completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (lintResults.issues > 0) {
      report.recommendations.push('Fix linting issues to improve code quality');
    }
    
    if (typeCheckResults.issues > 0) {
      report.recommendations.push('Resolve TypeScript type checking issues');
    }
    
    if (!buildResults.success) {
      report.recommendations.push('Fix build issues to ensure project compiles');
    }
    
    if (coverageResults.available && coverageResults.coverage < 80) {
      report.recommendations.push('Improve test coverage to reach at least 80%');
    }
    
    if (qualityIssues.length > 0) {
      report.recommendations.push('Address code quality issues found in source code');
    }
    
    if (fileAnalysis.largeFiles.length > 0) {
      report.recommendations.push('Consider splitting large files for better maintainability');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('Code quality is within acceptable standards');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'quality-checks-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Quality checks report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Quality Checks Summary:`);
    console.log(`  - Linting: ${lintResults.issues > 0 ? '❌ Issues found' : '✅ Passed'}`);
    console.log(`  - Type checking: ${typeCheckResults.issues > 0 ? '❌ Issues found' : '✅ Passed'}`);
    console.log(`  - Build: ${buildResults.success ? '✅ Success' : '❌ Failed'}`);
    console.log(`  - Coverage: ${coverageResults.available ? coverageResults.coverage + '%' : 'N/A'}`);
    console.log(`  - Quality issues: ${qualityIssues.length}`);
    console.log(`  - Large files: ${fileAnalysis.largeFiles.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous quality checks completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous quality checks failed:', error.message);
  }
}

function findQualityIssues(srcPath) {
  const issues = [];
  
  if (!fs.existsSync(srcPath)) {
    return issues;
  }
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for common quality issues
        const patterns = [
          { pattern: /TODO:/g, issue: 'TODO comment found' },
          { pattern: /FIXME:/g, issue: 'FIXME comment found' },
          { pattern: /console\.log\(/g, issue: 'Console.log in production code' },
          { pattern: /debugger;/g, issue: 'Debugger statement found' },
          { pattern: /var\s+\w+/g, issue: 'var declaration found (use const/let)' },
          { pattern: /function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/g, issue: 'Function declaration found (consider arrow function)' }
        ];
        
        patterns.forEach(({ pattern, issue }) => {
          const matches = content.match(pattern);
          if (matches) {
            issues.push({
              file: filePath.replace(srcPath, ''),
              issue,
              count: matches.length
            });
          }
        });
      }
    }
  }
  
  scanDirectory(srcPath);
  return issues;
}

function analyzeFileComplexity(srcPath) {
  const analysis = {
    totalFiles: 0,
    largeFiles: [],
    totalLines: 0
  };
  
  if (!fs.existsSync(srcPath)) {
    return analysis;
  }
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n').length;
        
        analysis.totalFiles++;
        analysis.totalLines += lines;
        
        if (lines > 200) { // Files with more than 200 lines
          analysis.largeFiles.push({
            file: filePath.replace(srcPath, ''),
            lines: lines
          });
        }
      }
    }
  }
  
  scanDirectory(srcPath);
  
  analysis.averageLinesPerFile = analysis.totalFiles > 0 ? 
    (analysis.totalLines / analysis.totalFiles).toFixed(2) : 0;
  
  return analysis;
}

// Main execution loop
async function main() {
  console.log(`🚀 Quality checks automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runQualityChecks();
  
  // Set up continuous execution
  setInterval(async () => {
    await runQualityChecks();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Quality checks automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Quality checks automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Quality checks automation failed to start:', error);
  process.exit(1);
});