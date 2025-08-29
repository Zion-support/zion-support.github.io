#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Starting project health monitor automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

async function runProjectHealthMonitor() {
  try {
    console.log(`🏥 Running project health monitor at ${new Date().toISOString()}`);
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      overallHealth: 'unknown',
      issues: [],
      fixes: [],
      recommendations: []
    };
    
    // 1. Check dependencies health
    console.log('🔍 Checking dependencies health...');
    const dependencyHealth = await checkDependenciesHealth();
    healthReport.dependencies = dependencyHealth;
    
    // 2. Check security vulnerabilities
    console.log('🔍 Checking security vulnerabilities...');
    const securityHealth = await checkSecurityHealth();
    healthReport.security = securityHealth;
    
    // 3. Check code quality
    console.log('🔍 Checking code quality...');
    const codeQualityHealth = await checkCodeQualityHealth();
    healthReport.codeQuality = codeQualityHealth;
    
    // 4. Check build health
    console.log('🔍 Checking build health...');
    const buildHealth = await checkBuildHealth();
    healthReport.build = buildHealth;
    
    // 5. Check performance health
    console.log('🔍 Checking performance health...');
    const performanceHealth = await checkPerformanceHealth();
    healthReport.performance = performanceHealth;
    
    // 6. Calculate overall health score
    healthReport.overallHealth = calculateOverallHealth(healthReport);
    
    // 7. Apply automatic fixes
    console.log('🔧 Applying automatic fixes...');
    const appliedFixes = await applyAutomaticFixes(healthReport);
    healthReport.fixes = appliedFixes;
    
    // 8. Generate recommendations
    healthReport.recommendations = generateRecommendations(healthReport);
    
    // 9. Save comprehensive health report
    const reportPath = path.join(process.cwd(), 'project-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    console.log(`✅ Project health report saved to ${reportPath}`);
    
    // 10. Display summary
    displayHealthSummary(healthReport);
    
    console.log('✅ Project health monitor completed successfully');
    
  } catch (error) {
    console.error('❌ Project health monitor failed:', error.message);
  }
}

async function checkDependenciesHealth() {
  const health = {
    status: 'unknown',
    issues: [],
    outdated: [],
    vulnerabilities: [],
    score: 0
  };
  
  try {
    // Check for outdated packages
    console.log('  📦 Checking for outdated packages...');
    try {
      const outdatedOutput = execSync('npm outdated --json', { stdio: 'pipe' }).toString();
      const outdated = JSON.parse(outdatedOutput);
      health.outdated = Object.keys(outdated);
      if (health.outdated.length > 0) {
        health.issues.push(`Found ${health.outdated.length} outdated packages`);
      }
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      if (error.status === 1) {
        const outdatedOutput = error.stdout?.toString() || '';
        try {
          const outdated = JSON.parse(outdatedOutput);
          health.outdated = Object.keys(outdated);
          if (health.outdated.length > 0) {
            health.issues.push(`Found ${health.outdated.length} outdated packages`);
          }
        } catch (parseError) {
          health.issues.push('Could not parse outdated packages info');
        }
      }
    }
    
    // Check for security vulnerabilities
    console.log('  🔒 Checking for security vulnerabilities...');
    try {
      const auditOutput = execSync('npm audit --json', { stdio: 'pipe' }).toString();
      const audit = JSON.parse(auditOutput);
      health.vulnerabilities = audit.metadata?.vulnerabilities || {};
      
      const totalVulnerabilities = Object.values(health.vulnerabilities).reduce((sum, count) => sum + count, 0);
      if (totalVulnerabilities > 0) {
        health.issues.push(`Found ${totalVulnerabilities} security vulnerabilities`);
      }
    } catch (error) {
      health.issues.push('Could not check security vulnerabilities');
    }
    
    // Check package.json for potential issues
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check for missing scripts
      const requiredScripts = ['build', 'start', 'test'];
      const missingScripts = requiredScripts.filter(script => !packageJson.scripts?.[script]);
      if (missingScripts.length > 0) {
        health.issues.push(`Missing required scripts: ${missingScripts.join(', ')}`);
      }
      
      // Check for peer dependency conflicts
      if (packageJson.peerDependencies) {
        health.issues.push('Peer dependencies detected - may cause conflicts');
      }
    }
    
    // Calculate dependency health score
    health.score = Math.max(0, 100 - (health.outdated.length * 5) - (Object.values(health.vulnerabilities).reduce((sum, count) => sum + count, 0) * 10));
    
    if (health.score >= 80) health.status = 'healthy';
    else if (health.score >= 60) health.status = 'warning';
    else health.status = 'critical';
    
  } catch (error) {
    health.issues.push(`Dependency health check failed: ${error.message}`);
    health.status = 'error';
  }
  
  return health;
}

async function checkSecurityHealth() {
  const health = {
    status: 'unknown',
    issues: [],
    score: 0
  };
  
  try {
    // Check for sensitive files
    console.log('  🔐 Checking for sensitive files...');
    const sensitivePatterns = [
      '.env',
      '.env.local',
      '.env.production',
      'secrets.json',
      'config.json',
      'credentials.json'
    ];
    
    for (const pattern of sensitivePatterns) {
      if (fs.existsSync(pattern)) {
        health.issues.push(`Sensitive file found: ${pattern}`);
      }
    }
    
    // Check for hardcoded secrets
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
      
      for (const file of allFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for hardcoded API keys, passwords, etc.
          const secretPatterns = [
            /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
            /password\s*[:=]\s*['"][^'"]+['"]/gi,
            /secret\s*[:=]\s*['"][^'"]+['"]/gi,
            /token\s*[:=]\s*['"][^'"]+['"]/gi
          ];
          
          for (const pattern of secretPatterns) {
            if (pattern.test(content)) {
              health.issues.push(`Potential hardcoded secret in ${file}`);
              break;
            }
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
    }
    
    // Check for known vulnerable dependencies
    try {
      const auditOutput = execSync('npm audit --json', { stdio: 'pipe' }).toString();
      const audit = JSON.parse(auditOutput);
      
      if (audit.metadata?.vulnerabilities) {
        const criticalVulns = audit.metadata.vulnerabilities.critical || 0;
        const highVulns = audit.metadata.vulnerabilities.high || 0;
        
        if (criticalVulns > 0) {
          health.issues.push(`${criticalVulns} critical security vulnerabilities found`);
        }
        if (highVulns > 0) {
          health.issues.push(`${highVulns} high security vulnerabilities found`);
        }
      }
    } catch (error) {
      // npm audit may fail if there are vulnerabilities
    }
    
    // Calculate security score
    health.score = Math.max(0, 100 - (health.issues.length * 15));
    
    if (health.score >= 80) health.status = 'secure';
    else if (health.score >= 60) health.status = 'warning';
    else health.status = 'vulnerable';
    
  } catch (error) {
    health.issues.push(`Security health check failed: ${error.message}`);
    health.status = 'error';
  }
  
  return health;
}

async function checkCodeQualityHealth() {
  const health = {
    status: 'unknown',
    issues: [],
    score: 0
  };
  
  try {
    // Check for TypeScript errors
    console.log('  📝 Checking TypeScript errors...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('    ✅ No TypeScript errors found');
    } catch (error) {
      const errorOutput = error.message;
      const errorCount = (errorOutput.match(/error TS\d+:/g) || []).length;
      health.issues.push(`${errorCount} TypeScript errors found`);
    }
    
    // Check for linting issues
    console.log('  🧹 Checking linting issues...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('    ✅ No linting issues found');
    } catch (error) {
      health.issues.push('Linting issues found');
    }
    
    // Check for large files
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
      
      for (const file of allFiles) {
        try {
          const stats = fs.statSync(file);
          const sizeInKB = stats.size / 1024;
          
          if (sizeInKB > 100) {
            health.issues.push(`Large file detected: ${file} (${sizeInKB.toFixed(1)}KB)`);
          }
        } catch (err) {
          // Skip files that can't be accessed
        }
      }
    }
    
    // Check for code duplication patterns
    console.log('  🔍 Checking for code duplication...');
    const duplicationIssues = checkCodeDuplication();
    health.issues.push(...duplicationIssues);
    
    // Calculate code quality score
    health.score = Math.max(0, 100 - (health.issues.length * 10));
    
    if (health.score >= 80) health.status = 'excellent';
    else if (health.score >= 60) health.status = 'good';
    else health.status = 'needs_improvement';
    
  } catch (error) {
    health.issues.push(`Code quality check failed: ${error.message}`);
    health.status = 'error';
  }
  
  return health;
}

async function checkBuildHealth() {
  const health = {
    status: 'unknown',
    issues: [],
    score: 0
  };
  
  try {
    // Check if build script exists
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts?.build) {
        health.issues.push('No build script found');
      }
    }
    
    // Try to run build
    console.log('  🏗️ Testing build process...');
    try {
      execSync('npm run build', { stdio: 'pipe' });
      console.log('    ✅ Build successful');
      health.score += 50;
    } catch (error) {
      health.issues.push('Build failed');
      health.score -= 50;
    }
    
    // Check for build artifacts
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const buildFiles = fs.readdirSync(distPath);
      if (buildFiles.length > 0) {
        health.score += 30;
      } else {
        health.issues.push('Build directory is empty');
        health.score -= 30;
      }
    } else {
      health.issues.push('Build directory not found');
      health.score -= 30;
    }
    
    // Check for build configuration files
    const buildConfigs = ['vite.config.ts', 'webpack.config.js', 'rollup.config.js', 'tsconfig.json'];
    for (const config of buildConfigs) {
      if (fs.existsSync(config)) {
        health.score += 5;
      }
    }
    
    // Normalize score
    health.score = Math.max(0, Math.min(100, health.score));
    
    if (health.score >= 80) health.status = 'healthy';
    else if (health.score >= 60) health.status = 'warning';
    else health.status = 'failing';
    
  } catch (error) {
    health.issues.push(`Build health check failed: ${error.message}`);
    health.status = 'error';
  }
  
  return health;
}

async function checkPerformanceHealth() {
  const health = {
    status: 'unknown',
    issues: [],
    score: 0
  };
  
  try {
    // Check bundle size
    console.log('  📊 Checking bundle size...');
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const totalSize = calculateDirectorySize(distPath);
      const totalSizeMB = totalSize / (1024 * 1024);
      
      if (totalSizeMB > 10) {
        health.issues.push(`Large bundle size: ${totalSizeMB.toFixed(2)}MB`);
        health.score -= 20;
      } else if (totalSizeMB > 5) {
        health.issues.push(`Moderate bundle size: ${totalSizeMB.toFixed(2)}MB`);
        health.score -= 10;
      } else {
        health.score += 20;
      }
    }
    
    // Check for performance anti-patterns
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
      
      for (const file of allFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common performance issues
          if (content.includes('document.querySelectorAll') && !content.includes('useMemo') && !content.includes('useCallback')) {
            health.issues.push(`Potential performance issue in ${file}: DOM queries without memoization`);
            health.score -= 5;
          }
          
          if (content.includes('setInterval') || content.includes('setTimeout')) {
            health.issues.push(`Timer usage detected in ${file}: ensure proper cleanup`);
            health.score -= 5;
          }
          
        } catch (err) {
          // Skip files that can't be read
        }
      }
    }
    
    // Check for lazy loading
    const lazyLoadingPatterns = ['React.lazy', 'lazy(() => import', 'dynamic import'];
    let lazyLoadingFound = false;
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (lazyLoadingPatterns.some(pattern => content.includes(pattern))) {
          lazyLoadingFound = true;
          break;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
    
    if (lazyLoadingFound) {
      health.score += 15;
    } else {
      health.issues.push('No lazy loading detected - consider implementing for better performance');
      health.score -= 15;
    }
    
    // Normalize score
    health.score = Math.max(0, Math.min(100, health.score));
    
    if (health.score >= 80) health.status = 'excellent';
    else if (health.score >= 60) health.status = 'good';
    else health.status = 'needs_optimization';
    
  } catch (error) {
    health.issues.push(`Performance health check failed: ${error.message}`);
    health.status = 'error';
  }
  
  return health;
}

function checkCodeDuplication() {
  const issues = [];
  
  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return issues;
    
    const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
    const fileContents = new Map();
    
    // Read all file contents
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        fileContents.set(file, content);
      } catch (err) {
        // Skip files that can't be read
      }
    }
    
    // Check for duplicate code blocks
    const files = Array.from(fileContents.keys());
    for (let i = 0; i < files.length; i++) {
      for (let j = i + 1; j < files.length; j++) {
        const file1 = files[i];
        const file2 = files[j];
        const content1 = fileContents.get(file1);
        const content2 = fileContents.get(file2);
        
        // Check for significant code duplication (more than 10 lines)
        const lines1 = content1.split('\n');
        const lines2 = content2.split('\n');
        
        for (let k = 0; k < lines1.length - 10; k++) {
          const block1 = lines1.slice(k, k + 10).join('\n');
          if (content2.includes(block1) && block1.trim().length > 50) {
            issues.push(`Potential code duplication between ${file1} and ${file2}`);
            break;
          }
        }
      }
    }
  } catch (error) {
    issues.push(`Code duplication check failed: ${error.message}`);
  }
  
  return issues;
}

function calculateDirectorySize(dirPath) {
  let totalSize = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        totalSize += calculateDirectorySize(fullPath);
      } else {
        totalSize += stat.size;
      }
    }
  } catch (error) {
    // Skip directories that can't be accessed
  }
  
  return totalSize;
}

function calculateOverallHealth(healthReport) {
  const scores = [
    healthReport.dependencies?.score || 0,
    healthReport.security?.score || 0,
    healthReport.codeQuality?.score || 0,
    healthReport.build?.score || 0,
    healthReport.performance?.score || 0
  ];
  
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  
  if (averageScore >= 80) return 'excellent';
  else if (averageScore >= 60) return 'good';
  else if (averageScore >= 40) return 'fair';
  else return 'poor';
}

async function applyAutomaticFixes(healthReport) {
  const fixes = [];
  
  try {
    // Fix outdated dependencies
    if (healthReport.dependencies?.outdated?.length > 0) {
      console.log('  🔧 Attempting to update outdated dependencies...');
      try {
        execSync('npm update', { stdio: 'pipe' });
        fixes.push('Updated outdated dependencies');
      } catch (error) {
        console.log('    ⚠️ Could not update dependencies automatically');
      }
    }
    
    // Fix security vulnerabilities
    if (healthReport.security?.issues?.some(issue => issue.includes('vulnerability'))) {
      console.log('  🔧 Attempting to fix security vulnerabilities...');
      try {
        execSync('npm audit fix', { stdio: 'pipe' });
        fixes.push('Applied security vulnerability fixes');
      } catch (error) {
        console.log('    ⚠️ Could not fix security vulnerabilities automatically');
      }
    }
    
    // Fix TypeScript errors
    if (healthReport.codeQuality?.issues?.some(issue => issue.includes('TypeScript'))) {
      console.log('  🔧 Attempting to fix TypeScript errors...');
      try {
        // Run the TypeScript error fixer
        const typescriptFixerPath = path.join(process.cwd(), 'scripts/automation/typescript-error-fixer.cjs');
        if (fs.existsSync(typescriptFixerPath)) {
          execSync(`node ${typescriptFixerPath}`, { stdio: 'pipe' });
          fixes.push('Applied TypeScript error fixes');
        }
      } catch (error) {
        console.log('    ⚠️ Could not fix TypeScript errors automatically');
      }
    }
    
  } catch (error) {
    console.log(`  ⚠️ Automatic fixes failed: ${error.message}`);
  }
  
  return fixes;
}

function generateRecommendations(healthReport) {
  const recommendations = [];
  
  // Dependencies recommendations
  if (healthReport.dependencies?.status === 'critical') {
    recommendations.push('Update outdated packages and fix security vulnerabilities immediately');
  }
  
  // Security recommendations
  if (healthReport.security?.status === 'vulnerable') {
    recommendations.push('Address security vulnerabilities as a top priority');
    recommendations.push('Review and remove any hardcoded secrets');
  }
  
  // Code quality recommendations
  if (healthReport.codeQuality?.status === 'needs_improvement') {
    recommendations.push('Fix TypeScript errors and linting issues');
    recommendations.push('Consider implementing automated code quality checks');
  }
  
  // Build recommendations
  if (healthReport.build?.status === 'failing') {
    recommendations.push('Fix build configuration and ensure all dependencies are properly installed');
  }
  
  // Performance recommendations
  if (healthReport.performance?.status === 'needs_optimization') {
    recommendations.push('Implement lazy loading for better performance');
    recommendations.push('Optimize bundle size and remove unused dependencies');
  }
  
  // General recommendations
  if (healthReport.overallHealth === 'poor') {
    recommendations.push('Consider implementing a comprehensive code review process');
    recommendations.push('Set up automated testing and quality gates');
  }
  
  return recommendations;
}

function displayHealthSummary(healthReport) {
  console.log('\n📊 PROJECT HEALTH SUMMARY');
  console.log('========================');
  console.log(`Overall Health: ${healthReport.overallHealth.toUpperCase()}`);
  console.log(`Timestamp: ${healthReport.timestamp}`);
  
  console.log('\n🔍 DETAILED BREAKDOWN:');
  console.log(`Dependencies: ${healthReport.dependencies?.status} (Score: ${healthReport.dependencies?.score})`);
  console.log(`Security: ${healthReport.security?.status} (Score: ${healthReport.security?.score})`);
  console.log(`Code Quality: ${healthReport.codeQuality?.status} (Score: ${healthReport.codeQuality?.score})`);
  console.log(`Build: ${healthReport.build?.status} (Score: ${healthReport.build?.score})`);
  console.log(`Performance: ${healthReport.performance?.status} (Score: ${healthReport.performance?.score})`);
  
  if (healthReport.fixes?.length > 0) {
    console.log('\n🔧 AUTOMATIC FIXES APPLIED:');
    healthReport.fixes.forEach(fix => console.log(`  ✅ ${fix}`));
  }
  
  if (healthReport.recommendations?.length > 0) {
    console.log('\n💡 RECOMMENDATIONS:');
    healthReport.recommendations.forEach(rec => console.log(`  📝 ${rec}`));
  }
  
  console.log('\n📈 NEXT STEPS:');
  if (healthReport.overallHealth === 'excellent') {
    console.log('  🎉 Project is in excellent health! Keep up the good work.');
  } else if (healthReport.overallHealth === 'good') {
    console.log('  👍 Project is in good health with minor areas for improvement.');
  } else {
    console.log('  ⚠️ Project needs attention. Focus on the areas with lowest scores.');
  }
}

function getAllFiles(dirPath, extensions) {
  const files = [];
  
  function traverse(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  traverse(dirPath);
  return files;
}

// Main execution
async function main() {
  console.log('🚀 Starting project health monitor automation...');
  
  // Run immediately
  await runProjectHealthMonitor();
  
  // Set up continuous execution
  setInterval(async () => {
    await runProjectHealthMonitor();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Project health monitor will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Project health monitor automation stopped');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Project health monitor automation stopped');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Fatal error in project health monitor:', error);
  process.exit(1);
});
