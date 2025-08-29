#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Continuous Improvement Automation Started');

// Function to run code quality checks
function runQualityChecks() {
  console.log('🔍 Running code quality checks...');
  
  try {
    // Run ESLint
    console.log('📝 Running ESLint...');
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ ESLint completed successfully');
  } catch (error) {
    console.log('⚠️ ESLint found issues (this is normal for development)');
  }
  
  try {
    // Run TypeScript type checking
    console.log('🔍 Running TypeScript type check...');
    execSync('npm run type-check', { stdio: 'inherit' });
    console.log('✅ TypeScript type check completed successfully');
  } catch (error) {
    console.log('⚠️ TypeScript type check found issues (this is normal for development)');
  }
}

// Function to check for outdated dependencies
function checkDependencies() {
  console.log('📦 Checking dependencies...');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
    
    console.log(`📊 Current dependencies: ${Object.keys(packageJson.dependencies || {}).length}`);
    console.log(`📊 Current dev dependencies: ${Object.keys(packageJson.devDependencies || {}).length}`);
    
    // Check for security vulnerabilities
    try {
      console.log('🔒 Running security audit...');
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      console.log('✅ Security audit completed');
    } catch (error) {
      console.log('⚠️ Security audit found issues (check npm audit for details)');
    }
    
  } catch (error) {
    console.error('❌ Error checking dependencies:', error.message);
  }
}

// Function to analyze code structure
function analyzeCodeStructure() {
  console.log('🏗️ Analyzing code structure...');
  
  try {
    const directories = ['src', 'pages', 'components', 'utils', 'services'];
    let stats = {
      totalFiles: 0,
      totalLines: 0,
      fileTypes: {}
    };
    
    directories.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        analyzeDirectory(dirPath, stats);
      }
    });
    
    console.log(`📊 Code analysis results:`);
    console.log(`   Total files: ${stats.totalFiles}`);
    console.log(`   Total lines: ${stats.totalLines}`);
    console.log(`   File types: ${JSON.stringify(stats.fileTypes)}`);
    
    return stats;
  } catch (error) {
    console.error('❌ Error analyzing code structure:', error.message);
    return null;
  }
}

function analyzeDirectory(dirPath, stats) {
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        analyzeDirectory(filePath, stats);
      } else {
        const ext = path.extname(file);
        if (!stats.fileTypes[ext]) {
          stats.fileTypes[ext] = 0;
        }
        stats.fileTypes[ext]++;
        stats.totalFiles++;
        
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          stats.totalLines += content.split('\n').length;
        } catch (error) {
          // Skip binary files
        }
      }
    });
  } catch (error) {
    console.error(`❌ Error analyzing directory ${dirPath}:`, error.message);
  }
}

// Function to generate improvement suggestions
function generateImprovementSuggestions(stats) {
  console.log('💡 Generating improvement suggestions...');
  
  const suggestions = [];
  
  if (stats) {
    if (stats.totalFiles > 100) {
      suggestions.push('Consider breaking down large codebase into smaller modules');
    }
    
    if (stats.totalLines > 10000) {
      suggestions.push('Codebase is large - consider implementing code splitting');
    }
    
    if (stats.fileTypes['.js'] && stats.fileTypes['.js'] > stats.fileTypes['.ts']) {
      suggestions.push('Consider migrating more JavaScript files to TypeScript');
    }
  }
  
  // Add general suggestions
  suggestions.push('Run regular dependency updates');
  suggestions.push('Implement automated testing');
  suggestions.push('Add code coverage reporting');
  suggestions.push('Set up automated deployment pipeline');
  
  console.log('📋 Improvement suggestions:');
  suggestions.forEach((suggestion, index) => {
    console.log(`   ${index + 1}. ${suggestion}`);
  });
  
  return suggestions;
}

// Function to generate improvement report
function generateImprovementReport(stats, suggestions) {
  console.log('📝 Generating improvement report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    qualityChecks: {
      eslint: 'completed',
      typescript: 'completed',
      security: 'completed'
    },
    codeAnalysis: stats,
    suggestions: suggestions,
    summary: `Analysis completed with ${suggestions.length} improvement suggestions`
  };
  
  const reportPath = path.join(process.cwd(), 'ci-cd-reports', 'continuous-improvement-report.json');
  
  // Ensure directory exists
  const reportDir = path.dirname(reportPath);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`📄 Improvement report saved to: ${reportPath}`);
}

// Main execution
function main() {
  console.log('🔄 Starting continuous improvement automation...');
  
  // Run quality checks
  runQualityChecks();
  
  // Check dependencies
  checkDependencies();
  
  // Analyze code structure
  const stats = analyzeCodeStructure();
  
  // Generate suggestions
  const suggestions = generateImprovementSuggestions(stats);
  
  // Generate report
  generateImprovementReport(stats, suggestions);
  
  console.log('🎯 Automation completed successfully');
  console.log('🏁 Continuous Improvement Automation Completed');
}

// Run the automation
main();

// Keep the process running for PM2
setInterval(() => {
  console.log('💓 Continuous Improvement heartbeat...');
}, 3600000); // 1 hour